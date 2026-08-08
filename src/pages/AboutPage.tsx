import { motion } from 'framer-motion';
import Newsletter from '../components/Newsletter';

export default function AboutPage() {
  return (
    <main className="pt-20" style={{ background: 'var(--color-ink-950)' }}>
      <div className="container-site py-16 lg:py-24">
        <div className="max-w-2xl">
          <span className="section-label">Our Story</span>
          <h1 className="heading-display mt-3" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            About HICKEY
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/assets/hickey-lifestyle.jpg"
              alt="HICKEY — crafted for connection"
              className="w-full aspect-[4/5] object-cover"
              style={{ border: '1px solid rgba(201,163,90,0.1)' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            <p className="font-serif text-xl text-cream-200 opacity-80 leading-relaxed">
              HICKEY was born from a simple belief: that the most meaningful moments between couples deserve to be designed, not left to chance.
            </p>
            <p className="font-sans text-sm text-cream-300 opacity-60 leading-relaxed">
              We create premium sensory experiences — dark chocolates, ritual kits, games and monthly drops — that give couples a reason to be fully present with each other.
            </p>
            <p className="font-sans text-sm text-cream-300 opacity-60 leading-relaxed">
              Every product is crafted with intention. Every detail — from the packaging to the scratch card — is designed to make the moment feel special.
            </p>
            <div className="pt-4" style={{ borderTop: '1px solid rgba(201,163,90,0.1)' }}>
              <p className="font-sans text-xs tracking-widest uppercase text-gold-500 font-semibold">Crafted for Connection</p>
              <p className="font-sans text-xs text-cream-400 opacity-40 mt-1">hickey.co.in · support@hickey.co.in</p>
            </div>
          </motion.div>
        </div>
      </div>
      <Newsletter />
    </main>
  );
}
