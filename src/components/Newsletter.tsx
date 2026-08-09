import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Newsletter() {
  const { ref, isVisible } = useScrollReveal();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: '#40234B' }}
    >
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(22,13,30,0.5) 0%, transparent 65%)' }} aria-hidden="true" />

      <div className="container-site relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-xl mx-auto text-center flex flex-col items-center gap-7"
        >
          <div>
            <span className="section-label">For You</span>
            <h2 className="heading-display mt-3" style={{ fontSize: 'clamp(2rem, 7vw, 3.5rem)' }}>
              Something Special<br />For You
            </h2>
            <p className="font-sans text-cream-300 opacity-65 mt-4 leading-relaxed">
              Unlock your free virtual sensory experience. Plus early access to monthly drops.
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(201,164,92,0.12)', border: '1px solid rgba(201,164,92,0.25)' }}>
                <span className="text-gold-400 text-xl">✓</span>
              </div>
              <p className="font-serif text-xl text-cream-100">Welcome to HICKEY.</p>
              <p className="font-sans text-sm text-cream-300 opacity-60">Check your inbox for your free experience.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                aria-label="Email address for newsletter"
                className="w-full px-5 rounded-full font-sans text-sm text-cream-100 placeholder-cream-400 outline-none"
                style={{ background: 'rgba(22,13,30,0.5)', border: '1px solid rgba(201,164,92,0.2)', minHeight: 52 }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,164,92,0.5)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,164,92,0.2)')}
              />
              <button type="submit" className="btn-gold gap-2 w-full" style={{ minHeight: 52 }}>
                Subscribe <ArrowRight size={13} />
              </button>
            </form>
          )}

          <p className="font-sans text-[10px] text-cream-400 opacity-35">No spam. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
