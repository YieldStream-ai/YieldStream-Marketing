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
import WorldSVG from "./WorldSVG";
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
          </div>

          {/* Hero ambient illustration */}
          <div className="home__hero-visual">
            {/* <HeroAmbientSVG /> */}
            <WorldSVG className="home__hero-world" />
          </div>
        </div>
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
          <div className="home__hero-value-prop-viz">
            <svg
              viewBox="-80 -75 160 130"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <style>{`.t1ln{fill:none;stroke:#0f172a;stroke-width:0.9;stroke-linecap:round;stroke-linejoin:round}.t1lnf{fill:none;stroke:#0f172a;stroke-width:0.7;stroke-linecap:round;stroke-linejoin:round;opacity:0.55}`}</style>
              <g transform="translate(0, 0)">
                <g transform="translate(0, -55)">
                  <polygon className="t1ln" points="0,-20 50,-5 0,10 -50,-5" />
                  <line className="t1lnf" x1="-18" y1="-8" x2="18" y2="-8" />
                  <line className="t1lnf" x1="-20" y1="-4" x2="20" y2="-4" />
                  <line className="t1lnf" x1="-14" y1="0" x2="14" y2="0" />
                </g>
                <line className="t1lnf" x1="-50" y1="-60" x2="-50" y2="-9" />
                <line className="t1lnf" x1="50" y1="-60" x2="50" y2="-9" />
                <g transform="translate(0, -10)">
                  <polygon className="t1ln" points="0,-14 50,1 0,16 -50,1" />
                </g>
                <g transform="translate(0, 14)">
                  <polygon className="t1ln" points="0,-14 50,1 0,16 -50,1" />
                </g>
                <g transform="translate(0, 38)">
                  <polygon className="t1ln" points="0,-14 50,1 0,16 -50,1" />
                </g>
              </g>
            </svg>
          </div>
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
          <div className="home__hero-value-prop-viz">
            <svg
              viewBox="-80 -75 160 130"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <style>{`.t2ln{fill:none;stroke:#0f172a;stroke-width:0.9;stroke-linecap:round;stroke-linejoin:round}.t2lnf{fill:none;stroke:#0f172a;stroke-width:0.7;stroke-linecap:round;stroke-linejoin:round;opacity:0.55}`}</style>
              <g transform="translate(0, 0)">
                <g transform="translate(0, -60)">
                  <polygon className="t2ln" points="0,-14 22,-2 0,10 -22,-2" />
                  <polygon className="t2ln" points="-22,-2 -22,12 0,24 0,10" />
                  <polygon className="t2ln" points="22,-2 22,12 0,24 0,10" />
                </g>
                <line className="t2lnf" x1="-22" y1="-40" x2="-56" y2="-12" />
                <line className="t2lnf" x1="0" y1="-36" x2="0" y2="-8" />
                <line className="t2lnf" x1="22" y1="-40" x2="56" y2="-12" />
                <g transform="translate(-56, 2)">
                  <polygon className="t2ln" points="0,-14 18,-4 0,6 -18,-4" />
                  <polygon className="t2ln" points="-18,-4 -18,8 0,18 0,6" />
                  <polygon className="t2ln" points="18,-4 18,8 0,18 0,6" />
                </g>
                <g transform="translate(0, 6)">
                  <polygon className="t2ln" points="0,-14 18,-4 0,6 -18,-4" />
                  <polygon className="t2ln" points="-18,-4 -18,8 0,18 0,6" />
                  <polygon className="t2ln" points="18,-4 18,8 0,18 0,6" />
                </g>
                <g transform="translate(56, 2)">
                  <polygon className="t2ln" points="0,-14 18,-4 0,6 -18,-4" />
                  <polygon className="t2ln" points="-18,-4 -18,8 0,18 0,6" />
                  <polygon className="t2ln" points="18,-4 18,8 0,18 0,6" />
                </g>
                <line className="t2lnf" x1="-56" y1="22" x2="0" y2="44" />
                <line className="t2lnf" x1="0" y1="26" x2="0" y2="44" />
                <line className="t2lnf" x1="56" y1="22" x2="0" y2="44" />
              </g>
            </svg>
          </div>
          <div className="home__hero-value-prop-label">
            <span className="home__hero-value-prop-icon">
              <Target size={14} />
            </span>
            Submission Logic
          </div>
          <h3>AI-Powered Lender Matching</h3>
          <p>
            Every deal is instantly ranked against lender buy box criteria and
            your previously funded deals. Match merchant profiles to specific
            funding criteria to eliminate submission friction.
          </p>
        </div>
        <div className="home__hero-value-prop">
          <div className="home__hero-value-prop-viz">
            <svg
              viewBox="-80 -75 160 130"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <style>{`.t3ln{fill:none;stroke:#0f172a;stroke-width:0.9;stroke-linecap:round;stroke-linejoin:round}.t3lnf{fill:none;stroke:#0f172a;stroke-width:0.7;stroke-linecap:round;stroke-linejoin:round;opacity:0.55}`}</style>
              <g transform="translate(4, -15)">
                <g transform="translate(-50, 10)">
                  <polygon className="t3ln" points="0,-12 16,-4 0,4 -16,-4" />
                  <polygon className="t3ln" points="-16,-4 -16,8 0,16 0,4" />
                  <polygon className="t3ln" points="16,-4 16,8 0,16 0,4" />
                </g>
                <line className="t3lnf" x1="-30" y1="8" x2="-6" y2="2" />
                <line className="t3lnf" x1="-12" y1="-1" x2="-6" y2="2" />
                <line className="t3lnf" x1="-12" y1="7" x2="-6" y2="2" />
                <g transform="translate(28, 0)">
                  <polygon className="t3ln" points="0,-26 30,-11 0,4 -30,-11" />
                  <polygon className="t3ln" points="-30,-11 -30,15 0,30 0,4" />
                  <polygon className="t3ln" points="30,-11 30,15 0,30 0,4" />
                  <line
                    className="t3lnf"
                    x1="-15"
                    y1="-18.5"
                    x2="15"
                    y2="-3.5"
                  />
                  <line
                    className="t3lnf"
                    x1="15"
                    y1="-18.5"
                    x2="-15"
                    y2="-3.5"
                  />
                  <line
                    className="t3lnf"
                    x1="-15"
                    y1="-3.5"
                    x2="-15"
                    y2="22.5"
                  />
                  <line className="t3lnf" x1="-30" y1="2" x2="0" y2="17" />
                  <line className="t3lnf" x1="15" y1="-3.5" x2="15" y2="22.5" />
                  <line className="t3lnf" x1="30" y1="2" x2="0" y2="17" />
                </g>
              </g>
            </svg>
          </div>
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
