"use client";

import Image from "next/image";
import { FileText, Target, BarChart3, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import "./styles.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 55,
      damping: 18,
      delay,
    },
  }),
};

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

export default function HomeHero() {
  return (
    <section className="home__hero">
      <div className="home__hero-ambient" />
      <div className="container">
        {/* ── Header: headline left, description right ── */}
        <motion.div
          className="home__hero-header"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          <h1 className="home__hero-title">
            The Institutional Underwriting Engine for
            <span className="home__hero-title-muted"> modern brokers.</span>
          </h1>
          <div className="home__hero-right">
          </div>
        </motion.div>

        {/* ── Capability pills ── */}
        <motion.div
          className="home__hero-pills"
          initial="hidden"
          animate="visible"
          custom={0.15}
          variants={fadeUp}
        >
          {VALUE_PROPS.map((prop, i) => (
            <span className="home__hero-pill" key={i} data-tooltip={prop.desc}>
              <prop.icon size={14} strokeWidth={1.5} />
              {prop.title}
            </span>
          ))}
        </motion.div>

        {/* ── Product screenshot + callout wrapper ── */}
        <div className="home__hero-showcase">
          <motion.div
            className="home__hero-screenshot"
            initial="hidden"
            animate="visible"
            custom={0.25}
            variants={fadeUp}
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
            initial="hidden"
            animate="visible"
            custom={0.5}
            variants={fadeUp}
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
              <div className="home__hero-leader home__hero-leader--right">
                <span className="home__hero-leader-dot" />
              </div>
            </div>
          </motion.div>

          {/* ── Score Breakdown callout (bottom-left) ── */}
          <motion.div
            className="home__hero-callout home__hero-callout--left"
            initial="hidden"
            animate="visible"
            custom={0.6}
            variants={fadeUp}
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
              <div className="home__hero-leader home__hero-leader--left">
                <span className="home__hero-leader-dot" />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
