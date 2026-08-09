import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function MobileShopCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-4 pb-4"
          style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}
        >
          <Link
            to="/shop"
            className="btn-gold w-full justify-center gap-2"
            style={{ minHeight: 52, fontSize: '0.7rem', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}
          >
            <ShoppingBag size={15} />
            Shop HICKEY
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
