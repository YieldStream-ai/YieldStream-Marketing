'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useReveal } from '../components/useReveal';
import CTABanner from '../components/CTABanner';
import './intelligence.scss';

export default function IntelligencePage() {
  useReveal();

  return (
    <>
      {/* Hero */}
      <section className="intelligence__hero">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">The Relationship Engine</div>
            <h1 className="display-xl intelligence__hero-title">Three layers of intelligence.<br />One <em className="italic teal-gradient">compounding</em> advantage.</h1>
            <p className="text-lg intelligence__hero-sub">
              YieldStream doesn't just store data — it thinks. Every lender recommendation is computed from three distinct signal layers, weighted by your organization's unique history.
            </p>
          </div>
        </div>
      </section>

      {/* Three Layers */}
      <section className="section">
        <div className="container">
          <div className="grid-3 intelligence__layers">
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
                <div className="mono intelligence__layer-num" style={{ color: layer.color }}>{layer.num}</div>
                <div className="label intelligence__layer-label" style={{ color: layer.color }}>{layer.label}</div>
                <h3 className="intelligence__layer-title">{layer.title}</h3>
                <p className="text-sm">{layer.desc}</p>
              </div>
            ))}
          </div>

          {/* Screenshot */}
          <div className="reveal">
            <div className="screenshot screenshot-elevated">
              <Image src="/images/Underwriting-Intelligence.jpg" alt="Intelligence Dashboard" width={1400} height={800} />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Loop */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header reveal">
            <div className="label">The Learning Loop</div>
            <h2 className="display-lg intelligence__section-title">Every outcome makes the system smarter.</h2>
            <p className="text-lg intelligence__section-sub">
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
              <div key={i} className={`reveal reveal-delay-${(i % 2) + 1} intelligence__loop-card`}>
                <div className="intelligence__loop-header">
                  <span className="intelligence__loop-icon">{item.icon}</span>
                  <h3 className="intelligence__loop-title">{item.event}</h3>
                </div>
                <p className="intelligence__loop-desc">{item.response}</p>
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
              <div className="label intelligence__label">Time-Decay Accuracy</div>
              <h2 className="display-lg">Data from 6 months ago shouldn't dictate today's submissions.</h2>
              <p className="text-lg intelligence__time-desc">
                Lender appetites shift. A funder who was aggressively buying restaurant deals in Q1 might have pulled back by Q3. YieldStream automatically de-prioritizes old data to keep every recommendation fresh and current.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { range: '0–30 days', weight: '100%', bar: 100 },
                  { range: '31–90 days', weight: '40%', bar: 40 },
                  { range: '91–180 days', weight: '20%', bar: 20 },
                  { range: '180+ days', weight: '5%', bar: 5 },
                ].map((d, i) => (
                  <div key={i} className="intelligence__time-row">
                    <span className="mono intelligence__time-range">{d.range}</span>
                    <div className="intelligence__time-bar-bg">
                      <div className="intelligence__time-bar-fill" style={{ width: `${d.bar}%` }} />
                    </div>
                    <span className="mono intelligence__time-weight">{d.weight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="card intelligence__progressive-card">
                <div className="label intelligence__progressive-label">Progressive Unlock</div>
                <h3 className="intelligence__progressive-title">AI predictions earn trust before asking for it.</h3>
                <p className="text-sm" style={{ marginBottom: 20 }}>
                  New organizations start with rule-based matching (attribute + global signals). The full AI Predictions view unlocks only after:
                </p>
                <div className="intelligence__progressive-list">
                  {[
                    '10+ recorded outcomes',
                    '3+ qualified lenders in registry',
                    '30+ days of historical data',
                  ].map((req, i) => (
                    <div key={i} className="intelligence__progressive-item">
                      <span className="intelligence__progressive-check">✓</span> {req}
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
