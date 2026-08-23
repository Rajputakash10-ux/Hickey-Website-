import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package } from 'lucide-react';

const STORE = '2t2ym7-dv.myshopify.com';

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber.trim() || !email.trim()) return;
    const num = orderNumber.trim().replace(/^#/, '');
    window.open(
      `https://${STORE}/apps/track-order?order_number=${num}&email=${encodeURIComponent(email.trim())}`,
      '_blank'
    );
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
            Enter your order number and email to check your delivery status
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-sans uppercase text-choc-800" style={{ fontSize: '0.58rem', letterSpacing: '0.18em', opacity: 0.6 }}>
              Order Number
            </label>
            <input
              type="text"
              placeholder="#1001"
              value={orderNumber}
              onChange={e => setOrderNumber(e.target.value)}
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

          <div className="flex flex-col gap-1.5">
            <label className="font-sans uppercase text-choc-800" style={{ fontSize: '0.58rem', letterSpacing: '0.18em', opacity: 0.6 }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
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
            className="flex items-center justify-center gap-2 w-full font-sans uppercase mt-2"
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
            <Search size={14} />
            Track Order
          </motion.button>
        </form>

        <p className="text-center font-sans mt-6" style={{ fontSize: '0.65rem', opacity: 0.35, letterSpacing: '0.05em', color: 'var(--color-choc-700)' }}>
          Your order number is in your confirmation email (e.g. #1001)
        </p>
      </motion.div>
    </main>
  );
}
