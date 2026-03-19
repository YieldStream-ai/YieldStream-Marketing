import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="nav-logo" style={{ color: 'white' }}>
              <div className="nav-logo-mark">Y</div>
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
