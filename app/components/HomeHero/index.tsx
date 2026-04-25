"use client";

import Image from "next/image";
import { FileText, Target, BarChart3, Cpu } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import "./styles.scss";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const VALUE_PROPS = [
  {
    icon: FileText,
    title: "Document Intelligence",
    desc: "Automated extraction from secure upload links. Raw statements become structured, validated data in seconds.",
  },
  {
    icon: Target,
    title: "Lender Matching",
    desc: "Every deal ranked against lender buy-box criteria and your funded history. Eliminate submission friction.",
  },
  {
    icon: BarChart3,
    title: "Underwriting Analysis",
    desc: "High-fidelity risk signaling with automated NSF detection, debt-stacking analysis, and file scoring.",
  },
  {
    icon: Cpu,
    title: "AI Powered",
    desc: "Intelligence that compounds over time. Models retrain on your pull-through data weekly.",
  },
];

const UNDERWRITING_SIGNALS = [
  {
    status: "advance",
    title: "DSCR 9.14 — strong cash cycle coverage",
    desc: "Above 1.5x threshold",
  },
  {
    status: "caution",
    title: "1 NSF event in statement period",
    desc: "Moderate frequency, narrows pool",
  },
  {
    status: "advance",
    title: "ADB is 19% of monthly revenue",
    desc: "Above 15% threshold for most lenders",
  },
];

const SCORE_BREAKDOWN = [
  { label: "Market signal", value: 82, weight: 25 },
  { label: "Pull-through", value: 91, weight: 50 },
  { label: "Risk match", value: 78, weight: 25 },
];

const COMPOSITE_SCORE = 86;

const HEADLINE_LINES = ["The Institutional", "Underwriting Engine for"];

export default function HomeHero() {
  const reduced = useReducedMotion();

  const initial = (y: number) =>
    reduced ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y, filter: "blur(4px)" };

  const animate = { opacity: 1, y: 0, filter: "blur(0px)" };

  const transition = (duration: number, delay: number) =>
    reduced ? { duration: 0 } : { duration, ease: EASE, delay };

  return (
    <section className="home__hero">
      <div className="home__hero-ambient" />
      <div className="container">
        {/* ── Header: headline left, description right ── */}
        <div className="home__hero-header">
          <h1 className="home__hero-title">
            {HEADLINE_LINES.map((line, i) => (
              <motion.span
                key={i}
                className="home__hero-title-line"
                initial={initial(16)}
                animate={animate}
                transition={transition(0.85, 0.3 + i * 0.1)}
              >
                {line}
              </motion.span>
            ))}
            <motion.span
              className="home__hero-title-line home__hero-title-muted"
              initial={initial(16)}
              animate={animate}
              transition={transition(0.85, 0.5)}
            >
              modern brokers.
            </motion.span>
          </h1>
          <div className="home__hero-right">
          </div>
        </div>

        {/* ── Capability pills ── */}
        <div className="home__hero-pills">
          {VALUE_PROPS.map((prop, i) => (
            <motion.span
              className="home__hero-pill"
              key={i}
              data-tooltip={prop.desc}
              initial={initial(12)}
              animate={animate}
              transition={transition(0.6, 0.95 + i * 0.08)}
            >
              <prop.icon size={14} strokeWidth={1.5} />
              {prop.title}
            </motion.span>
          ))}
        </div>

        {/* ── Product screenshot + callout wrapper ── */}
        <div className="home__hero-showcase">
          <motion.div
            className="home__hero-screenshot"
            initial={initial(24)}
            animate={animate}
            transition={transition(1.1, 1.5)}
          >
            <Image
              src="/underwriting-lenders.png"
              alt="YieldStream underwriting lender scoring interface"
              width={1920}
              height={1080}
              priority
              className="home__hero-screenshot-img"
            />
            <div className="home__hero-screenshot-fade" />
          </motion.div>

          {/* ── Underwriting Signals callout (right) ── */}
          <motion.div
            className="home__hero-callout"
            initial={initial(8)}
            animate={animate}
            transition={transition(0.7, 1.5)}
          >
            <div className="home__hero-callout-card">
              <span className="home__hero-callout-meta">AUTO-COMPUTED</span>
              <div className="home__hero-callout-header">
                <span className="home__hero-callout-header-dot" />
                Underwriting Signals
              </div>
              <ul className="home__hero-callout-list">
                {UNDERWRITING_SIGNALS.map((signal, i) => (
                  <li className="home__hero-callout-item" key={i}>
                    <span className={`home__hero-callout-dot home__hero-callout-dot--${signal.status}`} />
                    <div className="home__hero-callout-item-text">
                      <span className="home__hero-callout-item-title">{signal.title}</span>
                      <span className="home__hero-callout-item-desc">{signal.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <svg
                className="home__hero-leader home__hero-leader--right"
                width="25"
                height="41"
                viewBox="0 0 25 41"
                fill="none"
              >
                <motion.path
                  d="M 25 0.5 L 0.5 0.5 L 0.5 41"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                  fill="none"
                  initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition(0.9, 1.65)}
                />
                <motion.circle
                  cx="0.5"
                  cy="39"
                  r="2"
                  fill="#cbd5e1"
                  initial={reduced ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={transition(0.25, 2.55)}
                />
              </svg>
            </div>
          </motion.div>

          {/* ── Score Breakdown callout (bottom-left) ── */}
          <motion.div
            className="home__hero-callout home__hero-callout--left"
            initial={initial(8)}
            animate={animate}
            transition={transition(0.7, 1.6)}
          >
            <div className="home__hero-callout-card">
              <span className="home__hero-callout-meta">WEIGHTED</span>
              <div className="home__hero-callout-header">
                <span className="home__hero-callout-header-dot" />
                Score Breakdown
              </div>
              <ul className="home__hero-score-bars">
                {SCORE_BREAKDOWN.map((item, i) => (
                  <li className="home__hero-score-bar-row" key={i}>
                    <div className="home__hero-score-bar-label">
                      <span>{item.label}</span>
                      <span className="home__hero-score-bar-value">{item.value}</span>
                    </div>
                    <div className="home__hero-score-bar-track">
                      <div
                        className="home__hero-score-bar-fill"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <svg
                className="home__hero-leader home__hero-leader--left"
                width="51"
                height="161"
                viewBox="0 0 51 161"
                fill="none"
              >
                <motion.path
                  d="M 0.5 161 L 0.5 0.5 L 51 0.5"
                  stroke="#cbd5e1"
                  strokeWidth="1"
                  fill="none"
                  initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={transition(0.9, 1.75)}
                />
                <motion.circle
                  cx="49"
                  cy="0.5"
                  r="2"
                  fill="#cbd5e1"
                  initial={reduced ? { opacity: 1 } : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={transition(0.25, 2.65)}
                />
              </svg>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
