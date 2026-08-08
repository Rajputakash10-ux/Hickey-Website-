import ProductCollection from '../components/ProductCollection';
import Newsletter from '../components/Newsletter';
import type { Product } from '../types';

interface ShopPageProps {
  onAddToCart: (product: Product, qty: number) => void;
}

export default function ShopPage({ onAddToCart }: ShopPageProps) {
  return (
    <main className="pt-20" style={{ background: 'var(--color-ink-950)' }}>
      <div className="container-site py-16">
        <span className="section-label">The Shop</span>
        <h1 className="heading-display mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          All Products
        </h1>
        <p className="font-sans text-cream-300 opacity-60 mt-4 max-w-lg" style={{ fontSize: '0.95rem' }}>
          Curated sensory rituals, intimacy kits and date night experiences for modern couples.
        </p>
      </div>
      <ProductCollection onAddToCart={onAddToCart} />
      <Newsletter />
    </main>
  );
}
