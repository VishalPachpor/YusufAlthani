import type { Metadata } from 'next';

export function generatePageMetadata(title: string, description?: string): Metadata {
  return {
    title,
    description: description || 'The Private Office of Yusuf Al Thani. Strategic investment and family office headquartered in the United Arab Emirates.',
    openGraph: {
      title: `${title} | Yusuf Al Thani`,
      description: description || 'Strategic investment and family office in the UAE.',
      images: ['/og-image.jpg'],
      locale: 'en_US',
      type: 'website',
    },
  };
}
