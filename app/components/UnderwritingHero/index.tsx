"use client";

import "./styles.scss";

const TABS = [
  { label: "Profile", count: null },
  { label: "Underwriting", count: null, active: true },
  { label: "Submissions", count: 2 },
  { label: "Documents", count: 3 },
  { label: "Notes", count: 10 },
  { label: "Activity Log", count: 25 },
];

export default function UnderwritingHero() {
  return (
    <div className="uw-hero">
      {/* Tab Bar */}
      <div className="uw-hero__tabs">
        <div className="uw-hero__tabs-left">
          {TABS.map((tab) => (
            <span
              key={tab.label}
              className={`uw-hero__tab${tab.active ? " uw-hero__tab--active" : ""}`}
            >
              {tab.label}
              {tab.count !== null && (
                <span className="uw-hero__tab-count">{tab.count}</span>
              )}
            </span>
          ))}
        </div>
        <div className="uw-hero__tabs-right">
          <button className="uw-hero__tab-icon" aria-label="Actions" tabIndex={-1}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="uw-hero__tab-icon" aria-label="Search" tabIndex={-1}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button className="uw-hero__tab-icon" aria-label="Notifications" tabIndex={-1}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="uw-hero__tab-icon" aria-label="Settings" tabIndex={-1}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Intelligence Strip */}
      <section className="uw-hero__strip">
        <div className="uw-hero__strip-row">
          <span className="uw-hero__strip-score">100</span>
          <span className="uw-hero__badge uw-hero__badge--clean">Clean</span>
          <span className="uw-hero__strip-signals">
            <span>Growing revenue</span>
            <span className="uw-hero__strip-dot">&middot;</span>
            <span>No stacking</span>
            <span className="uw-hero__strip-dot">&middot;</span>
            <span>1st position</span>
          </span>
        </div>

        <p className="uw-hero__strip-summary">
          YieldStream presents as a premium technology deal with $175K monthly
          revenue and clear upward trajectory (27% growth over 3-month review
          period). Revenue is primarily Stripe SaaS subscription payouts — the
          gold standard for lender underwriting as it demonstrates recurring,
          predictable income. Zero NSFs across all review months. One existing
          MCA position with Capital Plus at $1,067/day represents only 1.2%
          stacking burden — negligible. Average daily balance of $49K provides
          strong cushion. FICO of 760 opens all A-tier lenders. The C-Corp
          structure, 3.5 years in business, and clear use of funds (Series A
          bridge) further strengthen the profile. This is a top-decile deal —
          recommend aggressive multi-lender submission to maximize competitive
          tension.
        </p>
      </section>
    </div>
  );
}
