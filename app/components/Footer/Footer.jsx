import Link from "next/link";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo footer__logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 120"
                width={32}
                height={32}
                className="nav-logo-image"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="footerGradB" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3a3a3a" />
                    <stop offset="100%" stopColor="#0a0a0a" />
                  </linearGradient>
                </defs>
                <path d="M 20 86 L 52 76 L 84 86 L 52 96 Z" fill="url(#footerGradB)" opacity="0.55" />
                <path d="M 24 66 L 60 54 L 96 66 L 60 78 Z" fill="url(#footerGradB)" opacity="0.78" />
                <path d="M 28 44 L 68 30 L 108 44 L 68 58 Z" fill="url(#footerGradB)" />
              </svg>
              YieldStream
            </Link>
            <p>
              The submission intelligence platform for modern brokers.
              AI-powered lender matching that learns from every outcome.
            </p>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <Link href="/features">Features</Link>
            <Link href="/underwriting">Underwriting</Link>
            <Link href="/intelligence">Intelligence Engine</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/security">Security</Link>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/feedback">Feedback & Roadmap</Link>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} YieldStream.ai — All rights
            reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/security">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
