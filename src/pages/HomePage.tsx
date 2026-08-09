import type { Product } from '../types';
import Hero from '../components/Hero';
import FeatureBar from '../components/FeatureBar';
import ImageMarquee from '../components/ImageMarquee';
import FeaturedProduct from '../components/FeaturedProduct';
import ProductCollection from '../components/ProductCollection';
import HowItWorks from '../components/HowItWorks';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import FreeExperience from '../components/FreeExperience';
import Newsletter from '../components/Newsletter';

interface HomePageProps {
  featured: Product;
  products: Product[];
  loading: boolean;
  onAddToCart: (product: Product, qty: number) => void;
  onCartOpen: () => void;
}

export default function HomePage({ featured, products, loading, onAddToCart, onCartOpen }: HomePageProps) {
  return (
    <main>
      <Hero onAddToCart={() => { onAddToCart(featured, 1); onCartOpen(); }} />
      <FeatureBar />
      <ImageMarquee />
      <FeaturedProduct product={featured} loading={loading} onAddToCart={onAddToCart} />
      <ProductCollection products={products} loading={loading} onAddToCart={onAddToCart} />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <FreeExperience />
      <Newsletter />
    </main>
  );
}
