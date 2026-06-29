"use client";

import Link from "next/link";
import { Zap, ChevronRight, FileText, Target, BarChart3 } from "lucide-react";
import { MinimalDotMatrix } from "./MinimalDotMatrix";
import EnterpriseModal from "../EnterpriseModal";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";
import "./styles.scss";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
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
    transition: { type: "spring" as const, stiffness: 80, damping: 16 },
  },
  exit: {
    opacity: 0,
    y: 8,
    filter: "blur(3px)",
    transition: { duration: 0.2, ease: "easeIn" as const },
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
    <div className="hero__sub-wrap">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          className="hero__sub"
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

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="hero">
      <MinimalDotMatrix
        className="hero__matrix"
        background="#fefefe"
        dotColor={[15, 23, 42]}
        dotSize={2.5}
        totalSize={22}
        maxOpacity={0.18}
        fullWidth
      />

      <div className="hero__content">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          <button
            onClick={() => setShowModal(true)}
            className="hero__badge"
          >
            <span className="hero__badge-icon">
              <Zap size={13} />
            </span>
            <span>Get started today</span>
            <ChevronRight size={14} />
          </button>
        </motion.div>

        <motion.h1
          className="hero__title"
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
        >
          Submission Intelligence
          <br />
          for the High-Volume{" "}
          <em className="hero__accent">Broker.</em>
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
          className="hero__actions"
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
        >
          <Link href="/pricing" className="hero__btn-primary">
            Get Started
          </Link>
          <Link href="/contact" className="hero__btn-ghost">
            Book a Demo
          </Link>
        </motion.div>

        <motion.div
          className="hero__divider"
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUp}
        />

        <motion.div
          className="hero__features"
          initial="hidden"
          animate="visible"
          custom={0.5}
          variants={fadeUp}
        >
          <div className="hero__feature">
            <span className="hero__feature-icon">
              <FileText size={14} />
            </span>
            <div>
              <strong>Document Intelligence</strong>
              <span>Automated extraction & validation</span>
            </div>
          </div>
          <div className="hero__feature">
            <span className="hero__feature-icon">
              <Target size={14} />
            </span>
            <div>
              <strong>Lender Matching</strong>
              <span>AI-ranked against buy box criteria</span>
            </div>
          </div>
          <div className="hero__feature">
            <span className="hero__feature-icon">
              <BarChart3 size={14} />
            </span>
            <div>
              <strong>Risk Signaling</strong>
              <span>NSF detection & file scoring</span>
            </div>
          </div>
        </motion.div>
      </div>

      <EnterpriseModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
