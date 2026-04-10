"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useReveal } from "./components/useReveal";
import CTABanner from "./components/CTABanner/CTABanner";
import BentoShowcase from "./components/BentoShowcase";
import HomeHero from "./components/HomeHero/index";
import HowItWorks from "./components/HowItWorks/index";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import "./page.scss";

function CtaTiltImage() {
  const ref = useRef(null);
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);
  const springX = useSpring(rawX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 150, damping: 20 });
  const rotateY = useTransform(springX, [0, 1], [-12, 12]);
  const rotateX = useTransform(springY, [0, 1], [8, -8]);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width);
    rawY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    rawX.set(0.5);
    rawY.set(0.5);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="home__cta-image-tilt"
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
      >
        <Image
          src="/images/opportunities-cta.png"
          alt="YieldStream opportunities"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="home__cta-image-fade" />
      </motion.div>
    </div>
  );
}



export default function Home() {
  useReveal();

  return (
    <>
      {/* ===== HERO ===== */}
      <HomeHero />

      {/* ===== THE PROBLEM ===== */}
      <section className="home__problem">
        <div className="container">
          <div className="home__problem-layout">
            <div className="home__problem-panel home__problem-panel--without">
              <p className="home__problem-panel-label">WITHOUT YIELDSTREAM</p>
              <h3 className="home__problem-panel-title">Blind</h3>
              <p className="home__problem-panel-body">
                Manage expectations with experience alone. Find out the real
                picture after you've already invested the time.
              </p>
            </div>
            <div className="home__problem-center">
              <p className="home__problem-label">THE PROBLEM</p>
              <h2 className="home__problem-headline">
                Bad expectations kill deals before they start.
              </h2>
              <p className="home__problem-body">
                You know the call — the merchant wants $500K, their bank
                statements tell a different story, and by the time offers come
                back, they've already anchored on a number you couldn't deliver.
                Three weeks wasted.
              </p>
            </div>
            <div className="home__problem-panel home__problem-panel--with">
              <p className="home__problem-panel-label">WITH YIELDSTREAM</p>
              <h3 className="home__problem-panel-title">Informed</h3>
              <p className="home__problem-panel-body">
                See the score, revenue profile, and lender fit within minutes of
                receiving docs — so you can steer the conversation early.
              </p>
            </div>
          </div>
          <div className="home__grid-connector" />
        </div>
      </section>

      {/* ===== HOW IT WORKS — STEPS ===== */}
      <HowItWorks />

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

      {/* ===== BENTO SHOWCASE ===== */}
      <BentoShowcase />

      {/* ===== UNDERWRITER'S NOTE ===== */}
      <section className="section">
        <div className="container">
          <div className="grid-feature reveal">
            <div>
              <div className="label-mono home__feature-label">
                Transparent AI
              </div>
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
