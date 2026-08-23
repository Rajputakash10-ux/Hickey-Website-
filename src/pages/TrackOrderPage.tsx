import { motion } from 'framer-motion';
import { Package, ExternalLink } from 'lucide-react';

const ORDER_LOOKUP_URL = 'https://2t2ym7-dv.myshopify.com/account/login';

export default function TrackOrderPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-4" style={{ paddingTop: 100, paddingBottom: 80, minHeight: '80vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md text-center"
      >
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5" style={{ background: 'rgba(184,134,11,0.08)', border: '1px solid rgba(184,134,11,0.18)' }}>
          <Package size={24} style={{ color: 'var(--color-gold-500)' }} />
        </div>

        {/* Heading */}
        <h1 className="font-serif font-light tracking-[0.15em] text-choc-900 mb-3" style={{ fontSize: 'clamp(1.6rem, 5vw, 2rem)' }}>
          Track Your Order
        </h1>
        <p className="font-sans text-sm text-choc-700 mb-10" style={{ opacity: 0.5, letterSpacing: '0.04em', lineHeight: 1.7 }}>
          Click below to check your order status and delivery details on our secure order page.
        </p>

        {/* CTA Button */}
        <motion.a
          href={ORDER_LOOKUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ opacity: 0.88 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 w-full font-sans uppercase"
          style={{
            minHeight: 50,
            fontSize: '0.6rem',
            letterSpacing: '0.22em',
            background: 'var(--color-gold-500)',
            color: '#FFFDF9',
            fontWeight: 700,
            borderRadius: 2,
            textDecoration: 'none',
          }}
        >
          <ExternalLink size={14} />
          Track My Order
        </motion.a>

        {/* Steps */}
        <div className="mt-10 flex flex-col gap-3 text-left" style={{ border: '1px solid rgba(184,134,11,0.12)', borderRadius: 4, padding: '1.25rem 1.5rem' }}>
          <p className="font-sans uppercase" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', opacity: 0.4 }}>How it works</p>
          {[
            'Click "Track My Order" above',
            'Log in or enter your email + order number',
            'View your order status and tracking info',
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="flex-shrink-0 inline-flex items-center justify-center rounded-full font-sans font-bold" style={{ width: 20, height: 20, fontSize: '0.55rem', background: 'rgba(184,134,11,0.1)', color: 'var(--color-gold-500)', marginTop: 1 }}>
                {i + 1}
              </span>
              <span className="font-sans text-sm text-choc-700" style={{ opacity: 0.65 }}>{step}</span>
            </div>
          ))}
        </div>

        <p className="font-sans mt-6" style={{ fontSize: '0.65rem', opacity: 0.3, letterSpacing: '0.05em', color: 'var(--color-choc-700)' }}>
          Your order number is in your confirmation email
        </p>
      </motion.div>
    </main>
  );
}
