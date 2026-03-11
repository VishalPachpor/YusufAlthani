import { PageHeader } from '@/components/shared/PageHeader';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FadeUpBlock } from '@/components/shared/AnimatedText';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata('Expertise');

const EXPERTISE_AREAS = [
  {
    title: 'Unlock Market Opportunities',
    href: '/expertise/unlock-opportunities',
    desc: 'Translating deep regional intelligence into actionable, proprietary deal flow across sectors.'
  },
  {
    title: 'Handpicked Partners',
    href: '/expertise/handpicked-partners',
    desc: 'Collaborating securely with an exclusive network of family offices, institutional capital, and proven operators.'
  },
  {
    title: 'Empowering through Referrals',
    href: '/expertise/referrals',
    desc: 'Facilitating growth through highly vetted, strategic introductions at the highest levels of regional enterprise and governance.'
  }
];

export default function ExpertiseIndex() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-bg)]">
        <PageHeader 
          title="Our Expertise" 
          subtitle="Precision. Intelligence. Execution."
        />
        
        <div className="max-w-4xl mx-auto px-6 pb-32">
          <div className="flex flex-col gap-12">
            {EXPERTISE_AREAS.map((area, i) => (
              <FadeUpBlock key={area.title} delay={i * 0.1}>
                <a 
                  href={area.href}
                  className="group block border-t border-[var(--color-border)] pt-8 pb-4 hover:border-[var(--color-gold)] transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <h2 className="font-serif text-3xl text-[var(--color-text)] group-hover:text-[var(--color-gold)] transition-colors">
                      {area.title}
                    </h2>
                    <p className="text-[var(--color-text-muted)] font-light max-w-md text-sm md:text-right">
                      {area.desc}
                    </p>
                  </div>
                </a>
              </FadeUpBlock>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
