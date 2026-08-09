import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { REVIEWS } from '../data';

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector('[data-card]') as HTMLElement;
    const w = card ? card.offsetWidth + 16 : scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({ left: dir === 'right' ? w : -w, behavior: 'smooth' });
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="overflow-hidden"
      style={{ background: '#321D3D', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
      aria-label="Customer reviews"
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-10 lg:mb-14 gap-6"
        >
          <div>
            <span className="section-label">Reviews</span>
            <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
              Real couples,<br />real moments.
            </h2>
          </div>
          <div className="hidden sm:flex gap-2 flex-shrink-0">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous reviews"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ border: '1px solid rgba(201,164,92,0.2)', color: 'var(--color-cream-300)' }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next reviews"
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ border: '1px solid rgba(201,164,92,0.2)', color: 'var(--color-cream-300)' }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-none"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          gap: '1rem',
          paddingLeft: 'max(1.5rem, calc((100vw - 1400px) / 2 + 4rem))',
          paddingRight: 'max(1.5rem, calc((100vw - 1400px) / 2 + 4rem))',
        }}
      >
        {REVIEWS.map((review, i) => (
          <motion.article
            key={review.id}
            data-card
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-shrink-0 flex flex-col gap-5 p-7"
            style={{
              width: 'min(calc(100vw - 3rem), 340px)',
              scrollSnapAlign: 'start',
              border: '1px solid rgba(201,164,92,0.1)',
              background: '#40234B',
            }}
          >
            {/* Stars */}
            <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
              {[...Array(review.rating)].map((_, j) => (
                <svg key={j} width="12" height="12" viewBox="0 0 24 24" fill="var(--color-gold-500)" aria-hidden="true">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
            </div>

            <blockquote className="font-serif text-base font-normal text-cream-200 leading-relaxed flex-1" style={{ opacity: 0.9 }}>
              "{review.text}"
            </blockquote>

            <footer
              className="flex items-center gap-3 pt-4"
              style={{ borderTop: '1px solid rgba(201,164,92,0.08)' }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-sans text-xs font-semibold text-cream-100"
                style={{ background: '#321D3D', border: '1px solid rgba(201,164,92,0.2)' }}
                aria-hidden="true"
              >
                {review.initials}
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-cream-200">{review.name}</p>
                <p className="font-sans text-[10px] text-cream-400 opacity-50">{review.city} · {review.date}</p>
              </div>
            </footer>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
