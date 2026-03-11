import { PageHeader } from '@/components/shared/PageHeader';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FadeUpBlock } from '@/components/shared/AnimatedText';

export default function HandpickedPartnersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-bg)]">
        <PageHeader 
          title="Handpicked Partners" 
        />
        <div className="max-w-3xl mx-auto px-6 pb-32">
          <FadeUpBlock>
            <div className="prose prose-invert prose-lg text-[var(--color-text-muted)] font-light leading-relaxed">
              <p>
                Our philosophy prioritizes quality over volume. We collaborate securely with an exclusive, highly vetted network of top-tier family offices, institutional capital providers, and proven domain operators to ensure perfect alignment of long-term interests.
              </p>
            </div>
          </FadeUpBlock>
        </div>
      </main>
      <Footer />
    </>
  );
}
