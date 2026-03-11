import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yusufalthani.com';

  const routes = [
    '',
    '/about',
    '/uae',
    '/expertise',
    '/expertise/unlock-opportunities',
    '/expertise/handpicked-partners',
    '/expertise/referrals',
    '/strategic-focus',
    '/partnership',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
