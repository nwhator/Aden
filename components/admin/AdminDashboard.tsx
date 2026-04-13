'use client';

import { useState } from 'react';
import type { BlogPost, Order, Product } from '@/lib/types';

type Props = {
  initialProducts: Product[];
  initialPosts: BlogPost[];
  initialOrders: Order[];
  supabaseReady: boolean;
};

export default function AdminDashboard({ initialProducts, initialPosts, initialOrders, supabaseReady }: Props) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [orders] = useState<Order[]>(initialOrders);
  const [statusMessage, setStatusMessage] = useState('');
  const [productForm, setProductForm] = useState({ name: '', subtitle: '', price: '', image: '' });
  const [blogForm, setBlogForm] = useState({ title: '', excerpt: '' });

  const handleProductChange = (field: string, value: string) => {
    setProductForm((current) => ({ ...current, [field]: value }));
  };

  const handleBlogChange = (field: string, value: string) => {
    setBlogForm((current) => ({ ...current, [field]: value }));
  };

  const submitForm = async (path: string, payload: Record<string, string>, updateState: (item: any) => void) => {
    setStatusMessage('Saving…');
    try {
      const response = await fetch(`/api/admin/${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || 'Failed to save');
      }

      updateState(result);
      setStatusMessage('Saved successfully.');
      window.setTimeout(() => setStatusMessage(''), 4000);
    } catch (error) {
      setStatusMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-24 text-onSurface">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-primary">Admin Area</p>
          <h1 className="mt-4 text-4xl font-serif">Aden Studio Control Center</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-400">
            Add products, publish blog posts, and review orders from a single luxury admin interface.
          </p>
        </div>
        <div className="rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow px-6 py-4 text-sm text-stone-300">
          <p className="font-medium">Supabase status</p>
          <p className="mt-2 text-sm text-primary">{supabaseReady ? 'Connected' : 'Offline / preview mode'}</p>
        </div>
      </div>

      <div className="grid gap-10 xl:grid-cols-[1fr_0.9fr]">
        <div className="space-y-10">
          <section className="rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-8">
            <h2 className="text-xl font-serif">Add New Product</h2>
            <div className="mt-8 grid gap-4">
              {[
                { label: 'Name', field: 'name' },
                { label: 'Subtitle', field: 'subtitle' },
                { label: 'Price', field: 'price' },
                { label: 'Image URL', field: 'image' },
              ].map(({ label, field }) => (
                <label key={field} className="space-y-2 text-[10px] uppercase tracking-[0.35em] text-stone-400">
                  <span>{label}</span>
                  <input
                    value={productForm[field as keyof typeof productForm]}
                    onChange={(event) => handleProductChange(field, event.target.value)}
                    className="w-full rounded-sm border border-[#3a3a3a] bg-transparent px-4 py-3 text-sm text-onSurface outline-none focus:border-primary"
                    placeholder={label}
                  />
                </label>
              ))}
              <button
                type="button"
                onClick={() => submitForm('products', productForm, (item) => setProducts((current) => [item, ...current]))}
                className="w-full rounded-sm bg-gradient-to-br from-primary to-primaryContainer px-5 py-4 text-[10px] uppercase tracking-[0.35em] text-black transition hover:scale-[1.01]"
              >
                Create Product
              </button>
            </div>
          </section>

          <section className="rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-8">
            <h2 className="text-xl font-serif">Publish Blog Post</h2>
            <div className="mt-8 grid gap-4">
              <label className="space-y-2 text-[10px] uppercase tracking-[0.35em] text-stone-400">
                <span>Title</span>
                <input
                  value={blogForm.title}
                  onChange={(event) => handleBlogChange('title', event.target.value)}
                  className="w-full rounded-sm border border-[#3a3a3a] bg-transparent px-4 py-3 text-sm text-onSurface outline-none focus:border-primary"
                  placeholder="Title"
                />
              </label>
              <label className="space-y-2 text-[10px] uppercase tracking-[0.35em] text-stone-400">
                <span>Excerpt</span>
                <textarea
                  value={blogForm.excerpt}
                  onChange={(event) => handleBlogChange('excerpt', event.target.value)}
                  rows={4}
                  className="w-full rounded-sm border border-[#3a3a3a] bg-transparent px-4 py-3 text-sm text-onSurface outline-none focus:border-primary"
                  placeholder="Publishable summary"
                />
              </label>
              <button
                type="button"
                onClick={() => submitForm('blog', blogForm, (item) => setPosts((current) => [item, ...current]))}
                className="w-full rounded-sm bg-gradient-to-br from-primary to-primaryContainer px-5 py-4 text-[10px] uppercase tracking-[0.35em] text-black transition hover:scale-[1.01]"
              >
                Publish Blog Post
              </button>
            </div>
          </section>

          <div className="rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-8">
            <h2 className="text-xl font-serif">Status</h2>
            <p className="mt-4 text-sm leading-relaxed text-stone-300">{statusMessage || 'No recent actions yet.'}</p>
          </div>
        </div>

        <div className="space-y-10">
          <section className="rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-8">
            <h2 className="text-xl font-serif">Recent Orders</h2>
            <div className="mt-6 space-y-4 text-sm text-stone-300">
              {orders.length === 0 ? (
                <p>No orders yet.</p>
              ) : (
                orders.map((order) => (
                  <div key={order.id} className="rounded-sm border border-[#2a2a2a] p-4">
                    <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-primary">
                      <span>{order.customerName}</span>
                      <span>{order.status}</span>
                    </div>
                    <p className="mt-3 text-sm text-stone-300">Order #{order.id} • {order.total}</p>
                    <p className="mt-1 text-[11px] text-stone-500">{order.createdAt}</p>
                  </div>
                ))
              )}
            </div>
          </section>

          <section className="rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-8">
            <h2 className="text-xl font-serif">Inventory Preview</h2>
            <div className="mt-6 space-y-4 text-sm text-stone-300">
              {products.length === 0 ? (
                <p>No products available.</p>
              ) : (
                products.slice(0, 5).map((product) => (
                  <div key={product.id} className="rounded-sm border border-[#2a2a2a] p-4">
                    <p className="font-medium text-onSurface">{product.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">{product.subtitle}</p>
                    <p className="mt-2 text-sm text-primary">{product.price}</p>
                  </div>
                ))
              )}
            </div>
          </section>

          <section className="rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-8">
            <h2 className="text-xl font-serif">Published Blog</h2>
            <div className="mt-6 space-y-4 text-sm text-stone-300">
              {posts.length === 0 ? (
                <p>No posts published.</p>
              ) : (
                posts.slice(0, 5).map((post) => (
                  <div key={post.id} className="rounded-sm border border-[#2a2a2a] p-4">
                    <p className="font-medium text-onSurface">{post.title}</p>
                    <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-stone-500">{new Date(post.published_at).toLocaleDateString()}</p>
                    <p className="mt-2 text-sm text-stone-400">{post.excerpt}</p>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
