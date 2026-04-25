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

        // Detect plan from subscription price ID
        const priceId = subscription.items.data[0]?.price?.id;
        const founderPriceIds = [
          process.env.STRIPE_FOUNDER_MONTHLY_PRICE_ID,
          process.env.STRIPE_FOUNDER_ANNUAL_PRICE_ID,
        ].filter(Boolean);
        const proPriceIds = [
          process.env.STRIPE_PROFESSIONAL_MONTHLY_PRICE_ID,
          process.env.STRIPE_PROFESSIONAL_ANNUAL_PRICE_ID,
        ].filter(Boolean);

        let planName;
        if (founderPriceIds.includes(priceId)) {
          planName = 'founder';
        } else if (proPriceIds.includes(priceId)) {
          planName = 'professional';
        } else {
          planName = 'unknown';
          console.warn(`Unknown price ID: ${priceId} — sending generic welcome email. Expected one of: ${[...founderPriceIds, ...proPriceIds].join(', ')}`);
        }

        // Send plan-specific signup email via Resend
        const resendKey = process.env.RESEND_API_KEY;
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.yieldstream.ai';

        if (resendKey) {
          const signupLink = `${appUrl}/register?token=${token}`;

          let emailSubject;
          let emailHtml;

          if (planName === 'founder') {
            emailSubject = "Welcome to YieldStream — You're a Founding Member";
            emailHtml = getFounderEmailHtml(signupLink);
          } else if (planName === 'professional') {
            emailSubject = 'Welcome to YieldStream — Your Account is Ready';
            emailHtml = getProfessionalEmailHtml(signupLink);
          } else {
            emailSubject = 'Create your YieldStream account';
            emailHtml = getGenericEmailHtml(signupLink, subscription.metadata?.plan);
          }

          const welcomeRes = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${resendKey}`,
            },
            body: JSON.stringify({
              from: 'YieldStream <noreply@updates.yieldstream.ai>',
              to: [customer.email],
              subject: emailSubject,
              html: emailHtml,
            }),
          });

          if (!welcomeRes.ok) {
            const errBody = await welcomeRes.text();
            console.error(`Failed to send welcome email to ${customer.email}: ${welcomeRes.status} ${errBody}`);
          }
        }

        // Notify support with plan context
        if (resendKey) {
          const displayPlan = planName === 'unknown' ? `unknown (price: ${priceId})` : planName;
          const notifyRes = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${resendKey}`,
            },
            body: JSON.stringify({
              from: 'YieldStream <noreply@updates.yieldstream.ai>',
              to: ['support@yieldstream.ai'],
              subject: `New signup: ${customer.email} (${displayPlan} plan)`,
              text: `New customer signed up!\n\nEmail: ${customer.email}\nPlan: ${displayPlan}\nPrice ID: ${priceId}\nInterval: ${subscription.metadata?.interval || 'unknown'}\nSubscription: ${subscription.id}\nCustomer: ${customerId}`,
            }),
          });

          if (!notifyRes.ok) {
            const errBody = await notifyRes.text();
            console.error(`Failed to send support notification for ${customer.email}: ${notifyRes.status} ${errBody}`);
          }
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

function getFounderEmailHtml(signupLink) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to YieldStream</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background-color: #ffffff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
    .header { background-color: #01313a; padding: 32px 48px; text-align: center; }
    .logo-text { color: #ffffff; font-size: 20px; font-weight: 600; letter-spacing: 0.02em; }
    .badge { display: inline-block; margin-top: 12px; background-color: rgba(4,121,135,0.35); color: #7ee8f0; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 14px; border-radius: 20px; border: 1px solid rgba(4,121,135,0.5); }
    .hero { background-color: #f7fafa; padding: 48px 48px 40px; border-bottom: 1px solid #e2eaeb; }
    .greeting { font-size: 28px; font-weight: 700; color: #0a1f22; margin-bottom: 14px; line-height: 1.25; }
    .subtext { font-size: 16px; color: #4a6068; line-height: 1.75; max-width: 520px; }
    .rate-section { background-color: #e6f4f5; padding: 32px 48px; border-bottom: 1px solid #c8dfe2; }
    .rate-label { font-size: 11px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: #1f2937; margin-bottom: 8px; }
    .rate-amount { font-size: 42px; font-weight: 800; color: #1f2937; font-family: 'Courier New', monospace; line-height: 1; }
    .rate-per { font-size: 18px; font-weight: 400; color: #1f2937; }
    .rate-note { font-size: 14px; color: #2d5a62; margin-top: 10px; line-height: 1.65; max-width: 480px; }
    .steps-section { background-color: #ffffff; padding: 40px 48px; border-bottom: 1px solid #edf2f3; }
    .steps-label { font-size: 11px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: #9ab0b5; margin-bottom: 28px; }
    .step { display: flex; gap: 18px; margin-bottom: 24px; align-items: flex-start; }
    .step-num { width: 32px; height: 32px; min-width: 32px; background: #1f2937; color: #fff; border-radius: 50%; font-size: 13px; font-weight: 700; text-align: center; line-height: 32px; flex-shrink: 0; }
    .step-title { font-size: 15px; font-weight: 700; color: #0a1f22; margin-bottom: 4px; }
    .step-desc { font-size: 14px; color: #4a6068; line-height: 1.6; }
    .cta-section { background-color: #01313a; padding: 40px 48px; text-align: center; }
    .cta-btn { display: inline-block; background: #1f2937; color: #fff; text-decoration: none; font-size: 16px; font-weight: 700; padding: 16px 48px; border-radius: 8px; letter-spacing: 0.02em; }
    .cta-url { font-size: 13px; color: #7ee8f0; margin-top: 14px; }
    .contact-section { background-color: #f7fafa; padding: 32px 48px; border-top: 1px solid #e2eaeb; }
    .contact-text { font-size: 14px; color: #4a6068; line-height: 1.7; }
    .contact-text a { color: #1f2937; text-decoration: none; }
    .footer { background-color: #0a1f22; padding: 28px 48px; }
    .footer-brand { color: #7ee8f0; font-size: 14px; font-weight: 600; margin-bottom: 10px; }
    .footer-links { margin-bottom: 12px; }
    .footer-links a { color: #4a7a82; text-decoration: none; font-size: 13px; margin-right: 20px; }
    .footer-copy { font-size: 12px; color: #2d5a62; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo-text">YieldStream</div>
    <div><span class="badge">Founding Member</span></div>
  </div>
  <div class="hero">
    <div class="greeting">You're in.<br/>Welcome to YieldStream.</div>
    <p class="subtext">Your founding spot is confirmed. You're one of the first 20 ISOs on the platform &mdash; and your rate is locked permanently from today.</p>
  </div>
  <div class="rate-section">
    <div class="rate-label">Your Locked Rate</div>
    <div class="rate-amount">$797<span class="rate-per">/mo</span></div>
    <div class="rate-note">This rate never increases &mdash; regardless of future pricing changes. Founding members keep this rate for as long as they remain on YieldStream.</div>
  </div>
  <div class="steps-section">
    <div class="steps-label">What happens next</div>
    <div class="step">
      <div class="step-num">1</div>
      <div>
        <div class="step-title">Access your platform</div>
        <div class="step-desc">Log in to your YieldStream dashboard using the button below. Your account is ready.</div>
      </div>
    </div>
    <div class="step">
      <div class="step-num">2</div>
      <div>
        <div class="step-title">Complete onboarding</div>
        <div class="step-desc">Add your lender network, configure buy-box criteria, and invite your team. Takes under 30 minutes.</div>
      </div>
    </div>
    <div class="step">
      <div class="step-num">3</div>
      <div>
        <div class="step-title">Run your first AI-scored deal</div>
        <div class="step-desc">Upload a bank statement and watch the three-layer scoring engine rank your lenders by expected yield.</div>
      </div>
    </div>
    <div class="step">
      <div class="step-num">4</div>
      <div>
        <div class="step-title">Priority onboarding call</div>
        <div class="step-desc">As a founding member you get a 1-on-1 setup session. We'll reach out within 24 hours to schedule.</div>
      </div>
    </div>
  </div>
  <div class="cta-section">
    <a href="${signupLink}" class="cta-btn">Create Your Account &rarr;</a>
    <div class="cta-url">This link expires in 72 hours</div>
  </div>
  <div class="contact-section">
    <p class="contact-text">Questions? Reply directly to this email or reach us at <a href="mailto:hello@yieldstream.ai">hello@yieldstream.ai</a>. As a founding member you have a direct line &mdash; we pick up.</p>
  </div>
  <div class="footer">
    <div class="footer-brand">YieldStream.ai</div>
    <div class="footer-links">
      <a href="https://yieldstream.ai">Website</a>
      <a href="https://yieldstream.ai/pricing">Pricing</a>
      <a href="mailto:hello@yieldstream.ai">Contact</a>
    </div>
    <div class="footer-copy">&copy; 2026 YieldStream. All rights reserved.<br/>You're receiving this because you signed up at yieldstream.ai</div>
  </div>
</body>
</html>`;
}

function getProfessionalEmailHtml(signupLink) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to YieldStream</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background-color: #ffffff; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
    .header { background-color: #01313a; padding: 32px 48px; text-align: center; }
    .logo-text { color: #ffffff; font-size: 20px; font-weight: 600; letter-spacing: 0.02em; }
    .badge { display: inline-block; margin-top: 12px; background-color: rgba(4,121,135,0.35); color: #7ee8f0; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; padding: 4px 14px; border-radius: 20px; border: 1px solid rgba(4,121,135,0.5); }
    .hero { background-color: #f7fafa; padding: 48px 48px 40px; border-bottom: 1px solid #e2eaeb; }
    .greeting { font-size: 28px; font-weight: 700; color: #0a1f22; margin-bottom: 14px; line-height: 1.25; }
    .subtext { font-size: 16px; color: #4a6068; line-height: 1.75; max-width: 520px; }
    .trial-section { background-color: #e6f4f5; padding: 32px 48px; border-bottom: 1px solid #c8dfe2; }
    .trial-label { font-size: 11px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: #1f2937; margin-bottom: 8px; }
    .trial-date { font-size: 28px; font-weight: 800; color: #0a1f22; margin-bottom: 8px; }
    .trial-note { font-size: 14px; color: #2d5a62; line-height: 1.65; max-width: 480px; }
    .features-section { background-color: #ffffff; padding: 32px 48px; border-bottom: 1px solid #edf2f3; }
    .features-label { font-size: 11px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: #9ab0b5; margin-bottom: 20px; }
    .feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .feature { font-size: 14px; color: #4a6068; line-height: 1.5; }
    .check { color: #1f2937; margin-right: 8px; font-weight: 700; }
    .steps-section { background-color: #f7fafa; padding: 40px 48px; border-bottom: 1px solid #e2eaeb; }
    .steps-label { font-size: 11px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: #9ab0b5; margin-bottom: 28px; }
    .step { display: flex; gap: 18px; margin-bottom: 24px; align-items: flex-start; }
    .step-num { width: 32px; height: 32px; min-width: 32px; background: #1f2937; color: #fff; border-radius: 50%; font-size: 13px; font-weight: 700; text-align: center; line-height: 32px; flex-shrink: 0; }
    .step-title { font-size: 15px; font-weight: 700; color: #0a1f22; margin-bottom: 4px; }
    .step-desc { font-size: 14px; color: #4a6068; line-height: 1.6; }
    .cta-section { background-color: #01313a; padding: 40px 48px; text-align: center; }
    .cta-btn { display: inline-block; background: #1f2937; color: #fff; text-decoration: none; font-size: 16px; font-weight: 700; padding: 16px 48px; border-radius: 8px; letter-spacing: 0.02em; }
    .cta-url { font-size: 13px; color: #7ee8f0; margin-top: 14px; }
    .contact-section { background-color: #f7fafa; padding: 32px 48px; border-top: 1px solid #e2eaeb; }
    .contact-text { font-size: 14px; color: #4a6068; line-height: 1.7; }
    .contact-text a { color: #1f2937; text-decoration: none; }
    .footer { background-color: #0a1f22; padding: 28px 48px; }
    .footer-brand { color: #7ee8f0; font-size: 14px; font-weight: 600; margin-bottom: 10px; }
    .footer-links { margin-bottom: 12px; }
    .footer-links a { color: #4a7a82; text-decoration: none; font-size: 13px; margin-right: 20px; }
    .footer-copy { font-size: 12px; color: #2d5a62; line-height: 1.6; }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo-text">YieldStream</div>
    <div><span class="badge">Professional Plan</span></div>
  </div>
  <div class="hero">
    <div class="greeting">Your account is ready.<br/>Welcome to YieldStream.</div>
    <p class="subtext">You have full access to the platform. No restrictions, no limits &mdash; run real deals and see exactly what YieldStream can do for your operation.</p>
  </div>
  <div class="trial-section">
    <div class="trial-label">Onboarding Window</div>
    <div class="trial-date">14 days to get fully set up</div>
    <div class="trial-note">Our team is standing by to help you configure your account, import your lender network, and run your first AI-scored deals during your onboarding window.</div>
  </div>
  <div class="features-section">
    <div class="features-label">What's included in your plan</div>
    <div class="feature-grid">
      <div class="feature"><span class="check">&#10003;</span>AI lender matching &amp; scoring</div>
      <div class="feature"><span class="check">&#10003;</span>Unlimited merchants &amp; deals</div>
      <div class="feature"><span class="check">&#10003;</span>AI bank statement analysis</div>
      <div class="feature"><span class="check">&#10003;</span>Deal pipeline (Kanban + Table)</div>
      <div class="feature"><span class="check">&#10003;</span>600 AI analyses / month</div>
      <div class="feature"><span class="check">&#10003;</span>Unlimited team seats</div>
    </div>
  </div>
  <div class="steps-section">
    <div class="steps-label">Get started in under 30 minutes</div>
    <div class="step">
      <div class="step-num">1</div>
      <div>
        <div class="step-title">Create your account</div>
        <div class="step-desc">Click the button below to set up your login. Your account is ready and waiting.</div>
      </div>
    </div>
    <div class="step">
      <div class="step-num">2</div>
      <div>
        <div class="step-title">Add your lender network</div>
        <div class="step-desc">Upload your lender list and configure buy-box criteria to power the matching engine.</div>
      </div>
    </div>
    <div class="step">
      <div class="step-num">3</div>
      <div>
        <div class="step-title">Run your first AI-scored deal</div>
        <div class="step-desc">Upload a bank statement and see lenders ranked by expected yield in under 2 minutes.</div>
      </div>
    </div>
    <div class="step">
      <div class="step-num">4</div>
      <div>
        <div class="step-title">Invite your team</div>
        <div class="step-desc">Add your reps &mdash; unlimited seats included. Everyone sees the same deal intelligence.</div>
      </div>
    </div>
  </div>
  <div class="cta-section">
    <a href="${signupLink}" class="cta-btn">Create Your Account &rarr;</a>
    <div class="cta-url">This link expires in 72 hours</div>
  </div>
  <div class="contact-section">
    <p class="contact-text">Questions? Reply directly to this email or reach us at <a href="mailto:hello@yieldstream.ai">hello@yieldstream.ai</a>. We want to make sure you get the most out of YieldStream.</p>
  </div>
  <div class="footer">
    <div class="footer-brand">YieldStream.ai</div>
    <div class="footer-links">
      <a href="https://yieldstream.ai">Website</a>
      <a href="https://yieldstream.ai/pricing">Pricing</a>
      <a href="mailto:hello@yieldstream.ai">Contact</a>
    </div>
    <div class="footer-copy">&copy; 2026 YieldStream. All rights reserved.<br/>You're receiving this because you signed up at yieldstream.ai</div>
  </div>
</body>
</html>`;
}

function getGenericEmailHtml(signupLink, planMeta) {
  return `
    <h2>Welcome to YieldStream!</h2>
    <p>Your ${planMeta || ''} plan is now active. Click below to create your account:</p>
    <p><a href="${signupLink}" style="display:inline-block;padding:12px 24px;background:#1f2937;color:white;text-decoration:none;border-radius:8px;font-weight:600;">Create Your Account &rarr;</a></p>
    <p style="color:#666;font-size:14px;">This link expires in 72 hours. If you need a new one, contact support@yieldstream.ai.</p>
  `;
}
