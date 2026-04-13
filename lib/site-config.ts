export type NavLink = {
  label: string;
  href: string;
};

export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const siteConfig = {
  brand: 'ADEN',
  navLinks: [
    { label: 'Shop', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Admin', href: '/admin' },
  ] as NavLink[],
  footerLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Instagram', href: 'https://instagram.com/aden', external: true },
  ] as FooterLink[],
};
