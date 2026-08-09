import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STEPS = [
  { num: '01', title: 'Discover', desc: 'Browse curated sensory products and rituals designed for two.' },
  { num: '02', title: 'Receive', desc: 'Your kit arrives beautifully packaged, ready to unwrap together.' },
  { num: '03', title: 'Experience', desc: 'Follow the ritual, play the game, share the moment.' },
  { num: '04', title: 'Belong', desc: 'Join the community of couples rewriting date night.' },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 lg:py-36 overflow-hidden"
      style={{ background: 'var(--color-ink-900)' }}
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 lg:mb-20 max-w-2xl"
        >
          <span className="section-label">How It Works</span>
          <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2rem, 7vw, 3.8rem)' }}>
            Your world of date night,<br />designed beautifully.
          </h2>
        </motion.div>

        {/* Mobile: vertical storytelling */}
        <div className="flex flex-col lg:hidden">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: -24 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex gap-5 py-7"
              style={{ borderBottom: i < STEPS.length - 1 ? '1px solid rgba(201,163,90,0.08)' : 'none' }}
            >
              <div className="flex flex-col items-center flex-shrink-0" style={{ width: 48 }}>
                <span
                  className="font-serif font-light leading-none"
                  style={{ fontSize: '3.5rem', color: 'rgba(201,163,90,0.15)', lineHeight: 1 }}
                >
                  {step.num}
                </span>
                {i < STEPS.length - 1 && (
                  <div className="flex-1 w-px mt-3" style={{ background: 'rgba(201,163,90,0.08)', minHeight: 24 }} />
                )}
              </div>
              <div className="flex flex-col gap-1.5 pt-1">
                <h3 className="font-serif text-xl font-normal text-cream-100">{step.title}</h3>
                <p className="font-sans text-sm text-cream-300 opacity-60 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: 4-col grid */}
        <div className="hidden lg:grid grid-cols-4 gap-px" style={{ background: 'rgba(201,163,90,0.08)' }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 32 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="p-8 lg:p-10 flex flex-col gap-5"
              style={{ background: 'var(--color-ink-900)' }}
            >
              <span
                className="font-serif font-light leading-none"
                style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', color: 'rgba(201,163,90,0.12)' }}
              >
                {step.num}
              </span>
              <div>
                <h3 className="font-serif text-2xl font-normal text-cream-100">{step.title}</h3>
                <p className="font-sans text-sm text-cream-300 opacity-60 leading-relaxed mt-2">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
