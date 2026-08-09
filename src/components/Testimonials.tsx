import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { REVIEWS } from '../data';

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({ left: dir === 'right' ? cardWidth : -cardWidth, behavior: 'smooth' });
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 lg:py-32 overflow-hidden"
      style={{ background: 'var(--color-ink-900)' }}
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-10 lg:mb-12 gap-6"
        >
          <div>
            <span className="section-label">Reviews</span>
            <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2rem, 7vw, 3.5rem)' }}>
              Real couples,<br />real evenings.
            </h2>
          </div>
          <div className="hidden sm:flex gap-2 flex-shrink-0">
            <button onClick={() => scroll('left')} aria-label="Previous reviews" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ border: '1px solid rgba(201,163,90,0.2)', color: 'var(--color-cream-300)' }}>
              <ChevronLeft size={16} />
            </button>
            <button onClick={() => scroll('right')} aria-label="Next reviews" className="w-10 h-10 rounded-full flex items-center justify-center transition-colors" style={{ border: '1px solid rgba(201,163,90,0.2)', color: 'var(--color-cream-300)' }}>
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Carousel — full bleed on mobile for snap effect */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-none"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          gap: '1rem',
          paddingLeft: 'max(1.25rem, env(safe-area-inset-left))',
          paddingRight: 'max(1.25rem, env(safe-area-inset-right))',
        }}
      >
        {REVIEWS.map((review, i) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-shrink-0 flex flex-col gap-5 p-6 sm:p-7"
            style={{
              width: 'min(calc(100vw - 2.5rem), 360px)',
              scrollSnapAlign: 'start',
              border: '1px solid rgba(201,163,90,0.1)',
              background: 'var(--color-ink-800)',
            }}
          >
            <div className="flex gap-1">
              {[...Array(review.rating)].map((_, j) => (
                <Star key={j} size={12} className="fill-gold-500 text-gold-500" />
              ))}
            </div>
            <p className="font-serif text-base font-normal text-cream-200 leading-relaxed opacity-85 flex-1">
              "{review.text}"
            </p>
            <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(201,163,90,0.08)' }}>
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-sans text-xs font-semibold text-cream-100" style={{ background: 'var(--color-wine-800)', border: '1px solid var(--color-wine-700)' }}>
                {review.initials}
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-cream-200">{review.name}</p>
                <p className="font-sans text-[10px] text-cream-400 opacity-50">{review.city} · {review.product}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
