import { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, Truck } from 'lucide-react';

export default function TrackOrderPage() {
  const [tracking, setTracking] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tracking.trim()) return;
    window.open(`https://track.aftership.com/${encodeURIComponent(tracking.trim())}`, '_blank');
  };

  return (
    <main className="flex-1 flex items-center justify-center px-4" style={{ paddingTop: 100, paddingBottom: 80, minHeight: '80vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5" style={{ background: 'rgba(184,134,11,0.08)', border: '1px solid rgba(184,134,11,0.18)' }}>
            <Package size={24} style={{ color: 'var(--color-gold-500)' }} />
          </div>
          <h1 className="font-serif font-light tracking-[0.15em] text-choc-900 mb-2" style={{ fontSize: 'clamp(1.6rem, 5vw, 2rem)' }}>
            Track Your Order
          </h1>
          <p className="font-sans text-sm text-choc-700" style={{ opacity: 0.5, letterSpacing: '0.04em' }}>
            Enter your tracking number from your shipping confirmation email
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-sans uppercase text-choc-800" style={{ fontSize: '0.58rem', letterSpacing: '0.18em', opacity: 0.6 }}>
              Tracking Number
            </label>
            <input
              type="text"
              placeholder="e.g. 1Z999AA10123456784"
              value={tracking}
              onChange={e => setTracking(e.target.value)}
              required
              className="w-full font-sans text-sm text-choc-900 outline-none"
              style={{
                padding: '0.75rem 1rem',
                background: 'rgba(253,246,236,0.6)',
                border: '1px solid rgba(184,134,11,0.2)',
                borderRadius: 2,
                transition: 'border-color 0.2s',
              }}
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(184,134,11,0.55)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(184,134,11,0.2)'; }}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ opacity: 0.88 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2 w-full font-sans uppercase mt-2"
            style={{
              minHeight: 50,
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              background: 'var(--color-gold-500)',
              color: '#FFFDF9',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              borderRadius: 2,
            }}
          >
            <Truck size={14} />
            Track Shipment
          </motion.button>
        </form>

        {/* Info box */}
        <div className="mt-8 flex flex-col gap-3" style={{ border: '1px solid rgba(184,134,11,0.12)', borderRadius: 4, padding: '1.25rem 1.5rem' }}>
          <p className="font-sans uppercase" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', opacity: 0.4 }}>Where to find your tracking number</p>
          {[
            'Check your shipping confirmation email from HICKEY',
            'Look for a number like "1Z999AA10123456784"',
            'Click Track Shipment to see live delivery status',
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 inline-flex items-center justify-center rounded-full font-sans font-bold" style={{ width: 20, height: 20, fontSize: '0.55rem', background: 'rgba(184,134,11,0.1)', color: 'var(--color-gold-500)', marginTop: 1 }}>
                {i + 1}
              </span>
              <span className="font-sans text-sm text-choc-700" style={{ opacity: 0.65 }}>{step}</span>
            </div>
          ))}
        </div>

        <p className="text-center font-sans mt-6" style={{ fontSize: '0.65rem', opacity: 0.3, letterSpacing: '0.05em', color: 'var(--color-choc-700)' }}>
          Powered by AfterShip — supports 900+ carriers worldwide
        </p>
      </motion.div>
    </main>
  );
}
