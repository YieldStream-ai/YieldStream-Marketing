'use client';

import { useReveal } from '../components/useReveal';
import CTABanner from '../components/CTABanner';

export default function SecurityPage() {
  useReveal();

  return (
    <>
      <section style={{ padding: '80px 0 60px', background: 'var(--n50)' }}>
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Security & Compliance</div>
            <h1 className="display-xl" style={{ marginTop: 12 }}>Enterprise-grade security.<br />Your data stays yours.</h1>
            <p className="text-lg" style={{ maxWidth: 600, margin: '16px auto 0' }}>
              Built from day one with financial-grade data protection. Multi-tenant isolation at the database level — not the application level.
            </p>
          </div>
        </div>
      </section>

      {/* Core Security */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 'var(--space-2xl)', marginBottom: 'var(--space-4xl)' }}>
            {[
              {
                icon: '🔒', title: 'Multi-Tenant Data Isolation',
                desc: 'PostgreSQL Row-Level Security (RLS) enforced on 18+ tables. ISO A\'s proprietary lender data is cryptographically invisible to ISO B. This isn\'t application-level filtering that can be bypassed — it\'s database-level enforcement.',
                detail: 'Every query is automatically scoped by organization ID at the Supabase layer. Even if application code had a bug, the database would still prevent cross-tenant data access.'
              },
              {
                icon: '🛡', title: 'Role-Based Access Control',
                desc: 'Owner, Admin, and Rep — three granular permission levels control who sees what across your organization. Owners manage billing and team. Admins configure lenders and settings. Reps work deals.',
                detail: 'Permission checks happen at both the API route level and the database level for defense-in-depth security.'
              },
              {
                icon: '📋', title: 'Complete Audit Trail',
                desc: 'Every action on every deal is timestamped, attributed, and stored in an append-only log. Submissions, lender responses, document uploads, AI scoring events, notes, and calls — all traceable.',
                detail: 'The audit log cannot be edited or deleted by any user, including organization owners. Perfect for regulatory compliance and team accountability.'
              },
              {
                icon: '📄', title: 'GDPR/CCPA Compliance',
                desc: 'Full data export on demand for compliance requests. Know exactly what data is stored, where it\'s processed, and how long it\'s retained. Data deletion requests honored within the required timeframes.',
                detail: 'Export covers all merchant data, deal history, lender interactions, and AI-generated insights associated with your organization.'
              },
            ].map((item, i) => (
              <div key={i} className={`card reveal reveal-delay-${(i % 2) + 1}`} style={{ padding: 32 }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: 8 }}>{item.title}</h3>
                <p className="text-md" style={{ marginBottom: 12 }}>{item.desc}</p>
                <p className="text-sm" style={{ fontStyle: 'italic' }}>{item.detail}</p>
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
            <h2 className="display-lg" style={{ marginTop: 12 }}>Built on trusted foundations.</h2>
          </div>
          <div className="grid-4">
            {[
              { title: 'Supabase (PostgreSQL)', desc: 'SOC 2 Type II certified database hosting with automatic backups and point-in-time recovery.' },
              { title: 'Vercel Edge Network', desc: 'Global CDN deployment with automatic SSL, DDoS protection, and 99.99% uptime SLA.' },
              { title: 'AES-256 Encryption', desc: 'All data encrypted at rest. TLS 1.3 encryption in transit for every API call and file transfer.' },
              { title: 'Brute-Force Protection', desc: 'Login rate limiting, account lockout after failed attempts, and suspicious activity monitoring.' },
            ].map((item, i) => (
              <div key={i} className={`card reveal reveal-delay-${i + 1}`} style={{ padding: 24, textAlign: 'center' }}>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 600, marginBottom: 6 }}>{item.title}</h3>
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
            <h2 className="display-lg" style={{ marginTop: 12 }}>Bank statements deserve bank-grade protection.</h2>
            <p className="text-lg" style={{ maxWidth: 600, margin: '16px auto 0' }}>
              Merchant bank statements contain the most sensitive business data. YieldStream treats them accordingly — encrypted storage, scoped access, and automatic retention policies.
            </p>
          </div>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 'var(--space-2xl)' }}>
            {[
              'All uploaded documents encrypted with AES-256 at rest',
              'Scoped to organization — no cross-tenant access possible',
              'Secure token-gated upload links for merchant self-service',
              'Automatic file type validation — PDF, IMG, DOCX only',
              'Configurable retention policies for compliance requirements',
              'Full access audit trail — every view and download logged',
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '14px 20px', background: 'var(--n50)',
                borderRadius: 8, border: '1px solid var(--n150)',
              }}>
                <span style={{ color: 'var(--a500)', fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: '0.92rem', color: 'var(--n700)' }}>{item}</span>
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
