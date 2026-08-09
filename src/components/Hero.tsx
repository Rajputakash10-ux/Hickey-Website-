import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
}

export default function Hero({ onShopClick }: HeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh', background: '#160D1E' }}
      aria-label="Hero"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(64,35,75,0.5) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div
        className="container-site relative flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 items-center"
        style={{ minHeight: '100svh', paddingTop: 'clamp(5rem, 14vw, 9rem)', paddingBottom: 'clamp(3rem, 8vw, 5rem)' }}
      >
        {/* Text — mobile: below image, desktop: left */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col gap-5 order-2 lg:order-1 w-full"
        >
          <span className="section-label">Premium Intimacy Chocolate</span>

          <h1
            className="heading-display"
            style={{ fontSize: 'clamp(2.6rem, 9vw, 5.5rem)', lineHeight: 1.05 }}
          >
            Intimacy,<br />
            <em style={{ color: 'var(--color-gold-400)', fontStyle: 'italic' }}>one bite</em><br />
            away.
          </h1>

          <p
            className="font-sans text-cream-300 leading-relaxed max-w-sm"
            style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1rem)', opacity: 0.7 }}
          >
            A dark chocolate ritual crafted for connection and shared moments. Free Secret Position Scratch Card in every pack.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <button
              onClick={onShopClick}
              className="btn-gold gap-2 justify-center"
              style={{ minHeight: 52, fontSize: '0.7rem' }}
            >
              Shop HICKEY <ArrowRight size={14} />
            </button>
            <Link
              to="/shop"
              className="btn-outline justify-center"
              style={{ minHeight: 52, fontSize: '0.7rem' }}
            >
              Discover the Experience
            </Link>
          </div>

          <div className="flex items-center gap-3 pt-1">
            <div className="flex gap-0.5" aria-label="5 star rating">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="var(--color-gold-500)" aria-hidden="true">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
            </div>
            <span className="font-sans text-cream-400" style={{ fontSize: '0.72rem', opacity: 0.6 }}>
              Loved by 14,000+ couples across India
            </span>
          </div>
        </motion.div>

        {/* Product image — mobile: top, desktop: right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex items-center justify-center order-1 lg:order-2 w-full"
          style={{ minHeight: 'clamp(280px, 55vw, 520px)' }}
        >
          {/* Glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '60%', height: '60%',
              background: 'radial-gradient(circle, rgba(201,164,92,0.1) 0%, transparent 70%)',
              top: '20%', left: '20%',
              filter: 'blur(40px)',
            }}
            aria-hidden="true"
          />

          {/* Main product */}
          <motion.img
            src="/assets/hickey-1.png"
            alt="HICKEY Intimacy Dark Chocolate — 60g premium pack"
            className="relative z-10 w-auto object-contain"
            style={{
              maxHeight: 'clamp(260px, 50vw, 480px)',
              maxWidth: '65%',
              filter: 'drop-shadow(0 24px 64px rgba(0,0,0,0.7))',
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Scratch card */}
          <motion.div
            className="absolute z-20"
            style={{ bottom: '4%', right: '4%', width: 'clamp(100px, 28vw, 160px)' }}
            initial={{ opacity: 0, x: 16, rotate: 6 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <img
              src="/assets/hickey-4.png"
              alt="Free Secret Position Scratch Card"
              className="w-full h-auto object-contain"
              style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.5))' }}
            />
            <div
              className="absolute flex items-center justify-center rounded-full"
              style={{
                top: -10, right: -10,
                width: 44, height: 44,
                background: 'var(--color-gold-500)',
                boxShadow: '0 4px 16px rgba(201,164,92,0.35)',
              }}
            >
              <span
                className="font-sans font-bold text-center leading-tight"
                style={{ fontSize: '0.42rem', letterSpacing: '0.04em', color: '#160D1E', textTransform: 'uppercase' }}
              >
                FREE<br />WITH<br />EVERY<br />PACK
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 100, background: 'linear-gradient(to bottom, transparent, #160D1E)' }}
        aria-hidden="true"
      />
    </section>
  );
}
