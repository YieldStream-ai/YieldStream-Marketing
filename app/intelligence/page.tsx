"use client";

import { useReveal } from "../components/useReveal";
import CTABanner from "../components/CTABanner";
import LenderSignalChart from "../components/LenderSignalChart";
import AnimatedNumber from "../components/AnimatedNumber";
import "./intelligence.scss";

const LAYERS = [
  {
    pct: 50,
    label: "RELATIONSHIP INTELLIGENCE",
    title: "Your Moat, Quantified",
    desc: "Your pull-through rate with each lender is your competitive edge. Two brokers submitting the same merchant get different scores based on their individual track records. Your relationships are your moat — YieldStream protects them.",
    color: "var(--p600)",
  },
  {
    pct: 30,
    label: "ATTRIBUTE MATCHING",
    title: "Hard Buybox Fit",
    desc: "Merchant FICO, revenue, time in business, industry, position count — every attribute checked against each lender's current buybox. Hard disqualifications are enforced before scoring to eliminate wasted submissions.",
    color: "var(--n600)",
  },
  {
    pct: 20,
    label: "GLOBAL MARKET SIGNALS",
    title: "Cross-Network Intelligence",
    desc: "Anonymized outcome data from across the platform reveals which lenders are actively funding deals in specific industries, revenue ranges, and risk profiles right now. Your data stays private; the insights benefit everyone.",
    color: "var(--n400)",
  },
];

const FLYWHEEL_NODES = [
  { label: "Outcomes", position: "top" as const, heavy: true },
  { label: "Predictions", position: "right" as const, heavy: false },
  { label: "Pull-through", position: "bottom" as const, heavy: false },
  { label: "Commissions", position: "left" as const, heavy: false },
];

const OUTCOME_EVENTS = [
  {
    event: "Deal Funded",
    response:
      "Relationship score strengthens. Renewal tracking begins. Commission recorded. Pull-through rate adjusts upward.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    event: "Deal Declined",
    response:
      "Temporary score penalty applied (-10% to -20%, 30-day expiry). Decline reason categorized. Future matches steered away.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="15" y1="9" x2="9" y2="15" />
        <line x1="9" y1="9" x2="15" y2="15" />
      </svg>
    ),
  },
];

const SYSTEM_MECHANISMS = [
  {
    event: "Lender Appetite Stale",
    response:
      "Warning badge appears on lender. Broker prompted to update buybox. Match confidence drops until refreshed.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    event: "Prediction Ages",
    response:
      "Time-decay reduces weight automatically. 30d = full weight, 90d = 40%, 180d = 20%, >180d = 5%.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const TIME_GROUPS = [
  {
    label: "Recent",
    rows: [{ range: "0–30 days", weight: 100, bar: 100 }],
  },
  {
    label: "Aging",
    rows: [
      { range: "31–90 days", weight: 40, bar: 40 },
      { range: "91–180 days", weight: 20, bar: 20 },
    ],
  },
  {
    label: "Stale",
    rows: [{ range: "180+ days", weight: 5, bar: 5 }],
  },
];

function FlywheelCard({
  item,
  delay,
}: {
  item: { event: string; response: string; icon: React.ReactNode };
  delay: number;
}) {
  return (
    <div className={`reveal reveal-delay-${delay} intelligence__loop-card`}>
      <div className="intelligence__loop-header">
        <span className="intelligence__loop-icon">{item.icon}</span>
        <h3 className="intelligence__loop-title">{item.event}</h3>
      </div>
      <p className="intelligence__loop-desc">{item.response}</p>
    </div>
  );
}

export default function IntelligencePage() {
  useReveal();

  return (
    <>
      {/* Hero */}
      <section className="intelligence__hero">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label-mono">The Scoring Engine</div>
            <h1 className="display-xl intelligence__hero-title">
              Every lender scored across three signal layers.
            </h1>
            <p className="text-lg intelligence__hero-sub">
              Relationship intelligence, attribute matching, and global market
              signals — weighted by your funded history, recomputed on every
              deal.
            </p>
          </div>
          <div className="reveal reveal-delay-1 intelligence__hero-chart">
            <LenderSignalChart />
          </div>
        </div>
      </section>

      {/* Weighted Composition */}
      <section className="section section-sm">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-rule" />
            <div className="label-mono">Weighted Composition</div>
            <h2 className="display-lg intelligence__section-title">
              How every score is composed.
            </h2>
          </div>

          <div className="intelligence__composition reveal reveal-delay-1">
            <div className="intelligence__composition-bar">
              {LAYERS.map((layer, i) => (
                <div
                  key={i}
                  className="intelligence__composition-segment"
                  style={{
                    width: `${layer.pct}%`,
                    background: layer.color,
                  }}
                />
              ))}
            </div>

            <div className="intelligence__composition-cards">
              {LAYERS.map((layer, i) => (
                <div
                  key={i}
                  className={`intelligence__composition-card reveal reveal-delay-${i + 1}`}
                  style={{ borderTopColor: layer.color }}
                >
                  <div
                    className="mono intelligence__layer-num"
                    style={{ color: layer.color }}
                  >
                    <AnimatedNumber value={layer.pct} suffix="%" />
                  </div>
                  <div
                    className="label intelligence__layer-label"
                    style={{ color: layer.color }}
                  >
                    {layer.label}
                  </div>
                  <h3 className="intelligence__layer-title">{layer.title}</h3>
                  <p className="text-sm">{layer.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Flywheel */}
      <section className="section section-sm">
        <div className="container">
          <div className="section-header center reveal">
            <div className="section-rule" />
            <div className="label-mono">The Data Flywheel</div>
            <h2 className="display-lg intelligence__section-title">
              Every outcome makes the next score sharper.
            </h2>
            <p className="text-lg intelligence__section-sub">
              Every funded deal, declined offer, and stale buybox feeds back
              into the model.
            </p>
          </div>

          {/* Flywheel layout: cards | diagram | cards */}
          <div className="intelligence__flywheel-layout">
            {/* Left column: Outcome Events */}
            <div className="intelligence__flywheel-col intelligence__flywheel-col--left">
              <div className="label-mono intelligence__flywheel-pair-label">
                Outcome Events
              </div>
              <div className="intelligence__flywheel-pair-cards">
                {OUTCOME_EVENTS.map((item, i) => (
                  <FlywheelCard key={i} item={item} delay={1} />
                ))}
              </div>
            </div>

            {/* Center: Flywheel diagram */}
            <div className="intelligence__flywheel reveal reveal-delay-1">
              <svg
                className="intelligence__flywheel-svg"
                viewBox="0 0 400 400"
                fill="none"
              >
                {/* Dashed outer ring — motion cue */}
                <circle
                  cx="200"
                  cy="200"
                  r="158"
                  stroke="rgba(15,23,42,0.1)"
                  strokeWidth="1"
                  strokeDasharray="4 3"
                  fill="none"
                  opacity="0.4"
                />

                {/* Top → Right (Outcomes → Predictions) */}
                <path
                  d="M 232.8,45.5 A 158,158 0 0,1 352.6,159.1"
                  stroke="#4b5563"
                  strokeWidth="2.5"
                  fill="none"
                />
                {/* Right → Bottom (Predictions → Pull-through) */}
                <path
                  d="M 354.5,232.8 A 158,158 0 0,1 240.9,352.6"
                  stroke="#4b5563"
                  strokeWidth="2.5"
                  fill="none"
                />
                {/* Bottom → Left (Pull-through → Commissions) */}
                <path
                  d="M 167.2,354.5 A 158,158 0 0,1 47.4,240.9"
                  stroke="#4b5563"
                  strokeWidth="2.5"
                  fill="none"
                />
                {/* Left → Top (Commissions → Outcomes) */}
                <path
                  d="M 45.5,167.2 A 158,158 0 0,1 159.1,47.4"
                  stroke="#4b5563"
                  strokeWidth="2.5"
                  fill="none"
                />

                {/* Arrowheads — manually positioned on circle */}
                <polygon points="-5,-4 -5,4 5,0" fill="#4b5563" transform="translate(352.6,159.1) rotate(75)" />
                <polygon points="-5,-4 -5,4 5,0" fill="#4b5563" transform="translate(240.9,352.6) rotate(165)" />
                <polygon points="-5,-4 -5,4 5,0" fill="#4b5563" transform="translate(47.4,240.9) rotate(255)" />
                <polygon points="-5,-4 -5,4 5,0" fill="#4b5563" transform="translate(159.1,47.4) rotate(345)" />
              </svg>

              {FLYWHEEL_NODES.map((node) => (
                <span
                  key={node.label}
                  className={`intelligence__flywheel-node intelligence__flywheel-node--${node.position}${node.heavy ? " intelligence__flywheel-node--heavy" : ""}`}
                >
                  {node.label}
                </span>
              ))}
            </div>

            {/* Right column: System Mechanisms */}
            <div className="intelligence__flywheel-col intelligence__flywheel-col--right">
              <div className="label-mono intelligence__flywheel-pair-label">
                System Mechanisms
              </div>
              <div className="intelligence__flywheel-pair-cards">
                {SYSTEM_MECHANISMS.map((item, i) => (
                  <FlywheelCard key={i} item={item} delay={2} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time Decay */}
      <section className="section">
        <div className="container">
          <div className="intelligence__time-layout reveal">
            <div className="intelligence__time-copy">
              <div className="section-rule" />
              <div className="label-mono intelligence__label">
                Time-Decay Accuracy
              </div>
              <h2 className="display-lg">
                Data from 6 months ago shouldn't dictate today's submissions.
              </h2>
              <p className="text-lg intelligence__time-desc">
                Lender appetites shift quarterly. YieldStream de-prioritizes old
                data to keep every recommendation current.
              </p>
            </div>
            <div className="intelligence__time-groups">
              {TIME_GROUPS.map((group, gi) => (
                <div key={gi} className="intelligence__time-group">
                  <div className="intelligence__time-group-label">
                    {group.label}
                  </div>
                  {group.rows.map((d, i) => (
                    <div key={i} className="intelligence__time-row">
                      <span className="mono intelligence__time-range">
                        {d.range}
                      </span>
                      <div className="intelligence__time-bar-bg">
                        <div
                          className="intelligence__time-bar-fill"
                          style={{ width: `${d.bar}%` }}
                        />
                      </div>
                      <span className="mono intelligence__time-weight">
                        <AnimatedNumber value={d.weight} suffix="%" />
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="See the three layers score your next deal."
        sub="Upload one statement. Watch all three layers compute live."
      />
    </>
  );
}
