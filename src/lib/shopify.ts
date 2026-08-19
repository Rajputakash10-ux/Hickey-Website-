const DOMAIN = '2t2ym7-dv.myshopify.com';
const TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || '06aea36fb6fada2133981f7ee1e4b248';
const ENDPOINT = `https://${DOMAIN}/api/2026-07/graphql.json`;

async function shopifyFetch<T>(query: string): Promise<T> {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': TOKEN,
    },
    body: JSON.stringify({ query }),
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data as T;
}

// ── Shopify raw types ──────────────────────────────────────────────────────────

export interface ShopifyImage {
  url: string;
  altText: string | null;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  availableForSale: boolean;
  price: { amount: string; currencyCode: string };
  compareAtPrice: { amount: string; currencyCode: string } | null;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  tags: string[];
  featuredImage: ShopifyImage | null;
  images: { nodes: ShopifyImage[] };
  variants: { nodes: ShopifyVariant[] };
}

// ── Queries ────────────────────────────────────────────────────────────────────

const PRODUCT_FIELDS = `
  id title handle description tags
  featuredImage { url altText }
  images(first: 6) { nodes { url altText } }
  variants(first: 10) {
    nodes {
      id title availableForSale
      price { amount currencyCode }
      compareAtPrice { amount currencyCode }
    }
  }
`;

export async function getProducts(): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{ products: { nodes: ShopifyProduct[] } }>(`
    { products(first: 20) { nodes { ${PRODUCT_FIELDS} } } }
  `);
  return data.products.nodes;
}

export async function getProductByHandle(handle: string): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<{ productByHandle: ShopifyProduct | null }>(`
    { productByHandle(handle: "${handle}") { ${PRODUCT_FIELDS} } }
  `);
  return data.productByHandle;
}

// ── Cart ───────────────────────────────────────────────────────────────────────

export interface ShopifyCart {
  id: string;
  checkoutUrl: string;
}

export async function createCart(variantId: string, quantity: number): Promise<ShopifyCart> {
  const data = await shopifyFetch<{ cartCreate: { cart: ShopifyCart } }>(`
    mutation {
      cartCreate(input: { lines: [{ merchandiseId: "${variantId}", quantity: ${quantity} }] }) {
        cart { id checkoutUrl }
      }
    }
  `);
  return data.cartCreate.cart;
}

export async function addToCart(cartId: string, variantId: string, quantity: number): Promise<ShopifyCart> {
  const data = await shopifyFetch<{ cartLinesAdd: { cart: ShopifyCart } }>(`
    mutation {
      cartLinesAdd(cartId: "${cartId}", lines: [{ merchandiseId: "${variantId}", quantity: ${quantity} }]) {
        cart { id checkoutUrl }
      }
    }
  `);
  return data.cartLinesAdd.cart;
}

// ── Map Shopify product → local Product shape ──────────────────────────────────

import type { Product, ProductCategory } from '../types';

function inferCategory(tags: string[]): ProductCategory {
  const t = tags.map(s => s.toLowerCase());
  if (t.some(s => s.includes('kit'))) return 'kits';
  if (t.some(s => s.includes('gift'))) return 'gifts';
  if (t.some(s => s.includes('game') || s.includes('card'))) return 'games';
  if (t.some(s => s.includes('chocolate') || s.includes('consumable'))) return 'consumables';
  return 'consumables';
}

export function shopifyToProduct(p: ShopifyProduct): Product {
  const variant = p.variants.nodes[0];
  const price = Math.round(parseFloat(variant?.price.amount ?? '0'));
  const compareAt = variant?.compareAtPrice
    ? Math.round(parseFloat(variant.compareAtPrice.amount))
    : undefined;

  const images = p.images.nodes.length
    ? p.images.nodes.map(img => ({ src: img.url, alt: img.altText ?? p.title }))
    : p.featuredImage
    ? [{ src: p.featuredImage.url, alt: p.featuredImage.altText ?? p.title }]
    : [{ src: '/assets/hickey-hero.jpg', alt: p.title }];

  return {
    id: p.id,
    title: p.title,
    subtitle: p.tags.find(t => t.startsWith('subtitle:'))?.replace('subtitle:', '').trim(),
    description: p.description || '',
    price,
    compareAtPrice: compareAt,
    images,
    category: inferCategory(p.tags),
    available: p.variants.nodes.some(v => v.availableForSale),
    tags: p.tags,
    variantId: variant?.id,
  };
}
