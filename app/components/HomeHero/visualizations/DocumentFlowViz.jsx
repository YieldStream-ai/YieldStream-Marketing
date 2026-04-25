"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

/* Raw particles — scattered gray circles above the scan line */
const RAW_PARTICLES = [
  { cx: 45, cy: 18, r: 6 },
  { cx: 105, cy: 28, r: 5 },
  { cx: 160, cy: 12, r: 7 },
  { cx: 210, cy: 32, r: 5 },
  { cx: 248, cy: 20, r: 6 },
];

/* Structured blocks — aligned teal rectangles below the scan line */
const STRUCTURED_BLOCKS = [
  { x: 34, y: 110, w: 44, h: 10 },
  { x: 88, y: 110, w: 44, h: 10 },
  { x: 142, y: 110, w: 44, h: 10 },
  { x: 196, y: 110, w: 44, h: 10 },
  { x: 60, y: 130, w: 70, h: 10 },
  { x: 150, y: 130, w: 70, h: 10 },
  { x: 60, y: 150, w: 160, h: 10 },
];

const particleFall = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: [0.5, 0.7, 0.3, 0],
    y: [0, 20, 50, 70],
    transition: {
      duration: 2.5,
      delay: i * 0.18,
      repeat: Infinity,
      repeatDelay: 2,
      ease: "easeIn",
    },
  }),
};

const blockReveal = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: (i) => ({
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.5,
      delay: 1.2 + i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const scanLine = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, delay: 0.3, ease: "easeInOut" },
  },
};

export default function DocumentFlowViz() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 280 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <defs>
        <linearGradient id="docScanGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1f2937" stopOpacity="0" />
          <stop offset="50%" stopColor="#1f2937" stopOpacity="1" />
          <stop offset="100%" stopColor="#1f2937" stopOpacity="0" />
        </linearGradient>
        <filter id="docGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Raw particles falling */}
      {RAW_PARTICLES.map((p, i) => (
        <motion.circle
          key={`raw-${i}`}
          cx={p.cx}
          cy={p.cy}
          r={p.r}
          fill="#94a3b3"
          opacity="0.6"
          custom={i}
          variants={particleFall}
        />
      ))}

      {/* Scan line */}
      <motion.line
        x1="20"
        y1="82"
        x2="260"
        y2="82"
        stroke="url(#docScanGrad)"
        strokeWidth="2"
        variants={scanLine}
        filter="url(#docGlow)"
      />

      {/* Scanning pulse bar */}
      {isInView && (
        <motion.rect
          x="20"
          y="78"
          width="240"
          height="8"
          rx="4"
          fill="#1f2937"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Label: RAW */}
      <motion.text
        x="140"
        y="62"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8"
        letterSpacing="0.12em"
        fill="#94a3b3"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0.6, transition: { delay: 0.5 } },
        }}
      >
        RAW INPUT
      </motion.text>

      {/* Label: STRUCTURED */}
      <motion.text
        x="140"
        y="100"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="8"
        letterSpacing="0.12em"
        fill="#1f2937"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0.7, transition: { delay: 1.0 } },
        }}
      >
        STRUCTURED OUTPUT
      </motion.text>

      {/* Structured blocks appearing */}
      {STRUCTURED_BLOCKS.map((b, i) => (
        <motion.rect
          key={`block-${i}`}
          x={b.x}
          y={b.y}
          width={b.w}
          height={b.h}
          rx="2"
          fill="#1f2937"
          opacity="0.8"
          custom={i}
          variants={blockReveal}
          style={{ transformOrigin: `${b.x}px ${b.y + b.h / 2}px` }}
        />
      ))}
    </motion.svg>
  );
}
