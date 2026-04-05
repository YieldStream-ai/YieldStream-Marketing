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
      image: "/images/Underwriting-Intelligence.png",
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
      label: "SUBMISSION HISTORY",
      title: "Full deal history. One click from any merchant.",
      desc: "Every submission, every lender response, every offer — organized under a single merchant record. Pull-through rate, offer rate, and funding speed update in real time so you always know where a deal stands and how a merchant has performed across past opportunities.",
      bullets: [
        "Complete lender-by-lender breakdown with factor, term, commission, and net",
        "Filter by active, funded, or declined to find any deal instantly",
        "KPI strip tracks pull-through, offer rate, and avg days to fund per merchant",
        "Expandable rows reveal every approval, counter-offer, and expiration date",
      ],
      image: "/images/Submissions.png",
    },
    {
      num: "06",
      label: "NOTES & ACTIVITY LOG",
      title: "Every conversation tracked. Nothing falls through.",
      desc: "YieldStream logs every call, voicemail, and note against the merchant record — building a complete contact history your whole team can see. No more sticky notes or \"did anyone call them back?\"",
      bullets: [
        "Call outcomes auto-logged — connected, voicemail, no answer, callback",
        "Timestamped notes with rep attribution",
        "Activity timeline shared across your entire ISO",
        "Follow-up dates surface overdue outreach automatically",
      ],
      image: "/images/Activities.png",
      reverse: true,
      linkText: "See the activity timeline →",
    },
    {
      num: "07",
      label: "NOTES",
      title: "Context that sticks to every merchant.",
      desc: "Pin internal notes, call summaries, and deal context directly to the merchant record. Every note is timestamped and attributed — so your whole team sees the full picture before picking up the phone.",
      bullets: [
        "Pin notes to merchants, deals, or submissions",
        "Timestamped with rep name for full accountability",
        "Searchable across your entire portfolio",
        "Visible inline on the outreach queue for quick context",
      ],
      image: "/images/Notes.png",
    },
    {
      num: "08",
      label: "OUTREACH QUEUE",
      title: "A smart call list that knows who to dial next.",
      desc: "YieldStream builds a prioritized outreach queue from your merchant pipeline — surfacing overdue follow-ups, new leads, renewal candidates, and cold re-engages so reps stop guessing and start closing.",
      bullets: [
        "Auto-prioritized by overdue, due today, new lead, and cold status",
        "Click-to-copy phone numbers with one-tap call logging",
        "Renewal candidates flagged when funded deals approach payoff",
        "Per-rep queues — every broker sees only their book",
      ],
      image: "/images/Outreach.png",
      reverse: true,
      linkText: "How the outreach queue works →",
    },
    {
      num: "09",
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
              Nine core capabilities that replace spreadsheets, gut feel, and
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
                      <span className="features__bullet-check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span>
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
                className={`screenshot ${f.reverse ? "features__block-order-reverse" : ""}`}
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
                icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" /></svg>),
                title: "Renewal Forecasting",
                desc: "Daily alerts 60 days before 50% paydown — the optimal renewal window.",
              },
              {
                icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>),
                title: "Deal Package Generation",
                desc: "PDF deal packages with mailto drafts for lender submission.",
              },
              {
                icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>),
                title: "Merchant Upload Portal",
                desc: "Token-gated upload links for merchants to submit docs directly.",
              },
              {
                icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>),
                title: "Analytics Dashboard",
                desc: "Portfolio, Industry, Lender Intel, and AI Predictions — four purpose-built views.",
              },
              {
                icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>),
                title: "Team Management",
                desc: "Owner, Admin, Rep roles with granular permission controls.",
              },
              {
                icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" /></svg>),
                title: "Smart Notifications",
                desc: "Real-time alerts for offers, expirations, and status changes.",
              },
              {
                icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>),
                title: "Daily Queue",
                desc: "Smart follow-up routing with LRU sorting. No merchant falls through the cracks.",
              },
              {
                icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>),
                title: "Decline Intelligence",
                desc: "Every declined deal makes your next submission smarter. Auto-adjusting lender scores from outcome data.",
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
