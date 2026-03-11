'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants';
import { MobileDrawer } from './MobileDrawer';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-[var(--color-border)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" aria-label="Yusuf Al Thani Private Office" className="relative z-50">
          <Image src="/logo.png" alt="Yusuf Al Thani Private Office" width={112} height={56} className="h-14 w-auto object-contain" priority />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-10 list-none pt-2">
          {NAV_LINKS.map(link => (
            <li key={link.href} className="relative group">
              {link.children ? (
                <>
                  <button className="nav-link outline-none flex items-center gap-1">
                    {link.label}
                  </button>
                  <div className="absolute top-full left-0 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <ul className="bg-[#111] border border-[var(--color-border)] py-4 min-w-[240px] shadow-2xl">
                      {link.children.map(child => (
                         <li key={child.href}>
                           <Link href={child.href} className="block px-6 py-2 text-[var(--color-text-muted)] hover:text-[var(--color-gold)] font-mono text-xs uppercase tracking-wider transition-colors">
                             {child.label}
                           </Link>
                         </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link href={link.href} className="nav-link">{link.label}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger — button, not anchor */}
        <button
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(v => !v)}
          className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-end gap-[6px] outline-none"
        >
          <span className={`block w-8 h-[1px] bg-[var(--color-gold)] transition-transform duration-300 origin-right ${mobileOpen ? '-rotate-45 -translate-x-1' : ''}`} />
          <span className={`block h-[1px] bg-[var(--color-gold)] transition-all duration-300 origin-right ${mobileOpen ? 'w-8 rotate-45 translate-x-0 -translate-y-[1px]' : 'w-6'}`} />
        </button>
      </nav>

      {/* ONE mobile drawer — not a separate DOM tree */}
      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} id="mobile-menu" />
    </header>
  );
}
