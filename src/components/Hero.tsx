import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SLIDES = [
  { src: '/assets/hickey-hero.jpg', alt: 'HICKEY Intimacy Dark Chocolate — evening ritual' },
  { src: '/assets/hickey-lifestyle-3.jpg', alt: 'Couple sharing a HICKEY moment' },
  { src: '/assets/hickey-lifestyle-4.jpg', alt: 'HICKEY date night experience' },
  { src: '/assets/hickey-lifestyle-5.jpg', alt: 'HICKEY sensory ritual' },
];

interface HeroProps {
  onAddToCart: () => void;
}

export default function Hero(_props: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-ink-950" style={{ height: '100svh', minHeight: 600, maxHeight: 1000 }} aria-label="Hero">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: imgY }}>
        <AnimatePresence mode="sync">
          <motion.img
            key={current}
            src={SLIDES[current].src}
            alt={SLIDES[current].alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(8,5,10,0.97) 0%, rgba(8,5,10,0.55) 45%, rgba(8,5,10,0.18) 100%)' }} aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(8,5,10,0.45) 0%, transparent 30%)' }} aria-hidden="true" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="absolute inset-0 flex flex-col items-center justify-end pb-20 sm:pb-28 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col items-center gap-5 max-w-3xl"
        >
          <span className="section-label">A New Culture of Connection</span>

          <h1 className="heading-display text-balance" style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
            Rewriting how couples<br className="hidden sm:block" /> do date night.
          </h1>

          <p className="font-sans text-cream-300 leading-relaxed max-w-lg opacity-80" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)' }}>
            Novel intimate sensory experiences, monthly date night rituals for modern relationships.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full sm:w-auto">
            <Link to="/experience" className="btn-gold w-full sm:w-auto gap-2 py-3.5 px-7">
              Claim Free Sensory Experience <ArrowRight size={13} />
            </Link>
            <Link to="/shop" className="btn-outline w-full sm:w-auto py-3.5 px-7">
              Shop the Latest Drop
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Slide dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2" role="tablist" aria-label="Slide indicators">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className="h-px rounded-full transition-all duration-500"
            style={{ width: i === current ? 32 : 8, background: i === current ? 'var(--color-gold-500)' : 'rgba(245,237,224,0.3)' }}
          />
        ))}
      </div>
    </section>
  );
}
