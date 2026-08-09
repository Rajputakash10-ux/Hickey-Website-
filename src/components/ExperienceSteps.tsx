import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STEPS = [
  {
    num: '01',
    title: 'Open',
    desc: 'Open your HICKEY. The packaging is part of the ritual — take a moment to appreciate it together.',
    img: '/src/assets/hickey-1.png',
    imgAlt: 'Opening HICKEY Intimacy Dark Chocolate',
  },
  {
    num: '02',
    title: 'Indulge',
    desc: 'Enjoy the dark chocolate together. Let the warmth of the ingredients settle in. Slow down.',
    img: '/src/assets/hickey-3.png',
    imgAlt: 'HICKEY dark chocolate pieces',
  },
  {
    num: '03',
    title: 'Reveal',
    desc: 'Scratch the included card and reveal your secret position. Let the evening take its own direction.',
    img: '/src/assets/hickey-4.png',
    imgAlt: 'HICKEY Secret Position Scratch Card',
  },
];

export default function ExperienceSteps() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="overflow-hidden"
      style={{ background: '#321D3D', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
      aria-label="The HICKEY experience"
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 lg:mb-20"
        >
          <span className="section-label">The Experience</span>
          <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
            A chocolate ritual<br />
            <em style={{ fontStyle: 'italic', color: 'var(--color-gold-400)' }}>for two.</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px" style={{ background: 'rgba(201,164,92,0.06)' }}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 32 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="flex flex-col gap-6 p-8 lg:p-10"
              style={{ background: '#321D3D' }}
            >
              {/* Step image */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: '1/1', background: '#40234B', border: '1px solid rgba(201,164,92,0.1)' }}
              >
                <img
                  src={step.img}
                  alt={step.imgAlt}
                  className="w-full h-full object-contain p-6"
                  loading="lazy"
                />
                {/* Step number overlay */}
                <div className="absolute top-3 left-3">
                  <span
                    className="font-serif font-light"
                    style={{ fontSize: '4rem', color: 'rgba(201,164,92,0.15)', lineHeight: 1 }}
                  >
                    {step.num}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-sans text-[0.6rem] tracking-widest uppercase text-gold-500 font-semibold">
                    Step {step.num}
                  </span>
                  <div className="flex-1 h-px" style={{ background: 'rgba(201,164,92,0.15)' }} />
                </div>
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
