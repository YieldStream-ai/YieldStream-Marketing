import './globals.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata = {
  title: {
    default: 'YieldStream — Submission Intelligence for MCA Brokers',
    template: '%s | YieldStream'
  },
  description: 'AI-powered lender matching, relationship-weighted scoring, and transparent underwriting — built by brokers, for brokers.',
  openGraph: {
    title: 'YieldStream — Submission Intelligence for MCA Brokers',
    description: 'Stop guessing which lenders will fund. Start knowing.',
    url: 'https://yieldstream.ai',
    siteName: 'YieldStream',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ paddingTop: 'var(--nav-height)' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
