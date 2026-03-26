import Mono from "./Mono";

export default function MetricsSection({ active }) {
  return (
    <section
      className={`docs-section ${active ? "vis" : ""}`}
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
  );
}
