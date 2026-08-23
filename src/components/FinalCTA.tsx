import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{ background: '#FFFDF9', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
    >
      {/* Soft gold glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(184,134,11,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-site relative">
        {/* Top gold line */}
        <motion.div
          className="mx-auto mb-10"
          style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(184,134,11,0.45), transparent)' }}
          initial={{ width: 0 }}
          animate={isVisible ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center gap-4"
        >
          <span className="section-label">Crafted for Connection</span>

          <h2
            className="heading-display"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            HICKEY
          </h2>

          <p
            className="font-sans text-choc-600"
            style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.4 }}
          >
            Premium Intimacy Dark Chocolate · India
          </p>

          {/* Micro stats */}
          <div className="flex items-center gap-8 mt-4">
            {[
              { value: '14K+', label: 'Couples' },
              { value: '4.9★', label: 'Rating' },
              { value: '60g', label: 'Chocolate' },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center gap-0.5"
              >
                <span className="font-serif font-light text-gold-400" style={{ fontSize: '1.4rem', lineHeight: 1 }}>{value}</span>
                <span className="font-sans text-choc-600" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.4 }}>{label}</span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold gap-2 mt-2"
            style={{ minHeight: 52, fontSize: '0.68rem' }}
            initial={{ opacity: 0, y: 10 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Shop HICKEY
          </motion.button>
        </motion.div>

        {/* Bottom gold line */}
        <motion.div
          className="mx-auto mt-10"
          style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(184,134,11,0.45), transparent)' }}
          initial={{ width: 0 }}
          animate={isVisible ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
}
