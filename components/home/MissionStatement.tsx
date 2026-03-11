import { FadeUpBlock } from '../shared/AnimatedText';
import { GoldRule } from '../shared/Decorations';

export function MissionStatement() {
  return (
    <section className="py-32 md:py-48 px-6 bg-[var(--color-bg)]">
      <div className="max-w-4xl mx-auto text-center">
         <FadeUpBlock delay={0}>
           <p className="font-mono text-[var(--color-gold)] uppercase tracking-[0.3em] text-xs mb-12">
             Principles
           </p>
         </FadeUpBlock>
         
         <FadeUpBlock delay={0.2}>
           <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-text)] font-light leading-[1.4] mb-12">
             &quot;This is the Private Office of Yusuf Al Thani. Acting with absolute discretion, strategic vision, and a commitment to long-term value generation in the UAE and beyond.&quot;
           </h2>
         </FadeUpBlock>

         <FadeUpBlock delay={0.4}>
           <GoldRule />
         </FadeUpBlock>
      </div>
    </section>
  );
}
