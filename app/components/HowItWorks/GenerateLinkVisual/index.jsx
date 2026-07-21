"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollPlay from "../../useScrollPlay";
import "./styles.scss";

const DOC_CARDS = [
  { title: "Bank statements", desc: "Last 3 months" },
  { title: "ID / License", desc: "Government-issued photo ID" },
  { title: "Other documents", desc: "Signed application, voided check, etc." },
];

const FORMAT_TAGS = ["PDF", "JPG", "PNG", "HEIC"];

export default function GenerateLinkVisual() {
  const [phase, setPhase] = useState(0);
  const [playKey, setPlayKey] = useState(0);
  const cardRef = useRef(null);

  const triggerPlay = useCallback(() => setPlayKey((k) => k + 1), []);

  useScrollPlay(cardRef, triggerPlay, { threshold: 0.3 });

  useEffect(() => {
    setPhase(0);
    const timers = [
      setTimeout(() => setPhase(1), 700),
      setTimeout(() => setPhase(2), 2500),
      setTimeout(() => setPhase(3), 4000),
      setTimeout(() => setPhase(0), 7600),
    ];
    return () => timers.forEach(clearTimeout);
  }, [playKey]);

  const dropzoneActive = phase === 1;
  const fileVisible = phase >= 2;
  const fileConfirmed = phase >= 3;
  const zoomed = phase >= 2;

  return (
    <div className="glv" ref={cardRef}>
      <motion.div
        className="glv__card"
        animate={zoomed ? { scale: 1.08, y: -10 } : { scale: 0.9, y: 0 }}
        transition={{
          duration: zoomed ? 0.7 : 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{ transformOrigin: "center top" }}
      >
        {/* Animated cursor */}
        <motion.div
          className="glv__cursor-wrap"
          initial={{ x: 480, y: 80, opacity: 0 }}
          animate={
            phase === 0
              ? { x: 480, y: 80, opacity: 0 }
              : phase === 1
                ? { x: 240, y: 320, opacity: 1 }
                : { x: 240, y: 320, opacity: 0 }
          }
          transition={
            phase === 1
              ? { duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }
              : phase >= 2
                ? { duration: 0.3, ease: "easeIn" }
                : { duration: 0 }
          }
        >
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
          <div className="glv__file-chip">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1f2937"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span className="glv__file-chip-name">
              bank_statements_june.pdf
            </span>
          </div>
        </motion.div>

        {/* Top chrome — fades out on zoom */}
        <motion.div
          className="glv__chrome"
          animate={
            zoomed
              ? { opacity: 0, height: 0, marginBottom: 0 }
              : { opacity: 1, height: "auto", marginBottom: 16 }
          }
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ overflow: "hidden" }}
        >
          {/* Security badge */}
          <div className="glv__security-badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Bank-level encryption · 256-bit TLS
          </div>

          {/* Title */}
          <h2 className="glv__title">
            Documents requested for YieldStream LLC
          </h2>
          <p className="glv__subtitle">
            Requested by Joshua Dinh · YieldStream LLC
          </p>
        </motion.div>

        {/* Requested documents — stays visible during zoom */}
        <p className="glv__section-label">REQUESTED DOCUMENTS</p>

        <div className="glv__doc-cards">
          {DOC_CARDS.map((doc, i) => {
            const isOther = i === 2;
            const received = isOther && fileVisible;
            return (
              <div
                key={doc.title}
                className={`glv__doc-card${received ? " glv__doc-card--received" : ""}`}
              >
                {received && (
                  <motion.span
                    className="glv__doc-badge"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    ✓ Received
                  </motion.span>
                )}
                <div className="glv__doc-icon">
                  {received ? (
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="hsl(142 71% 40%)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="hsl(142 71% 95%)"
                        stroke="hsl(142 71% 40%)"
                      />
                      <polyline points="16 9 10.5 15 8 12.5" />
                    </motion.svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="hsl(210 8% 75%)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  )}
                </div>
                <div className="glv__doc-text">
                  <p className="glv__doc-title">{doc.title}</p>
                  <p className="glv__doc-desc">{doc.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Drop zone card */}
        <div
          className={`glv__dropzone${dropzoneActive ? " glv__dropzone--active" : ""}`}
        >
          <div className="glv__dropzone-icon-wrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="hsl(210 8% 65%)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <polyline points="9 15 12 12 15 15" />
            </svg>
          </div>
          <p className="glv__dropzone-title">Drop your documents here</p>
          <p className="glv__dropzone-hint">
            or <span className="glv__dropzone-link">tap to browse</span> from
            your device
          </p>

          <div className="glv__format-tags">
            {FORMAT_TAGS.map((tag) => (
              <span key={tag} className="glv__format-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Staged file */}
          <AnimatePresence>
            {fileVisible && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.3 }}
                className="glv__staged"
              >
                <div
                  className={`glv__file-row${fileConfirmed ? " glv__file-row--confirmed" : ""}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="hsl(210 10% 55%)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="glv__file-row-icon"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <div className="glv__file-info">
                    <p className="glv__file-name">2025-12-24_STMSSCM.pdf</p>
                    <p className="glv__file-meta">925 KB · 15 pages</p>
                  </div>
                  <div className="glv__file-type">
                    <select disabled className="glv__file-select">
                      <option>Other Document</option>
                    </select>
                    <span
                      className={`glv__file-detected${fileConfirmed ? " glv__file-detected--visible" : ""}`}
                    >
                      Auto-detected
                    </span>
                  </div>
                  <div className="glv__file-status">
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
                        className="glv__spinner"
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
          <AnimatePresence>
            {fileConfirmed && (
              <motion.button
                className="glv__submit"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                Submit documents
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Footer — fades out on zoom */}
        <motion.div
          className="glv__footer"
          animate={zoomed ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Footer badges */}
          <div className="glv__footer-badges">
            <span className="glv__footer-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              End-to-end encrypted
            </span>
            <span className="glv__footer-sep">·</span>
            <span className="glv__footer-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Expires in 48h
            </span>
            <span className="glv__footer-sep">·</span>
            <span className="glv__footer-badge">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              SOC 2 compliant
            </span>
          </div>

          {/* Branding */}
          <p className="glv__branding">
            Powered by{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 120 120"
              width="14"
              height="14"
              className="glv__branding-logo"
              aria-hidden="true"
            >
              <defs>
                <linearGradient
                  id="glvGrad"
                  x1="0%"
                  y1="100%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3a3a3a" />
                  <stop offset="100%" stopColor="#0a0a0a" />
                </linearGradient>
              </defs>
              <path
                d="M 20 86 L 52 76 L 84 86 L 52 96 Z"
                fill="url(#glvGrad)"
                opacity="0.55"
              />
              <path
                d="M 24 66 L 60 54 L 96 66 L 60 78 Z"
                fill="url(#glvGrad)"
                opacity="0.78"
              />
              <path
                d="M 28 44 L 68 30 L 108 44 L 68 58 Z"
                fill="url(#glvGrad)"
              />
            </svg>{" "}
            <span className="glv__branding-name">YieldStream</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
