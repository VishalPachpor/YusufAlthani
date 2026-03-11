import { PageHeader } from '@/components/shared/PageHeader';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FadeUpBlock } from '@/components/shared/AnimatedText';

export default function UnlockOpportunitiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-bg)]">
        <PageHeader 
          title="Unlock Market Opportunities" 
        />
        <div className="max-w-3xl mx-auto px-6 pb-32">
          <FadeUpBlock>
            <div className="prose prose-invert prose-lg text-[var(--color-text-muted)] font-light leading-relaxed">
              <p>
                We translate deep regional intelligence into actionable, proprietary deal flow across the United Arab Emirates and broader MENA regions. By acting as a sophisticated bridge for elite international enterprises establishing a presence, we ensure rigorous due diligence and rapid market entry.
              </p>
            </div>
          </FadeUpBlock>
        </div>
      </main>
      <Footer />
    </>
  );
}
