"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const CX = 140;
const CY = 100;
const RADIUS = 72;

/* Lender nodes arranged in a circle */
const LENDERS = [
  { angle: -90, label: "L1", matched: true },
  { angle: -18, label: "L2", matched: false },
  { angle: 54, label: "L3", matched: true },
  { angle: 126, label: "L4", matched: false },
  { angle: 198, label: "L5", matched: true },
];

function polarToCart(angleDeg, r) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

const nodeReveal = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineReveal = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (matched) => ({
    pathLength: 1,
    opacity: matched ? 0.9 : 0.25,
    transition: { duration: 0.6, ease: "easeInOut" },
  }),
};

export default function LenderMatchViz() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <defs>
        <filter id="matchGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="matchGlowSoft">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Radar pulse rings */}
      {isInView && (
        <>
          <motion.circle
            cx={CX}
            cy={CY}
            fill="none"
            stroke="#1f2937"
            strokeWidth="1"
            initial={{ r: 0, opacity: 0 }}
            animate={{ r: [0, 85], opacity: [0.3, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 1.2,
            }}
          />
          <motion.circle
            cx={CX}
            cy={CY}
            fill="none"
            stroke="#1f2937"
            strokeWidth="0.5"
            initial={{ r: 0, opacity: 0 }}
            animate={{ r: [0, 85], opacity: [0.15, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 2.4,
            }}
          />
        </>
      )}

      {/* Connection lines */}
      {LENDERS.map((lender) => {
        const pos = polarToCart(lender.angle, RADIUS);
        return (
          <motion.line
            key={`line-${lender.label}`}
            x1={CX}
            y1={CY}
            x2={pos.x}
            y2={pos.y}
            stroke={lender.matched ? "#1f2937" : "#cbd5de"}
            strokeWidth={lender.matched ? 2 : 1}
            strokeDasharray={lender.matched ? "none" : "4 3"}
            custom={lender.matched}
            variants={lineReveal}
          />
        );
      })}

      {/* Data flow dots on matched connections */}
      {isInView &&
        LENDERS.filter((l) => l.matched).map((lender, i) => {
          const pos = polarToCart(lender.angle, RADIUS);
          return (
            <motion.circle
              key={`flow-${lender.label}`}
              r="2.5"
              fill="#1f2937"
              initial={{ cx: CX, cy: CY, opacity: 0 }}
              animate={{
                cx: [CX, pos.x],
                cy: [CY, pos.y],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 1.8 + i * 0.4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
          );
        })}

      {/* Lender nodes */}
      {LENDERS.map((lender) => {
        const pos = polarToCart(lender.angle, RADIUS);
        return (
          <motion.g key={lender.label} variants={nodeReveal}>
            {/* Glow ring for matched */}
            {lender.matched && isInView && (
              <motion.circle
                cx={pos.x}
                cy={pos.y}
                r="18"
                fill="none"
                stroke="#1f2937"
                strokeWidth="0.75"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: [0, 0.4, 0],
                  scale: [0.9, 1.15, 0.9],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              />
            )}
            <circle
              cx={pos.x}
              cy={pos.y}
              r="14"
              fill={lender.matched ? "rgba(31, 41, 55, 0.06)" : "#f8fafc"}
              stroke={lender.matched ? "#1f2937" : "#e2e8ed"}
              strokeWidth="1.5"
              filter={lender.matched ? "url(#matchGlow)" : "none"}
            />
            <text
              x={pos.x}
              y={pos.y + 3.5}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="8"
              fontWeight="600"
              fill={lender.matched ? "#1f2937" : "#94a3b3"}
            >
              {lender.label}
            </text>
          </motion.g>
        );
      })}

      {/* Central merchant node */}
      <motion.g variants={nodeReveal}>
        <circle
          cx={CX}
          cy={CY}
          r="20"
          fill="rgba(31, 41, 55, 0.06)"
          stroke="#1f2937"
          strokeWidth="2"
          filter="url(#matchGlow)"
        />
        <text
          x={CX}
          y={CY + 4}
          textAnchor="middle"
          fontFamily="var(--font-mono)"
          fontSize="11"
          fontWeight="700"
          fill="#1f2937"
        >
          M
        </text>
      </motion.g>
    </motion.svg>
  );
}
