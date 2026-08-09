import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex items-center justify-center gap-2 px-4 py-2.5"
      style={{ background: '#40234B', borderBottom: '1px solid rgba(201,164,92,0.15)' }}
      role="banner"
      aria-label="Promotion"
    >
      <Gift size={11} style={{ color: 'var(--color-gold-500)', flexShrink: 0 }} aria-hidden="true" />
      <p className="font-sans text-center" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--color-cream-200)', textTransform: 'uppercase' }}>
        Free Secret Position Scratch Card with Every Pack
      </p>
      <Gift size={11} style={{ color: 'var(--color-gold-500)', flexShrink: 0 }} aria-hidden="true" />
    </motion.div>
  );
}
