"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ListTodo, LayoutDashboard, Users, Building, Upload, BarChart3, Plus } from "lucide-react";
import useScrollPlay from "../useScrollPlay";
import "./styles.scss";

// ── Nav structure ─────────────────────────────────────────────────────────────

const coreNav = [
  { label: "Outreach",      icon: ListTodo },
  { label: "Opportunities", icon: LayoutDashboard, active: true },
  { label: "Merchants",     icon: Users },
  { label: "Lenders",       icon: Building },
];

const utilityNav = [
  { label: "Integrations", icon: Upload },
  { label: "Analytics",    icon: BarChart3 },
];

// ── Static data ───────────────────────────────────────────────────────────────

const TABLE_ROWS = [
  {
    id: 1,
    bizName: "Sunrise Dental Group",
    contact: "Dr. Priya Sharma",
    stage: "funded",
    stageLabel: "Funded",
    match: 99,
    confPct: 100,
    relDots: 2,
    requested: "$350,000",
    comm: "$26,965",
    days: "—",
    note: "Solid track record — 1 funded deal on file; prior pull-through history strengthens relationship a…",
  },
  {
    id: 2,
    bizName: "Pacific Rim Imports",
    contact: "David Tanaka",
    stage: "funded",
    stageLabel: "Funded",
    match: 99,
    confPct: 100,
    relDots: 2,
    requested: "$400,000",
    comm: "$22,586",
    days: "—",
    note: "Strong fit — $58K ADB exceeds typical floor requirements with clean NSF history.",
  },
  {
    id: 3,
    bizName: "YieldStream",
    contact: "Alex Nguyen",
    stage: "offers",
    stageLabel: "Offers Received",
    match: 99,
    confPct: 100,
    relDots: 2,
    requested: "$250,000",
    comm: "$15,000",
    days: "—",
    note: "Solid track record — 1 funded deal on file; prior pull-through history strengthens relationship a…",
  },
  {
    id: 4,
    bizName: "Coastal Flooring",
    contact: "Angela Martinez",
    stage: "offers",
    stageLabel: "Offers Received",
    match: 99,
    confPct: 100,
    relDots: 1,
    requested: "$125,000",
    comm: "$10,608",
    days: "—",
    note: "Clean profile — strong revenue trend with no material friction points detected.",
  },
  {
    id: 5,
    bizName: "Quick Auto Repair",
    contact: "James Kowalski",
    stage: "funded",
    stageLabel: "Funded",
    match: 99,
    confPct: 100,
    relDots: 2,
    requested: "$200,000",
    comm: "$8,965",
    days: "—",
    note: "Solid track record — 1 funded deal on file; prior pull-through history strengthens relationship a…",
  },
  {
    id: 6,
    bizName: "YieldStream",
    contact: "Alex Nguyen",
    stage: "out",
    stageLabel: "Out to Lenders",
    match: 99,
    confPct: 100,
    relDots: 2,
    requested: "$100,000",
    comm: "$8,000",
    days: "—",
    note: "Solid track record — 1 funded deal on file; prior pull-through history strengthens relationship a…",
  },
];

const KANBAN_COLS = [
  {
    id: "intake",
    label: "Intake",
    count: 4,
    volume: "$136k",
    stale: false,
    subtitle: null,
    cards: [
      { name: "Quick Auto Repair", amount: "$20k", intel: { type: "clean" }, days: "10d" },
      { name: "Desert HVAC Co", amount: "$8k", intel: { type: "clean" }, days: "10d" },
      { name: "Acme Trucking LLC", amount: "$100k", intel: { type: "clean" }, days: "10d" },
    ],
  },
  {
    id: "underwriting",
    label: "Underwriting",
    count: 1,
    volume: "$80k",
    stale: false,
    subtitle: null,
    cards: [
      { name: "Desert HVAC Co", amount: "$80k", intel: { type: "complete" }, days: "63d" },
    ],
  },
  {
    id: "ready",
    label: "Ready to Submit",
    count: 0,
    volume: null,
    stale: false,
    subtitle: null,
    cards: [],
  },
  {
    id: "out",
    label: "Out to Lenders",
    count: 4,
    volume: "$270k",
    stale: false,
    subtitle: null,
    cards: [
      { name: "YieldStream", amount: "$100k", intel: { type: "offers", ratio: "0/2" }, days: "8d" },
      { name: "Mountain Brew Coff…", amount: "$50k", intel: { type: "offers", ratio: "0/3" }, days: "46d" },
      { name: "Best Eats Inc", amount: "$75k", intel: { type: "offers", ratio: "1/4" }, days: "51d" },
    ],
  },
  {
    id: "offers",
    label: "Offers Received",
    count: 3,
    volume: "$525k",
    stale: false,
    subtitle: null,
    cards: [
      { name: "YieldStream", amount: "$250k", intel: { type: "best", amount: "$250k", detail: "1.25x · Greenline Capital" }, days: "19d" },
      { name: "Coastal Flooring", amount: "$125k", intel: { type: "best", amount: "$149k", detail: "1.2989x · BlueVine Advance" }, days: "42d" },
    ],
  },
  {
    id: "funded",
    label: "Funded",
    count: 4,
    volume: "$1.1M",
    stale: false,
    subtitle: null,
    cards: [
      { name: "YieldStream", amount: "$150k", intel: { type: "funded", amount: "$150k", detail: "1.28x · Capital Plus Financial" }, days: "65d" },
      { name: "Quick Auto Repair", amount: "$200k", intel: { type: "funded", amount: "$146k", detail: "1.4393x · Capital Plus Financial" }, days: "47d" },
    ],
  },
  {
    id: "stale",
    label: "Stale",
    count: 1,
    volume: null,
    stale: true,
    subtitle: "14+ days in Intake",
    cards: [
      { name: "Urban Fitness Studio", amount: "$40k", intel: { type: "clean" }, days: "39d", stale: true },
    ],
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function StageBadge({ stage, label }) {
  return <span className={`ap-badge ap-badge--${stage}`}>{label}</span>;
}

function ConfBar({ pct }) {
  return (
    <div className="ap-conf">
      <div className="ap-conf__track">
        <div className="ap-conf__fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="ap-conf__label">{pct}%</span>
    </div>
  );
}

function RelDots({ filled, total = 5 }) {
  return (
    <div className="ap-dots">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`ap-dots__dot ${i < filled ? "ap-dots__dot--on" : "ap-dots__dot--off"}`}
        />
      ))}
    </div>
  );
}

function CardIntel({ intel }) {
  if (intel.type === "clean") {
    return (
      <div className="ap-intel__clean">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <circle cx="5" cy="5" r="4.5" stroke="#059669" />
          <path d="M3 5l1.5 1.5L7 3.5" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Clean</span>
      </div>
    );
  }
  if (intel.type === "complete") {
    return (
      <div className="ap-intel__complete">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <circle cx="5" cy="5" r="4.5" stroke="#059669" />
          <path d="M3 5l1.5 1.5L7 3.5" stroke="#059669" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>Complete</span>
      </div>
    );
  }
  if (intel.type === "offers") {
    return (
      <div>
        <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12, fontWeight: 600, color: "#334155" }}>
          {intel.ratio}
        </span>
        <span style={{ fontFamily: "IBM Plex Sans, sans-serif", fontSize: 9, color: "#94a3b8", marginLeft: 3 }}>offers</span>
      </div>
    );
  }
  if (intel.type === "best") {
    return (
      <div className="ap-intel__best-offer">
        <span className="ap-intel__best-amount">{intel.amount}</span>
        <span className="ap-intel__best-detail">{intel.detail}</span>
      </div>
    );
  }
  if (intel.type === "funded") {
    return (
      <div className="ap-intel__best-offer">
        <span className="ap-intel__funded-amount">{intel.amount}</span>
        <span className="ap-intel__funded-detail">{intel.detail}</span>
      </div>
    );
  }
  return null;
}

function KanbanCard({ name, amount, intel, days, stale }) {
  return (
    <div className={`ap-card${stale ? " ap-card--stale" : ""}`}>
      <div className="ap-card__header">
        <span className="ap-card__name">{name}</span>
        <span className="ap-card__amount">{amount}</span>
      </div>
      <div className="ap-card__intel">
        <CardIntel intel={intel} />
      </div>
      <div className="ap-card__footer">
        <span className={`ap-card__days${stale ? " ap-card__days--stale" : ""}`}>{days}</span>
        <span className="ap-card__arrow">↗</span>
      </div>
    </div>
  );
}

// ── Collapsed Sidebar ─────────────────────────────────────────────────────────

function CollapsedSidebar() {
  return (
    <aside className="ap-sidebar">
      <nav className="ap-sidebar__nav">
        <div className="ap-sidebar__nav-group">
          {coreNav.map(({ label, icon: Icon, active }) => (
            <div key={label} className={`ap-nav-item${active ? " ap-nav-item--active" : ""}`} title={label}>
              <Icon size={16} />
            </div>
          ))}
        </div>
        <div className="ap-sidebar__divider" />
        <div className="ap-sidebar__nav-group">
          {utilityNav.map(({ label, icon: Icon }) => (
            <div key={label} className="ap-nav-item" title={label}>
              <Icon size={16} />
            </div>
          ))}
        </div>
      </nav>
      <div className="ap-sidebar__footer">
        <button className="ap-sidebar__cta" title="Add Merchant">
          <Plus size={14} />
        </button>
      </div>
    </aside>
  );
}

// ── Pipeline Visual ───────────────────────────────────────────────────────────

function PipelineVisual() {
  const [phase, setPhase] = useState(0);
  const [view, setView] = useState("table");
  const [playKey, setPlayKey] = useState(0);
  const containerRef = useRef(null);

  const triggerPlay = useCallback(() => setPlayKey((k) => k + 1), []);
  useScrollPlay(containerRef, triggerPlay, { threshold: 0.3 });

  useEffect(() => {
    setPhase(0);
    setView("table");
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 2400),
      setTimeout(() => { setPhase(3); setView("board"); }, 2650),
      setTimeout(() => setPhase(0), 7000),
      setTimeout(() => setView("table"), 7500),
    ];
    return () => timers.forEach(clearTimeout);
  }, [playKey]);

  const SCALE = 0.68;

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", overflow: "hidden", flexShrink: 0, display: "flex", justifyContent: "center", marginTop: 28 }}
    >
      {/* Bottom fade overlay */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "45%",
        background: "linear-gradient(to bottom, transparent 0%, #f0fafb 85%)",
        zIndex: 5,
        pointerEvents: "none",
      }} />
      {/* Animated cursor */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 10,
          pointerEvents: "none",
        }}
        initial={{ x: 280, y: 180, opacity: 0 }}
        animate={
          phase === 0
            ? { x: 280, y: 180, opacity: 0, scale: 1 }
            : phase === 1
              ? { x: 1108, y: 49, opacity: 1, scale: 1 }
              : phase === 2
                ? { x: 1108, y: 49, opacity: 1, scale: 0.82 }
                : { x: 1108, y: 49, opacity: 0, scale: 1 }
        }
        transition={
          phase === 1
            ? { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }
            : phase === 2
              ? { duration: 0.1, ease: "easeIn" }
              : phase === 3
                ? { duration: 0.3, ease: "easeIn" }
                : { duration: 0 }
        }
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 2L16 10.5L10.5 11.5L8 17L4 2Z"
            fill="hsl(210 10% 15%)"
            stroke="white"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Scaled app window */}
      <div className="app-preview-wrap" style={{ width: `${1680 * SCALE}px`, height: `${652 * SCALE}px` }}>
        <div
          className="app-preview"
          style={{ transform: `scale(${SCALE})`, transformOrigin: "top left", height: 652, width: 1680 }}
        >
          {/* Chrome Bar */}
          <div className="app-preview__chrome">
            <div className="app-preview__chrome-brand" />
            <div className="app-preview__chrome-center">
              <div className="app-preview__chrome-search">
                <svg className="app-preview__chrome-search-icon" viewBox="0 0 16 16" fill="none">
                  <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10.5 10.5L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="app-preview__chrome-search-text">Search or jump to…</span>
                <div className="app-preview__chrome-search-kbd">
                  <span>⌘</span>
                  <span>K</span>
                </div>
              </div>
            </div>
            <div className="app-preview__chrome-right">
              <div className="app-preview__chrome-icon-btn">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.3" />
                  <path d="M7 1v1.5M7 11.5V13M1 7h1.5M11.5 7H13M2.9 2.9l1.06 1.06M10.04 10.04l1.06 1.06M2.9 11.1l1.06-1.06M10.04 3.96l1.06-1.06" stroke="rgba(255,255,255,0.4)" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>
              <div className="app-preview__chrome-icon-btn" style={{ position: "relative" }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1.5a4 4 0 014 4v2.5l1 1.5H2L3 8V5.5a4 4 0 014-4zM5.5 11a1.5 1.5 0 003 0" stroke="rgba(255,255,255,0.4)" strokeWidth="1.3" strokeLinejoin="round" />
                </svg>
                <div className="app-preview__chrome-notif-dot" />
              </div>
            </div>
          </div>

          {/* App Layout */}
          <div className="app-preview__layout">
            <CollapsedSidebar />

            {/* Main */}
            <div className="app-preview__main">
              {/* Page header */}
              <div className="app-preview__page-header">
                <div className="app-preview__page-title">
                  Opportunities <span>· 33 deals</span>
                </div>
                <div className="app-preview__view-toggle">
                  <button className={`app-preview__toggle-btn${view === "table" ? " app-preview__toggle-btn--active" : ""}`}>
                    Table
                  </button>
                  <button className={`app-preview__toggle-btn${view === "board" ? " app-preview__toggle-btn--active" : ""}`}>
                    Board
                  </button>
                </div>
              </div>

              {/* Toolbar */}
              <div className="app-preview__toolbar">
                <div className="app-preview__filter-tabs">
                  {view === "table" ? (
                    <>
                      <span className="app-preview__filter-tab app-preview__filter-tab--active">All</span>
                      <span className="app-preview__filter-tab">Intake</span>
                      <span className="app-preview__filter-tab">Active</span>
                      <span className="app-preview__filter-tab">Funded</span>
                      <span className="app-preview__filter-tab">Dead</span>
                    </>
                  ) : (
                    <>
                      <span className="app-preview__filter-tab app-preview__filter-tab--active">All 19</span>
                      <span className="app-preview__filter-tab">Intake 5</span>
                      <span className="app-preview__filter-tab">Active 13</span>
                      <span className="app-preview__filter-tab">Funded 4</span>
                      <span className="app-preview__filter-tab">Dead 2</span>
                    </>
                  )}
                </div>
                {view === "table" && (
                  <div className="app-preview__toolbar-right">
                    <span className="app-preview__filter-chip">Match score ▾</span>
                    <span className="app-preview__filter-chip">Requested amount ▾</span>
                    <span className="app-preview__filter-chip">Days idle ▾</span>
                    <span className="app-preview__search-stub">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <circle cx="5.5" cy="5.5" r="3.5" stroke="#94a3b8" strokeWidth="1.2" />
                        <path d="M8 8l2 2" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                      Search opportunities…
                    </span>
                  </div>
                )}
              </div>

              {/* Content with animated transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={view}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ flex: 1, minHeight: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}
                >
                  {view === "table" ? (
                    <div className="app-preview__table-wrap">
                      <table className="app-preview__table">
                        <thead>
                          <tr>
                            <th style={{ width: 200 }}>Merchant</th>
                            <th style={{ width: 140 }}>Stage</th>
                            <th style={{ width: 60, textAlign: "center" }}>Match</th>
                            <th style={{ width: 140 }}>File Score</th>
                            <th style={{ width: 100 }}>Relationship</th>
                            <th style={{ width: 100, textAlign: "right" }}>Requested</th>
                            <th style={{ width: 100, textAlign: "right" }}>Est. Comm.</th>
                            <th style={{ width: 60, textAlign: "right" }}>Days</th>
                            <th>Underwriter's Note</th>
                          </tr>
                        </thead>
                        <tbody>
                          {TABLE_ROWS.map((row) => (
                            <tr key={row.id}>
                              <td>
                                <div className="ap-merchant">
                                  <span className="ap-merchant__name">{row.bizName}</span>
                                  <span className="ap-merchant__contact">{row.contact}</span>
                                </div>
                              </td>
                              <td>
                                <StageBadge stage={row.stage} label={row.stageLabel} />
                              </td>
                              <td style={{ textAlign: "center", fontVariantNumeric: "tabular-nums", color: "#334155", fontWeight: 600 }}>
                                {row.match}
                              </td>
                              <td>
                                <ConfBar pct={row.confPct} />
                              </td>
                              <td>
                                <RelDots filled={row.relDots} />
                              </td>
                              <td style={{ textAlign: "right", fontVariantNumeric: "tabular-nums", color: "#0f172a" }}>
                                {row.requested}
                              </td>
                              <td style={{ textAlign: "right", fontVariantNumeric: "tabular-nums", color: "#0f172a" }}>
                                {row.comm}
                              </td>
                              <td style={{ textAlign: "right", fontVariantNumeric: "tabular-nums", color: "#94a3b8" }}>
                                {row.days}
                              </td>
                              <td>
                                <span className="ap-note">{row.note}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="app-preview__kanban-wrap">
                      {KANBAN_COLS.map((col) => (
                        <div key={col.id} className={`ap-col${col.stale ? " ap-col--stale" : ""}`}>
                          <div className="ap-col__header">
                            <div className="ap-col__title-row">
                              <span className={`ap-col__title${col.stale ? " ap-col__title--stale" : ""}`}>
                                {col.label}
                              </span>
                              <span className={`ap-col__count${col.stale ? " ap-col__count--stale" : ""}`}>
                                {col.count}
                              </span>
                            </div>
                            {col.volume && <div className="ap-col__volume">{col.volume}</div>}
                            {col.subtitle && <div className="ap-col__subtitle">{col.subtitle}</div>}
                          </div>
                          <div className="ap-col__cards">
                            {col.cards.map((card, i) => (
                              <KanbanCard
                                key={i}
                                name={card.name}
                                amount={card.amount}
                                intel={card.intel}
                                days={card.days}
                                stale={"stale" in card ? card.stale : false}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function PlatformFeatures() {
  return (
    <section className="platform__section">
      <div className="container">
        <div className="section-header center reveal">
          <div className="label-mono">Platform</div>
          <h2 className="display-lg" style={{ marginTop: 12 }}>
            The Operating System for High-Volume ISOs
          </h2>
        </div>

        <div className="platform__grid reveal reveal-delay-1">
          {/* LEFT — Outreach Dialer (spans both rows) */}
          <div className="platform__card platform__card--perms">
            <div className="platform__card-top">
              <div className="platform__card-label">Outreach Dialer</div>
              <h3 className="platform__card-title">
                Call merchants, close more deals
              </h3>
              <p className="platform__card-desc">
                One-click dialing with integrated submission history. See
                exactly what the merchant said in their last bank statement
                parse before the call connects. No more 'flying blind' into wild
                conversations."
              </p>
            </div>
            <div className="platform__roles">
              {[
                { label: "Call Logging", color: "var(--p400)" },
                { label: "Follow-up Queue", color: "var(--a400)" },
                { label: "LRU Sorting", color: "#f59e0b" },
                { label: "Disposition Tags", color: "var(--n400)" },
              ].map((role) => (
                <div key={role.label} className="platform__role">
                  <span
                    className="platform__role-dot"
                    style={{ background: role.color }}
                  />
                  {role.label}
                </div>
              ))}
            </div>
          </div>

          {/* TOP-CENTER — Team Permissions */}
          <div className="platform__card platform__card--ai">
            <div className="platform__ai-badge">Access Control</div>
            <h3 className="platform__ai-title">Granular Access & Compliance</h3>
            <p className="platform__card-desc">
              Define the exact scope for Junior Analysts, Senior Brokers, and
              Admins. Protect your book of business with audit logs and
              lead-level permissioning—built for shops that scale.
            </p>
            <div className="platform__roles platform__roles--light">
              {[
                { label: "Admin", color: "var(--p400)" },
                { label: "Senior Broker", color: "var(--a400)" },
                { label: "Analyst", color: "#f59e0b" },
                { label: "Read-Only", color: "var(--n400)" },
              ].map((role) => (
                <div key={role.label} className="platform__role">
                  <span
                    className="platform__role-dot"
                    style={{ background: role.color }}
                  />
                  {role.label}
                </div>
              ))}
            </div>
          </div>

          {/* TOP-RIGHT — Smart Matching */}
          <div className="platform__card platform__card--match">
            <div className="platform__card-label platform__card-label--faded">
              Dynamic Appetite Matching
            </div>
            <h3 className="platform__card-title platform__card-title--dark">
              Let AI match it
            </h3>
            <div className="platform__match-list">
              {[
                { name: "Westfield Capital", score: 94 },
                { name: "Harbor Funding", score: 88 },
                { name: "Summit MCA", score: 81 },
                { name: "Apex Finance", score: 74 },
              ].map((lender) => (
                <div key={lender.name} className="platform__match-row">
                  <span className="platform__match-name">{lender.name}</span>
                  <span className="platform__match-score">{lender.score}</span>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM — Real-Time Pipeline Velocity (spans both columns) */}
          <div className="platform__card platform__card--pipeline platform__card--pipeline-wide">
            <div className="platform__card-top">
              <h3 className="platform__pipeline-title">Real-Time Pipeline Velocity</h3>
              <p className="platform__card-desc">
                Visualize your desk's throughput. Identify exactly where deals are stalling — whether it's pending docs or lender lag. Move deals from Sub to Funded 3x faster.
              </p>
            </div>
            <PipelineVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
