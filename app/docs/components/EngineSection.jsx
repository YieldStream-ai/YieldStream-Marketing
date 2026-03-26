import Mono from "./Mono";

export default function EngineSection({ active }) {
  return (
    <section
      className={`docs-section ${active ? "vis" : ""}`}
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
  );
}
