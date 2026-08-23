import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check, Gift, Shield, Package, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { CURRENCY } from '../data';
import type { Product } from '../types';

interface ProductSectionProps {
  product: Product;
  onAddToCart: (product: Product, qty: number) => void;
  checkoutUrl?: string | null;
}

export default function ProductSection({ product: p, onAddToCart, checkoutUrl }: ProductSectionProps) {
  const { ref, isVisible } = useScrollReveal();
  const [imgIndex, setImgIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const thumbRef = useRef<HTMLDivElement>(null);

  const handleAdd = () => {
    onAddToCart(p, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  const handleBuyNow = () => {
    onAddToCart(p, qty);
    setTimeout(() => {
      if (checkoutUrl) window.location.href = checkoutUrl;
    }, 300);
  };

  const prev = () => setImgIndex(i => (i - 1 + p.images.length) % p.images.length);
  const next = () => setImgIndex(i => (i + 1) % p.images.length);

  const discount = p.compareAtPrice
    ? Math.round(((p.compareAtPrice - p.price) / p.compareAtPrice) * 100)
    : 0;

  return (
    <section
      id="product"
      ref={ref as React.RefObject<HTMLElement>}
      className="overflow-hidden"
      style={{ background: '#1a0f26', paddingTop: 'clamp(3rem, 8vw, 5rem)', paddingBottom: 'clamp(3rem, 8vw, 5rem)' }}
      aria-label="Product"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-3 lg:sticky lg:top-20"
          >
            {/* Main image with nav arrows */}
            <div
              className="relative overflow-hidden group"
              style={{ aspectRatio: '1/1', background: 'linear-gradient(135deg, #2a1a3e 0%, #1a0f26 100%)', border: '1px solid rgba(201,164,92,0.12)' }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={p.images[imgIndex]?.src}
                  alt={p.images[imgIndex]?.alt}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  loading="lazy"
                />
              </AnimatePresence>

              {/* Prev/Next arrows */}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ width: 32, height: 32, background: 'rgba(22,13,30,0.8)', border: '1px solid rgba(201,164,92,0.2)', backdropFilter: 'blur(8px)' }}
                aria-label="Previous image"
              >
                <ChevronLeft size={14} style={{ color: 'var(--color-gold-400)' }} />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ width: 32, height: 32, background: 'rgba(22,13,30,0.8)', border: '1px solid rgba(201,164,92,0.2)', backdropFilter: 'blur(8px)' }}
                aria-label="Next image"
              >
                <ChevronRight size={14} style={{ color: 'var(--color-gold-400)' }} />
              </button>

              {/* Counter */}
              <div className="absolute bottom-2 right-3 font-sans" style={{ fontSize: '0.55rem', letterSpacing: '0.12em', color: 'rgba(244,237,227,0.4)' }}>
                {imgIndex + 1} / {p.images.length}
              </div>

              {p.badge && (
                <div className="absolute top-3 left-3 px-2.5 py-1" style={{ background: 'rgba(22,13,30,0.9)', border: '1px solid rgba(201,164,92,0.25)' }}>
                  <span className="font-sans text-[8px] font-semibold tracking-widest uppercase text-gold-400">{p.badge}</span>
                </div>
              )}
            </div>

            {/* Scrollable thumbnails */}
            <div
              ref={thumbRef}
              className="flex gap-2 overflow-x-auto"
              style={{ scrollbarWidth: 'none', scrollBehavior: 'smooth' }}
            >
              {p.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  aria-label={`View image ${i + 1}`}
                  className="flex-shrink-0 overflow-hidden transition-all duration-200"
                  style={{
                    width: 54, height: 54,
                    border: `1px solid ${i === imgIndex ? 'var(--color-gold-500)' : 'rgba(201,164,92,0.1)'}`,
                    background: '#2a1a3e',
                    opacity: i === imgIndex ? 1 : 0.5,
                    boxShadow: i === imgIndex ? '0 0 8px rgba(201,164,92,0.25)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-contain p-1" loading="lazy" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* Title */}
            <div>
              <span className="section-label">60g · Dark Chocolate</span>
              <h2 className="heading-display mt-2" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
                {p.title}
              </h2>
              {p.subtitle && (
                <p className="font-serif italic text-cream-300 opacity-60 mt-1" style={{ fontSize: '1rem' }}>
                  {p.subtitle}
                </p>
              )}
            </div>

            {/* Price */}
            <div
              className="flex items-baseline gap-3 py-4"
              style={{ borderTop: '1px solid rgba(201,164,92,0.1)', borderBottom: '1px solid rgba(201,164,92,0.1)' }}
            >
              <span className="font-serif font-light text-gold-400" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)' }}>
                {CURRENCY}{p.price.toLocaleString('en-IN')}
              </span>
              {p.compareAtPrice && (
                <>
                  <span className="font-sans text-cream-400 opacity-35 line-through" style={{ fontSize: '0.95rem' }}>
                    {CURRENCY}{p.compareAtPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="font-sans text-[8px] tracking-widest uppercase font-semibold text-gold-300 px-2 py-0.5" style={{ background: 'rgba(201,164,92,0.08)', border: '1px solid rgba(201,164,92,0.2)' }}>
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="font-sans text-[0.6rem] tracking-widest uppercase text-cream-400 opacity-50">Qty</span>
              <div className="flex items-center overflow-hidden" style={{ border: '1px solid rgba(201,164,92,0.18)' }}>
                <button onClick={() => setQty(q => Math.max(1, q - 1))} aria-label="Decrease" className="w-9 h-9 flex items-center justify-center text-cream-300 hover:text-gold-400 transition-colors">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /></svg>
                </button>
                <span className="w-9 text-center font-sans text-sm font-medium text-cream-100">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} aria-label="Increase" className="w-9 h-9 flex items-center justify-center text-cream-300 hover:text-gold-400 transition-colors">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-2.5">
              <motion.button
                onClick={handleAdd}
                className="btn-gold gap-2 w-full justify-center"
                style={{ minHeight: 52, fontSize: '0.68rem' }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.97 }}
              >
                {added
                  ? <><Check size={14} /> Added!</>
                  : <><ShoppingBag size={14} /> Add to Cart — {CURRENCY}{p.price.toLocaleString('en-IN')}</>
                }
              </motion.button>
              <motion.button
                onClick={handleBuyNow}
                className="btn-outline gap-2 w-full justify-center"
                style={{ minHeight: 48, fontSize: '0.68rem' }}
                whileTap={{ scale: 0.97 }}
              >
                Buy Now
              </motion.button>
            </div>

            {/* Scratch card callout */}
            <div className="flex items-center gap-3 p-3.5" style={{ border: '1px solid rgba(201,164,92,0.18)', background: 'rgba(201,164,92,0.03)' }}>
              <Gift size={15} className="text-gold-500 flex-shrink-0" />
              <div>
                <p className="font-sans text-[0.6rem] tracking-widest uppercase font-semibold text-gold-500">Free Secret Position Scratch Card</p>
                <p className="font-sans text-xs text-cream-300 opacity-50 mt-0.5">Included in every pack. Scratch. Reveal. Connect.</p>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <Shield size={12} />, label: 'Secure Checkout' },
                { icon: <Package size={12} />, label: 'Discreet Packaging' },
                { icon: <Check size={12} />, label: 'Premium Quality' },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-1.5">
                  <span style={{ color: 'var(--color-gold-500)' }}>{b.icon}</span>
                  <span className="font-sans text-[0.6rem] tracking-wide text-cream-400 opacity-50">{b.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
