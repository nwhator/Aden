'use client';

import { useMemo, useState } from 'react';
import ProductGrid from './ProductGrid';
import type { Product } from '@/lib/types';

const styleOptions = ['Oxford', 'Loafers', 'Boots', 'Monk Strap'];
const materialOptions = ['Box Calf', 'French Suede', 'Grain Leather'];
const colorOptions = ['Obsidian', 'Bordeaux', 'Black', 'Chestnut'];

export default function ShopBrowser({ products }: { products: Product[] }) {
  const [selectedStyle, setSelectedStyle] = useState<string>('');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const content = `${product.name} ${product.subtitle} ${product.description ?? ''}`.toLowerCase();
        const styleMatch = selectedStyle ? content.includes(selectedStyle.toLowerCase()) : true;
        const materialMatch = selectedMaterial ? content.includes(selectedMaterial.toLowerCase()) : true;
        const colorMatch = selectedColor ? content.includes(selectedColor.toLowerCase()) : true;
        return styleMatch && materialMatch && colorMatch;
      }),
    [products, selectedStyle, selectedMaterial, selectedColor],
  );

  const resetFilters = () => {
    setSelectedStyle('');
    setSelectedMaterial('');
    setSelectedColor('');
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 md:px-12">
      <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-primary">Curated Excellence</p>
          <h1 className="mt-4 text-5xl font-serif leading-tight sm:text-6xl">The Autumn Equinox Collection</h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone-400">
            A study in texture and form. Hand-lasted in our London atelier using centuries-old techniques and the finest Italian calfskins.
          </p>
        </div>
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.35em] text-stone-500">
          <span>View By:</span>
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`transition pb-1 ${viewMode === 'grid' ? 'text-primary border-b border-primary' : 'hover:text-onSurface'}`}>
            Grid
          </button>
          <button
            type="button"
            onClick={() => setViewMode('list')}
            className={`transition pb-1 ${viewMode === 'list' ? 'text-primary border-b border-primary' : 'hover:text-onSurface'}`}>
            List
          </button>
        </div>
      </div>

      <div className="grid gap-16 xl:grid-cols-[280px_1fr]">
        <aside className="space-y-12 rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-8">
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[10px] uppercase tracking-[0.35em] text-stone-400">Style</h2>
                <p className="text-sm text-stone-500">Filter by silhouette.</p>
              </div>
              <button type="button" onClick={resetFilters} className="text-[10px] uppercase tracking-[0.35em] text-primary transition hover:text-white">
                Reset
              </button>
            </div>
            <ul className="space-y-3 text-sm font-light">
              {styleOptions.map((label) => (
                <li key={label}>
                  <button
                    type="button"
                    onClick={() => setSelectedStyle((current) => (current === label ? '' : label))}
                    className={`flex w-full items-center justify-between rounded-sm px-3 py-3 text-left transition ${selectedStyle === label ? 'bg-primary/10 text-primary' : 'text-stone-400 hover:text-onSurface hover:bg-white/5'}`}
                  >
                    <span>{label}</span>
                    <span className="text-[10px] text-stone-600">{products.filter((product) => `${product.name} ${product.subtitle}`.toLowerCase().includes(label.toLowerCase())).length}</span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.35em] text-stone-400">Material</h2>
            <div className="space-y-3 text-sm font-light">
              {materialOptions.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setSelectedMaterial((current) => (current === label ? '' : label))}
                  className={`flex w-full items-center justify-between rounded-sm px-3 py-3 transition ${selectedMaterial === label ? 'bg-primary/10 text-primary' : 'text-stone-400 hover:text-onSurface hover:bg-white/5'}`}
                >
                  <span>{label}</span>
                  <span className="text-[10px] text-stone-600">{products.filter((product) => `${product.name} ${product.subtitle} ${product.description ?? ''}`.toLowerCase().includes(label.toLowerCase())).length}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-[10px] uppercase tracking-[0.35em] text-stone-400">Color</h2>
            <div className="grid grid-cols-4 gap-3">
              {colorOptions.map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setSelectedColor((current) => (current === label ? '' : label))}
                  className={`rounded-full px-3 py-2 text-[10px] uppercase tracking-[0.35em] transition ${selectedColor === label ? 'bg-primary text-black' : 'bg-[#101010] text-stone-300 hover:bg-white/5'}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </section>

          <div className="rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-4 text-sm text-stone-300">
            <p className="text-[10px] uppercase tracking-[0.35em] text-primary">Showing</p>
            <p className="mt-2 text-3xl font-serif text-onSurface">{filteredProducts.length}</p>
            <p className="text-sm text-stone-500">of {products.length} selected</p>
          </div>
        </aside>

        <section className="space-y-14">
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-12 text-center text-stone-300">
              <p className="text-xl font-serif text-onSurface">No matches found</p>
              <p className="mt-4 text-sm leading-relaxed">Try resetting the filters or choose a different material.</p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-8 rounded-sm bg-primary px-6 py-3 text-[10px] uppercase tracking-[0.35em] text-black transition hover:opacity-90"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
