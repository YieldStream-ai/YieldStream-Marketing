"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "lucide-react";
import { STEPS } from "./constants";
import GenerateLinkVisual from "./GenerateLinkVisual";
import UnderwriteVisual from "./UnderwriteVisual";
import LenderMatchVisual from "./LenderMatchVisual";
import SubmissionVisual from "./SubmissionVisual";
import CompareVisual from "./CompareVisual";
import "./styles.scss";

function StepVisual({ step }) {
  switch (step) {
    case 0:
      return <GenerateLinkVisual />;
    case 1:
      return <UnderwriteVisual />;
    case 2:
      return <LenderMatchVisual />;
    case 3:
      return <SubmissionVisual />;
    case 4:
      return <CompareVisual />;
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
    const buttons = tabs.querySelectorAll(".home__steps-tab");
    const tab = buttons[index];
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
            <div className="label-mono">Deal Workflow</div>
            <h2
              className="display-lg"
              style={{
                marginTop: 12,
                position: "relative",
                display: "inline-block",
              }}
            >
              How it works
              <Info
                size={22}
                style={{
                  position: "absolute",
                  top: 4,
                  right: -28,
                  color: "var(--p600)",
                }}
              />
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
      </div>
    </section>
  );
}
