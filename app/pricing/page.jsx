"use client";

import { useState } from "react";
import Link from "next/link";
import { useReveal } from "../components/useReveal";
import PricingTiers from "./PricingTiers";
import "./pricing.scss";

export default function PricingPage() {
  useReveal();
  const [annual, setAnnual] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="pricing__hero">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Pricing</div>
            <h1 className="display-xl pricing__hero-title">
              Simple pricing that
              <br />
              scales with you.
            </h1>
            <p className="text-lg pricing__hero-sub">
              No per-deal fees. No merchant limits. No hidden costs. Just a flat
              monthly rate for your entire team.
            </p>
          </div>
        </div>
      </section>

      {/* Toggle + Cards */}
      <section className="pricing__section">
        <PricingTiers annual={annual} setAnnual={setAnnual} />
      </section>

      {/* ROI Calculator */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">ROI Calculator</div>
            <h2 className="display-lg pricing__section-title">
              See what YieldStream saves your brokerage.
            </h2>
          </div>
          <ROICalculator />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-narrow">
          <div className="section-header center reveal">
            <div className="label">FAQ</div>
            <h2 className="display-lg pricing__section-title">
              Common questions
            </h2>
          </div>
          <div
            className="reveal"
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {[
              {
                q: "Is there a money-back guarantee?",
                a: "Yes. Both Founder and Professional plans include a 30-day money-back guarantee. If it's not the right fit, contact support@yieldstream.ai within 30 days of your first payment for a full refund.",
              },
              {
                q: "What happens when the 20 founder spots are filled?",
                a: "The Founder tier closes permanently. New customers start at the Professional tier ($1,197/mo). Founding members keep their rate forever.",
              },
              {
                q: "Are there per-deal or per-merchant fees?",
                a: "No. Every plan includes unlimited merchants and deals. The flat monthly rate is the only cost.",
              },
              {
                q: "How many team members can I add?",
                a: "All plans include unlimited team seats.",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes. Monthly plans have no commitment. Annual plans are billed upfront and are non-refundable but you keep access through the end of the billing period.",
              },
              {
                q: "What's the onboarding process?",
                a: "Founder members get priority 1-on-1 onboarding. Professional customers use the guided onboarding wizard — upload lenders, invite team, and run your first AI-scored deal in under 30 minutes.",
              },
            ].map((faq, i) => (
              <details key={i} className="pricing__faq-item">
                <summary className="pricing__faq-summary">{faq.q}</summary>
                <p className="text-sm pricing__faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ROICalculator() {
  const [deals, setDeals] = useState(40);
  const [size, setSize] = useState(150000);
  const [pull, setPull] = useState(35);
  const [reps, setReps] = useState(5);

  const hours = Math.round(deals * 0.75 + reps * 8);
  const extra = Math.round(deals * 0.15);
  const commission = extra * size * 0.075;

  return (
    <div className="reveal pricing__roi">
      <div className="pricing__roi-fields">
        {[
          { label: "Deals per month", value: deals, set: setDeals },
          { label: "Average deal size ($)", value: size, set: setSize },
          { label: "Current pull-through (%)", value: pull, set: setPull },
          { label: "Number of reps", value: reps, set: setReps },
        ].map((field, i) => (
          <div key={i}>
            <label className="pricing__roi-label">{field.label}</label>
            <input
              type="number"
              value={field.value}
              onChange={(e) => field.set(Number(e.target.value) || 0)}
              className="pricing__roi-input"
            />
          </div>
        ))}
      </div>
      <div className="pricing__roi-results">
        {[
          { label: "Hours saved / month", value: `${hours} hrs` },
          { label: "Additional funded deals", value: `+${extra} deals` },
          {
            label: "Additional monthly commission",
            value: `$${commission.toLocaleString()}`,
          },
        ].map((r, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div className="mono pricing__roi-result-value">{r.value}</div>
            <div className="pricing__roi-result-label">{r.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
