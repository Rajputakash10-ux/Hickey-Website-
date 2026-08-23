import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Lock, Package, Truck, Mail } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FAQ_ITEMS } from '../data';

function FAQItem({ question, answer, isOpen, onToggle, index }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      style={{
        borderBottom: '1px solid rgba(184,134,11,0.1)',
        background: isOpen ? 'rgba(184,134,11,0.025)' : 'transparent',
        transition: 'background 0.3s ease',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 px-4 text-left group"
        aria-expanded={isOpen}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        {/* Number + question */}
        <div className="flex items-center gap-4">
          <span
            className="font-serif font-light flex-shrink-0"
            style={{ fontSize: '0.75rem', color: 'rgba(184,134,11,0.35)', minWidth: 20 }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className="font-serif font-normal text-choc-900 group-hover:text-gold-400 transition-colors duration-200"
            style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)' }}
          >
            {question}
          </span>
        </div>

        <motion.span
          className="flex-shrink-0 w-7 h-7 flex items-center justify-center"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            border: `1px solid ${isOpen ? 'rgba(184,134,11,0.5)' : 'rgba(184,134,11,0.2)'}`,
            background: isOpen ? 'rgba(184,134,11,0.12)' : 'transparent',
            color: isOpen ? 'var(--color-gold-500)' : 'rgba(184,134,11,0.4)',
            transition: 'background 0.2s, border-color 0.2s',
          }}
          aria-hidden="true"
        >
          {isOpen ? <Minus size={11} /> : <Plus size={11} />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-4 pb-5" style={{ paddingLeft: 'calc(1rem + 20px + 1rem)' }}>
              {/* Gold left accent */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-px self-stretch" style={{ background: 'linear-gradient(to bottom, var(--color-gold-500), transparent)', opacity: 0.4 }} />
                <p className="font-sans text-sm text-choc-700 leading-relaxed" style={{ opacity: 0.7 }}>
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const TRUST = [
  { icon: Lock, label: 'Secure Checkout', sub: 'SSL encrypted' },
  { icon: Package, label: 'Discreet Packaging', sub: 'Plain outer box' },
  { icon: Truck, label: '3–4 Business Days', sub: 'Pan India delivery' },
  { icon: Mail, label: 'support@hickey.co.in', sub: 'We reply within 24h' },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollReveal();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="overflow-hidden relative"
      style={{ background: '#FDF6EC', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
      aria-label="Frequently asked questions"
    >
      {/* Subtle bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 15% 50%, rgba(184,134,11,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1 flex flex-col gap-0"
          >
            <span className="section-label">FAQ</span>
            <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
              Questions<br />answered.
            </h2>
            <p className="font-sans text-choc-700 opacity-55 leading-relaxed mt-4" style={{ fontSize: '0.88rem' }}>
              Everything you need to know about HICKEY.
            </p>

            {/* Divider */}
            <div className="mt-8 mb-8" style={{ height: 1, background: 'linear-gradient(to right, rgba(184,134,11,0.3), transparent)' }} />

            {/* Trust cards */}
            <div className="grid grid-cols-1 gap-3">
              {TRUST.map(({ icon: Icon, label, sub }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3 p-3"
                  style={{
                    border: '1px solid rgba(184,134,11,0.12)',
                    background: 'rgba(255,253,249,0.7)',
                  }}
                >
                  <div
                    className="flex items-center justify-center flex-shrink-0"
                    style={{ width: 32, height: 32, background: 'rgba(184,134,11,0.08)', border: '1px solid rgba(184,134,11,0.15)' }}
                  >
                    <Icon size={13} style={{ color: 'var(--color-gold-500)' }} />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-choc-900" style={{ fontSize: '0.7rem', letterSpacing: '0.04em' }}>{label}</p>
                    <p className="font-sans text-choc-600" style={{ fontSize: '0.62rem', opacity: 0.45 }}>{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
            style={{ borderTop: '1px solid rgba(184,134,11,0.12)' }}
          >
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
                index={i}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
