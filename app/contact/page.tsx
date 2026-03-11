import { ContactForm } from '@/components/contact/ContactForm';
import { CONTACT_EMAIL } from '@/lib/constants';
import { PageHeader } from '@/components/shared/PageHeader';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FadeUpBlock } from '@/components/shared/AnimatedText';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata('Contact');

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-bg)]">
        <PageHeader 
          title="Contact" 
          subtitle="Initiate a dialogue with The Private Office."
        />

        <div className="max-w-5xl mx-auto px-6 pb-32">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            
            <FadeUpBlock>
              <div className="pr-4 md:pr-12 md:border-r border-[var(--color-border)] h-full">
                <h3 className="font-serif text-2xl text-[var(--color-text)] mb-6">Direct Channels</h3>
                <p className="text-[var(--color-text-muted)] font-light leading-relaxed mb-12">
                  For formal partnership enquiries, institutional co-investments, and strategic advisory matters, please utilise the secure submission form or reach out directly to our management team.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <p className="font-mono text-xs tracking-widest uppercase text-[var(--color-text-muted)] mb-2">Electronic Mail</p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-[var(--color-gold)] font-mono text-sm tracking-wider hover:opacity-80 transition-opacity"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                  <div>
                    <p className="font-mono text-xs tracking-widest uppercase text-[var(--color-text-muted)] mb-2">Headquarters</p>
                    <p className="text-[var(--color-text)] font-light text-sm">
                      United Arab Emirates<br/>
                      (Meetings strictly by prior appointment)
                    </p>
                  </div>
                </div>
              </div>
            </FadeUpBlock>

            <ContactForm />

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
