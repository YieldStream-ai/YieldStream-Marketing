"use client";

import { Upload, Database, FileText, Link2, SquareStack } from "lucide-react";
import "./styles.scss";

const STEPS = [
  {
    icon: Upload,
    name: "Secure Upload",
    microLabel: "INTAKE",
    stat: "12+",
    statLabel: "Statements ingested",
    detail: null,
  },
  {
    icon: Database,
    name: "Auto Processing",
    microLabel: "PROCESSING",
    stat: "~120s",
    statLabel: "Avg. ingest time",
    detail: "98.8% accuracy",
  },
  {
    icon: FileText,
    name: "Data Enrichment",
    microLabel: "ENRICHMENT",
    stat: "20+",
    statLabel: "Rulesets applied",
    detail: "Confidence-scored output",
  },
  {
    icon: Link2,
    name: "Funding Signals",
    microLabel: "MATCHING",
    stat: "97%",
    statLabel: "Match confidence",
    detail: "Multi-layer scoring engine",
  },
  {
    icon: SquareStack,
    name: "Closed Deal",
    microLabel: "OUTCOME",
    stat: "3x",
    statLabel: "Offers compared & closed",
    detail: null,
  },
];

const BADGES = [
  { afterStep: 1, label: "Avg. Ingest Time: 120s" },
  { afterStep: 3, label: "Match Confidence: 97%" },
];

export default function FundingFlow() {
  return (
    <div className="funding-flow">
      <span className="funding-flow__section-label">Platform Performance</span>

      {/* Pipeline track */}
      <div className="funding-flow__track">
        {STEPS.map((step, i) => {
          const badge = BADGES.find((b) => b.afterStep === i);
          const Icon = step.icon;

          return (
            <div className="funding-flow__step-group" key={i}>
              {/* Badge floating above connector before this node */}
              {badge && (
                <div className="funding-flow__badge-anchor">
                  <span className="funding-flow__badge">{badge.label}</span>
                </div>
              )}

              <div className="funding-flow__node">
                <span className="funding-flow__micro-label">
                  {step.microLabel}
                </span>
                <div className="funding-flow__circle">
                  <Icon size={26} strokeWidth={1.4} />
                </div>
                <span className="funding-flow__stage-name">{step.name}</span>

                <div className="funding-flow__stat">
                  <span className="funding-flow__stat-num">{step.stat}</span>
                  <span className="funding-flow__stat-label">
                    {step.statLabel}
                  </span>
                  {step.detail && (
                    <span className="funding-flow__detail">{step.detail}</span>
                  )}
                </div>
              </div>

              {/* Connector line + chevron */}
              {i < STEPS.length - 1 && (
                <div className="funding-flow__connector">
                  <svg
                    className="funding-flow__connector-svg"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 2"
                  >
                    <line
                      x1="0"
                      y1="1"
                      x2="100"
                      y2="1"
                      stroke="#16a34a"
                      strokeWidth="0.75"
                    />
                  </svg>
                  <svg
                    className="funding-flow__connector-chevron"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                  >
                    <path
                      d="M1 1L5 5L1 9"
                      stroke="#16a34a"
                      strokeWidth="0.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
