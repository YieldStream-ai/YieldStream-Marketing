"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useReveal } from "./components/useReveal";
import CTABanner from "./components/CTABanner/CTABanner";
import HomeHero from "./components/HomeHero";
import FundingFlow from "./components/FundingFlow";
import Hero from "./components/LandingPage/hero";
import HowItWorks from "./components/HowItWorks/index";
import PlatformFeatures from "./components/PlatformFeatures/index";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import "./page.scss";

const QUOTES = [
  {
    num: "01",
    text: "Expectations win deals, but only data sets them with the authority to close.",
  },
  {
    num: "02",
    text: "Speed without precision is just faster failure.",
  },
  {
    num: "03",
    text: "The best brokers don\u2019t guess which lender fits \u2014 they already know.",
  },
];

function RevealQuote() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.05, 0.35], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.05, 0.35], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0.05, 0.35], [40, 0]);
  const blur = useTransform(scrollYProgress, [0.05, 0.35], [8, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);
  const color = useTransform(
    scrollYProgress,
    [0.05, 0.35],
    ["rgb(160, 170, 180)", "rgb(15, 23, 42)"],
  );

  return (
    <div className="home__reveal-container" ref={ref}>
      <section className="home__reveal-quote">
        <div className="container">
          <motion.div
            className="home__reveal-quote-list"
            style={{ opacity, scale, y, filter, color }}
          >
            {QUOTES.map((q) => (
              <div key={q.num} className="home__reveal-quote-item">
                <span className="home__reveal-quote-num">{q.num}.</span>
                <p className="home__reveal-quote-text">{q.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

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

function FirstFold() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.15], [0, 24]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);
  const visibility = useTransform(scrollYProgress, (v) =>
    v > 0.25 ? "hidden" : "visible",
  );

  return (
    <div ref={ref} className="home__first-fold-wrapper">
      <motion.div className="home__first-fold" style={{ filter, opacity, visibility }}>
        <HomeHero />
        <FundingFlow />
      </motion.div>
    </div>
  );
}

export default function Home() {
  useReveal();

  return (
    <>
      {/* ===== FIRST FOLD (blur-fades on scroll) ===== */}
      <FirstFold />

      {/* ===== REVEAL QUOTE (appears as hero dissolves) ===== */}
      <RevealQuote />

      {/* ===== HOW IT WORKS — STEPS ===== */}
      <HowItWorks />

      {/* ===== PLATFORM FEATURES ===== */}
      <PlatformFeatures />

      {/* ===== UNDERWRITER'S NOTE ===== */}
      <section className="section">
        <div className="container">
          <div className="grid-feature reveal">
            <div>
              <div className="label-mono home__feature-label">
                Transparent AI
              </div>
              <h2 className="display-lg">
                Every underwrite analysis
                <br />
                comes with a reason.
              </h2>
              <p className="text-lg" style={{ marginTop: 12 }}>
                YieldStream generates human-readable Underwriter Notes for every
                file—explaining the structural logic behind the score. This
                provides strategic sales positioning for your reps, allowing
                them to defend offers with data and close with certainty. No
                black boxes.
              </p>
              <div className="home__note-section">
                <Link href="/underwriting" className="btn btn-outline">
                  Deep-dive: Underwriting →
                </Link>
              </div>
            </div>
            <div className="home__note-card">
              <div className="home__note-card-glow" />
              <div
                className="mono home__note-label"
                style={{ color: "var(--p600)" }}
              >
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
                <strong style={{ color: "var(--p700)" }}>
                  <span className="mono">$95K/mo</span>
                </strong>{" "}
                with only{" "}
                <strong style={{ color: "var(--p700)" }}>
                  <span className="mono">8.1%</span> stacking
                </strong>
                . 1 NSF was a timing issue (vendor payment). Well within
                tolerance for most lenders.{" "}
                <strong style={{ color: "var(--p700)" }}>
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

      {/* ===== STATS BAR ===== */}
      <section className="section home__stats">
        <div className="container">
          <div className="home__stats-grid reveal">
            {[
              { num: "~120s", label: "PDF to Scored Intelligence" },
              { num: "20+", label: "Risk Signals Extracted" },
              { num: "3x", label: "Faster Deal Preparation" },
              { num: "97%", label: "Extraction Accuracy" },
            ].map((s, i) => (
              <React.Fragment key={s.label}>
                {i > 0 && <div className="home__stats-pipe" />}
                <div className="home__stats-item">
                  <div className="display-stat">{s.num}</div>
                  <div className="label-mono">{s.label}</div>
                </div>
              </React.Fragment>
            ))}
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
