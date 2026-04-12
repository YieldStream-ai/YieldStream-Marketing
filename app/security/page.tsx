"use client";

import { useReveal } from "../components/useReveal";
import CTABanner from "../components/CTABanner/CTABanner";
import "./security.scss";

export default function SecurityPage() {
  useReveal();

  return (
    <>
      {/* ===== 1. HERO ===== */}
      <section className="security__hero">
        <div className="container">
          <div className="security__hero-inner reveal">
            <div className="label">Security & Compliance</div>
            <h1 className="display-xl security__hero-title">
              Enterprise-grade security.
              <br />
              <span className="security__hero-title-accent">
                Your data stays yours.
              </span>
            </h1>
            <p className="text-lg security__hero-sub">
              Built from day one with financial-grade data protection.
              Multi-tenant isolation at the database level — not the application
              level.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="security__trust-strip">
        <div className="container">
          <div className="security__trust-strip-inner reveal">
            {[
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                ),
                label: "AES-256 Encryption",
                detail: "At rest & in transit",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
                label: "SOC 2 Type II Infra",
                detail: "Supabase certified",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                  </svg>
                ),
                label: "RLS Isolation",
                detail: "18+ enforced tables",
              },
              {
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ),
                label: "TLS 1.2+",
                detail: "All API connections",
              },
            ].map((badge, i) => (
              <div key={i} className="security__trust-badge">
                <span className="security__trust-badge-icon">{badge.icon}</span>
                <div>
                  <strong>{badge.label}</strong>
                  <span>{badge.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. ARCHITECTURE PRINCIPLES ===== */}
      <section className="section-sm">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label-mono">Architecture</div>
            <h2 className="display-lg">Security by design, not by patch.</h2>
          </div>

          {/* Primary: Multi-Tenant Isolation */}
          <div className="grid-feature reveal">
            <div className="security__arch-text">
              <div className="label-mono">Data Isolation</div>
              <h3 className="display-md">Multi-Tenant Isolation</h3>
              <p className="text-md">
                PostgreSQL Row-Level Security (RLS) enforced on 18+ tables. ISO
                A's proprietary lender data is cryptographically invisible to
                ISO B. This isn't application-level filtering that can be
                bypassed — it's database-level enforcement.
              </p>
              <ul className="security__arch-specs">
                <li>Every query scoped by organization ID at the Supabase layer</li>
                <li>Even application-level bugs cannot bypass database isolation</li>
                <li>Cryptographic separation between all tenant data</li>
              </ul>
            </div>
            <div className="security__arch-visual">
              <div className="security__isolation-diagram">
                <div className="security__isolation-org">
                  <div className="security__isolation-org-label">Org A</div>
                  <div className="security__isolation-org-rows">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                <div className="security__isolation-lock">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  <span>RLS</span>
                </div>
                <div className="security__isolation-org">
                  <div className="security__isolation-org-label">Org B</div>
                  <div className="security__isolation-org-rows">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Primary: RBAC */}
          <div className="grid-feature reveal security__arch-block-2">
            <div className="security__arch-text">
              <div className="label-mono">Access Control</div>
              <h3 className="display-md">Role-Based Permissions</h3>
              <p className="text-md">
                Three granular permission levels control who sees what across
                your organization. Brokers never see commission data they
                shouldn't. Permission checks happen at both the API route level
                and the database level for defense-in-depth security.
              </p>
              <ul className="security__arch-specs">
                <li>Owner — billing, team management, full configuration</li>
                <li>Admin — lender settings, pipeline config, reporting</li>
                <li>Rep — deal submission, pipeline access, scoped visibility</li>
              </ul>
            </div>
            <div className="security__arch-visual">
              <div className="security__rbac-matrix">
                <div className="security__rbac-header">
                  <span />
                  <span>Owner</span>
                  <span>Admin</span>
                  <span>Rep</span>
                </div>
                {[
                  ["Pipeline access", true, true, true],
                  ["Submit deals", true, true, true],
                  ["Lender config", true, true, false],
                  ["View commissions", true, false, false],
                  ["Team management", true, false, false],
                  ["Billing & export", true, false, false],
                ].map(([label, owner, admin, rep], i) => (
                  <div key={i} className="security__rbac-row">
                    <span>{label}</span>
                    <span>{owner ? "✓" : "—"}</span>
                    <span>{admin ? "✓" : "—"}</span>
                    <span>{rep ? "✓" : "—"}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary pair: Audit + Compliance */}
          <div className="grid-2 security__secondary-pair reveal">
            <div className="security__accent-block">
              <h3 className="security__accent-title">Complete Audit Trail</h3>
              <p className="text-md">
                Every action on every deal is timestamped, attributed, and
                stored in an append-only log. Submissions, lender responses,
                document uploads, AI scoring events, notes, and calls — all
                traceable. The audit log cannot be edited or deleted by any
                user, including organization owners.
              </p>
            </div>
            <div className="security__accent-block">
              <h3 className="security__accent-title">GDPR & CCPA Compliance</h3>
              <p className="text-md">
                Full data export on demand. Data deletion requests honored
                within required CCPA timeframes. Configurable retention policies
                per organization. Know exactly what data is stored, where it's
                processed, and how long it's retained. Full deletion available
                on churn — no data hostage scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. COMPETITIVE ISOLATION (DARK) ===== */}
      <section className="section-sm security__isolation-section">
        <div className="security__isolation-glow security__isolation-glow--1" />
        <div className="security__isolation-glow security__isolation-glow--2" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-header center reveal">
            <div className="label-mono">Data Boundaries</div>
            <h2 className="display-lg">
              Your competitive edge stays
              <br />
              yours alone.
            </h2>
            <p className="text-lg">
              We share only anonymized market trends across the platform —
              never your relationships, deals, or strategy.
            </p>
          </div>
          <div className="grid-3 security__dark-grid reveal">
            {[
              {
                mono: "01",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20V10" />
                    <path d="M18 20V4" />
                    <path d="M6 20v-4" />
                  </svg>
                ),
                title: "We share only the averages",
                desc: "Cross-platform insights draw from aggregated approval ranges and industry-wide volume trends. No individual deal, merchant, or organization is ever identifiable.",
              },
              {
                mono: "02",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M4.9 4.9L19.1 19.1" />
                  </svg>
                ),
                title: "We never expose your book",
                desc: "Lender contacts, commission structures, submission pipelines, and deal-level outcomes remain sealed to your tenant. Other brokers cannot see or infer them.",
              },
              {
                mono: "03",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M4.93 4.93l14.14 14.14" />
                  </svg>
                ),
                title: "We never train on your playbook",
                desc: "Your approval patterns and lender preferences never feed models for other organizations. No cross-tenant scoring, no shared blacklists, no sold insights.",
              },
            ].map((item, i) => (
              <div key={i} className={`security__dark-card reveal reveal-delay-${i + 1}`}>
                <div className="security__dark-card-header">
                  <div className="security__dark-card-icon">{item.icon}</div>
                  <span className="security__dark-card-mono">{item.mono}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. INFRASTRUCTURE TABLE ===== */}
      <section className="section-sm">
        <div className="container-narrow">
          <div className="section-header center reveal">
            <div className="label-mono">Infrastructure</div>
            <h2 className="display-lg">Built on trusted foundations.</h2>
          </div>
          <div className="security__infra-table reveal">
            {[
              {
                name: "Supabase (PostgreSQL)",
                desc: "SOC 2 Type II certified database hosting with automatic backups and point-in-time recovery.",
              },
              {
                name: "Vercel Edge Network",
                desc: "Global CDN with automatic SSL, DDoS protection, and 99.99% uptime SLA.",
              },
              {
                name: "AES-256 at Rest",
                desc: "All data encrypted at rest using AES-256 industry-standard encryption.",
              },
              {
                name: "TLS 1.2+ in Transit",
                desc: "All API communication, file transfers, and client connections encrypted with TLS 1.2 or higher.",
              },
              {
                name: "Brute-Force Protection",
                desc: "Login rate limiting, account lockout after failed attempts, and suspicious activity monitoring.",
              },
              {
                name: "Daily Automated Backups",
                desc: "Automated daily backups with point-in-time recovery. Infrastructure managed by Supabase with SOC 2 compliance.",
              },
            ].map((row, i) => (
              <div key={i} className="security__infra-row">
                <span className="security__infra-name">{row.name}</span>
                <span className="security__infra-desc">{row.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. DOCUMENT VAULT ===== */}
      <section className="section-sm section-alt">
        <div className="container-narrow">
          <div className="section-header center reveal">
            <div className="label-mono">Document Vault</div>
            <h2 className="display-lg">
              Bank statements deserve bank-grade protection.
            </h2>
            <p className="text-lg">
              Merchant bank statements contain the most sensitive business data.
              YieldStream treats them accordingly.
            </p>
          </div>
          <div className="security__vault-list reveal">
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


      {/* ===== 7. DATA TRUST + OPERATIONAL SECURITY ===== */}
      <section className="section-sm">
        <div className="container-narrow">
          <div className="section-header center reveal">
            <div className="label-mono">Data Trust</div>
            <h2 className="display-lg">Your data stays yours.</h2>
            <p className="text-lg">
              Your lender list is proprietary. No data resale. No shared
              blacklists. Full export anytime.
            </p>
          </div>

          <div className="security__pledges reveal">
            {[
              {
                num: "01",
                title: "We don\u2019t own your relationships",
                desc: "Your lender contacts, submission history, and pipeline are yours — we never reach out to your funders or merchants.",
              },
              {
                num: "02",
                title: "We don\u2019t sell your data",
                desc: "No data resale, no shared blacklists, no monetizing your deal flow behind your back.",
              },
              {
                num: "03",
                title: "You can leave with everything",
                desc: "Full data export anytime. No lock-in, no hostage negotiations. Your business stays portable.",
              },
            ].map((pledge, i) => (
              <div key={i} className="security__pledge">
                <span className="security__pledge-num">{pledge.num}</span>
                <div>
                  <strong className="security__pledge-title">{pledge.title}</strong>
                  <p className="security__pledge-desc">{pledge.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <hr className="divider" style={{ margin: "var(--space-3xl) 0" }} />

          <div className="grid-2 reveal">
            <div className="security__accent-block">
              <h3 className="security__accent-title">Incident Response</h3>
              <p className="text-md">
                Security incidents are triaged within 24 hours with affected
                organizations notified per our incident response policy.
                Dedicated security contact for enterprise accounts.
              </p>
            </div>
            <div className="security__accent-block">
              <h3 className="security__accent-title">Data Retention & Deletion</h3>
              <p className="text-md">
                Configurable retention policies per organization. Full data
                deletion on request within CCPA-required timeframes. When an org
                churns, all data can be permanently purged — no residual copies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8. CTA ===== */}
      <CTABanner
        headline="Questions about our security posture?"
        sub="We provide security documentation, architecture walkthroughs, and can discuss enterprise requirements including custom DPAs."
        primaryText="Contact Security Team"
        primaryHref="/contact"
        secondaryText="View Documentation"
        secondaryHref="/resources"
      />
    </>
  );
}
