import { NextResponse } from 'next/server';
import { getStripe } from '../../../lib/stripe';

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
      console.log(`SetupIntent succeeded for customer ${setupIntent.customer}`);
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
      // TODO: Send failure notification email via Resend
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
