export const plans = {
  founder: {
    name: "Founder",
    monthly: {
      priceId: process.env.STRIPE_FOUNDER_MONTHLY_PRICE_ID,
      amount: 797,
    },
    annual: {
      priceId: process.env.STRIPE_FOUNDER_ANNUAL_PRICE_ID,
      amount: 638,
      billedAmount: 7656,
    },
  },
  professional: {
    name: "Professional",
    monthly: {
      priceId: process.env.STRIPE_PROFESSIONAL_MONTHLY_PRICE_ID,
      amount: 1197,
    },
    annual: {
      priceId: process.env.STRIPE_PROFESSIONAL_ANNUAL_PRICE_ID,
      amount: 958,
      billedAmount: 11496,
    },
  },
};
