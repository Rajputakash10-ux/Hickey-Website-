import { useState, useEffect } from 'react';
import { getProducts, shopifyToProduct } from '../lib/shopify';
import { PRODUCTS, MAIN_PRODUCT } from '../data';
const FEATURED_PRODUCT = MAIN_PRODUCT;
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
          const mapped = nodes.map(shopifyToProduct).map(p => ({
            ...p,
            // Shopify only has 1 image — use local etx images, keep variantId
            images: MAIN_PRODUCT.images,
            badge: MAIN_PRODUCT.badge,
          }));
          setProducts(mapped);
          setFeatured(mapped[0]);
        }
      })
      .catch(err => {
        const safeMessage = String(err.message).replace(/[\r\n]/g, ' ');
        console.warn('Shopify fetch failed — using local data:', safeMessage);
        setError(safeMessage);
      })
      .finally(() => setLoading(false));
  }, []);

  return { products, featured, loading, error };
}
