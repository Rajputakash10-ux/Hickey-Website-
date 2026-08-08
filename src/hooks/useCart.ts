import { useState, useCallback } from 'react';
import type { Product, CartItem } from '../types';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((product: Product, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsOpen(true);
  }, []);

  const updateQuantity = useCallback((id: string, qty: number) => {
    if (qty < 1) return removeItem(id);
    setItems(prev => prev.map(i => i.product.id === id ? { ...i, quantity: qty } : i));
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.product.id !== id));
  }, []);

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const subtotal = items.reduce((s, i) => s + i.product.price * i.quantity, 0);

  return { items, isOpen, setIsOpen, addItem, updateQuantity, removeItem, totalItems, subtotal };
}
