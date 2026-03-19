'use client';

import { useState } from 'react';
import { useReveal } from '../components/useReveal';

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
      <section style={{ padding: '80px 0 40px', background: 'var(--n50)' }}>
        <div className="container">
          <div className="section-header center reveal">
            <div className="label">Feedback & Roadmap</div>
            <h1 className="display-xl" style={{ marginTop: 12 }}>Built with you, not just for you.</h1>
            <p className="text-lg" style={{ maxWidth: 560, margin: '16px auto 0' }}>
              Founding members shape the product roadmap. Submit feature requests, report bugs, and vote on what gets built next.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="reveal" style={{ display: 'flex', gap: 4, marginBottom: 'var(--space-2xl)', borderBottom: '1px solid var(--n200)' }}>
            {[
              { id: 'roadmap', label: 'Public Roadmap' },
              { id: 'request', label: 'Feature Request' },
              { id: 'bug', label: 'Report a Bug' },
            ].map(t => (
              <button key={t.id} onClick={() => { setTab(t.id); setSubmitted(false); setPriority(null); }} style={{
                padding: '12px 20px', fontSize: '0.88rem', fontWeight: 600,
                color: tab === t.id ? 'var(--p600)' : 'var(--n500)',
                borderBottom: tab === t.id ? '2px solid var(--p600)' : '2px solid transparent',
                marginBottom: -1, transition: 'all 0.2s',
              }}>{t.label}</button>
            ))}
          </div>

          {/* Roadmap */}
          {tab === 'roadmap' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, alignItems: 'flex-start' }}>
              {roadmapItems.map((column, ci) => (
                <div key={ci}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    marginBottom: 16, padding: '6px 12px',
                    background: statusColors[column.status].bg,
                    borderRadius: 8,
                  }}>
                    <span style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: statusColors[column.status].dot,
                    }} />
                    <span style={{
                      fontSize: '0.78rem', fontWeight: 600,
                      color: statusColors[column.status].color,
                    }}>{column.label}</span>
                    <span className="mono" style={{ fontSize: '0.7rem', color: 'var(--n400)', marginLeft: 'auto' }}>{column.items.length}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {column.items.map((item, i) => (
                      <div key={i} className="card" style={{
                        padding: 16, cursor: 'pointer',
                      }}>
                        <h4 style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: 4 }}>{item.title}</h4>
                        <p style={{ fontSize: '0.78rem', color: 'var(--n500)', lineHeight: 1.5, marginBottom: 10 }}>{item.desc}</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <button style={{
                            display: 'flex', alignItems: 'center', gap: 4,
                            padding: '3px 8px', borderRadius: 4,
                            background: 'var(--n50)', border: '1px solid var(--n200)',
                            fontSize: '0.72rem', fontWeight: 600, color: 'var(--p600)',
                          }}>▲ {item.votes}</button>
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
            <div style={{ maxWidth: 640 }}>
              {submitted ? (
                <div style={{ padding: 40, background: 'var(--a50)', borderRadius: 12, border: '1px solid var(--a200)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 12 }}>🎉</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 8 }}>Feature request submitted!</h3>
                  <p className="text-md">We review every request. Founding members get priority consideration.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <p className="text-md">Describe the feature you'd like to see. Be specific about the problem it solves and how you'd use it.</p>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--n700)', marginBottom: 6 }}>Feature title</label>
                    <input placeholder="e.g. Automated lender follow-up reminders" style={{
                      width: '100%', padding: '10px 14px', border: '1.5px solid var(--n200)', borderRadius: 8, fontSize: '0.9rem',
                    }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--n700)', marginBottom: 6 }}>Category</label>
                    <select style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--n200)', borderRadius: 8, fontSize: '0.9rem', background: 'white' }}>
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
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--n700)', marginBottom: 6 }}>Description</label>
                    <textarea rows={6} placeholder="What problem does this solve? How would you use it? What does your workflow look like today without this feature?" style={{
                      width: '100%', padding: '10px 14px', border: '1.5px solid var(--n200)', borderRadius: 8, fontSize: '0.9rem', resize: 'vertical',
                    }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--n700)', marginBottom: 6 }}>Priority for your team</label>
                    <div style={{ display: 'flex', gap: 8 }}>
                      {['Nice to have', 'Important', 'Critical'].map(p => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setPriority(p)}
                          style={{
                            padding: '8px 16px',
                            borderRadius: 6,
                            border: priority === p ? '2px solid var(--p600)' : '1.5px solid var(--n200)',
                            background: priority === p ? 'var(--p50)' : 'white',
                            color: priority === p ? 'var(--p700)' : 'var(--n700)',
                            fontSize: '0.82rem',
                            fontWeight: priority === p ? 600 : 500,
                            cursor: 'pointer',
                            transition: 'all 0.15s',
                          }}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button onClick={() => setSubmitted(true)} className="btn btn-primary btn-lg" style={{ alignSelf: 'flex-start' }}>
                    Submit Feature Request →
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Bug Report */}
          {tab === 'bug' && (
            <div style={{ maxWidth: 640 }}>
              {submitted ? (
                <div style={{ padding: 40, background: 'var(--a50)', borderRadius: 12, border: '1px solid var(--a200)', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 12 }}>🐛</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: 8 }}>Bug report received.</h3>
                  <p className="text-md">We'll investigate and follow up. Thank you for helping us improve.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <p className="text-md">Help us fix it fast. The more detail you provide, the quicker we can resolve the issue.</p>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--n700)', marginBottom: 6 }}>Bug summary</label>
                    <input placeholder="Brief description of the issue" style={{
                      width: '100%', padding: '10px 14px', border: '1.5px solid var(--n200)', borderRadius: 8, fontSize: '0.9rem',
                    }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--n700)', marginBottom: 6 }}>Steps to reproduce</label>
                    <textarea rows={4} placeholder="1. Go to...\n2. Click on...\n3. See error..." style={{
                      width: '100%', padding: '10px 14px', border: '1.5px solid var(--n200)', borderRadius: 8, fontSize: '0.9rem', resize: 'vertical',
                    }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--n700)', marginBottom: 6 }}>Expected vs actual behavior</label>
                    <textarea rows={3} placeholder="I expected X to happen, but instead Y happened" style={{
                      width: '100%', padding: '10px 14px', border: '1.5px solid var(--n200)', borderRadius: 8, fontSize: '0.9rem', resize: 'vertical',
                    }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--n700)', marginBottom: 6 }}>Severity</label>
                      <select style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--n200)', borderRadius: 8, fontSize: '0.9rem', background: 'white' }}>
                        <option>Low — cosmetic issue</option>
                        <option>Medium — feature partially broken</option>
                        <option>High — feature completely broken</option>
                        <option>Critical — data loss or security</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--n700)', marginBottom: 6 }}>Browser</label>
                      <select style={{ width: '100%', padding: '10px 14px', border: '1.5px solid var(--n200)', borderRadius: 8, fontSize: '0.9rem', background: 'white' }}>
                        <option>Chrome</option>
                        <option>Firefox</option>
                        <option>Safari</option>
                        <option>Edge</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <button onClick={() => setSubmitted(true)} className="btn btn-primary btn-lg" style={{ alignSelf: 'flex-start' }}>
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
