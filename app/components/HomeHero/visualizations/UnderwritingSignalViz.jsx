"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const CX = 140;
const CY = 88;
const R = 48;
const CIRCUMFERENCE = 2 * Math.PI * R;

/* Risk markers that get filtered out */
const RISK_MARKERS = [
  { label: "NSF", x: 70, startY: 155 },
  { label: "DEBT", x: 140, startY: 160 },
  { label: "NSF", x: 210, startY: 152 },
];

/* Sine wave path for signal */
function buildWavePath() {
  let d = "M 30 170";
  for (let x = 30; x <= 250; x += 2) {
    const y = 170 + Math.sin((x - 30) * 0.06) * 8;
    d += ` L ${x} ${y.toFixed(1)}`;
  }
  return d;
}

const WAVE_PATH = buildWavePath();

export default function UnderwritingSignalViz() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = null;
    const duration = 2200;
    const target = 98;
    let raf;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isInView]);

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 280 195"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <defs>
        <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#2F7D4F" />
        </linearGradient>
        <filter id="scoreGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="textGlow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Track circle (background) */}
      <motion.circle
        cx={CX}
        cy={CY}
        r={R}
        stroke="#e2e8ed"
        strokeWidth="6"
        fill="none"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.4 } },
        }}
      />

      {/* Progress arc */}
      <motion.circle
        cx={CX}
        cy={CY}
        r={R}
        stroke="url(#ringGrad)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        filter="url(#scoreGlow)"
        transform={`rotate(-90 ${CX} ${CY})`}
        strokeDasharray={CIRCUMFERENCE}
        variants={{
          hidden: { strokeDashoffset: CIRCUMFERENCE, opacity: 0 },
          visible: {
            strokeDashoffset: CIRCUMFERENCE * 0.02,
            opacity: 1,
            transition: { duration: 2.2, delay: 0.3, ease: "easeOut" },
          },
        }}
      />

      {/* Confidence label */}
      <motion.text
        x={CX}
        y={CY - 8}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="7"
        letterSpacing="0.12em"
        fill="#94a3b3"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0.7, transition: { delay: 0.4 } },
        }}
      >
        CONFIDENCE
      </motion.text>

      {/* Count-up number */}
      <text
        x={CX}
        y={CY + 12}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="22"
        fontWeight="700"
        fill="#1f2937"
        filter={count >= 98 ? "url(#textGlow)" : "none"}
      >
        {count}%
      </text>

      {/* Risk markers floating up and fading */}
      {RISK_MARKERS.map((marker, i) => (
        <motion.g
          key={`risk-${i}`}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: [0, 0.8, 0.6, 0],
              y: [0, -5, -15, -30],
              transition: {
                duration: 2,
                delay: 0.6 + i * 0.3,
                ease: "easeOut",
              },
            },
          }}
        >
          <rect
            x={marker.x - 16}
            y={marker.startY - 7}
            width="32"
            height="14"
            rx="3"
            fill="#fef2f2"
            stroke="#ef4444"
            strokeWidth="0.75"
          />
          <text
            x={marker.x}
            y={marker.startY + 3}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="7"
            fontWeight="600"
            fill="#ef4444"
          >
            {marker.label}
          </text>
        </motion.g>
      ))}

      {/* Signal wave */}
      <motion.path
        d={WAVE_PATH}
        stroke="#2F7D4F"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 0.7,
            transition: { duration: 1.5, delay: 1.5, ease: "easeInOut" },
          },
        }}
      />

      {/* Signal label */}
      <motion.text
        x={CX}
        y={192}
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="7"
        letterSpacing="0.1em"
        fill="#2F7D4F"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0.6, transition: { delay: 2.5 } },
        }}
      >
        RISK FILTERED
      </motion.text>
    </motion.svg>
  );
}
