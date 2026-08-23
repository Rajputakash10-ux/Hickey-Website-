import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STEPS = [
  { num: '01', title: 'Order', desc: 'Place your order. Arrives in discreet, premium packaging within 24–48h.' },
  { num: '02', title: 'Share', desc: 'Open it together. Savour the rich dark chocolate and let the moment slow down.' },
  { num: '03', title: 'Scratch & Reveal', desc: 'Use the free Secret Position Scratch Card. Let the evening unfold.' },
];

export default function ExperienceSteps() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="how-it-works"
      ref={ref as React.RefObject<HTMLElement>}
      className="overflow-hidden"
      style={{ background: '#160D1E', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
      aria-label="How it works"
    >
      <div className="container-site">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 lg:mb-16"
        >
          <span className="section-label">Simple</span>
          <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
            How it works.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ background: 'rgba(201,164,92,0.07)' }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.14 }}
              className="relative flex flex-col gap-5 p-8 lg:p-10 group"
              style={{ background: '#160D1E' }}
            >
              {/* Top gold line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(201,164,92,0.4), transparent)' }}
              />

              <span
                className="font-serif font-light"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', color: 'rgba(201,164,92,0.08)', lineHeight: 1 }}
              >
                {step.num}
              </span>

              <div>
                <h3 className="font-serif text-xl text-cream-100 mb-2">{step.title}</h3>
                <p className="font-sans text-sm text-cream-300 leading-relaxed" style={{ opacity: 0.6 }}>
                  {step.desc}
                </p>
              </div>

              {/* Gold accent bottom-left */}
              <div
                style={{
                  width: 28, height: 2,
                  background: 'var(--color-gold-500)',
                  opacity: 0.4,
                }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
