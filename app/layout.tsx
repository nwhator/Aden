import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Manrope, Noto_Serif } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from '@/components/CartContext';
import CartDrawer from '@/components/CartDrawer';

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ADEN Bespoke',
  description: 'Luxury bespoke shoemaking by ADEN.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${manrope.variable}`}>
      <body className="bg-surface text-onSurface font-body">
        <CartProvider>
          <div className="min-h-screen bg-surface">
            <Navbar />
            {children}
            <Footer />
            <CartDrawer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
