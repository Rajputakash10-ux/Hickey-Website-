import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SLIDES = [
  { img: '/assets/neimage/file_000000004118820b84c9a2baedfca2d6.png', alt: 'HICKEY product — ingredients' },
  { img: '/assets/neimage/file_00000000823c820b94eb679898635077.png', alt: 'HICKEY product — front view' },
  { img: '/assets/neimage/file_000000002914820bb4d33fa9e2d3e9ca.png', alt: 'HICKEY product — detail' },
  { img: '/assets/neimage/file_000000002e64820b860bf6a5eb1ebb67.png', alt: 'HICKEY product — lifestyle' },
  { img: '/assets/etx-1.png', alt: 'HICKEY product — packaging' },
  { img: '/assets/etx-2.png', alt: 'HICKEY product — ingredients' },
  { img: '/assets/etx-3.png', alt: 'HICKEY product — experience' },
  { img: '/assets/etx-4.png', alt: 'HICKEY product — experience' },
];

const STATS = [
  { value: '14K+', label: 'Happy Couples' },
  { value: '4.9★', label: 'Avg Rating' },
  { value: '60g', label: 'Dark Chocolate' },
  { value: '24h', label: 'Dispatch Time' },
];

const STEPS = [
  { num: '01', title: 'Order', desc: 'Place your order. Arrives in discreet, premium packaging within 24–48h.' },
  { num: '02', title: 'Share', desc: 'Open it together. Savour the rich dark chocolate and let the moment slow down.' },
  { num: '03', title: 'Scratch & Reveal', desc: 'Use the free Secret Position Scratch Card. Let the evening unfold.' },
];

export default function ExperienceSteps() {
  const { ref, isVisible } = useScrollReveal();
  const [activeImg, setActiveImg] = useState(0);

  return (
    <section
      id="how-it-works"
      ref={ref as React.RefObject<HTMLElement>}
      className="overflow-hidden"
      style={{ background: '#321D3D', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — image gallery + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            {/* Main image */}
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '4/5', background: '#40234B', border: '1px solid rgba(201,164,92,0.12)' }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={SLIDES[activeImg].img}
                  alt={SLIDES[activeImg].alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  loading="lazy"
                />
              </AnimatePresence>
              {/* Slide counter */}
              <div
                className="absolute bottom-3 right-3 font-sans"
                style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(244,237,227,0.5)', background: 'rgba(22,13,30,0.7)', padding: '4px 8px' }}
              >
                {String(activeImg + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
              </div>
              {/* Alt label */}
              <div
                className="absolute bottom-3 left-3 font-sans"
                style={{ fontSize: '0.55rem', letterSpacing: '0.12em', color: 'rgba(244,237,227,0.45)', background: 'rgba(22,13,30,0.7)', padding: '4px 8px', textTransform: 'uppercase' }}
              >
                {SLIDES[activeImg].alt}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
              {SLIDES.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  aria-label={`View ${s.alt}`}
                  className="flex-shrink-0 overflow-hidden transition-all duration-200"
                  style={{
                    width: 52, height: 52,
                    border: `1px solid ${i === activeImg ? 'var(--color-gold-500)' : 'rgba(201,164,92,0.12)'}`,
                    background: '#40234B',
                    opacity: i === activeImg ? 1 : 0.5,
                    boxShadow: i === activeImg ? '0 0 8px rgba(201,164,92,0.3)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <img src={s.img} alt={s.alt} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>

            {/* Stats box */}
            <div className="grid grid-cols-4 gap-px mt-2" style={{ background: 'rgba(201,164,92,0.08)' }}>
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                  className="flex flex-col items-center justify-center py-4 px-2"
                  style={{ background: '#321D3D' }}
                >
                  <span className="font-serif text-gold-400 font-light" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', lineHeight: 1 }}>{stat.value}</span>
                  <span className="font-sans text-cream-400 text-center mt-1" style={{ fontSize: '0.55rem', letterSpacing: '0.1em', opacity: 0.55, textTransform: 'uppercase' }}>{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col gap-10 lg:pt-4"
          >
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="flex gap-6 items-start"
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center font-serif font-light"
                  style={{
                    width: 58, height: 58,
                    border: '1px solid rgba(201,164,92,0.2)',
                    background: 'rgba(201,164,92,0.05)',
                    fontSize: '1.5rem',
                    color: 'rgba(201,164,92,0.5)',
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </div>
                <div className="flex flex-col gap-1.5 pt-1">
                  <h3 className="font-serif text-xl text-cream-100">{step.title}</h3>
                  <p className="font-sans text-sm text-cream-300 leading-relaxed" style={{ opacity: 0.6 }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
