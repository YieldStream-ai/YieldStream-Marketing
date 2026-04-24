"use client";

import React from "react";
import { Check, Sparkles } from "lucide-react";
import "./styles.scss";

const lenders = [
  {
    rank: 1,
    initials: "VF",
    name: "Velocity Funding Group",
    updated: "1w ago",
    score: 94,
    signal: "High pull-through \u00b7 78% historical \u00b7 Counters in 24h",
  },
  {
    rank: 2,
    initials: "BV",
    name: "BlueVine Advance",
    updated: "1w ago",
    score: 87,
    signal: "Clean fit \u00b7 Funded 2 similar deals last 60 days",
  },
  {
    rank: 3,
    initials: "KC",
    name: "Kalamata Capital",
    updated: "3d ago",
    score: 82,
    signal: "Fast funder \u00b7 3-day avg \u00b7 Within buy-box",
  },
];

export default function LenderMatchVisual() {
  return (
    <div className="lmv">
      {/* Header */}
      <div className="lmv__header">
        <div className="lmv__label">LENDER RECOMMENDATIONS</div>
        <div className="lmv__title">
          3 strong matches &middot; ranked by expected value
        </div>
        <div className="lmv__stats">
          8 lenders scored &middot; 3 strong &middot; 2 viable &middot; 3 weak
        </div>
      </div>

      {/* Table */}
      <div className="lmv__table">
        <div className="lmv__thead">
          <span className="lmv__th lmv__th--rank">#</span>
          <span className="lmv__th lmv__th--lender">LENDER</span>
          <span className="lmv__th lmv__th--score">SCORE</span>
          <span className="lmv__th lmv__th--signal">SIGNAL</span>
          <span className="lmv__th lmv__th--fit">FIT</span>
        </div>

        {lenders.map((l) => (
          <div key={l.rank} className="lmv__row">
            <span className="lmv__rank">{l.rank}</span>

            <div className="lmv__lender-cell">
              <div className="lmv__avatar">{l.initials}</div>
              <div className="lmv__lender-info">
                <div className="lmv__lender-name">{l.name}</div>
                <div className="lmv__lender-updated">Updated {l.updated}</div>
              </div>
            </div>

            <div className="lmv__score-cell">
              <span className="lmv__score-num">{l.score}</span>
              <div className="lmv__score-bar">
                <div
                  className="lmv__score-fill"
                  style={{ width: `${l.score}%` }}
                />
              </div>
            </div>

            <div className="lmv__signal-cell">
              <div className="lmv__signal-label">
                <Check size={10} className="lmv__signal-check" />
                {l.signal}
              </div>
            </div>

            <div className="lmv__fit-cell">
              <span className="lmv__fit-dot" />
              Strong
            </div>
          </div>
        ))}
      </div>

      {/* AI Callout */}
      <div className="lmv__ai">
        <Sparkles size={12} className="lmv__ai-icon" />
        <span className="lmv__ai-text">
          Submit to Velocity Funding Group first. They&apos;ve funded 2 similar
          deals in the last 60 days with 78% pull-through and typically counter
          within 24 hours.
        </span>
      </div>

      {/* Footer */}
      <div className="lmv__footer">
        Showing 3 of 8 scored lenders &middot;{" "}
        <span className="lmv__footer-link">Show 5 more</span>
      </div>
    </div>
  );
}
