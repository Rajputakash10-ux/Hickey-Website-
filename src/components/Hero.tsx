import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const SLIDES = [
  '/assets/etx-1.png','/assets/etx-2.png','/assets/etx-3.png',
  '/assets/etx-4.png','/assets/etx-5.png','/assets/etx-6.png',
  '/assets/hickey-1.png','/assets/hickey-2.png','/assets/hickey-3.png',
  '/assets/hickey-4.png','/assets/hickey-5.png','/assets/hickey-6.png',
];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % SLIDES.length), 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', background: '#0a0610' }}
      aria-label="Hero"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={SLIDES[idx]}
          src={SLIDES[idx]}
          alt="HICKEY Intimacy Chocolate"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </AnimatePresence>

      {/* Subtle dark vignette at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,6,16,0.55) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 140, background: 'linear-gradient(to bottom, transparent, #160D1E)' }}
        aria-hidden="true"
      />

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === idx ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: i === idx ? 'var(--color-gold-500)' : 'rgba(255,255,255,0.25)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}
