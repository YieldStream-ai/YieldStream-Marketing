import Link from 'next/link';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo footer__logo">
              <div className="footer__logo-container">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={32} height={32} className="nav-logo-image" aria-hidden="true">
                  <circle cx="50" cy="50" r="40" fill="#fefefe" stroke="#1B3A5F" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 68 32 A 25 25 0 0 1 78 50" fill="none" stroke="#1B3A5F" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 63 37 A 18 18 0 0 1 70 50" fill="none" stroke="#1B3A5F" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
                  <circle cx="58" cy="28" r="2" fill="#1B3A5F" />
                </svg>
              </div>
              YieldStream
            </Link>
            <p>The submission intelligence platform for MCA brokers. AI-powered lender matching that learns from every outcome.</p>
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
          <p>&copy; {new Date().getFullYear()} YieldStream.ai — All rights reserved.</p>
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
