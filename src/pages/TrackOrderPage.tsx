import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

export default function TrackOrderPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-4" style={{ paddingTop: 100, paddingBottom: 80, minHeight: '80vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md text-center"
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5" style={{ background: 'rgba(184,134,11,0.08)', border: '1px solid rgba(184,134,11,0.18)' }}>
          <Package size={24} style={{ color: 'var(--color-gold-500)' }} />
        </div>
        <h1 className="font-serif font-light tracking-[0.15em] text-choc-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 5vw, 2rem)' }}>
          Track Your Order
        </h1>
        <p className="font-sans text-sm text-choc-700" style={{ opacity: 0.5, letterSpacing: '0.04em' }}>
          Coming soon. For order updates, contact us at{' '}
          <a href="mailto:support@hickey.co.in" style={{ color: 'var(--color-gold-500)' }}>
            support@hickey.co.in
          </a>
        </p>
      </motion.div>
    </main>
  );
}
