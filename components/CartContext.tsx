'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type CartItem = {
  id: string;
  name: string;
  price: string;
  image: string;
  slug?: string;
  quantity: number;
};

type CartContextValue = {
  cart: CartItem[];
  totalItems: number;
  totalAmount: string;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const CART_STORAGE_KEY = 'aden-cart-v1';

function parseAmount(price: string) {
  const numeric = Number(price.replace(/[^0-9.-]+/g, ''));
  return Number.isNaN(numeric) ? 0 : numeric;
}

function formatAmount(amount: number) {
  return `$${amount.toFixed(2)}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch {
        setCart([]);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((entry) => entry.id === item.id);
      if (existing) {
        return current.map((entry) =>
          entry.id === item.id
            ? { ...entry, quantity: entry.quantity + quantity }
            : entry,
        );
      }
      return [...current, { ...item, quantity }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart((current) => current.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => setCart([]);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen((state) => !state);

  const totalItems = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const totalAmount = useMemo(
    () => formatAmount(cart.reduce((sum, item) => sum + parseAmount(item.price) * item.quantity, 0)),
    [cart],
  );

  const value = useMemo(
    () => ({ cart, totalItems, totalAmount, isOpen, openCart, closeCart, toggleCart, addToCart, removeFromCart, updateQuantity, clearCart }),
    [cart, totalItems, totalAmount, isOpen],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
