"use client";

import { useState } from "react";
import Image from "next/image";
import { useReveal } from "../components/useReveal";
import CTABanner from "../components/CTABanner";
import IngestionFlow from "../components/IngestionFlow";
import AuditAccordion from "../components/AuditAccordion";
import BankIntelligencePanel from "../components/BankIntelligencePanel";
import "./underwriting.scss";

export default function UnderwritingPage() {
  useReveal();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <section className="underwriting__hero">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">AI Underwriting</div>
            <h1 className="display-xl underwriting__hero-title">
              12 months of statements. Scored in under two minutes.
            </h1>
            <p className="text-lg underwriting__hero-sub">
              YieldStream extracts every transaction, scores 20+ risk signals,
              and matches your lender panel before your underwriter opens the
              file.
            </p>
          </div>
        </div>
      </section>

      {/* The 2-Minute Audit */}
      <section className="section-sm">
        <div className="container">
          <div className="section-header center reveal">
            <div className="section-rule" />
            <div className="label-mono">The Pipeline</div>
            <h2 className="display-md">
              How a deal moves through YieldStream.
            </h2>
          </div>
          <div className="grid-feature underwriting__audit-grid reveal">
            <div>
              <p className="text-md underwriting__audit-callout">
                Most underwriters spend <strong>30 minutes</strong> manually
                reviewing files. YieldStream{" "}
                <strong>extracts every transaction</strong> and{" "}
                <strong>scores risk signals</strong> simultaneously — in under{" "}
                <strong>120 seconds</strong>.
              </p>
              <AuditAccordion activeStep={activeStep} />
            </div>
            <IngestionFlow onAnimationStep={setActiveStep} />
          </div>
        </div>
      </section>

      {/* Risk Signals */}
      <section className="section-sm section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <div className="section-rule" />
            <div className="label-mono">20+ Risk Signals</div>
            <h2 className="display-lg">
              Every number extracted. Every number verifiable.
            </h2>
            <p className="text-lg">
              AI pulls every metric from the statements. Your team verifies
              each one against the source.
            </p>
          </div>
          <div className="reveal">
            <BankIntelligencePanel />
          </div>
        </div>
      </section>

      {/* Underwriter's Note */}
      <section className="section-sm">
        <div className="container">
          <div className="section-header center reveal">
            <div className="section-rule" />
            <div className="label-mono">The Underwriter's Note</div>
            <h2 className="display-lg">
              One sentence your team can act on.
            </h2>
          </div>
          <div className="grid-feature reveal">
            <div className="screenshot screenshot-elevated">
              <Image
                src="/images/Underwriting-Intelligence.png"
                alt="Underwriting Intelligence"
                width={1400}
                height={800}
                priority
              />
            </div>
            <div>
              <p className="text-md" style={{ marginTop: 0, marginBottom: 20 }}>
                Every analysis generates a single human-readable sentence
                explaining the structural assessment. Your team reads the note,
                checks it against the data, and walks into every deal knowing
                exactly how to position it.
              </p>
              <div className="underwriting__note-card">
                <div className="mono underwriting__note-label">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      width: 14,
                      height: 14,
                      display: "inline",
                      verticalAlign: "middle",
                      marginRight: 4,
                    }}
                  >
                    <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                  </svg>{" "}
                  Example Note
                </div>
                <p className="underwriting__note-text">
                  Premium profile —{" "}
                  <strong style={{ color: "var(--a300)" }}>$120K ADB</strong> is
                  well above most lender floors; expect competitive factor
                  rates. Revenue stable with no NSFs in 90 days.
                </p>
              </div>
              <p className="text-sm underwriting__note-follow">
                No black boxes. No unexplainable scores. Just clear signals your
                team can verify against the source documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approval Comparison */}
      <section className="section-sm section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <div className="section-rule" />
            <div className="label-mono">Approval Comparison</div>
            <h2 className="display-lg">
              Which lenders actually overlap on this deal.
            </h2>
            <p className="text-lg">
              Buybox overlaps humans miss. Color-coded term highlights, offer
              scoring with reasoning, and one-click package generation.
            </p>
          </div>
          <div className="reveal" style={{ marginTop: "var(--space-2xl)", position: "relative" }}>
            <div className="underwriting__product-glow" />
            <div className="underwriting__product-frame">
              <Image
                src="/offer-comparison.png"
                alt="Offer Comparison"
                width={1400}
                height={800}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="See the underwriting in action."
        sub="Upload your first bank statement and watch the AI work in real-time."
      />
    </>
  );
}
