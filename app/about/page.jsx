'use client';

import { useReveal } from '../components/useReveal';
import CTABanner from '../components/CTABanner';

export default function AboutPage() {
  useReveal();

  return (
    <>
      <section style={{ padding: '80px 0 60px', background: 'var(--n50)' }}>
        <div className="container-narrow">
          <div className="section-header center reveal">
            <div className="label">About YieldStream</div>
            <h1 className="display-xl" style={{ marginTop: 12 }}>Built by a broker who<br />got tired of spreadsheets.</h1>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section">
        <div className="container-narrow">
          <div className="reveal" style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--n600)' }}>
            <p style={{ marginBottom: 20 }}>
              I spent years as an MCA broker. Every day was the same: pull up bank statements, open a spreadsheet, manually calculate revenue and daily balances, check for NSFs, try to remember which lender was funding restaurant deals this month, and hope I picked the right one.
            </p>
            <p style={{ marginBottom: 20 }}>
              When a deal got declined, the reason lived in an email I'd never look at again. When my best lender tightened their buybox, I found out three wasted submissions later. When a new rep joined the team, it took months before they could make decent lender decisions — because all the relationship knowledge lived in my head.
            </p>
            <p style={{ marginBottom: 20 }}>
              <strong style={{ color: 'var(--n800)' }}>YieldStream exists because that workflow is broken.</strong> Not because the brokers are bad — they're not. The tools are bad. CRMs store data but don't think. Spreadsheets track numbers but don't learn. Nobody builds software for the specific, high-stakes, relationship-driven work that MCA brokers actually do.
            </p>
            <p style={{ marginBottom: 20 }}>
              So I built it. YieldStream is the platform I wished existed when I was running a brokerage. It analyzes bank statements in minutes instead of hours. It scores every lender against every deal using three layers of intelligence. It learns from every funded and declined deal. And it explains every recommendation in plain English — because brokers don't trust black boxes, and they shouldn't have to.
            </p>
            <p>
              We're just getting started. The first 20 founding members will shape what this platform becomes. If you're an ISO owner who's tired of gut-feel submissions and spreadsheet underwriting, I'd love to show you what's possible.
            </p>
          </div>
          <div className="reveal" style={{ marginTop: 'var(--space-2xl)', paddingTop: 'var(--space-xl)', borderTop: '1px solid var(--n200)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'var(--p100)', color: 'var(--p700)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '1.1rem',
              }}>JD</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '1.05rem' }}>Joshua Dinh</div>
                <div className="text-sm">Founder & CEO, YieldStream.ai</div>
                <div className="text-sm">Former MCA Broker</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Our Principles</div>
            <h2 className="display-lg" style={{ marginTop: 12 }}>How we build.</h2>
          </div>
          <div className="grid-3">
            {[
              { title: 'Transparent AI', desc: 'Every recommendation comes with a reason. No black boxes. If you can\'t explain why the system made a decision, the system shouldn\'t make that decision.' },
              { title: 'Broker-First Design', desc: 'We build for the people who use this every day — not for demo screenshots. Every feature starts with "would this actually change how a broker works?"' },
              { title: 'Compounding Intelligence', desc: 'The platform gets smarter with every deal you process. Your data is your moat. Six months of outcome data produces dramatically better predictions than Day 1.' },
              { title: 'Data Privacy as a Feature', desc: 'Your lender relationships, pull-through rates, and commission data are your competitive advantage. We enforce isolation at the database level, not the application level.' },
              { title: 'Earn Trust Progressively', desc: 'New users start with rule-based matching. AI predictions unlock after you\'ve built enough data. We\'d rather under-promise than erode confidence with thin predictions.' },
              { title: 'Build in Public', desc: 'Founding members see the roadmap, vote on features, and get a direct line to the team. We ship fast and iterate based on real broker feedback.' },
            ].map((v, i) => (
              <div key={i} className={`card reveal reveal-delay-${(i % 3) + 1}`}>
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 6 }}>{v.title}</h3>
                <p className="text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Join the founding team."
        sub="20 spots. Shape the product. Lock in the lowest rate forever."
        primaryText="Claim Founding Spot →"
      />
    </>
  );
}
