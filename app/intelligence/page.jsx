'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useReveal } from '../components/useReveal';
import CTABanner from '../components/CTABanner';

export default function IntelligencePage() {
  useReveal();

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '80px 0 60px', background: 'linear-gradient(180deg, var(--p50), var(--n0))' }}>
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">The Relationship Engine</div>
            <h1 className="display-xl" style={{ marginTop: 12 }}>Three layers of intelligence.<br />One <em className="italic teal-gradient">compounding</em> advantage.</h1>
            <p className="text-lg" style={{ maxWidth: 600, margin: '16px auto 0' }}>
              YieldStream doesn't just store data — it thinks. Every lender recommendation is computed from three distinct signal layers, weighted by your organization's unique history.
            </p>
          </div>
        </div>
      </section>

      {/* Three Layers */}
      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: 'var(--space-4xl)' }}>
            {[
              {
                num: '50%', label: 'RELATIONSHIP INTELLIGENCE',
                title: 'Your Moat, Quantified',
                desc: 'Your pull-through rate with each lender is your competitive edge. Two brokers submitting the same merchant get different scores based on their individual track records. Your relationships are your moat — YieldStream protects them.',
                color: 'var(--p600)'
              },
              {
                num: '30%', label: 'ATTRIBUTE MATCHING',
                title: 'Hard Buybox Fit',
                desc: 'Merchant FICO, revenue, time in business, industry, position count — every attribute checked against each lender\'s current buybox. Hard disqualifications are enforced before scoring to eliminate wasted submissions.',
                color: 'var(--a600)'
              },
              {
                num: '20%', label: 'GLOBAL MARKET SIGNALS',
                title: 'Cross-Network Intelligence',
                desc: 'Anonymized outcome data from across the platform reveals which lenders are actively funding deals in specific industries, revenue ranges, and risk profiles right now. Your data stays private; the insights benefit everyone.',
                color: 'var(--n600)'
              },
            ].map((layer, i) => (
              <div key={i} className={`card reveal reveal-delay-${i + 1}`} style={{ borderTop: `3px solid ${layer.color}` }}>
                <div className="mono" style={{ fontSize: '2rem', fontWeight: 700, color: layer.color, marginBottom: 4 }}>{layer.num}</div>
                <div className="label" style={{ color: layer.color, marginBottom: 12 }}>{layer.label}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: 8 }}>{layer.title}</h3>
                <p className="text-sm">{layer.desc}</p>
              </div>
            ))}
          </div>

          {/* Screenshot */}
          <div className="reveal">
            <div className="screenshot screenshot-elevated">
              <Image src="/images/underwriting-intelligence.png" alt="Intelligence Dashboard" width={1400} height={800} />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Loop */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header reveal">
            <div className="label">The Learning Loop</div>
            <h2 className="display-lg" style={{ color: 'white', marginTop: 12 }}>Every outcome makes the system smarter.</h2>
            <p className="text-lg" style={{ maxWidth: 600, marginTop: 12 }}>
              This is the data flywheel: more outcomes → better predictions → higher pull-through → more commissions → more outcomes.
            </p>
          </div>
          <div className="grid-2">
            {[
              { event: 'Deal Funded', response: 'Relationship score strengthens. Renewal tracking begins. Commission recorded. Pull-through rate adjusts upward.', icon: '✅' },
              { event: 'Deal Declined', response: 'Temporary score penalty applied (-10% to -20%, 30-day expiry). Decline reason categorized. Future matches steered away.', icon: '❌' },
              { event: 'Lender Appetite Stale', response: 'Warning badge appears on lender. Broker prompted to update buybox. Match confidence drops until refreshed.', icon: '⚠️' },
              { event: 'Prediction Ages', response: 'Time-decay reduces weight automatically. 30d = full weight, 90d = 40%, 180d = 20%, >180d = 5%.', icon: '⏳' },
            ].map((item, i) => (
              <div key={i} className={`reveal reveal-delay-${(i % 2) + 1}`} style={{
                padding: 28,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'white' }}>{item.event}</h3>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{item.response}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Decay */}
      <section className="section">
        <div className="container">
          <div className="grid-feature reveal">
            <div>
              <div className="label" style={{ marginBottom: 12 }}>Time-Decay Accuracy</div>
              <h2 className="display-lg">Data from 6 months ago shouldn't dictate today's submissions.</h2>
              <p className="text-lg" style={{ marginTop: 12, marginBottom: 24 }}>
                Lender appetites shift. A funder who was aggressively buying restaurant deals in Q1 might have pulled back by Q3. YieldStream automatically de-prioritizes old data to keep every recommendation fresh and current.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { range: '0–30 days', weight: '100%', bar: 100 },
                  { range: '31–90 days', weight: '40%', bar: 40 },
                  { range: '91–180 days', weight: '20%', bar: 20 },
                  { range: '180+ days', weight: '5%', bar: 5 },
                ].map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span className="mono" style={{ fontSize: '0.78rem', color: 'var(--n500)', width: 100, flexShrink: 0 }}>{d.range}</span>
                    <div style={{ flex: 1, background: 'var(--n100)', borderRadius: 4, height: 8 }}>
                      <div style={{ width: `${d.bar}%`, background: 'var(--p600)', borderRadius: 4, height: 8, transition: 'width 1s var(--ease-out)' }} />
                    </div>
                    <span className="mono" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--p700)', width: 50 }}>{d.weight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="card" style={{ borderTop: '3px solid var(--a500)' }}>
                <div className="label" style={{ color: 'var(--a600)', marginBottom: 16 }}>Progressive Unlock</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 10 }}>AI predictions earn trust before asking for it.</h3>
                <p className="text-sm" style={{ marginBottom: 20 }}>
                  New organizations start with rule-based matching (attribute + global signals). The full AI Predictions view unlocks only after:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    '10+ recorded outcomes',
                    '3+ qualified lenders in registry',
                    '30+ days of historical data',
                  ].map((req, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.88rem', color: 'var(--n700)' }}>
                      <span style={{ color: 'var(--a500)', fontWeight: 700 }}>✓</span> {req}
                    </div>
                  ))}
                </div>
                <p className="text-sm" style={{ marginTop: 16 }}>
                  This builds broker confidence gradually and ensures the system never overpromises on thin data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner headline="Experience the intelligence engine." sub="Run your first AI-scored deal and see the three-layer scoring in action." />
    </>
  );
}
