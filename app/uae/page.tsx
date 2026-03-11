import { PageHeader } from '@/components/shared/PageHeader';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FadeUpBlock } from '@/components/shared/AnimatedText';
import { Button } from '@/components/shared/Button';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata('United Arab Emirates');

export default function UAEPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-bg)]">
        <PageHeader 
          title="United Arab Emirates" 
          subtitle="Our strategic home and global nexus."
        />
        
        <div className="max-w-4xl mx-auto px-6 pb-32">
          
          <FadeUpBlock>
            <div className="text-[var(--color-text-muted)] text-lg font-light leading-relaxed mb-20 max-w-3xl mx-auto text-center">
              <p className="mb-6">
                The United Arab Emirates represents one of the most dynamic business and investment environments globally. As the designated headquarters for The Private Office of Yusuf Al Thani, the UAE offers unparalleled connectivity, forward-looking governance, and a rigorous regulatory framework.
              </p>
              <p>
                From our base in the UAE, we direct capital flows intelligently across emerging sectors and established markets, acting as an essential bridge for our global partners.
              </p>
            </div>
          </FadeUpBlock>

          <FadeUpBlock delay={0.2}>
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              <div className="bg-[#111] p-8 border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-colors">
                <h3 className="text-[var(--color-gold)] font-mono text-sm tracking-widest uppercase mb-4">01. Connectivity</h3>
                <p className="text-[var(--color-text-muted)] font-light text-sm">Positioned at the crossroads of East and West, providing frictionless access to a third of the world&apos;s population within a four-hour flight.</p>
              </div>
              <div className="bg-[#111] p-8 border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-colors">
                <h3 className="text-[var(--color-gold)] font-mono text-sm tracking-widest uppercase mb-4">02. Stability</h3>
                <p className="text-[var(--color-text-muted)] font-light text-sm">A highly resilient economy backed by visionary leadership, robust sovereign wealth, and a commitment to long-term diversification.</p>
              </div>
              <div className="bg-[#111] p-8 border border-[var(--color-border)] hover:border-[var(--color-gold)] transition-colors">
                <h3 className="text-[var(--color-gold)] font-mono text-sm tracking-widest uppercase mb-4">03. Innovation</h3>
                <p className="text-[var(--color-text-muted)] font-light text-sm">Aggressively adopting next-generation technologies across finance, logistics, and renewable energy to future-proof the national infrastructure.</p>
              </div>
            </div>
          </FadeUpBlock>

          <FadeUpBlock delay={0.4} className="text-center">
            <h3 className="font-serif text-3xl text-[var(--color-text)] mb-8">Establish Your Presence</h3>
            <Button href="/contact">Contact The Office</Button>
          </FadeUpBlock>

        </div>
      </main>
      <Footer />
    </>
  );
}
