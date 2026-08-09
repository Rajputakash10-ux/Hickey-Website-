import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ARTICLES } from '../data';

export default function Journal() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 lg:py-32"
      style={{ background: 'var(--color-ink-900)' }}
    >
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-10 lg:mb-14 gap-6 flex-wrap"
        >
          <div>
            <span className="section-label">The Journal</span>
            <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2rem, 7vw, 3.5rem)' }}>
              Stories, rituals and<br />ideas for modern love.
            </h2>
          </div>
          <a href="/journal" className="btn-outline py-2.5 px-6 text-[0.65rem] hidden sm:inline-flex gap-2">
            Read All <ArrowRight size={12} />
          </a>
        </motion.div>

        {/* Mobile: vertical stack */}
        <div className="flex flex-col gap-4 lg:hidden">
          {ARTICLES.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-4 overflow-hidden"
              style={{ border: '1px solid rgba(201,163,90,0.08)', background: 'var(--color-ink-900)' }}
            >
              <div className="flex-shrink-0 overflow-hidden" style={{ width: 100, aspectRatio: '3/4' }}>
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col gap-1.5 py-4 pr-4 flex-1 min-w-0">
                <span className="font-sans text-[9px] tracking-widest uppercase text-wine-300 font-semibold">{article.category}</span>
                <h3 className="font-serif text-base text-cream-100 leading-snug">{article.title}</h3>
                <p className="font-sans text-xs text-cream-300 opacity-55 leading-relaxed line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <span className="font-sans text-[10px] text-cream-400 opacity-40">{article.readTime}</span>
                  <ArrowRight size={12} className="text-gold-500" />
                </div>
              </div>
            </motion.article>
          ))}
          <a href="/journal" className="btn-outline py-3 text-[0.65rem] w-full justify-center gap-2 mt-2">
            Read All <ArrowRight size={12} />
          </a>
        </div>

        {/* Desktop: grid */}
        <div className="hidden lg:grid grid-cols-3 gap-px" style={{ background: 'rgba(201,163,90,0.08)' }}>
          {ARTICLES.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group flex flex-col cursor-pointer"
              style={{ background: 'var(--color-ink-900)' }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: i === 0 ? '4/3' : '16/10' }}>
                <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-7 flex flex-col gap-3 flex-1">
                <span className="font-sans text-[9px] tracking-widest uppercase text-wine-300 font-semibold">{article.category}</span>
                <h3 className="font-serif text-xl text-cream-100 leading-snug group-hover:text-gold-400 transition-colors">{article.title}</h3>
                <p className="font-sans text-sm text-cream-300 opacity-55 leading-relaxed flex-1">{article.excerpt}</p>
                <div className="flex items-center justify-between mt-2 pt-4" style={{ borderTop: '1px solid rgba(201,163,90,0.08)' }}>
                  <span className="font-sans text-[10px] text-cream-400 opacity-40">{article.readTime} · {article.date}</span>
                  <ArrowRight size={13} className="text-gold-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
