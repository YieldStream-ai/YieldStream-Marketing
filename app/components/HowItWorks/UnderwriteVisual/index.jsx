"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../constants";
import "./styles.scss";

export default function UnderwriteVisual() {
  return (
    <div className="uwv">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="uwv__card"
      >
        <motion.p variants={staggerItem} className="uwv__section-label">
          Cash Flow
        </motion.p>

        {/* Sparkline metric cards */}
        <motion.div variants={staggerItem} className="uwv__metrics-grid">
          {/* Monthly Revenue */}
          <div className="uwv__metric-card">
            <div className="uwv__metric-header">
              <span className="uwv__metric-label">Monthly Revenue (90d avg)</span>
              <span className="uwv__metric-change uwv__metric-change--positive">
                +13%
              </span>
            </div>
            <p className="uwv__metric-value">$175,000</p>
            <svg
              viewBox="0 0 120 48"
              className="uwv__sparkline"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(142 60% 45%)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="hsl(142 60% 45%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 42 C15 40 25 36 35 32 C50 27 60 24 75 19 C90 14 105 9 120 4"
                fill="none"
                stroke="hsl(142 60% 38%)"
                strokeWidth="2"
              />
              <path
                d="M0 42 C15 40 25 36 35 32 C50 27 60 24 75 19 C90 14 105 9 120 4 L120 48 L0 48 Z"
                fill="url(#g1)"
              />
            </svg>
          </div>

          {/* Avg Daily Balance */}
          <div className="uwv__metric-card">
            <div className="uwv__metric-header">
              <span className="uwv__metric-label">Avg Daily Balance</span>
              <span className="uwv__metric-note">28% of rev</span>
            </div>
            <p className="uwv__metric-value">$49,000</p>
            <svg
              viewBox="0 0 120 48"
              className="uwv__sparkline"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(142 60% 45%)" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="hsl(142 60% 45%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 38 C20 36 40 32 60 28 C80 24 100 20 120 16"
                fill="none"
                stroke="hsl(142 60% 38%)"
                strokeWidth="2"
              />
              <path
                d="M0 38 C20 36 40 32 60 28 C80 24 100 20 120 16 L120 48 L0 48 Z"
                fill="url(#g2)"
              />
            </svg>
          </div>
        </motion.div>

        {/* Metric rows */}
        <motion.div variants={staggerItem} className="uwv__rows">
          {[
            ["Deposit velocity", "27 deposits", "per statement period"],
            ["Revenue trend", "Growing (+13%)", "Consecutive months up"],
            ["NSF count", "0", "clean"],
            ["Debt burden ratio", "1.2%", "against active obligations"],
          ].map(([label, val, note], i, arr) => (
            <div
              key={label}
              className={`uwv__row${i < arr.length - 1 ? " uwv__row--bordered" : ""}`}
            >
              <span className="uwv__row-label">{label}</span>
              <span className="uwv__row-value">{val}</span>
              <span className="uwv__row-note">{note}</span>
            </div>
          ))}
        </motion.div>

        {/* Underwriting Signals */}
        <motion.p variants={staggerItem} className="uwv__section-label">
          Underwriting Signals
        </motion.p>
        <motion.div variants={staggerItem} className="uwv__signals-grid">
          {[
            [
              "DSCR 7.46 — strong cash cycle coverage",
              "Above 1.5x threshold, comfortable margin for daily obligations",
            ],
            [
              "ADB is 28% of monthly revenue — healthy cushion",
              "Above 15% threshold for most lender profiles",
            ],
          ].map(([title, desc]) => (
            <div key={title} className="uwv__signal">
              <span className="uwv__signal-dot" />
              <div>
                <p className="uwv__signal-title">{title}</p>
                <p className="uwv__signal-desc">{desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
