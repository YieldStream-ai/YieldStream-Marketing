"use client";

import React, { useState } from "react";
import { Crosshair, MessageSquare, AlertTriangle, RefreshCw } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LenderOrbit from "../LenderSignalOrbit";
import "./styles.scss";

const FEATURES = [
  {
    icon: Crosshair,
    title: "Composite scoring across 4 signal layers",
    desc: "Market signal, your pull-through history, risk match, and funding velocity — weighted by what actually predicts closes in your book.",
  },
  {
    icon: MessageSquare,
    title: "Plain-English reasons, not black-box math",
    desc: 'Every rank comes with the why: "Clears FICO and tenure · Revenue 10% below minimum." No opaque percentiles.',
  },
  {
    icon: AlertTriangle,
    title: "Shared-blocker detection",
    desc: "When your top matches all fail for the same reason, we surface it once — with a one-click path to clean up the file instead of submitting to a dead deal.",
  },
  {
    icon: RefreshCw,
    title: "Learns from your funded deals",
    desc: "Your pull-through rates retrain the model weekly. Lenders that fund your deals climb. Lenders that decline drop. Compounds over time.",
  },
];

const BARS = [
  { height: 92, tier: "strong", lender: "BlueVine" },
  { height: 88, tier: "strong", lender: "Forward" },
  { height: 82, tier: "strong", lender: "Kapitus" },
  { height: 76, tier: "inbox" },
  { height: 68, tier: "inbox" },
  { height: 60, tier: "inbox" },
  { height: 52, tier: "inbox" },
  { height: 44, tier: "outside" },
  { height: 38, tier: "outside" },
  { height: 30, tier: "outside" },
  { height: 24, tier: "outside" },
  { height: 18, tier: "outside" },
];

const AI_INSIGHTS: Record<number, { text: string; meta: string }> = {
  0: {
    text: "Two strong matches detected. Submit to BlueVine first — they've funded 2 similar deals in 60 days with 78% pull-through.",
    meta: "Updated 14 seconds ago",
  },
  1: {
    text: "Forward Financing is accepting this revenue tier again. 3 approvals on similar profiles this week — avg. advance $42K.",
    meta: "Updated 8 seconds ago",
  },
  2: {
    text: "Kapitus has loosened FICO floors to 580 this quarter. Good fallback if BlueVine counters — historically funds 4 days faster.",
    meta: "Updated 22 seconds ago",
  },
};

function LenderPanel() {
  const [activeBar, setActiveBar] = useState(0);
  const insight = AI_INSIGHTS[activeBar];

  return (
    <div className="intel__panel">
      <div className="intel__panel-header">
        <span className="intel__panel-title">
          Lender Panel · <span className="intel__panel-count">8 scored</span>
        </span>
        <span className="intel__panel-live">
          <span className="intel__panel-live-dot" />
          Live
        </span>
      </div>

      <div className="intel__chart">
        <div className="intel__chart-bars">
          {BARS.map((bar, i) => (
            <div
              key={i}
              className={`intel__bar intel__bar--${bar.tier}${bar.lender ? " intel__bar--interactive" : ""}${i === activeBar ? " intel__bar--active" : ""}`}
              style={{ "--bar-height": `${bar.height}%` } as React.CSSProperties}
              onMouseEnter={() => bar.lender && setActiveBar(i)}
            />
          ))}
        </div>
        <div className="intel__chart-legend">
          <span className="intel__legend-item">
            <span className="intel__legend-dot intel__legend-dot--strong" />
            Strong match (80+)
          </span>
          <span className="intel__legend-item">
            <span className="intel__legend-dot intel__legend-dot--inbox" />
            In-box (48–79)
          </span>
          <span className="intel__legend-item">
            <span className="intel__legend-dot intel__legend-dot--outside" />
            Outside box
          </span>
        </div>
      </div>

      <div className="intel__ai-card">
        <div className="intel__ai-badge">AI</div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBar}
            className="intel__ai-body"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
          >
            <p className="intel__ai-text">{insight.text}</p>
            <span className="intel__ai-meta">{insight.meta}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function Intelligence() {
  return (
    <section className="section intel">
      <div className="container">
        <div className="intel__grid reveal">
          <div className="intel__content">
            <div className="section-rule" />
            <div className="label-mono">Intelligence</div>
            <h2 className="display-lg" style={{ marginTop: 12 }}>
              Every lender, scored the moment a deal lands.
            </h2>
            <p className="intel__desc">
              YieldStream learns each lender's buy-box from your submission
              history — FICO thresholds, revenue floors, industry preferences,
              funding velocity — then ranks them against every new deal in real
              time.
            </p>

            <div className="intel__features">
              {FEATURES.map((f, i) => (
                <div className="intel__feature" key={i}>
                  <div className="intel__feature-icon">
                    <f.icon size={16} strokeWidth={1.5} />
                  </div>
                  <div className="intel__feature-body">
                    <h3 className="intel__feature-title">{f.title}</h3>
                    <p className="intel__feature-text">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="intel__visual">
            <LenderOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}
