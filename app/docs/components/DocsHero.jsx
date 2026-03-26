export default function DocsHero() {
  return (
    <header className="docs-hero">
      <div className="docs-hero__grid" aria-hidden="true" />
      <div className="docs-hero__gradient" aria-hidden="true" />
      <div className="docs-hero__content">
        <div className="docs-hero__label">System Documentation</div>
        <h1 className="docs-hero__title">Technical Blueprint</h1>
        <p className="docs-hero__subtitle">
          Platform architecture, scoring engine, and infrastructure reference
        </p>
      </div>
    </header>
  );
}
