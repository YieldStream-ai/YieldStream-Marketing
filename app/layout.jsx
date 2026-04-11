import './globals.css';
import './Layout.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Inter } from 'next/font/google';
import { GeistMono } from 'geist/font/mono';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: {
    default: 'YieldStream — Submission Intelligence for MCA Brokers',
    template: '%s | YieldStream'
  },
  description: 'AI-powered lender matching, relationship-weighted scoring, and transparent underwriting — built by brokers, for brokers.',
  verification: {
    google: 'ClHgOmf5QsB5stjnypxvpn9sqeRROyRLGZq4bI2jN98',
  },
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
    <html lang="en" className={`${inter.variable} ${GeistMono.variable}`}>
      <body>
        <div className="layout__rail layout__rail--left" />
        <div className="layout__rail layout__rail--right" />
        <Nav />
        <main className="layout__main">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
