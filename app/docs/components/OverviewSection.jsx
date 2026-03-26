export default function OverviewSection({ active }) {
  return (
    <section
      className={`docs-section ${active ? "vis" : ""}`}
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
                Multi-provider extraction pipeline with circuit breaker
                fallback. LlamaParse OCR feeds into Gemini 1.5 Flash
                enrichment — with automatic provider failover ensuring
                continuity. Extracts 20+ risk signals including revenue
                trends, NSF patterns, stacking detection, and anomaly
                flags.
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
  );
}
