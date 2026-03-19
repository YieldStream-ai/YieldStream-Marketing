'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import {
  ChevronDown,
  BarChart3,
  Zap,
  ShieldCheck,
  BookOpen,
  Milestone,
  User,
  Mail,
} from 'lucide-react';
import './Nav.scss';

const ICON_PROPS = { size: 20, strokeWidth: 1.5 };

const dropdowns = {
  platform: {
    label: 'Platform',
    items: [
      { href: '/underwriting', title: 'Underwriting', desc: 'AI bank statement analysis', icon: BarChart3 },
      { href: '/intelligence', title: 'Intelligence Engine', desc: 'Three-layer scoring', icon: Zap },
      { href: '/security', title: 'ISO Vault', desc: 'Data protection & compliance', icon: ShieldCheck },
    ],
  },
  company: {
    label: 'Company',
    items: [
      { href: '/about', title: 'About', desc: 'Our story', icon: User },
      { href: '/security', title: 'Security', desc: 'Data protection & compliance', icon: ShieldCheck },
      { href: '/contact', title: 'Contact', desc: 'Get in touch', icon: Mail },
    ],
  },
  resources: {
    label: 'Resources',
    items: [
      { href: '/resources', title: 'Blog', desc: 'Insights & guides', icon: BookOpen },
      { href: '/feedback', title: 'Feedback & Roadmap', desc: 'Shape the product', icon: Milestone },
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
    return dropdowns[key].items.some((item) => pathname === item.href);
  }

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <div className="nav-logo-mark">Y</div>
            YieldStream
          </Link>

          {/* Desktop */}
          <div className="nav__desktop">
            {Object.entries(dropdowns).map(([key, dd]) => (
              <div
                key={key}
                className="nav__dropdown-wrap"
                onMouseEnter={() => handleEnter(key)}
                onMouseLeave={handleLeave}
              >
                <button
                  className={`nav__dropdown-trigger ${isActiveDropdown(key) ? 'nav__dropdown-trigger--active' : ''}`}
                  onClick={() => setOpen(open === key ? null : key)}
                  aria-expanded={open === key}
                >
                  {dd.label}
                  <ChevronDown
                    size={10}
                    strokeWidth={1.5}
                    className="nav__chevron"
                    style={{ transform: open === key ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                <div
                  className={`nav__dropdown-panel ${open === key ? 'nav__dropdown-panel--open' : ''}`}
                  onMouseEnter={() => handleEnter(key)}
                  onMouseLeave={handleLeave}
                >
                  {dd.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`nav__dropdown-item ${pathname === item.href ? 'nav__dropdown-item--active' : ''}`}
                      >
                        <div className="nav__dropdown-icon">
                          <Icon {...ICON_PROPS} />
                        </div>
                        <div className="nav__dropdown-item-content">
                          <span className="nav__dropdown-item-title">{item.title}</span>
                          <span className="nav__dropdown-item-desc">{item.desc}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
            <Link
              href="/pricing"
              className={`nav__dropdown-trigger ${pathname === '/pricing' ? 'nav__dropdown-trigger--active' : ''}`}
            >
              Pricing
            </Link>
          </div>

          <div className="nav-cta">
            <Link href="/pricing" className="btn btn-primary btn-sm">
              Start Free Trial
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="nav__mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span className={`nav__hamburger ${mobileOpen ? 'nav__hamburger--open' : ''}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="nav__mobile-overlay" onClick={() => setMobileOpen(false)}>
          <div className="nav__mobile-drawer" onClick={(e) => e.stopPropagation()}>
            {Object.entries(dropdowns).map(([key, dd]) => (
              <div key={key} className="nav__mobile-section">
                <button
                  className="nav__mobile-trigger"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === key ? null : key)
                  }
                >
                  {dd.label}
                  <ChevronDown
                    size={12}
                    strokeWidth={1.5}
                    className="nav__mobile-trigger-chevron"
                    style={{ transform: mobileExpanded === key ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>
                {mobileExpanded === key && (
                  <div className="nav__mobile-items">
                    {dd.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="nav__mobile-link"
                          onClick={() => setMobileOpen(false)}
                        >
                          <div className="nav__mobile-icon-frame">
                            <Icon {...ICON_PROPS} />
                          </div>
                          <div>
                            <span className="nav__mobile-link-title">{item.title}</span>
                            <span className="nav__mobile-link-desc">{item.desc}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/pricing"
              className="nav__mobile-pricing"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <div className="nav__mobile-cta-wrap">
              <Link
                href="/pricing"
                className="btn btn-primary btn-lg nav__mobile-cta-btn"
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
