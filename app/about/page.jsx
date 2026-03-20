"use client";

import { useReveal } from "../components/useReveal";
import CTABanner from "../components/CTABanner";
import "./about.scss";

export default function AboutPage() {
  useReveal();

  return (
    <>
      <section className="about__hero">
        <div className="container-narrow">
          <div className="section-header center reveal">
            <div className="label">About YieldStream</div>
            <h1 className="display-xl about__hero-title">
              Architecting the Future of Lender Routing.
            </h1>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section">
        <div className="container-narrow">
          <div className="reveal about__story">
            <div className="reveal about__story">
              <p>
                The Merchant Cash Advance industry moves billions in capital
                every year, yet its underlying infrastructure remains
                fundamentally fragmented. For too long, the "intelligence" of a
                submission has lived in buried email threads, handwritten notes,
                and shifting lender appetites that were out of date before the
                ink dried.
              </p>
              <p>
                In this environment, even seven-figure deals are forced to live
                across disconnected tabs and text chains. The "Enterprise" CRMs
                promised to solve this, but they failed. They simply provided a
                more expensive place to lose data — offering a thousand generic
                fields that were never built for the high-velocity reality of
                commercial funding.
              </p>
              <p>
                YieldStream was engineered to bridge this gap. By combining
                template-based data extraction with advanced LLM reasoning, we
                have built a high-density environment that doesn't just store
                data — it understands it.
              </p>
              <p>
                <strong className="about__story-strong text-blue-400">
                  YieldStream exists because legacy tools are record-keepers,
                  not decision-makers.
                </strong>
              </p>
              <p>
                Standard software will log a decline, but it won't prevent a
                broker from making that same bad submission tomorrow. Until now,
                no one was building for the actual job: instantly parsing bank
                statements, matching them to active lender appetites, and
                securing funding before a merchant walks.
              </p>
              <p>
                We have moved beyond the era of manual spreadsheets to create a
                system that actually thinks. YieldStream replaces manual
                workarounds with an intelligence layer that analyzes bank
                statements in minutes and scores lenders against your specific
                relationship history. It explains every recommendation in plain
                English because, in underwriting, you don't trust black boxes.
              </p>
              <p>
                We are currently in the Founder phase. The first 20 members are
                helping us refine the most advanced lender-matching engine in
                the industry. If your current "system" is still held together by
                fragmented notes and a CRM not built for funding, it is time to
                see what Submission Intelligence looks like.
              </p>
            </div>
          </div>
          <div className="reveal about__author-wrap">
            <div className="about__author-inner">
              <div className="about__author-avatar">JHD</div>
              <div className="about__author-info">
                <div className="about__author-name">J.H. Dinh</div>
                <div className="about__author-role">Founder & CEO</div>
                <div className="about__author-subtitle">
                  Former Submission Specialist & ISO Consultant
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Our Principles</div>
            <h2 className="display-lg about__section-title">How we build.</h2>
          </div>
          <div className="grid-3">
            {[
              {
                title: "Transparent AI",
                desc: "Every recommendation comes with a reason. No black boxes. If you can't explain why the system made a decision, the system shouldn't make that decision.",
              },
              {
                title: "Broker-First Design",
                desc: 'We build for the people who use this every day — not for demo screenshots. Every feature starts with "would this actually change how a broker works?"',
              },
              {
                title: "Compounding Intelligence",
                desc: "The platform gets smarter with every deal you process. Your data is your moat. Six months of outcome data produces dramatically better predictions than Day 1.",
              },
              {
                title: "Data Privacy as a Feature",
                desc: "Your lender relationships, pull-through rates, and commission data are your competitive advantage. We enforce isolation at the database level, not the application level.",
              },
              {
                title: "Earn Trust Progressively",
                desc: "New users start with rule-based matching. AI predictions unlock after you've built enough data. We'd rather under-promise than erode confidence with thin predictions.",
              },
              {
                title: "Build in Public",
                desc: "Founding members see the roadmap, vote on features, and get a direct line to the team. We ship fast and iterate based on real broker feedback.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className={`card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <h3 className="about__card-title">{v.title}</h3>
                <p className="text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Join the founding team."
        sub="20 spots. Shape the product. Lock in the lowest rate forever."
        primaryText="Claim Founding Spot →"
      />
    </>
  );
}
