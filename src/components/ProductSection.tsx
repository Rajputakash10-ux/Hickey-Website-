import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check, Gift, Shield, Package, Truck } from 'lucide-react';
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

  const discount = p.compareAtPrice
    ? Math.round(((p.compareAtPrice - p.price) / p.compareAtPrice) * 100)
    : 0;

  return (
    <section
      id="product"
      ref={ref as React.RefObject<HTMLElement>}
      className="overflow-hidden"
      style={{ background: '#FFFDF9', paddingTop: 'clamp(3rem, 7vw, 5rem)', paddingBottom: 'clamp(3rem, 7vw, 5rem)' }}
      aria-label="Product"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* Gallery — main image + thumbnails below */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-3 lg:sticky lg:top-20"
          >
            {/* Main image */}
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '1/1', background: '#FDF6EC', border: '1px solid rgba(184,134,11,0.1)' }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={p.images[imgIndex]?.src}
                  alt={p.images[imgIndex]?.alt}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  draggable={false}
                />
              </AnimatePresence>
              {p.badge && (
                <div className="absolute top-3 left-3 px-2.5 py-1" style={{ background: 'rgba(26,10,0,0.85)', border: '1px solid rgba(184,134,11,0.3)' }}>
                  <span className="font-sans text-[8px] font-bold tracking-widest uppercase" style={{ color: 'var(--color-gold-400)' }}>{p.badge}</span>
                </div>
              )}
            </div>

            {/* Thumbnails below */}
            <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
              {p.images.map((img, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setImgIndex(i)}
                  onClick={() => setImgIndex(i)}
                  aria-label={img.alt}
                  className="flex-shrink-0 overflow-hidden transition-all duration-150"
                  style={{
                    width: 72, height: 72,
                    border: `2px solid ${i === imgIndex ? 'var(--color-gold-500)' : 'rgba(184,134,11,0.15)'}`,
                    background: '#FDF6EC',
                    opacity: i === imgIndex ? 1 : 0.65,
                    boxShadow: i === imgIndex ? '0 0 0 1px rgba(184,134,11,0.25)' : 'none',
                  }}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* ── Product Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* Title */}
            <div>
              <p className="font-sans text-choc-600 opacity-50 mb-1" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                HICKEY · 60g Dark Chocolate
              </p>
              <h2 className="heading-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.1 }}>
                {p.title}
              </h2>
              {p.subtitle && (
                <p className="font-serif italic text-choc-700 opacity-55 mt-1" style={{ fontSize: '0.95rem' }}>
                  {p.subtitle}
                </p>
              )}
            </div>

            {/* Rating row */}
            <div className="flex items-center gap-2 pb-4" style={{ borderBottom: '1px solid rgba(184,134,11,0.08)' }}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--color-gold-500)" aria-hidden="true">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <span className="font-sans text-gold-400" style={{ fontSize: '0.7rem' }}>4.9</span>
              <span className="font-sans text-choc-600 opacity-40" style={{ fontSize: '0.7rem' }}>· 200+ reviews · 14K+ couples</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-serif font-light text-gold-400" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', lineHeight: 1 }}>
                {CURRENCY}{p.price.toLocaleString('en-IN')}
              </span>
              {p.compareAtPrice && (
                <>
                  <span className="font-sans text-choc-600 opacity-35 line-through" style={{ fontSize: '0.95rem' }}>
                    {CURRENCY}{p.compareAtPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="font-sans text-[8px] tracking-widest uppercase font-bold px-2 py-0.5" style={{ background: 'rgba(184,134,11,0.1)', border: '1px solid rgba(184,134,11,0.25)', color: 'var(--color-gold-400)' }}>
                    {discount}% off
                  </span>
                </>
              )}
            </div>

            {/* Delivery */}
            <div className="flex items-center gap-2 py-3 px-3" style={{ background: 'rgba(184,134,11,0.03)', border: '1px solid rgba(184,134,11,0.08)' }}>
              <Truck size={13} style={{ color: 'var(--color-gold-500)', flexShrink: 0 }} />
              <span className="font-sans text-choc-700 opacity-60" style={{ fontSize: '0.72rem' }}>
                Free delivery · Ships within <strong className="text-choc-800 opacity-80">24h</strong> · Discreet packaging
              </span>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="font-sans text-choc-600 opacity-50" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Quantity</span>
              <div className="flex items-center" style={{ border: '1px solid rgba(184,134,11,0.2)' }}>
                <button onClick={() => setQty(q => Math.max(1, q - 1))} aria-label="Decrease" className="w-9 h-9 flex items-center justify-center text-choc-700 hover:text-gold-400 transition-colors">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /></svg>
                </button>
                <span className="w-10 text-center font-sans text-sm font-semibold text-choc-900">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} aria-label="Increase" className="w-9 h-9 flex items-center justify-center text-choc-700 hover:text-gold-400 transition-colors">
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
                  ? <><Check size={14} /> Added to Cart!</>
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

            {/* Scratch card + trust */}
            <div className="flex flex-col gap-3 pt-1">
              <div className="flex items-center gap-3 p-3" style={{ border: '1px solid rgba(184,134,11,0.18)', background: 'rgba(184,134,11,0.03)' }}>
                <Gift size={14} className="text-gold-500 flex-shrink-0" />
                <div>
                  <p className="font-sans text-[0.6rem] tracking-widest uppercase font-semibold text-gold-500">Free Secret Position Scratch Card</p>
                  <p className="font-sans text-xs text-choc-700 opacity-45 mt-0.5">Included in every pack. Scratch. Reveal. Connect.</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {[
                  { icon: <Shield size={11} />, label: 'Secure Checkout' },
                  { icon: <Package size={11} />, label: 'Discreet Packaging' },
                  { icon: <Check size={11} />, label: 'Premium Quality' },
                ].map(b => (
                  <div key={b.label} className="flex items-center gap-1.5">
                    <span style={{ color: 'var(--color-gold-500)' }}>{b.icon}</span>
                    <span className="font-sans text-choc-600 opacity-45" style={{ fontSize: '0.6rem' }}>{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
