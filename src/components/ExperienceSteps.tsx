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
      style={{ background: '#FFFDF9', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ background: 'rgba(184,134,11,0.09)' }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.14 }}
              className="relative flex flex-col gap-5 p-8 lg:p-10 group cursor-default"
              style={{ background: '#FFFDF9', transition: 'background 0.35s ease' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#FDF6EC')}
              onMouseLeave={e => (e.currentTarget.style.background = '#FFFDF9')}
            >
              {/* Top gold line — expands on hover */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(184,134,11,0.55), transparent)', transformOrigin: 'center', scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(to right, transparent, rgba(184,134,11,0.18), transparent)' }}
              />

              <span
                className="font-serif font-light"
                style={{ fontSize: 'clamp(3.5rem, 7vw, 5.5rem)', color: 'rgba(184,134,11,0.1)', lineHeight: 1, transition: 'color 0.35s ease' }}
              >
                {step.num}
              </span>

              <div>
                <h3 className="font-serif text-xl text-choc-900 mb-2">{step.title}</h3>
                <p className="font-sans text-sm text-choc-700 leading-relaxed" style={{ opacity: 0.6 }}>
                  {step.desc}
                </p>
              </div>

              {/* Gold accent bottom-left — expands on hover */}
              <div
                className="group-hover:w-14 transition-all duration-500"
                style={{
                  width: 28, height: 2,
                  background: 'linear-gradient(to right, var(--color-gold-500), rgba(184,134,11,0.3))',
                  opacity: 0.5,
                }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
