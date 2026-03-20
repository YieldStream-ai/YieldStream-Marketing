export const plans = {
  founder: {
    name: 'Founder',
    monthly: {
      priceId: process.env.NEXT_PUBLIC_STRIPE_FOUNDER_MONTHLY_PRICE_ID,
      amount: 297,
    },
    annual: {
      priceId: process.env.NEXT_PUBLIC_STRIPE_FOUNDER_ANNUAL_PRICE_ID,
      amount: 237,
      billedAmount: 2844,
    },
  },
  professional: {
    name: 'Professional',
    monthly: {
      priceId: process.env.NEXT_PUBLIC_STRIPE_PROFESSIONAL_MONTHLY_PRICE_ID,
      amount: 497,
    },
    annual: {
      priceId: process.env.NEXT_PUBLIC_STRIPE_PROFESSIONAL_ANNUAL_PRICE_ID,
      amount: 397,
      billedAmount: 4764,
    },
  },
};
