const SIDEBAR_GROUPS = [
  {
    label: "Platform",
    items: [
      { id: "overview", label: "Overview" },
      { id: "engine", label: "Underwriting Engine" },
      { id: "scoring", label: "Three-Layer Scoring" },
    ],
  },
  {
    label: "Intelligence",
    items: [
      { id: "metrics", label: "Metric Definitions" },
      { id: "analytics", label: "Analytics Dashboard" },
      { id: "learning", label: "Outcome Learning Loop" },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { id: "security", label: "Security & Isolation" },
      { id: "access", label: "Access Control" },
    ],
  },
  {
    label: "Reference",
    items: [
      { id: "pricing", label: "Pricing" },
      { id: "glossary", label: "Glossary" },
    ],
  },
];

export default function DocsSidebar({ activeSection, onNavigate }) {
  return (
    <aside className="docs-sidebar">
      <div className="docs-sidebar-hd">
        <div className="docs-logo">
          YieldStream
          <span className="docs-badge">Docs</span>
        </div>
      </div>
      {SIDEBAR_GROUPS.map((grp) => (
        <div key={grp.label}>
          <div className="docs-grp">{grp.label}</div>
          {grp.items.map((item) => (
            <span
              key={item.id}
              className={`docs-nav-item ${activeSection === item.id ? "on" : ""}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </span>
          ))}
        </div>
      ))}
    </aside>
  );
}
