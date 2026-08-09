import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { REVIEWS } from '../data';

const TOP_REVIEWS = REVIEWS.slice(0, 3);

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: '#160D1E', paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: 'clamp(4rem, 10vw, 7rem)' }}
      aria-label="Customer reviews"
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Reviews</span>
          <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
            Real couples,<br />real moments.
          </h2>
        </motion.div>
      </div>

      {/* Mobile: swipeable */}
      <div
        ref={scrollRef}
        className="flex lg:hidden overflow-x-auto scrollbar-none gap-4"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          paddingLeft: 'max(1.5rem, calc((100vw - 1400px) / 2 + 1.5rem))',
          paddingRight: 'max(1.5rem, calc((100vw - 1400px) / 2 + 1.5rem))',
        }}
      >
        {TOP_REVIEWS.map((review, i) => (
          <motion.article
            key={review.id}
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex-shrink-0 flex flex-col gap-4 p-6"
            style={{
              width: 'min(calc(100vw - 3rem), 300px)',
              scrollSnapAlign: 'start',
              border: '1px solid rgba(201,164,92,0.1)',
              background: '#1A1025',
            }}
          >
            <ReviewContent review={review} />
          </motion.article>
        ))}
      </div>

      {/* Desktop: 3-col grid */}
      <div className="container-site hidden lg:block">
        <div className="grid grid-cols-3 gap-px" style={{ background: 'rgba(201,164,92,0.06)' }}>
          {TOP_REVIEWS.map((review, i) => (
            <motion.article
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-4 p-8"
              style={{ background: '#160D1E' }}
            >
              <ReviewContent review={review} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewContent({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <>
      <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
        {[...Array(review.rating)].map((_, j) => (
          <svg key={j} width="11" height="11" viewBox="0 0 24 24" fill="var(--color-gold-500)" aria-hidden="true">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
        ))}
      </div>
      <blockquote className="font-serif text-base text-cream-200 leading-relaxed flex-1" style={{ opacity: 0.9 }}>
        "{review.text}"
      </blockquote>
      <footer className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid rgba(201,164,92,0.08)' }}>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-sans text-xs font-semibold text-cream-100"
          style={{ background: '#321D3D', border: '1px solid rgba(201,164,92,0.15)' }}
          aria-hidden="true"
        >
          {review.initials}
        </div>
        <div>
          <p className="font-sans text-xs font-semibold text-cream-200">{review.name}</p>
          <p className="font-sans text-[10px] text-cream-400" style={{ opacity: 0.5 }}>{review.city}</p>
        </div>
      </footer>
    </>
  );
}
