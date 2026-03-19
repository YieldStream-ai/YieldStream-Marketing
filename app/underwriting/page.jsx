'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useReveal } from '../components/useReveal';
import CTABanner from '../components/CTABanner';
import './underwriting.scss';

export default function UnderwritingPage() {
  useReveal();

  return (
    <>
      <section className="underwriting__hero">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">AI Underwriting</div>
            <h1 className="display-xl underwriting__hero-title">30 minutes of manual review.<br />Replaced in <em className="italic teal-gradient">120 seconds.</em></h1>
            <p className="text-lg underwriting__hero-sub">
              Upload a bank statement PDF. YieldStream's OCR + AI pipeline extracts, analyzes, and scores 20+ risk signals — then feeds every one directly into lender matching.
            </p>
          </div>
        </div>
      </section>

      {/* The 2-Minute Audit */}
      <section className="section">
        <div className="container">
          <div className="grid-feature reveal">
            <div>
              <div className="label underwriting__label">The 2-Minute Audit</div>
              <h2 className="display-md">From raw PDF to scored intelligence.</h2>
              <p className="text-md underwriting__desc">
                LlamaParse handles OCR extraction with 97%+ accuracy. Gemini AI then enriches the raw data into structured risk signals. The entire pipeline runs asynchronously — upload and move on to your next deal.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { step: 'Upload', detail: 'Drop PDF or use merchant upload portal', time: '0s' },
                  { step: 'OCR Extract', detail: 'LlamaParse extracts tables, transactions, balances', time: '~30s' },
                  { step: 'AI Enrich', detail: 'Gemini detects trends, NSFs, stacking, anomalies', time: '~60s' },
                  { step: 'Score Ready', detail: '20+ risk signals feed into lender matching engine', time: '~120s' },
                ].map((s, i) => (
                  <div key={i} className="underwriting__step-row">
                    <div className={`mono underwriting__step-num ${i === 3 ? 'underwriting__step-num--active' : 'underwriting__step-num--default'}`}>{i + 1}</div>
                    <div>
                      <div className="underwriting__step-title">{s.step}</div>
                      <div className="text-sm">{s.detail}</div>
                    </div>
                    <div className="mono underwriting__step-time">{s.time}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="screenshot screenshot-elevated">
              <Image src="/images/Document-Vault.png" alt="Document Analysis" width={1400} height={800} />
            </div>
          </div>
        </div>
      </section>

      {/* Risk Signals */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">20+ Risk Signals</div>
            <h2 className="display-lg underwriting__section-title">Everything a human underwriter checks. Automatically.</h2>
          </div>
          <div className="grid-4">
            {[
              { signal: 'Monthly Revenue', desc: 'Average, trend direction, and volatility' },
              { signal: 'Daily Balances', desc: 'ADB calculation with low-point detection' },
              { signal: 'NSF Frequency', desc: 'Count, pattern, and severity classification' },
              { signal: 'Stacking Detection', desc: 'Active MCA positions and total burden' },
              { signal: 'DSCR', desc: 'Debt service coverage ratio calculation' },
              { signal: 'Revenue Trend', desc: 'Growing, stable, declining, or volatile' },
              { signal: 'Lien / Garnishment', desc: 'Automated flag detection in transactions' },
              { signal: 'Anomaly Detection', desc: 'Unusual deposits, gaps, or pattern breaks' },
            ].map((s, i) => (
              <div key={i} className={`card reveal reveal-delay-${(i % 4) + 1} underwriting__signal-card`}>
                <h3 className="underwriting__signal-title">{s.signal}</h3>
                <p className="text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Underwriter's Note */}
      <section className="section">
        <div className="container">
          <div className="grid-feature reveal">
            <div className="screenshot screenshot-elevated">
              <Image src="/images/Underwriting-Intelligence.png" alt="Underwriting Intelligence" width={1400} height={800} />
            </div>
            <div>
              <div className="label underwriting__label">The Underwriter's Note</div>
              <h2 className="display-md">AI you can read, verify, and trust.</h2>
              <p className="text-md" style={{ marginTop: 12, marginBottom: 20 }}>
                Every AI analysis generates a single human-readable sentence explaining the structural assessment. Your team reads the note, checks it against the data, and builds confidence in the system over time.
              </p>
              <div className="underwriting__note-card">
                <div className="mono underwriting__note-label">
                  ✎ Example Note
                </div>
                <p className="underwriting__note-text">
                  Premium profile — <strong style={{ color: 'var(--a300)' }}>$120K ADB</strong> is well above most lender floors; expect competitive factor rates. Revenue stable with no NSFs in 90 days.
                </p>
              </div>
              <p className="text-sm underwriting__note-follow">
                No black boxes. No unexplainable scores. Just clear signals your team can verify against the source documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approval Comparison */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header reveal">
            <div className="label">Approval Comparison</div>
            <h2 className="display-lg underwriting__section-title">See which lenders overlap — and which don't.</h2>
            <p className="text-lg" style={{ maxWidth: 600, margin: '16px auto 0' }}>
              The approval comparison view shows buybox overlaps that humans miss. Color-coded term highlights, offer scoring with reasoning, and one-click package generation.
            </p>
          </div>
          <div className="reveal" style={{ marginTop: 'var(--space-2xl)' }}>
            <div className="screenshot screenshot-elevated">
              <Image src="/images/underwriting-approval-comparison.png" alt="Offer Comparison" width={1400} height={800} />
            </div>
          </div>
        </div>
      </section>

      <CTABanner headline="See the underwriting in action." sub="Upload your first bank statement and watch the AI work in real-time." />
    </>
  );
}
