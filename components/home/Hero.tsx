'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../shared/Button';
import { useRef } from 'react';

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }
  })
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen bg-[var(--color-bg)] flex items-center justify-center overflow-hidden pt-20">
      {/* Pure black background — no video */}
      <div className="absolute inset-0 bg-black z-0" />
      
      {/* Subtle grain overlay for texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/grain.svg')] bg-repeat z-0 mix-blend-overlay" />
      
      {/* Gold radial glow — atmospheric depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.06)_0%,_transparent_70%)] z-0 pointer-events-none" />

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.p
          custom={0}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="text-[var(--color-gold)] font-mono text-xs tracking-[0.4em] uppercase mb-8"
        >
          The Private Office
        </motion.p>

        <motion.h1
          custom={1}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--color-text)] font-light leading-[1.1] mb-8"
        >
          Yusuf Al Thani
        </motion.h1>

        <motion.div
          custom={2}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="w-16 h-px bg-[var(--color-gold)] mx-auto mb-8"
        />

        <motion.p
          custom={3}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="text-[var(--color-text-muted)] text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto"
        >
          A family office dedicated to strategic investment,
          partnership, and legacy across the United Arab Emirates.
        </motion.p>

        <motion.div
          custom={4}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="mt-14"
        >
          <Button href="/about" variant="ghost">Learn About Us</Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-px h-16 bg-gradient-to-b from-[var(--color-gold)] to-transparent" />
      </motion.div>
    </section>
  );
}
