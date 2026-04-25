"use client";

import { useState } from "react";
import "./styles.scss";

const LENDERS = [
  {
    name: "Velocity Capital Group",
    color: "#1f2937",
    scores: { global: 72, relationship: 94, attribute: 81, composite: 88 },
    active: true,
  },
  {
    name: "Greenline Funding Partners",
    color: "#4A6A8A",
    scores: { global: 88, relationship: 58, attribute: 85, composite: 72 },
    active: false,
  },
  {
    name: "Apex Business Advance",
    color: "#8A9BAD",
    scores: { global: 65, relationship: 72, attribute: 60, composite: 67 },
    active: false,
  },
  {
    name: "Summit Partners",
    color: "#B8C4CE",
    scores: { global: 82, relationship: 44, attribute: 91, composite: 65 },
    active: false,
  },
];

const AXES = [
  { key: "global" as const, label: "Global", weight: "20% weight" },
  { key: "relationship" as const, label: "Relationship", weight: "50% weight" },
  { key: "attribute" as const, label: "Attribute", weight: "30% weight" },
  { key: "composite" as const, label: "Composite" },
];

const AXIS_X = [40, 240, 440, 620];
const VB_W = 660;
const VB_H = 116;

function scoreToY(v: number): number {
  return 112 - (v / 100) * 104;
}

export default function LenderSignalChart() {
  const defaultLender = LENDERS.find((l) => l.active)!;
  const [hoveredLender, setHoveredLender] = useState<string | null>(null);

  const activeLender =
    LENDERS.find((l) => l.name === hoveredLender) ?? defaultLender;

  return (
    <div className="lsc">
      <p className="lsc__label">Lender Signal Comparison</p>
      <p className="lsc__subtitle">
        Top matches plotted across four scoring axes
      </p>

      <div className="lsc__chart-container">
        {/* Dynamic tooltip — defaults to active lender */}
        <div className="lsc__tooltip" style={{ left: "38%", top: -8 }}>
          <div className="lsc__tooltip-title">{activeLender.name}</div>
          {AXES.slice(0, 3).map((axis) => (
            <div key={axis.key} className="lsc__tooltip-row">
              <span className="lsc__tooltip-label">{axis.label}</span>
              <span
                className="lsc__tooltip-value"
                style={
                  activeLender.scores[axis.key] >= 90
                    ? { color: "#5dcaa5" }
                    : undefined
                }
              >
                {activeLender.scores[axis.key]}
              </span>
            </div>
          ))}
          <hr className="lsc__tooltip-divider" />
          <div className="lsc__tooltip-row">
            <span className="lsc__tooltip-label">Composite</span>
            <span
              className="lsc__tooltip-value"
              style={{ color: "#ffffff", fontWeight: 620 }}
            >
              {activeLender.scores.composite}
            </span>
          </div>
        </div>

        <div className="lsc__chart-wrap">
          {/* Y-axis ticks */}
          <div className="lsc__ticks">
            <span className="lsc__tick" style={{ top: "0%" }}>
              100
            </span>
            <span className="lsc__tick" style={{ top: "50%" }}>
              50
            </span>
            <span className="lsc__tick" style={{ top: "100%" }}>
              0
            </span>
          </div>

          <div className="lsc__svg-container">
            {/* SVG chart — lines only */}
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              preserveAspectRatio="none"
              className="lsc__svg"
              aria-label="Parallel coordinates comparison of top lenders across four scoring axes"
            >
              {/* Axis lines */}
              {AXIS_X.map((x) => (
                <line
                  key={x}
                  x1={x}
                  y1={8}
                  x2={x}
                  y2={112}
                  stroke="rgba(15,23,42,0.06)"
                  strokeWidth="0.5"
                />
              ))}

              {/* Lender lines (back to front) */}
              {[...LENDERS].reverse().map((lender) => {
                const points = AXES.map(
                  (axis, i) =>
                    `${AXIS_X[i]},${scoreToY(lender.scores[axis.key])}`
                ).join(" ");

                return (
                  <polyline
                    key={lender.name}
                    points={points}
                    fill="none"
                    stroke={lender.color}
                    strokeWidth={
                      hoveredLender === lender.name ||
                      (hoveredLender === null && lender.active)
                        ? 1.5
                        : 1
                    }
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity={
                      hoveredLender === null
                        ? lender.active
                          ? 1
                          : 0.85
                        : lender.name === hoveredLender
                          ? 1
                          : 0.3
                    }
                  />
                );
              })}

              {/* Invisible hit areas for hover */}
              {LENDERS.map((lender) => {
                const points = AXES.map(
                  (axis, i) =>
                    `${AXIS_X[i]},${scoreToY(lender.scores[axis.key])}`
                ).join(" ");

                return (
                  <polyline
                    key={`hit-${lender.name}`}
                    points={points}
                    fill="none"
                    stroke="transparent"
                    strokeWidth={12}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={() => setHoveredLender(lender.name)}
                    onMouseLeave={() => setHoveredLender(null)}
                  />
                );
              })}
            </svg>

            {/* HTML dots overlay — immune to SVG stretching */}
            <div className="lsc__dots-overlay">
              {LENDERS.map((lender) =>
                AXES.map((axis, i) => (
                  <div
                    key={`${lender.name}-${axis.key}`}
                    className={`lsc__dot${lender.active ? " lsc__dot--active" : ""}`}
                    style={{
                      left: `${(AXIS_X[i] / VB_W) * 100}%`,
                      top: `${(scoreToY(lender.scores[axis.key]) / VB_H) * 100}%`,
                      background: lender.color,
                      opacity:
                        hoveredLender === null
                          ? lender.active
                            ? 1
                            : 0.85
                          : lender.name === hoveredLender
                            ? 1
                            : 0.3,
                    }}
                  />
                ))
              )}
            </div>
          </div>

          {/* Axis labels */}
          <div className="lsc__axes">
            {AXES.map((axis) => (
              <div key={axis.key} className="lsc__axis">
                <span className="lsc__axis-label">
                  {axis.label}
                  <svg
                    className="lsc__info-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 16v-4" />
                    <path d="M12 8h.01" />
                  </svg>
                </span>
                {axis.weight && (
                  <span className="lsc__weight-label">{axis.weight}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="lsc__legend">
        {LENDERS.map((lender) => (
          <div
            key={lender.name}
            className="lsc__legend-item"
            style={{
              opacity:
                hoveredLender === null
                  ? lender.active
                    ? 1
                    : 0.4
                  : lender.name === hoveredLender
                    ? 1
                    : 0.4,
            }}
            onMouseEnter={() => setHoveredLender(lender.name)}
            onMouseLeave={() => setHoveredLender(null)}
          >
            <span
              className="lsc__legend-bar"
              style={{ background: lender.color }}
            />
            <span className="lsc__legend-name">{lender.name}</span>
            <span className="lsc__legend-score">
              {lender.scores.composite}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
