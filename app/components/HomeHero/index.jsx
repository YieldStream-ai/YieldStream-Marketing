"use client";

import Link from "next/link";
import Image from "next/image";
import { Zap, Cpu, ChevronRight } from "lucide-react";
import HeroAmbientSVG from "./HeroAmbientSVG";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
  return (
    <section className="home__hero">
      <div className="home__hero-card">
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
              <Link href="/pricing" className="home__hero-badge">
                <span className="home__hero-badge-icon">
                  <Zap size={13} />
                </span>
                <span className="home__hero-badge-text">
                  Request beta access
                </span>
                <ChevronRight size={14} />
              </Link>
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
      </div>
    </section>
  );
}
