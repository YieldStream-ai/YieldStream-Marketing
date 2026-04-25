"use client";

import React from "react";
import "./styles.scss";

const MODEL_CAPABILITIES = [
  {
    id: "005",
    code: "DECAY",
    title: "Time decay & model drift",
    subtitle: "Signals age. Our scores know it.",
    description:
      "A Meridian approval from 14 months ago is not evidence today. YieldStream weights historical outcomes by recency, regime, and lender policy changes, so the model reflects the market you're actually selling into.",
    tags: [
      "Recency weighting",
      "Regime detection",
      "Policy drift",
      "Market alignment",
    ],
  },
  {
    id: "006",
    code: "LOOP",
    title: "Outcome ingestion",
    subtitle: "Every funded deal teaches the system",
    description:
      "Declines, counters, funded amounts, and default signals flow back into the model. Your panel gets sharper with every submission — and the edge compounds.",
    tags: [
      "Decline signals",
      "Funded amounts",
      "Model retraining",
      "Compounding edge",
    ],
  },
];

const CAPABILITIES = [
  {
    id: "001",
    code: "UW",
    title: "Automated underwriting",
    subtitle: "Statement → Profile → Risk",
    description:
      "Upload 3–6 months of bank statements. YieldStream extracts the full underwriting picture — deposit patterns, balance trends, overdraft history, counter-party risk, and stacking signals — and flags exactly what a lender will question. You get a structured brief you can defend, not a PDF you hope someone reads.",
    tags: ["Deposit cadence", "Stacking", "NSF signature", "Counter-party"],
  },
  {
    id: "002",
    code: "MATCH",
    title: "Lender recommendations",
    subtitle: "Signal → Score → Fit",
    description:
      "Every lender on your panel scored for this specific file. Not 'is it a good lender' — is it the right lender, today, for this deal. Ranked by probability of funding and expected commission, with a written underwriter's note on every match.",
    tags: ["Expected value", "Risk match", "Pull-through", "Reasoning"],
  },
  {
    id: "003",
    code: "SEND",
    title: "One deal, every lender, one click",
    subtitle: "Package → Submit → Track",
    description:
      "Generate a lender-ready package in one click. Submit to your entire panel in parallel and track every response, approval, and counter from one screen — not across twelve inbox threads.",
    tags: [
      "One-click packages",
      "Parallel submit",
      "Response tracking",
      "Lender history",
    ],
  },
  {
    id: "004",
    code: "FLOW",
    title: "Application to renewal",
    subtitle: "The system remembers so you don't have to.",
    description:
      "Every deal tracked from application to funding to renewal — automatically. The system knows when a merchant hits 50% paydown and surfaces the renewal before your competitor does. Stage transitions, document collection, and offer comparison happen along the way.",
    tags: [
      "Pipeline stages",
      "Offer comparison",
      "Funding events",
      "Renewal triggers",
    ],
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities">
      <div className="container">
        <div className="capabilities__header reveal">
          <div className="capabilities__rule" />
          <span className="capabilities__section-label">End to End</span>
          <h2 className="capabilities__title">
            From statement to{" "}
            <span className="capabilities__title-accent">renewal.</span>
          </h2>
          <p className="capabilities__subhead">
            Four capabilities. One continuous workflow.
          </p>
        </div>

        <div className="capabilities__list">
          {CAPABILITIES.map((cap) => (
            <div className="capabilities__row reveal" key={cap.id}>
              <div className="capabilities__row-index">
                <span className="capabilities__row-id">
                  {cap.id} / {cap.code}
                </span>
              </div>

              <div className="capabilities__row-info">
                <h3 className="capabilities__row-title">{cap.title}</h3>
                <span className="capabilities__row-subtitle">
                  {cap.subtitle}
                </span>
              </div>

              <div className="capabilities__row-body">
                <p className="capabilities__row-desc">{cap.description}</p>
                {cap.tags && (
                  <div className="capabilities__tags">
                    {cap.tags.map((tag) => (
                      <span className="capabilities__tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="capabilities__divider reveal">
            <span className="capabilities__divider-label">
              How the model learns
            </span>
          </div>

          {MODEL_CAPABILITIES.map((cap) => (
            <div className="capabilities__row reveal" key={cap.id}>
              <div className="capabilities__row-index">
                <span className="capabilities__row-id">
                  {cap.id} / {cap.code}
                </span>
              </div>

              <div className="capabilities__row-info">
                <h3 className="capabilities__row-title">{cap.title}</h3>
                <span className="capabilities__row-subtitle">
                  {cap.subtitle}
                </span>
              </div>

              <div className="capabilities__row-body">
                <p className="capabilities__row-desc">{cap.description}</p>
                {cap.tags && (
                  <div className="capabilities__tags">
                    {cap.tags.map((tag) => (
                      <span className="capabilities__tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
