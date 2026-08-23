import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Package, Truck, CheckCircle, Clock, XCircle } from 'lucide-react';

interface OrderResult {
  orderNumber: string;
  createdAt: string;
  financialStatus: string;
  fulfillmentStatus: string | null;
  totalPrice: string;
  currency: string;
  lineItems: { title: string; quantity: number; price: string }[];
  shippingAddress: { name: string; city: string; province: string; country: string } | null;
  fulfillments: { trackingCompany: string; trackingNumber: string; trackingUrl: string; status: string }[];
}

function StatusBadge({ status }: { status: string | null }) {
  const s = (status ?? 'pending').toLowerCase();
  const map: Record<string, { icon: React.ReactNode; label: string; color: string; bg: string }> = {
    fulfilled:   { icon: <CheckCircle size={13} />, label: 'Fulfilled',   color: '#16a34a', bg: 'rgba(22,163,74,0.08)' },
    shipped:     { icon: <Truck size={13} />,       label: 'Shipped',     color: '#2563eb', bg: 'rgba(37,99,235,0.08)' },
    pending:     { icon: <Clock size={13} />,       label: 'Processing',  color: '#d97706', bg: 'rgba(217,119,6,0.08)' },
    unfulfilled: { icon: <Clock size={13} />,       label: 'Processing',  color: '#d97706', bg: 'rgba(217,119,6,0.08)' },
    cancelled:   { icon: <XCircle size={13} />,     label: 'Cancelled',   color: '#dc2626', bg: 'rgba(220,38,38,0.08)' },
  };
  const cfg = map[s] ?? map.pending;
  return (
    <span className="inline-flex items-center gap-1 font-sans rounded-full px-3 py-1" style={{ fontSize: '0.65rem', letterSpacing: '0.06em', color: cfg.color, background: cfg.bg, fontWeight: 600 }}>
      {cfg.icon} {cfg.label}
    </span>
  );
}

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [order, setOrder] = useState<OrderResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setOrder(null);
    setLoading(true);
    try {
      const num = orderNumber.trim().replace(/^#/, '');
      const res = await fetch(`/api/track-order?order_number=${num}&email=${encodeURIComponent(email.trim())}`);
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? 'Order not found'); return; }
      setOrder(data);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex-1 px-4" style={{ paddingTop: 100, paddingBottom: 80, minHeight: '80vh' }}>
      <div className="w-full max-w-lg mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-5" style={{ background: 'rgba(184,134,11,0.08)', border: '1px solid rgba(184,134,11,0.18)' }}>
            <Package size={24} style={{ color: 'var(--color-gold-500)' }} />
          </div>
          <h1 className="font-serif font-light tracking-[0.15em] text-choc-900 mb-2" style={{ fontSize: 'clamp(1.6rem, 5vw, 2rem)' }}>
            Track Your Order
          </h1>
          <p className="font-sans text-sm text-choc-700" style={{ opacity: 0.5, letterSpacing: '0.04em' }}>
            Enter your order number and email to check your delivery status
          </p>
        </motion.div>

        {/* Form */}
        <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
          <div className="flex flex-col gap-1.5">
            <label className="font-sans uppercase text-choc-800" style={{ fontSize: '0.58rem', letterSpacing: '0.18em', opacity: 0.6 }}>Order Number</label>
            <input
              type="text" placeholder="#1001" value={orderNumber} onChange={e => setOrderNumber(e.target.value)} required
              className="w-full font-sans text-sm text-choc-900 outline-none"
              style={{ padding: '0.75rem 1rem', background: 'rgba(253,246,236,0.6)', border: '1px solid rgba(184,134,11,0.2)', borderRadius: 2, transition: 'border-color 0.2s' }}
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(184,134,11,0.55)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(184,134,11,0.2)'; }}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-sans uppercase text-choc-800" style={{ fontSize: '0.58rem', letterSpacing: '0.18em', opacity: 0.6 }}>Email Address</label>
            <input
              type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required
              className="w-full font-sans text-sm text-choc-900 outline-none"
              style={{ padding: '0.75rem 1rem', background: 'rgba(253,246,236,0.6)', border: '1px solid rgba(184,134,11,0.2)', borderRadius: 2, transition: 'border-color 0.2s' }}
              onFocus={e => { e.currentTarget.style.borderColor = 'rgba(184,134,11,0.55)'; }}
              onBlur={e => { e.currentTarget.style.borderColor = 'rgba(184,134,11,0.2)'; }}
            />
          </div>
          <motion.button type="submit" whileHover={{ opacity: 0.88 }} whileTap={{ scale: 0.97 }} disabled={loading}
            className="flex items-center justify-center gap-2 w-full font-sans uppercase mt-2"
            style={{ minHeight: 50, fontSize: '0.6rem', letterSpacing: '0.22em', background: 'var(--color-gold-500)', color: '#FFFDF9', fontWeight: 700, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', borderRadius: 2, opacity: loading ? 0.7 : 1 }}
          >
            <Search size={14} />
            {loading ? 'Searching...' : 'Track Order'}
          </motion.button>
        </motion.form>

        {/* Error */}
        <AnimatePresence>
          {error && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="text-center font-sans text-sm mb-6 p-4 rounded"
              style={{ color: '#dc2626', background: 'rgba(220,38,38,0.06)', border: '1px solid rgba(220,38,38,0.15)' }}
            >
              {error === 'Order not found' ? 'No order found. Please check your order number and email.' : error}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Order Result */}
        <AnimatePresence>
          {order && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="flex flex-col gap-4"
              style={{ border: '1px solid rgba(184,134,11,0.15)', borderRadius: 4, overflow: 'hidden' }}
            >
              {/* Order header */}
              <div className="flex items-center justify-between p-5" style={{ background: 'rgba(184,134,11,0.04)', borderBottom: '1px solid rgba(184,134,11,0.1)' }}>
                <div>
                  <p className="font-sans uppercase" style={{ fontSize: '0.58rem', letterSpacing: '0.18em', opacity: 0.5 }}>Order</p>
                  <p className="font-serif text-choc-900" style={{ fontSize: '1.1rem', letterSpacing: '0.05em' }}>{order.orderNumber}</p>
                </div>
                <StatusBadge status={order.fulfillmentStatus} />
              </div>

              {/* Items */}
              <div className="px-5 pt-2 pb-4" style={{ borderBottom: '1px solid rgba(184,134,11,0.08)' }}>
                <p className="font-sans uppercase mb-3" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', opacity: 0.4 }}>Items</p>
                {order.lineItems.map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2">
                    <span className="font-sans text-sm text-choc-900" style={{ opacity: 0.85 }}>{item.title} × {item.quantity}</span>
                    <span className="font-sans text-sm text-choc-900" style={{ opacity: 0.6 }}>₹{parseFloat(item.price).toFixed(0)}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-3 mt-1" style={{ borderTop: '1px solid rgba(184,134,11,0.08)' }}>
                  <span className="font-sans uppercase" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', opacity: 0.5 }}>Total</span>
                  <span className="font-sans font-semibold text-choc-900">₹{parseFloat(order.totalPrice).toFixed(0)}</span>
                </div>
              </div>

              {/* Tracking */}
              {order.fulfillments.length > 0 && (
                <div className="px-5 pb-4" style={{ borderBottom: '1px solid rgba(184,134,11,0.08)' }}>
                  <p className="font-sans uppercase mb-3" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', opacity: 0.4 }}>Tracking</p>
                  {order.fulfillments.map((f, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="font-sans text-sm text-choc-900" style={{ opacity: 0.7 }}>{f.trackingCompany} — {f.trackingNumber}</span>
                      {f.trackingUrl && (
                        <a href={f.trackingUrl} target="_blank" rel="noopener noreferrer"
                          className="font-sans uppercase inline-flex items-center gap-1"
                          style={{ fontSize: '0.58rem', letterSpacing: '0.15em', color: 'var(--color-gold-500)', textDecoration: 'none' }}
                        >
                          <Truck size={11} /> Track Shipment →
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Shipping address */}
              {order.shippingAddress && (
                <div className="px-5 pb-5">
                  <p className="font-sans uppercase mb-2" style={{ fontSize: '0.55rem', letterSpacing: '0.2em', opacity: 0.4 }}>Delivering To</p>
                  <p className="font-sans text-sm text-choc-900" style={{ opacity: 0.7 }}>
                    {order.shippingAddress.name}, {order.shippingAddress.city}, {order.shippingAddress.province}, {order.shippingAddress.country}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <p className="text-center font-sans mt-6" style={{ fontSize: '0.65rem', opacity: 0.35, letterSpacing: '0.05em', color: 'var(--color-choc-700)' }}>
          Your order number is in your confirmation email (e.g. #1001)
        </p>
      </div>
    </main>
  );
}
