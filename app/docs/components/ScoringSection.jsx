import Mono from "./Mono";

export default function ScoringSection({ active }) {
  return (
    <section
      className={`docs-section ${active ? "vis" : ""}`}
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

      <div className="docs-formula-row">
        <div className="docs-formula-wrap">
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
        </div>
        <div className="docs-glass-decal" aria-hidden="true">
          <div className="docs-glass-slab docs-glass-slab--1" />
          <div className="docs-glass-slab docs-glass-slab--2" />
          <div className="docs-glass-slab docs-glass-slab--3" />
        </div>
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
      {[
        { label: "≤ 30 days", width: "100%", pct: "100%" },
        { label: "31–90 days", width: "40%", pct: "40%" },
        { label: "91–180 days", width: "20%", pct: "20%" },
        { label: "> 180 days", width: "5%", pct: "5%" },
      ].map((row) => (
        <div className="docs-decay-row" key={row.label}>
          <span className="docs-decay-lbl">{row.label}</span>
          <div className="docs-decay-bg">
            <div className="docs-decay-bar" style={{ width: row.width }} />
          </div>
          <span className="docs-decay-pct">{row.pct}</span>
        </div>
      ))}

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
  );
}
