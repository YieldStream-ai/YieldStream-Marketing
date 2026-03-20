'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  BarChart3,
  Zap,
  ShieldCheck,
  LayoutGrid,
  BookOpen,
  Milestone,
  User,
  Mail,
} from 'lucide-react';
import './Nav.scss';

const ICON_PROPS = { size: 16, strokeWidth: 1.5 };

const dropdownKeys = ['platform', 'company', 'resources'];

const dropdowns = {
  platform: {
    label: 'Platform',
    items: [
      { href: '/features', title: 'Overview', desc: 'See the full platform', icon: LayoutGrid },
      { href: '/underwriting', title: 'Underwriting', desc: 'AI bank statement analysis', icon: BarChart3 },
      { href: '/intelligence', title: 'Intelligence Engine', desc: 'Three-layer scoring', icon: Zap },
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

// Spring config for the container morph — lower stiffness = more glide
const containerSpring = { type: 'spring', stiffness: 180, damping: 22, mass: 1 };

// Content fade/slide duration
const contentDuration = 0.35;

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);

  const [dims, setDims] = useState({ width: 0, height: 0, x: 0 });

  const timeoutRef = useRef(null);
  const navRef = useRef(null);
  const triggerRefs = useRef({});
  const contentRefs = useRef({});
  const prevOpenRef = useRef(null);
  const desktopRef = useRef(null);

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

  const measure = useCallback((key) => {
    if (!key) return;
    const triggerEl = triggerRefs.current[key];
    const contentEl = contentRefs.current[key];
    const desktopEl = desktopRef.current;
    if (!triggerEl || !contentEl || !desktopEl) return;

    const triggerRect = triggerEl.getBoundingClientRect();
    const desktopRect = desktopEl.getBoundingClientRect();
    const w = contentEl.scrollWidth;
    const h = contentEl.scrollHeight;
    const triggerCenter = triggerRect.left + triggerRect.width / 2 - desktopRect.left;

    setDims({ width: w, height: h, x: triggerCenter - w / 2 });
  }, []);

  // Compute slide direction based on trigger index
  const getDirection = useCallback(() => {
    const prev = prevOpenRef.current;
    if (!prev || !open) return 0;
    const prevIdx = dropdownKeys.indexOf(prev);
    const nextIdx = dropdownKeys.indexOf(open);
    return nextIdx > prevIdx ? 1 : -1;
  }, [open]);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => measure(open));
    }
    prevOpenRef.current = open;
  }, [open, measure]);

  function handleEnter(key) {
    clearTimeout(timeoutRef.current);
    setOpen(key);
  }

  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(null), 150);
  }

  function handleContainerEnter() {
    clearTimeout(timeoutRef.current);
  }

  function handleContainerLeave() {
    timeoutRef.current = setTimeout(() => setOpen(null), 150);
  }

  function isActiveDropdown(key) {
    return dropdowns[key].items.some((item) => pathname === item.href);
  }

  const dir = getDirection();
  const isOpen = open !== null;

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} ref={navRef}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <Image src="/images/YieldStream_Logo.svg" alt="" width={32} height={32} className="nav-logo-image" />
            YieldStream
          </Link>

          {/* Desktop */}
          <div className="nav__desktop" ref={desktopRef}>
            {dropdownKeys.map((key) => {
              const dd = dropdowns[key];
              return (
                <div
                  key={key}
                  className="nav__trigger-wrap"
                  onMouseEnter={() => handleEnter(key)}
                  onMouseLeave={handleLeave}
                >
                  <button
                    ref={(el) => (triggerRefs.current[key] = el)}
                    className={`nav__dropdown-trigger ${open === key ? 'nav__dropdown-trigger--open' : ''} ${isActiveDropdown(key) ? 'nav__dropdown-trigger--active' : ''}`}
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
                </div>
              );
            })}
            <Link
              href="/pricing"
              className={`nav__dropdown-trigger ${pathname === '/pricing' ? 'nav__dropdown-trigger--active' : ''}`}
            >
              Pricing
            </Link>

            {/* Hidden measurement layers — always mounted, invisible */}
            <div className="nav__measure-layer" aria-hidden="true">
              {dropdownKeys.map((key) => (
                <div
                  key={key}
                  ref={(el) => (contentRefs.current[key] = el)}
                  className="nav__morph-content"
                >
                  {dropdowns[key].items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.href} className="nav__dropdown-item">
                        <div className="nav__dropdown-icon">
                          <Icon {...ICON_PROPS} />
                        </div>
                        <div className="nav__dropdown-item-content">
                          <span className="nav__dropdown-item-title">{item.title}</span>
                          <span className="nav__dropdown-item-desc">{item.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Morphing container */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="nav__morph-container"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    width: dims.width,
                    height: dims.height,
                    x: dims.x,
                  }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{
                    opacity: { duration: 0.25, ease: 'easeOut' },
                    scale: { duration: 0.25, ease: 'easeOut' },
                    width: containerSpring,
                    height: containerSpring,
                    x: containerSpring,
                  }}
                  onMouseEnter={handleContainerEnter}
                  onMouseLeave={handleContainerLeave}
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={open}
                      className="nav__morph-content nav__morph-content--visible"
                      initial={{ opacity: 0, x: dir * 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: dir * -24 }}
                      transition={{ duration: contentDuration, ease: [0.4, 0, 0.2, 1] }}
                    >
                      {dropdowns[open].items.map((item) => {
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
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
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
