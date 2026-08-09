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
      className="overflow-hidden"
      style={{ background: 'var(--color-ink-900)', paddingTop: 'clamp(3rem, 8vw, 6rem)', paddingBottom: 'clamp(3rem, 8vw, 6rem)' }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Thumbnail strip on mobile */}
            {p.images.length > 1 && (
              <div className="flex gap-2 mb-3 lg:hidden">
                {p.images.slice(0, 4).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className="flex-shrink-0 overflow-hidden transition-all"
                    style={{
                      width: 52, height: 52,
                      border: `1px solid ${i === imgIndex ? 'var(--color-gold-500)' : 'rgba(201,149,106,0.15)'}`,
                    }}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: '4/5',
                maxHeight: 'clamp(320px, 70vw, 560px)',
                border: '1px solid rgba(201,149,106,0.15)',
              }}
              onMouseEnter={() => p.images.length > 1 && setImgIndex(1)}
              onMouseLeave={() => setImgIndex(0)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={p.images[imgIndex].src}
                  alt={p.images[imgIndex].alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                  loading="lazy"
                />
              </AnimatePresence>
              {p.badge && (
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full" style={{ background: 'var(--color-wine-700)', border: '1px solid var(--color-wine-600)' }}>
                  <span className="font-sans text-[9px] font-semibold tracking-widest uppercase text-cream-100">{p.badge}</span>
                </div>
              )}
            </div>

            <div className="flex gap-2 mt-3 flex-wrap">
              {p.dropNumber && (
                <div className="px-3 py-1.5 rounded-full" style={{ border: '1px solid rgba(201,149,106,0.2)', background: 'rgba(201,149,106,0.05)' }}>
                  <span className="font-sans text-[9px] tracking-widest uppercase text-gold-500">Drop {String(p.dropNumber).padStart(2, '0')} — {p.dropDate}</span>
                </div>
              )}
              {p.limited && (
                <div className="px-3 py-1.5 rounded-full" style={{ border: '1px solid rgba(92,18,102,0.4)', background: 'rgba(92,18,102,0.1)' }}>
                  <span className="font-sans text-[9px] tracking-widest uppercase text-wine-300">Limited {p.limited} Kits</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-5 lg:gap-7"
          >
            <div>
              <span className="section-label">This Month's Drop</span>
              <h2
                className="heading-display mt-2"
                style={{ fontSize: 'clamp(2rem, 7vw, 4.5rem)' }}
              >
                {p.title}
              </h2>
              {p.subtitle && (
                <p className="font-serif italic text-cream-300 opacity-70 mt-1" style={{ fontSize: 'clamp(0.9rem, 3vw, 1.1rem)' }}>
                  {p.subtitle}
                </p>
              )}
            </div>

            <p className="font-sans text-cream-300 leading-relaxed opacity-70" style={{ fontSize: 'clamp(0.875rem, 3vw, 0.95rem)' }}>
              {p.description}
            </p>

            {p.whatsInside && (
              <div>
                <p className="section-label mb-3">What's Inside</p>
                <ul className="space-y-2">
                  {p.whatsInside.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(201,149,106,0.15)', border: '1px solid rgba(201,149,106,0.3)' }}>
                        <Check size={9} className="text-gold-500" />
                      </div>
                      <span className="font-sans text-sm text-cream-300 opacity-70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Price */}
            <div
              className="flex items-baseline gap-3 py-4"
              style={{ borderTop: '1px solid rgba(201,149,106,0.1)', borderBottom: '1px solid rgba(201,149,106,0.1)' }}
            >
              <span className="font-serif font-light text-gold-400" style={{ fontSize: 'clamp(2rem, 7vw, 3rem)' }}>
                {CURRENCY}{p.price.toLocaleString('en-IN')}
              </span>
              {p.compareAtPrice && (
                <>
                  <span className="font-sans text-cream-400 opacity-40 line-through" style={{ fontSize: 'clamp(0.9rem, 3vw, 1.1rem)' }}>
                    {CURRENCY}{p.compareAtPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="font-sans text-[9px] tracking-widest uppercase font-semibold text-wine-300 px-2.5 py-1 rounded-full" style={{ background: 'rgba(92,18,102,0.2)', border: '1px solid rgba(92,18,102,0.3)' }}>
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.button
                onClick={handleAdd}
                className="btn-primary flex-1 gap-2"
                style={{ minHeight: 52 }}
                whileTap={{ scale: 0.97 }}
              >
                {added ? <><Check size={14} /> Added to Cart!</> : <><ShoppingBag size={14} /> Add to Cart</>}
              </motion.button>
              <Link to="/shop" className="btn-outline flex-1 justify-center gap-2" style={{ minHeight: 52 }}>
                View All Drops <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
