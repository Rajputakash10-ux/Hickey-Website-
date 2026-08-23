import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STATS = [
  { value: '14K+', label: 'Happy Couples', icon: '💑' },
  { value: '60g', label: 'Dark Chocolate', icon: '🍫' },
  { value: '24h', label: 'Dispatch Time', icon: '🚚' },
];

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

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-3 mb-16 lg:mb-20"
          style={{
            border: '1px solid rgba(201,164,92,0.15)',
            background: 'linear-gradient(135deg, rgba(64,35,75,0.5) 0%, rgba(22,13,30,0.8) 100%)',
          }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.1 }}
              className="relative flex flex-col items-center justify-center gap-2 py-8 px-4"
              style={{
                borderRight: i < 2 ? '1px solid rgba(201,164,92,0.1)' : 'none',
              }}
            >
              {/* Glow dot top */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2"
                style={{
                  width: 40, height: 1,
                  background: 'linear-gradient(to right, transparent, rgba(201,164,92,0.5), transparent)',
                }}
              />

              <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>{stat.icon}</span>

              <motion.span
                className="font-serif text-gold-400 font-light"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              >
                {stat.value}
              </motion.span>

              <span
                className="font-sans text-cream-400 text-center uppercase tracking-widest"
                style={{ fontSize: '0.55rem', opacity: 0.5, letterSpacing: '0.18em' }}
              >
                {stat.label}
              </span>

              {/* Glow dot bottom */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                style={{
                  width: 40, height: 1,
                  background: 'linear-gradient(to right, transparent, rgba(201,164,92,0.3), transparent)',
                }}
              />
            </motion.div>
          ))}
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
