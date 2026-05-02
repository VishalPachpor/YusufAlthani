import { FadeUpBlock } from '../shared/AnimatedText';
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
          </div>
        </FadeUpBlock>
      </div>
    </section>
  );
}
