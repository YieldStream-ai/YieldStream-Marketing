"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useReveal } from "./components/useReveal";
import PricingModal from "./components/PricingModal";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks/index";
import PlatformFeatures from "./components/PlatformFeatures/index";
import FundingFlow from "./components/FundingFlow/index";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import "./page.scss";

function RevealWord({ word, scrollYProgress, index, total }) {
  const start = 0.15 + (index / total) * 0.25;
  const end = start + 0.25 / total + 0.06;

  const blur = useTransform(scrollYProgress, [start, end], [8, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);
  const opacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["rgb(100, 116, 139)", "rgb(15, 23, 42)"],
  );

  return (
    <motion.span style={{ filter, opacity, color, display: "inline-block" }}>
      {word}&nbsp;
    </motion.span>
  );
}

function RevealQuote() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0.15, 0.46], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0.15, 0.46], [40, 0]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.15, 0.46],
    ["rgb(248, 248, 248)", "rgb(255, 255, 255)"],
  );

  const headingWords = "AI-POWERED SUBMISSION DESK".split(" ");
  const quoteWords =
    "From PDF to funded. Every statement parsed. Every opportunity scored with intelligence - before you open the file.".split(
      " ",
    );
  const descWords =
    "Trained on your funding history. Tuned to your lenders.".split(" ");
  const allWords = [...headingWords, ...quoteWords, ...descWords];
  const total = allWords.length + 1; // +1 for the divider

  const ruleIndex = headingWords.length + quoteWords.length;
  const ruleStart = 0.15 + (ruleIndex / total) * 0.25;
  const ruleEnd = ruleStart + 0.25 / total + 0.06;
  const ruleBlur = useTransform(scrollYProgress, [ruleStart, ruleEnd], [8, 0]);
  const ruleFilter = useTransform(ruleBlur, (v) => `blur(${v}px)`);
  const ruleOpacity = useTransform(
    scrollYProgress,
    [ruleStart, ruleEnd],
    [0.3, 1],
  );

  // Icon 1 — PDF doc, top-left
  const icon1X = useTransform(scrollYProgress, [0.12, 0.38], [-80, 0]);
  const icon1Y = useTransform(scrollYProgress, [0.12, 0.38], [-60, 0]);
  const icon1Rotate = useTransform(scrollYProgress, [0.12, 0.38], [-360, 0]);
  const icon1Opacity = useTransform(scrollYProgress, [0.12, 0.38], [0, 0.4]);

  // Icon 2 — chart doc, right
  const icon2X = useTransform(scrollYProgress, [0.16, 0.42], [80, 0]);
  const icon2Y = useTransform(scrollYProgress, [0.16, 0.42], [40, 0]);
  const icon2Rotate = useTransform(scrollYProgress, [0.16, 0.42], [360, 0]);
  const icon2Opacity = useTransform(scrollYProgress, [0.16, 0.42], [0, 0.4]);

  // Icon 3 — stacked cards, bottom-left
  const icon3X = useTransform(scrollYProgress, [0.2, 0.44], [-60, 0]);
  const icon3Y = useTransform(scrollYProgress, [0.2, 0.44], [80, 0]);
  const icon3Rotate = useTransform(scrollYProgress, [0.2, 0.44], [-360, 0]);
  const icon3Opacity = useTransform(scrollYProgress, [0.2, 0.44], [0, 0.4]);

  return (
    <div className="home__reveal-container" ref={ref}>
      <motion.section
        className="home__reveal-quote"
        style={{ backgroundColor }}
      >
        {/* Decorative scroll-animated SVG icons */}
        <motion.div
          className="home__reveal-quote-icon home__reveal-quote-icon--top-left"
          style={{
            x: icon1X,
            y: icon1Y,
            rotate: icon1Rotate,
            opacity: icon1Opacity,
          }}
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="12"
              y="6"
              width="40"
              height="52"
              rx="4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <rect
              x="16"
              y="11"
              width="32"
              height="6"
              rx="2"
              fill="currentColor"
              opacity="0.12"
            />
            <line
              x1="16"
              y1="24"
              x2="40"
              y2="24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
            <line
              x1="16"
              y1="30"
              x2="36"
              y2="30"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
            <line
              x1="16"
              y1="36"
              x2="42"
              y2="36"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
            <line
              x1="16"
              y1="42"
              x2="34"
              y2="42"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
            <path
              d="M43 34 L45.5 37 L50 32"
              stroke="hsl(174, 84%, 32%)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <rect
              x="38"
              y="48"
              width="12"
              height="7"
              rx="1.5"
              fill="currentColor"
              opacity="0.08"
              stroke="currentColor"
              strokeWidth="1"
            />
            <text
              x="44"
              y="54"
              textAnchor="middle"
              fontSize="5"
              fontWeight="600"
              fill="currentColor"
              opacity="0.6"
              fontFamily="DM Sans, sans-serif"
            >
              PDF
            </text>
          </svg>
        </motion.div>

        <motion.div
          className="home__reveal-quote-icon home__reveal-quote-icon--right"
          style={{
            x: icon2X,
            y: icon2Y,
            rotate: icon2Rotate,
            opacity: icon2Opacity,
          }}
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="12"
              y="6"
              width="40"
              height="52"
              rx="4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="18"
              y1="16"
              x2="38"
              y2="16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
            <line
              x1="18"
              y1="22"
              x2="34"
              y2="22"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
            <line
              x1="18"
              y1="44"
              x2="46"
              y2="44"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.3"
            />
            <path
              d="M20 42 Q23 34 26 40 Q29 46 32 38 Q34 34 36 40 Q38 44 40 38 L42 36"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              opacity="0.7"
            />
            <circle
              cx="44"
              cy="50"
              r="5"
              fill="hsl(174, 84%, 32%)"
              opacity="0.15"
              stroke="hsl(174, 84%, 32%)"
              strokeWidth="1.5"
            />
            <path
              d="M41.5 50 L43 51.5 L46.5 48"
              stroke="hsl(174, 84%, 32%)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </motion.div>

        <motion.div
          className="home__reveal-quote-icon home__reveal-quote-icon--bottom-left"
          style={{
            x: icon3X,
            y: icon3Y,
            rotate: icon3Rotate,
            opacity: icon3Opacity,
          }}
        >
          <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="10"
              y="34"
              width="44"
              height="22"
              rx="3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="16"
              y1="42"
              x2="22"
              y2="42"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.3"
            />
            <line
              x1="16"
              y1="46"
              x2="20"
              y2="46"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.3"
            />
            <circle
              cx="40"
              cy="45"
              r="5"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.15"
            />
            <rect
              x="12"
              y="26"
              width="44"
              height="22"
              rx="3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="hsl(210, 20%, 98%)"
            />
            <line
              x1="18"
              y1="34"
              x2="24"
              y2="34"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.3"
            />
            <line
              x1="18"
              y1="38"
              x2="22"
              y2="38"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.3"
            />
            <circle
              cx="42"
              cy="37"
              r="5"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.15"
            />
            <rect
              x="14"
              y="18"
              width="44"
              height="22"
              rx="3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              fill="hsl(210, 20%, 98%)"
            />
            <line
              x1="20"
              y1="26"
              x2="26"
              y2="26"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.3"
            />
            <line
              x1="20"
              y1="30"
              x2="24"
              y2="30"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.3"
            />
            <circle
              cx="44"
              cy="29"
              r="5"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.15"
            />
            <rect
              x="26"
              y="22"
              width="16"
              height="30"
              rx="1"
              stroke="hsl(174, 84%, 32%)"
              strokeWidth="2"
              fill="hsl(174, 84%, 32%)"
              opacity="0.12"
            />
            <rect
              x="26"
              y="22"
              width="16"
              height="30"
              rx="1"
              stroke="hsl(174, 84%, 32%)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </motion.div>

        <div className="container">
          <motion.div className="home__reveal-quote-list" style={{ scale, y }}>
            <span className="home__reveal-quote-heading">
              {headingWords.map((word, i) => (
                <RevealWord
                  key={i}
                  word={word}
                  scrollYProgress={scrollYProgress}
                  index={i}
                  total={total}
                />
              ))}
            </span>
            <p className="home__reveal-quote-text">
              {quoteWords.map((word, i) => (
                <RevealWord
                  key={i}
                  word={word}
                  scrollYProgress={scrollYProgress}
                  index={headingWords.length + i}
                  total={total}
                />
              ))}
            </p>
            <div className="home__reveal-quote-footer">
              <motion.hr
                className="home__reveal-quote-rule"
                style={{ filter: ruleFilter, opacity: ruleOpacity }}
              />
              <p className="home__reveal-quote-desc">
                {descWords.map((word, i) => (
                  <RevealWord
                    key={i}
                    word={word}
                    scrollYProgress={scrollYProgress}
                    index={headingWords.length + quoteWords.length + 1 + i}
                    total={total}
                  />
                ))}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
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
      <motion.div
        className="home__first-fold"
        style={{ filter, opacity, visibility }}
      >
        <Hero />
      </motion.div>
    </div>
  );
}

function BuyingSignal({ onOpenPricing }) {
  return (
    <section className="home__buying-signal">
      <div className="home__buying-signal-glow home__buying-signal-glow--1" />
      <div className="home__buying-signal-glow home__buying-signal-glow--2" />
      <div className="container home__buying-signal-inner">
        <span className="home__buying-signal-label">
          Simple &amp; Transparent
        </span>
        <h2 className="home__buying-signal-title">
          Take a look at the pricing.
        </h2>
        <p className="home__buying-signal-sub">
          Straightforward plans built around submission volume — no seat counts,
          no hidden add-ons. Find the one that fits and be live this week.
        </p>
        <div className="home__buying-signal-actions">
          <button onClick={onOpenPricing} className="btn btn-primary btn-lg">
            See Pricing
          </button>
          <Link href="/contact" className="home__buying-signal-link">
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useReveal();
  const [showPricing, setShowPricing] = useState(false);

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

      {/* ===== BUYING SIGNAL ===== */}
      <BuyingSignal onOpenPricing={() => setShowPricing(true)} />
      <PricingModal
        isOpen={showPricing}
        onClose={() => setShowPricing(false)}
      />
    </>
  );
}
