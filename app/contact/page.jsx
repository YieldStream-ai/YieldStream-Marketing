'use client';

import { useState } from 'react';
import { useReveal } from '../components/useReveal';

export default function ContactPage() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section style={{ padding: '80px 0 60px', background: 'var(--n50)' }}>
        <div className="container-narrow">
          <div className="section-header center reveal">
            <div className="label">Contact</div>
            <h1 className="display-xl" style={{ marginTop: 12 }}>Let's talk.</h1>
            <p className="text-lg" style={{ maxWidth: 500, margin: '16px auto 0' }}>
              Whether you're exploring a founding membership, need enterprise pricing, or have a security question — we respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 'var(--space-4xl)', maxWidth: 960 }}>
          {/* Form */}
          <div className="reveal">
            {submitted ? (
              <div style={{ padding: 40, background: 'var(--a50)', borderRadius: 12, border: '1px solid var(--a200)', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: 12 }}>✓</div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 8 }}>Message sent.</h3>
                <p className="text-md">We'll be in touch within 24 hours. Check your inbox.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <Field label="First name" placeholder="Joshua" />
                  <Field label="Last name" placeholder="Dinh" />
                </div>
                <Field label="Email" type="email" placeholder="you@yourbrokerage.com" />
                <Field label="Company" placeholder="Your ISO name" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--n700)', marginBottom: 6 }}>Monthly submission volume</label>
                    <select style={{
                      width: '100%', padding: '10px 14px',
                      border: '1.5px solid var(--n200)', borderRadius: 8,
                      fontSize: '0.9rem', color: 'var(--n800)', background: 'white',
                    }}>
                      <option>Under 20 deals</option>
                      <option>20–50 deals</option>
                      <option>50–100 deals</option>
                      <option>100+ deals</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--n700)', marginBottom: 6 }}>Team size</label>
                    <select style={{
                      width: '100%', padding: '10px 14px',
                      border: '1.5px solid var(--n200)', borderRadius: 8,
                      fontSize: '0.9rem', color: 'var(--n800)', background: 'white',
                    }}>
                      <option>1–3 reps</option>
                      <option>4–10 reps</option>
                      <option>11–25 reps</option>
                      <option>25+ reps</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--n700)', marginBottom: 6 }}>What are you interested in?</label>
                  <textarea rows={4} placeholder="Tell us about your brokerage and what you're looking for..." style={{
                    width: '100%', padding: '10px 14px',
                    border: '1.5px solid var(--n200)', borderRadius: 8,
                    fontSize: '0.9rem', color: 'var(--n800)', resize: 'vertical',
                  }} />
                </div>
                <button onClick={() => setSubmitted(true)} className="btn btn-primary btn-lg" style={{ alignSelf: 'flex-start' }}>
                  Send Message →
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="reveal reveal-delay-1" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: 8 }}>Direct Support</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="mailto:hello@yieldstream.ai" style={{ fontSize: '0.88rem', color: 'var(--p600)', fontWeight: 500 }}>hello@yieldstream.ai</a>
                <a href="mailto:support@yieldstream.ai" style={{ fontSize: '0.88rem', color: 'var(--p600)', fontWeight: 500 }}>support@yieldstream.ai</a>
              </div>
            </div>
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: 8 }}>Enterprise Inquiries</h3>
              <p className="text-sm">Multi-office ISOs with 20+ reps, custom integration needs, or compliance requirements.</p>
              <a href="mailto:lenders@yieldstream.ai" style={{ fontSize: '0.88rem', color: 'var(--p600)', fontWeight: 500, display: 'block', marginTop: 8 }}>lenders@yieldstream.ai</a>
            </div>
            <div className="card" style={{ padding: 24 }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: 8 }}>Security Questions</h3>
              <p className="text-sm">Request our security whitepaper, discuss compliance requirements, or schedule a technical review.</p>
              <a href="/security" style={{ fontSize: '0.88rem', color: 'var(--p600)', fontWeight: 500, display: 'block', marginTop: 8 }}>View Security Center →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, type = 'text', placeholder }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--n700)', marginBottom: 6 }}>{label}</label>
      <input type={type} placeholder={placeholder} style={{
        width: '100%', padding: '10px 14px',
        border: '1.5px solid var(--n200)', borderRadius: 8,
        fontSize: '0.9rem', color: 'var(--n800)',
      }} />
    </div>
  );
}
