import { PageHeader } from '@/components/shared/PageHeader';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FadeUpBlock } from '@/components/shared/AnimatedText';

export default function ReferralsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-bg)]">
        <PageHeader 
          title="Empowering through Referrals" 
        />
        <div className="max-w-3xl mx-auto px-6 pb-32">
          <FadeUpBlock>
            <div className="prose prose-invert prose-lg text-[var(--color-text-muted)] font-light leading-relaxed">
              <p>
                A trusted introduction is the most valuable currency in regional business. We facilitate exponential growth for our partners through highly vetted, strategic introductions at the highest levels of regional enterprise, finance, and governance.
              </p>
            </div>
          </FadeUpBlock>
        </div>
      </main>
      <Footer />
    </>
  );
}
