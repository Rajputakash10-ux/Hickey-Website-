import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { EVENTS } from '../data';

export default function Events() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32"
      style={{ background: 'var(--color-ink-950)' }}
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="section-label">Events</span>
          <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Experiences worth<br />dressing up for.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(201,163,90,0.08)' }}>
          {EVENTS.map((event, i) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col"
              style={{ background: 'var(--color-ink-950)' }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(10,6,8,0.7) 0%, transparent 60%)' }} />
              </div>
              <div className="p-7 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-gold-500 font-semibold">{event.date}</span>
                  <span className="w-1 h-1 rounded-full bg-wine-600" />
                  <span className="font-sans text-[10px] tracking-widest uppercase text-cream-400 opacity-60">{event.location}</span>
                </div>
                <h3 className="font-serif text-xl text-cream-100 leading-snug">{event.title}</h3>
                <p className="font-sans text-sm text-cream-300 opacity-55 flex-1">{event.description}</p>
                <a
                  href={event.href}
                  className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-gold-500 hover:text-gold-400 transition-colors mt-2 group/link"
                >
                  Learn More
                  <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
