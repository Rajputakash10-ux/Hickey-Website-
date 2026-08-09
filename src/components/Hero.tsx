import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onAddToCart: () => void;
}

export default function Hero(_props: HeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: '100svh', background: 'linear-gradient(135deg, #160D1E 0%, #24152F 50%, #321D3D 100%)' }}
      aria-label="Hero — HICKEY Intimacy Dark Chocolate"
    >
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 70% at 70% 50%, rgba(64,35,75,0.6) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 40% 50% at 20% 80%, rgba(42,23,19,0.5) 0%, transparent 60%)' }}
        aria-hidden="true"
      />

      {/* Floating gold particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: i % 2 === 0 ? 3 : 2,
            height: i % 2 === 0 ? 3 : 2,
            background: 'var(--color-gold-500)',
            opacity: 0.3,
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{ y: [0, -12, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          aria-hidden="true"
        />
      ))}

      <div className="container-site relative" style={{ paddingTop: 'clamp(5rem, 12vw, 8rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)', minHeight: '100svh', display: 'flex', alignItems: 'center' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-label"
            >
              Premium Intimacy Chocolate
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="heading-display"
              style={{ fontSize: 'clamp(3rem, 8vw, 6.5rem)', lineHeight: 1.0 }}
            >
              Intimacy,<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-400)' }}>one bite</em><br />
              away.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="font-sans text-cream-300 leading-relaxed max-w-md"
              style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)', opacity: 0.75 }}
            >
              A dark chocolate ritual crafted for connection, shared moments and a little more chemistry.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/shop"
                className="btn-gold gap-2 justify-center"
                style={{ minHeight: 52, fontSize: '0.68rem' }}
              >
                Shop HICKEY <ArrowRight size={13} />
              </Link>
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-outline justify-center"
                style={{ minHeight: 52, fontSize: '0.68rem' }}
              >
                Discover the Experience
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="var(--color-gold-500)" aria-hidden="true">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                ))}
              </div>
              <span className="font-sans text-cream-400 opacity-60" style={{ fontSize: '0.72rem' }}>
                Loved by 14,000+ couples across India
              </span>
            </motion.div>
          </motion.div>

          {/* Right — Product composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex items-center justify-center order-1 lg:order-2"
            style={{ minHeight: 'clamp(320px, 55vw, 580px)' }}
          >
            {/* Glow behind product */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: '70%', height: '70%',
                background: 'radial-gradient(circle, rgba(201,164,92,0.12) 0%, transparent 70%)',
                top: '15%', left: '15%',
                filter: 'blur(40px)',
              }}
              aria-hidden="true"
            />

            {/* Main product image */}
            <motion.div
              className="relative z-10"
              style={{ width: '65%', maxWidth: 280 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/src/assets/hickey-1.png"
                alt="HICKEY Intimacy Dark Chocolate — 60g premium pack"
                className="w-full h-auto object-contain"
                style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.6))' }}
              />
            </motion.div>

            {/* Scratch card — bottom right */}
            <motion.div
              className="absolute z-20"
              style={{ bottom: '5%', right: '2%', width: '42%', maxWidth: 180 }}
              initial={{ opacity: 0, x: 20, rotate: 6 }}
              animate={{ opacity: 1, x: 0, rotate: 6 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ rotate: 3, scale: 1.04, transition: { duration: 0.3 } }}
            >
              <img
                src="/src/assets/hickey-4.png"
                alt="HICKEY Secret Position Scratch Card — free with every pack"
                className="w-full h-auto object-contain"
                style={{ filter: 'drop-shadow(0 12px 30px rgba(0,0,0,0.5))' }}
              />
              {/* FREE badge */}
              <div
                className="absolute flex items-center justify-center rounded-full"
                style={{
                  top: -10, right: -10,
                  width: 48, height: 48,
                  background: 'var(--color-gold-500)',
                  border: '2px solid rgba(244,237,227,0.3)',
                  boxShadow: '0 4px 16px rgba(201,164,92,0.4)',
                }}
              >
                <span className="font-sans font-bold text-center leading-tight" style={{ fontSize: '0.45rem', letterSpacing: '0.05em', color: '#160D1E', textTransform: 'uppercase' }}>
                  FREE<br />WITH<br />EVERY<br />PACK
                </span>
              </div>
            </motion.div>

            {/* Chocolate pieces — top left */}
            <motion.div
              className="absolute z-10"
              style={{ top: '5%', left: '0%', width: '35%', maxWidth: 140 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src="/src/assets/hickey-3.png"
                alt="HICKEY dark chocolate pieces"
                className="w-full h-auto object-contain"
                style={{ filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.4))' }}
              />
            </motion.div>

            {/* Gold line accent */}
            <div
              className="absolute pointer-events-none"
              style={{
                bottom: '20%', left: '5%',
                width: 1, height: '30%',
                background: 'linear-gradient(to bottom, transparent, rgba(201,164,92,0.3), transparent)',
              }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 120, background: 'linear-gradient(to bottom, transparent, #24152F)' }}
        aria-hidden="true"
      />
    </section>
  );
}
