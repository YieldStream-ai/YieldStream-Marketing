'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PricingTiers from '../../pricing/PricingTiers';
import './PricingModal.scss';

export default function PricingModal({ isOpen, onClose }) {
  const [annual, setAnnual] = useState(true);

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

  return createPortal(
    <div className="pricing-modal__backdrop" onClick={onClose}>
      <div className="pricing-modal__dialog" onClick={(e) => e.stopPropagation()}>
        <button className="pricing-modal__close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <PricingTiers annual={annual} setAnnual={setAnnual} />
      </div>
    </div>,
    document.body
  );
}
