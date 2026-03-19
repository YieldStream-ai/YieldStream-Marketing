'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useReveal } from '../components/useReveal';

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
      <section style={{ padding: '80px 0 40px', background: 'var(--n50)' }}>
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Pricing</div>
            <h1 className="display-xl" style={{ marginTop: 12 }}>Simple pricing that<br />scales with you.</h1>
            <p className="text-lg" style={{ maxWidth: 500, margin: '16px auto 0' }}>
              No per-deal fees. No merchant limits. No hidden costs. Just a flat monthly rate for your entire team.
            </p>
          </div>
        </div>
      </section>

      {/* Toggle + Cards */}
      <section style={{ padding: '0 0 var(--space-5xl)' }}>
        <div className="container">
          {/* Toggle */}
          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 48 }}>
            <span style={{ fontSize: '0.88rem', fontWeight: annual ? 500 : 600, color: annual ? 'var(--n400)' : 'var(--n800)' }}>Monthly</span>
            <button onClick={() => setAnnual(!annual)} style={{
              width: 48, height: 26, borderRadius: 13,
              background: 'var(--p600)', position: 'relative', cursor: 'pointer',
            }}>
              <span style={{
                position: 'absolute', top: 3, left: annual ? 25 : 3,
                width: 20, height: 20, borderRadius: '50%',
                background: 'white', transition: 'left 0.2s',
              }} />
            </button>
            <span style={{ fontSize: '0.88rem', fontWeight: annual ? 600 : 500, color: annual ? 'var(--n800)' : 'var(--n400)' }}>Annual</span>
            <span style={{ fontSize: '0.72rem', background: 'var(--a100)', color: 'var(--a700)', padding: '2px 8px', borderRadius: 4, fontWeight: 600 }}>Save 20%</span>
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, maxWidth: 1060, margin: '0 auto' }}>
            {tiers.map((tier, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{
                background: tier.bg || 'white',
                border: tier.border,
                borderRadius: 16, padding: 36, position: 'relative',
              }}>
                {tier.badge && (
                  <div style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    background: tier.badgeColor, color: 'white',
                    padding: '4px 14px', borderRadius: 100,
                    fontSize: '0.72rem', fontWeight: 600, whiteSpace: 'nowrap'
                  }}>{tier.badge}</div>
                )}
                <div style={{ marginTop: tier.badge ? 8 : 0 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 4 }}>{tier.name}</h3>
                  <p className="text-sm" style={{ marginBottom: 20, minHeight: 44 }}>{tier.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
                    <span className="mono" style={{ fontSize: typeof tier.price === 'number' ? '2.6rem' : '2rem', fontWeight: 700 }}>
                      {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                    </span>
                    {typeof tier.price === 'number' && <span className="text-sm">/month</span>}
                  </div>
                  {tier.was && <div className="text-sm" style={{ textDecoration: typeof tier.price === 'number' && !annual ? 'line-through' : 'none', marginBottom: 16 }}>{tier.was}</div>}
                  {!tier.was && <div style={{ height: 20, marginBottom: 16 }} />}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, padding: '20px 0', borderTop: '1px solid var(--n100)', marginBottom: 20 }}>
                    {tier.features.map((f, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.85rem', color: 'var(--n600)' }}>
                        <span style={{ color: 'var(--a500)', fontWeight: 700, flexShrink: 0 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={tier.name === 'Enterprise' ? '/contact' : '#'} className={tier.ctaClass} style={{ width: '100%', justifyContent: 'center' }}>
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
            <h2 className="display-lg" style={{ marginTop: 12 }}>See what YieldStream saves your brokerage.</h2>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-narrow">
          <div className="section-header center reveal">
            <div className="label">FAQ</div>
            <h2 className="display-lg" style={{ marginTop: 12 }}>Common questions</h2>
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
              <details key={i} style={{
                padding: '20px 24px', background: 'white',
                border: '1px solid var(--n200)', borderRadius: 10,
              }}>
                <summary style={{ fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', color: 'var(--n800)' }}>{faq.q}</summary>
                <p className="text-sm" style={{ marginTop: 10 }}>{faq.a}</p>
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
    <div className="reveal" style={{
      maxWidth: 800, margin: '0 auto',
      background: 'white', border: '1px solid var(--n200)',
      borderRadius: 16, padding: 40,
      boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
        {[
          { label: 'Deals per month', value: deals, set: setDeals },
          { label: 'Average deal size ($)', value: size, set: setSize },
          { label: 'Current pull-through (%)', value: pull, set: setPull },
          { label: 'Number of reps', value: reps, set: setReps },
        ].map((field, i) => (
          <div key={i}>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--n700)', marginBottom: 6 }}>{field.label}</label>
            <input
              type="number"
              value={field.value}
              onChange={e => field.set(Number(e.target.value) || 0)}
              style={{
                width: '100%', padding: '10px 14px',
                border: '1.5px solid var(--n200)', borderRadius: 8,
                fontFamily: 'var(--font-mono)', fontSize: '0.95rem',
                color: 'var(--n800)',
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, paddingTop: 24, borderTop: '1px solid var(--n100)' }}>
        {[
          { label: 'Hours saved / month', value: `${hours} hrs` },
          { label: 'Additional funded deals', value: `+${extra} deals` },
          { label: 'Additional monthly commission', value: `$${commission.toLocaleString()}` },
        ].map((r, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div className="mono" style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--a600)' }}>{r.value}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--n500)' }}>{r.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
