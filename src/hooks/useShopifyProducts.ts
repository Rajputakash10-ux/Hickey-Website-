import { useState, useEffect } from 'react';
import { getProducts, shopifyToProduct } from '../lib/shopify';
import { PRODUCTS, FEATURED_PRODUCT } from '../data';
import type { Product } from '../types';

interface UseShopifyProductsResult {
  products: Product[];
  featured: Product;
  loading: boolean;
  error: string | null;
}

export function useShopifyProducts(): UseShopifyProductsResult {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [featured, setFeatured] = useState<Product>(FEATURED_PRODUCT);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts()
      .then(nodes => {
        if (nodes.length > 0) {
          const mapped = nodes.map(shopifyToProduct);
          setProducts(mapped);
          setFeatured(mapped[0]);
        }
        // If Shopify returns empty, keep local fallback
      })
      .catch(err => {
        console.warn('Shopify fetch failed — using local data:', err.message);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return { products, featured, loading, error };
}
