import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';
import type { Product } from '../types';
import { CURRENCY } from '../data';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, qty: number) => void;
  index?: number;
}

export default function ProductCard({ product: p, onAddToCart, index = 0 }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    onAddToCart(p, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = p.compareAtPrice
    ? Math.round(((p.compareAtPrice - p.price) / p.compareAtPrice) * 100)
    : 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group flex flex-col"
      style={{ border: '1px solid rgba(201,163,90,0.1)', background: 'var(--color-ink-900)' }}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden" style={{ background: 'var(--color-ink-800)' }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={hovered && p.images[1] ? 'hover' : 'default'}
            src={hovered && p.images[1] ? p.images[1].src : p.images[0].src}
            alt={hovered && p.images[1] ? p.images[1].alt : p.images[0].alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: hovered ? 1.03 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            loading="lazy"
          />
        </AnimatePresence>

        {p.badge && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full" style={{ background: 'var(--color-wine-800)', border: '1px solid var(--color-wine-700)' }}>
            <span className="font-sans text-[9px] font-semibold tracking-widest uppercase text-cream-200">{p.badge}</span>
          </div>
        )}

        {/* Quick add overlay */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-3 left-3 right-3"
        >
          <button
            onClick={handleAdd}
            className="w-full btn-primary py-2.5 text-[0.65rem] gap-1.5"
            aria-label={`Add ${p.title} to cart`}
          >
            {added ? <><Check size={12} /> Added!</> : <><ShoppingBag size={12} /> Quick Add</>}
          </button>
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-3 sm:p-5 flex flex-col gap-2 flex-1">
        <span className="font-sans text-[9px] tracking-widest uppercase text-gold-500 font-semibold">{p.category}</span>
        <h3 className="font-serif text-base sm:text-lg font-normal text-cream-100 leading-tight">{p.title}</h3>
        <p className="font-sans text-xs text-cream-300 opacity-55 leading-relaxed flex-1 hidden sm:block">{p.description}</p>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-serif text-lg sm:text-xl text-gold-400">{CURRENCY}{p.price.toLocaleString('en-IN')}</span>
          {p.compareAtPrice && (
            <>
              <span className="font-sans text-xs text-cream-400 opacity-40 line-through">{CURRENCY}{p.compareAtPrice.toLocaleString('en-IN')}</span>
              <span className="font-sans text-[9px] tracking-wide uppercase text-wine-300 font-semibold">−{discount}%</span>
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}
