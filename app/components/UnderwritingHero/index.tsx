"use client";

import "./styles.scss";

export default function UnderwritingHero() {
  return (
    <div className="uw-hero">
      {/* Top Nav Bar */}
      <div className="uw-hero__topbar">
        <div className="uw-hero__topbar-left">
          <button className="uw-hero__topbar-back" aria-label="Back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="uw-hero__topbar-center">
          <div className="uw-hero__search">
            <svg
              className="uw-hero__search-icon"
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle
                cx="7"
                cy="7"
                r="5.5"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M11 11L14 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span className="uw-hero__search-text">Search or jump to...</span>
            <span className="uw-hero__search-kbd">
              <kbd>&#8984;</kbd>
              <kbd>K</kbd>
            </span>
          </div>
        </div>
        <div className="uw-hero__topbar-right">
          <button className="uw-hero__topbar-icon" aria-label="Notifications">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.73 21a2 2 0 0 1-3.46 0"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button className="uw-hero__topbar-icon" aria-label="Settings">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="3"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Intelligence Strip */}
      <section className="uw-hero__strip">
        <div className="uw-hero__strip-row">
          <span className="uw-hero__strip-score">100</span>
          <span className="uw-hero__badge uw-hero__badge--clean">CLEAN</span>
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
          period). Revenue is primarily Stripe SaaS subscription payouts —
          recurring, predictable income. This is a top-decile deal.
        </p>
      </section>

      <hr className="uw-hero__divider" />

      {/* Cash Flow */}
      <section className="uw-hero__section">
        <h3 className="uw-hero__section-label">CASH FLOW</h3>

        <div className="uw-hero__metric-grid">
          {/* Monthly Revenue */}
          <div className="uw-hero__metric-block">
            <div className="uw-hero__metric-header">
              <span className="uw-hero__metric-label">
                Monthly Revenue (90d avg)
              </span>
              <span className="uw-hero__metric-badge uw-hero__metric-badge--positive">
                +13%
              </span>
            </div>
            <span className="uw-hero__metric-value">$175,000</span>
            <svg
              className="uw-hero__metric-sparkline"
              viewBox="0 0 100 36"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="sparkFillA"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#2F7D4F" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#2F7D4F" stopOpacity="0.03" />
                </linearGradient>
              </defs>
              <path
                d="M0,30 L8,28 L16,26 L24,24 L32,25 L40,22 L48,19 L56,17 L64,14 L72,12 L80,10 L88,7 L100,4 L100,36 L0,36Z"
                fill="url(#sparkFillA)"
              />
              <polyline
                points="0,30 8,28 16,26 24,24 32,25 40,22 48,19 56,17 64,14 72,12 80,10 88,7 100,4"
                fill="none"
                stroke="#2F7D4F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* AVG Daily Balance */}
          <div className="uw-hero__metric-block">
            <div className="uw-hero__metric-header">
              <span className="uw-hero__metric-label">Avg Daily Balance</span>
              <span className="uw-hero__metric-badge uw-hero__metric-badge--neutral">
                28% of rev
              </span>
            </div>
            <span className="uw-hero__metric-value">$49,000</span>
            <svg
              className="uw-hero__metric-sparkline"
              viewBox="0 0 100 36"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="sparkFillB"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#2F7D4F" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#2F7D4F" stopOpacity="0.03" />
                </linearGradient>
              </defs>
              <path
                d="M0,26 L10,24 L20,22 L30,19 L40,20 L50,17 L60,14 L70,13 L80,11 L90,9 L100,6 L100,36 L0,36Z"
                fill="url(#sparkFillB)"
              />
              <polyline
                points="0,26 10,24 20,22 30,19 40,20 50,17 60,14 70,13 80,11 90,9 100,6"
                fill="none"
                stroke="#2F7D4F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* DSCR */}
          <div className="uw-hero__metric-block">
            <div className="uw-hero__metric-header">
              <span className="uw-hero__metric-label">DSCR</span>
            </div>
            <span className="uw-hero__metric-value">7.46</span>
          </div>

          {/* Daily Payment Capacity */}
          <div className="uw-hero__metric-block">
            <div className="uw-hero__metric-header">
              <span className="uw-hero__metric-label">
                Daily Payment Capacity
              </span>
            </div>
            <span className="uw-hero__metric-value">$6,888</span>
          </div>
        </div>
      </section>

      <hr className="uw-hero__divider" />

      {/* Active Debt Stack */}
      <section className="uw-hero__section uw-hero__section--last">
        <h3 className="uw-hero__section-label">ACTIVE DEBT STACK</h3>
        <table className="uw-hero__table">
          <thead>
            <tr>
              <th className="uw-hero__th">Lender</th>
              <th className="uw-hero__th uw-hero__th--right">Advance</th>
              <th className="uw-hero__th uw-hero__th--right">Daily Pull</th>
              <th className="uw-hero__th uw-hero__th--right">Remaining</th>
              <th className="uw-hero__th uw-hero__th--right">Est. Days</th>
            </tr>
          </thead>
          <tbody>
            <tr className="uw-hero__table-row">
              <td className="uw-hero__td">Capital Plus Financial</td>
              <td className="uw-hero__td uw-hero__td--right uw-hero__td--mono">$96,000</td>
              <td className="uw-hero__td uw-hero__td--right uw-hero__td--mono">$1,067</td>
              <td className="uw-hero__td uw-hero__td--right uw-hero__td--mono">$96,000</td>
              <td className="uw-hero__td uw-hero__td--right uw-hero__td--mono">90d</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
