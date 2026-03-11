import { ReactNode } from 'react';
import { GoldRule } from './Decorations';

export function PageHeader({ 
  title, 
  subtitle 
}: { 
  title: string; 
  subtitle?: string 
}) {
  return (
    <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto text-center">
      <h1 className="font-serif text-5xl md:text-6xl text-[var(--color-text)] mb-8 font-light">
        {title}
      </h1>
      <GoldRule className="mb-8" />
      {subtitle && (
        <p className="text-[var(--color-text-muted)] text-lg md:text-xl font-light tracking-wide">
          {subtitle}
        </p>
      )}
    </div>
  );
}
