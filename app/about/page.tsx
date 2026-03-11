import { PageHeader } from '@/components/shared/PageHeader';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FadeUpBlock } from '@/components/shared/AnimatedText';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata('About Us');

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-bg)]">
        <PageHeader 
          title="About Us" 
          subtitle="Vision, discretion, and strategic discipline."
        />
        
        <div className="max-w-3xl mx-auto px-6 pb-32">
          <FadeUpBlock>
            <div className="prose prose-invert prose-lg text-[var(--color-text-muted)] font-light leading-relaxed">
              <p className="mb-8">
                The Private Office of Yusuf Al Thani operates as the central hub for the strategic, investment, and philanthropic endeavours of the family. Headquartered in the United Arab Emirates, we maintain a global perspective while remaining deeply rooted in the region’s long-term economic narrative.
              </p>
              <p className="mb-8">
                Operating with absolute discretion, we do not seek public profiles for our investments. Our mandate focuses on generational wealth preservation, transformative value creation, and forging partnerships with best-in-class operators worldwide.
              </p>
              <p>
                We provide selective co-investment opportunities to a strictly curated network of international partners seeking an aligned, long-term approach to capital deployment in the Middle East and global markets.
              </p>
            </div>
          </FadeUpBlock>
        </div>
      </main>
      <Footer />
    </>
  );
}
