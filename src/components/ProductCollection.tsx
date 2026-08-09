import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProductCard from './ProductCard';
import type { Product, ProductCategory } from '../types';

const CATEGORIES: { label: string; value: ProductCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Consumables', value: 'consumables' },
  { label: 'Gifts', value: 'gifts' },
  { label: 'Games', value: 'games' },
  { label: 'Kits', value: 'kits' },
];

interface ProductCollectionProps {
  products: Product[];
  loading?: boolean;
  onAddToCart: (product: Product, qty: number) => void;
}

export default function ProductCollection({ products, onAddToCart }: ProductCollectionProps) {
  const { ref, isVisible } = useScrollReveal();
  const [active, setActive] = useState<ProductCategory>('all');
  const filtered = active === 'all' ? products : products.filter(p => p.category === active);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: '#24152F', paddingTop: 'clamp(3rem, 8vw, 6rem)', paddingBottom: 'clamp(3rem, 8vw, 6rem)' }}
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-8 lg:mb-14"
        >
          <span className="section-label">The Collection</span>
          <h2 className="heading-display mt-2" style={{ fontSize: 'clamp(1.8rem, 6vw, 3.5rem)' }}>
            Rituals worth staying in for.
          </h2>
        </motion.div>

        <div
          className="flex gap-2 mb-8 overflow-x-auto scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap"
          role="tablist"
          aria-label="Filter products by category"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat.value}
              role="tab"
              aria-selected={active === cat.value}
              onClick={() => setActive(cat.value)}
              className="flex-shrink-0 font-sans tracking-widest uppercase transition-all duration-200"
              style={{
                padding: '0.5rem 1.1rem',
                minHeight: 40,
                borderRadius: 9999,
                fontSize: '0.65rem',
                scrollSnapAlign: 'start',
                background: active === cat.value ? '#40234B' : 'transparent',
                border: active === cat.value ? '1px solid #523060' : '1px solid rgba(201,164,92,0.2)',
                color: active === cat.value ? 'var(--color-cream-100)' : 'rgba(244,237,227,0.55)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-px"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
