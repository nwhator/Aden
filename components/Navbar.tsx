import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/40 backdrop-blur-2xl text-onSurface">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        <Link href="/" className="text-2xl font-serif uppercase tracking-[0.35em] text-primary">
          {siteConfig.brand}
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-stone-300">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-5 text-primary">
          <Link href="/shop" className="inline-flex items-center justify-center rounded-full p-2 transition-transform hover:scale-105">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 7V6a6 6 0 0 1 12 0v1" />
              <path d="M5 7h14l-1.5 14h-11L5 7z" />
              <path d="M9 11h6" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}
