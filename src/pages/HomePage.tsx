import type { Product } from '../types';
import Hero from '../components/Hero';
import ProductHighlight from '../components/ProductHighlight';
import WhyHickey from '../components/WhyHickey';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

interface HomePageProps {
  featured: Product;
  products: Product[];
  loading: boolean;
  onAddToCart: (product: Product, qty: number) => void;
  onCartOpen: () => void;
}

export default function HomePage({ featured, loading, onAddToCart, onCartOpen }: HomePageProps) {
  return (
    <main>
      <Hero onShopClick={() => { onAddToCart(featured, 1); onCartOpen(); }} />
      <ProductHighlight product={featured} loading={loading} onAddToCart={onAddToCart} />
      <WhyHickey />
      <HowItWorks />
      <Testimonials />
      <FinalCTA onShopClick={() => { onAddToCart(featured, 1); onCartOpen(); }} />
    </main>
  );
}
