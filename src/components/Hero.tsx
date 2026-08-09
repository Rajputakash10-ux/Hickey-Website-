import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SLIDES = [
  { src: '/assets/hickey-hero.jpg', alt: 'HICKEY Intimacy Dark Chocolate — evening ritual' },
  { src: '/assets/hickey-lifestyle-3.jpg', alt: 'Couple sharing a HICKEY moment' },
  { src: '/assets/hickey-lifestyle-4.jpg', alt: 'HICKEY date night experience' },
  { src: '/assets/hickey-lifestyle-5.jpg', alt: 'HICKEY sensory ritual' },
];

interface HeroProps { onAddToCart: () => void; }

export default function Hero(_props: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, [paused]);

  const prev = () => { setPaused(true); setCurrent(p => (p - 1 + SLIDES.length) % SLIDES.length); };
  const next = () => { setPaused(true); setCurrent(p => (p + 1) % SLIDES.length); };

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
  };

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: 580, maxHeight: 1000 }}
      aria-label="Hero"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Hero video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Fallback slide image if video fails */}
      <AnimatePresence mode="sync">
        <motion.img
          key={current}
          src={SLIDES[current].src}
          alt={SLIDES[current].alt}
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ zIndex: -1 }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(22,13,30,0.97) 0%, rgba(36,21,47,0.5) 40%, rgba(36,21,47,0.1) 100%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(36,21,47,0.5) 0%, transparent 25%)' }} />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end" style={{ paddingBottom: 'max(5rem, env(safe-area-inset-bottom) + 4rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col gap-4 px-5 sm:px-8 lg:px-16 max-w-3xl"
        >
          <span className="section-label">A New Culture of Connection</span>

          <div className="flex flex-col sm:flex-row gap-3 mt-1 w-full sm:w-auto">
            <Link
              to="/experience"
              className="btn-gold gap-2 w-full sm:w-auto justify-center"
              style={{ minHeight: 52, fontSize: '0.7rem' }}
            >
              Claim Free Sensory Experience <ArrowRight size={13} />
            </Link>
            <Link
              to="/shop"
              className="btn-outline w-full sm:w-auto justify-center"
              style={{ minHeight: 52, fontSize: '0.7rem' }}
            >
              Shop the Latest Drop
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div
        className="absolute flex gap-2 z-10"
        style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom) + 1rem)', right: '1.25rem' }}
        role="tablist"
        aria-label="Slide indicators"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => { setPaused(true); setCurrent(i); }}
            className="rounded-full transition-all duration-500"
            style={{
              width: i === current ? 24 : 6,
              height: 6,
              background: i === current ? 'var(--color-gold-500)' : 'rgba(245,232,220,0.35)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
