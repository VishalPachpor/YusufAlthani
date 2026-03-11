import Link from 'next/link';
import { CONTACT_EMAIL } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[var(--color-gold)] mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-16 md:mb-24">
          
          {/* Logo & Info */}
          <div className="max-w-xs">
            <Link href="/" aria-label="Yusuf Al Thani Private Office">
               <img src="/logo.png" alt="Yusuf Al Thani Private Office" className="h-20 w-auto object-contain mb-6" />
            </Link>
          </div>

          {/* Compact Nav */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-24">
            <nav className="flex flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-2">Office</h3>
              <Link href="/about" className="text-sm hover:text-[var(--color-gold)] transition-colors">About Us</Link>
              <Link href="/uae" className="text-sm hover:text-[var(--color-gold)] transition-colors">United Arab Emirates</Link>
            </nav>
            <nav className="flex flex-col gap-4">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-2">Practice</h3>
              <Link href="/expertise" className="text-sm hover:text-[var(--color-gold)] transition-colors">Expertise</Link>
              <Link href="/contact" className="text-sm hover:text-[var(--color-gold)] transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Direct Email */}
          <div className="flex flex-col gap-4">
             <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-2">Direct Enquiry</h3>
             <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--color-gold)] font-mono text-sm tracking-wider hover:opacity-80 transition-opacity">
               {CONTACT_EMAIL}
             </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[var(--color-border)] gap-6 text-xs text-[var(--color-text-muted)]">
          <p>&copy; {currentYear} The Private Office of Yusuf Al Thani. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[var(--color-text)] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[var(--color-text)] transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-[var(--color-text)] transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
