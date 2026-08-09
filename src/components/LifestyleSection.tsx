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
      style={{ minHeight: 'clamp(400px, 70vw, 700px)', background: '#160D1E' }}
      aria-label="HICKEY lifestyle"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #160D1E 0%, #2A1713 40%, #24152F 100%)',
        }}
        aria-hidden="true"
      />

      {/* Product image as lifestyle visual */}
      <div
        className="absolute inset-0 flex items-center justify-end overflow-hidden"
        aria-hidden="true"
      >
        <motion.img
          src="/src/assets/hickey-2.png"
          alt=""
          className="h-full w-auto object-contain opacity-20"
          style={{ maxWidth: '60%', filter: 'blur(1px)' }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={isVisible ? { opacity: 0.15, scale: 1 } : {}}
          transition={{ duration: 1.2 }}
        />
      </div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(22,13,30,0.95) 40%, rgba(22,13,30,0.5) 100%)' }}
        aria-hidden="true"
      />

      {/* Gold line accent */}
      <div
        className="absolute left-0 top-0 bottom-0 pointer-events-none"
        style={{ width: 1, background: 'linear-gradient(to bottom, transparent, rgba(201,164,92,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-site relative h-full flex items-center" style={{ paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="flex flex-col gap-8 max-w-xl"
        >
          <div className="flex flex-col gap-2">
            {['Slow down.', 'Get closer.', 'Share something.'].map((line, i) => (
              <motion.h2
                key={line}
                initial={{ opacity: 0, x: -24 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="heading-display"
                style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: 1.05 }}
              >
                {line}
              </motion.h2>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-sans text-cream-300 leading-relaxed max-w-sm"
            style={{ fontSize: '0.95rem', opacity: 0.7 }}
          >
            HICKEY is designed for the moments between the ordinary — when you choose to be present, together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <Link
              to="/shop"
              className="btn-gold gap-2"
              style={{ minHeight: 52, fontSize: '0.68rem' }}
            >
              Shop the Experience <ArrowRight size={13} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
