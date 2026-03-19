'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/features', label: 'Features' },
    { href: '/underwriting', label: 'Underwriting' },
    { href: '/intelligence', label: 'Intelligence' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/security', label: 'Security' },
    { href: '/about', label: 'About' },
    { href: '/resources', label: 'Resources' },
  ];

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <img src="/images/YieldStream_Logo.svg" alt="YieldStream" className="nav-logo-image" />
          YieldStream
        </Link>
        <div className="nav-links">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="nav-cta">
          <Link href="/contact" className="btn btn-ghost">Contact</Link>
          <Link href="/pricing" className="btn btn-primary btn-sm">Start Free Trial</Link>
        </div>
      </div>
    </nav>
  );
}
