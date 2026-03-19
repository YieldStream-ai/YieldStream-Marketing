'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import './Nav.css';

const dropdowns = {
  product: {
    label: 'Platform',
    items: [
      { href: '/features', title: 'Features', desc: 'Everything the platform does' },
      { href: '/underwriting', title: 'Underwriting', desc: 'AI bank statement analysis' },
      { href: '/intelligence', title: 'Intelligence Engine', desc: 'Three-layer scoring' },
    ],
  },
  company: {
    label: 'Company',
    items: [
      { href: '/about', title: 'About', desc: 'Our story' },
      { href: '/security', title: 'Security', desc: 'Data protection & compliance' },
      { href: '/contact', title: 'Contact', desc: 'Get in touch' },
    ],
  },
  resources: {
    label: 'Resources',
    items: [
      { href: '/resources', title: 'Blog', desc: 'Insights & guides' },
      { href: '/feedback', title: 'Feedback & Roadmap', desc: 'Shape the product' },
    ],
  },
};

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const timeoutRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(null);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  function handleEnter(key) {
    clearTimeout(timeoutRef.current);
    setOpen(key);
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(null), 150);
  }

  function isActiveDropdown(key) {
    return dropdowns[key].items.some(item => pathname === item.href);
  }

  const chevron = (isOpen) => (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{
      marginLeft: 4, transition: 'transform 0.2s',
      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    }}>
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <div className="nav-logo-mark">Y</div>
            YieldStream
          </Link>

          {/* Desktop */}
          <div className="ys-nav-desktop">
            {Object.entries(dropdowns).map(([key, dd]) => (
              <div key={key} className="ys-dd-wrap"
                onMouseEnter={() => handleEnter(key)}
                onMouseLeave={handleLeave}
              >
                <button
                  className={`ys-dd-trigger ${isActiveDropdown(key) ? 'ys-active' : ''}`}
                  onClick={() => setOpen(open === key ? null : key)}
                  aria-expanded={open === key}
                >
                  {dd.label}{chevron(open === key)}
                </button>
                <div className={`ys-dd-panel ${open === key ? 'ys-open' : ''}`}
                  onMouseEnter={() => handleEnter(key)}
                  onMouseLeave={handleLeave}
                >
                  {dd.items.map(item => (
                    <Link key={item.href} href={item.href}
                      className={`ys-dd-item ${pathname === item.href ? 'ys-active' : ''}`}
                    >
                      <span className="ys-dd-item-title">{item.title}</span>
                      <span className="ys-dd-item-desc">{item.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link href="/pricing" className={`ys-dd-trigger ${pathname === '/pricing' ? 'ys-active' : ''}`}>
              Pricing
            </Link>
          </div>

          <div className="nav-cta">
            <Link href="/pricing" className="btn btn-primary">Start Free Trial</Link>
          </div>

          {/* Mobile toggle */}
          <button className="ys-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span className={`ys-hamburger ${mobileOpen ? 'ys-x' : ''}`}>
              <span /><span /><span />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="ys-mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div className="ys-mobile-drawer" onClick={e => e.stopPropagation()}>
            {Object.entries(dropdowns).map(([key, dd]) => (
              <div key={key} className="ys-mobile-section">
                <button className="ys-mobile-trigger"
                  onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                >
                  {dd.label}{chevron(mobileExpanded === key)}
                </button>
                {mobileExpanded === key && (
                  <div className="ys-mobile-items">
                    {dd.items.map(item => (
                      <Link key={item.href} href={item.href} className="ys-mobile-link"
                        onClick={() => setMobileOpen(false)}
                      >
                        <span className="ys-mobile-link-t">{item.title}</span>
                        <span className="ys-mobile-link-d">{item.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/pricing" className="ys-mobile-pricing" onClick={() => setMobileOpen(false)}>
              Pricing
            </Link>
            <div style={{ padding: '16px 20px' }}>
              <Link href="/pricing" className="btn btn-primary btn-lg"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => setMobileOpen(false)}
              >
                Start Free Trial →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
