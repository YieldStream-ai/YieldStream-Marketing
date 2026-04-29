"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";
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
const STAGGER_DELAY = 0.1;
const FADE_DURATION = 0.4;
// Delay before spark starts after cards fade in
const SPARK_DELAY_MS =
  (STEPS.length * STAGGER_DELAY + FADE_DURATION) * 1000 + 200;

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
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const [litSteps, setLitSteps] = useState(new Set());
  const [sparkConnector, setSparkConnector] = useState(null);
  const [sparkProgress, setSparkProgress] = useState(0);
  const [done, setDone] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const tick = useCallback(() => {
    const elapsed = Date.now() - startRef.current;

    let t = elapsed;
    if (t < PAUSE_MS) {
      setLitSteps(new Set([0]));
      setSparkConnector(null);
      setSparkProgress(0);
      rafRef.current = requestAnimationFrame(tick);
      return;
    }
    t -= PAUSE_MS;

    for (let i = 0; i < CONNECTOR_COUNT; i++) {
      if (t < TRAVEL_MS) {
        setSparkConnector(i);
        setSparkProgress(t / TRAVEL_MS);
        rafRef.current = requestAnimationFrame(tick);
        return;
      }
      t -= TRAVEL_MS;

      if (t < PAUSE_MS) {
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

    setLitSteps(new Set(STEPS.map((_, i) => i)));
    setSparkConnector(null);
    setDone(true);
  }, []);

  useEffect(() => {
    if (!isInView || done) return;

    const timeout = setTimeout(() => {
      startRef.current = Date.now();
      rafRef.current = requestAnimationFrame(tick);
    }, SPARK_DELAY_MS);

    return () => {
      clearTimeout(timeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isInView, tick, done]);

  return (
    <div className="funding-flow" ref={containerRef}>
      <span className="funding-flow__section-label">Platform Performance</span>
      <div className="funding-flow__track">
        {STEPS.map((step, i) => (
          <div className="funding-flow__step-group" key={step.label}>
            <motion.div
              className="funding-flow__node"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: FADE_DURATION,
                delay: i * STAGGER_DELAY,
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
    </div>
  );
}
