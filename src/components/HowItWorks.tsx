import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STEPS = [
  {
    num: '01',
    title: 'Order Your HICKEY',
    desc: 'Choose your quantity and place your order. Arrives in discreet, premium packaging.',
  },
  {
    num: '02',
    title: 'Share the Chocolate',
    desc: 'Open it together. Savour the rich dark chocolate and let the moment slow down.',
  },
  {
    num: '03',
    title: 'Scratch & Reveal',
    desc: 'Use the free Secret Position Scratch Card included in every pack. Let the evening unfold.',
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="how-it-works"
      ref={ref as React.RefObject<HTMLElement>}
      className="overflow-hidden"
      style={{ background: '#24152F', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
      aria-label="How it works"
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 lg:mb-20"
        >
          <span className="section-label">Simple</span>
          <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
            How it works.
          </h2>
        </motion.div>

        {/* Mobile: vertical */}
        <div className="flex flex-col lg:hidden">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -24 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex gap-6 py-8"
              style={{ borderBottom: i < STEPS.length - 1 ? '1px solid rgba(201,164,92,0.08)' : 'none' }}
            >
              <div className="flex flex-col items-center flex-shrink-0" style={{ width: 52 }}>
                <span
                  className="font-serif font-light"
                  style={{ fontSize: '4rem', color: 'rgba(201,164,92,0.15)', lineHeight: 1 }}
                >
                  {step.num}
                </span>
                {i < STEPS.length - 1 && (
                  <div className="flex-1 w-px mt-3" style={{ background: 'rgba(201,164,92,0.08)', minHeight: 24 }} />
                )}
              </div>
              <div className="flex flex-col gap-2 pt-1">
                <h3 className="font-serif text-xl font-normal text-cream-100">{step.title}</h3>
                <p className="font-sans text-sm text-cream-300 opacity-60 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: 3-col */}
        <div className="hidden lg:grid grid-cols-3 gap-px" style={{ background: 'rgba(201,164,92,0.06)' }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 32 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-10 lg:p-12 flex flex-col gap-6"
              style={{ background: '#24152F' }}
            >
              <span
                className="font-serif font-light"
                style={{ fontSize: 'clamp(5rem, 9vw, 8rem)', color: 'rgba(201,164,92,0.1)', lineHeight: 1 }}
              >
                {step.num}
              </span>
              <div>
                <h3 className="font-serif text-2xl font-normal text-cream-100">{step.title}</h3>
                <p className="font-sans text-sm text-cream-300 opacity-60 leading-relaxed mt-3">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-12"
        >
          <Link to="/shop" className="btn-primary gap-2" style={{ minHeight: 50, fontSize: '0.68rem' }}>
            Order Your HICKEY <ArrowRight size={13} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
