import ProductGrid from '@/components/ProductGrid';
import { featuredProducts } from '@/lib/products';

export default function ShopPage() {
  return (
    <main className="pt-28 pb-24 bg-surface text-onSurface">
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-12">
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
            <button className="text-primary border-b border-primary pb-1">Grid</button>
            <button className="transition hover:text-onSurface">List</button>
          </div>
        </div>

        <div className="grid gap-16 xl:grid-cols-[280px_1fr]">
          <aside className="space-y-12 rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-8">
            <section className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.35em] text-stone-400">Style</h2>
              <ul className="space-y-4 text-sm font-light">
                {['Oxford', 'Loafers', 'Boots', 'Monk Strap'].map((label, index) => (
                  <li key={label} className="flex items-center justify-between text-stone-400 transition hover:text-onSurface">
                    <span className={index === 0 ? 'text-primary' : ''}>{label}</span>
                    <span className="text-[10px] text-stone-600">0{index + 1}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.35em] text-stone-400">Material</h2>
              <div className="space-y-4 text-sm font-light">
                {['Box Calf Leather', 'French Suede', 'Grain Leather'].map((label, index) => (
                  <label key={label} className="flex items-center gap-3 cursor-pointer text-stone-400 transition hover:text-onSurface">
                    <span className={`inline-block h-3 w-3 rounded-full border ${index === 1 ? 'border-primary bg-primary' : 'border-outlineVariant'}`} />
                    {label}
                  </label>
                ))}
              </div>
            </section>
            <section className="space-y-4">
              <h2 className="text-[10px] uppercase tracking-[0.35em] text-stone-400">Color</h2>
              <div className="grid grid-cols-4 gap-3">
                {['bg-surfaceContainerHigh', 'bg-amber-900/50', 'bg-stone-800', 'bg-stone-500'].map((className, index) => (
                  <button key={index} className={`${className} h-8 rounded-full ring-1 ring-white/5 transition hover:ring-primary`} type="button" />
                ))}
              </div>
            </section>
          </aside>

          <section className="space-y-14">
            <ProductGrid products={featuredProducts} />
          </section>
        </div>
      </section>
    </main>
  );
}
