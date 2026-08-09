import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ChevronDown } from 'lucide-react';

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

type AccordionKey = 'shop' | 'explore' | 'help';

function AccordionSection({ title, open, onToggle, children }: { title: string; open: boolean; onToggle: () => void; children: React.ReactNode }) {
  return (
    <div style={{ borderBottom: '1px solid rgba(201,164,92,0.08)' }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 lg:py-0 lg:mb-5 lg:cursor-default"
        aria-expanded={open}
        style={{ background: 'none', border: 'none' }}
      >
        <h4 className="font-sans text-[10px] tracking-widest uppercase text-cream-100 font-semibold">{title}</h4>
        <ChevronDown
          size={14}
          className="lg:hidden text-cream-400 transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', opacity: 0.5 }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300 lg:block"
        style={{ maxHeight: open ? 300 : 0, opacity: open ? 1 : 0 }}
      >
        <ul className="space-y-3 pb-4 lg:pb-0">
          {children}
        </ul>
      </div>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState<AccordionKey | null>(null);

  const toggle = (key: AccordionKey) => setOpen(prev => prev === key ? null : key);

  return (
    <footer style={{ background: '#24152F', borderTop: '1px solid rgba(201,164,92,0.08)' }}>
      <div className="container-site py-12 lg:py-20">

        {/* Mobile: brand + newsletter on top */}
        <div className="flex flex-col lg:hidden gap-6 mb-8 pb-8" style={{ borderBottom: '1px solid rgba(201,164,92,0.08)' }}>
          <Link to="/" className="inline-flex flex-col leading-none">
            <span className="font-serif text-2xl font-light tracking-[0.2em] text-cream-100">HICKEY</span>
            <span className="font-sans text-[8px] tracking-[0.35em] uppercase text-gold-500 mt-0.5">Crafted for Connection</span>
          </Link>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/hickey.co.in" target="_blank" rel="noopener noreferrer" aria-label="HICKEY on Instagram" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: '1px solid rgba(201,164,92,0.15)', color: 'var(--color-cream-300)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/hickey.co.in" target="_blank" rel="noopener noreferrer" aria-label="HICKEY on Facebook" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: '1px solid rgba(201,164,92,0.15)', color: 'var(--color-cream-300)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="mailto:support@hickey.co.in" aria-label="Email HICKEY" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: '1px solid rgba(201,164,92,0.15)', color: 'var(--color-cream-300)' }}>
              <Mail size={14} />
            </a>
          </div>
          {/* Mobile newsletter */}
          {submitted ? (
            <p className="font-sans text-xs text-gold-500">You're subscribed ✓</p>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-2">
              <p className="font-sans text-[10px] tracking-widest uppercase text-cream-100 font-semibold mb-1">Newsletter</p>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                aria-label="Newsletter email"
                className="w-full px-4 py-3 rounded-full font-sans text-sm text-cream-100 placeholder-cream-400 outline-none"
                style={{ background: '#40234B', border: '1px solid rgba(201,164,92,0.15)', minHeight: 48 }}
              />
              <button type="submit" className="btn-primary gap-1.5" style={{ minHeight: 48 }}>
                Subscribe <ArrowRight size={11} />
              </button>
            </form>
          )}
        </div>

        {/* Mobile accordions */}
        <div className="lg:hidden flex flex-col mb-8">
          <AccordionSection title="Shop" open={open === 'shop'} onToggle={() => toggle('shop')}>
            {LINKS.shop.map(l => (
              <li key={l.label}><Link to={l.href} className="font-sans text-sm text-cream-300 opacity-60">{l.label}</Link></li>
            ))}
          </AccordionSection>
          <AccordionSection title="Explore" open={open === 'explore'} onToggle={() => toggle('explore')}>
            {LINKS.explore.map(l => (
              <li key={l.label}><Link to={l.href} className="font-sans text-sm text-cream-300 opacity-60">{l.label}</Link></li>
            ))}
          </AccordionSection>
          <AccordionSection title="Help" open={open === 'help'} onToggle={() => toggle('help')}>
            {LINKS.help.map(l => (
              <li key={l.label}><a href={l.href} className="font-sans text-sm text-cream-300 opacity-60">{l.label}</a></li>
            ))}
          </AccordionSection>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:grid grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link to="/" className="inline-flex flex-col leading-none">
              <span className="font-serif text-2xl font-light tracking-[0.2em] text-cream-100">HICKEY</span>
              <span className="font-sans text-[8px] tracking-[0.35em] uppercase text-gold-500 mt-0.5">Crafted for Connection</span>
            </Link>
            <p className="font-sans text-sm text-cream-300 opacity-50 leading-relaxed mt-5 max-w-xs">
              Premium intimacy experiences for modern couples. Monthly drops, sensory rituals and date night kits.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/hickey.co.in" target="_blank" rel="noopener noreferrer" aria-label="HICKEY on Instagram" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{ border: '1px solid rgba(201,164,92,0.15)', color: 'var(--color-cream-300)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com/hickey.co.in" target="_blank" rel="noopener noreferrer" aria-label="HICKEY on Facebook" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{ border: '1px solid rgba(201,164,92,0.15)', color: 'var(--color-cream-300)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="mailto:support@hickey.co.in" aria-label="Email HICKEY" className="w-9 h-9 rounded-full flex items-center justify-center transition-colors" style={{ border: '1px solid rgba(201,164,92,0.15)', color: 'var(--color-cream-300)' }}>
                <Mail size={14} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-cream-100 font-semibold mb-5">Shop</h4>
            <ul className="space-y-3">{LINKS.shop.map(l => <li key={l.label}><Link to={l.href} className="font-sans text-sm text-cream-300 opacity-50 hover:opacity-100 hover:text-gold-400 transition-all">{l.label}</Link></li>)}</ul>
          </div>
          <div>
            <h4 className="font-sans text-[10px] tracking-widest uppercase text-cream-100 font-semibold mb-5">Explore</h4>
            <ul className="space-y-3">{LINKS.explore.map(l => <li key={l.label}><Link to={l.href} className="font-sans text-sm text-cream-300 opacity-50 hover:opacity-100 hover:text-gold-400 transition-all">{l.label}</Link></li>)}</ul>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="font-sans text-[10px] tracking-widest uppercase text-cream-100 font-semibold mb-5">Help</h4>
              <ul className="space-y-3">{LINKS.help.map(l => <li key={l.label}><a href={l.href} className="font-sans text-sm text-cream-300 opacity-50 hover:opacity-100 hover:text-gold-400 transition-all">{l.label}</a></li>)}</ul>
            </div>
            <div>
              <h4 className="font-sans text-[10px] tracking-widest uppercase text-cream-100 font-semibold mb-4">Newsletter</h4>
              {submitted ? (
                <p className="font-sans text-xs text-gold-500">You're subscribed ✓</p>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-2">
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required aria-label="Newsletter email" className="w-full px-4 py-2.5 rounded-full font-sans text-xs text-cream-100 placeholder-cream-400 outline-none" style={{ background: '#40234B', border: '1px solid rgba(201,164,92,0.15)' }} />
                  <button type="submit" className="btn-primary py-2.5 gap-1.5 text-[0.6rem]">Subscribe <ArrowRight size={11} /></button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 lg:mt-14 pt-6 lg:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(201,164,92,0.08)' }}>
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
