import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{ background: '#0e0816', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
    >
      {/* Soft gold glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,164,92,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-site relative">
        {/* Top gold line */}
        <motion.div
          className="mx-auto mb-10"
          style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(201,164,92,0.35), transparent)' }}
          initial={{ width: 0 }}
          animate={isVisible ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
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
            className="font-sans text-cream-400"
            style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.4 }}
          >
            Premium Intimacy Dark Chocolate · India
          </p>
        </motion.div>

        {/* Bottom gold line */}
        <motion.div
          className="mx-auto mt-10"
          style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(201,164,92,0.35), transparent)' }}
          initial={{ width: 0 }}
          animate={isVisible ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
        />
      </div>
    </section>
  );
}
