"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const nodeVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const pathVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const dotVariant = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: [0, 1.3, 1],
    opacity: [0, 0.8, 0.5],
    transition: { duration: 0.5, delay: 0.1 },
  },
};

/* ── node data ── */
const NODES = [
  {
    id: "submission",
    label: "SUBMISSION DATA",
    sub: "PDFs, Applications, Financials",
    y: 28,
    fill: "rgba(31, 41, 55, 0.06)",
    stroke: "#1f2937",
  },
  {
    id: "checks",
    label: "AUTOMATED CHECKS",
    sub: "Risk Analysis & Extraction",
    y: 138,
    fill: "#ffffff",
    stroke: "#e2e8ed",
  },
  {
    id: "underwriting",
    label: "AUTOMATED UNDERWRITING",
    sub: "Processes real-world data",
    y: 248,
    fill: "#ffffff",
    stroke: "#e2e8ed",
  },
  {
    id: "matching",
    label: "INTELLIGENT MATCHING",
    sub: null,
    pills: ["Appetite", "Match Rate", "History"],
    y: 358,
    fill: "#ecfdf5",
    stroke: "#34d399",
  },
  {
    id: "predictive",
    label: "PREDICTIVE DEAL SUCCESS",
    sub: "Probability-to-close",
    badge: "87%",
    y: 478,
    fill: "rgba(31, 41, 55, 0.06)",
    stroke: "#e2e8ed",
  },
  {
    id: "funding",
    label: "FUNDING",
    sub: null,
    y: 588,
    fill: "#d1fae5",
    stroke: "#2F7D4F",
  },
];

const NODE_W = 340;
const NODE_H = 80;
const CX = 260;
const SVG_W = 520;
const SVG_H = 660;

function getNodeCenter(node) {
  return { x: CX, y: node.y + NODE_H / 2 };
}

export default function DecisionEngineSchematic() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  /* build connection paths between consecutive nodes */
  const connections = [];
  for (let i = 0; i < NODES.length - 1; i++) {
    const from = getNodeCenter(NODES[i]);
    const to = getNodeCenter(NODES[i + 1]);
    const fromY = NODES[i].y + NODE_H;
    const toY = NODES[i + 1].y;
    const midY = (fromY + toY) / 2;
    connections.push({
      key: `${NODES[i].id}-${NODES[i + 1].id}`,
      d: `M ${from.x} ${fromY} C ${from.x} ${midY}, ${to.x} ${midY}, ${to.x} ${toY}`,
      dotY: midY,
    });
  }

  return (
    <motion.svg
      ref={ref}
      viewBox={`0 0 ${SVG_W} ${SVG_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="home__schematic-svg"
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <defs>
        {/* grid pattern */}
        <pattern
          id="schematicGrid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#e2e8ed"
            strokeWidth="0.5"
            opacity="0.35"
          />
        </pattern>

        {/* node shadow */}
        <filter
          id="nodeShadow"
          x="-8%"
          y="-8%"
          width="116%"
          height="130%"
        >
          <feDropShadow
            dx="0"
            dy="2"
            stdDeviation="6"
            floodColor="#000"
            floodOpacity="0.05"
          />
        </filter>

        {/* arrow marker */}
        <marker
          id="arrowHead"
          viewBox="0 0 10 10"
          refX="5"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-auto"
        >
          <path d="M 0 1 L 7 5 L 0 9 z" fill="#cbd5de" />
        </marker>
      </defs>

      {/* background grid */}
      <motion.rect
        width={SVG_W}
        height={SVG_H}
        fill="url(#schematicGrid)"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8 } },
        }}
      />

      {/* connection paths */}
      {connections.map((c) => (
        <motion.path
          key={c.key}
          d={c.d}
          stroke="#cbd5de"
          strokeWidth="1.5"
          fill="none"
          markerEnd="url(#arrowHead)"
          variants={pathVariant}
        />
      ))}

      {/* data flow dots at midpoints */}
      {connections.map((c) => (
        <motion.circle
          key={`dot-${c.key}`}
          cx={CX}
          cy={c.dotY}
          r="3"
          fill="#1f2937"
          variants={dotVariant}
        />
      ))}

      {/* nodes */}
      {NODES.map((node) => (
        <motion.g key={node.id} variants={nodeVariant}>
          {/* card rect */}
          <rect
            x={CX - NODE_W / 2}
            y={node.y}
            width={NODE_W}
            height={NODE_H}
            rx="10"
            fill={node.fill}
            stroke={node.stroke}
            strokeWidth="1"
            filter="url(#nodeShadow)"
          />

          {/* label */}
          <text
            x={CX}
            y={node.y + (node.sub || node.pills || node.badge ? 30 : 36)}
            textAnchor="middle"
            fontFamily="var(--font-mono)"
            fontSize="10"
            fontWeight="600"
            letterSpacing="0.1em"
            fill="#334155"
          >
            {node.label}
          </text>

          {/* sub label */}
          {node.sub && (
            <text
              x={CX}
              y={node.y + 52}
              textAnchor="middle"
              fontFamily="var(--font-body)"
              fontSize="10"
              fill="#94a3b3"
            >
              {node.sub}
            </text>
          )}

          {/* pills for Intelligent Matching */}
          {node.pills &&
            node.pills.map((pill, i) => {
              const pillW = 76;
              const gap = 8;
              const totalW =
                node.pills.length * pillW +
                (node.pills.length - 1) * gap;
              const startX = CX - totalW / 2 + i * (pillW + gap);
              return (
                <g key={pill}>
                  <rect
                    x={startX}
                    y={node.y + 46}
                    width={pillW}
                    height={22}
                    rx="11"
                    fill="#d1fae5"
                    stroke="#34d399"
                    strokeWidth="0.75"
                  />
                  <text
                    x={startX + pillW / 2}
                    y={node.y + 61}
                    textAnchor="middle"
                    fontFamily="var(--font-mono)"
                    fontSize="8.5"
                    fontWeight="500"
                    fill="#047857"
                  >
                    {pill}
                  </text>
                </g>
              );
            })}

          {/* badge for Predictive Deal Success */}
          {node.badge && (
            <g>
              <rect
                x={CX + NODE_W / 2 - 58}
                y={node.y + 42}
                width={40}
                height={22}
                rx="6"
                fill="#1f2937"
              />
              <text
                x={CX + NODE_W / 2 - 38}
                y={node.y + 57}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize="10"
                fontWeight="600"
                fill="#ffffff"
              >
                {node.badge}
              </text>
            </g>
          )}

          {/* pulse ring on terminal nodes */}
          {(node.id === "submission" || node.id === "funding") && (
            <motion.rect
              x={CX - NODE_W / 2 - 4}
              y={node.y - 4}
              width={NODE_W + 8}
              height={NODE_H + 8}
              rx="14"
              fill="none"
              stroke={node.stroke}
              strokeWidth="0.75"
              initial={{ opacity: 0 }}
              animate={
                isInView
                  ? {
                      opacity: [0, 0.4, 0],
                      scale: [0.98, 1.01, 0.98],
                    }
                  : {}
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.g>
      ))}
    </motion.svg>
  );
}
