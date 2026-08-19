import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function MobileShopCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-4"
          style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))', background: 'linear-gradient(to top, rgba(22,13,30,0.98) 60%, transparent)' }}
        >
          <button
            onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold w-full justify-between gap-2"
            style={{ minHeight: 54, fontSize: '0.7rem', boxShadow: '0 8px 40px rgba(0,0,0,0.6)', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
          >
            <div className="flex items-center gap-2">
              <ShoppingBag size={15} />
              <span>Shop HICKEY</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-sans line-through opacity-50" style={{ fontSize: '0.65rem' }}>₹799</span>
              <span className="font-serif font-light" style={{ fontSize: '1rem' }}>₹599</span>
            </div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
