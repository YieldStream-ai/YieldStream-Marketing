"use client";

import React from "react";

/* ── Feature Mockup Components ──
   Static, code-rendered mockups that replace screenshot PNGs.
   Each renders at the same visual weight as the old screenshots. */

/* ── 1. Bank Statement Analysis ── */
export function BankStatementMock() {
  const documents = [
    { date: "APR 9 1:21 PM", file: "YieldStream_February_2026_Statement.pdf", avgRev: "$155,000", nsfs: "0", months: "JAN 26", ai: "96%" },
    { date: "APR 4 1:21 PM", file: "YieldStream_January_2026_Statement.pdf", avgRev: "$138,000", nsfs: "0", months: "DEC 25", ai: "94%" },
    { date: "APR 14 1:21 PM", file: "YieldStream_March_2026_Statement.pdf", avgRev: "$175,000", nsfs: "0", months: "FEB 26", ai: "95%" },
  ];

  return (
    <div className="features__mock">
      <div className="features__mock-docs-header">
        Documents <span className="features__mock-docs-count">3</span>
      </div>

      <div className="features__mock-docs-upload">
        <svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="12" y1="18" x2="12" y2="12" />
          <polyline points="9 15 12 12 15 15" />
        </svg>
        <span className="features__mock-docs-upload-text">Upload documents</span>
        <span className="features__mock-docs-upload-sub">or drag and drop PDF, JPG, PNG</span>
      </div>

      <div className="features__mock-docs-toolbar">
        <div className="features__mock-docs-toolbar-left">
          <span className="features__mock-docs-filter">All Types <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="10" height="10"><polyline points="6 9 12 15 18 9" /></svg></span>
          <span className="features__mock-docs-filter">Sort: Name <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="10" height="10"><polyline points="6 9 12 15 18 9" /></svg></span>
          <span className="features__mock-docs-search">
            <svg viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" width="10" height="10"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            Search documents...
          </span>
        </div>
      </div>

      <div className="features__mock-docs-table">
        <div className="features__mock-docs-table-head">
          <span className="features__mock-docs-col features__mock-docs-col--date">Date</span>
          <span className="features__mock-docs-col features__mock-docs-col--file">File</span>
          <span className="features__mock-docs-col features__mock-docs-col--num">Avg Rev</span>
          <span className="features__mock-docs-col features__mock-docs-col--num">NSFs</span>
          <span className="features__mock-docs-col features__mock-docs-col--num">Months</span>
          <span className="features__mock-docs-col features__mock-docs-col--ai">A.I.</span>
        </div>
        {documents.map((doc, i) => (
          <div key={i} className="features__mock-docs-table-row">
            <span className="features__mock-docs-col features__mock-docs-col--date features__mock-amount">{doc.date}</span>
            <span className="features__mock-docs-col features__mock-docs-col--file">{doc.file}</span>
            <span className="features__mock-docs-col features__mock-docs-col--num features__mock-amount">{doc.avgRev}</span>
            <span className="features__mock-docs-col features__mock-docs-col--num features__mock-amount">{doc.nsfs}</span>
            <span className="features__mock-docs-col features__mock-docs-col--num features__mock-amount">{doc.months}</span>
            <span className="features__mock-docs-col features__mock-docs-col--ai">
              <span className="features__mock-amount">{doc.ai}</span>
              <span className="features__mock-docs-verified">Verified</span>
            </span>
          </div>
        ))}
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
  const rows: { ts: string; type: "NOTE" | "CALL"; desc: string; entity: string; status: "Pending" | "Completed" }[] = [
    { ts: "Apr 24 1:21p", type: "NOTE", desc: "TODO: Follow up with Alex Monday for final decision on Greenline offer. Check with Capital Plus on r...", entity: "Merchant", status: "Pending" },
    { ts: "Apr 23 1:21p", type: "CALL", desc: "Quick check-in with Alex. He confirmed Greenline is the frontrunner for the $250K deal. CFO approved...", entity: "Merchant", status: "Completed" },
    { ts: "Apr 22 1:21p", type: "NOTE", desc: "Sent Alex a comparison matrix of all 3 offers \u2014 Greenline ($250K/1.25/240d), National ($240K/1.27/18...", entity: "Merchant", status: "Pending" },
    { ts: "Apr 22 1:21p", type: "NOTE", desc: "Submitted renewal to Capital Plus (first right of refusal) and Fox Capital as backup. Capital Plus s...", entity: "Merchant", status: "Completed" },
    { ts: "Apr 21 1:21p", type: "CALL", desc: "Presented all 3 offers to Alex. He\u2019s leaning toward Greenline for the rate and full amount, but want...", entity: "Merchant", status: "Completed" },
    { ts: "Apr 21 1:21p", type: "NOTE", desc: "Renewal opportunity created \u2014 Capital Plus position approaching 50% paydown. $100K requested for con...", entity: "Merchant", status: "Pending" },
    { ts: "Apr 19 1:21p", type: "NOTE", desc: "BlueVine approved $220K at 1.29 factor with weekly payment option. National Funding approved $240K a...", entity: "Merchant", status: "Completed" },
    { ts: "Apr 17 1:21p", type: "NOTE", desc: "Greenline approved first \u2014 $250K at 1.25 factor, 240-day term. This is an exceptional offer. Full am...", entity: "Merchant", status: "Completed" },
  ];

  /* signal icons */
  const noteIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  );
  const callIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="12" height="12" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.81.36 1.6.7 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.75.34 1.54.57 2.35.7A2 2 0 0122 16.92z" />
    </svg>
  );

  return (
    <div className="features__mock">
      <div className="features__mock-activity-tabs">
        <span className="features__mock-activity-tab features__mock-activity-tab--active">All</span>
        <span className="features__mock-activity-tab">Calls</span>
        <span className="features__mock-activity-tab">Submissions</span>
        <span className="features__mock-activity-tab">Documents</span>
        <span className="features__mock-activity-tab">Emails</span>
        <span className="features__mock-activity-tab">Note</span>
        <span className="features__mock-activity-tab">System</span>
      </div>

      {/* Table header */}
      <div className="features__mock-activity-thead">
        <span className="features__mock-activity-col features__mock-activity-col--signal" />
        <span className="features__mock-activity-col features__mock-activity-col--ts">Timestamp</span>
        <span className="features__mock-activity-col features__mock-activity-col--type">Type</span>
        <span className="features__mock-activity-col features__mock-activity-col--desc">Description</span>
        <span className="features__mock-activity-col features__mock-activity-col--entity">Entity/Lender</span>
        <span className="features__mock-activity-col features__mock-activity-col--status">Status</span>
      </div>

      <div className="features__mock-activity-list">
        {rows.map((r, i) => (
          <div key={i} className="features__mock-activity-row">
            <span className="features__mock-activity-col features__mock-activity-col--signal">
              {r.type === "CALL" ? callIcon : noteIcon}
            </span>
            <span className="features__mock-activity-col features__mock-activity-col--ts features__mock-amount">{r.ts}</span>
            <span className="features__mock-activity-col features__mock-activity-col--type">
              <span className="features__mock-badge features__mock-badge--gray">{r.type}</span>
            </span>
            <span className="features__mock-activity-col features__mock-activity-col--desc">{r.desc}</span>
            <span className="features__mock-activity-col features__mock-activity-col--entity">{r.entity}</span>
            <span className="features__mock-activity-col features__mock-activity-col--status">
              <span className={`features__mock-activity-status-dot features__mock-activity-status-dot--${r.status === "Pending" ? "pending" : "completed"}`} />
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
    { name: "Pacific Rim Imports", contact: "David Tanaka", action: "Call", context: "Cold — last contact 19d ago", industry: "Wholesale", phone: "(206) 555-0339", selected: true },
    { name: "Sunrise Dental Group", contact: "Dr. Priya Sharma", action: "Call", context: "Cold — last contact 9d ago", industry: "Healthcare", phone: "(602) 555-0443" },
    { name: "Quick Auto Repair", contact: "James Kowalski", action: "Call", context: "Cold — last contact 17d ago", industry: "Auto Repair", phone: "(312) 555-0891" },
    { name: "Heartland Veterinary", contact: "—", action: "Call", context: "Cold — last contact 9d ago", industry: "Healthcare", phone: "(614) 555-0283" },
    { name: "Prestige Auto Detailing", contact: "—", action: "Outreach", context: "Overdue — reach out today", industry: "Automotive", phone: "(470) 555-0831" },
  ];

  return (
    <div className="features__mock">
      <div className="features__mock-header">
        <span>Outreach</span>
        <span className="features__mock-badge features__mock-badge--teal">12 leads</span>
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
                <th>Contact</th>
                <th>Action</th>
                <th className="features__mock-outreach-hide-sm">Context</th>
                <th className="features__mock-outreach-hide-sm">Industry</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {merchants.map((m, i) => (
                <tr key={i} className={m.selected ? "features__mock-outreach-selected" : ""}>
                  <td style={{ fontWeight: 500 }}>{m.name}</td>
                  <td>{m.contact}</td>
                  <td>
                    <span className={`features__mock-badge features__mock-badge--${m.action === "Call" ? "teal" : "gray"}`}>
                      {m.action}
                    </span>
                  </td>
                  <td className="features__mock-outreach-hide-sm features__mock-outreach-context">{m.context}</td>
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
            <span className="features__mock-outreach-detail-name">Pacific Rim Imports</span>
            <span className="features__mock-outreach-detail-subname">David Tanaka</span>
            <span className="features__mock-outreach-detail-phone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="12" height="12"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
              (206) 555-0339
            </span>
          </div>

          <div className="features__mock-outreach-snapshot">
            <div className="features__mock-outreach-snapshot-title">Business Snapshot</div>
            <div className="features__mock-outreach-snapshot-grid">
              <div className="features__mock-outreach-snapshot-field">
                <span className="features__mock-outreach-snapshot-label">Industry</span>
                <span>Wholesale</span>
              </div>
              <div className="features__mock-outreach-snapshot-field">
                <span className="features__mock-outreach-snapshot-label">Monthly Revenue</span>
                <span className="features__mock-amount">$215.6k</span>
              </div>
              <div className="features__mock-outreach-snapshot-field">
                <span className="features__mock-outreach-snapshot-label">Time in Business</span>
                <span>15 years 10 months</span>
              </div>
            </div>
          </div>

          <div className="features__mock-outreach-activity">
            <div className="features__mock-outreach-activity-title">Recent Activity</div>
            <div className="features__mock-outreach-activity-item">
              <span className="features__mock-outreach-activity-text">Renewal checkpoint: David mentioned business is growing and they&apos;ll likely need additional capital in 60-9...</span>
              <span className="features__mock-outreach-activity-time">7d ago</span>
            </div>
            <div className="features__mock-outreach-activity-item">
              <span className="features__mock-outreach-activity-text">Pricing review call with David. Walked through the offers received for Pacific Rim Imports...</span>
              <span className="features__mock-outreach-activity-time">8d ago</span>
            </div>
          </div>

          <div className="features__mock-outreach-submissions">
            <div className="features__mock-outreach-submissions-title">Past Submissions</div>
            <div className="features__mock-outreach-submissions-row">
              <span>National Funding Corp</span>
              <span className="features__mock-outreach-submissions-date">Apr 11</span>
              <span className="features__mock-badge features__mock-badge--green">Approved</span>
            </div>
            <div className="features__mock-outreach-submissions-row">
              <span>BlueVine Advance</span>
              <span className="features__mock-outreach-submissions-date">Apr 5</span>
              <span className="features__mock-badge features__mock-badge--red">Declined</span>
            </div>
            <div className="features__mock-outreach-submissions-row">
              <span>Greenline Capital</span>
              <span className="features__mock-outreach-submissions-date">Apr 4</span>
              <span className="features__mock-badge features__mock-badge--green">Approved</span>
            </div>
          </div>

          <div className="features__mock-outreach-notes">
            <div className="features__mock-outreach-notes-label">Call Notes</div>
            <div className="features__mock-outreach-notes-input">Type notes from this call...</div>
          </div>

          <div className="features__mock-outreach-actions">
            <div className="features__mock-outreach-schedule">
              <span className="features__mock-outreach-schedule-btn">Today</span>
              <span className="features__mock-outreach-schedule-btn">Tomorrow</span>
              <span className="features__mock-outreach-schedule-btn">+3d</span>
              <span className="features__mock-outreach-schedule-btn">+7d</span>
              <span className="features__mock-outreach-schedule-btn">+14d</span>
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
  ];

  return (
    <div className="features__mock">
      <div className="features__mock-header">
        <span>Lender Registry</span>
        <span className="features__mock-lender-add">+ Add Lender</span>
      </div>
      <div className="features__mock-lender-tabs">
        <span className="features__mock-lender-tab features__mock-lender-tab--active">All Lenders <span className="features__mock-lender-tab-count">4</span></span>
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
