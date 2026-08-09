import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../data';

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

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

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(8,5,10,0.95)' : 'linear-gradient(to bottom, rgba(8,5,10,0.8) 0%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,149,106,0.1)' : 'none',
          paddingTop: 'env(safe-area-inset-top)',
        }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between" style={{ height: 60 }}>

            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none flex-shrink-0" aria-label="HICKEY Home">
              <span className="font-serif font-light tracking-[0.2em] text-cream-100" style={{ fontSize: 'clamp(1.1rem, 5vw, 1.5rem)' }}>HICKEY</span>
              <span className="font-sans text-[7px] tracking-[0.3em] uppercase text-gold-500 -mt-0.5">Crafted for Connection</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-sans text-xs tracking-widest uppercase transition-colors duration-200"
                  style={{ color: pathname === link.href ? 'var(--color-gold-500)' : 'rgba(245,232,220,0.7)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-cream-100)')}
                  onMouseLeave={e => (e.currentTarget.style.color = pathname === link.href ? 'var(--color-gold-500)' : 'rgba(245,232,220,0.7)')}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Link to="/shop" className="btn-primary hidden lg:inline-flex text-[0.65rem] py-2.5 px-5">
                Claim Free Experience
              </Link>

              <button
                aria-label="Search"
                className="hidden sm:flex items-center justify-center text-cream-200 hover:text-gold-400 transition-colors"
                style={{ width: 44, height: 44 }}
              >
                <Search size={17} />
              </button>

              <button
                aria-label={`Cart — ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
                onClick={onCartOpen}
                className="relative flex items-center justify-center text-cream-200 hover:text-gold-400 transition-colors"
                style={{ width: 44, height: 44 }}
              >
                <ShoppingBag size={17} />
                {cartCount > 0 && (
                  <span
                    className="absolute flex items-center justify-center rounded-full font-sans font-bold text-cream-100"
                    style={{ top: 6, right: 6, width: 16, height: 16, fontSize: 9, background: 'var(--color-wine-600)' }}
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
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: 'var(--color-ink-950)', paddingTop: 'calc(60px + env(safe-area-inset-top))' }}
          >
            {/* Nav links */}
            <nav className="flex flex-col flex-1 justify-center px-8 gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    to={link.href}
                    className="flex items-center justify-between py-4 transition-colors"
                    style={{
                      borderBottom: '1px solid rgba(201,149,106,0.08)',
                      color: pathname === link.href ? 'var(--color-gold-400)' : 'var(--color-cream-100)',
                    }}
                  >
                    <span className="font-serif font-light" style={{ fontSize: 'clamp(1.6rem, 7vw, 2.2rem)' }}>
                      {link.label}
                    </span>
                    <ArrowRight size={16} style={{ color: 'var(--color-gold-500)', opacity: 0.6 }} />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="px-8 pb-10"
              style={{ paddingBottom: 'max(2.5rem, env(safe-area-inset-bottom) + 1.5rem)' }}
            >
              <Link to="/experience" className="btn-gold w-full justify-center gap-2" style={{ minHeight: 52 }}>
                Claim Free Experience <ArrowRight size={13} />
              </Link>
              <div className="flex items-center justify-center gap-4 mt-6">
                <a href="https://www.instagram.com/hickey.co.in" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="font-sans text-xs tracking-widest uppercase text-cream-400 opacity-50 hover:opacity-100 transition-opacity">Instagram</a>
                <span className="w-px h-3" style={{ background: 'rgba(201,149,106,0.2)' }} />
                <a href="mailto:support@hickey.co.in" aria-label="Email" className="font-sans text-xs tracking-widest uppercase text-cream-400 opacity-50 hover:opacity-100 transition-opacity">Contact</a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
