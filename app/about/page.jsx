'use client';

import { useReveal } from '../components/useReveal';
import CTABanner from '../components/CTABanner';
import './about.scss';

export default function AboutPage() {
  useReveal();

  return (
    <>
      <section className="about__hero">
        <div className="container-narrow">
          <div className="section-header center reveal">
            <div className="label">About YieldStream</div>
            <h1 className="display-xl about__hero-title">Built by a broker who<br />got tired of spreadsheets.</h1>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section">
        <div className="container-narrow">
        <div className="reveal about__story">
          <p>
            I spent years as an MCA broker, and the workflow was chaos. Not organized chaos — actual chaos. Sticky notes on monitors with lender appetites that changed two weeks ago. Printed bank statements stacked on desks with handwritten margin notes. Approval emails buried in threads nobody could find. Stips tracked in one place, offers in another, and the deal itself living across three tabs, a text chain, and somebody's memory.
          </p>
          <p>
            The CRM was supposed to fix this. It didn't. It just gave us a more expensive place to lose things. A thousand fields, none of them built for how funding actually works. So we built workarounds on top of workarounds — spreadsheets taped to a Salesforce instance that fought us every step of the way.
          </p>
          <p>
            When a deal got declined, the reason disappeared. When a lender tightened their buybox, I found out three wasted submissions later. When a new rep joined, it took months before they could make a decent lender call — because the real intelligence lived in sticky notes, gut feel, and whatever the senior broker could remember from last quarter.
          </p>
          <p>
            <strong className="about__story-strong">YieldStream exists because the tools were never built for us.</strong> Not the brokers — the tools. CRMs store data but can't tell you where to send a deal. They'll let you log a decline but won't stop you from making the same submission tomorrow. Nobody was building software for the actual job: reading a bank statement, matching it to a lender who's actually hungry, and getting the deal funded before the merchant walks.
          </p>
          <p>
            So I built it. YieldStream replaces the sticky notes and the spreadsheet workarounds with a system that actually thinks. It analyzes bank statements in minutes. It scores every lender against every deal using your relationship history. It learns from every outcome. And it explains every recommendation in plain English — because brokers don't trust black boxes, and they shouldn't have to.
          </p>
          <p>
            We're just getting started. The first 20 founding members will shape what this platform becomes. If you're running an ISO and your "system" is held together with sticky notes, printed PDFs, and a CRM that wasn't built for funding — I'd love to show you what's possible.
          </p>
        </div>
          <div className="reveal about__author-wrap">
            <div className="about__author-inner">
              <div className="about__author-avatar">JD</div>
              <div>
                <div className="about__author-name">Joshua Dinh</div>
                <div className="text-sm">Founder & CEO, YieldStream.ai</div>
                <div className="text-sm">Former MCA Broker</div>
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
              { title: 'Transparent AI', desc: 'Every recommendation comes with a reason. No black boxes. If you can\'t explain why the system made a decision, the system shouldn\'t make that decision.' },
              { title: 'Broker-First Design', desc: 'We build for the people who use this every day — not for demo screenshots. Every feature starts with "would this actually change how a broker works?"' },
              { title: 'Compounding Intelligence', desc: 'The platform gets smarter with every deal you process. Your data is your moat. Six months of outcome data produces dramatically better predictions than Day 1.' },
              { title: 'Data Privacy as a Feature', desc: 'Your lender relationships, pull-through rates, and commission data are your competitive advantage. We enforce isolation at the database level, not the application level.' },
              { title: 'Earn Trust Progressively', desc: 'New users start with rule-based matching. AI predictions unlock after you\'ve built enough data. We\'d rather under-promise than erode confidence with thin predictions.' },
              { title: 'Build in Public', desc: 'Founding members see the roadmap, vote on features, and get a direct line to the team. We ship fast and iterate based on real broker feedback.' },
            ].map((v, i) => (
              <div key={i} className={`card reveal reveal-delay-${(i % 3) + 1}`}>
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
