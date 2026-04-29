"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Upload, Database, FileText, Link2, SquareStack } from "lucide-react";
import "./styles.scss";

const STEPS = [
  {
    icon: Upload,
    stat: "12+",
    statLabel: "STATEMENTS",
    detail: null,
  },
  {
    icon: Database,
    stat: "~120s",
    statLabel: "PROCESSING",
    detail: "98.8% accuracy",
  },
  {
    icon: FileText,
    stat: "20+",
    statLabel: "RULESETS",
    detail: "Confidence-scored output",
  },
  {
    icon: Link2,
    stat: "97%",
    statLabel: "ACCURACY",
    detail: "Or-layer scoring engine",
  },
  {
    icon: SquareStack,
    stat: "3x",
    statLabel: "INCREASE",
    detail: "Offers compared & closed",
  },
];

const BADGES = [
  { afterStep: 1, label: "Avg. Ingest Time: 120s" },
  { afterStep: 3, label: "Match Confidence: 97%" },
];

const SECTION_LABELS = [
  { text: "ENTITY WORKFLOW PIPELINE → PIPELINE", align: "left" as const },
  { text: "INTEGRATED PIPELINE FLOW", align: "center" as const },
  { text: "OUTPUT", align: "right" as const },
];

export default function FundingFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <div className="funding-flow" ref={containerRef}>
      <span className="funding-flow__section-label">Platform Performance</span>

      {/* Section labels row */}
      <div className="funding-flow__labels-row">
        {SECTION_LABELS.map((s, i) => (
          <span
            key={i}
            className={`funding-flow__label-tag funding-flow__label-tag--${s.align}`}
          >
            {s.text}
          </span>
        ))}
      </div>

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

              <motion.div
                className="funding-flow__node"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
              >
                <div className="funding-flow__circle">
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: [0, -3, 0] }
                        : {}
                    }
                    transition={{
                      opacity: { duration: 0.3, delay: i * 0.1 },
                      y: {
                        duration: 2.4,
                        delay: i * 0.15 + 0.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  >
                    <Icon size={26} strokeWidth={1.4} />
                  </motion.div>
                </div>

                <div className="funding-flow__stat">
                  <span className="funding-flow__stat-num">{step.stat}</span>
                  <span className="funding-flow__stat-label">
                    {step.statLabel}
                  </span>
                  {step.detail && (
                    <span className="funding-flow__detail">{step.detail}</span>
                  )}
                </div>
              </motion.div>

              {/* Connector line + chevron */}
              {i < STEPS.length - 1 && (
                <motion.div
                  className="funding-flow__connector"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.1 + 0.2,
                    ease: "easeOut",
                  }}
                >
                  <svg
                    className="funding-flow__connector-svg"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 2"
                  >
                    {/* Static green track */}
                    <line
                      x1="0"
                      y1="1"
                      x2="100"
                      y2="1"
                      stroke="#1f2937"
                      strokeWidth="1.5"
                    />
                    {/* Animated flowing overlay */}
                    <motion.line
                      x1="0"
                      y1="1"
                      x2="100"
                      y2="1"
                      stroke="#d1d5db"
                      strokeWidth="1.5"
                      strokeDasharray="12 8"
                      initial={{ strokeDashoffset: 20 }}
                      animate={isInView ? { strokeDashoffset: 0 } : {}}
                      transition={{
                        duration: 1.2,
                        delay: i * 0.15 + 0.3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </svg>
                  <svg
                    className="funding-flow__connector-chevron"
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                  >
                    <motion.path
                      d="M1 1L5 5L1 9"
                      stroke="#1f2937"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: i * 0.15 + 0.5,
                      }}
                    />
                  </svg>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
