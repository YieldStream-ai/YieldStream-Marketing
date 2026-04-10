"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useReveal } from "./components/useReveal";
import CTABanner from "./components/CTABanner";
import BentoShowcase from "./components/BentoShowcase";
import HomeHero from "./components/HomeHero/index";
import {
  Zap,
  Cpu,
  ChevronRight,
  Link2,
  BrainCircuit,
  GitCompareArrows,
  Send,
  BarChart3,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import "./page.scss";

function CtaTiltImage() {
  const ref = useRef(null);
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);
  const springX = useSpring(rawX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 150, damping: 20 });
  const rotateY = useTransform(springX, [0, 1], [-12, 12]);
  const rotateX = useTransform(springY, [0, 1], [8, -8]);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width);
    rawY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    rawX.set(0.5);
    rawY.set(0.5);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="home__cta-image-tilt"
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
      >
        <Image
          src="/images/opportunities-cta.png"
          alt="YieldStream opportunities"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto" }}
        />
        <div className="home__cta-image-fade" />
      </motion.div>
    </div>
  );
}

const STEPS = [
  {
    id: "generate-link",
    num: "01",
    icon: Link2,
    tab: "Generate Link",
    title: "Generate Secure Link",
    desc: "Create a unique, encrypted upload link for your merchant. Documents stay secure and organized from the start.",
    cta: { text: "Try it free", href: "/pricing" },
  },
  {
    id: "ai-parse",
    num: "02",
    icon: BrainCircuit,
    tab: "AI Underwrite",
    title: "AI Parse & Underwrite",
    desc: "Bank statements are automatically extracted and analyzed. 20+ risk signals scored — revenue trends, NSFs, stacking, DSCR — in under 120 seconds.",
    cta: { text: "See underwriting", href: "/underwriting" },
  },
  {
    id: "lender-match",
    num: "03",
    icon: GitCompareArrows,
    tab: "Lender Match",
    title: "Lender Routing",
    desc: "Our three-layer scoring engine matches the deal to the best-fit lenders based on global data, your relationships, and buybox criteria.",
    cta: { text: "Learn about matching", href: "/lender-marketplace" },
  },
  {
    id: "submit",
    num: "04",
    icon: Send,
    tab: "Submit",
    title: "One-Click Submit",
    desc: "Submit a professionally packaged PDF to matched lenders with a single click. No manual formatting, no copy-paste.",
    cta: { text: "Get started", href: "/pricing" },
  },
  {
    id: "compare",
    num: "05",
    icon: BarChart3,
    tab: "Compare & Close",
    title: "Compare & Close",
    desc: "Review competing offers side-by-side, track lender responses in real time, and close the deal — all from one dashboard.",
    cta: { text: "Book a demo", href: "/contact" },
  },
];

function StepVisual({ step }) {
  switch (step) {
    case 0:
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "420px",
              background: "white",
              borderRadius: "12px",
              border: "1px solid hsl(210 15% 90%)",
              padding: "2rem 1.75rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              fontFamily: "inherit",
              transform: "scale(0.9)",
              transformOrigin: "center",
            }}
          >
            <h2
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "hsl(210 10% 15%)",
                textAlign: "center",
                margin: "0 0 0.375rem",
              }}
            >
              Secure Document Upload
            </h2>
            <p
              style={{
                fontSize: "0.8rem",
                color: "hsl(210 8% 45%)",
                textAlign: "center",
                lineHeight: 1.5,
                margin: "0 0 1.25rem",
              }}
            >
              Your account representative has requested documents. Upload them
              securely below.
            </p>

            {/* Dropzone */}
            <div
              className="home__sv-dropzone"
              style={{
                border: "2px dashed hsl(210 15% 85%)",
                borderRadius: "10px",
                padding: "1.5rem 1rem",
                textAlign: "center",
                marginBottom: "0.875rem",
                cursor: "pointer",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="hsl(210 8% 65%)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ display: "block", margin: "0 auto 0.5rem" }}
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "hsl(210 10% 20%)",
                  margin: "0 0 0.25rem",
                }}
              >
                Upload Your Documents
              </p>
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "hsl(210 8% 55%)",
                  margin: 0,
                }}
              >
                Bank statements, ID, signed application — drop everything here
              </p>
            </div>

            {/* Staged file */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.375rem",
                marginBottom: "0.875rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  padding: "0.625rem 0.75rem",
                  border: "1px solid hsl(142 50% 80%)",
                  borderRadius: "8px",
                  background: "hsl(142 60% 97%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="hsl(186 94% 27%)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      color: "hsl(210 10% 20%)",
                      margin: 0,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    bank_statements_june.pdf
                  </p>
                  <p
                    style={{
                      fontSize: "0.65rem",
                      color: "hsl(210 8% 55%)",
                      margin: 0,
                    }}
                  >
                    6 pages
                  </p>
                </div>
                <div
                  style={{
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: "0.125rem",
                  }}
                >
                  <select
                    disabled
                    style={{
                      height: "26px",
                      padding: "0 0.5rem",
                      border: "1px solid hsl(210 15% 85%)",
                      borderRadius: "6px",
                      fontSize: "0.68rem",
                      color: "hsl(210 10% 20%)",
                      background: "white",
                      opacity: 0.5,
                      cursor: "not-allowed",
                    }}
                  >
                    <option>Bank Statement</option>
                  </select>
                  <span
                    style={{
                      fontSize: "0.58rem",
                      color: "hsl(210 8% 62%)",
                      fontStyle: "italic",
                    }}
                  >
                    Auto-detected
                  </span>
                </div>
                <div
                  style={{
                    flexShrink: 0,
                    width: "26px",
                    height: "26px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="hsl(142 71% 40%)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Submit button */}
            <button
              disabled
              style={{
                width: "100%",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                border: "none",
                borderRadius: "8px",
                fontSize: "0.8rem",
                fontWeight: 500,
                color: "white",
                background: "hsl(186 94% 27%)",
                opacity: 0.5,
                cursor: "not-allowed",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0 }}
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              Submit Documents
            </button>

            {/* Security note */}
            <p
              style={{
                fontSize: "0.65rem",
                color: "hsl(210 8% 60%)",
                textAlign: "center",
                margin: "0.875rem 0 0",
                lineHeight: 1.5,
              }}
            >
              Files are encrypted in transit and stored securely. This link is
              single-use and expires in 48 hours.
            </p>
          </div>
        </div>
      );
    case 1:
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "820px",
              background: "white",
              borderRadius: "12px",
              border: "1px solid hsl(210 15% 90%)",
              padding: "1.75rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              fontFamily: "inherit",
              transform: "scale(0.82)",
              transformOrigin: "center",
            }}
          >
            {/* Cash Flow label */}
            <p
              style={{
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "hsl(210 8% 55%)",
                margin: "0 0 0.75rem",
                textTransform: "uppercase",
              }}
            >
              Cash Flow
            </p>

            {/* 2 sparkline metric cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              {/* Monthly Revenue */}
              <div
                style={{
                  border: "1px solid hsl(210 15% 90%)",
                  borderRadius: "8px",
                  padding: "0.75rem 0.875rem 0",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.25rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                      color: "hsl(210 8% 55%)",
                      textTransform: "uppercase",
                    }}
                  >
                    Monthly Revenue (90d avg)
                  </span>
                  <span
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 600,
                      color: "hsl(142 60% 40%)",
                    }}
                  >
                    +13%
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "hsl(210 10% 15%)",
                    margin: "0 0 0.5rem",
                  }}
                >
                  $175,000
                </p>
                <svg
                  viewBox="0 0 120 48"
                  style={{ width: "100%", height: "44px", display: "block" }}
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="hsl(142 60% 45%)"
                        stopOpacity="0.35"
                      />
                      <stop
                        offset="100%"
                        stopColor="hsl(142 60% 45%)"
                        stopOpacity="0"
                      />
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
              <div
                style={{
                  border: "1px solid hsl(210 15% 90%)",
                  borderRadius: "8px",
                  padding: "0.75rem 0.875rem 0",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.25rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                      color: "hsl(210 8% 55%)",
                      textTransform: "uppercase",
                    }}
                  >
                    Avg Daily Balance
                  </span>
                  <span
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      color: "hsl(210 8% 55%)",
                    }}
                  >
                    28% of rev
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "hsl(210 10% 15%)",
                    margin: "0 0 0.5rem",
                  }}
                >
                  $49,000
                </p>
                <svg
                  viewBox="0 0 120 48"
                  style={{ width: "100%", height: "44px", display: "block" }}
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="hsl(142 60% 45%)"
                        stopOpacity="0.35"
                      />
                      <stop
                        offset="100%"
                        stopColor="hsl(142 60% 45%)"
                        stopOpacity="0"
                      />
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
            </div>

            {/* Metric rows */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
                marginBottom: "1.25rem",
              }}
            >
              {[
                ["Deposit velocity", "27 deposits", "per statement period"],
                ["Revenue trend", "Growing (+13%)", "Consecutive months up"],
                ["NSF count", "0", "clean"],
                ["Debt burden ratio", "1.2%", "against active obligations"],
              ].map(([label, val, note], i, arr) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.4rem 0",
                    borderBottom:
                      i < arr.length - 1
                        ? "1px solid hsl(210 15% 95%)"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "hsl(186 30% 45%)",
                      width: "140px",
                      flexShrink: 0,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "hsl(210 10% 15%)",
                      flex: 1,
                    }}
                  >
                    {val}
                  </span>
                  <span
                    style={{ fontSize: "0.7rem", color: "hsl(210 8% 60%)" }}
                  >
                    {note}
                  </span>
                </div>
              ))}
            </div>

            {/* Underwriting Signals */}
            <p
              style={{
                fontSize: "0.6rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                color: "hsl(210 8% 55%)",
                margin: "0 0 0.75rem",
                textTransform: "uppercase",
              }}
            >
              Underwriting Signals
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.5rem 2rem",
              }}
            >
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
                <div
                  key={title}
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "hsl(142 60% 45%)",
                      flexShrink: 0,
                      marginTop: "3px",
                      display: "inline-block",
                    }}
                  />
                  <div>
                    <p
                      style={{
                        fontSize: "0.775rem",
                        fontWeight: 600,
                        color: "hsl(210 10% 15%)",
                        margin: "0 0 0.2rem",
                      }}
                    >
                      {title}
                    </p>
                    <p
                      style={{
                        fontSize: "0.68rem",
                        color: "hsl(210 8% 55%)",
                        margin: 0,
                      }}
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="home__sv home__sv--match">
          {[
            { name: "Velocity Capital", score: 98, tier: "Tier 1" },
            { name: "Summit Funding", score: 94, tier: "Tier 1" },
            { name: "BlueHarbor Finance", score: 87, tier: "Tier 2" },
          ].map((l, i) => (
            <div
              key={l.name}
              className={`home__sv-lender ${i === 0 ? "home__sv-lender--top" : ""}`}
            >
              <div className="home__sv-lender-info">
                <div className="home__sv-lender-name">{l.name}</div>
                <div className="home__sv-lender-tier">{l.tier}</div>
              </div>
              <div
                className={`home__sv-score ${i === 0 ? "home__sv-score--top" : ""}`}
              >
                {l.score}%
              </div>
            </div>
          ))}
        </div>
      );
    case 3:
      return (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "1rem 2rem 3rem",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "520px",
              background: "white",
              borderRadius: "12px",
              border: "1px solid hsl(210 15% 90%)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
              padding: "1.25rem 1.5rem",
              fontFamily: "inherit",
              transform: "scale(0.9)",
              transformOrigin: "center",
            }}
          >
            {/* Header row with X */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "hsl(210 10% 15%)",
                  margin: 0,
                }}
              >
                Submit to Additional Lenders
              </p>
              <button
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "hsl(210 8% 65%)",
                  padding: "2px",
                  flexShrink: 0,
                }}
              >
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
            </div>
            <p
              style={{
                fontSize: "0.7rem",
                color: "hsl(210 8% 50%)",
                margin: "0 0 1rem",
              }}
            >
              Angela Martinez · 3 lenders already submitted · 1 approval
              received — select additional lenders below
            </p>

            {/* Already Submitted */}
            <p
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "hsl(210 8% 55%)",
                margin: "0 0 0.375rem",
              }}
            >
              Already Submitted
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "6px",
                marginBottom: "1rem",
              }}
            >
              {[
                {
                  name: "Capital Plus Financial",
                  badge: "Approved",
                  badgeBg: "rgba(29,158,117,0.1)",
                  badgeColor: "#1d9e75",
                  sub: "$136,384",
                },
                {
                  name: "Greenline Capital",
                  badge: "In Review",
                  badgeBg: "rgba(186,117,23,0.1)",
                  badgeColor: "#ba7517",
                  sub: "Apr 3",
                },
                {
                  name: "Pinnacle Business Capital",
                  badge: "Sent",
                  badgeBg: "rgba(4,121,135,0.08)",
                  badgeColor: "rgba(4,121,135,0.75)",
                  sub: "Mar 29",
                },
              ].map(({ name, badge, badgeBg, badgeColor, sub }) => (
                <div
                  key={name}
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                    padding: "12px 8px",
                    borderRadius: "8px",
                    textAlign: "center",
                    minHeight: "72px",
                    border: "1px solid hsl(210 15% 88%)",
                    opacity: 0.55,
                    cursor: "default",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "hsl(210 10% 25%)",
                      lineHeight: 1.2,
                    }}
                  >
                    {name}
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "9px",
                      fontWeight: 600,
                      padding: "1px 6px",
                      borderRadius: "8px",
                      background: badgeBg,
                      color: badgeColor,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {badge}
                  </span>
                  <span style={{ fontSize: "9px", color: "hsl(210 8% 55%)" }}>
                    {sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Available Lenders */}
            <p
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "hsl(210 8% 55%)",
                margin: "0 0 0.375rem",
              }}
            >
              Available Lenders
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "6px",
                marginBottom: "1rem",
              }}
            >
              {[
                {
                  name: "Velocity Funding Group",
                  score: "94",
                  scoreColor: "hsl(186 94% 27%)",
                  sub: "$4,200",
                },
                {
                  name: "Summit Merchant Solutions",
                  score: "78",
                  scoreColor: "#047987",
                  sub: "$3,150",
                },
                {
                  name: "Fox Capital Group",
                  score: "52",
                  scoreColor: "hsl(210 8% 60%)",
                  sub: "$1,800",
                },
              ].map(({ name, score, scoreColor, sub }) => (
                <div
                  key={name}
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                    padding: "12px 8px",
                    borderRadius: "8px",
                    textAlign: "center",
                    minHeight: "72px",
                    border: "1px solid hsl(210 15% 88%)",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      top: "4px",
                      right: "6px",
                      fontSize: "9px",
                      fontWeight: 700,
                      color: scoreColor,
                    }}
                  >
                    {score}
                  </span>
                  <input
                    type="checkbox"
                    readOnly
                    style={{
                      position: "absolute",
                      top: "6px",
                      left: "6px",
                      width: "13px",
                      height: "13px",
                      accentColor: "#047987",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "hsl(210 10% 25%)",
                      lineHeight: 1.2,
                    }}
                  >
                    {name}
                  </span>
                  <span style={{ fontSize: "9px", color: "hsl(210 8% 55%)" }}>
                    {sub}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "10px",
                borderTop: "1px solid rgba(15,23,42,0.06)",
              }}
            >
              <p
                style={{
                  fontSize: "11px",
                  color: "hsl(210 8% 55%)",
                  margin: 0,
                }}
              >
                &nbsp;
              </p>
              <button
                disabled
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  height: "30px",
                  padding: "0 14px",
                  borderRadius: "6px",
                  border: "none",
                  background: "#047987",
                  color: "white",
                  fontSize: "11px",
                  fontWeight: 600,
                  cursor: "not-allowed",
                  opacity: 0.5,
                }}
              >
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
            </div>
          </div>
        </div>
      );
    case 4:
      return (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "1.5rem",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "960px",
              background: "white",
              borderRadius: "12px",
              border: "1px solid hsl(210 15% 90%)",
              padding: "1.5rem 1.75rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              fontFamily: "inherit",
              transform: "scale(0.92)",
              transformOrigin: "top center",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0.625rem",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "baseline", gap: "6px" }}
              >
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    color: "hsl(210 8% 55%)",
                  }}
                >
                  Offer Comparison
                </span>
                <span
                  style={{
                    fontSize: "10px",
                    color: "hsl(210 8% 55%)",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                  }}
                >
                  · 3 approvals
                </span>
              </div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "10px",
                  fontWeight: 600,
                  padding: "2px 8px",
                  borderRadius: "2px",
                  background: "rgba(186,117,23,0.1)",
                  color: "#ba7517",
                }}
              >
                ⚠ 2 expiring soon
              </span>
            </div>

            {/* Active Deal selector */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.5rem 0.75rem",
                background: "hsl(210 20% 98%)",
                border: "1px solid hsl(210 15% 92%)",
                borderRadius: "6px",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  color: "hsl(210 8% 55%)",
                  whiteSpace: "nowrap",
                }}
              >
                Active Deal
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "hsl(210 10% 25%)",
                  fontFamily: "monospace",
                  flex: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  minWidth: 0,
                }}
              >
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
            </div>

            {/* Table */}
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "14px",
              }}
            >
              <colgroup>
                <col style={{ width: "130px" }} />
                <col style={{ background: "hsl(210 20% 98%)" }} />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "6px 8px",
                      borderBottom: "0.5px solid hsl(210 15% 88%)",
                    }}
                  ></th>
                  {/* Greenline Capital (winner) */}
                  <th
                    style={{
                      padding: "6px 8px",
                      borderBottom: "0.5px solid hsl(210 15% 88%)",
                      textAlign: "center",
                      verticalAlign: "bottom",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "hsl(210 10% 12%)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Greenline Capital{" "}
                      <span style={{ color: "#047987" }}>★</span>
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        marginTop: "4px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "9px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.07em",
                          color: "#1d9e75",
                        }}
                      >
                        Approved
                      </span>
                      <button
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "20px",
                          height: "20px",
                          background: "none",
                          border: "none",
                          borderRadius: "2px",
                          color: "hsl(210 8% 72%)",
                          cursor: "pointer",
                          padding: 0,
                        }}
                      >
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
                      </button>
                    </span>
                  </th>
                  {/* BlueVine Advance */}
                  <th
                    style={{
                      padding: "6px 8px",
                      borderBottom: "0.5px solid hsl(210 15% 88%)",
                      textAlign: "center",
                      verticalAlign: "bottom",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "hsl(210 10% 12%)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      BlueVine Advance
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        marginTop: "4px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "9px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.07em",
                          color: "#1d9e75",
                        }}
                      >
                        Approved
                      </span>
                      <button
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "20px",
                          height: "20px",
                          background: "none",
                          border: "none",
                          borderRadius: "2px",
                          color: "hsl(210 8% 72%)",
                          cursor: "pointer",
                          padding: 0,
                        }}
                      >
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
                      </button>
                    </span>
                  </th>
                  {/* National Funding Corp */}
                  <th
                    style={{
                      padding: "6px 8px",
                      borderBottom: "0.5px solid hsl(210 15% 88%)",
                      textAlign: "center",
                      verticalAlign: "bottom",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontSize: "13px",
                        fontWeight: 600,
                        color: "hsl(210 10% 12%)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      National Funding
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "6px",
                        marginTop: "4px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "9px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.07em",
                          color: "rgba(4,121,135,0.65)",
                        }}
                      >
                        Submitted
                      </span>
                      <button
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "20px",
                          height: "20px",
                          background: "none",
                          border: "none",
                          borderRadius: "2px",
                          color: "hsl(210 8% 72%)",
                          cursor: "pointer",
                          padding: 0,
                        }}
                      >
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
                      </button>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Deal Rank */}
                <tr style={{ background: "#f8fafb" }}>
                  <td
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      color: "hsl(210 8% 55%)",
                      padding: "8px 8px",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    DEAL RANK
                  </td>
                  <td
                    style={{
                      padding: "8px 10px",
                      textAlign: "center",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "hsl(210 10% 30%)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      7/10
                    </span>
                    <div
                      style={{
                        width: "80%",
                        height: "3px",
                        background: "hsl(210 15% 92%)",
                        borderRadius: "2px",
                        margin: "4px auto 0",
                      }}
                    >
                      <div
                        style={{
                          width: "70%",
                          height: "100%",
                          background: "#ba7517",
                          borderRadius: "2px",
                        }}
                      />
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "8px 10px",
                      textAlign: "center",
                      borderBottom: "1px solid #e5e7eb",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "hsl(210 10% 30%)",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      3/10
                    </span>
                    <div
                      style={{
                        width: "80%",
                        height: "3px",
                        background: "hsl(210 15% 92%)",
                        borderRadius: "2px",
                        margin: "4px auto 0",
                      }}
                    >
                      <div
                        style={{
                          width: "30%",
                          height: "100%",
                          background: "#d85a30",
                          borderRadius: "2px",
                        }}
                      />
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "8px 10px",
                      textAlign: "center",
                      borderBottom: "1px solid #e5e7eb",
                      color: "hsl(210 8% 78%)",
                    }}
                  >
                    —
                  </td>
                </tr>

                {/* Terms group */}
                <tr>
                  <td
                    colSpan={4}
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      color: "hsl(210 8% 55%)",
                      padding: "10px 8px 4px",
                    }}
                  >
                    Terms
                  </td>
                </tr>
                {[
                  ["Advance Amount", "$250,000", "$220,000", "−$30k", "—"],
                  ["Factor Rate", "1.25x", "1.29x", "+0.04x", "—"],
                  ["Term", "240d", "200d", "−40d", "—"],
                  ["Payment Freq.", "Daily", "Weekly", null, "—"],
                ].map(([label, a, bMain, bDelta, c]) => (
                  <tr key={label}>
                    <td
                      style={{
                        fontSize: "12px",
                        color: "hsl(210 8% 50%)",
                        padding: "5px 8px",
                        borderBottom: "0.5px solid rgba(15,23,42,0.04)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {label}
                    </td>
                    <td
                      style={{
                        fontSize: "13px",
                        fontVariantNumeric: "tabular-nums",
                        padding: "5px 10px",
                        textAlign: "center",
                        borderBottom: "0.5px solid rgba(15,23,42,0.04)",
                        background: "rgba(13,148,136,0.06)",
                      }}
                    >
                      {a}
                    </td>
                    <td
                      style={{
                        fontSize: "13px",
                        fontVariantNumeric: "tabular-nums",
                        padding: "5px 10px",
                        textAlign: "center",
                        borderBottom: "0.5px solid rgba(15,23,42,0.04)",
                      }}
                    >
                      {bMain}
                      {bDelta && (
                        <span
                          style={{
                            fontSize: "9px",
                            color: "hsl(210 8% 70%)",
                            marginLeft: "3px",
                            fontWeight: 400,
                          }}
                        >
                          {bDelta}
                        </span>
                      )}
                    </td>
                    <td
                      style={{
                        padding: "5px 10px",
                        textAlign: "center",
                        borderBottom: "0.5px solid rgba(15,23,42,0.04)",
                        color: "hsl(210 8% 78%)",
                      }}
                    >
                      {c}
                    </td>
                  </tr>
                ))}

                {/* Economics group */}
                <tr>
                  <td
                    colSpan={4}
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      color: "hsl(210 8% 55%)",
                      padding: "10px 8px 4px",
                    }}
                  >
                    Economics
                  </td>
                </tr>
                {[
                  ["Daily Remittance", "$1,302", "$1,419", "+$117", "—"],
                  ["Total Payback", "$312,500", "$283,800", null, "—"],
                  ["Net Funding", "$237,500", "$209,000", "−$28k", "—"],
                  ["Commission", "$15,000", "$13,200", "−$1.8k", "—"],
                  ["Buy Rate", "0.94", "0.94", null, "—"],
                ].map(([label, a, bMain, bDelta, c]) => (
                  <tr key={label}>
                    <td
                      style={{
                        fontSize: "12px",
                        color: "hsl(210 8% 50%)",
                        padding: "5px 8px",
                        borderBottom: "0.5px solid rgba(15,23,42,0.04)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {label}
                    </td>
                    <td
                      style={{
                        fontSize: "13px",
                        fontVariantNumeric: "tabular-nums",
                        padding: "5px 10px",
                        textAlign: "center",
                        borderBottom: "0.5px solid rgba(15,23,42,0.04)",
                        background: "rgba(13,148,136,0.06)",
                      }}
                    >
                      {a}
                    </td>
                    <td
                      style={{
                        fontSize: "13px",
                        fontVariantNumeric: "tabular-nums",
                        padding: "5px 10px",
                        textAlign: "center",
                        borderBottom: "0.5px solid rgba(15,23,42,0.04)",
                      }}
                    >
                      {bMain}
                      {bDelta && (
                        <span
                          style={{
                            fontSize: "9px",
                            color: "hsl(210 8% 70%)",
                            marginLeft: "3px",
                            fontWeight: 400,
                          }}
                        >
                          {bDelta}
                        </span>
                      )}
                    </td>
                    <td
                      style={{
                        padding: "5px 10px",
                        textAlign: "center",
                        borderBottom: "0.5px solid rgba(15,23,42,0.04)",
                        color: "hsl(210 8% 78%)",
                      }}
                    >
                      {c}
                    </td>
                  </tr>
                ))}

                {/* Timing group */}
                <tr>
                  <td
                    colSpan={4}
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      color: "hsl(210 8% 55%)",
                      padding: "10px 8px 4px",
                    }}
                  >
                    Timing
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontSize: "12px",
                      color: "hsl(210 8% 50%)",
                      padding: "5px 8px",
                      borderBottom: "0.5px solid rgba(15,23,42,0.04)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Funding Speed
                  </td>
                  <td
                    style={{
                      fontSize: "13px",
                      padding: "5px 10px",
                      textAlign: "center",
                      borderBottom: "0.5px solid rgba(15,23,42,0.04)",
                      background: "rgba(13,148,136,0.06)",
                    }}
                  >
                    3d est{" "}
                    <span
                      style={{ fontSize: "10px", color: "hsl(210 8% 55%)" }}
                    >
                      ( +1d est)
                    </span>
                  </td>
                  <td
                    style={{
                      fontSize: "13px",
                      padding: "5px 10px",
                      textAlign: "center",
                      borderBottom: "0.5px solid rgba(15,23,42,0.04)",
                      background: "rgba(13,148,136,0.06)",
                    }}
                  >
                    2d est
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      textAlign: "center",
                      borderBottom: "0.5px solid rgba(15,23,42,0.04)",
                      color: "hsl(210 8% 78%)",
                    }}
                  >
                    —
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontSize: "12px",
                      color: "hsl(210 8% 50%)",
                      padding: "5px 8px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Expiry Date
                  </td>
                  <td
                    style={{
                      fontSize: "13px",
                      padding: "5px 10px",
                      textAlign: "center",
                      background: "rgba(13,148,136,0.06)",
                    }}
                  >
                    Apr 11{" "}
                    <span
                      style={{ fontSize: "10px", color: "hsl(210 8% 55%)" }}
                    >
                      (Dec 26)
                    </span>
                  </td>
                  <td
                    style={{
                      fontSize: "13px",
                      padding: "5px 10px",
                      textAlign: "center",
                    }}
                  >
                    Apr 9{" "}
                    <span
                      style={{ fontSize: "10px", color: "hsl(210 8% 55%)" }}
                    >
                      (Dec 24)
                    </span>
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      textAlign: "center",
                      color: "hsl(210 8% 78%)",
                    }}
                  >
                    —
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function Home() {
  useReveal();
  const [activeStep, setActiveStep] = useState(0);
  const directionRef = useRef(1);
  const tabsRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback((index) => {
    const tabs = tabsRef.current;
    if (!tabs) return;
    const tab = tabs.children[index + 1]; // +1 to skip the indicator div
    if (!tab) return;
    setIndicator({
      left: tab.offsetLeft,
      width: tab.offsetWidth,
    });
  }, []);

  useEffect(() => {
    updateIndicator(activeStep);
  }, [activeStep, updateIndicator]);

  useEffect(() => {
    const onResize = () => updateIndicator(activeStep);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeStep, updateIndicator]);

  return (
    <>
      {/* ===== HERO ===== */}
      <HomeHero />

      {/* ===== THE PROBLEM ===== */}
      <section className="home__problem">
        <div className="container">
          <div className="home__problem-layout">
            <div className="home__problem-panel home__problem-panel--without">
              <p className="home__problem-panel-label">WITHOUT YIELDSTREAM</p>
              <h3 className="home__problem-panel-title">Blind</h3>
              <p className="home__problem-panel-body">
                Manage expectations with experience alone. Find out the real
                picture after you've already invested the time.
              </p>
            </div>
            <div className="home__problem-center">
              <p className="home__problem-label">THE PROBLEM</p>
              <h2 className="home__problem-headline">
                Bad expectations kill deals before they start.
              </h2>
              <p className="home__problem-body">
                You know the call — the merchant wants $500K, their bank
                statements tell a different story, and by the time offers come
                back, they've already anchored on a number you couldn't deliver.
                Three weeks wasted.
              </p>
            </div>
            <div className="home__problem-panel home__problem-panel--with">
              <p className="home__problem-panel-label">WITH YIELDSTREAM</p>
              <h3 className="home__problem-panel-title">Informed</h3>
              <p className="home__problem-panel-body">
                See the score, revenue profile, and lender fit within minutes of
                receiving docs — so you can steer the conversation early.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS — STEPS ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label-mono">Steps to Get Funding</div>
            <h2 className="display-lg" style={{ marginTop: 12 }}>
              How it works
            </h2>
          </div>

          <div className="home__steps-tabs reveal reveal-delay-1" ref={tabsRef}>
            <div
              className="home__steps-indicator"
              style={{ left: indicator.left, width: indicator.width }}
            />
            {STEPS.map((step, i) => (
              <button
                key={step.id}
                className={`home__steps-tab${activeStep === i ? " home__steps-tab--active" : ""}`}
                onClick={() => {
                  directionRef.current = i > activeStep ? 1 : -1;
                  setActiveStep(i);
                }}
              >
                <span className="home__steps-tab-icon">
                  <step.icon size={16} />
                </span>
                <span className="home__steps-tab-label">{step.tab}</span>
                <span className="home__steps-tab-num">{step.num}</span>
              </button>
            ))}
          </div>

          <div className="home__steps-panel reveal reveal-delay-2">
            <div className="home__steps-content">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeStep}
                  className="home__steps-text"
                  initial={{ opacity: 0, x: directionRef.current * 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: directionRef.current * -24 }}
                  transition={{ duration: 0.22, ease: "easeInOut" }}
                >
                  <span className="home__steps-num">
                    {STEPS[activeStep].num}.
                  </span>
                  <h3 className="display-md home__steps-title">
                    {STEPS[activeStep].title}
                  </h3>
                  <p className="text-md home__steps-desc">
                    {STEPS[activeStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="home__steps-visual">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeStep}
                    className="home__steps-visual-fade"
                    initial={{ opacity: 0, x: directionRef.current * 32 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: directionRef.current * -32 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <StepVisual step={activeStep} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLATFORM OUTCOMES — BENTO GRID ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label-mono">Platform</div>
            <h2 className="display-lg" style={{ marginTop: 12 }}>
              Intelligence at every stage
              <br />
              of the deal lifecycle.
            </h2>
          </div>

          <div className="home__bento-grid reveal">
            {/* Card 1 — Wide */}
            <div className="home__bento-card home__bento-card--wide">
              <div className="home__bento-card-content">
                <div className="label-mono">Extraction Precision</div>
                <h3 className="display-md home__feature-heading">
                  Upload a PDF. Get an underwrite in minutes.
                </h3>
                <p className="text-md home__feature-desc">
                  AI extracts revenue trends, NSF patterns, stacking signals,
                  and 20+ risk indicators from bank statements — with
                  audit-ready verified data.
                </p>
                <Link href="/underwriting" className="btn btn-outline btn-sm">
                  Learn about underwriting →
                </Link>
              </div>
              <div className="screenshot">
                <Image
                  src="/images/Underwriting-Intelligence.png"
                  alt="AI Bank Statement Analysis"
                  width={1400}
                  height={800}
                  priority
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="home__bento-card">
              <div className="label-mono">Market Matching</div>
              <span className="pill pill--accent">AI Lender Matching</span>
              <h3 className="display-md home__feature-heading">
                Every lender scored. Every match explained.
              </h3>
              <p className="text-md home__feature-desc">
                Three-layer scoring weighs global performance, your relationship
                history, and buybox fit — ranked by expected yield.
              </p>
              <div className="screenshot">
                <Image
                  src="/images/Lender-Edit.png"
                  alt="AI Lender Matching"
                  width={1400}
                  height={800}
                  priority
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="home__bento-card">
              <div className="label-mono">Unified Workflow</div>
              <span className="pill pill--accent">Deal Pipeline</span>
              <h3 className="display-md home__feature-heading">
                See every deal. Know where it stands.
              </h3>
              <p className="text-md home__feature-desc">
                Kanban or table view with running dollar totals per stage, stale
                deal alerts, and commission estimates.
              </p>
              <div className="screenshot">
                <Image
                  src="/images/Opportunities-Kanban.png"
                  alt="Deal Pipeline"
                  width={1400}
                  height={800}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTELLIGENCE LAYER — DARK SECTION ===== */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label-mono" style={{ color: "var(--a400)" }}>
              Intelligence Layer
            </div>
            <h2 className="display-lg home__section-header-title">
              From raw PDF to funded deal.
              <br />
              Every signal extracted. Every lender scored.
            </h2>
          </div>
          <div className="home__intelligence-grid">
            {[
              {
                num: "01",
                title: "Clarity",
                desc: "Upload bank statements. AI extracts 20+ risk signals — revenue trends, NSF patterns, stacking, DSCR — in under 120 seconds.",
              },
              {
                num: "02",
                title: "Match",
                desc: "Three-layer scoring engine ranks every lender by expected yield. Global data, your relationships, and buybox fit.",
              },
              {
                num: "03",
                title: "Funding",
                desc: "Submit to matched lenders, track responses, and close. Every outcome feeds back into the model.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} home__intelligence-step`}
              >
                <span className="mono">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="section home__stats">
        <div className="container">
          <div className="home__stats-grid reveal">
            {[
              { num: "~120s", label: "PDF to Scored Intelligence" },
              { num: "20+", label: "Risk Signals Extracted" },
              { num: "3x", label: "Faster Deal Preparation" },
              { num: "97%", label: "Extraction Accuracy" },
            ].map((s) => (
              <div key={s.label} className="home__stats-item">
                <div className="display-stat">{s.num}</div>
                <div className="label-mono">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENTO SHOWCASE ===== */}
      <BentoShowcase />

      {/* ===== UNDERWRITER'S NOTE ===== */}
      <section className="section">
        <div className="container">
          <div className="grid-feature reveal">
            <div>
              <div className="label-mono home__feature-label">
                Transparent AI
              </div>
              <h2 className="display-lg">
                Every recommendation
                <br />
                comes with a reason.
              </h2>
              <p className="text-lg" style={{ marginTop: 12 }}>
                YieldStream generates a human-readable Underwriter&apos;s Note
                for every match — explaining the structural logic behind the
                score. No black boxes.
              </p>
              <div className="home__note-section">
                <Link href="/underwriting" className="btn btn-outline">
                  Deep-dive: Underwriting →
                </Link>
              </div>
            </div>
            <div className="home__note-card">
              <div className="home__note-card-glow" />
              <div className="mono home__note-label">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    width: 14,
                    height: 14,
                    display: "inline",
                    verticalAlign: "middle",
                    marginRight: 4,
                  }}
                >
                  <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                </svg>{" "}
                Underwriter&apos;s Note
              </div>
              <p className="home__note-text">
                Growing catering operation —{" "}
                <strong style={{ color: "var(--a300)" }}>
                  <span className="mono">$95K/mo</span>
                </strong>{" "}
                with only{" "}
                <strong style={{ color: "var(--a300)" }}>
                  <span className="mono">8.1%</span> stacking
                </strong>
                . 1 NSF was a timing issue (vendor payment). Well within
                tolerance for most lenders.{" "}
                <strong style={{ color: "var(--a300)" }}>
                  <span className="mono">93%</span> confidence
                </strong>{" "}
                · Revenue: Growing
              </p>
              <div className="home__note-footer">
                <span className="mono home__note-meta">
                  Napa Valley Catering Co
                </span>
                <span className="mono home__note-meta">$150K requested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Start closing smarter."
        sub="Join brokers automating their submission desk with AI-powered lender matching."
        primaryText="Get Started"
        primaryHref="/pricing"
        secondaryText="Schedule a Demo"
        secondaryHref="/contact"
      />
    </>
  );
}
