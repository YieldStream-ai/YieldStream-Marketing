'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './EnterpriseModal.scss';

export default function EnterpriseModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [volume, setVolume] = useState('Under 20 deals/mo');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) { setError('Please enter your work email.'); return; }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/enterprise-interest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, volume, notes }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return createPortal(
    <div className="enterprise-modal__backdrop" onClick={onClose}>
      <div className="enterprise-modal__dialog" onClick={(e) => e.stopPropagation()}>
        {/* Close button */}
        <button className="enterprise-modal__close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className="enterprise-modal__success">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="24" fill="#047987" />
              <path d="M14 24l7 7 13-13" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="enterprise-modal__success-title">You&apos;re on the list. We&apos;ll set up your account shortly.</h3>
          </div>
        ) : (
          <>
            <h2 className="enterprise-modal__heading">Request Beta Access</h2>
            <p className="enterprise-modal__subheading">
              Get free access to the full platform. No credit card required.
            </p>

            <form onSubmit={handleSubmit} className="enterprise-modal__form">
              <div>
                <label className="enterprise-modal__label" htmlFor="ent-email">Work Email</label>
                <input
                  id="ent-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourbrokerage.com"
                  className="enterprise-modal__input"
                  required
                />
              </div>

              <div>
                <label className="enterprise-modal__label" htmlFor="ent-volume">Monthly Deal Volume</label>
                <select
                  id="ent-volume"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="enterprise-modal__input"
                >
                  <option>Under 20 deals/mo</option>
                  <option>20–50 deals/mo</option>
                  <option>50–100 deals/mo</option>
                  <option>100+ deals/mo</option>
                </select>
              </div>

              <div>
                <label className="enterprise-modal__label" htmlFor="ent-notes">Anything specific you need?</label>
                <textarea
                  id="ent-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Custom integrations, compliance requirements, team size..."
                  className="enterprise-modal__textarea"
                />
              </div>

              {error && <div className="enterprise-modal__error">{error}</div>}

              <button type="submit" disabled={loading} className="enterprise-modal__submit">
                {loading ? 'Submitting...' : 'Request Beta Access'}
              </button>

              <p className="enterprise-modal__footer">
                No credit card required. We&apos;ll send your login details via email.
              </p>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}
