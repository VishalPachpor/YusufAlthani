import { PageHeader } from '@/components/shared/PageHeader';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FadeUpBlock } from '@/components/shared/AnimatedText';

export default function PartnershipPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-bg)]">
        <PageHeader 
          title="Significance of Partnership" 
        />
        <div className="max-w-3xl mx-auto px-6 pb-32">
          <FadeUpBlock>
            <div className="prose prose-invert prose-lg text-[var(--color-text-muted)] font-light leading-relaxed">
              <p>
                We view capital merely as a baseline. True value is generated through asymmetric information, local execution capability, and the alignment of visionary leadership. Our partnership model is highly selective, designed to foster multi-generational relationships rather than transactional exchanges.
              </p>
            </div>
          </FadeUpBlock>
        </div>
      </main>
      <Footer />
    </>
  );
}
