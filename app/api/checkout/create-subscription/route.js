import { NextResponse } from 'next/server';
import { getStripe } from '../../../lib/stripe';
import { plans } from '../../../lib/plans';

export async function POST(request) {
  try {
    const stripe = getStripe();
    const { email, plan, interval } = await request.json();

    // Validate inputs
    if (!email || !plan || !interval) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const planConfig = plans[plan];
    if (!planConfig) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    const intervalConfig = planConfig[interval];
    if (!intervalConfig?.priceId) {
      return NextResponse.json({ error: 'Invalid interval' }, { status: 400 });
    }

    // Find or create customer
    const existing = await stripe.customers.list({ email, limit: 1 });
    const customer = existing.data.length > 0
      ? existing.data[0]
      : await stripe.customers.create({ email, metadata: { source: 'marketing_site' } });

    // Create subscription (trial for non-founder plans only)
    const isFounder = plan === 'founder';
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: intervalConfig.priceId }],
      ...(isFounder ? {} : { trial_period_days: 14 }),
      payment_behavior: 'default_incomplete',
      payment_settings: {
        save_default_payment_method: 'on_subscription',
      },
      expand: ['pending_setup_intent'],
      metadata: { plan, interval },
    });

    return NextResponse.json({
      subscriptionId: subscription.id,
      customerId: customer.id,
      clientSecret: subscription.pending_setup_intent.client_secret,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create subscription' },
      { status: 500 }
    );
  }
}
