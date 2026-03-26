import { useState } from "react";
import Link from "next/link";

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
];

const tiers = [
  {
    name: "Founder",
    badge: "Founding Member — 20 Spots",
    badgeStyle: { background: "var(--p400)", color: "#fff" },
    desc: "First 20 ISOs only. Locked-in rate forever — never increases regardless of future pricing.",
    monthly: 797,
    annual: 638,
    wasMonthly: "$997/mo regular",
    wasAnnual: "$797/mo regular",
    highlights: [
      { icon: "🔒", text: "Rate locked for life — never increases" },
      { icon: "✦", text: "100 AI analyses / mo" },
      { icon: "✦", text: "Unlimited team seats" },
      { icon: "✦", text: "Priority onboarding & setup" },
      { icon: "✦", text: "Direct Slack channel with founding team" },
      { icon: "✦", text: "Influence the product roadmap" },
    ],
    note: "Rate locked forever. 30-day money-back guarantee. Not the right fit? Full refund, no questions asked.",
    cta: "Claim Founding Spot →",
    ctaStyle: {
      background: "var(--p400, #047987)",
      color: "#fff",
      border: "none",
    },
    cardStyle: {
      border: "2px solid var(--p300, #5bc8d4)",
      background: "linear-gradient(160deg, #f0fbfc, #fff)",
      boxShadow: "0 6px 32px rgba(4, 121, 135, 0.12)",
    },
    featured: false,
    href: { name: "Founder", href: "/checkout?plan=founder" },
  },
  {
    name: "Professional",
    badge: "Most Popular",
    badgeStyle: { background: "var(--p600, #01313a)", color: "#fff" },
    desc: "For established ISOs running 20+ deals per month. Built for volume, designed for serious operations.",
    monthly: 1197,
    annual: 958,
    wasMonthly: null,
    wasAnnual: "$1,197/mo if monthly",
    highlights: [
      { icon: "✦", text: "200 AI analyses / mo" },
      { icon: "✦", text: "Unlimited team seats" },
      { icon: "✦", text: "Standard onboarding" },
    ],
    note: "30-day money-back guarantee. Not the right fit? Full refund, no questions asked.",
    cta: "Get Started →",
    ctaStyle: {
      background: "var(--p600, #01313a)",
      color: "#fff",
      border: "none",
    },
    cardStyle: {
      border: "2px solid var(--p600, #01313a)",
      background: "linear-gradient(160deg, #e6f4f5, #fff)",
      boxShadow: "0 6px 32px rgba(1, 49, 58, 0.14)",
    },
    featured: true,
    href: { name: "Professional", href: "/checkout?plan=professional" },
  },
  {
    name: "Enterprise",
    badge: "Coming Soon",
    badgeStyle: { background: "#e8eaed", color: "#444" },
    desc: "For multi-office ISOs with 20+ reps needing custom integrations, dedicated support, and SLA guarantees.",
    monthly: null,
    annual: null,
    wasMonthly: null,
    wasAnnual: null,
    highlights: [
      { icon: "✦", text: "Unlimited AI analyses" },
      { icon: "✦", text: "Unlimited team seats" },
      { icon: "✦", text: "Dedicated account manager" },
      { icon: "✦", text: "Custom API integrations" },
      { icon: "✦", text: "SSO & advanced security" },
      { icon: "✦", text: "SLA guarantee" },
      { icon: "✦", text: "On-site onboarding available" },
      { icon: "✦", text: "Custom lender network setup" },
    ],
    note: "Everything in Professional, plus the above.",
    cta: "Get Notified →",
    ctaStyle: {
      background: "transparent",
      color: "#1a2e35",
      border: "1.5px solid #c8cdd2",
    },
    cardStyle: {
      border: "1px solid #e8eaed",
      background: "#fff",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
    },
    featured: false,
    href: { name: "Enterprise", href: null }, // Get Notified, no checkout
  },
];

export default function PricingTiers({ annual, setAnnual }) {
  return (
    <div
      style={{
        fontFamily: "'IBM Plex Sans', system-ui, sans-serif",
        padding: "48px 24px 64px",
        maxWidth: 1100,
        margin: "0 auto",
      }}
    >
      {/* Toggle */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          marginBottom: 48,
        }}
      >
        <span
          style={{
            fontSize: 14,
            color: !annual ? "#1a2e35" : "#9aa5b4",
            fontWeight: !annual ? 500 : 400,
          }}
        >
          Monthly
        </span>
        <div
          onClick={() => setAnnual(!annual)}
          style={{
            width: 44,
            height: 24,
            borderRadius: 12,
            cursor: "pointer",
            position: "relative",
            transition: "background 0.2s",
            background: annual ? "#047987" : "#d0d6de",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 3,
              left: annual ? 23 : 3,
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#fff",
              transition: "left 0.2s",
              boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
            }}
          />
        </div>
        <span
          style={{
            fontSize: 14,
            color: annual ? "#1a2e35" : "#9aa5b4",
            fontWeight: annual ? 500 : 400,
          }}
        >
          Annual{" "}
          <span
            style={{
              fontSize: 11,
              background: "#e6f4f5",
              color: "#047987",
              padding: "2px 7px",
              borderRadius: 4,
              fontWeight: 500,
              marginLeft: 4,
            }}
          >
            Save 20%
          </span>
        </span>
      </div>
      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 20,
          alignItems: "start",
        }}
      >
        {tiers.map((tier) => (
          <div
            key={tier.name}
            style={{
              borderRadius: 14,
              padding: "28px 24px 28px",
              position: "relative",
              ...tier.cardStyle,
            }}
          >
            {/* Badge */}
            <div
              style={{
                position: "absolute",
                top: -13,
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: 11,
                fontWeight: 600,
                padding: "3px 12px",
                borderRadius: 20,
                whiteSpace: "nowrap",
                letterSpacing: "0.03em",
                ...tier.badgeStyle,
              }}
            >
              {tier.badge}
            </div>

            {/* Name + desc */}
            <div style={{ marginTop: 8, marginBottom: 16 }}>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#1a2e35",
                  marginBottom: 6,
                }}
              >
                {tier.name}
              </div>
              <div style={{ fontSize: 13, color: "#6b7a8d", lineHeight: 1.6 }}>
                {tier.desc}
              </div>
            </div>

            {/* Price */}
            <div style={{ marginBottom: 6 }}>
              {tier.monthly ? (
                <>
                  <span
                    style={{
                      fontSize: 36,
                      fontWeight: 600,
                      color: "#1a2e35",
                      fontFamily: "'IBM Plex Mono', monospace",
                    }}
                  >
                    ${annual ? tier.annual : tier.monthly}
                  </span>
                  <span
                    style={{ fontSize: 13, color: "#9aa5b4", marginLeft: 4 }}
                  >
                    /month
                  </span>
                </>
              ) : (
                <span
                  style={{ fontSize: 36, fontWeight: 600, color: "#1a2e35" }}
                >
                  Custom
                </span>
              )}
            </div>

            {/* Was price */}
            <div
              style={{
                fontSize: 12,
                color: "#b0b8c4",
                textDecoration: "line-through",
                marginBottom: 20,
                minHeight: 18,
              }}
            >
              {annual ? tier.wasAnnual : tier.wasMonthly}
            </div>

            {/* Tier-specific highlights */}
            <div style={{ marginBottom: 16 }}>
              {tier.highlights.map((h, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      color: "#047987",
                      fontSize: 14,
                      marginTop: 1,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      color: "#1a2e35",
                      lineHeight: 1.5,
                      fontWeight: h.icon === "🔒" ? 500 : 400,
                    }}
                  >
                    {h.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <>
              {tier.href?.href ? (
                <Link
                  href={`${tier.href.href}&interval=${annual ? "annual" : "monthly"}`}
                  style={{
                    display: "block",
                    textAlign: "center",
                    textDecoration: "none",
                    width: "100%",
                    padding: "12px 0",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer",
                    letterSpacing: "0.01em",
                    transition: "opacity 0.15s",
                    ...tier.ctaStyle,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {tier.cta}
                </Link>
              ) : (
                <button
                  style={{
                    width: "100%",
                    padding: "12px 0",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer",
                    letterSpacing: "0.01em",
                    transition: "opacity 0.15s",
                    ...tier.ctaStyle,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {tier.cta}
                </button>
              )}
            </>

            {/* Note linking to all-plans */}
            {tier.note && (
              <div
                style={{
                  fontSize: 12,
                  color: "#7a8a95",
                  fontStyle: "italic",
                  borderTop: "0.5px solid #e8eaed",
                  paddingTop: 12,
                  marginBottom: 20,
                  lineHeight: 1.5,
                }}
              >
                {tier.note}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* All plans include */}
      <div style={{ marginTop: 56, textAlign: "center" }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#9aa5b4",
            marginBottom: 20,
          }}
        >
          All plans include
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0,1fr))",
            gap: "10px 32px",
            maxWidth: 860,
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          {allPlansInclude.map((item, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "flex-start", gap: 8 }}
            >
              <span
                style={{
                  color: "#047987",
                  fontSize: 13,
                  flexShrink: 0,
                  marginTop: 1,
                }}
              >
                ✓
              </span>
              <span style={{ fontSize: 13, color: "#5a6778", lineHeight: 1.5 }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
