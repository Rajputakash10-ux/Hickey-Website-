import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #160D1E 0%, #24152F 50%, #2A1713 100%)',
        paddingTop: 'clamp(5rem, 12vw, 9rem)',
        paddingBottom: 'clamp(5rem, 12vw, 9rem)',
      }}
      aria-label="Final call to action"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,164,92,0.07) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Gold border lines */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,164,92,0.3), transparent)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,164,92,0.3), transparent)' }} aria-hidden="true" />

      <div className="container-site relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center gap-8 max-w-3xl mx-auto"
        >
          <span className="section-label">Tonight</span>

          <h2 className="heading-display" style={{ fontSize: 'clamp(2.8rem, 8vw, 6rem)', lineHeight: 1.0 }}>
            Make tonight<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-gold-400)' }}>a little more</em><br />
            interesting.
          </h2>

          <p className="font-sans text-cream-300 leading-relaxed max-w-sm" style={{ fontSize: '0.95rem', opacity: 0.7 }}>
            Chocolate for the moment.<br />A surprise for the two of you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <Link
              to="/shop"
              className="btn-gold gap-2"
              style={{ minHeight: 56, fontSize: '0.72rem', padding: '0.9rem 2.5rem' }}
            >
              Shop HICKEY <ArrowRight size={14} />
            </Link>
          </div>

          <p className="font-sans text-[0.62rem] tracking-widest uppercase text-gold-500 opacity-60">
            Free Secret Position Scratch Card with Every Pack
          </p>
        </motion.div>
      </div>
    </section>
  );
}
