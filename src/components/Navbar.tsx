import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed left-0 right-0 z-50 transition-all duration-500"
        style={{
          top: 0,
          background: scrolled ? 'rgba(36,21,47,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,164,92,0.1)' : 'none',
        }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between" style={{ height: 64 }}>

            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none flex-shrink-0" aria-label="HICKEY Home">
              <span className="font-serif font-light tracking-[0.25em] text-cream-100" style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)' }}>HICKEY</span>
              <span className="font-sans text-[7px] tracking-[0.3em] uppercase text-gold-500" style={{ marginTop: '-1px' }}>Crafted for Connection</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map(link => (
                link.href.startsWith('/#') ? (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="font-sans text-[0.65rem] tracking-widest uppercase transition-colors duration-200 bg-transparent border-none cursor-pointer"
                    style={{ color: 'rgba(244,237,227,0.65)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-cream-100)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(244,237,227,0.65)')}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="font-sans text-[0.65rem] tracking-widest uppercase transition-colors duration-200"
                    style={{ color: pathname === link.href ? 'var(--color-gold-500)' : 'rgba(244,237,227,0.65)' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-cream-100)')}
                    onMouseLeave={e => (e.currentTarget.style.color = pathname === link.href ? 'var(--color-gold-500)' : 'rgba(244,237,227,0.65)')}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1">
              <Link to="/shop" className="btn-gold hidden lg:inline-flex gap-2" style={{ fontSize: '0.62rem', padding: '0.6rem 1.4rem' }}>
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
                    className="absolute flex items-center justify-center rounded-full font-sans font-bold text-cream-100"
                    style={{ top: 7, right: 7, width: 16, height: 16, fontSize: 9, background: 'var(--color-gold-500)', color: '#160D1E' }}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: '#24152F', paddingTop: 64 }}
          >
            <nav className="flex flex-col flex-1 justify-center px-8 gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  {link.href.startsWith('/#') ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full flex items-center justify-between py-5 bg-transparent border-none cursor-pointer"
                      style={{ borderBottom: '1px solid rgba(201,164,92,0.08)' }}
                    >
                      <span className="font-serif font-light text-cream-100" style={{ fontSize: 'clamp(1.8rem, 7vw, 2.4rem)' }}>
                        {link.label}
                      </span>
                      <ArrowRight size={16} style={{ color: 'var(--color-gold-500)', opacity: 0.5 }} />
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="flex items-center justify-between py-5"
                      style={{ borderBottom: '1px solid rgba(201,164,92,0.08)', color: 'var(--color-cream-100)' }}
                    >
                      <span className="font-serif font-light" style={{ fontSize: 'clamp(1.8rem, 7vw, 2.4rem)' }}>
                        {link.label}
                      </span>
                      <ArrowRight size={16} style={{ color: 'var(--color-gold-500)', opacity: 0.5 }} />
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="px-8 pb-10"
            >
              <Link to="/shop" className="btn-gold w-full justify-center gap-2" style={{ minHeight: 52 }}>
                Shop HICKEY <ArrowRight size={13} />
              </Link>
              <p className="text-center font-sans text-[10px] tracking-widest uppercase text-gold-500 opacity-60 mt-4">
                Free Scratch Card with Every Pack
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
