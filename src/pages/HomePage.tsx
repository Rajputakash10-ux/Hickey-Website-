import type { Product } from '../types';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import ProductSection from '../components/ProductSection';
import ExperienceSteps from '../components/ExperienceSteps';
import ScratchCardFeature from '../components/ScratchCardFeature';
import IngredientsSection from '../components/IngredientsSection';
import WhyHickey from '../components/WhyHickey';
import LifestyleSection from '../components/LifestyleSection';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import FinalCTA from '../components/FinalCTA';
import MobileShopCTA from '../components/MobileShopCTA';

interface HomePageProps {
  featured: Product;
  products: Product[];
  loading: boolean;
  onAddToCart: (product: Product, qty: number) => void;
  onCartOpen: () => void;
}

export default function HomePage({ featured, onAddToCart }: HomePageProps) {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ProductSection product={featured} onAddToCart={onAddToCart} />
      <ExperienceSteps />
      <ScratchCardFeature />
      <IngredientsSection />
      <WhyHickey />
      <LifestyleSection />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <MobileShopCTA />
    </main>
  );
}
