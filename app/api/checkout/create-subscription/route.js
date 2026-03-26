import { NextResponse } from "next/server";
import { getStripe } from "../../../lib/stripe";
import { plans } from "../../../lib/plans";

export async function POST(request) {
  try {
    const stripe = getStripe();
    const { email, plan, interval } = await request.json();

    // Add this:
    console.log("Received:", { email, plan, interval });
    console.log("Plan config:", plans[plan]);
    console.log("Interval config:", plans[plan]?.[interval]);
    console.log("Price ID:", process.env.STRIPE_PROFESSIONAL_MONTHLY_PRICE_ID);

    // Validate inputs
    if (!email || !plan || !interval) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const planConfig = plans[plan];
    if (!planConfig) {
      return NextResponse.json({ error: "Invalid plan" }, { status: 400 });
    }

    const intervalConfig = planConfig[interval];
    if (!intervalConfig?.priceId) {
      return NextResponse.json({ error: "Invalid interval" }, { status: 400 });
    }

    // Find or create customer
    const existing = await stripe.customers.list({ email, limit: 1 });
    const customer =
      existing.data.length > 0
        ? existing.data[0]
        : await stripe.customers.create({
            email,
            metadata: { source: "marketing_site" },
          });

    // Create setup intent to collect card details
    const setupIntent = await stripe.setupIntents.create({
      customer: customer.id,
      payment_method_types: ["card"],
      usage: "off_session",
      metadata: { plan, interval, priceId: intervalConfig.priceId },
    });

    // Create subscription in incomplete state
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: intervalConfig.priceId }],
      payment_behavior: "default_incomplete",
      payment_settings: {
        save_default_payment_method: "on_subscription",
      },
      metadata: { plan, interval },
    });

    return NextResponse.json({
      subscriptionId: subscription.id,
      customerId: customer.id,
      clientSecret: setupIntent.client_secret,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create subscription" },
      { status: 500 },
    );
  }
}
