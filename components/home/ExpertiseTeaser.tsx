import { FadeUpBlock } from '../shared/AnimatedText';
import { Button } from '../shared/Button';

const TEASERS = [
  {
    title: 'Strategic Investment',
    desc: 'Deploying capital into high-growth, transformative sectors that align with the long-term vision of the UAE.',
    link: '/strategic-focus'
  },
  {
    title: 'Partnership',
    desc: 'Forging exclusive alliances with global leaders to unlock mutually beneficial opportunities and market expansion.',
    link: '/partnership'
  },
  {
    title: 'UAE Market',
    desc: 'Acting as a sophisticated bridge for elite international enterprises establishing a presence in the region.',
    link: '/uae'
  }
];

export function ExpertiseTeaser() {
  return (
    <section className="py-24 bg-[#111] border-y border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6">
        
        <FadeUpBlock>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <p className="font-mono text-[var(--color-gold)] uppercase tracking-[0.3em] text-xs mb-4">Focus Areas</p>
              <h2 className="font-serif text-4xl text-[var(--color-text)]">Our Expertise</h2>
            </div>
            <Button href="/expertise" variant="ghost">View All Expertise</Button>
          </div>
        </FadeUpBlock>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {TEASERS.map((teaser, i) => (
            <FadeUpBlock key={teaser.title} delay={i * 0.15} className="group cursor-pointer">
              <a href={teaser.link} className="block h-full border border-[var(--color-border)] p-8 hover:border-[var(--color-gold)] transition-colors duration-500 bg-[#0a0a0a]">
                <div className="w-10 h-px bg-[var(--color-gold-dim)] mb-8 transition-all duration-500 group-hover:w-16 group-hover:bg-[var(--color-gold)]" />
                <h3 className="font-serif text-2xl text-[var(--color-text)] mb-4">{teaser.title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed font-light">{teaser.desc}</p>
              </a>
            </FadeUpBlock>
          ))}
        </div>

      </div>
    </section>
  );
}
