import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const SLIDES = [
  '/assets/neimage/file_000000002914820bb4d33fa9e2d3e9ca.png',
  '/assets/neimage/file_000000002e64820b860bf6a5eb1ebb67.png',
  '/assets/neimage/file_000000004118820b84c9a2baedfca2d6.png',
  '/assets/neimage/file_00000000823c820b94eb679898635077.png',
];

const KB = [
  { scale: [1.08, 1.0], origin: '60% 40%' },
  { scale: [1.0, 1.08], origin: '40% 60%' },
  { scale: [1.1, 1.02], origin: '50% 30%' },
  { scale: [1.02, 1.1], origin: '55% 55%' },
];

const DURATION = 3200; // ms per slide

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number>(Date.now());

  useEffect(() => {
    startRef.current = Date.now();
    setProgress(0);

    const raf = requestAnimationFrame(function tick() {
      const elapsed = Date.now() - startRef.current;
      const p = Math.min(elapsed / DURATION, 1);
      setProgress(p);
      if (p < 1) requestAnimationFrame(tick);
    });

    const t = setTimeout(() => {
      setIdx(i => (i + 1) % SLIDES.length);
    }, DURATION);

    return () => { clearTimeout(t); cancelAnimationFrame(raf); };
  }, [idx]);

  const kb = KB[idx];

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', background: '#060309' }}
      aria-label="Hero"
    >
      {/* Ken Burns layer */}
      <AnimatePresence mode="sync">
        <motion.div
          key={idx}
          className="absolute inset-0"
          style={{ transformOrigin: kb.origin }}
          initial={{ scale: kb.scale[0], opacity: 0 }}
          animate={{ scale: kb.scale[1], opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            scale: { duration: DURATION / 1000, ease: 'linear' },
            opacity: { duration: 0.9, ease: 'easeInOut' },
          }}
        >
          <img
            src={SLIDES[idx]}
            alt={`HICKEY slide ${idx + 1}`}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic letterbox bars */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ height: 48, background: 'linear-gradient(to bottom, rgba(6,3,9,0.7), transparent)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: 180, background: 'linear-gradient(to bottom, transparent, rgba(22,13,30,0.98))' }} aria-hidden="true" />

      {/* Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(6,3,9,0.5) 100%)' }}
        aria-hidden="true"
      />

      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 z-20" style={{ height: 2, background: 'rgba(255,255,255,0.06)' }}>
        <motion.div
          style={{
            height: '100%',
            background: 'linear-gradient(to right, rgba(201,164,92,0.6), var(--color-gold-500))',
            width: `${progress * 100}%`,
          }}
        />
      </div>

      {/* Slide counter + dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        {/* Counter */}
        <div className="flex items-center gap-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="font-sans text-gold-500 font-semibold tabular-nums"
              style={{ fontSize: '0.6rem', letterSpacing: '0.15em' }}
            >
              {String(idx + 1).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
          <span className="font-sans text-cream-400" style={{ fontSize: '0.55rem', opacity: 0.35 }}>
            / {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>

        {/* Dots */}
        <div className="flex gap-1.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === idx ? 22 : 5,
                height: 5,
                borderRadius: 3,
                background: i === idx ? 'var(--color-gold-500)' : 'rgba(255,255,255,0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
                padding: 0,
                boxShadow: i === idx ? '0 0 8px rgba(201,164,92,0.5)' : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
