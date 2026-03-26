import Mono from "./Mono";

export default function SecuritySection({ active }) {
  return (
    <section
      className={`docs-section ${active ? "vis" : ""}`}
      id="sec-security"
    >
      <div className="docs-pg-lbl">Infrastructure</div>
      <div className="docs-h1">Security & Data Isolation</div>
      <div className="docs-lead">
        Security and data isolation are foundational architecture
        decisions in YieldStream, not features added after the fact. The
        primary isolation mechanism is PostgreSQL Row-Level Security
        enforced at the database level — not application-level
        filtering.
      </div>

      <div className="docs-h2">Multi-tenant isolation</div>
      <div className="docs-p">
        Every table containing org-scoped data has RLS policies
        enforced at the database level across 18+ tables. This means even
        if application code contained a bug, the database itself would
        reject any query attempting to return another organization&apos;s
        data.
      </div>
      <div className="docs-callout">
        <div className="docs-callout-lbl">
          Zero-trust data architecture
        </div>
        Traditional platforms rely on application code to add{" "}
        <Mono>WHERE org_id = X</Mono> to every query. If a developer
        omits it once, data leaks. YieldStream&apos;s RLS policies make
        that impossible — the database rejects unauthorized queries
        regardless of what the application requests.
      </div>

      <div className="docs-h2">Document vault security</div>
      <div className="docs-table-wrap">
        <table>
          <tbody>
            <tr>
              <th>Control</th>
              <th>Specification</th>
            </tr>
            <tr>
              <td>Encryption at rest</td>
              <td>
                AES-256 via Supabase infrastructure-level encryption on
                all storage buckets.
              </td>
            </tr>
            <tr>
              <td>Org-scoped policies</td>
              <td>
                Storage policies enforced at the storage layer,
                independent of database RLS. Cross-tenant file access
                is blocked at two separate enforcement points.
              </td>
            </tr>
            <tr>
              <td>Signed URLs</td>
              <td>
                Document access requires a short-lived signed URL with a
                15-minute expiry. Permanent or guessable URLs are never
                generated.
              </td>
            </tr>
            <tr>
              <td>File validation</td>
              <td>
                Allowed types: PDF, JPG, PNG, XLS/XLSX, DOC/DOCX.
                Enforced client-side and server-side. Executable files
                rejected at both layers.
              </td>
            </tr>
            <tr>
              <td>Merchant upload links</td>
              <td>
                Token-gated, single-use, 48-hour expiry. Merchants can
                upload without a platform account.
              </td>
            </tr>
            <tr>
              <td>Audit trail</td>
              <td>
                Every upload, view, and deletion written to the
                append-only <Mono>audit_logs</Mono> table. Cannot be
                modified or deleted by any user role.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="docs-h2">Authentication controls</div>
      <div className="docs-table-wrap">
        <table>
          <tbody>
            <tr>
              <th>Control</th>
              <th>Specification</th>
            </tr>
            <tr>
              <td>Password policy</td>
              <td>
                Minimum 12 characters. Uppercase, lowercase, numeric,
                and special characters required.
              </td>
            </tr>
            <tr>
              <td>2FA</td>
              <td>
                TOTP-based (Google Authenticator, Authy, any RFC
                6238-compatible app).
              </td>
            </tr>
            <tr>
              <td>Brute-force protection</td>
              <td>
                Account locked for 15 minutes after 5 failed attempts
                within 10 minutes.
              </td>
            </tr>
            <tr>
              <td>Session timeout</td>
              <td>Sessions expire after 7 days of inactivity.</td>
            </tr>
            <tr>
              <td>Security headers</td>
              <td>
                HSTS (HTTPS enforcement), X-Frame-Options,
                X-Content-Type-Options, Permissions-Policy.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="docs-h2">Data minimization for AI</div>
      <div className="docs-p">
        When YieldStream sends data to external AI services, only
        normalized markdown representations of financial statements are
        transmitted. Raw PDFs, account numbers, SSNs, and EINs are never
        sent to third-party AI providers. The Gemini API receives only
        the structured text output from LlamaParse — not the original
        document.
      </div>
    </section>
  );
}
