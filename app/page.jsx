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
        <div className="home__hero-mesh" />
        <div className="container home__hero-inner">
          <div className="label-mono reveal">Submission Intelligence</div>

          <h1 className="display-xl reveal">
            Submission Intelligence
            <br />
            for the High-Volume Broker.
          </h1>

          <p className="text-lg reveal reveal-delay-1 home__hero-sub">
            Automate MCA underwriting and lender matching,
            from submission to funding.
          </p>

          <div className="reveal reveal-delay-2 home__hero-actions">
            <Link href="/pricing" className="btn btn-primary btn-lg">
              Get Started
            </Link>
          </div>
        </div>

        <div className="container reveal reveal-delay-3">
          <div className="home__hero-mockup">
            <Image
              src="/images/Opportunities-Table.png"
              alt="YieldStream Opportunities Dashboard"
              width={1400}
              height={800}
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== PLATFORM OUTCOMES — BENTO GRID ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label-mono">Platform</div>
            <h2 className="display-lg" style={{ marginTop: 12 }}>
              Intelligence at every stage
              <br />
              of the deal lifecycle.
            </h2>
          </div>

          <div className="home__bento-grid reveal">
            {/* Card 1 — Wide */}
            <div className="home__bento-card home__bento-card--wide">
              <div className="home__bento-card-content">
                <div className="label-mono">Extraction Precision</div>
                <h3 className="display-md home__feature-heading">
                  Upload a PDF. Get an underwrite in minutes.
                </h3>
                <p className="text-md home__feature-desc">
                  AI extracts revenue trends, NSF patterns, stacking signals,
                  and 20+ risk indicators from bank statements — with audit-ready
                  verified data.
                </p>
                <Link href="/underwriting" className="btn btn-outline btn-sm">
                  Learn about underwriting →
                </Link>
              </div>
              <div className="screenshot">
                <Image
                  src="/images/Underwriting-Intelligence.png"
                  alt="AI Bank Statement Analysis"
                  width={1400}
                  height={800}
                  priority
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="home__bento-card">
              <div className="label-mono">Market Matching</div>
              <span className="pill pill--accent">AI Lender Matching</span>
              <h3 className="display-md home__feature-heading">
                Every lender scored. Every match explained.
              </h3>
              <p className="text-md home__feature-desc">
                Three-layer scoring weighs global performance, your
                relationship history, and buybox fit — ranked by expected yield.
              </p>
              <div className="screenshot">
                <Image
                  src="/images/Lender-Edit.png"
                  alt="AI Lender Matching"
                  width={1400}
                  height={800}
                  priority
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="home__bento-card">
              <div className="label-mono">Unified Workflow</div>
              <span className="pill pill--accent">Deal Pipeline</span>
              <h3 className="display-md home__feature-heading">
                See every deal. Know where it stands.
              </h3>
              <p className="text-md home__feature-desc">
                Kanban or table view with running dollar totals per stage,
                stale deal alerts, and commission estimates.
              </p>
              <div className="screenshot">
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
        </div>
      </section>

      {/* ===== INTELLIGENCE LAYER — DARK SECTION ===== */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label-mono" style={{ color: "var(--a400)" }}>
              Intelligence Layer
            </div>
            <h2 className="display-lg home__section-header-title">
              From raw PDF to funded deal.
              <br />
              Every signal extracted. Every lender scored.
            </h2>
          </div>
          <div className="home__intelligence-grid">
            {[
              {
                num: "01",
                title: "Clarity",
                desc: "Upload bank statements. AI extracts 20+ risk signals — revenue trends, NSF patterns, stacking, DSCR — in under 120 seconds.",
              },
              {
                num: "02",
                title: "Match",
                desc: "Three-layer scoring engine ranks every lender by expected yield. Global data, your relationships, and buybox fit.",
              },
              {
                num: "03",
                title: "Funding",
                desc: "Submit to matched lenders, track responses, and close. Every outcome feeds back into the model.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} home__intelligence-step`}
              >
                <span className="mono">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="section home__stats">
        <div className="container">
          <div className="home__stats-grid reveal">
            {[
              { num: "~120s", label: "PDF to Scored Intelligence" },
              { num: "20+", label: "Risk Signals Extracted" },
              { num: "3x", label: "Faster Deal Preparation" },
              { num: "97%", label: "Extraction Accuracy" },
            ].map((s) => (
              <div key={s.label} className="home__stats-item">
                <div className="display-stat">{s.num}</div>
                <div className="label-mono">{s.label}</div>
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
              <div className="label-mono home__feature-label">Transparent AI</div>
              <h2 className="display-lg">
                Every recommendation
                <br />
                comes with a reason.
              </h2>
              <p className="text-lg" style={{ marginTop: 12 }}>
                YieldStream generates a human-readable Underwriter&apos;s Note
                for every match — explaining the structural logic behind the
                score. No black boxes.
              </p>
              <div className="home__note-section">
                <Link href="/underwriting" className="btn btn-outline">
                  Deep-dive: Underwriting →
                </Link>
              </div>
            </div>
            <div className="home__note-card">
              <div className="home__note-card-glow" />
              <div className="mono home__note-label">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    width: 14,
                    height: 14,
                    display: "inline",
                    verticalAlign: "middle",
                    marginRight: 4,
                  }}
                >
                  <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                </svg>{" "}
                Underwriter&apos;s Note
              </div>
              <p className="home__note-text">
                Growing catering operation —{" "}
                <strong style={{ color: "var(--a300)" }}>
                  <span className="mono">$95K/mo</span>
                </strong>{" "}
                with only{" "}
                <strong style={{ color: "var(--a300)" }}>
                  <span className="mono">8.1%</span> stacking
                </strong>
                . 1 NSF was a timing issue (vendor payment). Well within
                tolerance for most lenders.{" "}
                <strong style={{ color: "var(--a300)" }}>
                  <span className="mono">93%</span> confidence
                </strong>{" "}
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

      <CTABanner
        headline="Start closing smarter."
        sub="Join brokers automating their submission desk with AI-powered lender matching."
        primaryText="Get Started"
        primaryHref="/pricing"
        secondaryText="Schedule a Demo"
        secondaryHref="/contact"
      />
    </>
  );
}
