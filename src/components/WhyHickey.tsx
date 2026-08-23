import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BENEFITS = [
  {
    icon: '🍫',
    title: 'Premium Dark Chocolate',
    desc: 'Crafted with rare botanicals — Maca, Ashwagandha, Damiana and more.',
  },
  {
    icon: '🎴',
    title: 'Free Scratch Card',
    desc: 'A Secret Position Scratch Card included in every single pack.',
  },
  {
    icon: '💝',
    title: 'Designed for Couples',
    desc: 'Every detail is intentional — from the ritual to the reveal.',
  },
  {
    icon: '📦',
    title: 'Discreet Packaging',
    desc: 'Plain outer box. Premium experience inside. Ships across India.',
  },
];

export default function WhyHickey() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="why-hickey"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: '#FFFDF9', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="section-label">Why HICKEY</span>
          <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
            Why HICKEY?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(184,134,11,0.06)' }}>
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4 p-8"
              style={{ background: '#FFFDF9' }}
            >
              <span style={{ fontSize: '1.75rem' }} aria-hidden="true">{b.icon}</span>
              <div>
                <h3 className="font-serif text-lg text-choc-900" style={{ lineHeight: 1.3 }}>{b.title}</h3>
                <p className="font-sans text-sm text-choc-700 mt-2 leading-relaxed" style={{ opacity: 0.6 }}>{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
