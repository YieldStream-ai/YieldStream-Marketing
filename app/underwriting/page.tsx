"use client";

import { useState } from "react";
import Image from "next/image";
import { useReveal } from "../components/useReveal";
import CTABanner from "../components/CTABanner";
import IngestionFlow from "../components/IngestionFlow";
import AuditAccordion from "../components/AuditAccordion";
import BankIntelligencePanel from "../components/BankIntelligencePanel";
import UnderwritingHero from "../components/UnderwritingHero";
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
              Statements are parsed line-by-line by deterministic
              extractors&nbsp;&mdash; not LLMs&nbsp;&mdash; so the numbers are
              exact. AI then turns those structured signals into the risk flags
              and summaries your team reviews against the source.
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
              The note that replaces 20&nbsp;minutes of analysis.
            </h2>
          </div>
          <div className="grid-feature underwriting__note-grid reveal">
            <UnderwritingHero />
            <div className="underwriting__note-right">
              <p className="text-md" style={{ marginTop: 0, marginBottom: 24 }}>
                Every analysis generates a structured, human-readable
                assessment. Your team reads the note, checks it against the
                data, and walks into every deal knowing exactly how to
                position&nbsp;it.
              </p>
              <blockquote className="underwriting__note-quote">
                <p>
                  Premium profile —{" "}
                  <strong>$120K ADB</strong> is well above most lender floors;
                  expect competitive factor rates. Revenue stable with no NSFs
                  in 90&nbsp;days.
                </p>
              </blockquote>
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
          <div className="reveal" style={{ position: "relative" }}>
            <div className="underwriting__product-glow" />
            <div className="underwriting__product-frame underwriting__product-frame--fade">
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
