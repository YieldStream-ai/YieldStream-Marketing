"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useReveal } from "./components/useReveal";
import PricingModal from "./components/PricingModal";
import HomeHero from "./components/HomeHero";
import HowItWorks from "./components/HowItWorks/index";
import Capabilities from "./components/Capabilities";
import Moat from "./components/Moat";
import Intelligence from "./components/Intelligence";
import FundingFlow from "./components/FundingFlow/index";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
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

function FirstFold() {
  return (
    <div className="home__first-fold">
      <HomeHero />
    </div>
  );
}

function BuyingSignal({ onOpenPricing }) {
  return (
    <section className="home__buying-signal">
      <div className="home__buying-signal-glow home__buying-signal-glow--1" />
      <div className="home__buying-signal-glow home__buying-signal-glow--2" />
      <div className="container home__buying-signal-inner">
        <span className="home__buying-signal-label">
          Simple &amp; Transparent
        </span>
        <h2 className="home__buying-signal-title">Request Access</h2>
        <p className="home__buying-signal-sub">
          Straightforward plans built around submission volume — no seat counts,
          no hidden add-ons. Find the one that fits and be live this week.
        </p>
        <div className="home__buying-signal-actions">
          <button onClick={onOpenPricing} className="btn btn-primary btn-lg">
            See Pricing
          </button>
          <Link href="/contact" className="home__buying-signal-link">
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useReveal();
  const [showPricing, setShowPricing] = useState(false);

  return (
    <>
      {/* ===== FIRST FOLD (blur-fades on scroll) ===== */}
      <FirstFold />

      {/* ===== INTELLIGENCE — LENDER SCORING ===== */}
      <Intelligence />

      {/* ===== HOW IT WORKS — STEPS ===== */}
      <HowItWorks />

      {/* ===== CAPABILITIES ===== */}
      <Capabilities />

      {/* ===== THE MOAT — INTELLIGENCE FLYWHEEL ===== */}
      <Moat />

      {/* ===== UNDERWRITER'S NOTE ===== */}
      <section className="section">
        <div className="container">
          <div className="grid-feature reveal">
            <div>
              <div className="label-mono home__feature-label">
                Transparent AI
              </div>
              <h2 className="display-lg">
                Every underwrite analysis
                <br />
                comes with a reason.
              </h2>
              <p className="text-lg" style={{ marginTop: 12 }}>
                YieldStream generates human-readable Underwriter Notes for every
                file—explaining the structural logic behind the score. This
                provides strategic sales positioning for your reps, allowing
                them to defend offers with data and close with certainty. No
                black boxes.
              </p>
              <div className="home__note-section">
                <Link href="/underwriting" className="btn btn-outline">
                  Deep-dive: Underwriting →
                </Link>
              </div>
            </div>
            <div className="home__note-card">
              <div className="home__note-card-glow" />
              <div
                className="mono home__note-label"
                style={{ color: "var(--p600)" }}
              >
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
                <strong style={{ color: "var(--p700)" }}>
                  <span className="mono">$95K/mo</span>
                </strong>{" "}
                with only{" "}
                <strong style={{ color: "var(--p700)" }}>
                  <span className="mono">8.1%</span> stacking
                </strong>
                . 1 NSF was a timing issue (vendor payment). Well within
                tolerance for most lenders.{" "}
                <strong style={{ color: "var(--p700)" }}>
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

      {/* ===== BUYING SIGNAL ===== */}
      <BuyingSignal onOpenPricing={() => setShowPricing(true)} />
      <PricingModal
        isOpen={showPricing}
        onClose={() => setShowPricing(false)}
      />
    </>
  );
}
