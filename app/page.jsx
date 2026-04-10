"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useReveal } from "./components/useReveal";
import CTABanner from "./components/CTABanner";
import BentoShowcase from "./components/BentoShowcase";
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
import "./page.scss";

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

            {/* Hero flow diagram */}
            <div className="home__hero-visual reveal reveal-delay-2">
              <svg width="100%" viewBox="0 0 720 440" xmlns="http://www.w3.org/2000/svg">
                <title>YieldStream intelligence system</title>
                <style>{`
                  @keyframes pulse1 { 0%,100%{opacity:.08} 50%{opacity:.2} }
                  @keyframes pulse2 { 0%,100%{opacity:.06} 50%{opacity:.15} }
                  @keyframes flowDash { to { stroke-dashoffset: -48; } }
                  @keyframes nodeGlow { 0%,100%{opacity:.4} 50%{opacity:1} }
                  @keyframes fadeFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
                  @keyframes ringPulse { 0%,100%{r:38;opacity:.08} 50%{r:50;opacity:.04} }
                  @keyframes dataFlow { 0%{offset-distance:0%} 100%{offset-distance:100%} }
                  @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
                `}</style>
                <defs>
                  <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </marker>
                  <radialGradient id="cg1"><stop offset="0%" stopColor="#047987" stopOpacity=".12"/><stop offset="100%" stopColor="#047987" stopOpacity="0"/></radialGradient>
                  <radialGradient id="cg2"><stop offset="0%" stopColor="#14B8A6" stopOpacity=".08"/><stop offset="100%" stopColor="#14B8A6" stopOpacity="0"/></radialGradient>
                </defs>

                {/* Background glow rings */}
                <circle cx="340" cy="200" r="140" fill="url(#cg1)" style={{animation:"pulse1 4.5s ease-in-out infinite"}}/>
                <circle cx="340" cy="200" r="90" fill="url(#cg2)" style={{animation:"pulse2 3.5s ease-in-out infinite .5s"}}/>
                <circle cx="340" cy="200" r="52" fill="none" stroke="#047987" strokeWidth=".5" opacity=".08" style={{animation:"ringPulse 4s ease-in-out infinite"}}/>

                {/* Orbital rings */}
                <ellipse cx="340" cy="200" rx="150" ry="150" fill="none" stroke="#047987" strokeWidth=".4" opacity=".06" strokeDasharray="4 8"/>
                <ellipse cx="340" cy="200" rx="100" ry="100" fill="none" stroke="#14B8A6" strokeWidth=".3" opacity=".05" strokeDasharray="3 6"/>

                {/* LEFT: Input documents */}
                <g style={{animation:"fadeFloat 5s ease-in-out infinite"}}>
                  <rect x="30" y="100" width="60" height="72" rx="5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth=".8"/>
                  <line x1="40" y1="118" x2="80" y2="118" stroke="#047987" strokeWidth="2.5" opacity=".6" strokeLinecap="round"/>
                  <line x1="40" y1="128" x2="74" y2="128" stroke="#CBD5E1" strokeWidth="1.2" opacity=".6" strokeLinecap="round"/>
                  <line x1="40" y1="136" x2="78" y2="136" stroke="#CBD5E1" strokeWidth="1.2" opacity=".5" strokeLinecap="round"/>
                  <line x1="40" y1="144" x2="70" y2="144" stroke="#CBD5E1" strokeWidth="1.2" opacity=".4" strokeLinecap="round"/>
                  <line x1="40" y1="152" x2="76" y2="152" stroke="#CBD5E1" strokeWidth="1.2" opacity=".35" strokeLinecap="round"/>
                  <text x="60" y="188" textAnchor="middle" fill="#FFFFFF" style={{fontSize:"10px",fontWeight:500,fontFamily:"system-ui,sans-serif"}}>Bank stmt</text>
                </g>

                <g style={{animation:"fadeFloat 5.5s ease-in-out infinite .8s"}}>
                  <rect x="44" y="230" width="60" height="72" rx="5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth=".8"/>
                  <rect x="54" y="244" width="22" height="14" rx="3" fill="#047987" opacity=".12"/>
                  <line x1="54" y1="268" x2="94" y2="268" stroke="#CBD5E1" strokeWidth="1.2" opacity=".6" strokeLinecap="round"/>
                  <line x1="54" y1="276" x2="88" y2="276" stroke="#CBD5E1" strokeWidth="1.2" opacity=".45" strokeLinecap="round"/>
                  <line x1="54" y1="284" x2="82" y2="284" stroke="#CBD5E1" strokeWidth="1.2" opacity=".35" strokeLinecap="round"/>
                  <text x="74" y="318" textAnchor="middle" fill="#FFFFFF" style={{fontSize:"10px",fontWeight:500,fontFamily:"system-ui,sans-serif"}}>Application</text>
                </g>

                <g style={{animation:"fadeFloat 6s ease-in-out infinite 1.4s"}}>
                  <rect x="16" y="340" width="52" height="60" rx="5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth=".8"/>
                  <line x1="26" y1="356" x2="58" y2="356" stroke="#047987" strokeWidth="1.8" opacity=".45" strokeLinecap="round"/>
                  <line x1="26" y1="364" x2="54" y2="364" stroke="#CBD5E1" strokeWidth="1.2" opacity=".4" strokeLinecap="round"/>
                  <line x1="26" y1="372" x2="50" y2="372" stroke="#CBD5E1" strokeWidth="1.2" opacity=".3" strokeLinecap="round"/>
                  <text x="42" y="414" textAnchor="middle" fill="#FFFFFF" style={{fontSize:"10px",fontWeight:500,fontFamily:"system-ui,sans-serif"}}>Tax return</text>
                </g>

                {/* Flow lines: docs to center */}
                <path d="M90 136 C160 136, 200 178, 275 193" fill="none" stroke="#047987" strokeWidth="1.5" opacity=".3" strokeDasharray="4 4" style={{animation:"flowDash 1.2s linear infinite"}}/>
                <path d="M104 266 C170 266, 210 228, 275 207" fill="none" stroke="#047987" strokeWidth="1.5" opacity=".25" strokeDasharray="4 4" style={{animation:"flowDash 1.5s linear infinite .3s"}}/>
                <path d="M68 365 C140 355, 190 260, 275 215" fill="none" stroke="#047987" strokeWidth="1" opacity=".2" strokeDasharray="4 4" style={{animation:"flowDash 1.8s linear infinite .6s"}}/>

                {/* Data particles left */}
                <circle r="3.5" fill="#047987" opacity=".85" style={{offsetPath:"path('M90 136 C160 136, 200 178, 275 193')",animation:"dataFlow 1.8s linear infinite"}}/>
                <circle r="3" fill="#14B8A6" opacity=".75" style={{offsetPath:"path('M104 266 C170 266, 210 228, 275 207')",animation:"dataFlow 2.2s linear infinite .4s"}}/>
                <circle r="2.5" fill="#047987" opacity=".65" style={{offsetPath:"path('M68 365 C140 355, 190 260, 275 215')",animation:"dataFlow 2.6s linear infinite .8s"}}/>

                {/* CENTER: AI core */}
                <polygon points="340,148 386,172 386,228 340,252 294,228 294,172" fill="#FFFFFF" stroke="#047987" strokeWidth="1.5"/>
                <polygon points="340,158 378,178 378,222 340,242 302,222 302,178" fill="none" stroke="#14B8A6" strokeWidth=".5" opacity=".4"/>

                {/* Inner circuitry */}
                <line x1="318" y1="186" x2="340" y2="198" stroke="#047987" strokeWidth="1.2" opacity=".5"/>
                <line x1="340" y1="198" x2="362" y2="186" stroke="#047987" strokeWidth="1.2" opacity=".5"/>
                <line x1="340" y1="198" x2="340" y2="222" stroke="#14B8A6" strokeWidth="1.2" opacity=".4"/>
                <line x1="322" y1="214" x2="358" y2="214" stroke="#047987" strokeWidth=".8" opacity=".25"/>
                <line x1="314" y1="200" x2="366" y2="200" stroke="#14B8A6" strokeWidth=".5" opacity=".18"/>
                <circle cx="340" cy="198" r="4" fill="#047987" style={{animation:"nodeGlow 2s ease-in-out infinite"}}/>
                <circle cx="318" cy="186" r="2.5" fill="#14B8A6" opacity=".7"/>
                <circle cx="362" cy="186" r="2.5" fill="#14B8A6" opacity=".7"/>
                <circle cx="340" cy="222" r="2.5" fill="#047987" opacity=".6"/>
                <circle cx="322" cy="214" r="1.5" fill="#14B8A6" opacity=".4"/>
                <circle cx="358" cy="214" r="1.5" fill="#14B8A6" opacity=".4"/>

                {/* Score badge */}
                <g style={{animation:"fadeFloat 3.5s ease-in-out infinite .2s"}}>
                  <rect x="313" y="112" width="54" height="28" rx="14" fill="#047987"/>
                  <text x="340" y="129" textAnchor="middle" dominantBaseline="central" fill="#FFFFFF" style={{fontSize:"14px",fontWeight:500,fontFamily:"monospace"}}>100</text>
                </g>

                {/* CLEAN badge */}
                <g style={{animation:"fadeFloat 4s ease-in-out infinite 1s"}}>
                  <rect x="374" y="118" width="42" height="18" rx="9" fill="#E6F7F5" stroke="#14B8A6" strokeWidth=".5"/>
                  <text x="395" y="130" textAnchor="middle" dominantBaseline="central" fill="#047987" style={{fontSize:"8px",fontWeight:500,letterSpacing:".04em",fontFamily:"system-ui,sans-serif"}}>CLEAN</text>
                </g>

                {/* Orbiting dots */}
                <circle cx="248" cy="158" r="2" fill="#14B8A6" opacity=".3" style={{animation:"nodeGlow 3s ease-in-out infinite .5s"}}/>
                <circle cx="432" cy="162" r="1.5" fill="#047987" opacity=".25" style={{animation:"nodeGlow 2.5s ease-in-out infinite 1s"}}/>
                <circle cx="270" cy="268" r="1.5" fill="#14B8A6" opacity=".2" style={{animation:"nodeGlow 4s ease-in-out infinite 1.5s"}}/>
                <circle cx="412" cy="258" r="2" fill="#047987" opacity=".25" style={{animation:"nodeGlow 3.5s ease-in-out infinite .8s"}}/>
                <circle cx="300" cy="280" r="1" fill="#14B8A6" opacity=".15"/>
                <circle cx="385" cy="145" r="1" fill="#047987" opacity=".15"/>
                <circle cx="240" cy="210" r="1.5" fill="#047987" opacity=".12"/>
                <circle cx="440" cy="230" r="1" fill="#14B8A6" opacity=".12"/>

                {/* Flow lines: center to right */}
                <path d="M410 182 C470 172, 500 130, 540 118" fill="none" stroke="#047987" strokeWidth="1.5" opacity=".3" strokeDasharray="4 4" style={{animation:"flowDash 1.3s linear infinite .2s"}}/>
                <path d="M410 200 C460 200, 500 200, 540 200" fill="none" stroke="#047987" strokeWidth="1.8" opacity=".35" strokeDasharray="4 4" style={{animation:"flowDash 1s linear infinite"}}/>
                <path d="M410 218 C470 228, 500 272, 540 282" fill="none" stroke="#047987" strokeWidth="1.2" opacity=".25" strokeDasharray="4 4" style={{animation:"flowDash 1.6s linear infinite .4s"}}/>
                <path d="M410 228 C480 260, 510 340, 548 352" fill="none" stroke="#047987" strokeWidth="1" opacity=".18" strokeDasharray="4 4" style={{animation:"flowDash 2s linear infinite .7s"}}/>

                {/* Particles right */}
                <circle r="3.5" fill="#047987" opacity=".85" style={{offsetPath:"path('M410 200 C460 200, 500 200, 540 200')",animation:"dataFlow 1.5s linear infinite .2s"}}/>
                <circle r="3" fill="#14B8A6" opacity=".7" style={{offsetPath:"path('M410 182 C470 172, 500 130, 540 118')",animation:"dataFlow 2s linear infinite"}}/>
                <circle r="2.5" fill="#047987" opacity=".6" style={{offsetPath:"path('M410 218 C470 228, 500 272, 540 282')",animation:"dataFlow 2.4s linear infinite .5s"}}/>

                {/* Lender 1: Top match */}
                <g style={{animation:"fadeFloat 4.5s ease-in-out infinite .3s"}}>
                  <rect x="544" y="90" width="148" height="56" rx="8" fill="#FFFFFF" stroke="#047987" strokeWidth="1"/>
                  <text x="560" y="112" fill="#0F172A" style={{fontSize:"12px",fontWeight:500,fontFamily:"system-ui,sans-serif"}}>Capital Plus</text>
                  <rect x="560" y="120" width="36" height="16" rx="8" fill="#E6F7F5"/>
                  <text x="578" y="131" textAnchor="middle" dominantBaseline="central" fill="#047987" style={{fontSize:"10px",fontWeight:500,fontFamily:"system-ui,sans-serif"}}>98%</text>
                  <text x="602" y="131" fill="#94A3B8" style={{fontSize:"10px",fontFamily:"system-ui,sans-serif"}}>match</text>
                  <circle cx="672" cy="118" r="9" fill="#047987" opacity=".08"/>
                  <text x="672" y="122" textAnchor="middle" dominantBaseline="central" fill="#047987" style={{fontSize:"9px",fontWeight:500,fontFamily:"system-ui,sans-serif"}}>1</text>
                </g>

                {/* Lender 2 */}
                <g style={{animation:"fadeFloat 5s ease-in-out infinite 1s"}}>
                  <rect x="548" y="174" width="144" height="52" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth=".8"/>
                  <text x="562" y="196" fill="#1E293B" style={{fontSize:"12px",fontWeight:500,fontFamily:"system-ui,sans-serif"}}>Apex Lending</text>
                  <rect x="562" y="204" width="36" height="16" rx="8" fill="#F0FDFA"/>
                  <text x="580" y="215" textAnchor="middle" dominantBaseline="central" fill="#047987" style={{fontSize:"10px",fontWeight:500,fontFamily:"system-ui,sans-serif"}}>84%</text>
                  <text x="604" y="215" fill="#94A3B8" style={{fontSize:"10px",fontFamily:"system-ui,sans-serif"}}>match</text>
                </g>

                {/* Lender 3 */}
                <g style={{animation:"fadeFloat 4s ease-in-out infinite 1.6s"}}>
                  <rect x="544" y="256" width="148" height="52" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth=".8"/>
                  <text x="560" y="278" fill="#1E293B" style={{fontSize:"12px",fontWeight:500,fontFamily:"system-ui,sans-serif"}}>Swift Capital</text>
                  <rect x="560" y="286" width="36" height="16" rx="8" fill="#F8FAFC"/>
                  <text x="578" y="297" textAnchor="middle" dominantBaseline="central" fill="#047987" style={{fontSize:"10px",fontWeight:500,fontFamily:"system-ui,sans-serif"}}>71%</text>
                  <text x="604" y="297" fill="#94A3B8" style={{fontSize:"10px",fontFamily:"system-ui,sans-serif"}}>match</text>
                </g>

                {/* Lender 4 (faded) */}
                <g style={{animation:"fadeFloat 5.5s ease-in-out infinite 2s"}} opacity=".45">
                  <rect x="552" y="332" width="140" height="48" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth=".5"/>
                  <text x="566" y="354" fill="#94A3B8" style={{fontSize:"11px",fontWeight:500,fontFamily:"system-ui,sans-serif"}}>BlueLine Fund</text>
                  <rect x="566" y="362" width="34" height="14" rx="7" fill="#F8FAFC"/>
                  <text x="583" y="371" textAnchor="middle" dominantBaseline="central" fill="#94A3B8" style={{fontSize:"9px",fontWeight:500,fontFamily:"system-ui,sans-serif"}}>62%</text>
                </g>

              </svg>
            </div>
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
