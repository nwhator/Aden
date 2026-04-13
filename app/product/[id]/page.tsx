import Image from 'next/image';
import { notFound } from 'next/navigation';
import CustomizationForm from '@/components/CustomizationForm';
import { getProductById } from '@/lib/product-service';

type Props = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: Props) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="pt-28 bg-surface text-onSurface">
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surfaceContainerLow">
              <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.35em] text-primary">The Heritage Collection</span>
              <h1 className="text-5xl font-serif leading-tight text-onSurface">{product.name}</h1>
              <p className="max-w-xl text-sm leading-relaxed text-stone-400">
                A definitive statement in traditional shoemaking. Each {product.name} is hand-lasted over a three-week period, featuring premium leather and a closed-channel Goodyear welt.
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { label: 'Material', value: 'French Box Calf' },
              { label: 'Color', value: 'Obsidian' },
              { label: 'Sole', value: 'Traditional Oak Bark' },
              { label: 'Stitching', value: 'Natural Cream' },
            ].map((item) => (
              <div key={item.label} className="rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-6">
                <p className="text-[10px] uppercase tracking-[0.35em] text-stone-500">{item.label}</p>
                <p className="mt-3 text-sm text-onSurface">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-10 rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-8 shadow-luxe">
          <div className="space-y-4">
            <h2 className="text-sm uppercase tracking-[0.35em] text-stone-500">Customize Your Pair</h2>
            <p className="text-2xl font-serif text-onSurface">Build the shoe to your exact preference.</p>
          </div>
          <CustomizationForm />
          <div className="rounded-sm border-t border-[#2a2a2a] pt-6 text-sm text-stone-400">
            <p className="mb-2 text-[10px] uppercase tracking-[0.35em] text-primary">Bespoke Fit</p>
            <p>Complimentary sizing kit included with every order.</p>
            <button className="mt-6 w-full rounded-sm border border-[#4e4639] px-5 py-4 text-[10px] uppercase tracking-[0.35em] transition hover:bg-white/5">
              Add to Cart — {product.price}
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}
