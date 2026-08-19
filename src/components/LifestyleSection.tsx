import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function LifestyleSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{ minHeight: 'clamp(500px, 80vw, 750px)', background: '#160D1E' }}
      aria-label="HICKEY lifestyle"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #160D1E 0%, #2A1713 40%, #24152F 100%)' }}
        aria-hidden="true"
      />

      {/* Product image faded bg */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden" aria-hidden="true">
        <motion.img
          src="/assets/hickey-2.png"
          alt=""
          className="h-full w-auto object-contain"
          style={{ maxWidth: '60%', filter: 'blur(2px)' }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={isVisible ? { opacity: 0.12, scale: 1 } : {}}
          transition={{ duration: 1.2 }}
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(22,13,30,0.97) 45%, rgba(22,13,30,0.4) 100%)' }}
        aria-hidden="true"
      />

      {/* Gold accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 pointer-events-none"
        style={{ width: 2, background: 'linear-gradient(to bottom, transparent, rgba(201,164,92,0.4), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-site relative h-full flex items-center" style={{ paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="flex flex-col gap-8 max-w-2xl"
        >
          <div className="flex flex-col gap-1">
            {[
              { text: 'Slow down.', delay: 0 },
              { text: 'Get closer.', delay: 0.15 },
              { text: 'Share something.', delay: 0.3 },
            ].map(({ text, delay }) => (
              <motion.h2
                key={text}
                initial={{ opacity: 0, x: -32 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay }}
                className="font-serif text-cream-100"
                style={{
                  fontSize: 'clamp(3rem, 9vw, 7rem)',
                  lineHeight: 1.0,
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                {text}
              </motion.h2>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isVisible ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ height: 2, width: 80, background: 'var(--color-gold-500)', transformOrigin: 'left' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="font-sans text-cream-300 leading-relaxed max-w-sm"
            style={{ fontSize: '1rem', opacity: 0.75, fontWeight: 500 }}
          >
            HICKEY is designed for the moments between the ordinary — when you choose to be present, together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            <Link to="/shop" className="btn-gold gap-2" style={{ minHeight: 54, fontSize: '0.7rem' }}>
              Shop the Experience <ArrowRight size={13} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
