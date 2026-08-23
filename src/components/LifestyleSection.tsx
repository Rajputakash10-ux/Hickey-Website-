import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function LifestyleSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{ minHeight: 'clamp(500px, 80vw, 750px)', background: '#FFFDF9' }}
      aria-label="HICKEY lifestyle"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #FFFDF9 0%, #1A0A00 45%, #FDF6EC 100%)' }}
        aria-hidden="true"
      />

      {/* Product image faded bg */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden" aria-hidden="true">
        <motion.img
          src="/assets/hickey-2.png"
          alt=""
          className="h-full w-auto object-contain"
          style={{ maxWidth: '60%', filter: 'blur(1px)' }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={isVisible ? { opacity: 0.15, scale: 1 } : {}}
          transition={{ duration: 1.4 }}
        />
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(26,10,0,0.98) 40%, rgba(26,10,0,0.35) 100%)' }}
        aria-hidden="true"
      />

      {/* Gold accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 pointer-events-none"
        style={{ width: 3, background: 'linear-gradient(to bottom, transparent, rgba(184,134,11,0.55), transparent)' }}
        aria-hidden="true"
      />

      <div className="container-site relative h-full flex items-center" style={{ paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full items-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="flex flex-col gap-8"
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
                  className="font-serif"
                  style={{
                    fontSize: 'clamp(3rem, 9vw, 7rem)',
                    lineHeight: 1.0,
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: 'var(--color-cream-50)',
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
              className="font-sans leading-relaxed max-w-sm"
              style={{ fontSize: '1rem', color: 'rgba(244,237,227,0.65)', fontWeight: 400 }}
            >
              HICKEY is designed for the moments between the ordinary — when you choose to be present, together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.65 }}
            >
              <button
                onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold gap-2"
                style={{ minHeight: 54, fontSize: '0.7rem' }}
              >
                Shop the Experience <ArrowRight size={13} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:grid grid-cols-2 gap-px"
            style={{ background: 'rgba(184,134,11,0.15)' }}
          >
            {[
              { value: '14K+', label: 'Couples', sub: 'across India' },
              { value: '4.9★', label: 'Rating', sub: '200+ reviews' },
              { value: '60g', label: 'Dark Chocolate', sub: 'premium blend' },
              { value: '24h', label: 'Ships in', sub: 'discreet packaging' },
            ].map(({ value, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="flex flex-col gap-1 p-8"
                style={{ background: 'rgba(26,10,0,0.6)', backdropFilter: 'blur(8px)' }}
              >
                <span className="font-serif font-light" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-gold-400)', lineHeight: 1 }}>{value}</span>
                <span className="font-sans font-semibold" style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(244,237,227,0.9)' }}>{label}</span>
                <span className="font-sans" style={{ fontSize: '0.65rem', color: 'rgba(244,237,227,0.35)', letterSpacing: '0.05em' }}>{sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
