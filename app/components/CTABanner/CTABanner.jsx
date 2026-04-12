import Link from 'next/link';
import './CTABanner.scss';

export default function CTABanner({
  headline = "Ready to stop guessing?",
  sub = "Join the founding members building the future of MCA submissions. 30-day money-back guarantee.",
  primaryText = "Get Started",
  primaryHref = "/pricing",
  secondaryText = "Schedule a Demo",
  secondaryHref = "/contact"
}) {
  return (
    <section className="cta-banner section">
      <div className="container cta-banner__inner">
        <h2 className="display-lg cta-banner__headline">{headline}</h2>
        <p className="text-lg cta-banner__sub">{sub}</p>
        <div className="cta-banner__actions">
          <Link href={primaryHref} className="btn btn-emerald btn-lg">{primaryText} →</Link>
          <Link href={secondaryHref} className="btn btn-lg cta-banner__secondary-btn">{secondaryText}</Link>
        </div>
      </div>
    </section>
  );
}
