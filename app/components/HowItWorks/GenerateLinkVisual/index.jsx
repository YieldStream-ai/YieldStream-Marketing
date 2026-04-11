"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollPlay from "../../useScrollPlay";
import "./styles.scss";

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
      setTimeout(() => setPhase(3), 3900),
      setTimeout(() => setPhase(0), 7200),
    ];
    return () => timers.forEach(clearTimeout);
  }, [playKey]);

  const dropzoneActive = phase === 1;
  const fileVisible = phase >= 2;
  const fileConfirmed = phase >= 3;

  return (
    <div className="glv">
      <div ref={cardRef} className="glv__card">
        {/* Animated cursor */}
        <motion.div
          className="glv__cursor-wrap"
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
              stroke="hsl(186 94% 27%)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span className="glv__file-chip-name">bank_statements_june.pdf</span>
          </div>
        </motion.div>

        <h2 className="glv__heading">Secure Document Upload</h2>
        <p className="glv__subheading">
          Your account representative has requested documents. Upload them
          securely below.
        </p>

        {/* Dropzone */}
        <div
          className={`glv__dropzone${dropzoneActive ? " glv__dropzone--active" : ""}`}
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
            className="glv__dropzone-icon"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          <p className="glv__dropzone-title">Upload Your Documents</p>
          <p className="glv__dropzone-hint">
            Bank statements, ID, signed application — drop everything here
          </p>
        </div>

        {/* Staged file */}
        <AnimatePresence>
          {fileVisible && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
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
                  stroke={fileConfirmed ? "hsl(186 94% 27%)" : "hsl(210 10% 70%)"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="glv__file-row-icon"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <div className="glv__file-info">
                  <p
                    className={`glv__file-name${fileConfirmed ? " glv__file-name--confirmed" : ""}`}
                  >
                    bank_statements_june.pdf
                  </p>
                  <p className="glv__file-pages">6 pages</p>
                </div>
                <div className="glv__file-type">
                  <select
                    disabled
                    className={`glv__file-select${fileConfirmed ? " glv__file-select--confirmed" : ""}`}
                  >
                    <option>Bank Statement</option>
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
        <button
          disabled={!fileConfirmed}
          className={`glv__submit${fileConfirmed ? " glv__submit--ready" : ""}`}
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
            className="glv__submit-icon"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Submit Documents
        </button>

        <p className="glv__security">
          Files are encrypted in transit and stored securely. This link is
          single-use and expires in 48 hours.
        </p>
      </div>
    </div>
  );
}
