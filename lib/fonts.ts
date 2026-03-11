import { Cormorant_Garamond, Geist_Mono } from 'next/font/google';

export const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-serif',
});

export const mono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});
