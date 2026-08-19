import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check, Gift, Shield, Package } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CURRENCY } from '../data';
import type { Product } from '../types';

interface ProductSectionProps {
  product: Product;
  onAddToCart: (product: Product, qty: number) => void;
}

export default function ProductSection({ product: p, onAddToCart }: ProductSectionProps) {
  const { ref, isVisible } = useScrollReveal();
  const [imgIndex, setImgIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(p, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  const discount = p.compareAtPrice
    ? Math.round(((p.compareAtPrice - p.price) / p.compareAtPrice) * 100)
    : 0;

  return (
    <section
      id="product"
      ref={ref as React.RefObject<HTMLElement>}
      className="overflow-hidden"
      style={{ background: '#24152F', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
      aria-label="Product"
    >
      <div className="container-site">
        <div className="text-center mb-12 lg:mb-16">
          <span className="section-label">The Product</span>
          <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
            More than chocolate.
          </h2>
          <p className="font-sans text-cream-300 opacity-60 mt-3 max-w-md mx-auto" style={{ fontSize: '0.95rem' }}>
            Make opening the pack part of the experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Gallery — sticky on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-3 lg:sticky lg:top-24"
          >
            {/* Main image */}
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '4/5', border: '1px solid rgba(201,164,92,0.12)', background: 'linear-gradient(135deg, #321D3D 0%, #24152F 100%)' }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={p.images[imgIndex]?.src}
                  alt={p.images[imgIndex]?.alt}
                  className="absolute inset-0 w-full h-full object-contain p-6"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  loading="lazy"
                />
              </AnimatePresence>
              {p.badge && (
                <div className="absolute top-4 left-4 px-3 py-1.5" style={{ background: 'rgba(22,13,30,0.85)', border: '1px solid rgba(201,164,92,0.25)', backdropFilter: 'blur(8px)' }}>
                  <span className="font-sans text-[9px] font-semibold tracking-widest uppercase text-gold-400">{p.badge}</span>
                </div>
              )}
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(201,164,92,0.05) 0%, transparent 70%)' }} aria-hidden="true" />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto scrollbar-none">
              {p.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  aria-label={`View image ${i + 1}`}
                  className="flex-shrink-0 overflow-hidden transition-all duration-200"
                  style={{
                    width: 64, height: 64,
                    border: `1px solid ${i === imgIndex ? 'var(--color-gold-500)' : 'rgba(201,164,92,0.12)'}`,
                    background: '#321D3D',
                    opacity: i === imgIndex ? 1 : 0.55,
                  }}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="section-label">60g · Dark Chocolate</span>
              <h2 className="heading-display mt-2" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                {p.title}
              </h2>
              {p.subtitle && (
                <p className="font-serif italic text-cream-300 opacity-70 mt-1" style={{ fontSize: '1.1rem' }}>
                  {p.subtitle}
                </p>
              )}
              <div className="flex items-center gap-2 mt-2">
                <div style={{ height: 1, width: 20, background: 'var(--color-gold-500)', opacity: 0.5 }} />
                <span className="font-sans text-[0.62rem] tracking-widest uppercase text-gold-500">Crafted for Connection</span>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="var(--color-gold-500)" aria-hidden="true">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <span className="font-sans text-cream-400 opacity-60" style={{ fontSize: '0.75rem' }}>
                "Premium intimacy chocolate for couples"
              </span>
            </div>

            {/* Price */}
            <div
              className="flex items-baseline gap-3 py-5"
              style={{ borderTop: '1px solid rgba(201,164,92,0.1)', borderBottom: '1px solid rgba(201,164,92,0.1)', background: 'rgba(201,164,92,0.02)' }}
            >
              <span className="font-serif font-light text-gold-400" style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)' }}>
                {CURRENCY}{p.price.toLocaleString('en-IN')}
              </span>
              {p.compareAtPrice && (
                <>
                  <span className="font-sans text-cream-400 opacity-40 line-through" style={{ fontSize: '1rem' }}>
                    {CURRENCY}{p.compareAtPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="font-sans text-[9px] tracking-widest uppercase font-semibold text-gold-300 px-2.5 py-1" style={{ background: 'rgba(201,164,92,0.08)', border: '1px solid rgba(201,164,92,0.2)' }}>
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="font-sans text-[0.65rem] tracking-widest uppercase text-cream-400 opacity-60">Quantity</span>
              <div className="flex items-center rounded-full overflow-hidden" style={{ border: '1px solid rgba(201,164,92,0.2)' }}>
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-10 h-10 flex items-center justify-center text-cream-300 hover:text-gold-400 transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /></svg>
                </button>
                <span className="w-10 text-center font-sans text-sm font-medium text-cream-100">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  aria-label="Increase quantity"
                  className="w-10 h-10 flex items-center justify-center text-cream-300 hover:text-gold-400 transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <motion.button
                onClick={handleAdd}
                className="btn-gold gap-2 w-full justify-center"
                style={{ minHeight: 56, fontSize: '0.7rem' }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
              >
                {added
                  ? <><Check size={15} /> Added to Cart!</>
                  : <><ShoppingBag size={15} /> Add to Cart — {CURRENCY}{p.price.toLocaleString('en-IN')}</>
                }
              </motion.button>
              <motion.button
                onClick={handleAdd}
                className="btn-outline gap-2 w-full justify-center"
                style={{ minHeight: 52, fontSize: '0.7rem' }}
                whileTap={{ scale: 0.97 }}
              >
                Buy Now
              </motion.button>
            </div>

            {/* Scratch card callout */}
            <div
              className="flex items-center gap-3 p-4"
              style={{ border: '1px solid rgba(201,164,92,0.2)', background: 'rgba(201,164,92,0.04)' }}
            >
              <Gift size={16} className="text-gold-500 flex-shrink-0" />
              <div>
                <p className="font-sans text-[0.65rem] tracking-widest uppercase font-semibold text-gold-500">
                  Free Secret Position Scratch Card Included
                </p>
                <p className="font-sans text-xs text-cream-300 opacity-60 mt-0.5">
                  Scratch. Reveal. Connect. — with every pack.
                </p>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Shield size={13} />, label: 'Secure Checkout' },
                { icon: <Package size={13} />, label: 'Discreet Packaging' },
                { icon: <Check size={13} />, label: 'Premium Experience' },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-1.5">
                  <span style={{ color: 'var(--color-gold-500)' }}>{b.icon}</span>
                  <span className="font-sans text-[0.65rem] tracking-wide text-cream-400 opacity-60">{b.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
