import Mono from "./Mono";

export default function LearningSection({ active }) {
  return (
    <section
      className={`docs-section ${active ? "vis" : ""}`}
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
  );
}
