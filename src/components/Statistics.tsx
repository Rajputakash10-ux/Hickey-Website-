import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { STATS } from '../data';

export default function Statistics() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 lg:py-28"
      style={{ background: 'var(--color-ink-950)', borderTop: '1px solid rgba(201,163,90,0.08)', borderBottom: '1px solid rgba(201,163,90,0.08)' }}
    >
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(201,163,90,0.06)' }}>
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-12 px-6 text-center"
              style={{ background: 'var(--color-ink-950)' }}
            >
              <span
                className="font-serif font-light text-gold-400 leading-none"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
              >
                {stat.value}
              </span>
              <span className="font-sans text-xs tracking-widest uppercase text-cream-400 opacity-50 mt-3">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
