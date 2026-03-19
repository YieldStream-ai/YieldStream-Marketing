import Link from 'next/link';

export default function CTABanner({
  headline = "Ready to stop guessing?",
  sub = "Join the founding members building the future of MCA submissions. 14-day free trial, no credit card required.",
  primaryText = "Start Free Trial",
  primaryHref = "/pricing",
  secondaryText = "Schedule a Demo",
  secondaryHref = "/contact"
}) {
  return (
    <section className="section-dark section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(16,185,129,0.08) 0%, transparent 60%)',
        pointerEvents: 'none'
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="display-lg" style={{ color: 'white', marginBottom: 16 }}>{headline}</h2>
        <p className="text-lg" style={{ maxWidth: 520, margin: '0 auto 32px', color: 'rgba(255,255,255,0.55)' }}>{sub}</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href={primaryHref} className="btn btn-emerald btn-lg">{primaryText} →</Link>
          <Link href={secondaryHref} className="btn btn-lg" style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: 'white' }}>{secondaryText}</Link>
        </div>
      </div>
    </section>
  );
}
