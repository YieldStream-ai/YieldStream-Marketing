export default function PricingSection({ active }) {
  return (
    <section
      className={`docs-section ${active ? "vis" : ""}`}
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
  );
}
