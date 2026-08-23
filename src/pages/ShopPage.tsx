import type { Product } from '../types';
import ProductSection from '../components/ProductSection';
import FinalCTA from '../components/FinalCTA';

interface ShopPageProps {
  products: Product[];
  loading: boolean;
  onAddToCart: (product: Product, qty: number) => void;
  checkoutUrl?: string | null;
}

export default function ShopPage({ products, loading, onAddToCart, checkoutUrl }: ShopPageProps) {
  const product = products[0];

  if (loading || !product) {
    return (
      <main style={{ paddingTop: 64, minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="font-sans text-cream-400 opacity-40" style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Loading…
        </span>
      </main>
    );
  }

  return (
    <main style={{ paddingTop: 64 }}>
      <div
        className="py-10 text-center"
        style={{ background: '#24152F', borderBottom: '1px solid rgba(201,164,92,0.08)' }}
      >
        <span className="section-label">Shop</span>
        <h1 className="heading-display mt-2" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          HICKEY Intimacy Dark Chocolate
        </h1>
      </div>
      <ProductSection product={product} onAddToCart={onAddToCart} checkoutUrl={checkoutUrl} />
      <FinalCTA />
    </main>
  );
}
