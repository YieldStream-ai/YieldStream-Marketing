"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../constants";
import "./styles.scss";

const ALREADY_SUBMITTED = [
  {
    name: "Capital Plus Financial",
    badge: "Approved",
    badgeClass: "smv__badge--approved",
    sub: "$136,384",
  },
  {
    name: "Greenline Capital",
    badge: "In Review",
    badgeClass: "smv__badge--review",
    sub: "Apr 3",
  },
  {
    name: "Pinnacle Business Capital",
    badge: "Sent",
    badgeClass: "smv__badge--sent",
    sub: "Mar 29",
  },
];

const AVAILABLE_LENDERS = [
  { name: "Velocity Funding Group", score: "94", scoreClass: "smv__lender-score--high", sub: "$4,200" },
  { name: "Merchant M. Solutions", score: "78", scoreClass: "smv__lender-score--mid", sub: "$3,150" },
  { name: "Fox Capital Group", score: "52", scoreClass: "smv__lender-score--low", sub: "$1,800" },
];

export default function SubmissionVisual() {
  return (
    <div className="smv">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="smv__card"
      >
        {/* Header */}
        <motion.div variants={staggerItem} className="smv__header">
          <p className="smv__title">Submit to Additional Lenders</p>
          <button className="smv__close-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </motion.div>

        {/* Already Submitted */}
        <motion.p variants={staggerItem} className="smv__section-label">
          Already Submitted
        </motion.p>
        <motion.div variants={staggerItem} className="smv__grid">
          {ALREADY_SUBMITTED.map(({ name, badge, badgeClass, sub }) => (
            <div key={name} className="smv__lender-card smv__lender-card--submitted">
              <span className="smv__lender-name">{name}</span>
              <span className={`smv__badge ${badgeClass}`}>{badge}</span>
              <span className="smv__lender-sub">{sub}</span>
            </div>
          ))}
        </motion.div>

        {/* Available Lenders */}
        <motion.p variants={staggerItem} className="smv__section-label">
          Available Lenders
        </motion.p>
        <motion.div variants={staggerItem} className="smv__grid">
          {AVAILABLE_LENDERS.map(({ name, score, scoreClass, sub }) => (
            <div key={name} className="smv__lender-card smv__lender-card--available">
              <span className={`smv__lender-score ${scoreClass}`}>{score}</span>
              <input
                type="checkbox"
                readOnly
                className="smv__lender-check"
              />
              <span className="smv__lender-name">{name}</span>
              <span className="smv__lender-sub">{sub}</span>
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div variants={staggerItem} className="smv__footer">
          <p className="smv__footer-text">&nbsp;</p>
          <button disabled className="smv__generate-btn">
            Generate Packages (0)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
