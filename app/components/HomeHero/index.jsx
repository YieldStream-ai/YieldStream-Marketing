"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Zap,
  Cpu,
  ChevronRight,
  FileText,
  Target,
  BarChart3,
} from "lucide-react";
import HeroAmbientSVG from "./HeroAmbientSVG";
import EnterpriseModal from "../EnterpriseModal";
import DocumentFlowViz from "./visualizations/DocumentFlowViz";
import LenderMatchViz from "./visualizations/LenderMatchViz";
import UnderwritingSignalViz from "./visualizations/UnderwritingSignalViz";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import "./styles.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 55,
      damping: 18,
      delay,
    },
  }),
};

const lines = [
  "MCA Brokers don't just want automation; they want to stop wasting time on dead deals.",
  "Bad expectations kill deals before they start.",
  "Stop sending deals to lenders who were never going to approve them.",
  "Your best reps shouldn't be doing data entry — they should be closing.",
];

const wordContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0 },
  },
  exit: {
    transition: { staggerChildren: 0.025, staggerDirection: -1 },
  },
};

const wordItem = {
  hidden: { opacity: 0, y: -16, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 80, damping: 16 },
  },
  exit: {
    opacity: 0,
    y: 8,
    filter: "blur(3px)",
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

function CyclingSubtitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % lines.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  const words = lines[index].split(" ");

  return (
    <div className="home__hero-sub-wrap">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          className="home__hero-sub"
          variants={wordContainer}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordItem}
              style={{ display: "inline-block", marginRight: "0.28em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export default function HomeHero() {
  const [showModal, setShowModal] = useState(false);
  const tiltRef = useRef(null);
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);
  const springX = useSpring(rawX, { stiffness: 120, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 120, damping: 20 });
  const rotateY = useTransform(springX, [0, 1], [-10, 10]);
  const rotateX = useTransform(springY, [0, 1], [6, -6]);

  function handleMouseMove(e) {
    const rect = tiltRef.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width);
    rawY.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    rawX.set(0.5);
    rawY.set(0.5);
  }

  return (
    <section className="home__hero">
      <div className="home__hero-card grain">
        <div className="home__hero-glow home__hero-glow--1" />
        <div className="home__hero-glow home__hero-glow--2" />

        <div className="container home__hero-layout">
          {/* Left column — copy */}
          <div className="home__hero-copy">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
            >
              <button
                onClick={() => setShowModal(true)}
                className="home__hero-badge"
              >
                <span className="home__hero-badge-icon">
                  <Zap size={13} />
                </span>
                <span className="home__hero-badge-text">
                  Request beta access
                </span>
                <ChevronRight size={14} />
              </button>
            </motion.div>

            <motion.h1
              className="home__hero-title"
              initial="hidden"
              animate="visible"
              custom={0.1}
              variants={fadeUp}
            >
              Submission Intelligence
              <br />
              for the High-Volume{" "}
              <span className="home__hero-accent">Broker.</span>
            </motion.h1>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.2}
              variants={fadeUp}
            >
              <CyclingSubtitle />
            </motion.div>

            <motion.div
              className="home__hero-actions"
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={fadeUp}
            >
              <Link href="/pricing" className="btn btn-primary btn-lg">
                Get Started
              </Link>
              <Link href="/contact" className="home__hero-link">
                Book a Demo
              </Link>
            </motion.div>

            <motion.div
              className="home__hero-divider"
              initial="hidden"
              animate="visible"
              custom={0.4}
              variants={fadeUp}
            />

            <motion.div
              className="home__hero-features"
              initial="hidden"
              animate="visible"
              custom={0.4}
              variants={fadeUp}
            >
              <div className="home__hero-feature">
                <span className="home__hero-feature-icon">
                  <Zap size={15} />
                </span>
                <div>
                  <strong>120s Processing</strong>
                  <span>PDF to scored intelligence</span>
                </div>
              </div>
              <div className="home__hero-feature">
                <span className="home__hero-feature-icon">
                  <Cpu size={15} />
                </span>
                <div>
                  <strong>AI-Powered Matching/Routing</strong>
                  <span>Every lender scored &amp; ranked</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero ambient illustration */}
          <div className="home__hero-visual">
            <HeroAmbientSVG />
          </div>
        </div>

        {/* Bottom-right screenshot peek */}
        <motion.div
          className="home__hero-screenshot-peek"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 45,
            damping: 18,
            delay: 0.5,
          }}
          ref={tiltRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1200 }}
        >
          <motion.div
            className="home__hero-screenshot-tilt"
            style={{ rotateX, rotateY }}
          >
            <Image
              src="/images/underwritting-cta.png"
              alt="YieldStream underwriting dashboard"
              width={1920}
              height={1080}
              className="home__hero-screenshot-img"
            />
            <div className="home__hero-screenshot-fade" />
          </motion.div>
        </motion.div>
      </div>

      {/* Value prop boxes */}
      <motion.div
        className="home__hero-value-props"
        initial="hidden"
        animate="visible"
        custom={0.6}
        variants={fadeUp}
      >
        <div className="home__hero-value-prop">
          <div className="home__hero-value-prop-label">
            <span className="home__hero-value-prop-icon">
              <FileText size={14} />
            </span>
            Extraction Architecture
          </div>
          <h3>Document Intelligence</h3>
          <p>
            Automated extraction from secure upload links. Turn raw statements
            into structured, validated data sets ready for underwriting in
            seconds.
          </p>
        </div>
        <div className="home__hero-value-prop">
          <div className="home__hero-value-prop-label">
            <span className="home__hero-value-prop-icon">
              <Target size={14} />
            </span>
            Submission Logic
          </div>
          <h3>Lender Matching</h3>
          <p>
            Every deal is instantly ranked against lender buy box criteria and
            your previously funded deals. Match merchant profiles to specific
            funding criteria to eliminate submission friction.
          </p>
        </div>
        <div className="home__hero-value-prop">
          <div className="home__hero-value-prop-label">
            <span className="home__hero-value-prop-icon">
              <BarChart3 size={14} />
            </span>
            Data Enrichment
          </div>
          <h3>Underwriting Analysis</h3>
          <p>
            High-fidelity risk signaling with automated NSF detection,
            debt-stacking analysis, and automated file scoring.
          </p>
        </div>
      </motion.div>

      <EnterpriseModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
