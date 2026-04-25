'use client';

import { useState } from 'react';
import { useReveal } from '../components/useReveal';
import './feedback.scss';



export default function FeedbackPage() {
  useReveal();
  const [tab, setTab] = useState('request');

  // Feature request form state
  const [frTitle, setFrTitle] = useState('');
  const [frCategory, setFrCategory] = useState('AI / Intelligence');
  const [frDescription, setFrDescription] = useState('');
  const [frPriority, setFrPriority] = useState(null);

  // Bug report form state
  const [bugSummary, setBugSummary] = useState('');
  const [bugSteps, setBugSteps] = useState('');
  const [bugExpected, setBugExpected] = useState('');
  const [bugSeverity, setBugSeverity] = useState('Low — cosmetic issue');
  const [bugBrowser, setBugBrowser] = useState('Chrome');

  // Shared form state
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const resetForms = () => {
    setFrTitle(''); setFrCategory('AI / Intelligence'); setFrDescription(''); setFrPriority(null);
    setBugSummary(''); setBugSteps(''); setBugExpected('');
    setBugSeverity('Low — cosmetic issue'); setBugBrowser('Chrome');
    setError(null);
  };

  const handleTabChange = (id) => {
    setTab(id);
    setSubmitted(false);
    setError(null);
  };

  const submitFeatureRequest = async (e) => {
    e.preventDefault();
    if (!frTitle.trim()) { setError('Please provide a feature title.'); return; }
    if (!frDescription.trim()) { setError('Please describe the feature.'); return; }
    if (!frPriority) { setError('Please select a priority level.'); return; }

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'feature_request',
          data: { title: frTitle, category: frCategory, description: frDescription, priority: frPriority },
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
      resetForms();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const submitBugReport = async (e) => {
    e.preventDefault();
    if (!bugSummary.trim()) { setError('Please provide a bug summary.'); return; }
    if (!bugSteps.trim()) { setError('Please describe the steps to reproduce.'); return; }

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'bug_report',
          data: { summary: bugSummary, steps: bugSteps, expected: bugExpected, severity: bugSeverity, browser: bugBrowser },
        }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
      resetForms();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
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
              { id: 'request', label: 'Feature Request' },
              { id: 'bug', label: 'Report a Bug' },
            ].map(t => (
              <button key={t.id} onClick={() => handleTabChange(t.id)} className={`feedback__tab ${tab === t.id ? 'feedback__tab--active' : ''}`}>{t.label}</button>
            ))}
          </div>

          {/* Feature Request */}
          {tab === 'request' && (
            <div className="feedback__form">
              {submitted ? (
                <div className="feedback__success-box">
                  <div className="feedback__success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 32, height: 32, color: 'var(--a500)' }}><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></div>
                  <h3 className="feedback__success-title">Feature request submitted!</h3>
                  <p className="text-md">We review every request. Founding members get priority consideration.</p>
                  <button onClick={() => { setSubmitted(false); }} className="btn btn-secondary feedback__another-btn">Submit another</button>
                </div>
              ) : (
                <form onSubmit={submitFeatureRequest} className="feedback__form-fields">
                  <p className="text-md">Describe the feature you&apos;d like to see. Be specific about the problem it solves and how you&apos;d use it.</p>
                  {error && <div className="feedback__error">{error}</div>}
                  <div>
                    <label className="feedback__label" htmlFor="fr-title">Feature title</label>
                    <input id="fr-title" value={frTitle} onChange={e => setFrTitle(e.target.value)} placeholder="e.g. Automated lender follow-up reminders" className="feedback__input" />
                  </div>
                  <div>
                    <label className="feedback__label" htmlFor="fr-category">Category</label>
                    <select id="fr-category" value={frCategory} onChange={e => setFrCategory(e.target.value)} className="feedback__input">
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
                    <label className="feedback__label" htmlFor="fr-desc">Description</label>
                    <textarea id="fr-desc" rows={6} value={frDescription} onChange={e => setFrDescription(e.target.value)} placeholder="What problem does this solve? How would you use it? What does your workflow look like today without this feature?" className="feedback__textarea" />
                  </div>
                  <div>
                    <label className="feedback__label">Priority for your team</label>
                    <div className="feedback__priority-btns">
                      {['Nice to have', 'Important', 'Critical'].map(p => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => setFrPriority(p)}
                          className={`feedback__priority-btn ${frPriority === p ? 'feedback__priority-btn--active' : ''}`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button type="submit" disabled={submitting} className="btn btn-primary btn-lg feedback__submit">
                    {submitting ? 'Submitting...' : 'Submit Feature Request →'}
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Bug Report */}
          {tab === 'bug' && (
            <div className="feedback__form">
              {submitted ? (
                <div className="feedback__success-box">
                  <div className="feedback__success-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 32, height: 32, color: 'var(--a500)' }}><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg></div>
                  <h3 className="feedback__success-title">Bug report received.</h3>
                  <p className="text-md">We&apos;ll investigate and follow up. Thank you for helping us improve.</p>
                  <button onClick={() => { setSubmitted(false); }} className="btn btn-secondary feedback__another-btn">Report another</button>
                </div>
              ) : (
                <form onSubmit={submitBugReport} className="feedback__form-fields">
                  <p className="text-md">Help us fix it fast. The more detail you provide, the quicker we can resolve the issue.</p>
                  {error && <div className="feedback__error">{error}</div>}
                  <div>
                    <label className="feedback__label" htmlFor="bug-summary">Bug summary</label>
                    <input id="bug-summary" value={bugSummary} onChange={e => setBugSummary(e.target.value)} placeholder="Brief description of the issue" className="feedback__input" />
                  </div>
                  <div>
                    <label className="feedback__label" htmlFor="bug-steps">Steps to reproduce</label>
                    <textarea id="bug-steps" rows={4} value={bugSteps} onChange={e => setBugSteps(e.target.value)} placeholder={"1. Go to...\n2. Click on...\n3. See error..."} className="feedback__textarea" />
                  </div>
                  <div>
                    <label className="feedback__label" htmlFor="bug-expected">Expected vs actual behavior</label>
                    <textarea id="bug-expected" rows={3} value={bugExpected} onChange={e => setBugExpected(e.target.value)} placeholder="I expected X to happen, but instead Y happened" className="feedback__textarea" />
                  </div>
                  <div className="feedback__form-row">
                    <div>
                      <label className="feedback__label" htmlFor="bug-severity">Severity</label>
                      <select id="bug-severity" value={bugSeverity} onChange={e => setBugSeverity(e.target.value)} className="feedback__input">
                        <option>Low — cosmetic issue</option>
                        <option>Medium — feature partially broken</option>
                        <option>High — feature completely broken</option>
                        <option>Critical — data loss or security</option>
                      </select>
                    </div>
                    <div>
                      <label className="feedback__label" htmlFor="bug-browser">Browser</label>
                      <select id="bug-browser" value={bugBrowser} onChange={e => setBugBrowser(e.target.value)} className="feedback__input">
                        <option>Chrome</option>
                        <option>Firefox</option>
                        <option>Safari</option>
                        <option>Edge</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" disabled={submitting} className="btn btn-primary btn-lg feedback__submit">
                    {submitting ? 'Submitting...' : 'Submit Bug Report →'}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
