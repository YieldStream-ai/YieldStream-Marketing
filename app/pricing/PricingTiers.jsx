"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import EnterpriseModal from "../components/EnterpriseModal";
import "./pricing.scss";

function AnimatedPrice({ value }) {
  const motionValue = useMotionValue(value);
  const displayed = useTransform(
    motionValue,
    (v) => "$" + Math.round(v).toLocaleString(),
  );

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.5,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [value, motionValue]);

  return <motion.span>{displayed}</motion.span>;
}

const CheckIcon = ({ size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const allPlansInclude = [
  "AI lender matching & scoring engine",
  "Unlimited merchants & deals",
  "Secure Document Portals for each deal",
  "Deal pipeline (Kanban + Table)",
  "Offer comparison & scoring",
  "Lender Registry management",
  "Renewal forecasting & alerts",
  "Smart Underwriting & Deal insights",
  "Full audit log & compliance export",
  "CSV import & export",
  "Notes & internal comments",
  "Activity logs & timeline",
  "Contact & owner management",
  "Email & communication tracking",
  "Task management & follow-ups",
  "Custom fields & tags",
  "Role-based permissions",
];

const tiers = [
  {
    name: "Founder",
    spotsRemaining: "20 SPOTS REMAINING",
    desc: "First 20 ISOs only. Locked-in rate forever — never increases regardless of future pricing.",
    monthly: 797,
    annual: 638,
    featureLabel: null,
    highlights: [
      "300 AI analyses / mo",
      "Unlimited team seats",
      "Priority onboarding & setup",
      "Direct Slack channel with founding team",
      "Influence the product roadmap",
      "Rate locked for life — never increases",
    ],
    cta: "Claim Founding Spot →",
    ctaVariant: "primary",
    href: { name: "Founder", href: "/checkout?plan=founder" },
  },
  {
    name: "Professional",
    spotsRemaining: null,
    desc: "For established ISOs running 20+ deals per month. Built for volume, designed for serious operations.",
    monthly: 1197,
    annual: 958,
    featureLabel: "Includes:",
    highlights: [
      "600 AI analyses / mo",
      "Unlimited team seats",
      "Standard onboarding",
    ],
    cta: "Get Started →",
    ctaVariant: "dark",
    href: { name: "Professional", href: "/checkout?plan=professional" },
  },
  {
    name: "Enterprise",
    spotsRemaining: null,
    desc: "For multi-office ISOs with high volume needs. Let's build the right plan for your team.",
    monthly: null,
    annual: null,
    featureLabel: "Everything in Professional, plus:",
    highlights: [
      "High-volume AI analyses (custom allotment)",
      "Unlimited team seats",
      "Dedicated account manager",
      "Custom API integrations",
      "SSO & advanced security",
      "Priority support",
    ],
    cta: "Talk to Sales →",
    ctaVariant: "outline",
    href: { name: "Enterprise", href: null },
  },
];

export default function PricingTiers({ annual, setAnnual }) {
  const [showEnterprise, setShowEnterprise] = useState(false);

  return (
    <div style={{ padding: "48px 24px 0", maxWidth: 1100, margin: "0 auto" }}>
      <div className="pricing__container">
        {/* Header bar */}
        <div className="pricing__header-bar">
          <span className="pricing__header-label">Compare Plans</span>
          <div className="pricing__header-toggle">
            <span
              className={`pricing__toggle-label ${!annual ? "pricing__toggle-label--active" : ""}`}
            >
              Monthly
            </span>
            <div
              className={`pricing__toggle-switch ${annual ? "pricing__toggle-switch--active" : ""}`}
              onClick={() => setAnnual(!annual)}
            >
              <div className="pricing__toggle-knob" />
            </div>
            <span
              className={`pricing__toggle-label ${annual ? "pricing__toggle-label--active" : ""}`}
            >
              Annual
              <span className="pricing__toggle-badge">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Plan columns */}
        <div className="pricing__plans">
          {tiers.map((tier) => (
            <div key={tier.name} className="pricing__plan">
              {/* Row 1: Plan name */}
              <h3 className="pricing__plan-name">{tier.name}</h3>

              {/* Row 2: Price */}
              <div className="pricing__plan-price">
                {tier.monthly ? (
                  <>
                    <span className="pricing__plan-amount">
                      <AnimatedPrice
                        value={annual ? tier.annual : tier.monthly}
                      />
                    </span>
                    <span className="pricing__plan-interval">/month</span>
                  </>
                ) : (
                  <span className="pricing__plan-pill">Custom Pricing</span>
                )}
              </div>

              {/* Row 3: Description */}
              <p className="pricing__plan-desc">{tier.desc}</p>

              {/* Row 4: CTA */}
              <div className="pricing__plan-cta-wrap">
                {tier.href?.href ? (
                  <Link
                    href={`${tier.href.href}&interval=${annual ? "annual" : "monthly"}`}
                    className={`pricing__plan-cta pricing__plan-cta--${tier.ctaVariant}`}
                  >
                    {tier.cta}
                  </Link>
                ) : (
                  <button
                    onClick={
                      tier.name === "Enterprise"
                        ? () => setShowEnterprise(true)
                        : undefined
                    }
                    className={`pricing__plan-cta pricing__plan-cta--${tier.ctaVariant}`}
                  >
                    {tier.cta}
                  </button>
                )}
              </div>

              {/* Row 5: Feature divider + label/badge */}
              <div className="pricing__plan-divider">
                {tier.spotsRemaining && (
                  <span className="pricing__plan-spots">
                    {tier.spotsRemaining}
                  </span>
                )}
                {tier.featureLabel ? (
                  <span className="pricing__plan-divider-label">
                    {tier.featureLabel}
                  </span>
                ) : null}
              </div>

              {/* Row 7: Feature list */}
              <ul className="pricing__plan-features">
                {tier.highlights.map((text, i) => (
                  <li key={i} className="pricing__plan-feature">
                    <CheckIcon size={16} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="pricing__guarantee">
          All plans include a 30-day money-back guarantee. Not the right fit?
          Full refund, no questions asked.
        </p>

        {/* All plans include */}
        <div className="pricing__all-plans">
          <div className="pricing__all-plans-title">All plans include</div>
          <div className="pricing__all-plans-grid">
            {allPlansInclude.map((item, i) => (
              <div key={i} className="pricing__all-plans-feature">
                <CheckIcon size={14} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROI callout bar */}
      <div className="pricing__callout">
        <span>
          Your team spends 22+ hours a week on manual underwriting. YieldStream
          gives that time back.
        </span>
        <Link href="/checkout?plan=founder" className="pricing__callout-cta">
          Sign Up →
        </Link>
      </div>

      <EnterpriseModal
        isOpen={showEnterprise}
        onClose={() => setShowEnterprise(false)}
      />
    </div>
  );
}
