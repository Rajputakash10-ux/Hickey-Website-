import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FinalCTAProps {
  onShopClick: () => void;
}

export default function FinalCTA({ onShopClick }: FinalCTAProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{ background: '#24152F', paddingTop: 'clamp(5rem, 12vw, 9rem)', paddingBottom: 'clamp(5rem, 12vw, 9rem)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(64,35,75,0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-site relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-6 max-w-xl mx-auto"
        >
          <span className="section-label">Tonight</span>
          <h2 className="heading-display" style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', lineHeight: 1.05 }}>
            Make tonight a little<br />
            <em style={{ color: 'var(--color-gold-400)', fontStyle: 'italic' }}>more interesting.</em>
          </h2>
          <p className="font-sans text-cream-300 leading-relaxed" style={{ fontSize: '0.95rem', opacity: 0.65 }}>
            Premium dark chocolate. Free scratch card. Discreet delivery.
          </p>
          <motion.button
            onClick={onShopClick}
            className="btn-gold gap-2"
            style={{ minHeight: 54, fontSize: '0.72rem', paddingLeft: '2.5rem', paddingRight: '2.5rem' }}
            whileTap={{ scale: 0.97 }}
          >
            Shop HICKEY <ArrowRight size={14} />
          </motion.button>
          <p className="font-sans text-cream-400" style={{ fontSize: '0.72rem', opacity: 0.4 }}>
            ₹599 · Free shipping · Ships within 24h
          </p>
        </motion.div>
      </div>
    </section>
  );
}
