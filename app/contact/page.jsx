'use client';

import { useState } from 'react';
import { useReveal } from '../components/useReveal';
import './contact.scss';

export default function ContactPage() {
  useReveal();
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="contact__hero">
        <div className="container-narrow">
          <div className="section-header center reveal">
            <div className="label">Contact</div>
            <h1 className="display-xl contact__hero-title">Let's talk.</h1>
            <p className="text-lg contact__hero-sub">
              Whether you're exploring a founding membership, need enterprise pricing, or have a security question — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact__form-grid">
          {/* Form */}
          <div className="reveal">
            {submitted ? (
              <div className="contact__success-box">
                <div className="contact__success-icon">✓</div>
                <h3 className="contact__success-title">Message sent.</h3>
                <p className="text-md">We'll be in touch soon. Check your inbox.</p>
              </div>
            ) : (
              <div className="contact__form-fields">
                <div className="contact__form-row">
                  <Field label="First name" placeholder="Joshua" />
                  <Field label="Last name" placeholder="Dinh" />
                </div>
                <Field label="Email" type="email" placeholder="you@yourbrokerage.com" />
                <Field label="Company" placeholder="Your ISO name" />
                <div className="contact__form-row">
                  <div>
                    <label className="contact__label">Monthly submission volume</label>
                    <select className="contact__input">
                      <option>Under 20 deals</option>
                      <option>20–50 deals</option>
                      <option>50–100 deals</option>
                      <option>100+ deals</option>
                    </select>
                  </div>
                  <div>
                    <label className="contact__label">Team size</label>
                    <select className="contact__input">
                      <option>1–3 reps</option>
                      <option>4–10 reps</option>
                      <option>11–25 reps</option>
                      <option>25+ reps</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="contact__label">What are you interested in?</label>
                  <textarea rows={4} placeholder="Tell us about your brokerage and what you're looking for..." className="contact__textarea" />
                </div>
                <button onClick={() => setSubmitted(true)} className="btn btn-primary btn-lg contact__submit">
                  Send Message →
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="reveal reveal-delay-1 contact__sidebar">
            <div className="card contact__card">
              <h3 className="contact__card-title">Direct Support</h3>
              <div className="contact__card-links">
                <a href="mailto:hello@yieldstream.ai" className="contact__card-link">hello@yieldstream.ai</a>
                <a href="mailto:support@yieldstream.ai" className="contact__card-link">support@yieldstream.ai</a>
              </div>
            </div>
            <div className="card contact__card">
              <h3 className="contact__card-title">Enterprise Inquiries</h3>
              <p className="text-sm">Multi-office ISOs with 20+ reps, custom integration needs, or compliance requirements.</p>
              <a href="mailto:lenders@yieldstream.ai" className="contact__card-link-block">lenders@yieldstream.ai</a>
            </div>
            <div className="card contact__card">
              <h3 className="contact__card-title">Security Questions</h3>
              <p className="text-sm">Request our security whitepaper, discuss compliance requirements, or schedule a technical review.</p>
              <a href="/security" className="contact__card-link-block">View Security Center →</a>
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
      <label className="contact__label">{label}</label>
      <input type={type} placeholder={placeholder} className="contact__input" />
    </div>
  );
}
