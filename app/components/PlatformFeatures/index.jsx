"use client";

import "./styles.scss";

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

          {/* BOTTOM — Active Pipeline (spans both columns) */}
          <div className="platform__card platform__card--pipeline platform__card--pipeline-wide">
            <div>
              <h3 className="platform__pipeline-title">
                Real-Time Pipeline Velocity
              </h3>
              <div className="platform__pipeline-stat">
                Visualize your desk's throughput. Identify exactly where deals
                are stalling—whether it's pending docs or lender lag. Move deals
                from 'Sub' to 'Funded' 3x faster."
              </div>
            </div>
            <div className="platform__pipeline-bottom">
              <div className="platform__pipeline-row">
                <div className="platform__avatar-stack">
                  {["SC", "MR", "PP", "JO"].map((i) => (
                    <div
                      key={i}
                      className="platform__avatar platform__avatar--stacked"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="platform__pipeline-actions">
                  <button className="platform__action-btn">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                    Share
                  </button>
                  <button className="platform__action-btn">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                    Edit
                  </button>
                </div>
              </div>
              <div className="platform__views">
                {["Kanban", "Table", "Analytics"].map((v) => (
                  <span
                    key={v}
                    className={`platform__view${v === "Kanban" ? " platform__view--active" : ""}`}
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
