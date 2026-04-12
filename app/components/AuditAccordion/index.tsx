'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const STEPS = [
  {
    title: 'Upload Statement',
    detail: 'Drop a PDF or send a merchant upload link. YieldStream accepts any standard bank statement format — Chase, Wells Fargo, Mercury, you name it.',
    time: '0s',
  },
  {
    title: 'Extracting 20+ Risk Signals',
    detail: 'Tables, transactions, and balances parsed from up to 12 months of statements. Our OCR pipeline handles poor scans, watermarks, and multi-account PDFs without manual cleanup.',
    time: '~30s',
  },
  {
    title: 'Pattern Recognition & Scoring',
    detail: 'Revenue trends, NSFs, stacking, DSCR, and anomalies detected and classified. Every transaction is categorized and scored — not sampled, not summarized.',
    time: '~60s',
  },
  {
    title: 'Score Ready',
    detail: '20+ structured signals feed directly into lender matching. A full risk profile ready for decisioning before you finish your coffee.',
    time: '~120s',
  },
];

const panelTransition = { duration: 0.3, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

export default function AuditAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="underwriting__accordion">
      {STEPS.map((step, i) => {
        const isOpen = openIndex === i;
        const isLast = i === STEPS.length - 1;

        return (
          <div key={i} className={`underwriting__accordion-item ${isOpen ? 'underwriting__accordion-item--active' : ''}`}>
            <button
              className="underwriting__accordion-trigger"
              aria-expanded={isOpen}
              aria-controls={`audit-panel-${i}`}
              id={`audit-trigger-${i}`}
              onClick={() => { if (!isOpen) setOpenIndex(i); }}
            >
              <span className={`underwriting__step-dot ${isOpen ? 'underwriting__step-dot--active' : ''}`} />
              <span className="underwriting__step-title">{step.title}</span>
              {step.time && <span className="mono underwriting__step-time underwriting__step-time--bordered">{step.time}</span>}
              <motion.span
                className="underwriting__accordion-chevron"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown size={16} strokeWidth={1.5} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`audit-panel-${i}`}
                  role="region"
                  aria-labelledby={`audit-trigger-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={panelTransition}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="underwriting__accordion-panel-inner">
                    <p className="text-sm">{step.detail}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
