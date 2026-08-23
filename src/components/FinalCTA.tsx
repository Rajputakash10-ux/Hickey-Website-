import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{ background: '#1A0A00' }}
      aria-label="HICKEY"
    >
      <div className="flex flex-col lg:flex-row" style={{ minHeight: 'clamp(520px, 65vw, 720px)' }}>

        {/* Left — Video */}
        <div className="relative overflow-hidden" style={{ flex: '1 1 55%', minHeight: 'clamp(280px, 55vw, 720px)' }}>
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.75) saturate(0.88)' }}
            aria-hidden="true"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Mobile: bottom fade */}
          <div className="absolute inset-0 pointer-events-none lg:hidden" style={{ background: 'linear-gradient(to bottom, transparent 50%, #1A0A00 100%)' }} aria-hidden="true" />
          {/* Desktop: right fade */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block" style={{ background: 'linear-gradient(to right, transparent 50%, #1A0A00 100%)' }} aria-hidden="true" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(26,10,0,0.3) 0%, transparent 35%, rgba(26,10,0,0.45) 100%)' }} aria-hidden="true" />
        </div>

        {/* Right — Brand panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center justify-center px-10 lg:px-14 py-14 lg:py-0"
          style={{ flex: '1 1 45%', background: '#1A0A00' }}
        >
          {/* Gold left accent */}
          <div className="absolute left-0 top-12 bottom-12 hidden lg:block pointer-events-none" style={{ width: 1, background: 'linear-gradient(to bottom, transparent, rgba(184,134,11,0.45), transparent)' }} aria-hidden="true" />

          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(184,134,11,0.07) 0%, transparent 70%)' }} aria-hidden="true" />

          <div className="relative flex flex-col items-center gap-6 text-center">

            {/* Top ornament */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <div style={{ width: 40, height: 1, background: 'linear-gradient(to left, rgba(184,134,11,0.6), transparent)' }} />
              <div style={{ width: 5, height: 5, background: 'var(--color-gold-500)', transform: 'rotate(45deg)', opacity: 0.7 }} />
              <div style={{ width: 40, height: 1, background: 'linear-gradient(to right, rgba(184,134,11,0.6), transparent)' }} />
            </motion.div>

            {/* Section label */}
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans uppercase"
              style={{ fontSize: '0.55rem', letterSpacing: '0.35em', color: 'rgba(184,134,11,0.55)' }}
            >
              Crafted for Connection
            </motion.span>

            {/* HICKEY monogram */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="font-serif font-light"
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                letterSpacing: '0.22em',
                lineHeight: 1,
                color: 'rgba(244,237,227,0.92)',
              }}
            >
              HICKEY
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="font-sans"
              style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(244,237,227,0.22)' }}
            >
              Premium Intimacy Dark Chocolate · India
            </motion.p>

            {/* Bottom ornament */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <div style={{ width: 40, height: 1, background: 'linear-gradient(to left, rgba(184,134,11,0.6), transparent)' }} />
              <div style={{ width: 5, height: 5, background: 'var(--color-gold-500)', transform: 'rotate(45deg)', opacity: 0.7 }} />
              <div style={{ width: 40, height: 1, background: 'linear-gradient(to right, rgba(184,134,11,0.6), transparent)' }} />
            </motion.div>

            {/* CTA */}
            <motion.button
              onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.65 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="font-sans uppercase mt-2"
              style={{
                minHeight: 48,
                padding: '0 2.2rem',
                fontSize: '0.62rem',
                letterSpacing: '0.25em',
                fontWeight: 700,
                background: 'transparent',
                color: 'var(--color-gold-400)',
                border: '1px solid rgba(184,134,11,0.4)',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(184,134,11,0.1)';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,134,11,0.7)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(184,134,11,0.4)';
              }}
            >
              Shop Now
            </motion.button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
