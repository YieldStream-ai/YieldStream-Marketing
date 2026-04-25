"use client";

import "./styles.scss";

const TABLE_ROWS: {
  id: string;
  metric: string;
  ai: string;
  human: string;
  dollar: boolean;
  collapse?: boolean;
}[] = [
  { id: "adb", metric: "Avg Daily Balance", ai: "$43,400", human: "43400", dollar: true },
  { id: "deposits", metric: "Total Deposits", ai: "$155,000", human: "155000", dollar: true },
  { id: "withdrawals", metric: "Total Withdrawals", ai: "$136,400", human: "136400", dollar: true },
  { id: "nsf", metric: "NSF Count", ai: "0", human: "0", dollar: false },
  { id: "num-deposits", metric: "# of Deposits", ai: "27", human: "27", dollar: false, collapse: true },
  { id: "avg-txn", metric: "Avg Transaction", ai: "$5,741", human: "5741", dollar: true, collapse: true },
  { id: "ending", metric: "Ending Balance", ai: "$47,740", human: "47740", dollar: true, collapse: true },
  { id: "edb", metric: "EDB Trend", ai: "trend", human: "ai-derived", dollar: false, collapse: true },
  { id: "dscr", metric: "DSCR", ai: "6.6x", human: "ai-derived", dollar: false },
];

const LEFT_ANNOTATIONS = [
  { title: "Monthly Revenue", anchor: "Total Deposits", desc: "Average, trend direction, and volatility" },
  { title: "Daily Balances", anchor: "Avg Daily Balance", desc: "ADB calculation with low-point detection" },
  { title: "NSF Frequency", anchor: "NSF Count", desc: "Count, pattern, and severity classification" },
  { title: "Revenue Trend", anchor: "EDB Trend", desc: "Growing, stable, declining, or volatile" },
];

const RIGHT_ANNOTATIONS = [
  { title: "DSCR", anchor: "DSCR", desc: "Debt service coverage ratio calculation" },
  { title: "Stacking Detection", anchor: "Active MCA", desc: "Active MCA positions and total burden" },
  { title: "Lien / Garnishment", anchor: "Gov / Tax Liens", desc: "Automated flag detection in transactions" },
  { title: "Anomaly Detection", anchor: "Transfer Activity", desc: "Unusual deposits, gaps, or pattern breaks" },
];

export default function BankIntelligencePanel() {
  return (
    <div className="bip">
      {/* Left annotations */}
      <div className="bip__annotations bip__annotations--left">
        {LEFT_ANNOTATIONS.map((a, i) => (
          <div key={i} className="bip__annotation">
            <div className="bip__annotation-title">{a.title}</div>
            <div className="bip__annotation-desc">{a.desc}</div>
            <div className="bip__annotation-anchor">{"↳ "}{a.anchor}</div>
          </div>
        ))}
      </div>

      {/* Central panel */}
      <div className="bip__panel">
        <div className="bip__panel-header">
          <span className="bip__panel-title">Bank Intelligence</span>
          <span className="bip__panel-badge">Verified</span>
        </div>

        <table className="bip__table">
          <thead>
            <tr>
              <th>Metric</th>
              <th>AI Extracted</th>
              <th>Human Verified</th>
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((row) => (
              <tr
                key={row.id}
                className={row.collapse ? "bip__table-row--collapsed" : undefined}
              >
                <td className="bip__table-metric">{row.metric}</td>
                <td className="bip__table-value">
                  {row.ai === "trend" ? (
                    <span className="bip__table-trend">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                        <polyline points="16 7 22 7 22 13" />
                      </svg>
                      growing
                    </span>
                  ) : (
                    row.ai
                  )}
                </td>
                <td className="bip__table-verified">
                  {row.human === "ai-derived" ? (
                    <span className="bip__table-ai-derived">AI-derived</span>
                  ) : (
                    <span className="bip__table-verified-input">
                      {row.dollar && <span className="bip__dollar-sign">$</span>}
                      {row.human}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Negative Triggers */}
        <div className="bip__triggers">
          <div className="bip__triggers-header">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            Negative Triggers
          </div>
          <div className="bip__trigger-row">
            <span className="bip__trigger-label">Negative Days</span>
            <span className="bip__trigger-value">None</span>
          </div>
          <div className="bip__trigger-row">
            <span className="bip__trigger-label">Gov / Tax Liens</span>
            <span className="bip__trigger-value">None detected</span>
          </div>
          <div className="bip__trigger-row">
            <span className="bip__trigger-label">Transfer Activity</span>
            <span className="bip__trigger-value bip__trigger-value--flagged">
              ⚠ 1 flagged transfer
              <span className="bip__trigger-detail">
                ACH debit to Capital Plus Financial ($1,067)
              </span>
            </span>
          </div>
        </div>

        {/* Active MCA */}
        <div className="bip__mca-row">
          <div className="bip__mca-label">
            Active MCA
            <span>Capital Plus Financial</span>
          </div>
          <div className="bip__mca-amount">$1,067/day</div>
        </div>
      </div>

      {/* Right annotations */}
      <div className="bip__annotations bip__annotations--right">
        {RIGHT_ANNOTATIONS.map((a, i) => (
          <div key={i} className="bip__annotation">
            <div className="bip__annotation-title">{a.title}</div>
            <div className="bip__annotation-desc">{a.desc}</div>
            <div className="bip__annotation-anchor">{"↳ "}{a.anchor}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
