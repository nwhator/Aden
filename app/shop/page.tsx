import { getProducts } from '@/lib/product-service';
import ShopBrowser from '@/components/ShopBrowser';

export default async function ShopPage() {
  const products = await getProducts();

  return (
    <main className="pt-28 pb-24 bg-surface text-onSurface">
      <ShopBrowser products={products} />
    </main>
  );
}
