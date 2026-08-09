import { AnimatePresence, motion } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Gift } from 'lucide-react';
import type { CartItem } from '../types';
import { CURRENCY } from '../data';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotal: number;
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemove: (id: string) => void;
  checkoutUrl?: string | null;
}

export default function CartDrawer({ isOpen, onClose, items, subtotal, onUpdateQuantity, onRemove, checkoutUrl }: CartDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 right-0 bottom-0 w-full sm:max-w-md z-50 flex flex-col"
            style={{ background: '#321D3D', borderLeft: '1px solid rgba(201,164,92,0.1)' }}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6" style={{ borderBottom: '1px solid rgba(201,164,92,0.08)' }}>
              <div className="flex items-center gap-3">
                <ShoppingBag size={17} style={{ color: 'var(--color-gold-500)' }} />
                <span className="font-serif text-xl font-light text-cream-100">Your Cart</span>
                {items.length > 0 && (
                  <span className="font-sans text-xs text-cream-400 opacity-40">({items.length})</span>
                )}
              </div>
              <button onClick={onClose} aria-label="Close cart" className="w-8 h-8 flex items-center justify-center text-cream-300 hover:text-gold-400 transition-colors">
                <X size={17} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-5 text-center">
                  <ShoppingBag size={36} style={{ color: 'rgba(201,164,92,0.15)' }} />
                  <div>
                    <p className="font-serif text-lg text-cream-200 opacity-60">Your cart is empty.</p>
                    <p className="font-sans text-xs text-cream-400 opacity-40 mt-1">Add something beautiful.</p>
                  </div>
                  <button onClick={onClose} className="btn-outline text-xs py-2.5 px-6">Continue Shopping</button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map(item => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="w-20 h-20 flex-shrink-0 overflow-hidden flex items-center justify-center" style={{ border: '1px solid rgba(201,164,92,0.1)', background: '#40234B' }}>
                        <img src={item.product.images[0]?.src} alt={item.product.images[0]?.alt} className="w-full h-full object-contain p-1" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-serif text-base text-cream-100">{item.product.title}</p>
                            <p className="font-sans text-xs text-cream-400 opacity-50 mt-0.5">{item.product.subtitle} · {item.product.weight}</p>
                          </div>
                          <button onClick={() => onRemove(item.product.id)} aria-label="Remove item" className="text-cream-400 opacity-40 hover:opacity-100 hover:text-gold-400 transition-all flex-shrink-0">
                            <X size={13} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center rounded-full overflow-hidden" style={{ border: '1px solid rgba(201,164,92,0.15)' }}>
                            <button onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)} aria-label="Decrease quantity" className="w-8 h-8 flex items-center justify-center text-cream-300 hover:text-gold-400 transition-colors">
                              <Minus size={11} />
                            </button>
                            <span className="w-8 text-center font-sans text-sm text-cream-100">{item.quantity}</span>
                            <button onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)} aria-label="Increase quantity" className="w-8 h-8 flex items-center justify-center text-cream-300 hover:text-gold-400 transition-colors">
                              <Plus size={11} />
                            </button>
                          </div>
                          <span className="font-serif text-base text-gold-400">{CURRENCY}{(item.product.price * item.quantity).toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Scratch card callout */}
                  <div className="flex items-start gap-3 p-4 rounded-lg" style={{ border: '1px solid rgba(201,164,92,0.2)', background: 'rgba(201,164,92,0.05)' }}>
                    <Gift size={14} style={{ color: 'var(--color-gold-500)', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p className="font-sans text-[0.62rem] tracking-widest uppercase text-gold-500 font-semibold">🎁 Free with every pack</p>
                      <p className="font-sans text-xs text-cream-300 opacity-60 mt-0.5">Secret Position Scratch Card included automatically.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 space-y-4" style={{ borderTop: '1px solid rgba(201,164,92,0.08)' }}>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-sm text-cream-300 opacity-60">Subtotal</span>
                  <span className="font-serif text-2xl text-gold-400">{CURRENCY}{subtotal.toLocaleString('en-IN')}</span>
                </div>
                <p className="font-sans text-xs text-cream-400 opacity-40">Shipping calculated at checkout</p>
                <a
                  href={checkoutUrl ?? '#'}
                  className="btn-gold w-full py-4 text-center block"
                  style={{ fontSize: '0.7rem' }}
                  onClick={!checkoutUrl ? e => e.preventDefault() : undefined}
                >
                  Checkout
                </a>
                <button onClick={onClose} className="w-full text-center font-sans text-xs tracking-widest uppercase text-cream-300 opacity-40 hover:opacity-80 hover:text-gold-400 transition-all py-2">
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
