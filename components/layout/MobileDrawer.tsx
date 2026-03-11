'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS, CONTACT_EMAIL } from '@/lib/constants';

export const MobileDrawer = ({
  open,
  id
}: {
  open: boolean;
  onClose: () => void;
  id: string;
}) => {

  // Trap focus/scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div
      id={id}
      className={`fixed inset-0 z-40 bg-[var(--color-bg)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        open ? 'translate-x-0' : 'translate-x-full'
      } flex flex-col pt-32 px-6 pb-12 overflow-y-auto`}
    >
      <div className="flex-1">
        <ul className="flex flex-col gap-6">
          {NAV_LINKS.map(link => (
            <li key={link.href} className="border-b border-[var(--color-border)] pb-6 mb-2">
              <Link
                href={link.href}
                className="font-serif text-3xl text-[var(--color-text)] block hover:text-[var(--color-gold)] transition-colors"
              >
                {link.label}
              </Link>
              {link.children && (
                <ul className="mt-4 flex flex-col gap-4 pl-4 border-l border-[var(--color-border)]">
                  {link.children.map(child => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="font-mono text-sm uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-gold)]"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12 uppercase tracking-widest font-mono text-xs">
        <p className="text-[var(--color-text-muted)] mb-2">Direct Enquiry</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--color-gold)]">{CONTACT_EMAIL}</a>
      </div>
    </div>
  );
};
