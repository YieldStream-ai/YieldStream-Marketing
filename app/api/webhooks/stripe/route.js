import { NextResponse } from 'next/server';
import { getStripe } from '../../../lib/stripe';
import { randomBytes } from 'crypto';

export async function POST(request) {
  const stripe = getStripe();
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.warn('STRIPE_WEBHOOK_SECRET not set — skipping webhook verification');
    return NextResponse.json({ received: true });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  switch (event.type) {
    case 'setup_intent.succeeded': {
      const setupIntent = event.data.object;
      const customerId = setupIntent.customer;

      // Look up customer email and subscription details
      const customer = await stripe.customers.retrieve(customerId);
      const subscriptions = await stripe.subscriptions.list({
        customer: customerId,
        limit: 1,
      });
      const subscription = subscriptions.data[0];

      if (customer.email && subscription) {
        const token = randomBytes(32).toString('hex');
        const expiresAt = new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString(); // 72 hours

        // Store token in Supabase
        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

        if (supabaseUrl && supabaseKey) {
          await fetch(`${supabaseUrl}/rest/v1/signup_tokens`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              apikey: supabaseKey,
              Authorization: `Bearer ${supabaseKey}`,
              Prefer: 'return=minimal',
            },
            body: JSON.stringify({
              token,
              email: customer.email,
              stripe_customer_id: customerId,
              stripe_subscription_id: subscription.id,
              plan: subscription.metadata?.plan || null,
              interval: subscription.metadata?.interval || null,
              expires_at: expiresAt,
            }),
          });
        }

        // Send signup link via Resend
        const resendKey = process.env.RESEND_API_KEY;
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.yieldstream.ai';

        if (resendKey) {
          const signupLink = `${appUrl}/register?token=${token}`;

          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${resendKey}`,
            },
            body: JSON.stringify({
              from: 'YieldStream <noreply@updates.yieldstream.ai>',
              to: [customer.email],
              subject: 'Create your YieldStream account',
              html: `
                <h2>Welcome to YieldStream!</h2>
                <p>Your ${subscription.metadata?.plan || ''} plan is now active. Click below to create your account:</p>
                <p><a href="${signupLink}" style="display:inline-block;padding:12px 24px;background:#047987;color:white;text-decoration:none;border-radius:8px;font-weight:600;">Create Your Account →</a></p>
                <p style="color:#666;font-size:14px;">This link expires in 72 hours. If you need a new one, contact support@yieldstream.ai.</p>
              `,
            }),
          });
        }

        // Notify you
        if (resendKey) {
          await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${resendKey}`,
            },
            body: JSON.stringify({
              from: 'YieldStream <noreply@updates.yieldstream.ai>',
              to: ['support@yieldstream.ai'],
              subject: `New signup: ${customer.email} (${subscription.metadata?.plan || 'unknown'} plan)`,
              text: `New customer signed up!\n\nEmail: ${customer.email}\nPlan: ${subscription.metadata?.plan || 'unknown'}\nInterval: ${subscription.metadata?.interval || 'unknown'}\nSubscription: ${subscription.id}\nCustomer: ${customerId}`,
            }),
          });
        }
      }
      break;
    }
    case 'invoice.payment_succeeded': {
      const invoice = event.data.object;
      console.log(`Payment succeeded for subscription ${invoice.subscription}`);
      break;
    }
    case 'invoice.payment_failed': {
      const invoice = event.data.object;
      console.error(`Payment failed for subscription ${invoice.subscription}`);
      break;
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object;
      console.log(`Subscription ${subscription.id} cancelled`);
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
