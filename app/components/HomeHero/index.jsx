"use client";

import Image from "next/image";
import { FileText, Target, BarChart3, Cpu } from "lucide-react";
import { motion } from "framer-motion";
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

const VALUE_PROPS = [
  {
    icon: FileText,
    title: "Document Intelligence",
    desc: "Automated extraction from secure upload links. Raw statements become structured, validated data in seconds.",
  },
  {
    icon: Target,
    title: "Lender Matching",
    desc: "Every deal ranked against lender buy-box criteria and your funded history. Eliminate submission friction.",
  },
  {
    icon: BarChart3,
    title: "Underwriting Analysis",
    desc: "High-fidelity risk signaling with automated NSF detection, debt-stacking analysis, and file scoring.",
  },
  {
    icon: Cpu,
    title: "AI Powered",
    desc: "Intelligence that compounds over time. Models retrain on your pull-through data weekly.",
  },
];

export default function HomeHero() {
  return (
    <section className="home__hero">
      <div className="container">
        {/* ── Header: headline left, description right ── */}
        <motion.div
          className="home__hero-header"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          <h1 className="home__hero-title">
            The Institutional Underwriting Engine for
            <span className="home__hero-title-muted"> modern brokers.</span>
          </h1>
          <div className="home__hero-right">
            <p className="home__hero-desc">
              AI-powered lender matching that learns from every outcome. Upload
              a statement, get a ranked list of who to send it to, and track
              every deal in one place. YieldStream is the submission
              intelligence platform built for brokers who want to work smarter,
              not harder.
            </p>
          </div>
        </motion.div>

        {/* ── Product screenshot ── */}
        <motion.div
          className="home__hero-screenshot"
          initial="hidden"
          animate="visible"
          custom={0.25}
          variants={fadeUp}
        >
          <Image
            src="/images/Opportunities-Table.png"
            alt="YieldStream opportunities pipeline"
            width={1920}
            height={1080}
            priority
            className="home__hero-screenshot-img"
          />
          <div className="home__hero-screenshot-fade" />
        </motion.div>

        {/* ── Value props ── */}
        <motion.div
          className="home__hero-value-props"
          initial="hidden"
          animate="visible"
          custom={0.45}
          variants={fadeUp}
        >
          {VALUE_PROPS.map((prop, i) => (
            <div className="home__hero-value-prop" key={i}>
              <div className="home__hero-value-prop-icon">
                <prop.icon size={18} strokeWidth={1.5} />
              </div>
              <h3 className="home__hero-value-prop-title">{prop.title}</h3>
              <p className="home__hero-value-prop-desc">{prop.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
