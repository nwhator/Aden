'use client';

import { useCart } from './CartContext';
import Link from 'next/link';

export default function CartDrawer() {
  const { cart, isOpen, closeCart, removeFromCart, updateQuantity, totalAmount } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-end bg-black/40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <div className="h-full w-full bg-transparent" onClick={closeCart} />
      <aside className="pointer-events-auto w-full max-w-md bg-surface p-6 shadow-2xl md:w-96">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-primary">Your Cart</p>
            <h2 className="mt-3 text-3xl font-serif text-onSurface">Current Selection</h2>
          </div>
          <button type="button" onClick={closeCart} className="text-stone-400 transition hover:text-onSurface">
            Close
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {cart.length === 0 ? (
            <div className="rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-6 text-sm text-stone-300">
              Your cart is empty. Add a pair to begin.
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-4">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-sm bg-[#111]">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-onSurface">{item.name}</p>
                    <p className="text-sm text-stone-400">{item.price}</p>
                    <div className="mt-3 flex items-center gap-2 text-sm text-stone-300">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="rounded-sm border border-[#3a3a3a] px-3 py-1"
                      >
                        –
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="rounded-sm border border-[#3a3a3a] px-3 py-1"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="mt-4 text-[10px] uppercase tracking-[0.35em] text-stone-500 transition hover:text-white"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        <div className="mt-8 rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-6 text-sm text-stone-300">
          <p className="text-[10px] uppercase tracking-[0.35em] text-primary">Subtotal</p>
          <p className="mt-2 text-xl font-semibold text-onSurface">{totalAmount}</p>
          <Link href="/checkout" className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-gradient-to-br from-primary to-primaryContainer px-5 py-4 text-[10px] uppercase tracking-[0.35em] text-black transition hover:opacity-90">
            Proceed to Checkout
          </Link>
        </div>
      </aside>
    </div>
  );
}
