"use client";

import { useState, useRef } from "react";
import "./docs.scss";

const SIDEBAR_GROUPS = [
  {
    label: "Platform",
    items: [
      { id: "overview", label: "Overview" },
      { id: "engine", label: "Underwriting Engine" },
      { id: "scoring", label: "Three-Layer Scoring" },
    ],
  },
  {
    label: "Intelligence",
    items: [
      { id: "metrics", label: "Metric Definitions" },
      { id: "analytics", label: "Analytics Dashboard" },
      { id: "learning", label: "Outcome Learning Loop" },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { id: "security", label: "Security & Isolation" },
      { id: "access", label: "Access Control" },
    ],
  },
  {
    label: "Reference",
    items: [
      { id: "pricing", label: "Pricing" },
      { id: "glossary", label: "Glossary" },
    ],
  },
];

function Mono({ children }) {
  return <span className="docs-mono">{children}</span>;
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const mainRef = useRef(null);

  const showSection = (id) => {
    setActiveSection(id);
    if (mainRef.current) mainRef.current.scrollTop = 0;
  };

  return (
    <div className="docs-page">
      <div className="container" style={{ maxWidth: 1100 }}>
        <div className="docs-container">
          <aside className="docs-sidebar">
            <div className="docs-sidebar-hd">
              <div className="docs-logo">
                <div className="docs-logo-mark">
                  <svg viewBox="0 0 10 10" fill="none">
                    <path d="M5 1L1.5 5h2.5v4h2V5h2.5L5 1z" fill="white" />
                  </svg>
                </div>
                YieldStream
                <span className="docs-badge">Docs</span>
              </div>
            </div>
            {SIDEBAR_GROUPS.map((grp) => (
              <div key={grp.label}>
                <div className="docs-grp">{grp.label}</div>
                {grp.items.map((item) => (
                  <span
                    key={item.id}
                    className={`docs-nav-item ${activeSection === item.id ? "on" : ""}`}
                    onClick={() => showSection(item.id)}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            ))}
          </aside>

          <div className="docs-main" ref={mainRef} id="docs-main">
            {/* OVERVIEW */}
            <section
              className={`docs-section ${activeSection === "overview" ? "vis" : ""}`}
              id="sec-overview"
            >
              <div className="docs-pg-lbl">Introduction</div>
              <div className="docs-h1">Platform Overview</div>
              <div className="docs-lead">
                YieldStream is a Submission Intelligence Platform for MCA ISO
                owners. It replaces gut-feel lender routing with a deterministic
                scoring engine that learns from every funded and declined deal
                your organization processes.
              </div>

              <div className="docs-h2">What YieldStream does</div>
              <div className="docs-p">
                The platform acts as a Digital Head of Submissions — ingesting
                bank statement PDFs, auto-underwriting merchants through a
                multi-stage AI pipeline, scoring every lender in your network
                against each deal, and returning a ranked recommendation set
                weighted by your ISO&apos;s specific pull-through history with
                each lender.
              </div>
              <div className="docs-p">
                Where legacy CRMs store deal history, YieldStream interprets it.
                Every funded and declined outcome feeds back into the model,
                making predictions more accurate over time.
              </div>

              <div className="docs-h2">Architecture</div>
              <div className="docs-table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <th>Layer</th>
                      <th>Technology</th>
                    </tr>
                    <tr>
                      <td>Frontend</td>
                      <td>
                        Next.js 15, SCSS/BEM design system, shadcn/ui
                      </td>
                    </tr>
                    <tr>
                      <td>Backend</td>
                      <td>
                        Supabase (PostgreSQL + Auth + Storage), 19 API routes,
                        TypeScript strict
                      </td>
                    </tr>
                    <tr>
                      <td>Intelligence</td>
                      <td>
                        Gemini 1.5 Flash via Inngest, three-layer scoring
                        engine, 24h prediction cache
                      </td>
                    </tr>
                    <tr>
                      <td>Background jobs</td>
                      <td>
                        13 Inngest functions — OCR, AI enrichment, predictions,
                        outcomes, renewals
                      </td>
                    </tr>
                    <tr>
                      <td>Security</td>
                      <td>
                        RLS on 18+ tables, RBAC (Owner/Admin/Rep), AES-256
                        document storage
                      </td>
                    </tr>
                    <tr>
                      <td>Deployment</td>
                      <td>Vercel (app.yieldstream.ai), Cloudflare DNS</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="docs-h2">Core capabilities</div>
              <div className="docs-table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <th>Capability</th>
                      <th>Description</th>
                    </tr>
                    <tr>
                      <td>AI Bank Statement Analysis</td>
                      <td>
                        LlamaParse OCR + Gemini 1.5 Flash enrichment. 20+ risk
                        signals from uploaded PDFs including revenue trends,
                        NSF patterns, stacking detection, and anomaly flags.
                      </td>
                    </tr>
                    <tr>
                      <td>Three-Layer Lender Scoring</td>
                      <td>
                        Global market signals (25%) + your ISO&apos;s
                        relationship history (50%) + merchant-to-buy-box
                        attribute matching (25%). Composite score 0–100.
                      </td>
                    </tr>
                    <tr>
                      <td>Outcome Learning Loop</td>
                      <td>
                        Every funded or declined deal feeds back into the model.
                        Decline penalties auto-expire after 30 days. Funded
                        deals strengthen relationship scores.
                      </td>
                    </tr>
                    <tr>
                      <td>Renewal Forecasting</td>
                      <td>
                        Daily cron dispatches alerts 60 days before each funded
                        merchant&apos;s estimated 50% paydown — the optimal
                        MCA renewal window.
                      </td>
                    </tr>
                    <tr>
                      <td>Multi-Tenant Isolation</td>
                      <td>
                        Row-Level Security on every data table. Your lender
                        relationships and submission history are never visible
                        to other ISOs on the platform.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ENGINE */}
            <section
              className={`docs-section ${activeSection === "engine" ? "vis" : ""}`}
              id="sec-engine"
            >
              <div className="docs-pg-lbl">Underwriting Engine</div>
              <div className="docs-h1">Document Ingestion & AI Enrichment</div>
              <div className="docs-lead">
                Bank statements trigger a five-stage pipeline from upload to
                scored risk signals. All AI inference is asynchronous — it runs
                via Inngest background jobs and never blocks the interface.
              </div>

              <div className="docs-steps">
                <div className="docs-step">
                  <div className="docs-step-sp">
                    <div className="docs-step-dot">1</div>
                    <div className="docs-step-ln" />
                  </div>
                  <div className="docs-step-body">
                    <div className="docs-step-t">File validation</div>
                    <div className="docs-step-d">
                      Client-side and server-side checks enforce allowed types
                      (PDF, JPG, PNG) and a 50 MB size limit. Executable files
                      are rejected at both layers.
                    </div>
                  </div>
                </div>
                <div className="docs-step">
                  <div className="docs-step-sp">
                    <div className="docs-step-dot">2</div>
                    <div className="docs-step-ln" />
                  </div>
                  <div className="docs-step-body">
                    <div className="docs-step-t">Inngest event dispatch</div>
                    <div className="docs-step-d">
                      Successful upload emits{" "}
                      <Mono>document/bank-statement.uploaded</Mono> to the event
                      bus with document ID and org_id.
                    </div>
                  </div>
                </div>
                <div className="docs-step">
                  <div className="docs-step-sp">
                    <div className="docs-step-dot">3</div>
                    <div className="docs-step-ln" />
                  </div>
                  <div className="docs-step-body">
                    <div className="docs-step-t">LlamaParse OCR</div>
                    <div className="docs-step-d">
                      Extracts structured markdown from the PDF. Output
                      persisted to <Mono>parsed_statements</Mono>. Falls back
                      to Gemini native document input if LlamaParse is unavailable
                      — same output schema either way.
                    </div>
                  </div>
                </div>
                <div className="docs-step">
                  <div className="docs-step-sp">
                    <div className="docs-step-dot">4</div>
                    <div className="docs-step-ln" />
                  </div>
                  <div className="docs-step-body">
                    <div className="docs-step-t">
                      Gemini 1.5 Flash enrichment
                    </div>
                    <div className="docs-step-d">
                      Normalized markdown + merchant context (industry, state,
                      FICO) sent to Gemini. Returns structured JSON populating
                      all 12 AI signal columns. Raw bank statements, account
                      numbers, and SSNs are never transmitted to external AI
                      services.
                    </div>
                  </div>
                </div>
                <div className="docs-step">
                  <div className="docs-step-sp">
                    <div className="docs-step-dot">5</div>
                  </div>
                  <div className="docs-step-body">
                    <div className="docs-step-t">Signal storage & audit</div>
                    <div className="docs-step-d">
                      AI columns written to <Mono>parsed_statements</Mono>.
                      Underwriting analysis updated. Append-only audit log entry
                      created with action type <Mono>AI_ENRICHMENT</Mono>.
                    </div>
                  </div>
                </div>
              </div>

              <div className="docs-h2">Extracted signal definitions</div>
              <div className="docs-table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <th>Signal</th>
                      <th>Type</th>
                      <th>Definition</th>
                    </tr>
                    <tr>
                      <td>monthly_revenue_avg</td>
                      <td>
                        <Mono>DECIMAL</Mono>
                      </td>
                      <td>
                        Mean gross monthly deposits, normalized for partial
                        months.
                      </td>
                    </tr>
                    <tr>
                      <td>monthly_revenue_trend</td>
                      <td>
                        <Mono>VARCHAR</Mono>
                      </td>
                      <td>
                        <Mono>growing</Mono> (&gt;5% MoM),{" "}
                        <Mono>stable</Mono> (±5%), or <Mono>declining</Mono>.
                      </td>
                    </tr>
                    <tr>
                      <td>average_daily_balance</td>
                      <td>
                        <Mono>DECIMAL</Mono>
                      </td>
                      <td>
                        Time-weighted mean of daily closing balances. Weekend
                        gaps use prior business day&apos;s balance.
                      </td>
                    </tr>
                    <tr>
                      <td>stacking_burden_pct</td>
                      <td>
                        <Mono>DECIMAL</Mono>
                      </td>
                      <td>
                        Total active MCA daily payments ÷ (monthly revenue / 21
                        business days). Percentage of daily revenue committed to
                        existing MCA obligations.
                      </td>
                    </tr>
                    <tr>
                      <td>active_mca_positions</td>
                      <td>
                        <Mono>JSONB[]</Mono>
                      </td>
                      <td>
                        Detected advance positions. Each entry: lender name,
                        daily debit (USD), estimated balance.
                      </td>
                    </tr>
                    <tr>
                      <td>nsf_count</td>
                      <td>
                        <Mono>INTEGER</Mono>
                      </td>
                      <td>
                        Non-Sufficient Funds events in the analysis window.
                        Strongest single negative signal for lender approval.
                      </td>
                    </tr>
                    <tr>
                      <td>flagged_anomalies</td>
                      <td>
                        <Mono>TEXT[]</Mono>
                      </td>
                      <td>
                        AI-flagged patterns requiring human review: circular
                        deposits, large one-time deposits, garnishment-pattern
                        debits.
                      </td>
                    </tr>
                    <tr>
                      <td>ai_confidence</td>
                      <td>
                        <Mono>0.0–1.0</Mono>
                      </td>
                      <td>
                        Extraction quality score. Below 0.70 triggers a
                        low-confidence flag and prompts human review before
                        submission.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SCORING */}
            <section
              className={`docs-section ${activeSection === "scoring" ? "vis" : ""}`}
              id="sec-scoring"
            >
              <div className="docs-pg-lbl">Three-Layer Scoring</div>
              <div className="docs-h1">Composite Score Formula</div>
              <div className="docs-lead">
                Every lender recommendation is computed from three independent
                layers. The composite score (0–100) represents a specific
                lender&apos;s suitability for a specific merchant deal, weighted
                by your ISO&apos;s relationship history with that lender.
              </div>

              <div className="docs-formula">
                composite_score = (<span className="hl">0.25</span> ×
                global_score)
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                + (<span className="hl">0.50</span> × relationship_score)
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                + (<span className="hl">0.25</span> × attribute_score)
              </div>

              <div className="docs-h2">
                Layer A — Global score{" "}
                <span className="docs-tag">25% weight</span>
              </div>
              <div className="docs-p">
                Market-level lender performance derived from anonymized,
                aggregate outcomes across all YieldStream organizations. No
                ISO-specific data is exposed in this layer.
              </div>
              <div className="docs-formula">
                global_score = 30 + (weighted_approval_rate × 70)
              </div>
              <div className="docs-p">
                A floor of 30 preserves market-presence signal for lenders with
                zero recent approvals. Lenders with no recorded outcomes default
                to baseline 50.
              </div>

              <div className="docs-h3">Time-decay weighting</div>
              <div className="docs-decay-row">
                <span className="docs-decay-lbl">≤ 30 days</span>
                <div className="docs-decay-bg">
                  <div className="docs-decay-bar" style={{ width: "100%" }} />
                </div>
                <span className="docs-decay-pct">100%</span>
              </div>
              <div className="docs-decay-row">
                <span className="docs-decay-lbl">31–90 days</span>
                <div className="docs-decay-bg">
                  <div className="docs-decay-bar" style={{ width: "40%" }} />
                </div>
                <span className="docs-decay-pct">40%</span>
              </div>
              <div className="docs-decay-row">
                <span className="docs-decay-lbl">91–180 days</span>
                <div className="docs-decay-bg">
                  <div className="docs-decay-bar" style={{ width: "20%" }} />
                </div>
                <span className="docs-decay-pct">20%</span>
              </div>
              <div className="docs-decay-row">
                <span className="docs-decay-lbl">&gt; 180 days</span>
                <div className="docs-decay-bg">
                  <div className="docs-decay-bar" style={{ width: "5%" }} />
                </div>
                <span className="docs-decay-pct">5%</span>
              </div>

              <div className="docs-h2">
                Layer B — Relationship score{" "}
                <span className="docs-tag">50% weight</span>
              </div>
              <div className="docs-p">
                Your ISO&apos;s pull-through history with each lender, weighted
                by recency. Two ISOs submitting the same merchant to the same
                lender receive different composite scores based entirely on
                their individual track records. Your relationship data is never
                shared with competing ISOs.
              </div>
              <div className="docs-callout">
                <div className="docs-callout-lbl">Relationship multiplier</div>
                ISOs who have established a strong, consistent track record with
                a specific lender receive an automatic score boost. This
                reflects the model&apos;s recognition that proven relationships
                are the most reliable predictor of funding success — and it
                compounds the more deals you close.
              </div>

              <div className="docs-h2">
                Layer C — Attribute score{" "}
                <span className="docs-tag">25% weight</span>
              </div>
              <div className="docs-p">
                Deterministic rule-based calculation measuring the
                merchant&apos;s risk profile against the lender&apos;s published
                buy-box criteria. Operates independently of any historical data.
              </div>
              <div className="docs-table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <th>Attribute</th>
                      <th>Signal</th>
                      <th>Logic</th>
                    </tr>
                    <tr>
                      <td>Revenue headroom</td>
                      <td>
                        <span className="docs-pos">Positive</span>
                      </td>
                      <td>
                        Merchant revenue above lender minimum. Greater headroom
                        = stronger signal.
                      </td>
                    </tr>
                    <tr>
                      <td>FICO headroom</td>
                      <td>
                        <span className="docs-pos">Positive</span>
                      </td>
                      <td>Owner FICO above lender minimum.</td>
                    </tr>
                    <tr>
                      <td>NSF frequency</td>
                      <td>
                        <span className="docs-neg">Negative</span>
                      </td>
                      <td>Each NSF event decrements the attribute score.</td>
                    </tr>
                    <tr>
                      <td>Position count</td>
                      <td>
                        <span className="docs-neg">Negative</span>
                      </td>
                      <td>
                        Active MCA positions approaching lender maximum reduces
                        score.
                      </td>
                    </tr>
                    <tr>
                      <td>ADB strength</td>
                      <td>
                        <span className="docs-pos">Positive</span>
                      </td>
                      <td>
                        Average daily balance relative to advance amount
                        requested.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="docs-h2">Hard disqualification rules</div>
              <div className="docs-p">
                Before scoring, lenders are permanently removed from the
                recommendation set if any of the following are true. These
                checks cannot be overridden by any score.
              </div>
              <div className="docs-table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <th>Rule</th>
                      <th>Condition</th>
                    </tr>
                    <tr>
                      <td>State restriction</td>
                      <td>
                        Merchant&apos;s state is in lender&apos;s{" "}
                        <Mono>restricted_states</Mono>
                      </td>
                    </tr>
                    <tr>
                      <td>Industry restriction</td>
                      <td>
                        Merchant&apos;s industry is in lender&apos;s{" "}
                        <Mono>restricted_industries</Mono>
                      </td>
                    </tr>
                    <tr>
                      <td>Revenue minimum</td>
                      <td>
                        Monthly revenue below lender&apos;s{" "}
                        <Mono>min_monthly_revenue</Mono>
                      </td>
                    </tr>
                    <tr>
                      <td>FICO minimum</td>
                      <td>
                        Owner FICO below lender&apos;s <Mono>min_fico</Mono>
                      </td>
                    </tr>
                    <tr>
                      <td>Position limit</td>
                      <td>
                        Active MCA positions exceed lender&apos;s{" "}
                        <Mono>max_positions</Mono>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* METRICS */}
            <section
              className={`docs-section ${activeSection === "metrics" ? "vis" : ""}`}
              id="sec-metrics"
            >
              <div className="docs-pg-lbl">Metric Definitions</div>
              <div className="docs-h1">Authoritative Metric Reference</div>
              <div className="docs-lead">
                Canonical definitions for all metrics surfaced in the Analytics
                Dashboard and Deal Intelligence panels. These establish a common
                language between your ISO, YieldStream, and your lender network.
              </div>

              <div className="docs-h2">Submission pipeline</div>
              <div className="docs-table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <th>Metric</th>
                      <th>Definition</th>
                    </tr>
                    <tr>
                      <td>Pull-through rate</td>
                      <td>
                        Funded ÷ total submitted to a specific lender, within a
                        time window. Primary measure of broker-lender
                        relationship health. Displayed with time-decay weighting
                        in Lender Intel.
                      </td>
                    </tr>
                    <tr>
                      <td>Ghosting rate</td>
                      <td>
                        Unresponsive submissions ÷ total submissions over a
                        rolling 30-day window. Elevated ghosting signals
                        misaligned submissions or a deteriorating lender
                        relationship.
                      </td>
                    </tr>
                    <tr>
                      <td>Composite score</td>
                      <td>
                        Output of the three-layer model (0–100). Above 85 = high
                        confidence. 70–84 = moderate. Below 70 = marginal match.
                      </td>
                    </tr>
                    <tr>
                      <td>Prediction accuracy</td>
                      <td>
                        Funded outcomes where the top-ranked lender was correct
                        ÷ total top-ranked submissions. Surfaced only after
                        minimum outcome volume is reached.
                      </td>
                    </tr>
                    <tr>
                      <td>Approval rate</td>
                      <td>
                        Funded deals ÷ total submitted across all lenders for the
                        org, within a given period.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="docs-h2">Financial metrics</div>
              <div className="docs-table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <th>Metric</th>
                      <th>Definition</th>
                    </tr>
                    <tr>
                      <td>ADB</td>
                      <td>
                        Average Daily Balance. Time-weighted mean of daily
                        closing balances. Formula: Σ(daily_balance × days_held)
                        / total_days. Weekend gaps use prior business
                        day&apos;s balance.
                      </td>
                    </tr>
                    <tr>
                      <td>Stacking burden %</td>
                      <td>
                        Total active MCA daily payments ÷ (monthly revenue / 21
                        business days). Above 25% is high-risk for most MCA
                        lenders; above 40% triggers a hard flag.
                      </td>
                    </tr>
                    <tr>
                      <td>Expected yield ($)</td>
                      <td>
                        Projected broker commission in dollars — not percentage —
                        enabling direct comparison across lenders with different
                        commission structures.
                      </td>
                    </tr>
                    <tr>
                      <td>Days to offer</td>
                      <td>
                        Calendar days from submission to term sheet receipt.
                        Tracked per lender, displayed as an average in the
                        Lender Intel view.
                      </td>
                    </tr>
                    <tr>
                      <td>Prediction variance %</td>
                      <td>
                        Difference between predicted commission/factor rate at
                        submission time and actual funded terms. Measures model
                        accuracy per lender over time.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="docs-h2">Renewal metrics</div>
              <div className="docs-table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <th>Metric</th>
                      <th>Definition</th>
                    </tr>
                    <tr>
                      <td>Estimated 50% paydown</td>
                      <td>
                        Projected date a funded merchant repays 50% of their
                        advance. Formula: funded_at + (term_days / 2). The
                        YieldStream renewal trigger — alerts dispatch 60 days
                        before this date.
                      </td>
                    </tr>
                    <tr>
                      <td>Estimated payoff date</td>
                      <td>
                        Projected full repayment: funded_at + term_days. Used
                        for portfolio monitoring, not a contractual obligation.
                      </td>
                    </tr>
                    <tr>
                      <td>Relationship health score</td>
                      <td>
                        The Layer B score (0–100) for a specific ISO-lender
                        pairing. Displayed with time-decay opacity encoding —
                        lenders with older or fewer outcomes appear visually
                        desaturated.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ANALYTICS */}
            <section
              className={`docs-section ${activeSection === "analytics" ? "vis" : ""}`}
              id="sec-analytics"
            >
              <div className="docs-pg-lbl">Analytics Dashboard</div>
              <div className="docs-h1">Four-View Analytics System</div>
              <div className="docs-lead">
                The analytics dashboard is organized into four purpose-built
                views. Access is governed by role permissions and data-readiness
                thresholds — the system does not surface accuracy metrics until
                there is sufficient data to make them statistically meaningful.
              </div>

              <div className="docs-table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <th>View</th>
                      <th>Primary audience</th>
                      <th>Content</th>
                    </tr>
                    <tr>
                      <td>Portfolio</td>
                      <td>Brokerage owners</td>
                      <td>
                        Funded volume trends, pipeline stage breakdown (lead →
                        funded → declined), period-over-period KPI deltas.
                      </td>
                    </tr>
                    <tr>
                      <td>Industry</td>
                      <td>Growth-focused principals</td>
                      <td>
                        Bubble chart mapping submission volume vs pull-through
                        by industry vertical. Identifies underinvested verticals
                        where your close rate is high but submission volume is
                        low.
                      </td>
                    </tr>
                    <tr>
                      <td>Lender Intel</td>
                      <td>Submission managers</td>
                      <td>
                        Per-lender relationship health scores with time-decay
                        opacity encoding, average days-to-offer, and pull-through
                        trends.
                      </td>
                    </tr>
                    <tr>
                      <td>AI Predictions</td>
                      <td>All roles</td>
                      <td>
                        KPI row (approval rate, prediction accuracy, avg days
                        to offer, decline rate) + approval trend, decline
                        reasons, and per-lender pull-through charts. Progressive
                        unlock only.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="docs-h2">Progressive intelligence unlock</div>
              <div className="docs-p">
                New ISOs do not have access to the AI Predictions view at
                account creation. The system enforces a minimum data threshold
                before surfacing accuracy metrics. This prevents underpowered
                statistics from undermining trust in the scoring model.
              </div>

              <div className="docs-unlock-grid">
                <div className="docs-unlock-card">
                  <div className="docs-unlock-num">10+</div>
                  <div className="docs-unlock-lbl">
                    Recorded funded or declined outcomes
                  </div>
                </div>
                <div className="docs-unlock-card">
                  <div className="docs-unlock-num">3+</div>
                  <div className="docs-unlock-lbl">
                    Qualified lenders with buy-box data
                  </div>
                </div>
                <div className="docs-unlock-card">
                  <div className="docs-unlock-num">30+</div>
                  <div className="docs-unlock-lbl">
                    Days of historical data on the platform
                  </div>
                </div>
              </div>

              <div className="docs-callout">
                <div className="docs-callout-lbl">Why thresholds matter</div>
                An approval rate derived from 4 outcomes is not a useful
                signal. YieldStream shows ISOs a data-accumulation progress
                indicator — not a locked or hidden state — so you always know
                exactly what data is needed to unlock the full predictions view.
              </div>
            </section>

            {/* LEARNING */}
            <section
              className={`docs-section ${activeSection === "learning" ? "vis" : ""}`}
              id="sec-learning"
            >
              <div className="docs-pg-lbl">Intelligence</div>
              <div className="docs-h1">Outcome Learning Loop</div>
              <div className="docs-lead">
                Every funded and declined deal feeds back into the scoring
                model. This is the data flywheel that makes YieldStream more
                accurate over time — and creates compounding switching cost as
                your outcome history grows.
              </div>

              <div className="docs-h2">
                What happens when a submission is marked Funded
              </div>
              <div className="docs-table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <th>Event</th>
                      <th>System response</th>
                    </tr>
                    <tr>
                      <td>Deal funded</td>
                      <td>
                        Relationship score for that lender strengthens.
                        Point-in-time snapshot (merchant, bank intelligence,
                        predictions) written to <Mono>funding_outcomes</Mono>.
                        Renewal tracking begins — estimated payoff and 50%
                        paydown dates calculated.
                      </td>
                    </tr>
                    <tr>
                      <td>Renewal alert window reached</td>
                      <td>
                        Daily cron at 08:00 identifies funded deals within 60
                        days of estimated 50% paydown. Notification dispatched
                        to all org members.{" "}
                        <Mono>renewal_alert_sent</Mono> flag prevents duplicate
                        alerts.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="docs-h2">
                What happens when a submission is marked Declined
              </div>
              <div className="docs-table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <th>Decline category</th>
                      <th>Score adjustment</th>
                      <th>Duration</th>
                    </tr>
                    <tr>
                      <td>Max exposure</td>
                      <td>
                        <span className="docs-neg">Significant penalty</span>
                      </td>
                      <td>30 days — lender at portfolio capacity</td>
                    </tr>
                    <tr>
                      <td>Industry restriction</td>
                      <td>
                        <span className="docs-neg">Moderate penalty</span>
                      </td>
                      <td>30 days — likely deal-specific</td>
                    </tr>
                    <tr>
                      <td>Credit quality</td>
                      <td>
                        <span className="docs-neg">Minor penalty</span>
                      </td>
                      <td>30 days — criteria may have tightened</td>
                    </tr>
                    <tr>
                      <td>Stacking / position limit</td>
                      <td>
                        <span className="docs-neg">Moderate penalty</span>
                      </td>
                      <td>30 days — re-evaluate after paydown</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="docs-p">
                Penalties are org-scoped — a decline at your ISO does not
                affect another ISO&apos;s relationship score with that lender.
                Multiple declines from the same lender compound within the
                penalty window. Penalties expire automatically via a nightly SQL
                function.
              </div>

              <div className="docs-callout">
                <div className="docs-callout-lbl">
                  The compounding advantage
                </div>
                An ISO with 6 months of recorded outcomes will have materially
                better predictions than a new user. This creates both a
                retention mechanic and a genuine data moat — your historical
                outcome record is not portable to any other platform.
              </div>
            </section>

            {/* SECURITY */}
            <section
              className={`docs-section ${activeSection === "security" ? "vis" : ""}`}
              id="sec-security"
            >
              <div className="docs-pg-lbl">Infrastructure</div>
              <div className="docs-h1">Security & Data Isolation</div>
              <div className="docs-lead">
                Security and data isolation are foundational architecture
                decisions in YieldStream, not features added after the fact. The
                primary isolation mechanism is PostgreSQL Row-Level Security
                enforced at the database level — not application-level
                filtering.
              </div>

              <div className="docs-h2">Multi-tenant isolation</div>
              <div className="docs-p">
                Every table containing org-scoped data has RLS policies
                enforced at the database level across 18+ tables. This means even
                if application code contained a bug, the database itself would
                reject any query attempting to return another organization&apos;s
                data.
              </div>
              <div className="docs-callout">
                <div className="docs-callout-lbl">
                  Zero-trust data architecture
                </div>
                Traditional platforms rely on application code to add{" "}
                <Mono>WHERE org_id = X</Mono> to every query. If a developer
                omits it once, data leaks. YieldStream&apos;s RLS policies make
                that impossible — the database rejects unauthorized queries
                regardless of what the application requests.
              </div>

              <div className="docs-h2">Document vault security</div>
              <div className="docs-table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <th>Control</th>
                      <th>Specification</th>
                    </tr>
                    <tr>
                      <td>Encryption at rest</td>
                      <td>
                        AES-256 via Supabase infrastructure-level encryption on
                        all storage buckets.
                      </td>
                    </tr>
                    <tr>
                      <td>Org-scoped policies</td>
                      <td>
                        Storage policies enforced at the storage layer,
                        independent of database RLS. Cross-tenant file access
                        is blocked at two separate enforcement points.
                      </td>
                    </tr>
                    <tr>
                      <td>Signed URLs</td>
                      <td>
                        Document access requires a short-lived signed URL with a
                        15-minute expiry. Permanent or guessable URLs are never
                        generated.
                      </td>
                    </tr>
                    <tr>
                      <td>File validation</td>
                      <td>
                        Allowed types: PDF, JPG, PNG, XLS/XLSX, DOC/DOCX.
                        Enforced client-side and server-side. Executable files
                        rejected at both layers.
                      </td>
                    </tr>
                    <tr>
                      <td>Merchant upload links</td>
                      <td>
                        Token-gated, single-use, 48-hour expiry. Merchants can
                        upload without a platform account.
                      </td>
                    </tr>
                    <tr>
                      <td>Audit trail</td>
                      <td>
                        Every upload, view, and deletion written to the
                        append-only <Mono>audit_logs</Mono> table. Cannot be
                        modified or deleted by any user role.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="docs-h2">Authentication controls</div>
              <div className="docs-table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <th>Control</th>
                      <th>Specification</th>
                    </tr>
                    <tr>
                      <td>Password policy</td>
                      <td>
                        Minimum 12 characters. Uppercase, lowercase, numeric,
                        and special characters required.
                      </td>
                    </tr>
                    <tr>
                      <td>2FA</td>
                      <td>
                        TOTP-based (Google Authenticator, Authy, any RFC
                        6238-compatible app).
                      </td>
                    </tr>
                    <tr>
                      <td>Brute-force protection</td>
                      <td>
                        Account locked for 15 minutes after 5 failed attempts
                        within 10 minutes.
                      </td>
                    </tr>
                    <tr>
                      <td>Session timeout</td>
                      <td>Sessions expire after 7 days of inactivity.</td>
                    </tr>
                    <tr>
                      <td>Security headers</td>
                      <td>
                        HSTS (HTTPS enforcement), X-Frame-Options,
                        X-Content-Type-Options, Permissions-Policy.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="docs-h2">Data minimization for AI</div>
              <div className="docs-p">
                When YieldStream sends data to external AI services, only
                normalized markdown representations of financial statements are
                transmitted. Raw PDFs, account numbers, SSNs, and EINs are never
                sent to third-party AI providers. The Gemini API receives only
                the structured text output from LlamaParse — not the original
                document.
              </div>
            </section>

            {/* ACCESS */}
            <section
              className={`docs-section ${activeSection === "access" ? "vis" : ""}`}
              id="sec-access"
            >
              <div className="docs-pg-lbl">Infrastructure</div>
              <div className="docs-h1">Role-Based Access Control</div>
              <div className="docs-lead">
                YieldStream enforces a three-tier permission model across all
                API routes and server actions. There are no unprotected
                privileged endpoints — every mutation is gated by the{" "}
                <Mono>secureApiHandler</Mono> middleware or{" "}
                <Mono>requireRole</Mono> server-action utility.
              </div>

              <div className="docs-h2">Permission matrix</div>
              <div className="docs-table-wrap">
                <table>
                  <tbody>
                    <tr>
                      <th>Action</th>
                      <th style={{ textAlign: "center" }}>Owner</th>
                      <th style={{ textAlign: "center" }}>Admin</th>
                      <th style={{ textAlign: "center" }}>Rep</th>
                    </tr>
                    <tr>
                      <td>Change organization name</td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-n">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-n">●</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Delete org data (GDPR)</td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-n">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-n">●</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Export compliance data</td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-n">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-n">●</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Invite team members</td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-n">●</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Manage lender buy-boxes</td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-n">●</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Bulk CSV import</td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-n">●</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Change submission status</td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Create merchants</td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Upload documents</td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                    </tr>
                    <tr>
                      <td>View AI predictions</td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                      <td style={{ textAlign: "center" }}>
                        <span className="docs-perm-y">●</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="docs-h2">Cross-tenant protection</div>
              <div className="docs-p">
                Lender relationship scores, pull-through rates, and prediction
                accuracy data are derived exclusively from the authenticated
                session&apos;s org_id — never from user-supplied parameters.
                Cross-tenant failures return HTTP 404 rather than 403, preventing
                resource-existence enumeration by external actors.
              </div>
            </section>

            {/* PRICING */}
            <section
              className={`docs-section ${activeSection === "pricing" ? "vis" : ""}`}
              id="sec-pricing"
            >
              <div className="docs-pg-lbl">Reference</div>
              <div className="docs-h1">Pricing</div>
              <div className="docs-lead">
                YieldStream is a flat monthly subscription — no per-seat pricing,
                no submission limits, no hidden overages. The 14-day trial
                includes full platform access with card on file; no charge until
                the trial period ends.
              </div>

              <div className="docs-pg-grid">
                <div className="docs-pg-card feat">
                  <div className="docs-pg-badge">Recommended</div>
                  <div className="docs-pg-name">Founder</div>
                  <div style={{ marginBottom: 14 }}>
                    <span className="docs-pg-price">$497</span>
                    <span className="docs-pg-per">/month</span>
                  </div>
                  <div className="docs-pg-row">
                    <span className="docs-pg-k">Team seats</span>
                    <span className="docs-pg-v">Unlimited</span>
                  </div>
                  <div className="docs-pg-row">
                    <span className="docs-pg-k">AI credits / month</span>
                    <span className="docs-pg-v">50</span>
                  </div>
                  <div className="docs-pg-row">
                    <span className="docs-pg-k">Trial period</span>
                    <span className="docs-pg-v">14 days</span>
                  </div>
                  <div className="docs-pg-row">
                    <span className="docs-pg-k">Billing</span>
                    <span className="docs-pg-v">Stripe, auto-charge</span>
                  </div>
                </div>
                <div className="docs-pg-card">
                  <div style={{ height: 22 }} />
                  <div className="docs-pg-name">Pro</div>
                  <div style={{ marginBottom: 14 }}>
                    <span className="docs-pg-price">$697</span>
                    <span className="docs-pg-per">/month</span>
                  </div>
                  <div className="docs-pg-row">
                    <span className="docs-pg-k">Team seats</span>
                    <span className="docs-pg-v">Up to 10</span>
                  </div>
                  <div className="docs-pg-row">
                    <span className="docs-pg-k">AI credits / month</span>
                    <span className="docs-pg-v">150</span>
                  </div>
                  <div className="docs-pg-row">
                    <span className="docs-pg-k">Trial period</span>
                    <span className="docs-pg-v">14 days</span>
                  </div>
                  <div className="docs-pg-row">
                    <span className="docs-pg-k">Billing</span>
                    <span className="docs-pg-v">Stripe, auto-charge</span>
                  </div>
                </div>
              </div>

              <div className="docs-h2">AI credit system</div>
              <div className="docs-p">
                AI credits govern consumption of the underwriting pipeline —
                specifically bank statement enrichment (OCR + Gemini analysis)
                and lender prediction generation. One credit is consumed per
                bank statement analysis cycle. Prediction re-runs against cached
                results do not consume credits.
              </div>
              <div className="docs-callout">
                <div className="docs-callout-lbl">Credit policy</div>
                Unused AI credits do not roll over between billing periods.
                Credits refresh on the monthly billing anniversary. High-volume
                ISOs processing above the included credit allotment should
                contact support to discuss an Enterprise arrangement.
              </div>
            </section>

            {/* GLOSSARY */}
            <section
              className={`docs-section ${activeSection === "glossary" ? "vis" : ""}`}
              id="sec-glossary"
            >
              <div className="docs-pg-lbl">Reference</div>
              <div className="docs-h1">Glossary</div>
              <div className="docs-lead">
                Definitions for YieldStream-specific terminology used throughout
                this documentation and visible in the platform interface.
              </div>

              <div className="docs-glos-item">
                <div className="docs-glos-term">
                  ADB — Average Daily Balance
                </div>
                <div className="docs-glos-def">
                  Time-weighted mean of a merchant&apos;s daily closing bank
                  balance. The primary liquidity metric used in lender attribute
                  scoring.
                </div>
              </div>
              <div className="docs-glos-item">
                <div className="docs-glos-term">
                  Attribute Score (Layer C)
                </div>
                <div className="docs-glos-def">
                  Rule-based component of the composite score. Measures merchant
                  risk profile against lender buy-box criteria. Weight: 25%.
                </div>
              </div>
              <div className="docs-glos-item">
                <div className="docs-glos-term">Buy-Box</div>
                <div className="docs-glos-def">
                  A lender&apos;s published underwriting criteria: minimum
                  revenue, minimum FICO, maximum positions, restricted
                  industries and states.
                </div>
              </div>
              <div className="docs-glos-item">
                <div className="docs-glos-term">Composite Score</div>
                <div className="docs-glos-def">
                  The 0–100 output of the three-layer scoring model for a
                  specific merchant-lender pairing. Reflects both market signals
                  and your ISO&apos;s relationship history.
                </div>
              </div>
              <div className="docs-glos-item">
                <div className="docs-glos-term">
                  Digital Head of Submissions
                </div>
                <div className="docs-glos-def">
                  YieldStream&apos;s positioning concept. The platform functions
                  as an institutional-grade submissions function, replacing ad
                  hoc lender routing with systematic, data-driven
                  recommendations.
                </div>
              </div>
              <div className="docs-glos-item">
                <div className="docs-glos-term">Global Pool (Layer A)</div>
                <div className="docs-glos-def">
                  Cross-organization, anonymized lender performance signal.
                  Computes time-decay weighted approval rates across all
                  YieldStream ISOs without exposing any individual ISO&apos;s
                  data. Weight: 25%.
                </div>
              </div>
              <div className="docs-glos-item">
                <div className="docs-glos-term">Ghosting Rate</div>
                <div className="docs-glos-def">
                  Ratio of submissions with no lender response within the
                  expected window to total submissions, over a rolling 30-day
                  period.
                </div>
              </div>
              <div className="docs-glos-item">
                <div className="docs-glos-term">
                  ISO — Independent Sales Organization
                </div>
                <div className="docs-glos-def">
                  The primary YieldStream customer. An ISO is a licensed MCA
                  broker organization that matches merchants with MCA lenders and
                  earns commission on funded deals.
                </div>
              </div>
              <div className="docs-glos-item">
                <div className="docs-glos-term">MCA — Merchant Cash Advance</div>
                <div className="docs-glos-def">
                  A form of small business financing where a lender purchases a
                  portion of future receivables at a discount, repaid via daily
                  or weekly fixed debits.
                </div>
              </div>
              <div className="docs-glos-item">
                <div className="docs-glos-term">
                  NSF — Non-Sufficient Funds
                </div>
                <div className="docs-glos-def">
                  A bank event indicating a payment was attempted with an
                  insufficient balance. The strongest single negative signal in
                  MCA underwriting.
                </div>
              </div>
              <div className="docs-glos-item">
                <div className="docs-glos-term">Outcome Learning Loop</div>
                <div className="docs-glos-def">
                  The feedback mechanism feeding every funded and declined deal
                  back into the scoring model. The primary driver of model
                  improvement over time.
                </div>
              </div>
              <div className="docs-glos-item">
                <div className="docs-glos-term">Pull-Through Rate</div>
                <div className="docs-glos-def">
                  Funded deals ÷ total deals submitted to a specific lender. An
                  ISO&apos;s most important metric of lender relationship
                  quality.
                </div>
              </div>
              <div className="docs-glos-item">
                <div className="docs-glos-term">
                  Relationship Score (Layer B)
                </div>
                <div className="docs-glos-def">
                  ISO-specific, time-decay weighted pull-through history with
                  each lender. Weight: 50%. Never shared with competing ISOs.
                </div>
              </div>
              <div className="docs-glos-item">
                <div className="docs-glos-term">Stacking</div>
                <div className="docs-glos-def">
                  Having multiple simultaneous MCA advances from different
                  lenders. Detected from bank statement debit patterns and
                  expressed as stacking_burden_pct.
                </div>
              </div>
              <div className="docs-glos-item">
                <div className="docs-glos-term">Time-Decay Weighting</div>
                <div className="docs-glos-def">
                  Mechanism that reduces the influence of older outcomes on
                  current scores. Data older than 180 days contributes only 5%
                  weight, preventing stale signals from distorting
                  recommendations.
                </div>
              </div>
              <div className="docs-glos-item">
                <div className="docs-glos-term">Underwriter&apos;s Note</div>
                <div className="docs-glos-def">
                  A human-readable sentence generated by Gemini 1.5 Flash
                  explaining the structural reason for a lender recommendation.
                  Provides broker-facing transparency for AI-driven scores.
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
