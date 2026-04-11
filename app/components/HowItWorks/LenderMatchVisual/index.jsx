"use client";

import React from "react";
import "./styles.scss";

export default function LenderMatchVisual() {
  const lenders = [
    { name: "Velocity Capital", score: 98, tier: "Tier 1" },
    { name: "Summit Funding", score: 94, tier: "Tier 1" },
    { name: "BlueHarbor Finance", score: 87, tier: "Tier 2" },
  ];

  return (
    <div className="lmv">
      {lenders.map((l, i) => (
        <div
          key={l.name}
          className={`lmv__lender${i === 0 ? " lmv__lender--top" : ""}`}
        >
          <div className="lmv__lender-info">
            <div className="lmv__lender-name">{l.name}</div>
            <div className="lmv__lender-tier">{l.tier}</div>
          </div>
          <div
            className={`lmv__score${i === 0 ? " lmv__score--top" : ""}`}
          >
            {l.score}%
          </div>
        </div>
      ))}
    </div>
  );
}
