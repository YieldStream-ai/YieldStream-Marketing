"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useReveal } from "./components/useReveal";
import CTABanner from "./components/CTABanner";
import BentoShowcase from "./components/BentoShowcase";
import HeroAmbientSVG from "./components/HeroAmbientSVG";
import {
  Zap,
  Cpu,
  ChevronRight,
  Link2,
  BrainCircuit,
  GitCompareArrows,
  Send,
  BarChart3,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
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

const STEPS = [
  {
    id: "generate-link",
    num: "01",
    icon: Link2,
    tab: "Generate Link",
    title: "Generate Secure Link",
    desc: "Create a unique, encrypted upload link for your merchant. Documents stay secure and organized from the start.",
    cta: { text: "Try it free", href: "/pricing" },
  },
  {
    id: "ai-parse",
    num: "02",
    icon: BrainCircuit,
    tab: "AI Underwrite",
    title: "AI Parse & Underwrite",
    desc: "Bank statements are automatically extracted and analyzed. 20+ risk signals scored — revenue trends, NSFs, stacking, DSCR — in under 120 seconds.",
    cta: { text: "See underwriting", href: "/underwriting" },
  },
  {
    id: "lender-match",
    num: "03",
    icon: GitCompareArrows,
    tab: "Lender Match",
    title: "Lender Matching",
    desc: "Our three-layer scoring engine routes the deal to the best-fit lenders based on global data, your relationships, and buybox criteria.",
    cta: { text: "Learn about matching", href: "/lender-marketplace" },
  },
  {
    id: "submit",
    num: "04",
    icon: Send,
    tab: "Submit",
    title: "One-Click Submit",
    desc: "Submit a professionally packaged PDF to matched lenders with a single click. No manual formatting, no copy-paste.",
    cta: { text: "Get started", href: "/pricing" },
  },
  {
    id: "compare",
    num: "05",
    icon: BarChart3,
    tab: "Compare & Close",
    title: "Compare & Close",
    desc: "Review competing offers side-by-side, track lender responses in real time, and close the deal — all from one dashboard.",
    cta: { text: "Book a demo", href: "/contact" },
  },
];

function StepVisual({ step }) {
  switch (step) {
    case 0:
      return (
        <div className="home__sv home__sv--link">
          <div className="home__sv-urlbar">
            <div className="home__sv-lock">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            </div>
            <div className="home__sv-url">
              <span className="home__sv-url-protocol">https://</span>
              upload.yieldstream.io/s/m8kx2...
            </div>
            <button className="home__sv-copy">Copy</button>
          </div>
          <div className="home__sv-status">
            <div className="home__sv-dot home__sv-dot--green" />
            Encrypted &middot; Expires in 48h
          </div>
          <div className="home__sv-files">
            <div className="home__sv-file">
              <div className="home__sv-file-icon">PDF</div>
              <div className="home__sv-file-info">
                <div className="home__sv-file-name">bank_statements_q4.pdf</div>
                <div className="home__sv-file-size">2.4 MB</div>
              </div>
            </div>
            <div className="home__sv-file">
              <div className="home__sv-file-icon">PDF</div>
              <div className="home__sv-file-info">
                <div className="home__sv-file-name">bank_statements_q3.pdf</div>
                <div className="home__sv-file-size">1.8 MB</div>
              </div>
            </div>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="home__sv home__sv--underwrite">
          {/* Score header */}
          <div className="home__sv-uw-top">
            <span className="home__sv-uw-score">100</span>
            <span className="home__sv-uw-tag home__sv-uw-tag--green">CLEAN</span>
            <span className="home__sv-uw-tag">Growing revenue</span>
            <span className="home__sv-uw-tag">No stacking</span>
            <span className="home__sv-uw-tag">1st position</span>
          </div>

          {/* Cash flow cards */}
          <div className="home__sv-uw-cards">
            <div className="home__sv-uw-card">
              <div className="home__sv-uw-card-label">Monthly Revenue <span className="home__sv-uw-up">+13%</span></div>
              <div className="home__sv-uw-card-value">$175,000</div>
            </div>
            <div className="home__sv-uw-card">
              <div className="home__sv-uw-card-label">Avg Daily Balance <span className="home__sv-uw-dim">28% of rev</span></div>
              <div className="home__sv-uw-card-value">$49,000</div>
            </div>
            <div className="home__sv-uw-card">
              <div className="home__sv-uw-card-label">DSCR</div>
              <div className="home__sv-uw-card-value">7.46</div>
            </div>
            <div className="home__sv-uw-card">
              <div className="home__sv-uw-card-label">Daily Payment Cap</div>
              <div className="home__sv-uw-card-value">$6,888</div>
            </div>
          </div>

          {/* Key metrics */}
          <div className="home__sv-uw-metrics">
            <div className="home__sv-uw-row"><span>Deposit velocity</span><strong>27 deposits</strong></div>
            <div className="home__sv-uw-row"><span>Revenue trend</span><strong>Growing (+13%)</strong></div>
            <div className="home__sv-uw-row"><span>NSF count</span><strong>0</strong></div>
            <div className="home__sv-uw-row"><span>Debt burden ratio</span><strong>1.2%</strong></div>
          </div>

          {/* Signals */}
          <div className="home__sv-uw-signals">
            <div className="home__sv-uw-signal"><span className="home__sv-uw-dot" />DSCR 7.46 — strong cash cycle coverage</div>
            <div className="home__sv-uw-signal"><span className="home__sv-uw-dot" />No NSF events in statement period</div>
            <div className="home__sv-uw-signal"><span className="home__sv-uw-dot" />1st position — clean stack</div>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="home__sv home__sv--match">
          {[
            { name: "Velocity Capital", score: 98, tier: "Tier 1" },
            { name: "Summit Funding", score: 94, tier: "Tier 1" },
            { name: "BlueHarbor Finance", score: 87, tier: "Tier 2" },
          ].map((l, i) => (
            <div key={l.name} className={`home__sv-lender ${i === 0 ? "home__sv-lender--top" : ""}`}>
              <div className="home__sv-lender-info">
                <div className="home__sv-lender-name">{l.name}</div>
                <div className="home__sv-lender-tier">{l.tier}</div>
              </div>
              <div className={`home__sv-score ${i === 0 ? "home__sv-score--top" : ""}`}>
                {l.score}%
              </div>
            </div>
          ))}
        </div>
      );
    case 3:
      return (
        <div className="home__sv home__sv--submit">
          <div className="home__sv-doc">
            <div className="home__sv-doc-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <div className="home__sv-doc-label">Submission_Package.pdf</div>
            <div className="home__sv-doc-meta">12 pages &middot; Auto-generated</div>
          </div>
          <div className="home__sv-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>
          <div className="home__sv-badge-sent">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Submitted
          </div>
        </div>
      );
    case 4:
      return (
        <div className="home__sv home__sv--compare">
          <div className="home__sv-offer home__sv-offer--best">
            <div className="home__sv-offer-badge">Best</div>
            <div className="home__sv-offer-name">Velocity Capital</div>
            <div className="home__sv-offer-amount">$150,000</div>
            <div className="home__sv-offer-details">
              <div><span>Factor</span><strong>1.29</strong></div>
              <div><span>Term</span><strong>12 mo</strong></div>
              <div><span>Frequency</span><strong>Daily</strong></div>
            </div>
          </div>
          <div className="home__sv-offer">
            <div className="home__sv-offer-name">Summit Funding</div>
            <div className="home__sv-offer-amount">$140,000</div>
            <div className="home__sv-offer-details">
              <div><span>Factor</span><strong>1.35</strong></div>
              <div><span>Term</span><strong>10 mo</strong></div>
              <div><span>Frequency</span><strong>Daily</strong></div>
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function Home() {
  useReveal();
  const [activeStep, setActiveStep] = useState(0);
  const tabsRef = useRef(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback((index) => {
    const tabs = tabsRef.current;
    if (!tabs) return;
    const tab = tabs.children[index + 1]; // +1 to skip the indicator div
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
    <>
      {/* ===== HERO ===== */}
      <section className="home__hero">
        <div className="home__hero-card">
          <div className="home__hero-glow home__hero-glow--1" />
          <div className="home__hero-glow home__hero-glow--2" />

          <div className="container home__hero-layout">
            {/* Left column — copy */}
            <div className="home__hero-copy">
              <Link href="/pricing" className="home__hero-badge reveal">
                <span className="home__hero-badge-icon">
                  <Zap size={13} />
                </span>
                <span className="home__hero-badge-text">
                  Request beta access
                </span>
                <ChevronRight size={14} />
              </Link>

              <h1 className="home__hero-title reveal">
                Submission Intelligence
                <br />
                for the High-Volume{" "}
                <span className="home__hero-accent">Broker.</span>
              </h1>

              <p className="home__hero-sub reveal reveal-delay-1">
                Automate MCA underwriting and lender routing, from submission to
                funding.
              </p>

              <div className="home__hero-actions reveal reveal-delay-2">
                <Link href="/pricing" className="btn btn-primary btn-lg">
                  Get Started
                </Link>
                <Link href="/contact" className="home__hero-link">
                  Book a Demo
                </Link>
              </div>

              <div className="home__hero-divider reveal reveal-delay-2" />

              <div className="home__hero-features reveal reveal-delay-3">
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
                    <span>Every lender scored & ranked</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero ambient illustration */}
            <div className="home__hero-visual">
              <HeroAmbientSVG />
            </div>

          </div>

          {/* Bottom-right screenshot peek */}
          <div className="home__hero-screenshot-peek">
            <Image
              src="/images/underwritting-cta.png"
              alt="YieldStream underwriting dashboard"
              width={1920}
              height={1080}
              className="home__hero-screenshot-img"
            />
            <div className="home__hero-screenshot-fade" />
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS — STEPS ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label-mono">Steps to Get Funding</div>
            <h2 className="display-lg" style={{ marginTop: 12 }}>
              How it works
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
                onClick={() => setActiveStep(i)}
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
            <div className="home__steps-track" style={{ transform: `translateX(-${activeStep * 100}%)` }}>
              {STEPS.map((step, i) => (
                <div className="home__steps-slide" key={step.id}>
                  <div className="home__steps-content">
                    <div className="home__steps-text">
                      <span className="home__steps-num">{step.num}.</span>
                      <h3 className="display-md home__steps-title">
                        {step.title}
                      </h3>
                      <p className="text-md home__steps-desc">
                        {step.desc}
                      </p>
                      <Link
                        href={step.cta.href}
                        className="btn btn-primary"
                      >
                        {step.cta.text}
                      </Link>
                    </div>
                    <div className="home__steps-visual">
                      <StepVisual step={i} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PLATFORM OUTCOMES — BENTO GRID ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label-mono">Platform</div>
            <h2 className="display-lg" style={{ marginTop: 12 }}>
              Intelligence at every stage
              <br />
              of the deal lifecycle.
            </h2>
          </div>

          <div className="home__bento-grid reveal">
            {/* Card 1 — Wide */}
            <div className="home__bento-card home__bento-card--wide">
              <div className="home__bento-card-content">
                <div className="label-mono">Extraction Precision</div>
                <h3 className="display-md home__feature-heading">
                  Upload a PDF. Get an underwrite in minutes.
                </h3>
                <p className="text-md home__feature-desc">
                  AI extracts revenue trends, NSF patterns, stacking signals,
                  and 20+ risk indicators from bank statements — with
                  audit-ready verified data.
                </p>
                <Link href="/underwriting" className="btn btn-outline btn-sm">
                  Learn about underwriting →
                </Link>
              </div>
              <div className="screenshot">
                <Image
                  src="/images/Underwriting-Intelligence.png"
                  alt="AI Bank Statement Analysis"
                  width={1400}
                  height={800}
                  priority
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="home__bento-card">
              <div className="label-mono">Market Matching</div>
              <span className="pill pill--accent">AI Lender Matching</span>
              <h3 className="display-md home__feature-heading">
                Every lender scored. Every match explained.
              </h3>
              <p className="text-md home__feature-desc">
                Three-layer scoring weighs global performance, your relationship
                history, and buybox fit — ranked by expected yield.
              </p>
              <div className="screenshot">
                <Image
                  src="/images/Lender-Edit.png"
                  alt="AI Lender Matching"
                  width={1400}
                  height={800}
                  priority
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="home__bento-card">
              <div className="label-mono">Unified Workflow</div>
              <span className="pill pill--accent">Deal Pipeline</span>
              <h3 className="display-md home__feature-heading">
                See every deal. Know where it stands.
              </h3>
              <p className="text-md home__feature-desc">
                Kanban or table view with running dollar totals per stage, stale
                deal alerts, and commission estimates.
              </p>
              <div className="screenshot">
                <Image
                  src="/images/Opportunities-Kanban.png"
                  alt="Deal Pipeline"
                  width={1400}
                  height={800}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTELLIGENCE LAYER — DARK SECTION ===== */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label-mono" style={{ color: "var(--a400)" }}>
              Intelligence Layer
            </div>
            <h2 className="display-lg home__section-header-title">
              From raw PDF to funded deal.
              <br />
              Every signal extracted. Every lender scored.
            </h2>
          </div>
          <div className="home__intelligence-grid">
            {[
              {
                num: "01",
                title: "Clarity",
                desc: "Upload bank statements. AI extracts 20+ risk signals — revenue trends, NSF patterns, stacking, DSCR — in under 120 seconds.",
              },
              {
                num: "02",
                title: "Match",
                desc: "Three-layer scoring engine ranks every lender by expected yield. Global data, your relationships, and buybox fit.",
              },
              {
                num: "03",
                title: "Funding",
                desc: "Submit to matched lenders, track responses, and close. Every outcome feeds back into the model.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${i + 1} home__intelligence-step`}
              >
                <span className="mono">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="section home__stats">
        <div className="container">
          <div className="home__stats-grid reveal">
            {[
              { num: "~120s", label: "PDF to Scored Intelligence" },
              { num: "20+", label: "Risk Signals Extracted" },
              { num: "3x", label: "Faster Deal Preparation" },
              { num: "97%", label: "Extraction Accuracy" },
            ].map((s) => (
              <div key={s.label} className="home__stats-item">
                <div className="display-stat">{s.num}</div>
                <div className="label-mono">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENTO SHOWCASE ===== */}
      <BentoShowcase />

      {/* ===== UNDERWRITER'S NOTE ===== */}
      <section className="section">
        <div className="container">
          <div className="grid-feature reveal">
            <div>
              <div className="label-mono home__feature-label">
                Transparent AI
              </div>
              <h2 className="display-lg">
                Every recommendation
                <br />
                comes with a reason.
              </h2>
              <p className="text-lg" style={{ marginTop: 12 }}>
                YieldStream generates a human-readable Underwriter&apos;s Note
                for every match — explaining the structural logic behind the
                score. No black boxes.
              </p>
              <div className="home__note-section">
                <Link href="/underwriting" className="btn btn-outline">
                  Deep-dive: Underwriting →
                </Link>
              </div>
            </div>
            <div className="home__note-card">
              <div className="home__note-card-glow" />
              <div className="mono home__note-label">
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
                <strong style={{ color: "var(--a300)" }}>
                  <span className="mono">$95K/mo</span>
                </strong>{" "}
                with only{" "}
                <strong style={{ color: "var(--a300)" }}>
                  <span className="mono">8.1%</span> stacking
                </strong>
                . 1 NSF was a timing issue (vendor payment). Well within
                tolerance for most lenders.{" "}
                <strong style={{ color: "var(--a300)" }}>
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

      <CTABanner
        headline="Start closing smarter."
        sub="Join brokers automating their submission desk with AI-powered lender matching."
        primaryText="Get Started"
        primaryHref="/pricing"
        secondaryText="Schedule a Demo"
        secondaryHref="/contact"
      />
    </>
  );
}
