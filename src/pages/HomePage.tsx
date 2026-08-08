import type { Product } from '../types';
import Hero from '../components/Hero';
import FeatureBar from '../components/FeatureBar';
import FeaturedProduct from '../components/FeaturedProduct';
import ProductCollection from '../components/ProductCollection';
import HowItWorks from '../components/HowItWorks';
import Statistics from '../components/Statistics';
import Testimonials from '../components/Testimonials';
import FreeExperience from '../components/FreeExperience';
import Events from '../components/Events';
import Journal from '../components/Journal';
import Newsletter from '../components/Newsletter';

interface HomePageProps {
  onAddToCart: (product: Product, qty: number) => void;
  onCartOpen: () => void;
}

export default function HomePage({ onAddToCart, onCartOpen }: HomePageProps) {
  return (
    <main>
      <Hero onAddToCart={() => { onAddToCart({ id: 'velvet-hour-kit', title: 'The Velvet Hour', subtitle: 'Evening Ritual Kit', description: '', price: 1899, compareAtPrice: 2499, images: [{ src: '/assets/hickey-hero.jpg', alt: 'The Velvet Hour' }], category: 'kits', available: true }, 1); onCartOpen(); }} />
      <FeatureBar />
      <FeaturedProduct onAddToCart={onAddToCart} />
      <ProductCollection onAddToCart={onAddToCart} />
      <HowItWorks />
      <Statistics />
      <Testimonials />
      <FreeExperience />
      <Events />
      <Journal />
      <Newsletter />
    </main>
  );
}
