"use client";

import Link from "next/link";
import Image from "next/image";
import { useReveal } from "./components/useReveal";
import CTABanner from "./components/CTABanner";
import "./page.scss";

export default function Home() {
  useReveal();

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="home__hero">
        <div className="home__hero-glow" />
        <div className="container home__hero-inner">
          <div className="grid-feature grid-feature-hero">
            <div>
              {/* Badge */}
              <div className="reveal home__badge">
                <span className="home__badge-dot" />
                <span className="home__badge-text">
                  Now accepting founding members
                </span>
              </div>

              <h1 className="display-xl reveal home__hero-headline">
                MCA Submission
                <em className="italic teal-gradient"> Intelligence.</em>
              </h1>

              <p className="text-lg reveal reveal-delay-1 home__hero-sub">
                Decode lender appetite and predict funding outcomes with
                precision underwriting. Compare offers, identify high-yield
                routes, and automate the manual chaos of the submission desk.
              </p>

              <div className="reveal reveal-delay-2 home__hero-actions">
                <Link href="/pricing" className="btn btn-primary btn-lg">
                  Get Started →
                </Link>
                <Link href="/features" className="btn btn-outline btn-lg">
                  Platform Overview
                </Link>
              </div>

              {/* Proof stats */}
              <div className="reveal reveal-delay-3 home__hero-stats">
                {[
                  { num: "94%", label: "Match Accuracy" },
                  { num: "2.4×", label: "Throughput Velocity" },
                  { num: "40hrs", label: "Internal Capacity Gained" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="mono home__stat-num">{s.num}</div>
                    <div className="home__stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Screenshot */}
            <div className="reveal reveal-delay-2 home__hero-screenshot">
              <div className="screenshot screenshot-elevated">
                <Image
                  src="/images/Opportunities-Table.png"
                  alt="YieldStream Opportunities"
                  width={1400}
                  height={800}
                  priority
                />
              </div>
              {/* Floating card */}
              <div className="home__floating-card">
                <div className="home__floating-card-label">
                  Top Lender Match
                </div>
                <div className="mono home__floating-card-score">99 Score</div>
                <div className="home__floating-card-detail">
                  National Funding · <span className="mono">$350K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOGO BAR ===== */}
      <section className="home__logo-bar">
        <div className="container home__logo-bar-inner">
          <div className="label home__logo-bar-label">
            Built for brokerages moving <span className="mono">$10M+</span> monthly
          </div>
          <div className="home__logo-bar-names">
            {[
              "Apex Funding",
              "BlueVine Capital",
              "National Funding",
              "Credibly",
              "Kapitus",
              "Rapid Finance",
            ].map((name) => (
              <span key={name} className="home__logo-bar-name">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="home__problem">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label home__label-spacing">The Cost of Guesswork</div>
            <h2 className="display-md">
              The MCA industry runs on spray and pray.
              <br />
              That costs real money.
            </h2>
            <p className="text-lg home__section-sub" style={{ maxWidth: 640, margin: '10px auto 0' }}>
              Brokers lose commissions to mismatched submissions every day.
              Relationship knowledge lives in one person&apos;s head. Lender appetites shift
              and nobody tracks the change.
            </p>
          </div>
          <div className="home__problem-columns">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                ),
                stat: "$2.3B",
                statUnit: null,
                title: "Lost to Blind Submissions",
                desc: "Brokers blast the same file to 10 lenders and hope something sticks. Mismatched deals get declined on sight — and every decline burns a relationship.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                stat: "45",
                statUnit: "min",
                title: "Burned Per Manual Underwrite",
                desc: "Three bank statements, ten deals a day. Your team is spending 22+ hours a week on spreadsheet analysis that a machine should handle in seconds.",
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                  </svg>
                ),
                stat: "0",
                statUnit: "%",
                title: "Decline Intelligence Captured",
                desc: "When a lender passes, the reason dies in an email thread. No pattern recognition, no feedback loop — the same mistakes repeat deal after deal.",
              },
            ].map((col, i) => (
              <div key={i} className={`home__problem-col reveal reveal-delay-${i + 1}`}>
                <div className="home__problem-icon">
                  {col.icon}
                </div>
                <div className="home__problem-stat">
                  {col.stat}
                  {col.statUnit && <span className="home__problem-stat-unit">{col.statUnit}</span>}
                </div>
                <h3 className="home__problem-col-title">{col.title}</h3>
                <p className="home__problem-col-desc">{col.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURE HIGHLIGHTS ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <div className="label home__label-spacing">Platform</div>
            <h2 className="display-lg">
              Intelligence at every stage
              <br />
              of the deal lifecycle.
            </h2>
          </div>

          {/* Feature 1 */}
          <div className="grid-feature reveal home__feature-block">
            <div>
              <div className="label home__feature-label">
                AI Lender Matching
              </div>
              <h3 className="display-md home__feature-heading">
                Every lender scored. Every match explained.
              </h3>
              <p className="text-md home__feature-desc">
                Three-layer scoring weighs global performance, your relationship
                history, and buybox fit — then ranks by expected commission, not
                just approval probability.
              </p>
              <Link href="/intelligence" className="btn btn-outline btn-sm">
                Learn about the scoring engine →
              </Link>
            </div>
            <div className="screenshot screenshot-elevated">
              <Image
                src="/images/Lender-Edit.png"
                alt="AI Lender Matching"
                width={1400}
                height={800}
                priority
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="grid-feature reveal home__feature-block">
            <div className="screenshot screenshot-elevated home__screenshot-order">
              <Image
                src="/images/Underwriting-Approval-Comparison.png"
                alt="Offer Comparison"
                width={1400}
                height={800}
                priority
              />
            </div>
            <div>
              <div className="label home__feature-label">Offer Comparison</div>
              <h3 className="display-md home__feature-heading">
                Compare every offer. Pick the best one.
              </h3>
              <p className="text-md home__feature-desc">
                Side-by-side comparison across advance amount, factor rate,
                term, daily remittance, total payback, and commission. Automated
                scoring with transparent reasoning.
              </p>
              <Link href="/features" className="btn btn-outline btn-sm">
                See all features →
              </Link>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="grid-feature reveal home__feature-block home__feature-block--last">
            <div>
              <div className="label home__feature-label">Deal Pipeline</div>
              <h3 className="display-md home__feature-heading">
                See every deal. Know where it stands.
              </h3>
              <p className="text-md home__feature-desc">
                Kanban board or table view. Intake through Funded. Running
                dollar totals per stage, stale deal alerts, and commission
                estimates that update as offers arrive.
              </p>
              <Link href="/features" className="btn btn-outline btn-sm">
                Explore the pipeline →
              </Link>
            </div>
            <div className="screenshot screenshot-elevated">
              <Image
                src="/images/Opportunities-Kanban.png"
                alt="Deal Pipeline"
                width={1400}
                height={800}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header reveal">
            <div className="label">How It Works</div>
            <h2 className="display-lg home__section-header-title">
              From intake to funded in four steps.
            </h2>
          </div>
          <div className="grid-4">
            {[
              {
                num: "01",
                title: "Upload & Enrich",
                desc: "Drop bank statements. AI extracts 20+ risk signals — revenue trends, NSF patterns, stacking, DSCR — in under 2 minutes.",
              },
              {
                num: "02",
                title: "Score & Match",
                desc: "Three-layer engine scores every lender against the deal. Global data, your relationships, and buybox fit — ranked by expected yield.",
              },
              {
                num: "03",
                title: "Submit & Track",
                desc: "Generate deal packages, submit to matched lenders, and track responses. Every approval, decline, and counteroffer logged.",
              },
              {
                num: "04",
                title: "Learn & Improve",
                desc: "Outcomes feed back into the model. Funded deals strengthen scores. Declines trigger smart penalties. The system compounds.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} home__how-step`}
              >
                <div className="mono home__how-step-num">{step.num}</div>
                <h3 className="home__how-step-title">{step.title}</h3>
                <p className="home__how-step-desc">{step.desc}</p>
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
              <div className="label home__feature-label">Transparent AI</div>
              <h2 className="display-lg">
                Every recommendation comes with a reason.
              </h2>
              <p className="text-lg" style={{ marginTop: 12 }}>
                Other platforms give you a score and say "trust us." YieldStream
                generates a human-readable Underwriter's Note for every match —
                explaining the structural logic. No black boxes.
              </p>
              <div className="home__note-section">
                <Link href="/underwriting" className="btn btn-outline">
                  Deep-dive: Underwriting →
                </Link>
              </div>
            </div>
            <div className="home__note-card">
              <div className="home__note-card-glow" />
              <div className="mono home__note-label">✎ Underwriter's Note</div>
              <p className="home__note-text">
                Growing catering operation —{" "}
                <strong style={{ color: "var(--a300)" }}><span className="mono">$95K/mo</span></strong> with
                only{" "}
                <strong style={{ color: "var(--a300)" }}><span className="mono">8.1%</span> stacking</strong>.
                1 NSF was a timing issue (vendor payment). Well within tolerance
                for most lenders.{" "}
                <strong style={{ color: "var(--a300)" }}><span className="mono">93%</span> confidence</strong>{" "}
                · Revenue: Growing
              </p>
              <div className="home__note-footer">
                <span className="mono home__note-meta">
                  Napa Valley Catering Co
                </span>
                <span className="mono home__note-meta">$150K requested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DATA TRUST ===== */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Data Trust</div>
            <h2 className="display-lg home__section-header-title">
              Your data stays yours.
            </h2>
            <p className="text-lg home__section-sub">
              Your lender list is proprietary. We never contact funders or
              merchants on your behalf. No data resale. No shared blacklists.
              Full export anytime.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Shield outline */}
                    <path d="M24 4L6 12v12c0 11 8 18 18 20 10-2 18-9 18-20V12L24 4z" />
                    {/* Keyhole circle */}
                    <circle cx="24" cy="22" r="4" />
                    {/* Keyhole slot */}
                    <path d="M24 26v6" />
                  </svg>
                ),
                title: "We don't own your relationships",
                desc: "Your lender contacts, submission history, and pipeline are yours — we never reach out to your funders or merchants.",
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Data silo / vault cylinder */}
                    <ellipse cx="24" cy="12" rx="12" ry="4" />
                    <path d="M12 12v24c0 2.2 5.4 4 12 4s12-1.8 12-4V12" />
                    <ellipse cx="24" cy="24" rx="12" ry="4" />
                    {/* Strike-through diagonal */}
                    <line x1="8" y1="8" x2="40" y2="40" strokeWidth="2" />
                  </svg>
                ),
                title: "We don't sell your data",
                desc: "No data resale, no shared blacklists, no monetizing your deal flow behind your back.",
              },
              {
                icon: (
                  <svg viewBox="0 0 48 48" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Server rack unit */}
                    <rect x="8" y="8" width="24" height="12" rx="2" />
                    <rect x="8" y="24" width="24" height="12" rx="2" />
                    {/* Drive indicators */}
                    <circle cx="14" cy="14" r="1.5" />
                    <circle cx="14" cy="30" r="1.5" />
                    <line x1="20" y1="14" x2="26" y2="14" />
                    <line x1="20" y1="30" x2="26" y2="30" />
                    {/* Outbound arrow */}
                    <path d="M36 28l6-4-6-4" />
                    <line x1="32" y1="24" x2="42" y2="24" />
                  </svg>
                ),
                title: "You can leave with everything",
                desc: "Full data export anytime. No lock-in, no hostage negotiations. Your business stays portable.",
              },
            ].map((c, i) => (
              <div className="home__trust-card reveal" key={i}>
                <div className="home__trust-icon">{c.icon}</div>
                <h3 className="text-lg fw-600">{c.title}</h3>
                <p className="text-md">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Early Access Members</div>
            <h2 className="display-lg home__section-header-mt">
              What our early partners
              <br />
              are saying.
            </h2>
          </div>
          <div className="grid-3">
            {[
              {
                quote: (<>We spent an hour per deal figuring out which lender to submit to. YieldStream cut that to <span className="mono">5</span> minutes — and our pull-through jumped from <span className="mono">32%</span> to <span className="mono">48%</span>.</>),
                name: "Mike R.",
                role: "Managing Partner, Pacific Coast Funding",
                initials: "MR",
              },
              {
                quote: "The Underwriter's Notes are a game-changer. My junior reps make lender decisions like 10-year vets. The AI explains everything — and they trust it.",
                name: "Sarah K.",
                role: "COO, Meridian Capital Group",
                initials: "SK",
              },
              {
                quote: (<>Renewal alerts alone paid for the platform. We caught <span className="mono">$2.3M</span> in renewal opportunities in the first <span className="mono">60</span> days that would've walked to competitors.</>),
                name: "James T.",
                role: "CEO, Summit Funding Partners",
                initials: "JT",
              },
            ].map((t, i) => (
              <div key={i} className={`card reveal reveal-delay-${i + 1}`}>
                <div className="home__testimonial-stars">★★★★★</div>
                <p className="home__testimonial-quote">"{t.quote}"</p>
                <div className="home__testimonial-author">
                  <div className="home__testimonial-avatar">{t.initials}</div>
                  <div>
                    <div className="home__testimonial-name">{t.name}</div>
                    <div className="home__testimonial-role">{t.role}</div>
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
