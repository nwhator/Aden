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
            <span className="material-symbols-outlined">shopping_bag</span>
          </Link>
          <button className="inline-flex items-center justify-center rounded-full p-2 transition-transform hover:scale-105">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </div>
    </header>
  );
}
