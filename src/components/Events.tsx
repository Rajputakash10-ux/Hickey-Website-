import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { EVENTS } from '../data';

export default function Events() {
  const { ref, isVisible } = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 lg:py-32 overflow-hidden"
      style={{ background: '#24152F' }}
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 lg:mb-14"
        >
          <span className="section-label">Events</span>
        </motion.div>
      </div>

      {/* Mobile: horizontal swipeable carousel */}
      <div
        ref={scrollRef}
        className="flex lg:hidden gap-4 overflow-x-auto scrollbar-none px-5"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          paddingRight: '1.25rem',
        }}
      >
        {EVENTS.map((event, i) => (
          <motion.article
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-shrink-0 flex flex-col overflow-hidden"
            style={{
              width: 'min(80vw, 320px)',
              scrollSnapAlign: 'start',
              background: '#321D3D',
              border: '1px solid rgba(201,164,92,0.1)',
            }}
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(10,6,8,0.7) 0%, transparent 60%)' }} />
            </div>
            <div className="p-5 flex flex-col gap-2.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-sans text-[10px] tracking-widest uppercase text-gold-500 font-semibold">{event.date}</span>
                <span className="w-1 h-1 rounded-full" style={{ background: '#523060' }} />
                <span className="font-sans text-[10px] tracking-widest uppercase text-cream-400 opacity-60">{event.location}</span>
              </div>
              <h3 className="font-serif text-lg text-cream-100 leading-snug">{event.title}</h3>
              <p className="font-sans text-sm text-cream-300 opacity-55 flex-1 leading-relaxed">{event.description}</p>
              <a href={event.href} className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-gold-500 mt-2">
                Learn More <ArrowRight size={11} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="container-site">
        <div className="hidden lg:grid grid-cols-3 gap-px" style={{ background: 'rgba(201,164,92,0.08)' }}>
          {EVENTS.map((event, i) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col"
              style={{ background: '#24152F' }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(10,6,8,0.7) 0%, transparent 60%)' }} />
              </div>
              <div className="p-7 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-gold-500 font-semibold">{event.date}</span>
                  <span className="w-1 h-1 rounded-full bg-plum-600" />
                  <span className="font-sans text-[10px] tracking-widest uppercase text-cream-400 opacity-60">{event.location}</span>
                </div>
                <h3 className="font-serif text-xl text-cream-100 leading-snug">{event.title}</h3>
                <p className="font-sans text-sm text-cream-300 opacity-55 flex-1">{event.description}</p>
                <a href={event.href} className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-gold-500 hover:text-gold-400 transition-colors mt-2 group/link">
                  Learn More <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
