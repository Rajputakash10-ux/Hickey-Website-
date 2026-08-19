import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';

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
        className="fixed left-0 right-0 top-0 z-50"
        style={{
          background: scrolled ? 'rgba(16,9,22,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,164,92,0.1)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="container-site">
          <div
            className="flex items-center justify-between"
            style={{ height: scrolled ? 58 : 70, transition: 'height 0.3s ease' }}
          >
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none flex-shrink-0 group" aria-label="HICKEY Home">
              <span
                className="font-serif font-light tracking-[0.28em] text-cream-100 group-hover:text-gold-400 transition-colors duration-300"
                style={{ fontSize: 'clamp(1.15rem, 3.5vw, 1.4rem)' }}
              >
                HICKEY
              </span>
              <span
                className="font-sans tracking-[0.32em] uppercase text-gold-500"
                style={{ fontSize: '0.52rem', marginTop: 1, opacity: 0.75 }}
              >
                Crafted for Connection
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV.map(link => {
                const isActive = pathname === link.href;
                return link.href.startsWith('/#') ? (
                  <button
                    key={link.label}
                    onClick={() => handleAnchor(link.href)}
                    className="relative group font-sans bg-transparent border-none cursor-pointer py-1"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(244,237,227,0.6)' }}
                  >
                    <span className="group-hover:text-cream-100 transition-colors duration-200">{link.label}</span>
                    <span
                      className="absolute bottom-0 left-0 h-px bg-gold-500 transition-all duration-300"
                      style={{ width: '0%' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.width = '100%'; }}
                    />
                    <span
                      className="absolute bottom-0 left-0 h-px transition-all duration-300 group-hover:w-full"
                      style={{ width: '0%', background: 'var(--color-gold-500)' }}
                    />
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="relative group font-sans py-1"
                    style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: isActive ? 'var(--color-gold-500)' : 'rgba(244,237,227,0.6)',
                    }}
                  >
                    <span className="group-hover:text-cream-100 transition-colors duration-200">{link.label}</span>
                    <span
                      className="absolute bottom-0 left-0 h-px transition-all duration-300 group-hover:w-full"
                      style={{ width: isActive ? '100%' : '0%', background: 'var(--color-gold-500)' }}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <Link
                to="/shop"
                className="hidden lg:inline-flex items-center gap-2 font-sans uppercase tracking-widest text-cream-100 hover:text-gold-400 transition-colors duration-200"
                style={{
                  fontSize: '0.58rem',
                  padding: '0.55rem 1.4rem',
                  border: '1px solid rgba(201,164,92,0.35)',
                  background: 'rgba(201,164,92,0.06)',
                  letterSpacing: '0.2em',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(201,164,92,0.14)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,164,92,0.6)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(201,164,92,0.06)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,164,92,0.35)';
                }}
              >
                Shop Now
              </Link>

              {/* Cart */}
              <button
                aria-label={`Cart — ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
                onClick={onCartOpen}
                className="relative flex items-center justify-center text-cream-300 hover:text-gold-400 transition-colors duration-200"
                style={{ width: 44, height: 44 }}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute flex items-center justify-center rounded-full font-sans font-bold"
                    style={{
                      top: 7, right: 7,
                      width: 16, height: 16,
                      fontSize: 8,
                      background: 'var(--color-gold-500)',
                      color: '#160D1E',
                    }}
                  >
                    {cartCount}
                  </motion.span>
                )}
              </button>

              {/* Hamburger */}
              <button
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMenuOpen(v => !v)}
                className="lg:hidden flex items-center justify-center text-cream-200 hover:text-gold-400 transition-colors duration-200"
                style={{ width: 44, height: 44 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={menuOpen ? 'x' : 'menu'}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: 'rgba(12,7,18,0.98)', backdropFilter: 'blur(24px)', paddingTop: 70 }}
          >
            {/* Gold top line */}
            <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(201,164,92,0.4), transparent)' }} />

            <nav className="flex flex-col flex-1 justify-center px-8 gap-0" aria-label="Mobile navigation">
              {NAV.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  style={{ borderBottom: '1px solid rgba(201,164,92,0.08)' }}
                >
                  {link.href.startsWith('/#') ? (
                    <button onClick={() => handleAnchor(link.href)} className="w-full text-left py-5 bg-transparent border-none cursor-pointer group">
                      <span className="font-serif font-light text-cream-100 group-hover:text-gold-400 transition-colors duration-200" style={{ fontSize: 'clamp(1.7rem, 6vw, 2.4rem)' }}>
                        {link.label}
                      </span>
                    </button>
                  ) : (
                    <Link to={link.href} className="block py-5 group">
                      <span className="font-serif font-light text-cream-100 group-hover:text-gold-400 transition-colors duration-200" style={{ fontSize: 'clamp(1.7rem, 6vw, 2.4rem)' }}>
                        {link.label}
                      </span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.35 }}
              className="px-8 pb-12"
            >
              <Link
                to="/shop"
                className="flex items-center justify-center w-full font-sans uppercase tracking-widest text-cream-100"
                style={{
                  minHeight: 54,
                  fontSize: '0.65rem',
                  letterSpacing: '0.25em',
                  background: 'var(--color-gold-500)',
                  color: '#160D1E',
                  fontWeight: 700,
                }}
              >
                Shop HICKEY
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
