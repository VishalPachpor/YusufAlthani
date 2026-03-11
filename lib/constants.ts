export const CONTACT_EMAIL = 'shabbir@yusufalthani.com';

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_LINKS: NavLink[] = [
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: 'United Arab Emirates', href: '/uae' },
      { label: 'Strategic Focus', href: '/strategic-focus' },
      { label: 'Significance of Partnership', href: '/partnership' },
    ]
  },
  {
    label: 'Expertise',
    href: '/expertise',
    children: [
      { label: 'Unlock Market Opportunities', href: '/expertise/unlock-opportunities' },
      { label: 'Handpicked Partners', href: '/expertise/handpicked-partners' },
      { label: 'Empowering through Referrals', href: '/expertise/referrals' },
    ]
  },
  {
    label: 'Media',
    href: '/blog',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
