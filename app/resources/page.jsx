'use client';

import Link from 'next/link';
import { useReveal } from '../components/useReveal';

export default function ResourcesPage() {
  useReveal();

  const articles = [
    { category: 'Intelligence', title: 'Why Relationship-Weighted Scoring Changes Everything', desc: 'Two brokers submitting the same deal get different lender recommendations. Here\'s why that\'s the entire point.', date: 'Mar 2026', readTime: '6 min' },
    { category: 'Underwriting', title: 'The 20 Risk Signals Every Bank Statement Contains', desc: 'What AI sees that human underwriters miss — and how automated extraction catches patterns across thousands of data points.', date: 'Mar 2026', readTime: '8 min' },
    { category: 'Strategy', title: 'The Data Flywheel: How Outcome Tracking Compounds Your Advantage', desc: 'After 10 recorded outcomes, your predictions improve by an average of 23%. After 50, you\'re operating with a different product.', date: 'Feb 2026', readTime: '5 min' },
    { category: 'Industry', title: 'MCA Broker Tech Stack in 2026: What\'s Working and What\'s Not', desc: 'We surveyed 40 ISO owners about their current tools. The results confirm what most brokers already know — the tooling is broken.', date: 'Feb 2026', readTime: '10 min' },
    { category: 'Product', title: 'Building the Underwriter\'s Note: Transparent AI for Skeptical Brokers', desc: 'Why we chose human-readable explanations over confidence scores, and how it changed our early user adoption.', date: 'Jan 2026', readTime: '7 min' },
    { category: 'Security', title: 'Multi-Tenant Data Isolation: Why RLS Matters for Broker Platforms', desc: 'Application-level filtering vs database-level enforcement. One protects your data. The other hopes to.', date: 'Jan 2026', readTime: '4 min' },
  ];

  return (
    <>
      <section style={{ padding: '80px 0 40px', background: 'var(--n50)' }}>
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Resources</div>
            <h1 className="display-xl" style={{ marginTop: 12 }}>Insights for MCA brokers<br />who think in systems.</h1>
            <p className="text-lg" style={{ maxWidth: 560, margin: '16px auto 0' }}>
              Deep dives on submission intelligence, lender matching, underwriting automation, and building a data-driven brokerage.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{
            padding: 40, background: 'var(--p900)', borderRadius: 16,
            color: 'white', marginBottom: 'var(--space-3xl)',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'radial-gradient(circle at 80% 30%, rgba(16,185,129,0.1) 0%, transparent 50%)',
              pointerEvents: 'none'
            }} />
            <div style={{ position: 'relative', maxWidth: 600 }}>
              <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--a400)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Featured Guide</span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 600, marginTop: 8, marginBottom: 10, lineHeight: 1.3 }}>
                The ISO Owner's Guide to Submission Intelligence
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, marginBottom: 20 }}>
                A comprehensive breakdown of how data-driven lender matching works, why relationship weighting is the key differentiator, and how to evaluate whether your brokerage is ready for AI-powered submissions.
              </p>
              <span className="btn btn-emerald">Read the Guide →</span>
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid-3">
            {articles.map((article, i) => (
              <article key={i} className={`card reveal reveal-delay-${(i % 3) + 1}`} style={{ cursor: 'pointer' }}>
                <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--p600)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{article.category}</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginTop: 8, marginBottom: 8, lineHeight: 1.4 }}>{article.title}</h3>
                <p className="text-sm" style={{ marginBottom: 16 }}>{article.desc}</p>
                <div style={{ display: 'flex', gap: 12, fontSize: '0.75rem', color: 'var(--n400)' }}>
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime} read</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section section-alt">
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <div className="label" style={{ marginBottom: 12 }}>Stay Informed</div>
            <h2 className="display-md">Get the MCA intelligence briefing.</h2>
            <p className="text-lg" style={{ maxWidth: 480, margin: '12px auto 24px' }}>
              Weekly insights on lender trends, submission strategies, and product updates. No spam, unsubscribe anytime.
            </p>
            <div style={{ display: 'flex', gap: 8, maxWidth: 440, margin: '0 auto' }}>
              <input type="email" placeholder="you@yourbrokerage.com" style={{
                flex: 1, padding: '12px 16px',
                border: '1.5px solid var(--n200)', borderRadius: 8,
                fontSize: '0.9rem',
              }} />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
