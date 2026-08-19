import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ScratchCardFeature() {
  const { ref, isVisible } = useScrollReveal();
  const [hovered, setHovered] = useState(false);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="overflow-hidden relative"
      style={{
        background: 'linear-gradient(135deg, #160D1E 0%, #24152F 60%, #2A1713 100%)',
        paddingTop: 'clamp(4rem, 10vw, 7rem)',
        paddingBottom: 'clamp(4rem, 10vw, 7rem)',
      }}
      aria-label="Secret Position Scratch Card"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(201,164,92,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Scratch card visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center order-2 lg:order-1"
          >
            <div className="relative" style={{ maxWidth: 380, width: '100%' }}>
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(201,164,92,0.15) 0%, transparent 70%)', filter: 'blur(30px)', transform: 'scale(1.2)' }}
                aria-hidden="true"
              />

              <motion.div
                className="relative cursor-pointer overflow-hidden"
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                animate={hovered ? { scale: 1.03 } : { scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{ filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.6))', border: '1px solid rgba(201,164,92,0.15)' }}
              >
                <img
                  src="/assets/hickey-scratch.jpg"
                  alt="HICKEY Secret Position Scratch Card — free with every pack"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: '3/4', objectPosition: 'center' }}
                />
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={hovered ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ background: 'linear-gradient(135deg, transparent 30%, rgba(201,164,92,0.12) 50%, transparent 70%)' }}
                  aria-hidden="true"
                />
              </motion.div>

              <motion.div
                className="absolute flex flex-col items-center justify-center rounded-full"
                style={{
                  top: -16, right: -16,
                  width: 72, height: 72,
                  background: 'var(--color-gold-500)',
                  border: '3px solid rgba(244,237,227,0.2)',
                  boxShadow: '0 8px 24px rgba(201,164,92,0.4)',
                }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="font-sans font-bold text-center leading-tight" style={{ fontSize: '0.5rem', letterSpacing: '0.08em', color: '#160D1E', textTransform: 'uppercase' }}>
                  FREE<br />WITH<br />EVERY<br />PACK
                </span>
              </motion.div>

              <motion.p
                className="text-center font-sans mt-4"
                animate={hovered ? { opacity: 1 } : { opacity: 0.4 }}
                style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-gold-500)', textTransform: 'uppercase' }}
              >
                {hovered ? 'Scratch to reveal...' : 'Hover to feel it'}
              </motion.p>
            </div>
          </motion.div>

          {/* Right — Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-7 order-1 lg:order-2"
          >
            <div>
              <span className="section-label">Included Free</span>
              <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
                Your chocolate<br />
                has a{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--color-gold-400)' }}>secret.</em>
              </h2>
            </div>

            <p className="font-sans text-cream-300 leading-relaxed max-w-md" style={{ fontSize: '0.95rem', opacity: 0.75 }}>
              Every HICKEY pack comes with a FREE Secret Position Scratch Card. It's not an add-on. It's not extra. It's part of the experience.
            </p>

            <div className="flex flex-col gap-4">
              {[
                { step: 'Scratch', desc: 'Scratch the silver surface together.' },
                { step: 'Reveal', desc: 'Discover your secret position.' },
                { step: 'Connect', desc: 'Let the evening take its own direction.' },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0 font-sans font-bold"
                    style={{ width: 36, height: 36, background: 'rgba(201,164,92,0.1)', border: '1px solid rgba(201,164,92,0.25)', fontSize: '0.65rem', color: 'var(--color-gold-500)', letterSpacing: '0.05em' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <span className="font-serif text-base text-cream-100">{item.step}. </span>
                    <span className="font-sans text-sm text-cream-300 opacity-60">{item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/shop" className="btn-gold gap-2 self-start" style={{ minHeight: 50, fontSize: '0.68rem' }}>
              Reveal the Experience <ArrowRight size={13} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
