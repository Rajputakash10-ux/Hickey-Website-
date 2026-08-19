import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Star } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

const NAV = [
  { label: 'Shop', href: '/shop' },
  { label: 'Why HICKEY', href: '/#why-hickey' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/#faq' },
];

const MARQUEE_PHOTOS = [
  '/assets/etx-1.png',
  '/assets/etx-2.png',
  '/assets/etx-3.png',
  '/assets/etx-4.png',
  '/assets/etx-1.png',
  '/assets/etx-2.png',
  '/assets/etx-3.png',
  '/assets/etx-4.png',
];

export default function Navbar({ cartCount, onCartOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleAnchor = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  return (
    <>
      <header
        className="fixed left-0 right-0 top-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? 'rgba(22,13,30,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,164,92,0.08)' : 'none',
        }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between" style={{ height: scrolled ? 56 : 64, transition: 'height 0.3s ease' }}>

            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none flex-shrink-0" aria-label="HICKEY Home">
              <span className="font-serif font-light tracking-[0.22em] text-cream-100" style={{ fontSize: 'clamp(1.1rem, 3.5vw, 1.35rem)' }}>
                HICKEY
              </span>
              <span className="font-sans text-[7px] tracking-[0.3em] uppercase text-gold-500" style={{ marginTop: '-1px' }}>
                Crafted for Connection
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
              {NAV.map(link =>
                link.href.startsWith('/#') ? (
                  <button
                    key={link.label}
                    onClick={() => handleAnchor(link.href)}
                    className="font-sans text-[0.62rem] tracking-widest uppercase text-cream-300 hover:text-cream-100 transition-colors bg-transparent border-none cursor-pointer"
                    style={{ opacity: 0.65 }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = '1'; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = '0.65'; }}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="font-sans text-[0.62rem] tracking-widest uppercase transition-colors"
                    style={{ color: pathname === link.href ? 'var(--color-gold-500)' : 'rgba(244,237,227,0.65)' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--color-cream-100)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = pathname === link.href ? 'var(--color-gold-500)' : 'rgba(244,237,227,0.65)'; }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-1">
              <Link
                to="/shop"
                className="btn-gold hidden lg:inline-flex"
                style={{ fontSize: '0.6rem', padding: '0.55rem 1.3rem' }}
              >
                Shop HICKEY
              </Link>

              <button
                aria-label={`Cart — ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
                onClick={onCartOpen}
                className="relative flex items-center justify-center text-cream-200 hover:text-gold-400 transition-colors"
                style={{ width: 44, height: 44 }}
              >
                <ShoppingBag size={18} />
                {cartCount > 0 && (
                  <span
                    className="absolute flex items-center justify-center rounded-full font-sans font-bold"
                    style={{ top: 8, right: 8, width: 15, height: 15, fontSize: 8, background: 'var(--color-gold-500)', color: '#160D1E' }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMenuOpen(v => !v)}
                className="lg:hidden flex items-center justify-center text-cream-200"
                style={{ width: 44, height: 44 }}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Photo marquee strip — visible when scrolled */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 52, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
              style={{ borderTop: '1px solid rgba(201,164,92,0.08)' }}
            >
              <div
                className="flex items-center gap-2 h-full"
                style={{ animation: 'marqueeLeft 18s linear infinite', width: 'max-content' }}
              >
                {MARQUEE_PHOTOS.map((src, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 overflow-hidden"
                    style={{
                      width: 44, height: 44,
                      border: '1px solid rgba(201,164,92,0.15)',
                      background: '#321D3D',
                    }}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: '#160D1E', paddingTop: 64 }}
          >
            {/* Rating strip in mobile menu */}
            <div className="flex items-center justify-center gap-2 py-3" style={{ borderBottom: '1px solid rgba(201,164,92,0.08)' }}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="var(--color-gold-500)" stroke="none" />)}
              </div>
              <span className="font-sans text-cream-400" style={{ fontSize: '0.65rem', opacity: 0.6 }}>4.9 · 14,000+ couples</span>
            </div>

            <nav className="flex flex-col flex-1 justify-center px-8 gap-0" aria-label="Mobile navigation">
              {NAV.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35 }}
                  style={{ borderBottom: '1px solid rgba(201,164,92,0.07)' }}
                >
                  {link.href.startsWith('/#') ? (
                    <button onClick={() => handleAnchor(link.href)} className="w-full text-left py-5 bg-transparent border-none cursor-pointer">
                      <span className="font-serif font-light text-cream-100" style={{ fontSize: 'clamp(1.6rem, 6vw, 2.2rem)' }}>{link.label}</span>
                    </button>
                  ) : (
                    <Link to={link.href} className="block py-5">
                      <span className="font-serif font-light text-cream-100" style={{ fontSize: 'clamp(1.6rem, 6vw, 2.2rem)' }}>{link.label}</span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.35 }}
              className="px-8 pb-10 safe-bottom"
            >
              <Link to="/shop" className="btn-gold w-full justify-center" style={{ minHeight: 52 }}>
                Shop HICKEY
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
