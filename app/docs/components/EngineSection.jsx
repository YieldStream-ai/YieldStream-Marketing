import Mono from "./Mono";

export default function EngineSection({ active }) {
  return (
    <section
      className={`docs-section ${active ? "vis" : ""}`}
      id="sec-engine"
    >
      <div className="docs-pg-lbl">Underwriting Engine</div>
      <div className="docs-h1">The YieldStream Underwriting Engine</div>
      <div className="docs-h2" style={{ marginTop: 0 }}>
        Institutional-Grade Intelligence for the MCA Industry
      </div>
      <div className="docs-lead">
        YieldStream.ai doesn&apos;t just &ldquo;read&rdquo; bank
        statements&mdash;it interrogates them. Our proprietary six-stage
        pipeline transforms raw financial data into a high-density risk
        profile, leveraging a tiered extraction architecture and asynchronous
        AI enrichment to deliver a 360-degree view of merchant health in
        seconds.
      </div>

      {/* ── Six-Stage Resilience Pipeline ── */}
      <div className="docs-h2">The Six-Stage Resilience Pipeline</div>

      <div className="docs-steps">
        {/* 1 */}
        <div className="docs-step">
          <div className="docs-step-sp">
            <div className="docs-step-dot">1</div>
            <div className="docs-step-ln" />
          </div>
          <div className="docs-step-body">
            <div className="docs-step-t">Multi-Layer Document Validation</div>
            <div className="docs-step-d">
              Security begins at ingestion. Every file undergoes real-time
              integrity checks, including MIME-type cross-referencing and 50 MB
              structural validation, ensuring only authentic, high-quality data
              enters your workflow.
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="docs-step">
          <div className="docs-step-sp">
            <div className="docs-step-dot">2</div>
            <div className="docs-step-ln" />
          </div>
          <div className="docs-step-body">
            <div className="docs-step-t">
              Asynchronous Event Orchestration
            </div>
            <div className="docs-step-d">
              Powered by <Mono>Inngest</Mono>, our engine handles complex AI
              inference as a background process. Your interface never freezes,
              and your workflow never stops&mdash;the &ldquo;heavy
              lifting&rdquo; happens in parallel while you focus on the deal.
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="docs-step">
          <div className="docs-step-sp">
            <div className="docs-step-dot">3</div>
            <div className="docs-step-ln" />
          </div>
          <div className="docs-step-body">
            <div className="docs-step-t">Vision-Based Quality Gate</div>
            <div className="docs-step-d">
              To maximize precision, every page passes through a dual-phase
              readability analysis. We score document legibility in
              milliseconds, instantly flagging blurry scans or corrupted files
              before they reach the analysis layer, saving you time and
              resources.
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="docs-step">
          <div className="docs-step-sp">
            <div className="docs-step-dot">4</div>
            <div className="docs-step-ln" />
          </div>
          <div className="docs-step-body">
            <div className="docs-step-t">Tiered Extraction Consensus</div>
            <div className="docs-step-d">
              We don&apos;t rely on a single point of failure. Our engine
              utilizes a proprietary fallback strategy across multiple
              high-performance parsers. If a digital PDF is non-standard, our
              system automatically triggers specialized AI vision layers to
              ensure a 99%+ extraction success rate.
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="docs-step">
          <div className="docs-step-sp">
            <div className="docs-step-dot">5</div>
            <div className="docs-step-ln" />
          </div>
          <div className="docs-step-body">
            <div className="docs-step-t">Deep-Tissue AI Enrichment</div>
            <div className="docs-step-d">
              Beyond basic totals, we leverage{" "}
              <Mono>Gemini 2.0 Flash Lite</Mono> to analyze the
              &ldquo;narrative&rdquo; of the cash flow. The engine identifies
              22+ complex signals, from hidden lien indicators to subtle
              revenue volatility patterns that traditional underwriting often
              misses.
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="docs-step">
          <div className="docs-step-sp">
            <div className="docs-step-dot">6</div>
          </div>
          <div className="docs-step-body">
            <div className="docs-step-t">
              Automated Risk Synthesis & Audit
            </div>
            <div className="docs-step-d">
              Every analysis is finalized with a structured risk score and an
              append-only audit log. This provides a transparent &ldquo;paper
              trail&rdquo; for every transformation, ensuring your underwriting
              is as defensible as it is fast.
            </div>
          </div>
        </div>
      </div>

      {/* ── 22+ Proprietary Risk Signals ── */}
      <div className="docs-h2">22+ Proprietary Risk Signals</div>
      <div className="docs-p">
        YieldStream provides the depth required for complex funding decisions.
        We categorize our findings into four critical intelligence domains:
      </div>

      {/* Domain 1 */}
      <div className="docs-h3">Cash Flow & Liquidity Intelligence</div>
      <div className="docs-p">
        <strong>True Average Daily Balance (ADB):</strong> A time-weighted mean
        of daily closing balances, providing a realistic liquidity picture
        beyond simple month-end snapshots.
      </div>
      <div className="docs-p">
        <strong>Negative Day Tracking:</strong> Analysis of the frequency and
        duration of sub-zero balances to identify chronic mismanagement.
      </div>
      <div className="docs-p">
        <strong>Ending Balance Trajectory:</strong> Real-time identification of
        whether a merchant&apos;s cash position is growing, stable, or
        depleting.
      </div>

      {/* Domain 2 */}
      <div className="docs-h3">Advanced Revenue Analytics</div>
      <div className="docs-p">
        <strong>Volatility & MoM Trending:</strong> Automated calculation of
        revenue variance. High &ldquo;Volatility Scores&rdquo; flag
        inconsistent performance and potential default risk.
      </div>
      <div className="docs-p">
        <strong>Concentration Risk:</strong> Analysis of deposit transaction
        sizes to identify merchants over-reliant on single-source revenue.
      </div>

      {/* Domain 3 */}
      <div className="docs-h3">Automated Debt & Stacking Detection</div>
      <div className="docs-p">
        <strong>Position Scanning:</strong> Identification of recurring ACH
        patterns to known funding companies, automatically mapping out existing
        daily/weekly obligations.
      </div>
      <div className="docs-p">
        <strong>Stacking Burden %:</strong> The exact percentage of daily
        revenue committed to existing MCA debt&mdash;the ultimate metric for
        determining true &ldquo;room&rdquo; for new capital.
      </div>
      <div className="docs-p">
        <strong>Debt Service Coverage (DSCR):</strong> A real-time ratio of
        monthly revenue against total daily debits.
      </div>

      {/* Domain 4 */}
      <div className="docs-h3">Critical Risk Flags & Integrity</div>
      <div className="docs-p">
        <strong>NSF Velocity (30/60/90 Days):</strong> Rolling counts of
        Non-Sufficient Funds events, weighted by recency to identify downward
        spirals.
      </div>
      <div className="docs-p">
        <strong>Lien & Garnishment Detection:</strong> Automated scanning for
        IRS, State Tax, or legal levy keywords within withdrawal descriptions.
      </div>
      <div className="docs-p">
        <strong>AI Confidence & Anomaly Scoring:</strong> Every extraction
        includes a self-assessed confidence score. Any document falling below
        your threshold is automatically flagged for expert human review.
      </div>

      {/* ── Technical Specification Overview ── */}
      <div className="docs-h2">Technical Specification Overview</div>
      <div className="docs-table-wrap">
        <table>
          <tbody>
            <tr>
              <th>Specification</th>
              <th>Detail</th>
            </tr>
            <tr>
              <td>Engine Core</td>
              <td>Node.js (Inngest) & Python FastAPI Microservices</td>
            </tr>
            <tr>
              <td>AI Layer</td>
              <td>Gemini 2.0 Flash Lite (Rate-Limited & Concurrency-Capped)</td>
            </tr>
            <tr>
              <td>Security</td>
              <td>AES-256 Storage via Supabase Vault</td>
            </tr>
            <tr>
              <td>Compliance</td>
              <td>Full append-only audit trails for every AI-driven action</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ── The Strategic Advantage ── */}
      <div className="docs-h2">The Strategic Advantage</div>
      <div className="docs-p">
        While others provide data entry, YieldStream provides Submission
        Intelligence. We reduce the distance between a raw upload and a
        fundable decision, ensuring that when you submit a deal, it is already
        stress-tested, verified, and ready for approval.
      </div>
    </section>
  );
}
