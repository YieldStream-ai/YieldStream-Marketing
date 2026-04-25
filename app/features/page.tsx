"use client";

import Link from "next/link";
import Image from "next/image";
import { useReveal } from "../components/useReveal";
import CTABanner from "../components/CTABanner/CTABanner";
import {
  BankStatementMock,
  DealPipelineMock,
  SubmissionHistoryMock,
  NotesActivityMock,
  OutreachQueueMock,
  LenderRegistryMock,
  EmailMock,
  NotificationsMock,
  RenewalsMock,
  CSVImportMock,
} from "./mocks";
import "./features.scss";

/* Mock UI components are in ./mocks.tsx */

/* ── Page ── */

export default function FeaturesPage() {
  useReveal();

  const features = [
    {
      num: "01",
      label: "AI BANK STATEMENT ANALYSIS",
      title: "Upload a PDF. Get an underwrite in minutes.",
      desc: "Drop a bank statement — the OCR pipeline extracts revenue, NSF patterns, stacking signals, daily balances, and 20+ risk indicators. Every signal feeds directly into lender matching.",
      bullets: [
        "OCR with 97%+ extraction accuracy",
        "AI enrichment for risk signal detection",
        "Automatic revenue trend and NSF pattern analysis",
        "Merchant upload portal for direct document collection",
      ],
      mock: <BankStatementMock />,
      link: "/underwriting",
      linkText: "Deep-dive: AI Underwriting →",
    },
    {
      num: "02",
      label: "DEAL PIPELINE",
      title: "Pipeline stages that match how you actually fund.",
      desc: "Define your own stages, set per-stage rules, and choose Kanban or table view — the pipeline adapts to your workflow, not the other way around. Every stage tracks running dollar totals, commission estimates, and deal velocity in real time.",
      bullets: [
        "Define custom stages that mirror your actual funding workflow",
        "Drag-and-drop Kanban with running dollar totals per stage",
        "Stale deal alerts flag merchants stuck in pipeline",
        "Commission estimates update in real-time as offers arrive",
        "Per-stage rules trigger automations as deals progress",
      ],
      mock: <DealPipelineMock />,
      reverse: true,
    },
    {
      num: "03",
      label: "SUBMISSION HISTORY",
      title: "Full deal history. One click from any merchant.",
      desc: "Every submission, every lender response, every offer — organized under a single merchant record. Pull-through rate, offer rate, and funding speed update in real time so you always know where a deal stands and how a merchant has performed across past opportunities.",
      bullets: [
        "Complete lender-by-lender breakdown with factor, term, commission, and net",
        "Filter by active, funded, or declined to find any deal instantly",
        "KPI strip tracks pull-through, offer rate, and avg days to fund per merchant",
        "Expandable rows reveal every approval, counter-offer, and expiration date",
      ],
      mock: <SubmissionHistoryMock />,
    },
    {
      num: "04",
      label: "NOTES & ACTIVITY LOG",
      title: "Every conversation tracked. Nothing falls through.",
      desc: "YieldStream logs every call, voicemail, and note against the merchant record — building a complete contact history your whole team can see. Pin context to any merchant, deal, or submission and find it instantly when you need it.",
      bullets: [
        "Call outcomes auto-logged — connected, voicemail, no answer, callback",
        "Timestamped notes with rep attribution on a shared timeline",
        "Pin notes to merchants, deals, or submissions — searchable across your portfolio",
        "Visible inline on the outreach queue for quick context",
        "Follow-up dates surface overdue outreach automatically",
      ],
      mock: <NotesActivityMock />,
      reverse: true,
    },
    {
      num: "05",
      label: "OUTREACH QUEUE",
      title: "A smart call list that knows who to dial next.",
      desc: "YieldStream builds a prioritized outreach queue from your merchant pipeline — surfacing overdue follow-ups, new leads, renewal candidates, and cold re-engages so reps stop guessing and start closing.",
      bullets: [
        "Auto-prioritized by overdue, due today, new lead, and cold status",
        "Click-to-copy phone numbers with one-tap call logging",
        "Renewal candidates flagged when funded deals approach payoff",
        "Per-rep queues — every broker sees only their book",
      ],
      mock: <OutreachQueueMock />,
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
      mock: <LenderRegistryMock />,
      reverse: true,
    },
    {
      num: "07",
      label: "EMAIL INTEGRATION",
      title: "Send from your inbox. Replies land on the record.",
      desc: "Native Gmail and Outlook connection via OAuth. Send lender submissions, merchant outreach, and follow-ups from your own address — replies thread back to the merchant record automatically. No SMTP setup, no copy-paste, full deliverability.",
      bullets: [
        "One-click OAuth connect for Gmail and Outlook",
        "Send lender submissions from your actual email address",
        "Replies auto-thread to the merchant record",
        "Full deliverability — no SPF/DKIM headaches",
      ],
      mock: <EmailMock />,
    },
    {
      num: "08",
      label: "NOTIFICATIONS",
      title: "Every signal delivered. Nothing buried in noise.",
      desc: "Real-time notification infrastructure across offers, expirations, status changes, stale deals, renewal windows, and team mentions. In-app and email delivery with per-user preference controls.",
      bullets: [
        "Real-time alerts for offers, expirations, and status changes",
        "Stale deal and renewal window notifications",
        "Team mentions and @-tagging across records",
        "In-app + email delivery with per-user preference controls",
      ],
      mock: <NotificationsMock />,
      reverse: true,
    },
    {
      num: "09",
      label: "RENEWALS TRACKING",
      title: "Your renewal book, surfaced before competitors call.",
      desc: "A dedicated renewals table surfaces every funded deal approaching paydown, sortable by paydown percentage, days to renewal window, and merchant value. Paired with automated alerts so you never miss a window.",
      bullets: [
        "Dedicated renewals table with every funded deal approaching paydown",
        "Sort by paydown %, days to renewal window, or merchant value",
        "Automated alerts 60 days before the optimal renewal window",
        "Revenue opportunity estimates per renewal candidate",
      ],
      mock: <RenewalsMock />,
    },
    {
      num: "10",
      label: "DATA IMPORT",
      title: "Migrate in minutes. Not months.",
      desc: "Bulk merchant import via CSV with field mapping, deduplication, and validation. Move from spreadsheets, CRMs, or other ISO platforms in one upload.",
      bullets: [
        "CSV upload with automatic field mapping and preview",
        "Built-in deduplication catches existing merchants",
        "Validation flags missing or malformed data before import",
        "API integration roadmap for CRM and platform sync",
      ],
      mock: <CSVImportMock />,
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
              Nothing they don&apos;t.
            </h1>
            <p className="text-lg features__hero-sub">
              Ten core capabilities that replace spreadsheets, gut feel, and
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
                      <span className="features__bullet-check">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
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
                {f.mock ? (
                  f.mock
                ) : (
                  <Image
                    src={(f as { image?: string }).image ?? ""}
                    alt={f.title}
                    width={1400}
                    height={800}
                    priority
                  />
                )}
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
              And everything else you&apos;d expect.
            </h2>
          </div>
          <div className="grid-4">
            {[
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0022 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                ),
                title: "Deal Package Generation",
                desc: "PDF deal packages with mailto drafts for lender submission.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                ),
                title: "Merchant Upload Portal",
                desc: "Token-gated upload links for merchants to submit docs directly.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87" />
                    <path d="M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
                title: "Team Management",
                desc: "Owner, Admin, Rep roles with granular permission controls.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" />
                  </svg>
                ),
                title: "Daily Queue",
                desc: "Smart follow-up routing with LRU sorting. No merchant falls through the cracks.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Decline Intelligence",
                desc: "Every declined deal makes your next submission smarter. Auto-adjusting lender scores from outcome data.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" y1="22" x2="4" y2="15" />
                  </svg>
                ),
                title: "API Access",
                desc: "RESTful API for custom integrations, reporting pipelines, and workflow automation.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                ),
                title: "Audit Log",
                desc: "Timestamped record of every action — who changed what, and when.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                ),
                title: "Role-Based Permissions",
                desc: "Granular access controls per role — restrict data, features, and actions by team level.",
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
