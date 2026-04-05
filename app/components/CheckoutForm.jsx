'use client';

import { useState } from 'react';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function PaymentForm({ plan, interval, isFounder }) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setError(null);

    const { error: confirmError } = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout/success?plan=${plan}&interval=${interval}`,
      },
    });

    if (confirmError) {
      setError(confirmError.message);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout__payment-form">
      <PaymentElement />
      {error && <div className="checkout__error">{error}</div>}
      <button type="submit" disabled={!stripe || processing} className="btn btn-primary btn-lg checkout__pay-btn">
        {processing ? 'Processing...' : isFounder ? 'Claim Founding Spot →' : 'Get Started →'}
      </button>
      <p className="checkout__secure-note">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        Card details are encrypted and handled securely by Stripe. We never see your card number.
      </p>
    </form>
  );
}

const appearance = {
  theme: 'stripe',
  variables: {
    fontFamily: "var(--font-body)",
    colorPrimary: '#047987',
    borderRadius: '8px',
    colorBackground: '#ffffff',
    colorText: '#1a1a2e',
  },
  rules: {
    '.Input': {
      border: '1.5px solid #d1d5db',
      padding: '10px 14px',
    },
    '.Input:focus': {
      borderColor: '#047987',
      boxShadow: '0 0 0 1px #047987',
    },
    '.Label': {
      fontWeight: '600',
      fontSize: '0.82rem',
      color: '#374151',
    },
  },
};

export default function CheckoutForm({ plan, interval, planConfig }) {
  const [email, setEmail] = useState('');
  const [clientSecret, setClientSecret] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) { setError('Please enter your email.'); return; }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/checkout/create-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, plan, interval }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to start checkout');
      setClientSecret(data.clientSecret);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (!clientSecret) {
    return (
      <form onSubmit={handleEmailSubmit} className="checkout__email-form">
        <div>
          <label className="checkout__label" htmlFor="checkout-email">Email address</label>
          <input
            id="checkout-email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@yourbrokerage.com"
            className="checkout__input"
            autoFocus
          />
        </div>
        {error && <div className="checkout__error">{error}</div>}
        <button type="submit" disabled={loading} className="btn btn-primary btn-lg checkout__continue-btn">
          {loading ? 'Setting up...' : 'Continue to Payment →'}
        </button>
      </form>
    );
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
      <PaymentForm plan={plan} interval={interval} isFounder={plan === 'founder'} />
    </Elements>
  );
}
