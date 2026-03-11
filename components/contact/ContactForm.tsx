'use client';
import { useState } from 'react';
import { FadeUpBlock } from '../shared/AnimatedText';

export function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async () => {
    if (!fields.name || !fields.email || !fields.message) {
       alert("Please complete all fields.");
       return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      setStatus(res.ok ? 'sent' : 'error');
      if (res.ok) {
         setFields({ name: '', email: '', message: '' });
      }
    } catch {
      setStatus('error');
    }
  };

  // NO <form> tag — use divs + onClick per Antigravity architecture
  return (
    <FadeUpBlock delay={0.2} className="space-y-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Your name"
          value={fields.name}
          onChange={e => setFields(f => ({ ...f, name: e.target.value }))}
          className="w-full bg-transparent border-b border-[var(--color-border)] text-[var(--color-text)] py-4 outline-none focus:border-[var(--color-gold)] transition-colors peer placeholder:text-transparent"
        />
        <label className="absolute left-0 top-4 text-[var(--color-text-muted)] font-mono text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--color-gold)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] pointer-events-none">
          Full Name
        </label>
      </div>

      <div className="relative">
        <input
          type="email"
          placeholder="Your email"
          value={fields.email}
          onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
          className="w-full bg-transparent border-b border-[var(--color-border)] text-[var(--color-text)] py-4 outline-none focus:border-[var(--color-gold)] transition-colors peer placeholder:text-transparent"
        />
        <label className="absolute left-0 top-4 text-[var(--color-text-muted)] font-mono text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--color-gold)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] pointer-events-none">
          Email Address
        </label>
      </div>

      <div className="relative">
        <textarea
          placeholder="Your message"
          rows={5}
          value={fields.message}
          onChange={e => setFields(f => ({ ...f, message: e.target.value }))}
          className="w-full bg-transparent border-b border-[var(--color-border)] text-[var(--color-text)] py-4 outline-none focus:border-[var(--color-gold)] transition-colors resize-none peer placeholder:text-transparent"
        />
        <label className="absolute left-0 top-4 text-[var(--color-text-muted)] font-mono text-xs uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[var(--color-gold)] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] pointer-events-none">
          Enquiry Details
        </label>
      </div>

      <button
        onClick={handleSubmit}
        disabled={status === 'sending' || status === 'sent'}
        className="w-full text-center border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-black py-4 font-mono text-sm uppercase tracking-[0.2em] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'idle' && 'Submit Enquiry'}
        {status === 'sending' && 'Transmitting...'}
        {status === 'sent' && 'Received — Thank you'}
        {status === 'error' && 'Transmission Failed — Retry'}
      </button>
    </FadeUpBlock>
  );
}
