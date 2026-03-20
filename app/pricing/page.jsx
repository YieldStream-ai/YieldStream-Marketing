'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '../components/useReveal';
import './pricing.scss';

export default function PricingPage() {
  useReveal();
  const [annual, setAnnual] = useState(false);

  const tiers = [
    {
      name: 'Founder',
      badge: 'Founding Member',
      badgeColor: 'var(--a500)',
      desc: 'First 20 customers only. Full platform access at a locked-in rate — forever.',
      price: annual ? 237 : 297,
      was: annual ? '$397/mo regular' : '$497/mo regular',
      features: [
        'Everything in Professional',
        'Rate locked for life — never increases',
        'Priority onboarding & setup',
        'Direct Slack channel with founding team',
        'Influence the product roadmap',
        'Unlimited team seats',
      ],
      cta: 'Claim Founding Spot →',
      ctaClass: 'btn btn-emerald btn-lg',
      border: '2px solid var(--a500)',
      bg: 'linear-gradient(180deg, var(--a50), white)',
    },
    {
      name: 'Professional',
      badge: 'Most Popular',
      badgeColor: 'var(--p600)',
      desc: 'For established ISOs running 20+ deals per month with a growing team.',
      price: annual ? 397 : 497,
      was: annual ? '$497/mo if monthly' : null,
      features: [
        'AI lender matching & scoring engine',
        'Unlimited merchants & deals',
        'AI bank statement analysis',
        'Deal pipeline (Kanban + Table)',
        'Offer comparison & scoring',
        'Lender Registry management',
        'Renewal forecasting & alerts',
        'Full audit log & compliance export',
        'Up to 10 team seats',
      ],
      cta: 'Start Free Trial →',
      ctaClass: 'btn btn-primary btn-lg',
      border: '2px solid var(--p600)',
    },
    {
      name: 'Enterprise',
      desc: 'For multi-office ISOs with 20+ reps needing custom integrations and SLAs.',
      price: 'Custom',
      features: [
        'Everything in Professional',
        'Unlimited team seats',
        'Dedicated account manager',
        'Custom API integrations',
        'SSO & advanced security',
        'Custom analytics & reporting',
        'SLA guarantee',
        'On-site onboarding available',
      ],
      cta: 'Contact Sales →',
      ctaClass: 'btn btn-outline btn-lg',
      border: '1px solid var(--n200)',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pricing__hero">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Pricing</div>
            <h1 className="display-xl pricing__hero-title">Simple pricing that<br />scales with you.</h1>
            <p className="text-lg pricing__hero-sub">
              No per-deal fees. No merchant limits. No hidden costs. Just a flat monthly rate for your entire team.
            </p>
          </div>
        </div>
      </section>

      {/* Toggle + Cards */}
      <section className="pricing__section">
        <div className="container">
          {/* Toggle */}
          <div className="reveal pricing__toggle-wrap">
            <span className={`pricing__toggle-label ${!annual ? 'pricing__toggle-label--active' : ''}`}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} className="pricing__toggle-btn">
              <span className="pricing__toggle-knob" style={{ left: annual ? 25 : 3 }} />
            </button>
            <span className={`pricing__toggle-label ${annual ? 'pricing__toggle-label--active' : ''}`}>Annual</span>
            <span className="pricing__toggle-badge">Save 20%</span>
          </div>

          {/* Cards */}
          <div className="pricing__cards">
            {tiers.map((tier, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{
                background: tier.bg || 'white',
                border: tier.border,
                borderRadius: 16, padding: 36, position: 'relative',
              }}>
                {tier.badge && (
                  <div className="pricing__card-badge" style={{ background: tier.badgeColor }}>{tier.badge}</div>
                )}
                <div className={tier.badge ? 'pricing__card-mt' : ''}>
                  <h3 className="pricing__card-title">{tier.name}</h3>
                  <p className="text-sm pricing__card-desc">{tier.desc}</p>
                  <div className="pricing__card-price-wrap">
                    <span className="mono pricing__card-price" style={{ fontSize: typeof tier.price === 'number' ? '2.6rem' : '2rem' }}>
                      {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                    </span>
                    {typeof tier.price === 'number' && <span className="text-sm">/month</span>}
                  </div>
                  {tier.was && <div className="text-sm" style={{ textDecoration: typeof tier.price === 'number' && !annual ? 'line-through' : 'none', marginBottom: 16 }}>{tier.was}</div>}
                  {!tier.was && <div style={{ height: 20, marginBottom: 16 }} />}
                  <ul className="pricing__card-features">
                    {tier.features.map((f, j) => (
                      <li key={j} className="pricing__card-feature">
                        <span className="pricing__card-feature-check">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={tier.name === 'Enterprise' ? '/contact' : `/checkout?plan=${tier.name.toLowerCase()}&interval=${annual ? 'annual' : 'monthly'}`} className={`${tier.ctaClass} pricing__card-cta`}>
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">ROI Calculator</div>
            <h2 className="display-lg pricing__section-title">See what YieldStream saves your brokerage.</h2>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-narrow">
          <div className="section-header center reveal">
            <div className="label">FAQ</div>
            <h2 className="display-lg pricing__section-title">Common questions</h2>
          </div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'Is there a free trial?', a: 'Yes — 14 days, full platform access, no credit card required. You can process real deals during the trial.' },
              { q: 'What happens when the 20 founder spots are filled?', a: 'The Founder tier closes permanently. New customers start at the Professional tier ($497/mo). Founding members keep their rate forever.' },
              { q: 'Are there per-deal or per-merchant fees?', a: 'No. Every plan includes unlimited merchants and deals. The flat monthly rate is the only cost.' },
              { q: 'How many team members can I add?', a: 'Professional includes up to 10 seats. Founder and Enterprise include unlimited seats.' },
              { q: 'Can I cancel anytime?', a: 'Yes. Monthly plans have no commitment. Annual plans are billed upfront and are non-refundable but you keep access through the end of the billing period.' },
              { q: 'What\'s the onboarding process?', a: 'Founder members get priority 1-on-1 onboarding. Professional customers use the guided onboarding wizard — upload lenders, invite team, and run your first AI-scored deal in under 30 minutes.' },
            ].map((faq, i) => (
              <details key={i} className="pricing__faq-item">
                <summary className="pricing__faq-summary">{faq.q}</summary>
                <p className="text-sm pricing__faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ROICalculator() {
  const [deals, setDeals] = useState(40);
  const [size, setSize] = useState(150000);
  const [pull, setPull] = useState(35);
  const [reps, setReps] = useState(5);

  const hours = Math.round(deals * 0.75 + reps * 8);
  const extra = Math.round(deals * 0.15);
  const commission = extra * size * 0.075;

  return (
    <div className="reveal pricing__roi">
      <div className="pricing__roi-fields">
        {[
          { label: 'Deals per month', value: deals, set: setDeals },
          { label: 'Average deal size ($)', value: size, set: setSize },
          { label: 'Current pull-through (%)', value: pull, set: setPull },
          { label: 'Number of reps', value: reps, set: setReps },
        ].map((field, i) => (
          <div key={i}>
            <label className="pricing__roi-label">{field.label}</label>
            <input
              type="number"
              value={field.value}
              onChange={e => field.set(Number(e.target.value) || 0)}
              className="pricing__roi-input"
            />
          </div>
        ))}
      </div>
      <div className="pricing__roi-results">
        {[
          { label: 'Hours saved / month', value: `${hours} hrs` },
          { label: 'Additional funded deals', value: `+${extra} deals` },
          { label: 'Additional monthly commission', value: `$${commission.toLocaleString()}` },
        ].map((r, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div className="mono pricing__roi-result-value">{r.value}</div>
            <div className="pricing__roi-result-label">{r.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
