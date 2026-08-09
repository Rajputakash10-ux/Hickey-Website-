import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STEPS = [
  { num: '01', title: 'Order', desc: 'Place your order. Arrives in discreet, premium packaging within 24–48h.' },
  { num: '02', title: 'Share', desc: 'Open it together. Savour the rich dark chocolate and let the moment slow down.' },
  { num: '03', title: 'Scratch & Reveal', desc: 'Use the free Secret Position Scratch Card. Let the evening unfold.' },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="how-it-works"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: '#1A1025', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="section-label">Simple</span>
          <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
            How it works.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ background: 'rgba(201,164,92,0.06)' }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col gap-5 p-8 lg:p-10"
              style={{ background: '#1A1025' }}
            >
              <span
                className="font-serif font-light"
                style={{ fontSize: 'clamp(4rem, 8vw, 6rem)', color: 'rgba(201,164,92,0.1)', lineHeight: 1 }}
              >
                {step.num}
              </span>
              <div>
                <h3 className="font-serif text-xl text-cream-100">{step.title}</h3>
                <p className="font-sans text-sm text-cream-300 mt-2 leading-relaxed" style={{ opacity: 0.6 }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
