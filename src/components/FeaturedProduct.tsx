import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CURRENCY } from '../data';
import type { Product } from '../types';

interface FeaturedProductProps {
  product: Product;
  loading?: boolean;
  onAddToCart: (product: Product, qty: number) => void;
}

export default function FeaturedProduct({ product: p, onAddToCart }: FeaturedProductProps) {
  const { ref, isVisible } = useScrollReveal();
  const [imgIndex, setImgIndex] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(p, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = p.compareAtPrice
    ? Math.round(((p.compareAtPrice - p.price) / p.compareAtPrice) * 100)
    : 0;

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-36 overflow-hidden"
      style={{ background: 'var(--color-ink-900)' }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div
              className="relative aspect-[4/5] overflow-hidden cursor-pointer"
              style={{ border: '1px solid rgba(201,163,90,0.15)' }}
              onMouseEnter={() => p.images.length > 1 && setImgIndex(1)}
              onMouseLeave={() => setImgIndex(0)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={p.images[imgIndex].src}
                  alt={p.images[imgIndex].alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  loading="lazy"
                />
              </AnimatePresence>

              {/* Badge */}
              {p.badge && (
                <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full" style={{ background: 'var(--color-wine-700)', border: '1px solid var(--color-wine-600)' }}>
                  <span className="font-sans text-[10px] font-semibold tracking-widest uppercase text-cream-100">{p.badge}</span>
                </div>
              )}
            </div>

            {/* Drop info pills */}
            <div className="flex gap-3 mt-4">
              {p.dropNumber && (
                <div className="px-4 py-2 rounded-full" style={{ border: '1px solid rgba(201,163,90,0.2)', background: 'rgba(201,163,90,0.05)' }}>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-gold-500">Drop {String(p.dropNumber).padStart(2, '0')} — {p.dropDate}</span>
                </div>
              )}
              {p.limited && (
                <div className="px-4 py-2 rounded-full" style={{ border: '1px solid rgba(107,26,46,0.4)', background: 'rgba(107,26,46,0.1)' }}>
                  <span className="font-sans text-[10px] tracking-widest uppercase text-wine-300">Limited {p.limited} Kits</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-7"
          >
            <div>
              <span className="section-label">This Month's Drop</span>
              <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2.8rem, 5vw, 5rem)' }}>
                {p.title}
              </h2>
              <p className="font-serif italic text-cream-300 opacity-70 mt-2" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}>
                {p.subtitle}
              </p>
            </div>

            <p className="font-sans text-cream-300 leading-relaxed opacity-70 max-w-md" style={{ fontSize: '0.95rem' }}>
              {p.description}
            </p>

            {/* What's inside */}
            {p.whatsInside && (
              <div>
                <p className="section-label mb-4">What's Inside</p>
                <ul className="space-y-2.5">
                  {p.whatsInside.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(201,163,90,0.15)', border: '1px solid rgba(201,163,90,0.3)' }}>
                        <Check size={9} className="text-gold-500" />
                      </div>
                      <span className="font-sans text-sm text-cream-300 opacity-70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-4 py-5" style={{ borderTop: '1px solid rgba(201,163,90,0.1)', borderBottom: '1px solid rgba(201,163,90,0.1)' }}>
              <span className="font-serif text-4xl font-light text-gold-400">{CURRENCY}{p.price.toLocaleString('en-IN')}</span>
              {p.compareAtPrice && (
                <>
                  <span className="font-sans text-cream-400 opacity-40 line-through text-lg">{CURRENCY}{p.compareAtPrice.toLocaleString('en-IN')}</span>
                  <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-wine-300 px-3 py-1 rounded-full" style={{ background: 'rgba(107,26,46,0.2)', border: '1px solid rgba(107,26,46,0.3)' }}>
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                onClick={handleAdd}
                className="btn-primary flex-1 gap-2 py-3.5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {added ? <><Check size={14} /> Added!</> : <><ShoppingBag size={14} /> Add to Cart</>}
              </motion.button>
              <Link to="/shop" className="btn-outline flex-1 justify-center gap-2 py-3.5">
                View All Drops <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
