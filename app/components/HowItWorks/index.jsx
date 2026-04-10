"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, BrainCircuit, GitCompareArrows, Send, BarChart3 } from "lucide-react";
import useScrollPlay from "../useScrollPlay";
import "./styles.scss";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: "easeOut" } },
};
// Case 4: card slides in from the right, then children stagger
const compareCard = {
  hidden: { x: 56, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.48,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.09,
      delayChildren: 0.44,
    },
  },
};

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

function GenerateLinkVisual() {
  const [phase, setPhase] = useState(0);
  const [playKey, setPlayKey] = useState(0);
  const cardRef = useRef(null);

  const triggerPlay = useCallback(() => setPlayKey((k) => k + 1), []);

  useScrollPlay(cardRef, triggerPlay, { threshold: 0.3 });

  useEffect(() => {
    setPhase(0);
    const timers = [
      setTimeout(() => setPhase(1), 700),   // cursor moves
      setTimeout(() => setPhase(2), 2500),  // file drops — grey/processing
      setTimeout(() => setPhase(3), 3900),  // confirmed — green
      setTimeout(() => setPhase(0), 7200),  // reset
    ];
    return () => timers.forEach(clearTimeout);
  }, [playKey]);

  const dropzoneActive = phase === 1;
  const fileVisible = phase >= 2;
  const fileConfirmed = phase >= 3;

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
        ref={cardRef}
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
          position: "relative",
          overflow: "visible",
        }}
      >
        {/* Animated cursor */}
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "4px",
          }}
          initial={{ x: 340, y: 60, opacity: 0 }}
          animate={
            phase === 0
              ? { x: 340, y: 60, opacity: 0 }
              : phase === 1
                ? { x: 155, y: 155, opacity: 1 }
                : { x: 155, y: 155, opacity: 0 }
          }
          transition={
            phase === 1
              ? { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
              : phase >= 2
                ? { duration: 0.3, ease: "easeIn" }
                : { duration: 0 }
          }
        >
          {/* Cursor SVG */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 2L16 10.5L10.5 11.5L8 17L4 2Z"
              fill="hsl(210 10% 15%)"
              stroke="white"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
          {/* File chip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "4px 8px 4px 6px",
              background: "white",
              border: "1px solid hsl(210 15% 85%)",
              borderRadius: "6px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              whiteSpace: "nowrap",
              marginLeft: "12px",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="hsl(186 94% 27%)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 500,
                color: "hsl(210 10% 20%)",
              }}
            >
              bank_statements_june.pdf
            </span>
          </div>
        </motion.div>

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
            border: `2px dashed ${dropzoneActive ? "hsl(186 94% 27%)" : "hsl(210 15% 85%)"}`,
            borderRadius: "10px",
            padding: "1.5rem 1rem",
            textAlign: "center",
            marginBottom: "0.875rem",
            cursor: "pointer",
            background: dropzoneActive
              ? "hsla(186, 94%, 27%, 0.03)"
              : "transparent",
            transition: "border-color 0.3s ease, background 0.3s ease",
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

        {/* Staged file — processing then confirmed */}
        <AnimatePresence>
          {fileVisible && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
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
                  border: `1px solid ${fileConfirmed ? "hsl(142 50% 80%)" : "hsl(210 15% 88%)"}`,
                  borderRadius: "8px",
                  background: fileConfirmed ? "hsl(142 60% 97%)" : "hsl(210 10% 97%)",
                  transition: "border-color 0.4s ease, background 0.4s ease",
                }}
              >
                {/* File icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={fileConfirmed ? "hsl(186 94% 27%)" : "hsl(210 10% 70%)"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0, transition: "stroke 0.4s ease" }}
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
                      color: fileConfirmed ? "hsl(210 10% 20%)" : "hsl(210 10% 55%)",
                      margin: 0,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      transition: "color 0.4s ease",
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
                {/* Type label area */}
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
                      color: fileConfirmed ? "hsl(210 10% 20%)" : "hsl(210 10% 70%)",
                      background: "white",
                      opacity: fileConfirmed ? 0.5 : 0.35,
                      cursor: "not-allowed",
                      transition: "color 0.4s ease, opacity 0.4s ease",
                    }}
                  >
                    <option>Bank Statement</option>
                  </select>
                  <span
                    style={{
                      fontSize: "0.58rem",
                      color: fileConfirmed ? "hsl(210 8% 62%)" : "transparent",
                      fontStyle: "italic",
                      transition: "color 0.4s ease",
                    }}
                  >
                    Auto-detected
                  </span>
                </div>
                {/* Status icon: spinner → checkmark */}
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
                  {fileConfirmed ? (
                    <motion.svg
                      key="check"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="hsl(142 71% 40%)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </motion.svg>
                  ) : (
                    <svg
                      key="spinner"
                      className="home__sv-spinner"
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="hsl(210 10% 70%)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit button */}
        <button
          disabled={!fileConfirmed}
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
            opacity: fileConfirmed ? 1 : 0.5,
            cursor: fileConfirmed ? "default" : "not-allowed",
            transition: "opacity 0.4s ease",
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
}

function StepVisual({ step }) {
  switch (step) {
    case 0:
      return <GenerateLinkVisual />;
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
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
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
            <motion.p variants={staggerItem}
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
            </motion.p>

            {/* 2 sparkline metric cards */}
            <motion.div
              variants={staggerItem}
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
            </motion.div>

            {/* Metric rows */}
            <motion.div
              variants={staggerItem}
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
            </motion.div>

            {/* Underwriting Signals */}
            <motion.p
              variants={staggerItem}
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
            </motion.p>
            <motion.div
              variants={staggerItem}
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
            </motion.div>
          </motion.div>
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
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
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
            <motion.div
              variants={staggerItem}
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
            </motion.div>
            <motion.p
              variants={staggerItem}
              style={{
                fontSize: "0.7rem",
                color: "hsl(210 8% 50%)",
                margin: "0 0 1rem",
              }}
            >
              Angela Martinez · 3 lenders already submitted · 1 approval
              received — select additional lenders below
            </motion.p>

            {/* Already Submitted */}
            <motion.p
              variants={staggerItem}
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
            </motion.p>
            <motion.div
              variants={staggerItem}
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
            </motion.div>

            {/* Available Lenders */}
            <motion.p
              variants={staggerItem}
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
            </motion.p>
            <motion.div
              variants={staggerItem}
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
            </motion.div>

            {/* Footer */}
            <motion.div
              variants={staggerItem}
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
            </motion.div>
          </motion.div>
        </div>
      );
    case 4:
      return (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "1.5rem 0 0 1.5rem",
            width: "100%",
            height: "100%",
          }}
        >
          <motion.div
            variants={compareCard}
            initial="hidden"
            animate="visible"
            style={{
              width: "130%",
              background: "white",
              borderRadius: "12px",
              border: "1px solid hsl(210 15% 90%)",
              padding: "1.5rem 1.75rem",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              fontFamily: "inherit",
              transform: "scale(0.92)",
              transformOrigin: "top left",
              flexShrink: 0,
            }}
          >
            {/* Header */}
            <motion.div
              variants={staggerItem}
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
            </motion.div>

            {/* Active Deal selector */}
            <motion.div
              variants={staggerItem}
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
            </motion.div>

            {/* Table */}
            <motion.table
              variants={staggerItem}
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
            </motion.table>
          </motion.div>
        </div>
      );
    default:
      return null;
  }
}

export default function HowItWorks() {
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
    <section className="section home__steps-section">
      <div className="container">
        <div className="home__steps-frame">
          <div className="section-header center reveal">
            <div className="label-mono">Steps to Get Funding</div>
            <h2 className="display-lg" style={{ marginTop: 12 }}>
              How it works
            </h2>
          </div>

          <div
            className="home__steps-tabs reveal reveal-delay-1"
            ref={tabsRef}
          >
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
      </div>
    </section>
  );
}
