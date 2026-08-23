import type { Product } from '../types';
import ProductSection from '../components/ProductSection';
import FinalCTA from '../components/FinalCTA';
import { MAIN_PRODUCT } from '../data';

interface ShopPageProps {
  products: Product[];
  loading: boolean;
  onAddToCart: (product: Product, qty: number) => void;
  checkoutUrl?: string | null;
}

export default function ShopPage({ onAddToCart, checkoutUrl }: ShopPageProps) {
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
      <ProductSection product={MAIN_PRODUCT} onAddToCart={onAddToCart} checkoutUrl={checkoutUrl} />
      <FinalCTA />
    </main>
  );
}
