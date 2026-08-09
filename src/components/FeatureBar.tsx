import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FEATURE_BAR_ITEMS } from '../data';

export default function FeatureBar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-5 sm:py-8 border-y" style={{ borderColor: 'rgba(201,164,92,0.12)', background: '#321D3D' }}>
      <div
        ref={scrollRef}
        className="flex gap-0 overflow-x-auto scrollbar-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
      >
        {FEATURE_BAR_ITEMS.map((item, i) => (
          <motion.button
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex items-center gap-3 px-5 sm:px-8 py-3 sm:py-4 flex-shrink-0 group transition-colors duration-200 cursor-pointer"
            style={{ borderRight: i < FEATURE_BAR_ITEMS.length - 1 ? '1px solid rgba(201,149,106,0.1)' : 'none', minWidth: 180, scrollSnapAlign: 'start' }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200"
              style={{ background: 'var(--color-wine-900)', border: '1px solid var(--color-wine-700)' }}
            >
              <span className="text-wine-400 text-sm group-hover:text-gold-400 transition-colors">{item.icon}</span>
            </div>
            <div className="text-left">
              <p className="font-sans text-xs font-semibold tracking-wide text-cream-200 group-hover:text-cream-100 transition-colors whitespace-nowrap">
                {item.title}
              </p>
              <p className="font-sans text-[10px] text-cream-400 opacity-60 whitespace-nowrap mt-0.5">
                {item.subtitle}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
