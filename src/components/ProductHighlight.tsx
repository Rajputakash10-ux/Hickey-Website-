import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CURRENCY } from '../data';
import type { Product } from '../types';

interface ProductHighlightProps {
  product: Product;
  loading?: boolean;
  onAddToCart: (product: Product, qty: number) => void;
}

export default function ProductHighlight({ product: p, loading, onAddToCart }: ProductHighlightProps) {
  const { ref, isVisible } = useScrollReveal();
  const [imgIndex, setImgIndex] = useState(0);
  const [added, setAdded] = useState(false);

  const discount = p.compareAtPrice
    ? Math.round(((p.compareAtPrice - p.price) / p.compareAtPrice) * 100)
    : 0;

  const handleAdd = () => {
    onAddToCart(p, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (loading) return null;

  return (
    <section
      id="product"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: '#1A1025', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Thumbnails */}
            {p.images.length > 1 && (
              <div className="flex gap-2 mb-3">
                {p.images.slice(0, 5).map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    aria-label={`View image ${i + 1}`}
                    className="flex-shrink-0 overflow-hidden transition-all"
                    style={{
                      width: 52, height: 52,
                      border: `1px solid ${i === imgIndex ? 'var(--color-gold-500)' : 'rgba(201,164,92,0.12)'}`,
                      opacity: i === imgIndex ? 1 : 0.5,
                    }}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}

            {/* Main image */}
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: '4/5',
                maxHeight: 'clamp(320px, 80vw, 560px)',
                border: '1px solid rgba(201,164,92,0.1)',
                background: '#24152F',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={p.images[imgIndex].src}
                  alt={p.images[imgIndex].alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  loading="lazy"
                />
              </AnimatePresence>
              {p.badge && (
                <div
                  className="absolute top-3 left-3 px-3 py-1"
                  style={{ background: 'rgba(22,13,30,0.85)', border: '1px solid rgba(201,164,92,0.2)' }}
                >
                  <span className="font-sans text-[9px] font-semibold tracking-widest uppercase text-gold-500">{p.badge}</span>
                </div>
              )}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="section-label">Featured Product</span>
              <h2 className="heading-display mt-2" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
                {p.title}
              </h2>
              {p.subtitle && (
                <p className="font-serif italic text-cream-300 mt-1" style={{ fontSize: '1rem', opacity: 0.65 }}>
                  {p.subtitle}
                </p>
              )}
            </div>

            <p className="font-sans text-cream-300 leading-relaxed" style={{ fontSize: '0.9rem', opacity: 0.7 }}>
              {p.description}
            </p>

            {/* What's inside */}
            {p.whatsInside && (
              <div className="flex flex-col gap-2">
                <p className="section-label mb-1">What's Inside</p>
                {p.whatsInside.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(201,164,92,0.1)', border: '1px solid rgba(201,164,92,0.2)' }}
                    >
                      <Check size={8} style={{ color: 'var(--color-gold-500)' }} />
                    </div>
                    <span className="font-sans text-sm text-cream-300" style={{ opacity: 0.7 }}>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Price */}
            <div
              className="flex items-baseline gap-3 py-4"
              style={{ borderTop: '1px solid rgba(201,164,92,0.08)', borderBottom: '1px solid rgba(201,164,92,0.08)' }}
            >
              <span className="font-serif font-light text-gold-400" style={{ fontSize: 'clamp(2rem, 6vw, 2.8rem)' }}>
                {CURRENCY}{p.price.toLocaleString('en-IN')}
              </span>
              {p.compareAtPrice && (
                <>
                  <span className="font-sans text-cream-400 line-through" style={{ fontSize: '1rem', opacity: 0.4 }}>
                    {CURRENCY}{p.compareAtPrice.toLocaleString('en-IN')}
                  </span>
                  <span
                    className="font-sans text-[9px] tracking-widest uppercase font-semibold text-gold-300 px-2.5 py-1"
                    style={{ background: 'rgba(201,164,92,0.08)', border: '1px solid rgba(201,164,92,0.15)' }}
                  >
                    {discount}% OFF
                  </span>
                </>
              )}
            </div>

            {/* CTA */}
            <motion.button
              onClick={handleAdd}
              className="btn-gold w-full gap-2"
              style={{ minHeight: 54, fontSize: '0.72rem' }}
              whileTap={{ scale: 0.98 }}
            >
              {added
                ? <><Check size={14} /> Added to Cart!</>
                : <><ShoppingBag size={14} /> Add to Cart</>
              }
            </motion.button>

            <p className="font-sans text-center text-cream-400" style={{ fontSize: '0.72rem', opacity: 0.45 }}>
              Free shipping · Discreet packaging · Ships within 24h
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
