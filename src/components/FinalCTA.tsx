import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STATS = [
  { value: '14K+', label: 'Couples' },
  { value: '4.9★', label: 'Rating' },
  { value: '60g', label: 'Chocolate' },
  { value: '24h', label: 'Support' },
];

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{ background: '#1A0A00' }}
      aria-label="HICKEY — Experience"
    >
      <div className="flex flex-col lg:flex-row" style={{ minHeight: 'clamp(520px, 65vw, 720px)' }}>

        {/* Video — full width on mobile, half on desktop */}
        <div className="relative overflow-hidden" style={{ flex: '1 1 50%', minHeight: 'clamp(260px, 55vw, 720px)' }}>
          <video
            autoPlay muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.72) saturate(0.88)' }}
            aria-hidden="true"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Bottom fade on mobile */}
          <div className="absolute inset-0 pointer-events-none lg:hidden" style={{ background: 'linear-gradient(to bottom, transparent 50%, #1A0A00 100%)' }} aria-hidden="true" />
          {/* Right fade on desktop */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block" style={{ background: 'linear-gradient(to right, transparent 55%, #1A0A00 100%)' }} aria-hidden="true" />
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(26,10,0,0.25) 0%, transparent 40%, rgba(26,10,0,0.4) 100%)' }} aria-hidden="true" />
        </div>

        {/* Right — Quote + Stats + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          className="relative flex flex-col justify-center px-8 sm:px-12 lg:px-14 py-12 lg:py-16"
          style={{ flex: '1 1 50%', background: '#1A0A00' }}
        >
          {/* Gold left accent — desktop only */}
          <div
            className="absolute left-0 top-16 bottom-16 hidden lg:block pointer-events-none"
            style={{ width: 2, background: 'linear-gradient(to bottom, transparent, rgba(184,134,11,0.5), transparent)' }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-7">

            {/* Label */}
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans uppercase"
              style={{ fontSize: '0.58rem', letterSpacing: '0.3em', color: 'rgba(184,134,11,0.65)' }}
            >
              Crafted for Connection
            </motion.span>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div style={{ width: 28, height: 1, background: 'var(--color-gold-500)', opacity: 0.55 }} />
              <blockquote
                className="font-serif font-light"
                style={{
                  fontSize: 'clamp(1.2rem, 2.8vw, 1.75rem)',
                  lineHeight: 1.5,
                  color: 'rgba(244,237,227,0.9)',
                  letterSpacing: '-0.01em',
                }}
              >
                "The best moments aren't planned. They're shared — slowly, intentionally, together."
              </blockquote>
              <p className="font-sans" style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(184,134,11,0.55)', textTransform: 'uppercase' }}>
                — HICKEY
              </p>
            </motion.div>

            {/* Divider */}
            <div style={{ height: 1, background: 'linear-gradient(to right, rgba(184,134,11,0.22), transparent)' }} />

            {/* Stats 2×2 grid */}
            <div className="grid grid-cols-2 gap-px" style={{ background: 'rgba(184,134,11,0.1)' }}>
              {STATS.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
                  className="flex flex-col gap-1 p-5"
                  style={{ background: 'rgba(26,10,0,0.85)' }}
                >
                  <span className="font-serif font-light" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'var(--color-gold-400)', lineHeight: 1 }}>{value}</span>
                  <span className="font-sans" style={{ fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(244,237,227,0.28)' }}>{label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
              className="self-start font-sans uppercase"
              style={{
                minHeight: 50,
                padding: '0 2rem',
                fontSize: '0.65rem',
                letterSpacing: '0.22em',
                fontWeight: 700,
                background: 'var(--color-gold-500)',
                color: '#1A0A00',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.03, backgroundColor: 'var(--color-gold-400)' }}
              whileTap={{ scale: 0.97 }}
            >
              Shop HICKEY
            </motion.button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
