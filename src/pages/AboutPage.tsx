import { motion } from 'framer-motion';
import FinalCTA from '../components/FinalCTA';

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 64 }}>
      <section
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #160D1E 0%, #24152F 60%, #321D3D 100%)',
          paddingTop: 'clamp(5rem, 12vw, 9rem)',
          paddingBottom: 'clamp(4rem, 10vw, 7rem)',
        }}
      >
        <div className="container-site">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              Our Story
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-display mt-3"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}
            >
              Crafted for<br />
              <em style={{ fontStyle: 'italic', color: 'var(--color-gold-400)' }}>Connection.</em>
            </motion.h1>
          </div>
        </div>
      </section>

      <section style={{ background: '#24152F', paddingTop: 'clamp(4rem, 8vw, 6rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}>
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-6">
              <h2 className="heading-display" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
                Why HICKEY exists.
              </h2>
              <div className="flex flex-col gap-4 font-sans text-cream-300 leading-relaxed" style={{ fontSize: '0.95rem', opacity: 0.75 }}>
                <p>
                  HICKEY was born from a simple observation: modern couples are busier than ever, yet the moments that matter most — the slow evenings, the shared rituals, the playful surprises — are the first things to disappear.
                </p>
                <p>
                  We set out to create something that makes it easier to slow down. A premium dark chocolate that's more than a snack — it's an invitation. A ritual. A reason to be present with the person you love.
                </p>
                <p>
                  Every detail of HICKEY is intentional — from the carefully selected ingredients to the free Secret Position Scratch Card included in every pack. Because the best moments aren't planned. They're discovered.
                </p>
              </div>
            </div>
            <div
              className="relative overflow-hidden flex items-center justify-center"
              style={{ aspectRatio: '4/5', background: '#321D3D', border: '1px solid rgba(201,164,92,0.1)' }}
            >
              <img
                src="/src/assets/hickey-1.png"
                alt="HICKEY Intimacy Dark Chocolate"
                className="w-3/4 h-auto object-contain"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#321D3D', paddingTop: 'clamp(4rem, 8vw, 6rem)', paddingBottom: 'clamp(4rem, 8vw, 6rem)' }}>
        <div className="container-site">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(201,164,92,0.06)' }}>
            {[
              { value: '14k+', label: 'Couples' },
              { value: '4.9★', label: 'Average Rating' },
              { value: '100%', label: 'Discreet Shipping' },
              { value: 'India', label: 'Made With Love' },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col gap-2 p-8 lg:p-10" style={{ background: '#321D3D' }}>
                <span className="font-serif font-light text-gold-400" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>{stat.value}</span>
                <span className="font-sans text-xs tracking-widest uppercase text-cream-400 opacity-60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
