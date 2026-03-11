import { Hero } from '@/components/home/Hero';
import { MissionStatement } from '@/components/home/MissionStatement';
import { ExpertiseTeaser } from '@/components/home/ExpertiseTeaser';
import { ContactCTA } from '@/components/home/ContactCTA';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <MissionStatement />
        <ExpertiseTeaser />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
