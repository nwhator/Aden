'use client';

import { useState } from 'react';
import { useCart } from './CartContext';
import type { Product } from '@/lib/types';

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [status, setStatus] = useState('');

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      slug: product.slug,
    });
    setStatus('Added to cart');
    window.setTimeout(() => setStatus(''), 2500);
  };

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={handleAdd}
        className="mt-6 w-full rounded-sm border border-[#4e4639] bg-primary px-5 py-4 text-[10px] uppercase tracking-[0.35em] text-black transition hover:opacity-90"
      >
        Add to Cart — {product.price}
      </button>
      {status ? <p className="text-sm text-primary">{status}</p> : null}
    </div>
  );
}
