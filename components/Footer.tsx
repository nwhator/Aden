import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e0e0e] border-t border-[#292929] text-stone-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-16 text-center md:px-12">
        <div className="text-2xl font-serif uppercase tracking-[0.35em] text-primary">{siteConfig.brand}</div>
        <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.35em] text-stone-500">
          {siteConfig.footerLinks.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ),
          )}
        </div>
        <div className="h-px w-full max-w-xs bg-stone-800" />
        <p className="text-[10px] uppercase tracking-[0.35em] text-stone-600">
          © {currentYear} {siteConfig.brand}. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
