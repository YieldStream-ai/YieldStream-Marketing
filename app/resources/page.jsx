'use client';

import Link from 'next/link';
import { useReveal } from '../components/useReveal';
import './resources.scss';

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
      <section className="resources__hero">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Resources</div>
            <h1 className="display-xl resources__hero-title">Insights for MCA brokers<br />who think in systems.</h1>
            <p className="text-lg resources__hero-sub">
              Deep dives on submission intelligence, lender matching, underwriting automation, and building a data-driven brokerage.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="section">
        <div className="container">
          <Link href="/resources/ISO-OwnersGuide" className="reveal resources__featured" style={{ textDecoration: 'none' }}>
            <div className="resources__featured-glow" />
            <div className="resources__featured-inner">
              <span className="mono resources__featured-label">Featured Guide</span>
              <h2 className="resources__featured-title">
                The ISO Owner's Guide to Submission Intelligence
              </h2>
              <p className="resources__featured-desc">
                A comprehensive breakdown of how data-driven lender matching works, why relationship weighting is the key differentiator, and how to evaluate whether your brokerage is ready for AI-powered submissions.
              </p>
              <span className="btn btn-emerald">Read the Guide →</span>
            </div>
          </Link>

          {/* Article Grid */}
          <div className="grid-3">
            {articles.map((article, i) => (
              <article key={i} className={`card reveal reveal-delay-${(i % 3) + 1} resources__article`}>
                <span className="mono resources__article-category">{article.category}</span>
                <h3 className="resources__article-title">{article.title}</h3>
                <p className="text-sm resources__article-desc">{article.desc}</p>
                <div className="resources__article-meta">
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
        <div className="container-narrow resources__newsletter">
          <div className="reveal">
            <div className="label resources__newsletter-label">Stay Informed</div>
            <h2 className="display-md">Get the MCA intelligence briefing.</h2>
            <p className="text-lg resources__newsletter-desc">
              Weekly insights on lender trends, submission strategies, and product updates. No spam, unsubscribe anytime.
            </p>
            <div className="resources__newsletter-form">
              <input type="email" placeholder="you@yourbrokerage.com" className="resources__newsletter-input" />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
