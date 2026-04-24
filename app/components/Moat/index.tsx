"use client";

import React from "react";
import "./styles.scss";

const NODES = [
  {
    id: "01",
    title: "Deals in",
    desc: "Bank statements, applications, panel history.",
  },
  {
    id: "02",
    title: "Ranked out",
    desc: "Lender scoring, expected EV, fit reasoning.",
  },
  {
    id: "03",
    title: "Outcomes captured",
    desc: "Approvals, declines, funded amounts, defaults.",
  },
  {
    id: "04",
    title: "Model retrained",
    desc: "Weights updated with recency-adjusted truth.",
  },
  {
    id: "05",
    title: "Sharper matches",
    desc: "Next file routes to the right desk, faster.",
  },
];

const STATS = [
  { label: "Retrain cadence", value: "every 72 hours" },
  { label: "Signals per deal", value: "~340" },
  { label: "Closed-loop brokerages", value: "21" },
];

export default function Moat() {
  return (
    <section className="moat">
      <div className="container">
        {/* Section header */}
        <div className="moat__header reveal">
          <div className="moat__rule" />
          <span className="moat__section-label">The Moat</span>
          <h2 className="moat__title">
            Why the{" "}
            <span className="moat__title-accent">gap widens</span> every
            week you use it.
          </h2>
        </div>

        {/* Dark flywheel card */}
        <div className="moat__card reveal">
          <span className="moat__card-label">Intelligence Flywheel</span>
          <h3 className="moat__card-headline">
            Every submitted deal makes the next one{" "}
            <span className="moat__card-accent">sharper.</span> This is the
            part competitors can&apos;t copy.
          </h3>

          {/* Nodes grid */}
          <div className="moat__nodes">
            {NODES.map((node) => (
              <div className="moat__node" key={node.id}>
                <span className="moat__node-id">NODE {node.id}</span>
                <h4 className="moat__node-title">{node.title}</h4>
                <p className="moat__node-desc">{node.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats footer */}
          <div className="moat__stats">
            {STATS.map((stat) => (
              <div className="moat__stat" key={stat.label}>
                <span className="moat__stat-label">{stat.label}</span>
                {" · "}
                <span className="moat__stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
