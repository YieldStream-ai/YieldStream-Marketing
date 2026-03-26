"use client";

import Link from "next/link";
import Image from "next/image";
import { useReveal } from "../components/useReveal";
import CTABanner from "../components/CTABanner";
import "./features.scss";

export default function FeaturesPage() {
  useReveal();

  const features = [
    {
      num: "01",
      label: "AI LENDER MATCHING",
      title: "Every lender scored. Every match explained.",
      desc: "The three-layer scoring engine weighs global performance data, your relationship history, and merchant-to-buybox attribute matching — then ranks every lender by expected commission, not just approval probability.",
      bullets: [
        "Composite scores from 0–100 with confidence intervals",
        "Relationship history weighted at 50% — your moat, quantified",
        "Time-decay ensures stale data never pollutes matches",
        "Sort by best match, best yield, or fastest funding speed",
      ],
      image: "/images/Underwriting-Intelligence.jpg",
      link: "/intelligence",
      linkText: "How the scoring engine works →",
    },
    {
      num: "02",
      label: "OFFER COMPARISON",
      title: "Compare every offer. Recommend the best one.",
      desc: "When offers come back, YieldStream scores each one across advance amount, factor rate, term, daily remittance, total payback, net funding, commission, and buy rate.",
      bullets: [
        "Side-by-side comparison across all economic terms",
        "Automated offer scoring with transparent reasoning breakdown",
        "Color-coded indicators highlight best-in-class metrics",
        'One-click "Send to Merchant" with formatted comparison',
      ],
      image: "/images/Underwriting-Approval-Comparison.png",
      reverse: true,
    },
    {
      num: "03",
      label: "AI BANK STATEMENT ANALYSIS",
      title: "Upload a PDF. Get an underwrite in minutes.",
      desc: "Drop a bank statement — the OCR pipeline extracts revenue, NSF patterns, stacking signals, daily balances, and 20+ risk indicators. Every signal feeds directly into lender matching.",
      bullets: [
        "OCR with 97%+ extraction accuracy",
        "AI enrichment for risk signal detection",
        "Automatic revenue trend and NSF pattern analysis",
        "Merchant upload portal for direct document collection",
      ],
      image: "/images/Document-Vault.png",
      link: "/underwriting",
      linkText: "Deep-dive: AI Underwriting →",
    },
    {
      num: "04",
      label: "DEAL PIPELINE",
      title: "See every deal. Know exactly where it stands.",
      desc: "Kanban board or table view — your choice. Every deal flows through Intake → Underwriting → Ready to Submit → Out to Lenders → Offers Received → Contract Sent → Funded.",
      bullets: [
        "Drag-and-drop Kanban with running dollar totals per stage",
        "Underwriter's Notes visible at a glance in table view",
        "Stale deal alerts flag merchants stuck in pipeline",
        "Commission estimates update in real-time as offers arrive",
      ],
      image: "/images/Opportunities-Kanban.png",
      reverse: true,
    },
    {
      num: "05",
      label: "COMPLETE AUDIT TRAIL",
      title: "Every action logged. Every decision traceable.",
      desc: "Notes, calls, lender responses, system events — everything that happens on a deal is timestamped and attributed. The audit log is append-only and tamper-proof.",
      bullets: [
        "Filterable by type: submissions, lender responses, notes, calls",
        "System events track AI scoring, OCR, and enrichment",
        "Append-only log that cannot be edited or deleted",
        "Export-ready for GDPR/CCPA compliance requests",
      ],
      image: "/images/Notes-Activities.png",
      link: "/security",
      linkText: "Security & compliance details →",
    },
    {
      num: "06",
      label: "LENDER REGISTRY",
      title: "Your entire lender network. Always current.",
      desc: "Track every lender's minimum FICO, revenue requirements, max positions, and state restrictions in one place. Status indicators show when buybox data needs refreshing.",
      bullets: [
        "13+ lender fields including FICO, revenue, position limits",
        '"Fresh" / "Needs Update" status badges per lender',
        "State restriction tracking with badge indicators",
        "One-click add new lenders as your network grows",
      ],
      image: "/images/Lender-Registry.png",
      reverse: true,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="features__hero">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Platform Features</div>
            <h1 className="display-xl features__hero-title">
              Every tool a broker needs.
              <br />
              Nothing they don't.
            </h1>
            <p className="text-lg features__hero-sub">
              Six core capabilities that replace spreadsheets, gut feel, and
              manual underwriting with data-driven intelligence that compounds
              with every deal.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="section">
        <div className="container">
          {features.map((f, i) => (
            <div
              key={i}
              className={`grid-feature reveal features__block ${i === features.length - 1 ? "features__block--last" : ""}`}
            >
              <div className={f.reverse ? "features__block-order" : ""}>
                <div className="label features__label">{f.label}</div>
                <h2 className="display-md features__heading">{f.title}</h2>
                <p className="text-md features__desc">{f.desc}</p>
                <ul
                  className="features__bullets"
                  style={{ marginBottom: f.link ? 20 : 0 }}
                >
                  {f.bullets.map((b, j) => (
                    <li key={j} className="features__bullet">
                      <span className="features__bullet-check">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                {f.link && (
                  <Link href={f.link} className="btn btn-outline btn-sm">
                    {f.linkText}
                  </Link>
                )}
              </div>
              <div
                className={`screenshot screenshot-elevated ${f.reverse ? "features__block-order-reverse" : ""}`}
              >
                <Image src={f.image} alt={f.title} width={1400} height={800} priority />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional capabilities */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Also Included</div>
            <h2 className="display-lg features__section-title">
              And everything else you'd expect.
            </h2>
          </div>
          <div className="grid-4">
            {[
              {
                icon: "🔄",
                title: "Renewal Forecasting",
                desc: "Daily alerts 60 days before 50% paydown — the optimal renewal window.",
              },
              {
                icon: "📦",
                title: "Deal Package Generation",
                desc: "PDF deal packages with mailto drafts for lender submission.",
              },
              {
                icon: "🔗",
                title: "Merchant Upload Portal",
                desc: "Token-gated upload links for merchants to submit docs directly.",
              },
              {
                icon: "📊",
                title: "Analytics Dashboard",
                desc: "Portfolio, Industry, Lender Intel, and AI Predictions — four purpose-built views.",
              },
              {
                icon: "👥",
                title: "Team Management",
                desc: "Owner, Admin, Rep roles with granular permission controls.",
              },
              {
                icon: "🔔",
                title: "Smart Notifications",
                desc: "Real-time alerts for offers, expirations, and status changes.",
              },
              {
                icon: "📱",
                title: "Daily Queue",
                desc: "Smart follow-up routing with LRU sorting. No merchant falls through the cracks.",
              },
              {
                icon: "⚡",
                title: "Onboarding Wizard",
                desc: "Guided setup reduces time-to-value. Upload lenders, invite team, run first deal.",
              },
            ].map((cap, i) => (
              <div
                key={i}
                className={`card reveal reveal-delay-${(i % 4) + 1} features__card`}
              >
                <div className="features__card-icon">{cap.icon}</div>
                <h3 className="features__card-title">{cap.title}</h3>
                <p className="text-sm">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="See it in action."
        sub="Run your first AI-scored deal in under 10 minutes. 30-day money-back guarantee."
      />
    </>
  );
}
