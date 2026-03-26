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
                  National Funding · $350K
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
            Built for brokerages moving $10M+ monthly
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
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <div className="label home__label-spacing">The Problem</div>
            <h2 className="display-lg">
              The MCA industry runs on spray and pray.
              <br />
              That costs real money.
            </h2>
            <p className="text-lg home__section-sub">
              Brokers lose commissions to mismatched submissions every day.
              Relationship knowledge lives in one person's head. Lender
              appetites shift and nobody tracks the change.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                icon: "⚠",
                stat: "$2.3B",
                title: "Lost to Mismatched Submissions",
                desc: "Brokers blast the same file to 10 lenders and hope something sticks. The industry bleeds revenue from preventable declines.",
                bg: "#fef2f2",
                color: "#dc2626",
              },
              {
                icon: "⏱",
                stat: "45 min",
                title: "Per Manual Underwrite",
                desc: "Three statements per deal, ten deals a day. That's 22 hours a week of spreadsheet analysis.",
                bg: "#fffbeb",
                color: "#d97706",
              },
              {
                icon: "∅",
                stat: "0%",
                title: "Decline Intelligence Captured",
                desc: "When a lender declines, the reason dies in an email. No feedback loop, no learning, no improvement.",
                bg: "var(--n100)",
                color: "var(--n600)",
              },
            ].map((card, i) => (
              <div key={i} className={`card reveal reveal-delay-${i + 1}`}>
                <div
                  className="home__card-icon"
                  style={{ background: card.bg, color: card.color }}
                >
                  {card.icon}
                </div>
                <div
                  className="mono home__card-stat"
                  style={{ color: card.color }}
                >
                  {card.stat}
                </div>
                <h3 className="home__card-title">{card.title}</h3>
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
                src="/images/Lender-Buy-Box.png"
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
                <strong style={{ color: "var(--a300)" }}>$95K/mo</strong> with
                only{" "}
                <strong style={{ color: "var(--a300)" }}>8.1% stacking</strong>.
                1 NSF was a timing issue (vendor payment). Well within tolerance
                for most lenders.{" "}
                <strong style={{ color: "var(--a300)" }}>93% confidence</strong>{" "}
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
                icon: "🔒",
                title: "We don't own your relationships",
                desc: "Your lender contacts, submission history, and pipeline are yours — we never reach out to your funders or merchants.",
              },
              {
                icon: "🚫",
                title: "We don't sell your data",
                desc: "No data resale, no shared blacklists, no monetizing your deal flow behind your back.",
              },
              {
                icon: "📦",
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
                quote:
                  "We spent an hour per deal figuring out which lender to submit to. YieldStream cut that to 5 minutes — and our pull-through jumped from 32% to 48%.",
                name: "Mike R.",
                role: "Managing Partner, Pacific Coast Funding",
                initials: "MR",
              },
              {
                quote:
                  "The Underwriter's Notes are a game-changer. My junior reps make lender decisions like 10-year vets. The AI explains everything — and they trust it.",
                name: "Sarah K.",
                role: "COO, Meridian Capital Group",
                initials: "SK",
              },
              {
                quote:
                  "Renewal alerts alone paid for the platform. We caught $2.3M in renewal opportunities in the first 60 days that would've walked to competitors.",
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
