"use client";

import { useReveal } from "../components/useReveal";
import CTABanner from "../components/CTABanner/CTABanner";
import "./security.scss";

export default function SecurityPage() {
  useReveal();

  return (
    <>
      <section className="security__hero">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Security & Compliance</div>
            <h1 className="display-xl security__hero-title">
              Enterprise-grade security.
              <br />
              Your data stays yours.
            </h1>
            <p className="text-lg security__hero-sub">
              Built from day one with financial-grade data protection.
              Multi-tenant isolation at the database level — not the application
              level.
            </p>
          </div>
        </div>
      </section>

      {/* Core Security */}
      <section className="section">
        <div className="container">
          <div className="grid-2 security__grid">
            {[
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                ),
                title: "Multi-Tenant Data Isolation",
                desc: "PostgreSQL Row-Level Security (RLS) enforced on 18+ tables. ISO A's proprietary lender data is cryptographically invisible to ISO B. This isn't application-level filtering that can be bypassed — it's database-level enforcement.",
                detail:
                  "Every query is automatically scoped by organization ID at the Supabase layer. Even if application code had a bug, the database would still prevent cross-tenant data access.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                title: "Role-Based Access Control",
                desc: "Owner, Admin, and Rep — three granular permission levels control who sees what across your organization. Owners manage billing and team. Admins configure lenders and settings. Reps work deals.",
                detail:
                  "Permission checks happen at both the API route level and the database level for defense-in-depth security.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                  </svg>
                ),
                title: "Complete Audit Trail",
                desc: "Every action on every deal is timestamped, attributed, and stored in an append-only log. Submissions, lender responses, document uploads, AI scoring events, notes, and calls — all traceable.",
                detail:
                  "The audit log cannot be edited or deleted by any user, including organization owners. Perfect for regulatory compliance and team accountability.",
              },
              {
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                ),
                title: "GDPR/CCPA Compliance",
                desc: "Full data export on demand for compliance requests. Know exactly what data is stored, where it's processed, and how long it's retained. Data deletion requests honored within the required timeframes.",
                detail:
                  "Export covers all merchant data, deal history, lender interactions, and AI-generated insights associated with your organization.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`card reveal reveal-delay-${(i % 2) + 1} security__card`}
              >
                <div className="security__card-icon">{item.icon}</div>
                <h3 className="security__card-title">{item.title}</h3>
                <p className="text-md security__card-desc">{item.desc}</p>
                <p className="text-sm security__card-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Infrastructure</div>
            <h2 className="display-lg security__section-title">
              Built on trusted foundations.
            </h2>
          </div>
          <div className="grid-4">
            {[
              {
                title: "Supabase (PostgreSQL)",
                desc: "SOC 2 Type II certified database hosting with automatic backups and point-in-time recovery.",
              },
              {
                title: "Vercel Edge Network",
                desc: "Global CDN deployment with automatic SSL, DDoS protection, and 99.99% uptime SLA.",
              },
              {
                title: "AES-256 Encryption",
                desc: "All data encrypted at rest. TLS 1.3 encryption in transit for every API call and file transfer.",
              },
              {
                title: "Brute-Force Protection",
                desc: "Login rate limiting, account lockout after failed attempts, and suspicious activity monitoring.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`card reveal reveal-delay-${i + 1} security__infra-card`}
              >
                <h3 className="security__infra-title">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Security */}
      <section className="section">
        <div className="container-narrow">
          <div className="section-header center reveal">
            <div className="label">Document Vault</div>
            <h2 className="display-lg security__section-title">
              Bank statements deserve bank-grade protection.
            </h2>
            <p className="text-lg security__section-sub">
              Merchant bank statements contain the most sensitive business data.
              YieldStream treats them accordingly — encrypted storage, scoped
              access, and automatic retention policies.
            </p>
          </div>
          <div className="reveal security__vault-list">
            {[
              "All uploaded documents encrypted with AES-256 at rest",
              "Scoped to organization — no cross-tenant access possible",
              "Secure token-gated upload links for merchant self-service",
              "Automatic file type validation — PDF, IMG, DOCX only",
              "Configurable retention policies for compliance requirements",
              "Full access audit trail — every view and download logged",
            ].map((item, i) => (
              <div key={i} className="security__vault-item">
                <span className="security__vault-check">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="security__vault-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Trust */}
      <section className="section">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label-mono">Data Trust</div>
            <h2 className="display-lg security__section-title">
              Your data stays yours.
            </h2>
            <p
              className="text-lg"
              style={{ maxWidth: 600, margin: "12px auto 0" }}
            >
              Your lender list is proprietary. We never contact funders or
              merchants on your behalf. No data resale. No shared blacklists.
              Full export anytime.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                title: "We don\u2019t own your relationships",
                desc: "Your lender contacts, submission history, and pipeline are yours \u2014 we never reach out to your funders or merchants.",
              },
              {
                title: "We don\u2019t sell your data",
                desc: "No data resale, no shared blacklists, no monetizing your deal flow behind your back.",
              },
              {
                title: "You can leave with everything",
                desc: "Full data export anytime. No lock-in, no hostage negotiations. Your business stays portable.",
              },
            ].map((c, i) => (
              <div key={i} className={`card reveal reveal-delay-${i + 1}`}>
                <h3 className="security__card-title">{c.title}</h3>
                <p className="text-sm">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Questions about security?"
        sub="We're happy to walk through our security architecture, provide documentation, or discuss enterprise requirements."
        primaryText="Contact Security Team"
        primaryHref="/contact"
        secondaryText="View Documentation"
        secondaryHref="/resources"
      />
    </>
  );
}
