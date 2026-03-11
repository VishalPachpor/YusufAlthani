import { FadeUpBlock } from '../shared/AnimatedText';
import { CONTACT_EMAIL } from '@/lib/constants';
import { Button } from '../shared/Button';

export function ContactCTA() {
  return (
    <section className="py-32 bg-[var(--color-bg)] text-center px-6">
      <div className="max-w-2xl mx-auto">
        <FadeUpBlock>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-text)] mb-8">
            Initiate a Dialogue
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg font-light mb-12">
            For structured investment proposals, joint ventures, or strategic counsel within the United Arab Emirates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button href="/contact" variant="primary">Contact Office</Button>
            <span className="text-[var(--color-text-muted)] italic font-serif">or</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[var(--color-gold)] font-mono text-sm tracking-widest uppercase hover:opacity-80 transition-opacity">
              Direct Enquiry
            </a>
          </div>
        </FadeUpBlock>
      </div>
    </section>
  );
}
