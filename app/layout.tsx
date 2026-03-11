import type { Metadata } from 'next';
import { serif, mono } from '@/lib/fonts';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: { default: 'Yusuf Al Thani — The Private Office', template: '%s | Yusuf Al Thani' },
  description: 'The Private Office of Yusuf Al Thani. Strategic investment and family office headquartered in the United Arab Emirates.',
  openGraph: {
    title: 'Yusuf Al Thani — The Private Office',
    description: 'Strategic investment and family office in the UAE.',
    images: ['/og-image.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body className="antialiased selection:bg-[var(--color-gold)] selection:text-black">
        {children}
      </body>
    </html>
  );
}
