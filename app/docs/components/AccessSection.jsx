import Mono from "./Mono";

export default function AccessSection({ active }) {
  return (
    <section
      className={`docs-section ${active ? "vis" : ""}`}
      id="sec-access"
    >
      <div className="docs-pg-lbl">Infrastructure</div>
      <div className="docs-h1">Role-Based Access Control</div>
      <div className="docs-lead">
        YieldStream enforces a three-tier permission model across all
        API routes and server actions. There are no unprotected
        privileged endpoints — every mutation is gated by the{" "}
        <Mono>secureApiHandler</Mono> middleware or{" "}
        <Mono>requireRole</Mono> server-action utility.
      </div>

      <div className="docs-h2">Permission matrix</div>
      <div className="docs-table-wrap">
        <table>
          <tbody>
            <tr>
              <th>Action</th>
              <th style={{ textAlign: "center" }}>Owner</th>
              <th style={{ textAlign: "center" }}>Admin</th>
              <th style={{ textAlign: "center" }}>Rep</th>
            </tr>
            {[
              { action: "Change organization name", owner: true, admin: false, rep: false },
              { action: "Delete org data (GDPR)", owner: true, admin: false, rep: false },
              { action: "Export compliance data", owner: true, admin: false, rep: false },
              { action: "Invite team members", owner: true, admin: true, rep: false },
              { action: "Manage lender buy-boxes", owner: true, admin: true, rep: false },
              { action: "Bulk CSV import", owner: true, admin: true, rep: false },
              { action: "Change submission status", owner: true, admin: true, rep: true },
              { action: "Create merchants", owner: true, admin: true, rep: true },
              { action: "Upload documents", owner: true, admin: true, rep: true },
              { action: "View AI predictions", owner: true, admin: true, rep: true },
            ].map((row) => (
              <tr key={row.action}>
                <td>{row.action}</td>
                <td style={{ textAlign: "center" }}>
                  <span className={row.owner ? "docs-perm-y" : "docs-perm-n"}>●</span>
                </td>
                <td style={{ textAlign: "center" }}>
                  <span className={row.admin ? "docs-perm-y" : "docs-perm-n"}>●</span>
                </td>
                <td style={{ textAlign: "center" }}>
                  <span className={row.rep ? "docs-perm-y" : "docs-perm-n"}>●</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="docs-h2">Cross-tenant protection</div>
      <div className="docs-p">
        Lender relationship scores, pull-through rates, and prediction
        accuracy data are derived exclusively from the authenticated
        session&apos;s org_id — never from user-supplied parameters.
        Cross-tenant failures return HTTP 404 rather than 403, preventing
        resource-existence enumeration by external actors.
      </div>
    </section>
  );
}
