import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FEATURES = [
  'Premium dark chocolate',
  'Intimacy-focused brand experience',
  'Free scratch card with every pack',
  'Designed for couples',
  'Discreet premium packaging',
  'Giftable experience',
];

const COMPARISON = [
  { label: 'Ordinary chocolate', value: 'Eat it.' },
  { label: 'HICKEY', value: 'Experience it together.' },
];

export default function WhyHickey() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="why-hickey"
      ref={ref as React.RefObject<HTMLElement>}
      className="overflow-hidden"
      style={{ background: '#321D3D', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
      aria-label="Why HICKEY"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Comparison */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="section-label">The Difference</span>
              <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
                Not just<br />a chocolate.
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {COMPARISON.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="flex flex-col gap-2 p-6"
                  style={{
                    border: `1px solid ${i === 1 ? 'rgba(201,164,92,0.25)' : 'rgba(201,164,92,0.06)'}`,
                    background: i === 1 ? 'rgba(201,164,92,0.05)' : 'rgba(22,13,30,0.3)',
                  }}
                >
                  <div className="flex items-center gap-2">
                    {i === 0 ? (
                      <X size={13} style={{ color: 'rgba(244,237,227,0.3)', flexShrink: 0 }} />
                    ) : (
                      <Check size={13} style={{ color: 'var(--color-gold-500)', flexShrink: 0 }} />
                    )}
                    <span
                      className="font-sans text-[0.62rem] tracking-widest uppercase font-semibold"
                      style={{ color: i === 1 ? 'var(--color-gold-500)' : 'rgba(244,237,227,0.35)' }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <p
                    className="font-serif"
                    style={{
                      fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                      color: i === 1 ? 'var(--color-cream-100)' : 'rgba(244,237,227,0.3)',
                      fontStyle: i === 1 ? 'italic' : 'normal',
                    }}
                  >
                    "{item.value}"
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <p className="font-sans text-cream-300 opacity-70 leading-relaxed" style={{ fontSize: '0.95rem' }}>
              HICKEY is a complete experience — from the moment you unwrap it to the moment you scratch the card. Every detail is intentional.
            </p>

            <div className="flex flex-col gap-3">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-4 py-3.5 px-4"
                  style={{ border: '1px solid rgba(201,164,92,0.1)', background: 'rgba(22,13,30,0.2)' }}
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(201,164,92,0.12)', border: '1px solid rgba(201,164,92,0.25)' }}
                  >
                    <Check size={10} style={{ color: 'var(--color-gold-500)' }} />
                  </div>
                  <span className="font-sans text-sm text-cream-200" style={{ opacity: 0.85 }}>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
