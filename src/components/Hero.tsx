import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh', background: '#160D1E' }}
      aria-label="Hero"
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: '70%', height: '70%', top: '-10%', right: '-10%', background: 'radial-gradient(circle, rgba(64,35,75,0.6) 0%, transparent 65%)', filter: 'blur(60px)' }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: '50%', height: '50%', bottom: '5%', left: '-5%', background: 'radial-gradient(circle, rgba(201,164,92,0.07) 0%, transparent 65%)', filter: 'blur(50px)' }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        aria-hidden="true"
      />

      <div
        className="container-site relative flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 items-center"
        style={{ minHeight: '100svh', paddingTop: 'clamp(5rem, 14vw, 9rem)', paddingBottom: 'clamp(3rem, 8vw, 5rem)' }}
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col gap-6 order-2 lg:order-1 w-full"
        >
          {/* Label pill */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 self-start px-3 py-1.5"
            style={{ border: '1px solid rgba(201,164,92,0.25)', background: 'rgba(201,164,92,0.06)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-gold-500)' }} />
            <span className="font-sans text-[0.6rem] tracking-[0.25em] uppercase text-gold-500 font-semibold">
              Premium Intimacy Chocolate
            </span>
          </motion.div>

          <h1
            className="heading-display"
            style={{ fontSize: 'clamp(2.8rem, 9.5vw, 6rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}
          >
            Intimacy,<br />
            <em style={{ color: 'var(--color-gold-400)', fontStyle: 'italic' }}>one bite</em><br />
            away.
          </h1>

          <p
            className="font-sans text-cream-300 leading-relaxed max-w-sm"
            style={{ fontSize: 'clamp(0.875rem, 2.5vw, 1.05rem)', opacity: 0.65, lineHeight: 1.7 }}
          >
            A dark chocolate ritual crafted for connection and shared moments.
            Free Secret Position Scratch Card in every pack.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <motion.button
              className="btn-gold gap-2 justify-center"
              onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ minHeight: 54, fontSize: '0.7rem', paddingLeft: '2rem', paddingRight: '2rem' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              Shop HICKEY <ArrowRight size={14} />
            </motion.button>
            <Link
              to="/shop"
              className="btn-outline justify-center"
              style={{ minHeight: 54, fontSize: '0.7rem' }}
            >
              Discover the Experience
            </Link>
          </div>

          {/* Product rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-4 pt-1"
          >
            <div className="flex flex-col gap-0.5">
              <div className="flex gap-0.5" aria-label="4.9 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="var(--color-gold-500)" stroke="none" aria-hidden="true" />
                ))}
              </div>
              <span className="font-sans text-cream-400" style={{ fontSize: '0.68rem', opacity: 0.55 }}>
                4.9 / 5 · 200+ verified reviews
              </span>
            </div>
            <div style={{ width: 1, height: 28, background: 'rgba(201,164,92,0.2)' }} />
            <div className="flex flex-col gap-0.5">
              <span className="font-serif text-gold-400 font-light" style={{ fontSize: '1.1rem', lineHeight: 1 }}>14K+</span>
              <span className="font-sans text-cream-400" style={{ fontSize: '0.68rem', opacity: 0.55 }}>Happy couples</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Product image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative flex items-center justify-center order-1 lg:order-2 w-full"
          style={{ minHeight: 'clamp(280px, 55vw, 540px)' }}
        >
          {/* Glow ring */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '55%', height: '55%',
              background: 'radial-gradient(circle, rgba(201,164,92,0.12) 0%, transparent 70%)',
              top: '22%', left: '22%',
              filter: 'blur(48px)',
            }}
            aria-hidden="true"
          />

          {/* Main product */}
          <motion.img
            src="/assets/hickey-1.png"
            alt="HICKEY Intimacy Dark Chocolate — 60g premium pack"
            className="relative z-10 w-auto object-contain"
            style={{
              maxHeight: 'clamp(260px, 50vw, 500px)',
              maxWidth: '65%',
              filter: 'drop-shadow(0 32px 80px rgba(0,0,0,0.8))',
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Scratch card */}
          <motion.div
            className="absolute z-20"
            style={{ bottom: '4%', right: '4%', width: 'clamp(100px, 28vw, 155px)' }}
            initial={{ opacity: 0, x: 20, rotate: 6 }}
            animate={{ opacity: 1, x: 0, rotate: 6 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <img
              src="/assets/hickey-4.png"
              alt="Free Secret Position Scratch Card"
              className="w-full h-auto object-contain"
              style={{ filter: 'drop-shadow(0 10px 28px rgba(0,0,0,0.55))' }}
            />
            <motion.div
              className="absolute flex items-center justify-center rounded-full"
              style={{
                top: -12, right: -12,
                width: 46, height: 46,
                background: 'var(--color-gold-500)',
                boxShadow: '0 4px 20px rgba(201,164,92,0.4)',
              }}
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span
                className="font-sans font-bold text-center leading-tight"
                style={{ fontSize: '0.42rem', letterSpacing: '0.04em', color: '#160D1E', textTransform: 'uppercase' }}
              >
                FREE<br />WITH<br />EVERY<br />PACK
              </span>
            </motion.div>
          </motion.div>

          {/* Floating price badge */}
          <motion.div
            className="absolute z-20 flex flex-col items-center justify-center"
            style={{
              top: '8%', left: '2%',
              padding: '0.75rem 1rem',
              background: 'rgba(22,13,30,0.9)',
              border: '1px solid rgba(201,164,92,0.2)',
              backdropFilter: 'blur(12px)',
            }}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <span className="font-sans text-[0.55rem] tracking-widest uppercase text-gold-500 font-semibold">Only</span>
            <span className="font-serif text-cream-100 font-light" style={{ fontSize: '1.4rem', lineHeight: 1 }}>₹599</span>
            <span className="font-sans text-cream-400 line-through" style={{ fontSize: '0.6rem', opacity: 0.5 }}>₹799</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 120, background: 'linear-gradient(to bottom, transparent, #160D1E)' }}
        aria-hidden="true"
      />
    </section>
  );
}
