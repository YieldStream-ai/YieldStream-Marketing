"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import "./styles.scss";

const STEPS = [
  {
    label: "Upload",
    sub: "Bank statements & PDFs",
    detail: "Secure portal ingestion",
  },
  {
    label: "Ingestion",
    sub: "120s / 99.8% accuracy",
    detail: "OCR + transaction tagging",
  },
  {
    label: "Underwrite",
    sub: "20+ risk signals scored",
    detail: "Structural logic extraction",
  },
  {
    label: "Match",
    sub: "Appetite-aware routing",
    detail: "3-layer scoring engine",
  },
  {
    label: "Funded",
    sub: "Offers compared & closed",
    detail: "One-click submission",
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

/* Curved connector SVG paths between steps */
function CurvedConnector({ index, sparkProgress }) {
  const h = 40;
  const w = 100;
  const goesDown = index % 2 === 0;

  const d = goesDown
    ? `M 0,${h / 2} C ${w * 0.35},${h / 2} ${w * 0.35},${h - 4} ${w / 2},${h - 4} C ${w * 0.65},${h - 4} ${w * 0.65},${h / 2} ${w},${h / 2}`
    : `M 0,${h / 2} C ${w * 0.35},${h / 2} ${w * 0.35},4 ${w / 2},4 C ${w * 0.65},4 ${w * 0.65},${h / 2} ${w},${h / 2}`;

  return (
    <div className="funding-flow__connector">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        fill="none"
        preserveAspectRatio="none"
        className="funding-flow__connector-svg"
      >
        {/* Dashed track */}
        <path
          d={d}
          stroke="rgba(4,121,135,0.18)"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          fill="none"
        />
        {/* Spark — only visible when actively traversing this connector */}
        {sparkProgress !== null && (
          <SparkOnPath d={d} progress={sparkProgress} />
        )}
      </svg>
    </div>
  );
}

/* Renders the 4-pointed star at a given 0-1 progress along a path */
function SparkOnPath({ d, progress }) {
  const pathRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    const pt = path.getPointAtLength(len * Math.min(1, Math.max(0, progress)));
    setPos({ x: pt.x, y: pt.y });
  }, [progress]);

  return (
    <>
      <path ref={pathRef} d={d} fill="none" stroke="none" />
      <g transform={`translate(${pos.x},${pos.y})`}>
        <path
          d="M0,-4 L0.5,-0.5 4,0 0.5,0.5 0,4 -0.5,0.5 -4,0 -0.5,-0.5Z"
          fill="#0f1a2e"
          opacity="0.7"
        />
      </g>
    </>
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
              <div className="funding-flow__sub">{step.sub}</div>
              <div className="funding-flow__detail">{step.detail}</div>
            </motion.div>

            {i < STEPS.length - 1 && (
              <CurvedConnector
                index={i}
                sparkProgress={sparkConnector === i ? sparkProgress : null}
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
