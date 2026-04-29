"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { staggerContainer, staggerItem } from "../constants";
import "./styles.scss";

const lenders = [
  {
    rank: 1,
    initials: "GC",
    name: "Greenline Capital",
    funded: 20,
    updated: "1w ago",
    score: 86,
    whyBold: "91% pull-through",
    whyDetail:
      "Funded 20 similar deals \u00b7 Greenline has a 91% pull-through rate with your ISO across 14 funded deals.",
    terms: "1.21\u20131.29x \u00b7 2.5d",
    fit: "Strong fit",
  },
  {
    rank: 2,
    initials: "CP",
    name: "Capital Plus Financial",
    funded: 16,
    updated: "1w ago",
    score: 84,
    whyBold: "88% pull-through",
    whyDetail:
      "Funded 16 similar deals \u00b7 Capital Plus currently holds the active position and has first right of refusal\u2026",
    terms: "1.19\u20131.27x \u00b7 1.5d",
    fit: "Strong fit",
  },
  {
    rank: 3,
    initials: "NF",
    name: "National Funding Corp",
    funded: 8,
    updated: "2w ago",
    score: 73,
    whyBold: "72% pull-through",
    whyDetail:
      "Funded 8 similar deals \u00b7 National Funding shows moderate alignment \u2014 their SaaS vertical appetite has\u2026",
    terms: "1.25\u20131.33x \u00b7 3d",
    fit: "Viable",
  },
];

function scoreColor(score: number) {
  if (score >= 80) return "var(--status-advance)";
  if (score >= 70) return "#c8a631";
  return "var(--status-caution)";
}

export default function LenderMatchVisual() {
  return (
    <motion.div
      className="lmv"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div className="lmv__header" variants={staggerItem}>
        <div className="lmv__label">LENDER RECOMMENDATIONS</div>
        <div className="lmv__title">
          2 strong matches found
        </div>
        <div className="lmv__stats">
          7 scored &middot; 2 strong &middot; 5 viable &middot; 0 weak
        </div>
      </motion.div>

      {/* Table */}
      <div className="lmv__table">
        <motion.div className="lmv__thead" variants={staggerItem}>
          <span className="lmv__th lmv__th--rank">#</span>
          <span className="lmv__th lmv__th--lender">LENDER</span>
          <span className="lmv__th lmv__th--why">WHY</span>
          <span className="lmv__th lmv__th--score">SCORE</span>
          <span className="lmv__th lmv__th--terms">TERMS</span>
        </motion.div>

        {lenders.map((l) => (
          <motion.div key={l.rank} className="lmv__row" variants={staggerItem}>
            <span className="lmv__rank">{l.rank}</span>

            <div className="lmv__lender-cell">
              <div className="lmv__avatar">{l.initials}</div>
              <div className="lmv__lender-info">
                <div className="lmv__lender-name">{l.name}</div>
                <div className="lmv__lender-updated">
                  Funded {l.funded} similar &middot; Updated {l.updated}
                </div>
              </div>
            </div>

            <div className="lmv__why-cell">
              <div className="lmv__why-bold">{l.whyBold}</div>
              <div className="lmv__why-detail">{l.whyDetail}</div>
            </div>

            <div className="lmv__score-cell">
              <span
                className="lmv__score-num"
                style={{ color: scoreColor(l.score) }}
              >
                {l.score}
              </span>
              <div className="lmv__score-bar">
                <div
                  className="lmv__score-fill"
                  style={{
                    width: `${l.score}%`,
                    background: scoreColor(l.score),
                  }}
                />
              </div>
            </div>

            <div className="lmv__terms-cell">
              <span className="lmv__terms-text">{l.terms}</span>
              <span className="lmv__fit-pill">
                <span className={`lmv__fit-dot${l.fit === "Viable" ? " lmv__fit-dot--viable" : ""}`} />
                {l.fit}
              </span>
              <ChevronDown size={12} className="lmv__expand-icon" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Callout */}
      <motion.div className="lmv__ai" variants={staggerItem}>
        <Sparkles size={12} className="lmv__ai-icon" />
        <span className="lmv__ai-text">
          Submit to Greenline Capital first. They&apos;ve funded 20 similar
          deals with a 91% pull-through rate and typically counter within 2.5
          days.
        </span>
      </motion.div>

      {/* Footer */}
      <motion.div className="lmv__footer" variants={staggerItem}>
        Showing 3 of 7 scored lenders &middot;{" "}
        <span className="lmv__footer-link">Show 4 more (scores 62&ndash;71)</span>
      </motion.div>
    </motion.div>
  );
}
