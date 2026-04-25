"use client";

import React from "react";
import { motion } from "framer-motion";
import { compareCard, staggerItem } from "../constants";
import "./styles.scss";

const TERMS_ROWS = [
  ["Advance Amount", "$250,000", "$220,000", "−$30k", "—"],
  ["Factor Rate", "1.25x", "1.29x", "+0.04x", "—"],
  ["Term", "240d", "200d", "−40d", "—"],
  ["Payment Freq.", "Daily", "Weekly", null, "—"],
];

const ECONOMICS_ROWS = [
  ["Daily Remittance", "$1,302", "$1,419", "+$117", "—"],
  ["Total Payback", "$312,500", "$283,800", null, "—"],
  ["Net Funding", "$237,500", "$209,000", "−$28k", "—"],
  ["Commission", "$15,000", "$13,200", "−$1.8k", "—"],
  ["Buy Rate", "0.94", "0.94", null, "—"],
];

const LENDER_HEADERS = [
  {
    name: "Greenline Capital",
    star: true,
    status: "Approved",
    statusClass: "cv__status--approved",
    editBtn: true,
  },
  {
    name: "BlueVine Advance",
    star: false,
    status: "Approved",
    statusClass: "cv__status--approved",
    editBtn: true,
  },
  {
    name: "National Funding",
    star: false,
    status: "Submitted",
    statusClass: "cv__status--submitted",
    editBtn: true,
  },
];

const DEAL_RANKS = [
  {
    value: "7/10",
    width: "70%",
    color: "#ba7517",
  },
  {
    value: "3/10",
    width: "30%",
    color: "#d85a30",
  },
  { value: "—", placeholder: true },
];

function EditIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function DataRow({ label, a, bMain, bDelta, c }) {
  return (
    <tr className="cv__data-row">
      <td className="cv__label-cell">{label}</td>
      <td className="cv__value-cell cv__value-cell--highlight">{a}</td>
      <td className="cv__value-cell">
        {bMain}
        {bDelta && <span className="cv__delta">{bDelta}</span>}
      </td>
      <td className="cv__value-cell cv__value-cell--placeholder">{c}</td>
    </tr>
  );
}

export default function CompareVisual() {
  return (
    <div className="cv">
      <motion.div
        variants={compareCard}
        initial="hidden"
        animate="visible"
        className="cv__card"
      >
        {/* Header */}
        <motion.div variants={staggerItem} className="cv__header">
          <div className="cv__header-left">
            <span className="cv__header-title">Offer Comparison</span>
            <span className="cv__header-count">· 3 approvals</span>
          </div>
          <span className="cv__expiry-badge">⚠ 2 expiring soon</span>
        </motion.div>

        {/* Active Deal selector */}
        <motion.div variants={staggerItem} className="cv__deal-selector">
          <span className="cv__deal-label">Active Deal</span>
          <span className="cv__deal-desc">
            Series A bridge — product launch and go-to-market spend —
            $250,000 · Offers Received
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="hsl(210 8% 55%)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>

        {/* Table */}
        <motion.table variants={staggerItem} className="cv__table">
          <colgroup>
            <col className="cv__col-label" />
            <col className="cv__col-highlight" />
            <col />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th className="cv__th" />
              {LENDER_HEADERS.map((lender) => (
                <th key={lender.name} className="cv__th cv__th--lender">
                  <span className="cv__lender-name">
                    {lender.name}
                    {lender.star && (
                      <span className="cv__star"> ★</span>
                    )}
                  </span>
                  <span className="cv__lender-actions">
                    <span className={`cv__status ${lender.statusClass}`}>
                      {lender.status}
                    </span>
                    {lender.editBtn && (
                      <button className="cv__edit-btn">
                        <EditIcon />
                      </button>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Deal Rank */}
            <tr className="cv__rank-row">
              <td className="cv__rank-label">DEAL RANK</td>
              {DEAL_RANKS.map((rank, i) => (
                <td
                  key={i}
                  className={`cv__rank-cell${rank.placeholder ? " cv__rank-cell--placeholder" : ""}`}
                >
                  {rank.placeholder ? (
                    "—"
                  ) : (
                    <>
                      <span className="cv__rank-value">{rank.value}</span>
                      <div className="cv__rank-bar">
                        <div
                          className="cv__rank-fill"
                          style={{ width: rank.width, background: rank.color }}
                        />
                      </div>
                    </>
                  )}
                </td>
              ))}
            </tr>

            {/* Terms group */}
            <tr>
              <td colSpan={4} className="cv__group-label">Terms</td>
            </tr>
            {TERMS_ROWS.map(([label, a, bMain, bDelta, c]) => (
              <DataRow key={label} label={label} a={a} bMain={bMain} bDelta={bDelta} c={c} />
            ))}

            {/* Economics group */}
            <tr>
              <td colSpan={4} className="cv__group-label">Economics</td>
            </tr>
            {ECONOMICS_ROWS.map(([label, a, bMain, bDelta, c]) => (
              <DataRow key={label} label={label} a={a} bMain={bMain} bDelta={bDelta} c={c} />
            ))}

            {/* Timing group */}
            <tr>
              <td colSpan={4} className="cv__group-label">Timing</td>
            </tr>
            <tr className="cv__data-row">
              <td className="cv__label-cell">Funding Speed</td>
              <td className="cv__value-cell cv__value-cell--highlight">
                3d est <span className="cv__note">( +1d est)</span>
              </td>
              <td className="cv__value-cell cv__value-cell--highlight">2d est</td>
              <td className="cv__value-cell cv__value-cell--placeholder">—</td>
            </tr>
            <tr className="cv__data-row">
              <td className="cv__label-cell">Expiry Date</td>
              <td className="cv__value-cell cv__value-cell--highlight">
                Apr 11 <span className="cv__note">(Dec 26)</span>
              </td>
              <td className="cv__value-cell">
                Apr 9 <span className="cv__note">(Dec 24)</span>
              </td>
              <td className="cv__value-cell cv__value-cell--placeholder">—</td>
            </tr>
          </tbody>
        </motion.table>
      </motion.div>
    </div>
  );
}
