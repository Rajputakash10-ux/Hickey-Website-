import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';

const LINKS = {
  shop: [
    { label: 'All Products', href: '/shop' },
    { label: 'Featured Product', href: '/shop' },
    { label: 'Monthly Drops', href: '/shop' },
  ],
  explore: [
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: '5-Day Experience', href: '/experience' },
  ],
  help: [
    { label: 'FAQ', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Shipping Policy', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Privacy Policy', href: '#' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer style={{ background: 'var(--color-ink-950)', borderTop: '1px solid rgba(201,163,90,0.08)' }}>
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex flex-col leading-none">
              <span className="font-serif text-2xl font-light tracking-[0.2em] text-cream-100">HICKEY</span>
              <span className="font-sans text-[8px] tracking-[0.35em] uppercase text-gold-500 mt-0.5">Crafted for Connection</span>
            </Link>
            <p className="font-sans text-sm text-cream-300 opacity-50 leading-relaxed mt-5 max-w-xs">
              Premium intimacy experiences for modern couples. Monthly drops, sensory rituals and date night kits.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/hickey.co.in" target="_blank" rel="noopener noreferrer" aria-label="HICKEY on Instagram" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{ border: '1px solid rgba(201,163,90,0.15)', color: 'var(--color-cream-300)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com/hickey.co.in" target="_blank" rel="noopener noreferrer" aria-label="HICKEY on Facebook" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{ border: '1px solid rgba(201,163,90,0.15)', color: 'var(--color-cream-300)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="mailto:support@hickey.co.in" aria-label="Email HICKEY" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{ border: '1px solid rgba(201,163,90,0.15)', color: 'var(--color-cream-300)' }}>
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-cream-100 font-semibold mb-5">Shop</h4>
            <ul className="space-y-3">
              {LINKS.shop.map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="font-sans text-sm text-cream-300 opacity-50 hover:opacity-100 hover:text-gold-400 transition-all">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-cream-100 font-semibold mb-5">Explore</h4>
            <ul className="space-y-3">
              {LINKS.explore.map(l => (
                <li key={l.label}>
                  <Link to={l.href} className="font-sans text-sm text-cream-300 opacity-50 hover:opacity-100 hover:text-gold-400 transition-all">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help + Newsletter */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="font-sans text-[10px] tracking-widest uppercase text-cream-100 font-semibold mb-5">Help</h4>
              <ul className="space-y-3">
                {LINKS.help.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="font-sans text-sm text-cream-300 opacity-50 hover:opacity-100 hover:text-gold-400 transition-all">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini newsletter */}
            <div>
              <h4 className="font-sans text-[10px] tracking-widest uppercase text-cream-100 font-semibold mb-4">Newsletter</h4>
              {submitted ? (
                <p className="font-sans text-xs text-gold-500">You're subscribed ✓</p>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    aria-label="Newsletter email"
                    className="w-full px-4 py-2.5 rounded-full font-sans text-xs text-cream-100 placeholder-cream-400 outline-none"
                    style={{ background: 'var(--color-ink-800)', border: '1px solid rgba(201,163,90,0.15)' }}
                  />
                  <button type="submit" className="btn-primary py-2.5 gap-1.5 text-[0.6rem]">
                    Subscribe <ArrowRight size={11} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(201,163,90,0.08)' }}>
          <p className="font-sans text-xs text-cream-400 opacity-30">
            © {new Date().getFullYear()} HICKEY. All rights reserved. hickey.co.in
          </p>
          <p className="font-sans text-xs text-cream-400 opacity-25 text-center sm:text-right max-w-sm">
            For adults only. Not intended to diagnose, treat, cure or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
