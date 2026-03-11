export function GoldRule({ className = '' }: { className?: string }) {
  return (
    <div className={`w-16 h-px bg-[var(--color-gold)] mx-auto ${className}`} />
  );
}

export function SectionDivider() {
  return (
    <div className="py-24 md:py-32 flex justify-center w-full">
       <div className="w-px h-24 md:h-32 bg-gradient-to-b from-transparent via-[var(--color-gold-dim)] to-transparent opacity-60" />
    </div>
  );
}
