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
      className="py-24 lg:py-32"
      style={{ background: 'var(--color-ink-950)' }}
    >
      <div className="container-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="section-label">The Collection</span>
          <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Rituals worth staying in for.
          </h2>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
          role="tablist"
          aria-label="Filter products by category"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat.value}
              role="tab"
              aria-selected={active === cat.value}
              onClick={() => setActive(cat.value)}
              className="px-5 py-2 rounded-full font-sans text-xs tracking-widest uppercase transition-all duration-200"
              style={{
                background: active === cat.value ? 'var(--color-wine-700)' : 'transparent',
                border: active === cat.value ? '1px solid var(--color-wine-600)' : '1px solid rgba(201,163,90,0.15)',
                color: active === cat.value ? 'var(--color-cream-100)' : 'rgba(245,237,224,0.5)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px"
            style={{ background: 'rgba(201,163,90,0.08)' }}
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
