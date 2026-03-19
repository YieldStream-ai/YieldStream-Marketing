'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useReveal } from './components/useReveal';
import CTABanner from './components/CTABanner';

export default function Home() {
  useReveal();

  return (
    <>
      {/* ===== HERO ===== */}
      <section style={{
        padding: '100px 0 80px',
        background: 'linear-gradient(180deg, var(--p50) 0%, var(--n0) 100%)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(circle at 15% 40%, rgba(4,121,135,0.05) 0%, transparent 50%), radial-gradient(circle at 85% 60%, rgba(16,185,129,0.03) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid-feature grid-feature-hero">
            <div>
              {/* Badge */}
              <div className="reveal" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 14px 6px 10px',
                background: 'var(--a50)', border: '1px solid var(--a200)',
                borderRadius: 100, marginBottom: 24
              }}>
                <span style={{
                  width: 8, height: 8, borderRadius: '50%', background: 'var(--a500)',
                  animation: 'pulse 2s infinite'
                }} />
                <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--a700)' }}>
                  Now accepting founding members
                </span>
              </div>

              <h1 className="display-xl reveal" style={{ marginBottom: 20, maxWidth: 560 }}>
                Stop guessing which lenders will{' '}
                <em className="italic teal-gradient">fund.</em>
              </h1>

              <p className="text-lg reveal reveal-delay-1" style={{ maxWidth: 500, marginBottom: 32 }}>
                YieldStream is the submission intelligence platform that learns from every funded and declined deal. Built by a former MCA broker who got tired of spreadsheets.
              </p>

              <div className="reveal reveal-delay-2" style={{ display: 'flex', gap: 12, marginBottom: 40, flexWrap: 'wrap' }}>
                <Link href="/pricing" className="btn btn-primary btn-lg">Start 14-Day Free Trial →</Link>
                <Link href="/features" className="btn btn-outline btn-lg">Explore Features</Link>
              </div>

              {/* Proof stats */}
              <div className="reveal reveal-delay-3" style={{
                display: 'flex', gap: 32, paddingTop: 24,
                borderTop: '1px solid var(--n200)'
              }}>
                {[
                  { num: '94%', label: 'Match Accuracy' },
                  { num: '2.4×', label: 'Faster Funding' },
                  { num: '40hrs', label: 'Saved / Week' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="mono" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--p700)' }}>{s.num}</div>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--n400)', fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Screenshot */}
            <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
              <div className="screenshot screenshot-elevated">
                <Image src="/images/Opportunities-Table.png" alt="YieldStream Opportunities" width={1400} height={800} priority />
              </div>
              {/* Floating card */}
              <div style={{
                position: 'absolute', bottom: -16, left: -24,
                background: 'white', borderRadius: 12, padding: '14px 18px',
                boxShadow: '0 8px 30px rgba(0,0,0,0.1)', border: '1px solid var(--n100)',
                animation: 'floatUp 3s ease-in-out infinite alternate'
              }}>
                <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--n400)', fontWeight: 500, marginBottom: 2 }}>Top Lender Match</div>
                <div className="mono" style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--a600)' }}>99 Score</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--n500)' }}>National Funding · $350K</div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
          @keyframes floatUp { 0% { transform: translateY(0); } 100% { transform: translateY(-8px); } }
        `}</style>
      </section>

      {/* ===== LOGO BAR ===== */}
      <section style={{ padding: '48px 0', borderBottom: '1px solid var(--n100)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="label" style={{ marginBottom: 20, color: 'var(--n400)' }}>
            Built for brokerages moving $10M+ monthly
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap', opacity: 0.45 }}>
            {['Apex Funding', 'BlueVine Capital', 'National Funding', 'Credibly', 'Kapitus', 'Rapid Finance'].map(name => (
              <span key={name} style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--n500)' }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <div className="label" style={{ marginBottom: 12 }}>The Problem</div>
            <h2 className="display-lg">The MCA industry runs on gut feel.<br />That costs real money.</h2>
            <p className="text-lg" style={{ maxWidth: 600, marginTop: 12 }}>
              Brokers lose commissions to mismatched submissions every day. Relationship knowledge lives in one person's head. Lender appetites shift and nobody tracks the change.
            </p>
          </div>
          <div className="grid-3">
            {[
              { icon: '⚠', stat: '$2.3B', title: 'Lost to Mismatched Submissions', desc: 'Brokers submit to wrong lenders based on outdated info. The industry bleeds revenue from preventable declines.', bg: '#fef2f2', color: '#dc2626' },
              { icon: '⏱', stat: '45 min', title: 'Per Manual Underwrite', desc: 'Three statements per deal, ten deals a day. That\'s 22 hours a week of spreadsheet analysis.', bg: '#fffbeb', color: '#d97706' },
              { icon: '∅', stat: '0%', title: 'Decline Intelligence Captured', desc: 'When a lender declines, the reason dies in an email. No feedback loop, no learning, no improvement.', bg: 'var(--n100)', color: 'var(--n600)' },
            ].map((card, i) => (
              <div key={i} className={`card reveal reveal-delay-${i + 1}`}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: card.bg, color: card.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16, fontSize: '1.1rem', fontWeight: 600
                }}>{card.icon}</div>
                <div className="mono" style={{ fontSize: '1.6rem', fontWeight: 600, color: card.color, marginBottom: 4 }}>{card.stat}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: 6 }}>{card.title}</h3>
                <p className="text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURE HIGHLIGHTS ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="label" style={{ marginBottom: 12 }}>Platform</div>
            <h2 className="display-lg">Intelligence at every stage<br />of the deal lifecycle.</h2>
          </div>

          {/* Feature 1 */}
          <div className="grid-feature reveal" style={{ marginBottom: 'var(--space-5xl)' }}>
            <div>
              <div className="label" style={{ marginBottom: 12 }}>AI Lender Matching</div>
              <h3 className="display-md" style={{ marginBottom: 12 }}>Every lender scored. Every match explained.</h3>
              <p className="text-md" style={{ marginBottom: 20 }}>
                Three-layer scoring weighs global performance, your relationship history, and buybox fit — then ranks by expected commission, not just approval probability.
              </p>
              <Link href="/intelligence" className="btn btn-outline btn-sm">Learn about the scoring engine →</Link>
            </div>
            <div className="screenshot screenshot-elevated">
              <Image src="/images/Underwriting-Intelligence.png" alt="AI Lender Matching" width={1400} height={800} />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid-feature reveal" style={{ marginBottom: 'var(--space-5xl)' }}>
            <div className="screenshot screenshot-elevated" style={{ order: -1 }}>
              <Image src="/images/Underwriting-Approval-Comparison.png" alt="Offer Comparison" width={1400} height={800} />
            </div>
            <div>
              <div className="label" style={{ marginBottom: 12 }}>Offer Comparison</div>
              <h3 className="display-md" style={{ marginBottom: 12 }}>Compare every offer. Pick the best one.</h3>
              <p className="text-md" style={{ marginBottom: 20 }}>
                Side-by-side comparison across advance amount, factor rate, term, daily remittance, total payback, and commission. Automated scoring with transparent reasoning.
              </p>
              <Link href="/features" className="btn btn-outline btn-sm">See all features →</Link>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid-feature reveal">
            <div>
              <div className="label" style={{ marginBottom: 12 }}>Deal Pipeline</div>
              <h3 className="display-md" style={{ marginBottom: 12 }}>See every deal. Know where it stands.</h3>
              <p className="text-md" style={{ marginBottom: 20 }}>
                Kanban board or table view. Intake through Funded. Running dollar totals per stage, stale deal alerts, and commission estimates that update as offers arrive.
              </p>
              <Link href="/features" className="btn btn-outline btn-sm">Explore the pipeline →</Link>
            </div>
            <div className="screenshot screenshot-elevated">
              <Image src="/images/Opportunities-Khanban.png" alt="Deal Pipeline" width={1400} height={800} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header reveal">
            <div className="label">How It Works</div>
            <h2 className="display-lg" style={{ color: 'white', marginTop: 12 }}>From intake to funded in four steps.</h2>
          </div>
          <div className="grid-4">
            {[
              { num: '01', title: 'Upload & Enrich', desc: 'Drop bank statements. AI extracts 20+ risk signals — revenue trends, NSF patterns, stacking, DSCR — in under 2 minutes.' },
              { num: '02', title: 'Score & Match', desc: 'Three-layer engine scores every lender against the deal. Global data, your relationships, and buybox fit — ranked by expected yield.' },
              { num: '03', title: 'Submit & Track', desc: 'Generate deal packages, submit to matched lenders, and track responses. Every approval, decline, and counteroffer logged.' },
              { num: '04', title: 'Learn & Improve', desc: 'Outcomes feed back into the model. Funded deals strengthen scores. Declines trigger smart penalties. The system compounds.' },
            ].map((step, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`} style={{
                padding: '28px 24px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
              }}>
                <div className="mono" style={{ fontSize: '0.75rem', color: 'var(--a400)', marginBottom: 14 }}>{step.num}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8, color: 'white' }}>{step.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== UNDERWRITER'S NOTE ===== */}
      <section className="section">
        <div className="container">
          <div className="grid-feature reveal">
            <div>
              <div className="label" style={{ marginBottom: 12 }}>Transparent AI</div>
              <h2 className="display-lg">Every recommendation comes with a reason.</h2>
              <p className="text-lg" style={{ marginTop: 12 }}>
                Other platforms give you a score and say "trust us." YieldStream generates a human-readable Underwriter's Note for every match — explaining the structural logic. No black boxes.
              </p>
              <div style={{ marginTop: 24 }}>
                <Link href="/underwriting" className="btn btn-outline">Deep-dive: Underwriting →</Link>
              </div>
            </div>
            <div style={{
              background: 'var(--p900)', borderRadius: 16,
              padding: 36, color: 'white', position: 'relative', overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(circle at 0% 100%, rgba(16,185,129,0.12) 0%, transparent 50%)',
                pointerEvents: 'none'
              }} />
              <div className="mono" style={{ fontSize: '0.72rem', color: 'var(--a400)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 14, position: 'relative' }}>
                ✎ Underwriter's Note
              </div>
              <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', position: 'relative' }}>
                Growing catering operation — <strong style={{ color: 'var(--a300)' }}>$95K/mo</strong> with only <strong style={{ color: 'var(--a300)' }}>8.1% stacking</strong>. 1 NSF was a timing issue (vendor payment). Well within tolerance for most lenders. <strong style={{ color: 'var(--a300)' }}>93% confidence</strong> · Revenue: Growing
              </p>
              <div style={{
                marginTop: 20, paddingTop: 14,
                borderTop: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', gap: 20, position: 'relative'
              }}>
                <span className="mono" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>Napa Valley Catering Co</span>
                <span className="mono" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)' }}>$150K requested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">What Brokers Say</div>
            <h2 className="display-lg" style={{ marginTop: 12 }}>Trusted by the brokers<br />who close the most deals.</h2>
          </div>
          <div className="grid-3">
            {[
              { quote: "We spent an hour per deal figuring out which lender to submit to. YieldStream cut that to 5 minutes — and our pull-through jumped from 32% to 48%.", name: 'Mike R.', role: 'Managing Partner, Pacific Coast Funding', initials: 'MR' },
              { quote: "The Underwriter's Notes are a game-changer. My junior reps make lender decisions like 10-year vets. The AI explains everything — and they trust it.", name: 'Sarah K.', role: 'COO, Meridian Capital Group', initials: 'SK' },
              { quote: "Renewal alerts alone paid for the platform. We caught $2.3M in renewal opportunities in the first 60 days that would've walked to competitors.", name: 'James T.', role: 'CEO, Summit Funding Partners', initials: 'JT' },
            ].map((t, i) => (
              <div key={i} className={`card reveal reveal-delay-${i + 1}`}>
                <div style={{ color: '#f59e0b', fontSize: '0.85rem', marginBottom: 10, letterSpacing: 2 }}>★★★★★</div>
                <p style={{ fontSize: '0.92rem', color: 'var(--n600)', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' }}>"{t.quote}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'var(--p100)', color: 'var(--p700)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '0.78rem'
                  }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{t.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--n400)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
