"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* ── animation timing ── */
const NODE_DUR = 0.25;
const ARROW_DUR = 0.18;

const DELAYS: Record<string, number> = {
  // nodes — each waits for the preceding arrow to finish
  intake:  0,
  parse:   0.43,
  extract: 0.86,
  enrich:  1.29,
  match:   2.08,
  score:   2.51,
  ready:   3.30,
  // straight arrows — each starts after its source node is visible
  "intake-parse": 0.25,
  "main-0":       0.68,   // parse → extract
  "main-1":       1.11,   // extract → enrich
  "match-score":  2.33,
  // elbow: enrich → match (sequential: down, across, target)
  "enrich-down":   1.54,
  "enrich-across": 1.72,
  "enrich-match":  1.90,
  // elbow: score → ready (sequential: down, across, target)
  "score-down":   2.76,
  "score-across": 2.94,
  "score-ready":  3.12,
};

/* Accordion sync points — maps step index to the delay of the triggering node */
const STEP_SYNC: [number, number][] = [
  [0, DELAYS.intake],   // "Upload Statement"
  [1, DELAYS.extract],  // "Extracting 20+ Risk Signals"
  [2, DELAYS.enrich],   // "Pattern Recognition & Scoring"
  [3, DELAYS.ready],    // "Score Ready"
];

function makeNodeVariant(delay: number) {
  return {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: NODE_DUR, delay, ease: [0.16, 1, 0.3, 1] as const },
    },
  };
}

function makePathVariant(delay: number) {
  return {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: ARROW_DUR, delay, ease: "easeInOut" as const },
    },
  };
}

/* ── palette ── */
const COLORS: Record<string, { fill: string; stroke: string; divider: string; text: string }> = {
  gray: { fill: "#ffffff", stroke: "#d1d5db", divider: "#e5e7eb", text: "#1e293b" },
  teal: { fill: "#ffffff", stroke: "#d1d5db", divider: "#e5e7eb", text: "#1f2937" },
  purple: { fill: "#ffffff", stroke: "#d1d5db", divider: "#e5e7eb", text: "#0e0f11" },
  final: { fill: "#1f2937", stroke: "#111827", divider: "rgba(255,255,255,0.2)", text: "#ffffff" },
};

/* ── node data ── */
interface NodeDef {
  id: string;
  label: string;
  sub: string | null;
  color: string;
}

const INTAKE: NodeDef = { id: "intake", label: "PDF intake", sub: "Statements, apps, scans", color: "gray" };

const MAIN_ROW: NodeDef[] = [
  { id: "parse", label: "Parse", sub: "Tables, dates, amounts", color: "teal" },
  { id: "extract", label: "Extract signals", sub: "NSFs, deposits, liens, DSCR", color: "teal" },
  { id: "enrich", label: "AI enrich", sub: "Industry, risk score, trends", color: "purple" },
];

const ROW2: NodeDef[] = [
  { id: "match", label: "Match your lenders", sub: "Buybox overlap, funded history", color: "purple" },
  { id: "score", label: "Score the deal", sub: "Factor rate, likelihood to fund", color: "purple" },
];

const FINAL: NodeDef = { id: "ready", label: "Ready before you open it", sub: null, color: "final" };

/* ── layout constants ── */
const NODE_W = 220;
const NODE_H = 88;
const GAP_X = 36;
const GAP_Y = 120;
const PAD_X = 40;
const PAD_Y = 40;
const FINAL_H = 48;

const row0Y = PAD_Y;
const row1Y = row0Y + NODE_H + GAP_Y;
const row2Y = row1Y + NODE_H + GAP_Y;
const row3Y = row2Y + NODE_H + GAP_Y;

const MAIN_COLS = MAIN_ROW.length;
const CONTENT_W = MAIN_COLS * NODE_W + (MAIN_COLS - 1) * GAP_X;
const SVG_W = PAD_X * 2 + CONTENT_W;
const SVG_H = row3Y + FINAL_H + PAD_Y;

function mainNodeX(i: number) {
  return PAD_X + i * (NODE_W + GAP_X);
}

const intakeX = mainNodeX(0);

const row2TotalW = ROW2.length * NODE_W + (ROW2.length - 1) * GAP_X;
const mainRightCenter = mainNodeX(1) + NODE_W;
const row2StartX = mainRightCenter - row2TotalW / 2;

function row2NodeX(i: number) {
  return row2StartX + i * (NODE_W + GAP_X);
}

const finalX = row2NodeX(0) + (row2TotalW - NODE_W) / 2;

/* ── render helpers ── */

function renderNode(node: NodeDef, x: number, y: number, w = NODE_W, h = NODE_H, rx = 10, delay = 0) {
  const c = COLORS[node.color];
  const isRounded = node.id === "ready";
  const r = isRounded ? h / 2 : rx;
  const dividerY = node.sub ? y + 52 : 0;
  return (
    <motion.g key={node.id} variants={makeNodeVariant(delay)} filter={node.id === "ready" ? "url(#tealGlow)" : undefined}>
      <rect
        x={x} y={y} width={w} height={h} rx={r}
        fill={c.fill} stroke={c.stroke} strokeWidth="1"
      />
      <text
        x={x + w / 2} y={y + (node.sub ? 34 : h / 2 + 5)}
        textAnchor="middle"
        fontFamily="var(--font-display)" fontSize="14" fontWeight="600"
        fill={c.text}
      >
        {node.label}
      </text>
      {node.sub && (
        <>
          <line
            x1={x + 16} y1={dividerY} x2={x + w - 16} y2={dividerY}
            stroke={c.divider} strokeWidth="1"
          />
          <text
            x={x + w / 2} y={dividerY + 22}
            textAnchor="middle"
            fontFamily="var(--font-body)" fontSize="11"
            fill={c.text === "#ffffff" ? "rgba(255,255,255,0.5)" : "#94a3b8"}
          >
            {node.sub}
          </text>
        </>
      )}
      {(node.id === "intake" || node.id === "ready") && (
        <motion.rect
          x={x - 4} y={y - 4} width={w + 8} height={h + 8}
          rx={r + 4}
          fill="none" stroke={c.stroke} strokeWidth="0.75"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.4, 0], scale: [0.99, 1.01, 0.99] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </motion.g>
  );
}

interface ArrowDef {
  key: string;
  d: string;
  noArrow?: boolean;
}

function renderArrow(a: ArrowDef) {
  const delay = DELAYS[a.key] ?? 0;
  return (
    <motion.path
      key={a.key}
      d={a.d}
      stroke="#94a3b3"
      strokeWidth="1.5"
      fill="none"
      markerEnd={a.noArrow ? undefined : "url(#ingestionArrow)"}
      variants={makePathVariant(delay)}
    />
  );
}

/* ── component ── */

interface IngestionFlowProps {
  onAnimationStep?: (step: number) => void;
}

export default function IngestionFlow({ onAnimationStep }: IngestionFlowProps) {
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const prefersReducedMotion = useReducedMotion();

  const stableOnStep = useCallback(
    (step: number) => onAnimationStep?.(step),
    [onAnimationStep],
  );

  // Fire accordion sync callbacks at the right delays
  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      stableOnStep(3);
      return;
    }

    const timers = STEP_SYNC.map(([step, delay]) =>
      setTimeout(() => stableOnStep(step), delay * 1000),
    );
    return () => timers.forEach(clearTimeout);
  }, [isInView, prefersReducedMotion, stableOnStep]);

  // Build arrow path data
  const arrows: ArrowDef[] = [];

  // Intake down to Parse
  const intakeCX = intakeX + NODE_W / 2;
  const intakeBottom = row0Y + NODE_H;
  const parseTop = row1Y;
  arrows.push({
    key: "intake-parse",
    d: `M ${intakeCX} ${intakeBottom} L ${intakeCX} ${parseTop - 10}`,
  });

  // Main row horizontal arrows (parse → extract → enrich)
  for (let i = 0; i < MAIN_ROW.length - 1; i++) {
    const x1 = mainNodeX(i) + NODE_W;
    const x2 = mainNodeX(i + 1);
    const y = row1Y + NODE_H / 2;
    arrows.push({ key: `main-${i}`, d: `M ${x1} ${y} L ${x2 - 10} ${y}` });
  }

  // Enrich down to match (split into segments)
  const enrichCX = mainNodeX(2) + NODE_W / 2;
  const enrichBottom = row1Y + NODE_H;
  const matchCX = row2NodeX(0) + NODE_W / 2;
  const midY1 = (enrichBottom + row2Y) / 2;
  arrows.push(
    { key: "enrich-down", d: `M ${enrichCX} ${enrichBottom} L ${enrichCX} ${midY1}`, noArrow: true },
    { key: "enrich-across", d: `M ${enrichCX} ${midY1} L ${matchCX} ${midY1}`, noArrow: true },
    { key: "enrich-match", d: `M ${matchCX} ${midY1} L ${matchCX} ${row2Y - 10}` },
  );

  // Match → Score
  const matchRight = row2NodeX(0) + NODE_W;
  const scoreLeft = row2NodeX(1);
  const r2y = row2Y + NODE_H / 2;
  arrows.push({ key: "match-score", d: `M ${matchRight} ${r2y} L ${scoreLeft - 10} ${r2y}` });

  // Score down to Ready (split into segments)
  const scoreCX = row2NodeX(1) + NODE_W / 2;
  const scoreBottom = row2Y + NODE_H;
  const readyCX = finalX + NODE_W / 2;
  const midY2 = (scoreBottom + row3Y) / 2;
  arrows.push(
    { key: "score-down", d: `M ${scoreCX} ${scoreBottom} L ${scoreCX} ${midY2}`, noArrow: true },
    { key: "score-across", d: `M ${scoreCX} ${midY2} L ${readyCX} ${midY2}`, noArrow: true },
    { key: "score-ready", d: `M ${readyCX} ${midY2} L ${readyCX} ${row3Y - 10}` },
  );

  // Build arrow lookup for inline rendering
  const arrowMap = new Map(arrows.map((a) => [a.key, a]));
  const arrow = (key: string) => renderArrow(arrowMap.get(key)!);

  const showFinal = prefersReducedMotion || isInView;

  return (
    <div style={{ border: "1px solid #d1d5db", borderRadius: 12, padding: 12, background: "var(--n50)" }}>
      <motion.svg
        ref={ref}
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", maxWidth: 960, display: "block" }}
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate={showFinal ? "visible" : "hidden"}
      >
        <defs>
          <filter id="tealGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" type="matrix"
              values="0 0 0 0 0.106  0 0 0 0 0.227  0 0 0 0 0.373  0 0 0 0.45 0"
            />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker
            id="ingestionArrow"
            viewBox="0 0 10 10"
            refX="9" refY="5"
            markerWidth="8" markerHeight="8"
            orient="auto"
            markerUnits="userSpaceOnUse"
          >
            <path d="M 0 1 L 8 5 L 0 9 z" fill="#94a3b3" />
          </marker>
        </defs>

        {/* Row 0: Intake */}
        {renderNode(INTAKE, intakeX, row0Y, NODE_W, NODE_H, 10, DELAYS.intake)}
        {arrow("intake-parse")}

        {/* Row 1: Parse → Extract → Enrich */}
        {renderNode(MAIN_ROW[0], mainNodeX(0), row1Y, NODE_W, NODE_H, 10, DELAYS.parse)}
        {arrow("main-0")}
        {renderNode(MAIN_ROW[1], mainNodeX(1), row1Y, NODE_W, NODE_H, 10, DELAYS.extract)}
        {arrow("main-1")}
        {renderNode(MAIN_ROW[2], mainNodeX(2), row1Y, NODE_W, NODE_H, 10, DELAYS.enrich)}

        {/* Arrows: enrich → match (3-segment elbow) */}
        {arrow("enrich-down")}
        {arrow("enrich-across")}
        {arrow("enrich-match")}

        {/* Row 2: Match → Score */}
        {renderNode(ROW2[0], row2NodeX(0), row2Y, NODE_W, NODE_H, 10, DELAYS.match)}
        {arrow("match-score")}
        {renderNode(ROW2[1], row2NodeX(1), row2Y, NODE_W, NODE_H, 10, DELAYS.score)}

        {/* Arrows: score → ready (3-segment elbow) */}
        {arrow("score-down")}
        {arrow("score-across")}
        {arrow("score-ready")}

        {/* Row 3: Ready (terminal) */}
        {renderNode(FINAL, finalX, row3Y, NODE_W, FINAL_H, 10, DELAYS.ready)}
      </motion.svg>
    </div>
  );
}
