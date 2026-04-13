'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Product } from '@/lib/products';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group cursor-pointer overflow-hidden rounded-sm bg-surfaceContainer shadow-luxe"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surfaceContainerLow">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-1000 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-2 p-6">
        <div>
          <h3 className="font-headline text-lg text-onSurface">{product.name}</h3>
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">{product.subtitle}</p>
        </div>
        <span className="text-primary font-label text-sm">{product.price}</span>
      </div>
    </motion.article>
  );
}
