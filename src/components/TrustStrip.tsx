import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BENEFITS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Crafted for Connection',
    desc: 'Made for moments shared between two.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        <path d="M8 12s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: 'Dark Chocolate Experience',
    desc: 'Rich, indulgent and intentionally crafted.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01M12 12h.01" />
      </svg>
    ),
    title: 'A Little Surprise',
    desc: 'Every pack includes a free secret-position scratch card.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="12" r="1" /><circle cx="15" cy="12" r="1" />
        <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
        <path d="M7 16.5c3.5 1 6.5 1 10 0" />
        <path d="M15.5 17c0 1-1.5 3-3.5 3s-3.5-2-3.5-3" />
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
      </svg>
    ),
    title: 'Made for Two',
    desc: 'Turn an ordinary chocolate moment into something memorable.',
  },
];

export default function TrustStrip() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 lg:py-16"
      style={{ background: '#F5E9D6', borderTop: '1px solid rgba(184,134,11,0.08)', borderBottom: '1px solid rgba(184,134,11,0.08)' }}
      aria-label="Brand benefits"
    >
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(184,134,11,0.08)' }}>
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-3 p-6 lg:p-8 group cursor-default"
              style={{ background: '#F5E9D6', transition: 'background 0.3s ease' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#EDD9B8')}
              onMouseLeave={e => (e.currentTarget.style.background = '#F5E9D6')}
            >
              <div style={{ color: 'var(--color-gold-500)', transition: 'transform 0.3s ease' }} className="group-hover:scale-110">{b.icon}</div>
              <div>
                <h3 className="font-sans font-semibold text-choc-900" style={{ fontSize: '0.78rem', letterSpacing: '0.05em' }}>
                  {b.title}
                </h3>
                <p className="font-sans text-choc-700 leading-relaxed mt-1.5" style={{ fontSize: '0.78rem', opacity: 0.6 }}>
                  {b.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
