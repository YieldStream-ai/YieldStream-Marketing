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
                icon: "🧠",
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
