import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STATS = [
  { value: '14K+', label: 'Couples' },
  { value: '4.9★', label: 'Rating' },
  { value: '60g', label: 'Chocolate' },
];

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{ minHeight: 'clamp(480px, 70vw, 680px)' }}
      aria-label="HICKEY — Shop Now"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.55) saturate(0.85)' }}
        aria-hidden="true"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(26,10,0,0.35) 0%, rgba(26,10,0,0.55) 50%, rgba(26,10,0,0.85) 100%)' }} aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(26,10,0,0.4) 100%)' }} aria-hidden="true" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center container-site" style={{ paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}>

        {/* Top hairline */}
        <motion.div
          className="mb-10"
          style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(184,134,11,0.6), transparent)', width: '100%' }}
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-5"
        >
          {/* Label */}
          <span
            className="font-sans tracking-[0.35em] uppercase"
            style={{ fontSize: '0.6rem', color: 'rgba(184,134,11,0.8)', letterSpacing: '0.35em' }}
          >
            Crafted for Connection
          </span>

          {/* Logo */}
          <h2
            className="font-serif font-light"
            style={{
              fontSize: 'clamp(3.5rem, 10vw, 7rem)',
              lineHeight: 1,
              letterSpacing: '0.18em',
              color: '#FFFDF9',
            }}
          >
            HICKEY
          </h2>

          {/* Tagline */}
          <p
            className="font-sans"
            style={{ fontSize: '0.68rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(244,237,227,0.4)' }}
          >
            Premium Intimacy Dark Chocolate · India
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-0 mt-4" style={{ border: '1px solid rgba(184,134,11,0.2)' }}>
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                className="flex flex-col items-center gap-1 px-8 py-4"
                style={{
                  borderRight: i < STATS.length - 1 ? '1px solid rgba(184,134,11,0.2)' : 'none',
                }}
              >
                <span className="font-serif font-light" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--color-gold-400)', lineHeight: 1 }}>{value}</span>
                <span className="font-sans" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(244,237,227,0.35)' }}>{label}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold mt-2"
            style={{ minHeight: 52, fontSize: '0.68rem', letterSpacing: '0.2em' }}
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Shop HICKEY
          </motion.button>
        </motion.div>

        {/* Bottom hairline */}
        <motion.div
          className="mt-10"
          style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(184,134,11,0.6), transparent)', width: '100%' }}
          initial={{ scaleX: 0 }}
          animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
}
