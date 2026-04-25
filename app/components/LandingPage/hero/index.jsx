"use client";

import Link from "next/link";
import Image from "next/image";
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
  "AI-powered lender matching, relationship-weighted scoring, and transparent underwriting — built for high-volume MCA brokers.",
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

const AVATARS = [
  { bg: "#c7d2fe", initials: "JD" },
  { bg: "#a7f3d0", initials: "MR" },
  { bg: "#fde68a", initials: "SK" },
  { bg: "#fca5a5", initials: "AL" },
];

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
  return (
    <section className="hero">
      <div className="hero__inner">
        {/* Headline */}
        <motion.h1
          className="hero__title"
          initial="hidden"
          animate="visible"
          custom={0.1}
          variants={fadeUp}
        >
          Turn submissions
          <br />
          <span className="hero__title-muted">into funded deals.</span>
        </motion.h1>
        {/* Cycling subtitle */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
        >
          <CyclingSubtitle />
        </motion.div>
        CTAs
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
          <Link href="/contact" className="hero__btn-outline">
            Book a Demo
          </Link>
        </motion.div>
        <motion.p
          className="hero__trust"
          initial="hidden"
          animate="visible"
          custom={0.35}
          variants={fadeUp}
        >
          No credit card required
        </motion.p>
        {/* Screenshot */}
        <motion.div
          className="hero__screenshot"
          initial={{ opacity: 0, y: 40 }}
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
            className="hero__screenshot-img"
            priority
          />
          <div className="hero__screenshot-fade" />
        </motion.div>
      </div>
    </section>
  );
}
