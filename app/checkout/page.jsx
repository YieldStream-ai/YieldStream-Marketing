'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import CheckoutForm from '../components/CheckoutForm';
import { plans } from '../lib/plans';
import { useReveal } from '../components/useReveal';
import './checkout.scss';

function CheckoutContent() {
  useReveal();
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');
  const interval = searchParams.get('interval') || 'monthly';

  const planConfig = plans[plan];
  const intervalConfig = planConfig?.[interval];

  if (!planConfig || !intervalConfig) {
    return (
      <section className="checkout__hero">
        <div className="container">
          <div className="checkout__invalid reveal">
            <h1 className="display-md">Invalid plan selected</h1>
            <p className="text-md">Please choose a plan from our pricing page.</p>
            <Link href="/pricing" className="btn btn-primary btn-lg">View Plans →</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="checkout__hero">
        <div className="container">
          <div className="reveal">
            <Link href="/pricing" className="checkout__back">← Back to Pricing</Link>
          </div>
        </div>
      </section>

      <section className="checkout__section">
        <div className="container">
          <div className="checkout__grid reveal">
            {/* Plan Summary */}
            <div className="checkout__summary">
              <div className="checkout__summary-card">
                <div className="checkout__summary-badge">{planConfig.name} Plan</div>
                <div className="checkout__summary-price-wrap">
                  <span className="mono checkout__summary-price">${intervalConfig.amount}</span>
                  <span className="text-sm">/month</span>
                </div>
                {interval === 'annual' && (
                  <p className="text-sm checkout__summary-billed">Billed annually at ${intervalConfig.billedAmount?.toLocaleString()}/yr</p>
                )}
                {plan === 'founder' && (
                  <p className="text-sm" style={{ color: "#9aa5b4", marginBottom: 8 }}>
                    This rate is locked forever — it never increases.
                  </p>
                )}
                <div className="checkout__summary-divider" />
                <div className="checkout__summary-trial">
                  <div className="checkout__trial-badge">30-day money-back guarantee</div>
                  <p className="text-sm checkout__summary-trial-note">
                    Not the right fit in your first 30 days? We&apos;ll refund you in full.
                  </p>
                </div>
                <div className="checkout__summary-divider" />
                <div className="checkout__summary-details">
                  <h4 className="checkout__summary-details-title">What&apos;s included:</h4>
                  <ul className="checkout__summary-features">
                    {plan === 'founder' ? (
                      <>
                        <li>Rate locked for life — never increases</li>
                        <li>300 AI analyses / mo</li>
                        <li>Unlimited team seats</li>
                        <li>Priority onboarding & setup</li>
                        <li>Direct Slack channel with founding team</li>
                        <li>Influence the product roadmap</li>
                      </>
                    ) : (
                      <>
                        <li>AI lender matching & scoring engine</li>
                        <li>Unlimited merchants & deals</li>
                        <li>AI bank statement analysis</li>
                        <li>Deal pipeline (Kanban + Table)</li>
                        <li>600 AI analyses / mo</li>
                        <li>Unlimited team seats</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="checkout__form-wrap">
              <h2 className="display-sm checkout__form-title">{plan === 'founder' ? 'Claim your founding spot' : 'Get started'}</h2>
              <p className="text-md checkout__form-sub">Enter your details below to get started.</p>
              <CheckoutForm plan={plan} interval={interval} planConfig={planConfig} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense>
      <CheckoutContent />
    </Suspense>
  );
}
