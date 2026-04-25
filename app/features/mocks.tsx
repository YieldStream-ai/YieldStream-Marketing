"use client";

import React from "react";

/* ── Feature Mockup Components ──
   Static, code-rendered mockups that replace screenshot PNGs.
   Each renders at the same visual weight as the old screenshots. */

/* ── 1. Bank Statement Analysis ── */
export function BankStatementMock() {
  return (
    <div className="features__mock">
      <div className="features__mock-header">
        <span>Profile</span>
        <div className="features__mock-profile-tabs">
          <span className="features__mock-profile-tab features__mock-profile-tab--active">Profile</span>
          <span className="features__mock-profile-tab">Underwriting</span>
          <span className="features__mock-profile-tab">Submissions</span>
          <span className="features__mock-profile-tab">Documents</span>
          <span className="features__mock-profile-tab">Notes</span>
          <span className="features__mock-profile-tab">Activities</span>
        </div>
      </div>
      <div className="features__mock-profile">
        {/* Left rail */}
        <div className="features__mock-profile-rail">
          <div className="features__mock-profile-merchant">
            <span className="features__mock-profile-merchant-name">YieldStream</span>
            <span className="features__mock-profile-merchant-rep">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              Joshua Dinh
            </span>
          </div>

          <div className="features__mock-profile-section">
            <div className="features__mock-profile-section-title">Business Profile</div>
            <div className="features__mock-profile-field">
              <span className="features__mock-profile-field-label">Score (FICO)</span>
              <span className="features__mock-profile-field-value">
                <span className="features__mock-amount">780</span>
                <span className="features__mock-badge features__mock-badge--green">Excellent</span>
              </span>
            </div>
            <div className="features__mock-profile-field">
              <span className="features__mock-profile-field-label">Time in Business</span>
              <span className="features__mock-profile-field-value">3y 10m</span>
            </div>
            <div className="features__mock-profile-field">
              <span className="features__mock-profile-field-label">Industry</span>
              <span className="features__mock-profile-field-value">Technology</span>
            </div>
            <div className="features__mock-profile-field">
              <span className="features__mock-profile-field-label">Clean List</span>
              <span className="features__mock-profile-field-value">
                <span className="features__mock-badge features__mock-badge--green">Clean</span>
              </span>
            </div>
          </div>

          <div className="features__mock-profile-section">
            <div className="features__mock-profile-section-title">Financials</div>
            <div className="features__mock-profile-field">
              <span className="features__mock-profile-field-label">Revenue</span>
              <span className="features__mock-profile-field-value"><span className="features__mock-amount">$175,000</span></span>
            </div>
            <div className="features__mock-profile-field">
              <span className="features__mock-profile-field-label">Avg Daily Balance</span>
              <span className="features__mock-profile-field-value"><span className="features__mock-amount">$49,000</span></span>
            </div>
          </div>

          <div className="features__mock-profile-section">
            <div className="features__mock-profile-section-title">Risk Flags</div>
            <div className="features__mock-profile-field">
              <span className="features__mock-profile-field-value features__mock-profile-field-value--safe">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><polyline points="20 6 9 17 4 12" /></svg>
                No flags detected
              </span>
            </div>
          </div>
        </div>

        {/* Right pane */}
        <div className="features__mock-profile-main">
          <div className="features__mock-profile-pane-section">
            <div className="features__mock-profile-pane-title">Deal &amp; Status</div>
            <div className="features__mock-profile-grid">
              <div className="features__mock-profile-cell">
                <span className="features__mock-profile-cell-label">Lifecycle Status</span>
                <span className="features__mock-badge features__mock-badge--green">Funded</span>
              </div>
              <div className="features__mock-profile-cell">
                <span className="features__mock-profile-cell-label">Assigned Rep</span>
                <span className="features__mock-profile-cell-value">Joshua Dinh</span>
              </div>
              <div className="features__mock-profile-cell">
                <span className="features__mock-profile-cell-label">Funding History</span>
                <span className="features__mock-profile-cell-value">1x Funded <span className="features__mock-amount">$150,000</span></span>
              </div>
              <div className="features__mock-profile-cell">
                <span className="features__mock-profile-cell-label">Risk Level</span>
                <span className="features__mock-badge features__mock-badge--green">Low</span>
              </div>
            </div>
          </div>

          <div className="features__mock-profile-divider" />

          <div className="features__mock-profile-pane-section">
            <div className="features__mock-profile-pane-title">Business Information</div>
            <div className="features__mock-profile-grid">
              <div className="features__mock-profile-cell">
                <span className="features__mock-profile-cell-label">Legal / Corporate Name</span>
                <span className="features__mock-profile-cell-value">YieldStream</span>
              </div>
              <div className="features__mock-profile-cell">
                <span className="features__mock-profile-cell-label">EIN</span>
                <span className="features__mock-profile-cell-value features__mock-amount">83-4201957</span>
              </div>
              <div className="features__mock-profile-cell">
                <span className="features__mock-profile-cell-label">Entity Type</span>
                <span className="features__mock-badge features__mock-badge--gray">C-Corp</span>
              </div>
              <div className="features__mock-profile-cell">
                <span className="features__mock-profile-cell-label">Industry</span>
                <span className="features__mock-profile-cell-value">Technology</span>
              </div>
              <div className="features__mock-profile-cell">
                <span className="features__mock-profile-cell-label">Monthly Revenue</span>
                <span className="features__mock-profile-cell-value features__mock-amount">$175,888</span>
              </div>
              <div className="features__mock-profile-cell">
                <span className="features__mock-profile-cell-label">Average Daily Balance</span>
                <span className="features__mock-profile-cell-value features__mock-amount">$49,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 2. Deal Pipeline ── */
export function DealPipelineMock() {
  const columns = [
    {
      title: "Intake",
      count: 2,
      cards: [
        { name: "Vineyard Valley Cater...", amount: "$9k" },
        { name: "SoCal Solar Install...", amount: "$11k", status: "New", statusColor: "green" },
      ],
    },
    {
      title: "Underwriting",
      count: 2,
      cards: [
        { name: "Fresno Family Pharm...", amount: "$6k", status: "Complete", statusColor: "green" },
      ],
    },
    {
      title: "Ready to Submit",
      count: 3,
      cards: [
        { name: "Harbor View Dental...", amount: "$11k" },
        { name: "Inland Empire Tow...", amount: "$20k", sub: "80 score" },
      ],
    },
    {
      title: "Out to Lenders",
      count: 2,
      cards: [
        { name: "Sunset Dental Group", amount: "$17k", sub: "8/3 offers" },
        { name: "Pacific Freight Solu...", amount: "$30k", sub: "6/8 offers" },
      ],
    },
    {
      title: "Offers Received",
      count: 3,
      cards: [
        { name: "Bay Bridge Auto Gr...", amount: "$15k", sub: "$34k" },
        { name: "Napa Valley Caterin...", amount: "$11k" },
        { name: "Joshua's Restaurant", amount: "$7.5k", sub: "$9k" },
      ],
    },
    {
      title: "Contract Sent",
      count: 1,
      cards: [
        { name: "Montecito Landsca...", amount: "$17k", sub: "$12,127" },
      ],
    },
    {
      title: "Pending Funding",
      count: 1,
      cards: [
        { name: "Long Beach Urgent...", amount: "$11k", sub: "$8,335" },
      ],
    },
    {
      title: "Stale",
      count: 1,
      cards: [
        { name: "Palm Springs Pool Se...", amount: "$3k", status: "Stale", statusColor: "red" },
      ],
    },
  ];

  return (
    <div className="features__mock">
      <div className="features__mock-header">
        <span>Opportunities</span>
        <div className="features__mock-kanban-toggles">
          <span className="features__mock-kanban-toggle">Table</span>
          <span className="features__mock-kanban-toggle features__mock-kanban-toggle--active">Board</span>
        </div>
      </div>
      <div className="features__mock-kanban-tabs">
        <span className="features__mock-kanban-tab features__mock-kanban-tab--active">My All</span>
        <span className="features__mock-kanban-tab">Inbox <span className="features__mock-kanban-tab-count">2</span></span>
        <span className="features__mock-kanban-tab">Active <span className="features__mock-kanban-tab-count">10</span></span>
        <span className="features__mock-kanban-tab">Funded <span className="features__mock-kanban-tab-count">1</span></span>
        <span className="features__mock-kanban-tab">Stale <span className="features__mock-kanban-tab-count">1</span></span>
      </div>
      <div className="features__mock-kanban">
        {columns.map((col, i) => (
          <div key={i} className="features__mock-kanban-col">
            <div className="features__mock-kanban-col-header">
              <span className="features__mock-kanban-col-title">{col.title}</span>
              <span className="features__mock-kanban-col-count">{col.count}</span>
            </div>
            {col.cards.map((card, j) => (
              <div key={j} className="features__mock-kanban-card">
                <div className="features__mock-kanban-card-name">{card.name}</div>
                <div className="features__mock-kanban-card-row">
                  <span className="features__mock-amount">{card.amount}</span>
                  {card.sub && <span className="features__mock-kanban-card-sub">{card.sub}</span>}
                </div>
                {card.status && (
                  <span className={`features__mock-badge features__mock-badge--${card.statusColor}`}>
                    {card.status}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 3. Submission History ── */
export function SubmissionHistoryMock() {
  const kpis = [
    { label: "Pull-through", value: "11%" },
    { label: "Offer Rate", value: "33%" },
    { label: "Avg Days to Fund", value: "5d" },
    { label: "Total Funded", value: "1" },
    { label: "Total Declined", value: "2" },
  ];

  const lenderRows = [
    { lender: "Greenline Capital", status: "Approved", date: "Apr 4", offer: "$250,000", factor: "1.25", comm: "$19,000", net: "$237,500", days: "7d" },
    { lender: "BlueVine Advance", status: "Approved", date: "Apr 4", offer: "$220,000", factor: "1.29", comm: "$13,200", net: "$209,000", days: "5d" },
    { lender: "National Funding Corp", status: "Approved", date: "Apr 4", offer: "$240,000", factor: "1.22", comm: "$14,400", net: "$228,000", days: "15d" },
    { lender: "Summit Merchant Solutions", status: "In Review", date: "Apr 4", offer: "—", factor: "—", comm: "—", net: "—", days: "—" },
  ];

  return (
    <div className="features__mock">
      <div className="features__mock-header">
        <span>Submissions</span>
        <span className="features__mock-badge features__mock-badge--teal">3 deals</span>
      </div>

      {/* KPI strip */}
      <div className="features__mock-submissions-kpi">
        {kpis.map((k, i) => (
          <div key={i} className="features__mock-submissions-kpi-item">
            <span className="features__mock-submissions-kpi-label">{k.label}</span>
            <span className="features__mock-submissions-kpi-value">{k.value}</span>
          </div>
        ))}
      </div>

      {/* Tab filters */}
      <div className="features__mock-submissions-tabs">
        <span className="features__mock-submissions-tab features__mock-submissions-tab--active">All</span>
        <span className="features__mock-submissions-tab">Active</span>
        <span className="features__mock-submissions-tab">Funded</span>
        <span className="features__mock-submissions-tab">Declined</span>
      </div>

      {/* Submission rows */}
      <div className="features__mock-submissions-rows">
        <div className="features__mock-submissions-row">
          <div className="features__mock-submissions-row-summary">
            <span className="features__mock-submissions-date">Apr 1</span>
            <span className="features__mock-amount">$100,000</span>
            <span className="features__mock-badge features__mock-badge--orange">Out to Lenders</span>
            <span className="features__mock-submissions-ratio">0/3 approved</span>
          </div>
        </div>

        <div className="features__mock-submissions-row features__mock-submissions-row--expanded">
          <div className="features__mock-submissions-row-summary">
            <span className="features__mock-submissions-date">Mar 21</span>
            <span className="features__mock-amount">$250,000</span>
            <span className="features__mock-badge features__mock-badge--green">Offers Received</span>
            <span className="features__mock-submissions-ratio">3/4 approved</span>
          </div>
          <table className="features__mock-table features__mock-submissions-lenders">
            <thead>
              <tr>
                <th>Lender</th>
                <th>Status</th>
                <th>Sent</th>
                <th>Offer</th>
                <th className="features__mock-submissions-hide-sm">Factor</th>
                <th className="features__mock-submissions-hide-sm">Comm</th>
                <th className="features__mock-submissions-hide-sm">Net</th>
                <th>Days</th>
              </tr>
            </thead>
            <tbody>
              {lenderRows.map((r, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500 }}>{r.lender}</td>
                  <td>
                    <span className={`features__mock-badge features__mock-badge--${r.status === "Approved" ? "green" : "gray"}`}>
                      {r.status}
                    </span>
                  </td>
                  <td>{r.date}</td>
                  <td><span className="features__mock-amount">{r.offer}</span></td>
                  <td className="features__mock-submissions-hide-sm"><span className="features__mock-amount">{r.factor}</span></td>
                  <td className="features__mock-submissions-hide-sm"><span className="features__mock-amount">{r.comm}</span></td>
                  <td className="features__mock-submissions-hide-sm"><span className="features__mock-amount">{r.net}</span></td>
                  <td><span className="features__mock-amount">{r.days}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="features__mock-submissions-row">
          <div className="features__mock-submissions-row-summary">
            <span className="features__mock-submissions-date">Feb 3</span>
            <span className="features__mock-amount">$150,000</span>
            <span className="features__mock-badge features__mock-badge--green">Funded</span>
            <span className="features__mock-submissions-ratio">1/3 approved</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 4. Notes & Activity Log ── */
export function NotesActivityMock() {
  const rows = [
    { date: "Apr 2", time: "2:15p", desc: "TODO: Follow up with Alex Monday for final decision on Greenline offer. Ch...", author: "Merchant1", status: "Pending" },
    { date: "Apr 2", time: "2:15p", desc: "Quick check-in with Alex. He confirmed Greenline is the frontrunner for the...", author: "Merchant1", status: "Pending" },
    { date: "Apr 2", time: "2:15p", desc: "Sent Alex a comparison matrix of all 3 offers \u2014 Greenline ($250k/1.25/240...", author: "Merchant1", status: "Pending" },
    { date: "Mar 29", time: "1:30p", desc: "Submitted renewal to Capital Plus (first right of refusal) and Fox Capital a...", author: "Merchant1", status: "Pending" },
    { date: "Mar 29", time: "1:30p", desc: "Presented all 3 offers to Alex. He's leaning toward Greenline for the rate an...", author: "Merchant1", status: "Completed" },
    { date: "Mar 28", time: "11:00a", desc: "Renewal opportunity created \u2014 Capital Plus position approaching 50% pay...", author: "Merchant1", status: "Completed" },
    { date: "Mar 27", time: "4:15p", desc: "BlueVine approved $220K at 1.29 factor with weekly payment option. Natio...", author: "Merchant1", status: "Completed" },
    { date: "Mar 25", time: "2:22p", desc: "Greenline approved first \u2014 $250K at 1.25 factor, 240-day term. This is ac...", author: "Merchant1", status: "Completed" },
    { date: "Mar 24", time: "3:00p", desc: "Summit came back asking for Q4 P&L and AR aging report. Fair ask \u2014 they...", author: "Merchant1", status: "Completed" },
    { date: "Mar 22", time: "10:45a", desc: "All 4 submissions sent. Updated statements show $175K MRR with contin...", author: "Merchant1", status: "Completed" },
  ];

  return (
    <div className="features__mock">
      <div className="features__mock-header">
        <span>Activities</span>
      </div>
      <div className="features__mock-activity-tabs">
        <span className="features__mock-activity-tab features__mock-activity-tab--active">All</span>
        <span className="features__mock-activity-tab">Calls</span>
        <span className="features__mock-activity-tab">Submissions</span>
        <span className="features__mock-activity-tab">Documents</span>
        <span className="features__mock-activity-tab">Emails</span>
      </div>
      <div className="features__mock-activity-list">
        {rows.map((r, i) => (
          <div key={i} className="features__mock-activity-row">
            <div className="features__mock-activity-date">
              <span>{r.date}</span>
              <span>{r.time}</span>
            </div>
            <div className="features__mock-activity-desc">{r.desc}</div>
            <span className="features__mock-activity-author">{r.author}</span>
            <span className={`features__mock-badge features__mock-badge--${r.status === "Pending" ? "orange" : "green"}`}>
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 5. Outreach Queue ── */
export function OutreachQueueMock() {
  const merchants = [
    { name: "Yield Stream LLC", action: "Call", industry: "Technology", phone: "(415) 555-0112", revenue: "$9k-$9k", selected: true },
    { name: "Sunrise Dental Group", action: "Call", industry: "Healthcare", phone: "(862) 555-0198", revenue: "$9k-$9k" },
    { name: "Lucky Dragon Chinese Kitchen", action: "Call", industry: "Restaurant", phone: "(718) 555-0234", revenue: "$9k-$9k" },
    { name: "Interstate Welding & Fab", action: "Outreach", industry: "Manufacturing", phone: "(281) 555-0176", revenue: "$9k-$9k" },
    { name: "Red Hawk Trucking", action: "Call", industry: "Trucking", phone: "(469) 555-0143", revenue: "$9k-$9k" },
    { name: "Magnolia Home Staging", action: "Call", industry: "Real Estate", phone: "(404) 555-0189", revenue: "$9k-$9k" },
    { name: "Titan Towing & Recovery", action: "Outreach", industry: "Towing", phone: "(312) 555-0165", revenue: "$9k-$9k" },
    { name: "Brooklyn Bagel Works", action: "Call", industry: "Restaurant", phone: "(718) 555-0211", revenue: "$9k-$9k" },
  ];

  return (
    <div className="features__mock">
      <div className="features__mock-header">
        <span>Outreach</span>
        <span className="features__mock-badge features__mock-badge--teal">{merchants.length} leads</span>
      </div>
      <div className="features__mock-outreach">
        {/* Left pane - call list */}
        <div className="features__mock-outreach-list">
          <div className="features__mock-outreach-tabs">
            <span className="features__mock-outreach-tab features__mock-outreach-tab--active">All</span>
            <span className="features__mock-outreach-tab">Today</span>
            <span className="features__mock-outreach-tab">New Leads</span>
            <span className="features__mock-outreach-tab">Renewals</span>
          </div>
          <table className="features__mock-table">
            <thead>
              <tr>
                <th>Business</th>
                <th>Action</th>
                <th className="features__mock-outreach-hide-sm">Industry</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {merchants.map((m, i) => (
                <tr key={i} className={m.selected ? "features__mock-outreach-selected" : ""}>
                  <td style={{ fontWeight: 500 }}>{m.name}</td>
                  <td>
                    <span className={`features__mock-badge features__mock-badge--${m.action === "Call" ? "teal" : "gray"}`}>
                      {m.action}
                    </span>
                  </td>
                  <td className="features__mock-outreach-hide-sm">{m.industry}</td>
                  <td><span className="features__mock-amount">{m.phone}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right pane - merchant detail */}
        <div className="features__mock-outreach-detail">
          <div className="features__mock-outreach-detail-header">
            <span className="features__mock-outreach-detail-name">Yield Stream LLC</span>
            <span className="features__mock-outreach-detail-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
              (800) 555-0443
            </span>
          </div>

          <div className="features__mock-outreach-snapshot">
            <div className="features__mock-outreach-snapshot-title">Business Snapshot</div>
            <div className="features__mock-outreach-snapshot-grid">
              <div className="features__mock-outreach-snapshot-field">
                <span className="features__mock-outreach-snapshot-label">Industry</span>
                <span>Healthcare</span>
              </div>
              <div className="features__mock-outreach-snapshot-field">
                <span className="features__mock-outreach-snapshot-label">Monthly Rev</span>
                <span className="features__mock-amount">$9,400</span>
              </div>
              <div className="features__mock-outreach-snapshot-field">
                <span className="features__mock-outreach-snapshot-label">Time in Business</span>
                <span>1.3 years</span>
              </div>
            </div>
          </div>

          <div className="features__mock-outreach-submissions">
            <div className="features__mock-outreach-submissions-title">Past Submissions</div>
            <div className="features__mock-outreach-submissions-row">
              <span>Baseline Advance</span>
              <span className="features__mock-badge features__mock-badge--green">Approved</span>
            </div>
            <div className="features__mock-outreach-submissions-row">
              <span>Greenline Capital</span>
              <span className="features__mock-badge features__mock-badge--green">Approved</span>
            </div>
            <div className="features__mock-outreach-submissions-row">
              <span>National Funding</span>
              <span className="features__mock-badge features__mock-badge--green">Approved</span>
            </div>
          </div>

          <div className="features__mock-outreach-actions">
            <div className="features__mock-outreach-schedule">
              <span className="features__mock-outreach-schedule-btn">Today</span>
              <span className="features__mock-outreach-schedule-btn">Tomorrow</span>
              <span className="features__mock-outreach-schedule-btn">+3d</span>
              <span className="features__mock-outreach-schedule-btn">+7d</span>
            </div>
            <button className="features__mock-outreach-cta">Save + Next Lead</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 6. Lender Registry ── */
export function LenderRegistryMock() {
  const lenders = [
    { name: "BlueVine Advance", status: "91d", statusColor: "orange", updated: "Nov 20", fico: "580", revenue: "$20k", pos: "3", restrictions: [] },
    { name: "Capital Plus Financial", status: "Fresh", statusColor: "green", updated: "Mar 27", fico: "550", revenue: "$15k", pos: "6", restrictions: ["NV"] },
    { name: "Fox Capital Group", status: "91d", statusColor: "orange", updated: "Mar 20", fico: "400", revenue: "$50k", pos: "6", restrictions: [] },
    { name: "Greenline Capital", status: "Fresh", statusColor: "green", updated: "Mar 27", fico: "525", revenue: "$35k", pos: "2", restrictions: ["NV", "ND", "SD"] },
    { name: "National Funding Corp", status: "Fresh", statusColor: "green", updated: "Mar 27", fico: "580", revenue: "$10k", pos: "4", restrictions: [] },
    { name: "Pinnacle Business Capital", status: "91d", statusColor: "orange", updated: "Mar 20", fico: "600", revenue: "$20k", pos: "3", restrictions: ["NV"] },
    { name: "Summit Merchant Solutions", status: "Fresh", statusColor: "green", updated: "Mar 20", fico: "525", revenue: "$12k", pos: "5", restrictions: ["NV", "SD"] },
    { name: "Velocity Funding Group", status: "91d", statusColor: "orange", updated: "Mar 20", fico: "580", revenue: "$10k", pos: "5", restrictions: [] },
  ];

  return (
    <div className="features__mock">
      <div className="features__mock-header">
        <span>Lender Registry</span>
        <span className="features__mock-lender-add">+ Add Lender</span>
      </div>
      <div className="features__mock-lender-tabs">
        <span className="features__mock-lender-tab features__mock-lender-tab--active">All Lenders <span className="features__mock-lender-tab-count">8</span></span>
        <span className="features__mock-lender-tab">Needs Update <span className="features__mock-lender-tab-count">0</span></span>
        <span className="features__mock-lender-tab">Active <span className="features__mock-lender-tab-count">0</span></span>
      </div>
      <table className="features__mock-table">
        <thead>
          <tr>
            <th>Lender</th>
            <th>Status</th>
            <th className="features__mock-lender-hide-sm">Last Updated</th>
            <th>Min FICO</th>
            <th>Min Revenue</th>
            <th className="features__mock-lender-hide-sm">Max Pos</th>
            <th className="features__mock-lender-hide-sm">Restrictions</th>
          </tr>
        </thead>
        <tbody>
          {lenders.map((l, i) => (
            <tr key={i}>
              <td style={{ fontWeight: 500 }}>{l.name}</td>
              <td>
                <span className={`features__mock-badge features__mock-badge--${l.statusColor}`}>
                  {l.status}
                </span>
              </td>
              <td className="features__mock-lender-hide-sm">{l.updated}</td>
              <td><span className="features__mock-amount">{l.fico}</span></td>
              <td><span className="features__mock-amount">{l.revenue}</span></td>
              <td className="features__mock-lender-hide-sm"><span className="features__mock-amount">{l.pos}</span></td>
              <td className="features__mock-lender-hide-sm">
                {l.restrictions.length > 0
                  ? l.restrictions.map((r, j) => (
                      <span key={j} className="features__mock-badge features__mock-badge--red features__mock-lender-restriction">{r}</span>
                    ))
                  : <span style={{ color: "#94a3b8", fontSize: 11 }}>—</span>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── 7. Email Integration ── */
export function EmailMock() {
  return (
    <div className="features__mock">
      <div className="features__mock-header">
        <span>New Message</span>
        <div className="features__mock-email-providers">
          <span className="features__mock-email-provider">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Gmail
          </span>
          <span className="features__mock-email-provider">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Outlook
          </span>
        </div>
      </div>
      <div className="features__mock-email">
        <div className="features__mock-email-field">
          <span>From</span> alex@capitolmerchant.com
        </div>
        <div className="features__mock-email-field">
          <span>To</span> submissions@velocityfunding.com
        </div>
        <div className="features__mock-email-subject">
          Deal Package — Riverside Auto Detail — $85,000 Request
        </div>
        <div className="features__mock-email-body">
          Hi Velocity team,<br /><br />
          Attached is the full deal package for Riverside Auto Detail. Bank statements, application, and AI underwrite summary included. Let me know if you need anything else.<br /><br />
          Best,<br />Alex Rivera
        </div>
        <div className="features__mock-email-reply">
          <strong>Reply from Velocity Funding — 2h ago</strong>
          Looks good, Alex. We can do $82K at 1.29 for 12 months. Sending the formal offer now — should hit your dashboard within the hour.
        </div>
      </div>
    </div>
  );
}

/* ── 8. Notifications ── */
export function NotificationsMock() {
  const items = [
    {
      icon: "offer",
      unread: true,
      text: <><strong>Velocity Funding</strong> sent an offer on <strong>Riverside Auto Detail</strong> — $82,000 at 1.29</>,
      time: "2 min ago",
    },
    {
      icon: "expiry",
      unread: true,
      text: <><strong>BlueVine Capital</strong> offer expires in 24h — <strong>Metro Deli Group</strong></>,
      time: "18 min ago",
    },
    {
      icon: "stale",
      unread: false,
      text: <><strong>Sunrise Bakery</strong> has been in Underwriting for 14 days</>,
      time: "1h ago",
    },
    {
      icon: "renewal",
      unread: false,
      text: <><strong>Peak Fitness LLC</strong> reaches 50% paydown in 12 days — renewal window opening</>,
      time: "3h ago",
    },
    {
      icon: "mention",
      unread: false,
      text: <><strong>@Maria</strong> mentioned you on <strong>Golden Gate Tire</strong>: &quot;Can you follow up on the counter?&quot;</>,
      time: "5h ago",
    },
  ];

  return (
    <div className="features__mock">
      <div className="features__mock-header">
        <span>Notifications</span>
        <span className="features__mock-badge features__mock-badge--teal">2 new</span>
      </div>
      <div className="features__mock-notif-list">
        {items.map((n, i) => (
          <div key={i} className={`features__mock-notif ${n.unread ? "features__mock-notif--unread" : ""}`}>
            <div className={`features__mock-notif-dot ${!n.unread ? "features__mock-notif-dot--read" : ""}`} />
            <div className={`features__mock-notif-icon features__mock-notif-icon--${n.icon}`}>
              {n.icon === "offer" && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" /></svg>
              )}
              {n.icon === "expiry" && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              )}
              {n.icon === "stale" && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
              )}
              {n.icon === "renewal" && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" /></svg>
              )}
              {n.icon === "mention" && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94" /></svg>
              )}
            </div>
            <div className="features__mock-notif-content">
              <div className="features__mock-notif-text">{n.text}</div>
              <div className="features__mock-notif-time">{n.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 9. Renewals Tracking ── */
export function RenewalsMock() {
  const rows = [
    { merchant: "Peak Fitness LLC", funded: "$125,000", paydown: 48, days: 12, value: "$118,000", status: "ready" },
    { merchant: "Metro Deli Group", funded: "$67,500", paydown: 44, days: 22, value: "$71,000", status: "ready" },
    { merchant: "Coastal Dry Clean", funded: "$42,000", paydown: 38, days: 34, value: "$45,500", status: "approaching" },
    { merchant: "Summit HVAC", funded: "$93,000", paydown: 31, days: 48, value: "$89,000", status: "approaching" },
    { merchant: "Brightside Dental", funded: "$155,000", paydown: 26, days: 61, value: "$148,000", status: "approaching" },
  ];

  return (
    <div className="features__mock">
      <div className="features__mock-header">
        <span>Renewal Pipeline</span>
        <span className="features__mock-badge features__mock-badge--green">2 ready</span>
      </div>
      <table className="features__mock-table">
        <thead>
          <tr>
            <th>Merchant</th>
            <th>Funded</th>
            <th>Paydown</th>
            <th>Days</th>
            <th>Est. Value</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td style={{ fontWeight: 500 }}>{r.merchant}</td>
              <td><span className="features__mock-amount">{r.funded}</span></td>
              <td>
                <div className="features__mock-progress">
                  <div className="features__mock-progress-track">
                    <div
                      className={`features__mock-progress-fill features__mock-progress-fill--${r.paydown >= 45 ? "green" : "orange"}`}
                      style={{ width: `${r.paydown}%` }}
                    />
                  </div>
                  <span className="features__mock-progress-label">{r.paydown}%</span>
                </div>
              </td>
              <td><span className="features__mock-amount">{r.days}d</span></td>
              <td><span className="features__mock-amount">{r.value}</span></td>
              <td>
                <span className={`features__mock-badge features__mock-badge--${r.status === "ready" ? "green" : "orange"}`}>
                  {r.status === "ready" ? "Ready" : "Approaching"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── 10. Data Import ── */
export function CSVImportMock() {
  const mappings = [
    { from: "business_name", to: "Merchant Name" },
    { from: "owner_email", to: "Email" },
    { from: "monthly_rev", to: "Monthly Revenue" },
    { from: "fico_score", to: "FICO" },
    { from: "phone", to: "Phone Number" },
  ];

  return (
    <div className="features__mock">
      <div className="features__mock-header">
        <span>Data Import</span>
        <span className="features__mock-badge features__mock-badge--green">Mapped</span>
      </div>
      <div className="features__mock-import">
        <div className="features__mock-dropzone features__mock-dropzone--active">
          <div className="features__mock-dropzone-file">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2f7d4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
            merchant_export_2024.csv
            <span style={{ color: "#94a3b8", fontSize: 11 }}>— 248 rows</span>
          </div>
        </div>

        <div className="features__mock-mapping">
          <div className="features__mock-mapping-row" style={{ fontWeight: 600, fontSize: 10, textTransform: "uppercase" as const, letterSpacing: "0.04em", color: "#64748b" }}>
            <span style={{ flex: 1 }}>CSV Column</span>
            <span style={{ width: 14 }} />
            <span style={{ flex: 1 }}>YieldStream Field</span>
          </div>
          {mappings.map((m, i) => (
            <div key={i} className="features__mock-mapping-row">
              <span className="features__mock-mapping-from">{m.from}</span>
              <span className="features__mock-mapping-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </span>
              <span className="features__mock-mapping-to">{m.to}</span>
            </div>
          ))}
        </div>

        <div className="features__mock-summary">
          <span className="features__mock-summary-item features__mock-summary-item--success"><strong>248</strong> ready</span>
          <span className="features__mock-summary-item features__mock-summary-item--warn"><strong>3</strong> duplicates</span>
          <span className="features__mock-summary-item features__mock-summary-item--error"><strong>1</strong> error</span>
        </div>
      </div>
    </div>
  );
}
