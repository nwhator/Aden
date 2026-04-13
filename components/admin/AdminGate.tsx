'use client';

import { useState, type FormEvent } from 'react';
import AdminDashboard from './AdminDashboard';
import type { BlogPost, Order, Product } from '@/lib/types';

type AdminData = {
  products: Product[];
  posts: BlogPost[];
  orders: Order[];
  supabaseReady: boolean;
};

export default function AdminGate() {
  const [token, setToken] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [adminData, setAdminData] = useState<AdminData | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage(null);
    setLoading(true);

    try {
      const response = await fetch('/api/admin/secure-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'Invalid access token');
      }

      setAdminData(data);
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : 'Unable to authenticate');
    } finally {
      setLoading(false);
    }
  };

  if (adminData) {
    return (
      <AdminDashboard
        initialProducts={adminData.products}
        initialPosts={adminData.posts}
        initialOrders={adminData.orders}
        supabaseReady={adminData.supabaseReady}
      />
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-onSurface">
      <div className="rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-10">
        <p className="text-[10px] uppercase tracking-[0.35em] text-primary">Admin Access</p>
        <h1 className="mt-4 text-4xl font-serif">Enter Your Access Token</h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-400">
          ADEN admin is protected by a single token rather than a full login flow. Enter the access code to unlock the control center.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-4">
          <label className="space-y-2 text-[10px] uppercase tracking-[0.35em] text-stone-400">
            <span>Access Token</span>
            <input
              value={token}
              onChange={(event) => setToken(event.target.value)}
              className="w-full rounded-sm border border-[#3a3a3a] bg-transparent px-4 py-3 text-sm text-onSurface outline-none focus:border-primary"
              placeholder="Enter admin token"
              type="password"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="rounded-sm bg-gradient-to-br from-primary to-primaryContainer px-5 py-4 text-[10px] uppercase tracking-[0.35em] text-black transition hover:scale-[1.01] disabled:opacity-50"
          >
            {loading ? 'Checking…' : 'Unlock Admin Studio'}
          </button>

          {statusMessage ? (
            <p className="text-sm text-stone-300">{statusMessage}</p>
          ) : (
            <p className="text-sm text-stone-300">Use your configured token to access the admin dashboard.</p>
          )}
        </form>
      </div>
    </div>
  );
}
