"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import "./styles.scss";

const STEPS = [
  {
    label: "Upload",
    stat: "12+",
    statLabel: "formats supported",
    sub: "Bank statements & PDFs",
    detail: "Secure portal ingestion",
    pill: true,
  },
  {
    label: "Ingestion",
    stat: "~120s",
    statLabel: "processing time",
    sub: "99.8% accuracy",
    detail: "OCR + transaction tagging",
    pill: true,
  },
  {
    label: "Underwrite",
    stat: "20+",
    statLabel: "risk signals scored",
    sub: "Structural logic extraction",
    detail: "Confidence-scored output",
    pill: true,
  },
  {
    label: "Match",
    stat: "97%",
    statLabel: "match accuracy",
    sub: "Appetite-aware routing",
    detail: "3-layer scoring engine",
    pill: true,
  },
  {
    label: "Funded",
    stat: "3x",
    statLabel: "faster to close",
    sub: "Offers compared & closed",
    detail: "One-click submission",
    pill: true,
  },
];

const CONNECTOR_COUNT = STEPS.length - 1;
const TRAVEL_MS = 800;
const PAUSE_MS = 600;
// Stagger fade-in timing
const HERO_SETTLE = 1.1; // seconds — last hero element finishes around here
const STAGGER_DELAY = 0.1; // seconds between each card
const FADE_DURATION = 0.4; // seconds per card fade
// Total time before spark starts (wait for all cards to fade in)
const STAGGER_TOTAL_MS =
  (HERO_SETTLE + STEPS.length * STAGGER_DELAY + FADE_DURATION) * 1000 + 200;

/* Straight connector between steps */
function Connector({ sparkProgress }) {
  return (
    <div className="funding-flow__connector">
      <div className="funding-flow__connector-line" />
      {sparkProgress !== null && (
        <div
          className="funding-flow__connector-spark"
          style={{ left: `${sparkProgress * 100}%` }}
        />
      )}
    </div>
  );
}

export default function FundingFlow() {
  // litSteps: set of step indices that have been reached (stay lit)
  // sparkConnector: which connector the spark is traveling (0-3, or null)
  // sparkProgress: 0-1 progress through the current connector
  const [litSteps, setLitSteps] = useState(new Set());
  const [sparkConnector, setSparkConnector] = useState(null);
  const [sparkProgress, setSparkProgress] = useState(0);
  const [done, setDone] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const tick = useCallback(() => {
    const elapsed = Date.now() - startRef.current;

    let t = elapsed;
    // Phase: initial pause on step 0
    if (t < PAUSE_MS) {
      setLitSteps(new Set([0]));
      setSparkConnector(null);
      setSparkProgress(0);
      rafRef.current = requestAnimationFrame(tick);
      return;
    }
    t -= PAUSE_MS;

    // For each connector + next step pause
    for (let i = 0; i < CONNECTOR_COUNT; i++) {
      if (t < TRAVEL_MS) {
        // Spark is traveling connector i
        setSparkConnector(i);
        setSparkProgress(t / TRAVEL_MS);
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      t -= TRAVEL_MS;

      if (t < PAUSE_MS) {
        // Paused on step i+1 — add it to lit set
        setLitSteps((prev) => {
          const next = new Set(prev);
          next.add(i + 1);
          return next;
        });
        setSparkConnector(null);
        setSparkProgress(0);
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      t -= PAUSE_MS;
    }

    // All done — all steps stay lit, no more spark
    setLitSteps(new Set(STEPS.map((_, i) => i)));
    setSparkConnector(null);
    setDone(true);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      startRef.current = Date.now();
      rafRef.current = requestAnimationFrame(tick);
    }, STAGGER_TOTAL_MS);
    return () => {
      clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  return (
    <motion.div
      className="funding-flow"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="funding-flow__track">
        {STEPS.map((step, i) => (
          <div className="funding-flow__step-group" key={step.label}>
            <motion.div
              className={`funding-flow__node${litSteps.has(i) ? " funding-flow__node--active" : ""}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: FADE_DURATION,
                delay: HERO_SETTLE + i * STAGGER_DELAY,
                ease: "easeOut",
              }}
            >
              <div className="funding-flow__node-header">
                <div className="funding-flow__num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="funding-flow__label">{step.label}</div>
              </div>
              {step.stat && (
                <div className="funding-flow__stat">
                  <span className="funding-flow__stat-num">{step.stat}</span>
                  <span className="funding-flow__stat-label">{step.statLabel}</span>
                </div>
              )}
              <div className="funding-flow__sub">{step.sub}</div>
              <div
                className={`funding-flow__detail${step.pill ? " funding-flow__detail--pill" : ""}`}
              >
                {step.detail}
              </div>
            </motion.div>

            {i < STEPS.length - 1 && (
              <Connector
                sparkProgress={sparkConnector === i ? sparkProgress : null}
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
