import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FAQ_ITEMS } from '../data';

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderBottom: '1px solid rgba(184,134,11,0.08)' }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <span className="font-serif text-base font-normal text-choc-900" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)' }}>
          {question}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{
            border: '1px solid rgba(184,134,11,0.2)',
            background: isOpen ? 'rgba(184,134,11,0.1)' : 'transparent',
            color: isOpen ? 'var(--color-gold-500)' : 'var(--color-cream-400)',
          }}
          aria-hidden="true"
        >
          {isOpen ? <Minus size={12} /> : <Plus size={12} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="font-sans text-sm text-choc-700 leading-relaxed pb-5" style={{ opacity: 0.7 }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const { ref, isVisible } = useScrollReveal();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="overflow-hidden"
      style={{ background: '#FDF6EC', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
      aria-label="Frequently asked questions"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >
            <span className="section-label">FAQ</span>
            <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
              Questions<br />answered.
            </h2>
            <p className="font-sans text-choc-700 opacity-60 leading-relaxed mt-4" style={{ fontSize: '0.9rem' }}>
              Everything you need to know about HICKEY.
            </p>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2"
            style={{ borderTop: '1px solid rgba(184,134,11,0.08)' }}
          >
            {FAQ_ITEMS.map(item => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
