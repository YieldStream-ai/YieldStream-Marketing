import './globals.css';
import './Layout.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Inter, Source_Serif_4, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif-4',
  weight: ['400', '600'],
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
});

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
    <html lang="en" className={`${inter.variable} ${sourceSerif4.variable} ${jetbrainsMono.variable}`}>
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
