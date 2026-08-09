import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const STEPS = [
  { num: '01', label: 'Curiosity', desc: 'An invitation to explore.' },
  { num: '02', label: 'Play', desc: 'Games that spark connection.' },
  { num: '03', label: 'Sensory', desc: 'Taste, touch, and presence.' },
  { num: '04', label: 'Adventure', desc: 'Step outside the ordinary.' },
  { num: '05', label: 'Invitation', desc: 'A ritual to return to.' },
];

export default function FreeExperience() {
  const { ref, isVisible } = useScrollReveal();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #160D1E 0%, #321D3D 60%, #24152F 100%)' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(64,35,75,0.4) 0%, transparent 60%)' }} aria-hidden="true" />

      <div className="container-site relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-7"
          >
            <div>
              <span className="section-label">Free for Every Couple</span>
              <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}>
                The Virtual<br />Sensory Experience
              </h2>
            </div>
            <p className="font-sans text-cream-300 leading-relaxed opacity-70 max-w-md" style={{ fontSize: '0.95rem' }}>
              A free 5-day digital date night experience designed for modern couples. One ritual per day, delivered to your inbox.
            </p>

            <div className="flex flex-col gap-2">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-3 py-2.5 px-3 rounded-lg"
                  style={{ border: '1px solid rgba(201,164,92,0.1)', background: 'rgba(22,13,30,0.4)' }}
                >
                  <span className="font-sans text-[10px] tracking-widest text-gold-500 font-semibold flex-shrink-0" style={{ width: 20 }}>{step.num}</span>
                  <div className="w-px h-4 flex-shrink-0" style={{ background: 'rgba(201,164,92,0.2)' }} />
                  <span className="font-serif text-sm text-cream-100 flex-shrink-0">{step.label}</span>
                  <span className="font-sans text-xs text-cream-400 opacity-50 truncate">{step.desc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-6 p-8 lg:p-10"
            style={{ border: '1px solid rgba(201,164,92,0.15)', background: 'rgba(22,13,30,0.5)' }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,164,92,0.12)', border: '1px solid rgba(201,164,92,0.25)' }}>
                  <span className="text-gold-400 text-2xl">✓</span>
                </div>
                <h3 className="font-serif text-2xl text-cream-100">You're in.</h3>
                <p className="font-sans text-sm text-cream-300 opacity-60">Check your inbox — Day 01 is on its way.</p>
              </div>
            ) : (
              <>
                <div>
                  <h3 className="font-serif text-2xl text-cream-100">Start your free experience</h3>
                  <p className="font-sans text-sm text-cream-300 opacity-60 mt-2">5 days. 5 rituals. Completely free.</p>
                </div>
                <form onSubmit={e => { e.preventDefault(); if (email) setSubmitted(true); }} className="flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    aria-label="Email address"
                    className="w-full px-5 py-3.5 rounded-full font-sans text-sm text-cream-100 placeholder-cream-400 outline-none"
                    style={{ background: 'rgba(22,13,30,0.7)', border: '1px solid rgba(201,164,92,0.2)' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,164,92,0.5)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,164,92,0.2)')}
                  />
                  <button type="submit" className="btn-gold gap-2 py-3.5">
                    Claim Free Experience <ArrowRight size={13} />
                  </button>
                </form>
                <p className="font-sans text-[10px] text-cream-400 opacity-40 text-center">No spam. Unsubscribe anytime.</p>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
