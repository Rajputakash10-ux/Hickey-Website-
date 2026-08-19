import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{ background: '#160D1E', paddingTop: 'clamp(5rem, 14vw, 10rem)', paddingBottom: 'clamp(5rem, 14vw, 10rem)' }}
    >
      {/* Background orbs */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(64,35,75,0.45) 0%, transparent 65%)' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute pointer-events-none"
        style={{ width: 400, height: 400, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(201,164,92,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      <div className="container-site relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-7 max-w-2xl mx-auto"
        >
          <span className="section-label">Tonight</span>

          {/* Gold divider line */}
          <motion.div
            style={{ height: 1, background: 'linear-gradient(to right, transparent, var(--color-gold-500), transparent)' }}
            initial={{ width: 0 }}
            animate={isVisible ? { width: '120px' } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <h2
            className="heading-display"
            style={{ fontSize: 'clamp(2.4rem, 8vw, 5rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}
          >
            Make tonight<br />
            a little{' '}
            <em style={{ color: 'var(--color-gold-400)', fontStyle: 'italic' }}>more interesting.</em>
          </h2>

          <p className="font-sans text-cream-300 leading-relaxed max-w-md" style={{ fontSize: '1rem', opacity: 0.6 }}>
            Premium dark chocolate. Free scratch card. Discreet delivery across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/shop"
                className="btn-gold gap-2"
                style={{ minHeight: 56, fontSize: '0.72rem', paddingLeft: '2.5rem', paddingRight: '2.5rem', display: 'inline-flex', alignItems: 'center' }}
              >
                <ShoppingBag size={15} />
                Shop HICKEY <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {['₹599 only', 'Free shipping', 'Ships within 24h', 'Discreet packaging'].map((item, i) => (
              <span key={i} className="flex items-center gap-1.5 font-sans text-cream-400" style={{ fontSize: '0.72rem', opacity: 0.45 }}>
                <span style={{ color: 'var(--color-gold-500)', opacity: 0.6 }}>·</span>
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
