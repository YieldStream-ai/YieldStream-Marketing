export default function AnalyticsSection({ active }) {
  return (
    <section
      className={`docs-section ${active ? "vis" : ""}`}
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
  );
}
