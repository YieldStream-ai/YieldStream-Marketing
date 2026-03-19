'use client';

import { useState } from 'react';
import { useReveal } from '../components/useReveal';
import './feedback.scss';

export default function FeedbackPage() {
  useReveal();
  const [tab, setTab] = useState('roadmap');
  const [submitted, setSubmitted] = useState(false);
  const [priority, setPriority] = useState(null);

  const roadmapItems = [
    { status: 'considering', label: 'Under Review', items: [
      { title: 'SMS/Email Drip for Renewals', desc: 'Automated merchant outreach at paydown milestones', votes: 22 },
      { title: 'White-Label Option', desc: 'Custom branding for large ISOs', votes: 18 },
      { title: 'Dialer Integration', desc: 'Click-to-call from merchant records', votes: 15 },
    ]},
    { status: 'planned', label: 'Planned', items: [
      { title: 'Penalty Visibility Panel', desc: 'See active decline penalties and expiry dates', votes: 38 },
      { title: 'Advanced Analytics Export', desc: 'Custom date range reports for ISO owners', votes: 33 },
      { title: 'UCC Scraping Integration', desc: 'Automated lien search via state filing databases', votes: 29 },
      { title: 'Lendio API Integration', desc: 'Direct submission to Lendio lender network', votes: 26 },
    ]},
    { status: 'building', label: 'In Progress', items: [
      { title: 'Prediction Accuracy Dashboard', desc: 'Track and display AI match accuracy over time', votes: 67 },
      { title: 'Lender Portal (Self-Service)', desc: 'Lenders update their own buybox criteria', votes: 54 },
      { title: 'Mobile Responsive Views', desc: 'Field rep access on phone and tablet', votes: 45 },
    ]},
    { status: 'shipped', label: 'Shipped', items: [
      { title: 'AI Bank Statement Analysis', desc: 'LlamaParse OCR + Gemini enrichment pipeline', votes: 48 },
      { title: 'Three-Layer Lender Scoring', desc: 'Relationship + attribute + global signals', votes: 52 },
      { title: 'Deal Pipeline (Kanban + Table)', desc: 'Full pipeline visibility with stage tracking', votes: 41 },
      { title: 'Offer Comparison & Scoring', desc: 'Side-by-side lender offer analysis', votes: 39 },
    ]},
  ];

  const statusColors = {
    shipped: { bg: 'var(--a50)', color: 'var(--a700)', dot: 'var(--a500)' },
    building: { bg: '#eff6ff', color: '#1d4ed8', dot: '#3b82f6' },
    planned: { bg: 'var(--p50)', color: 'var(--p700)', dot: 'var(--p500)' },
    considering: { bg: 'var(--n100)', color: 'var(--n600)', dot: 'var(--n400)' },
  };

  return (
    <>
      <section className="feedback__hero">
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Feedback & Roadmap</div>
            <h1 className="display-xl feedback__hero-title">Built with you, not just for you.</h1>
            <p className="text-lg feedback__hero-sub">
              Founding members shape the product roadmap. Submit feature requests, report bugs, and vote on what gets built next.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="section feedback__section">
        <div className="container">
          <div className="reveal feedback__tabs">
            {[
              { id: 'roadmap', label: 'Public Roadmap' },
              { id: 'request', label: 'Feature Request' },
              { id: 'bug', label: 'Report a Bug' },
            ].map(t => (
              <button key={t.id} onClick={() => { setTab(t.id); setSubmitted(false); setPriority(null); }} className={`feedback__tab ${tab === t.id ? 'feedback__tab--active' : ''}`}>{t.label}</button>
            ))}
          </div>

          {/* Roadmap */}
          {tab === 'roadmap' && (
            <div className="feedback__roadmap-grid">
              {roadmapItems.map((column, ci) => (
                <div key={ci}>
                  <div className="feedback__column-header" style={{ background: statusColors[column.status].bg }}>
                    <span className="feedback__column-dot" style={{ background: statusColors[column.status].dot }} />
                    <span className="feedback__column-label" style={{ color: statusColors[column.status].color }}>{column.label}</span>
                    <span className="mono feedback__column-count">{column.items.length}</span>
                  </div>
                  <div className="feedback__column-items">
                    {column.items.map((item, i) => (
                      <div key={i} className="card feedback__roadmap-card">
                        <h4 className="feedback__roadmap-card-title">{item.title}</h4>
                        <p className="feedback__roadmap-card-desc">{item.desc}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <button type="button" className="feedback__vote-btn">▲ {item.votes}</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Feature Request */}
          {tab === 'request' && (
            <div className="feedback__form">
              {submitted ? (
                <div className="feedback__success-box">
                  <div className="feedback__success-icon">🎉</div>
                  <h3 className="feedback__success-title">Feature request submitted!</h3>
                  <p className="text-md">We review every request. Founding members get priority consideration.</p>
                </div>
              ) : (
                <div className="feedback__form-fields">
                  <p className="text-md">Describe the feature you'd like to see. Be specific about the problem it solves and how you'd use it.</p>
                  <div>
                    <label className="feedback__label">Feature title</label>
                    <input placeholder="e.g. Automated lender follow-up reminders" className="feedback__input" />
                  </div>
                  <div>
                    <label className="feedback__label">Category</label>
                    <select className="feedback__input">
                      <option>AI / Intelligence</option>
                      <option>Pipeline / Workflow</option>
                      <option>Analytics / Reporting</option>
                      <option>Lender Management</option>
                      <option>Integrations</option>
                      <option>UI / UX</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="feedback__label">Description</label>
                    <textarea rows={6} placeholder="What problem does this solve? How would you use it? What does your workflow look like today without this feature?" className="feedback__textarea" />
                  </div>
                  <div>
                    <label className="feedback__label">Priority for your team</label>
                    <div className="feedback__priority-btns">
                      {['Nice to have', 'Important', 'Critical'].map(p => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPriority(p)}
                          className={`feedback__priority-btn ${priority === p ? 'feedback__priority-btn--active' : ''}`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => setSubmitted(true)} className="btn btn-primary btn-lg feedback__submit">
                    Submit Feature Request →
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Bug Report */}
          {tab === 'bug' && (
            <div className="feedback__form">
              {submitted ? (
                <div className="feedback__success-box">
                  <div className="feedback__success-icon">🐛</div>
                  <h3 className="feedback__success-title">Bug report received.</h3>
                  <p className="text-md">We'll investigate and follow up. Thank you for helping us improve.</p>
                </div>
              ) : (
                <div className="feedback__form-fields">
                  <p className="text-md">Help us fix it fast. The more detail you provide, the quicker we can resolve the issue.</p>
                  <div>
                    <label className="feedback__label">Bug summary</label>
                    <input placeholder="Brief description of the issue" className="feedback__input" />
                  </div>
                  <div>
                    <label className="feedback__label">Steps to reproduce</label>
                    <textarea rows={4} placeholder="1. Go to...\n2. Click on...\n3. See error..." className="feedback__textarea" />
                  </div>
                  <div>
                    <label className="feedback__label">Expected vs actual behavior</label>
                    <textarea rows={3} placeholder="I expected X to happen, but instead Y happened" className="feedback__textarea" />
                  </div>
                  <div className="feedback__form-row">
                    <div>
                      <label className="feedback__label">Severity</label>
                      <select className="feedback__input">
                        <option>Low — cosmetic issue</option>
                        <option>Medium — feature partially broken</option>
                        <option>High — feature completely broken</option>
                        <option>Critical — data loss or security</option>
                      </select>
                    </div>
                    <div>
                      <label className="feedback__label">Browser</label>
                      <select className="feedback__input">
                        <option>Chrome</option>
                        <option>Firefox</option>
                        <option>Safari</option>
                        <option>Edge</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <button onClick={() => setSubmitted(true)} className="btn btn-primary btn-lg feedback__submit">
                    Submit Bug Report →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
