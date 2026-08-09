import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';
import type { Product } from '../types';
import { CURRENCY } from '../data';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, qty: number) => void;
  index?: number;
}

export default function ProductCard({ product: p, onAddToCart, index = 0 }: ProductCardProps) {
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group flex flex-col overflow-hidden"
      style={{ background: 'var(--color-ink-900)', border: '1px solid rgba(201,149,106,0.1)' }}
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '4/5', background: 'var(--color-ink-800)' }}>
        <img
          src={p.images[0].src}
          alt={p.images[0].alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {p.badge && (
          <div className="absolute top-2 left-2 px-2 py-1 rounded-full" style={{ background: 'var(--color-wine-800)', border: '1px solid var(--color-wine-700)' }}>
            <span className="font-sans text-[8px] font-semibold tracking-widest uppercase text-cream-200">{p.badge}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 flex-1" style={{ padding: 'clamp(0.6rem, 3vw, 1.1rem)' }}>
        <span className="font-sans text-[8px] tracking-widest uppercase text-gold-500 font-semibold">{p.category}</span>
        <h3 className="font-serif font-normal text-cream-100 leading-tight" style={{ fontSize: 'clamp(0.85rem, 3.5vw, 1.05rem)' }}>
          {p.title}
        </h3>
        <div className="flex items-baseline gap-1.5 mt-auto pt-1">
          <span className="font-serif text-gold-400" style={{ fontSize: 'clamp(0.95rem, 4vw, 1.15rem)' }}>
            {CURRENCY}{p.price.toLocaleString('en-IN')}
          </span>
          {p.compareAtPrice && (
            <span className="font-sans text-[9px] text-cream-400 opacity-40 line-through">
              {CURRENCY}{p.compareAtPrice.toLocaleString('en-IN')}
            </span>
          )}
          {discount > 0 && (
            <span className="font-sans text-[8px] tracking-wide uppercase text-wine-300 font-semibold">−{discount}%</span>
          )}
        </div>

        {/* Always visible on mobile, hover on desktop */}
        <button
          onClick={handleAdd}
          className="w-full btn-primary mt-2 gap-1.5"
          style={{ minHeight: 44, fontSize: '0.6rem', padding: '0.5rem 1rem' }}
          aria-label={`Add ${p.title} to cart`}
        >
          {added ? <><Check size={11} /> Added!</> : <><ShoppingBag size={11} /> Add to Cart</>}
        </button>
      </div>
    </motion.article>
  );
}
