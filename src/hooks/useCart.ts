import { useState, useCallback } from 'react';
import type { Product, CartItem } from '../types';
import { createCart, addToCart } from '../lib/shopify';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [cartId, setCartId] = useState<string | null>(null);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const addItem = useCallback(async (product: Product, quantity = 1) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id);
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsOpen(true);

    if (!product.variantId) {
      console.warn('No variantId — Shopify cart not created. Check Storefront API token.');
      return;
    }

    setCheckoutLoading(true);
    try {
      if (!cartId) {
        const cart = await createCart(product.variantId, quantity);
        setCartId(cart.id);
        setCheckoutUrl(cart.checkoutUrl);
      } else {
        const cart = await addToCart(cartId, product.variantId, quantity);
        setCheckoutUrl(cart.checkoutUrl);
      }
    } catch (e) {
      console.error('Shopify cart error', e);
    } finally {
      setCheckoutLoading(false);
    }
  }, [cartId]);

  const updateQuantity = useCallback((id: string, qty: number) => {
    if (qty < 1) return removeItem(id);
    setItems(prev => prev.map(i => i.product.id === id ? { ...i, quantity: qty } : i));
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(i => i.product.id !== id));
  }, []);

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const subtotal = items.reduce((s, i) => s + i.product.price * i.quantity, 0);

  return { items, isOpen, setIsOpen, addItem, updateQuantity, removeItem, totalItems, subtotal, checkoutUrl, checkoutLoading };
}
