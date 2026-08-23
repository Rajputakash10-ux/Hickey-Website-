import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { INGREDIENTS } from '../data';

export default function IngredientsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="ingredients"
      ref={ref as React.RefObject<HTMLElement>}
      className="overflow-hidden"
      style={{ background: '#FDF6EC', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
      aria-label="Ingredients"
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 lg:mb-16 max-w-2xl"
        >
          <span className="section-label">What's Inside</span>
          <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
            Carefully crafted.
          </h2>
          <p className="font-sans text-choc-700 opacity-60 leading-relaxed mt-4 max-w-lg" style={{ fontSize: '0.95rem' }}>
            Selected ingredients, rich dark chocolate and an experience designed around connection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px" style={{ background: 'rgba(184,134,11,0.06)' }}>
          {INGREDIENTS.map((ing, i) => (
            <motion.article
              key={ing.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col gap-4 p-6 lg:p-7 group"
              style={{ background: '#FDF6EC' }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-full text-2xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: 'rgba(184,134,11,0.08)', border: '1px solid rgba(184,134,11,0.15)' }}
                aria-hidden="true"
              >
                {ing.icon}
              </div>

              <div>
                <h3 className="font-serif text-base font-normal text-choc-900">{ing.name}</h3>
                {ing.origin && (
                  <p className="font-sans text-[0.6rem] tracking-widest uppercase text-gold-500 mt-0.5 opacity-80">
                    {ing.origin}
                  </p>
                )}
                <p className="font-sans text-sm text-choc-700 opacity-60 leading-relaxed mt-2">
                  {ing.description}
                </p>
              </div>
            </motion.article>
          ))}

          {/* Dark chocolate base card */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: INGREDIENTS.length * 0.08 }}
            className="flex flex-col gap-4 p-6 lg:p-7"
            style={{ background: '#FDF6EC' }}
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full text-2xl"
              style={{ background: 'rgba(184,134,11,0.08)', border: '1px solid rgba(184,134,11,0.15)' }}
              aria-hidden="true"
            >
              🍫
            </div>
            <div>
              <h3 className="font-serif text-base font-normal text-choc-900">Premium Dark Chocolate</h3>
              <p className="font-sans text-[0.6rem] tracking-widest uppercase text-gold-500 mt-0.5 opacity-80">Base</p>
              <p className="font-sans text-sm text-choc-700 opacity-60 leading-relaxed mt-2">
                The foundation of every HICKEY. Rich, complex and deeply satisfying — the kind of chocolate that demands to be savoured slowly.
              </p>
            </div>
          </motion.article>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-sans text-choc-600 opacity-40 mt-8 text-center"
          style={{ fontSize: '0.72rem' }}
        >
          Not intended to diagnose, treat, cure or prevent any disease. For adults only.
        </motion.p>
      </div>
    </section>
  );
}
