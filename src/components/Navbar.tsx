import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
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

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(10,6,8,0.92)'
            : 'linear-gradient(to bottom, rgba(10,6,8,0.7) 0%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,163,90,0.1)' : 'none',
        }}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-light tracking-[0.2em] text-cream-100">HICKEY</span>
              <span className="text-gold-500 font-sans text-[8px] tracking-[0.35em] uppercase font-medium -mt-0.5">
                Crafted for Connection
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="font-sans text-xs tracking-widest uppercase transition-colors duration-200"
                  style={{
                    color: pathname === link.href
                      ? 'var(--color-gold-500)'
                      : 'rgba(245,237,224,0.7)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-cream-100)')}
                  onMouseLeave={e => (e.currentTarget.style.color = pathname === link.href ? 'var(--color-gold-500)' : 'rgba(245,237,224,0.7)')}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <Link to="/shop" className="btn-primary hidden lg:inline-flex text-[0.65rem] py-2.5 px-5">
                Claim Free Experience
              </Link>
              <button aria-label="Search" className="hidden lg:flex w-9 h-9 items-center justify-center text-cream-200 hover:text-gold-400 transition-colors">
                <Search size={16} />
              </button>
              <button
                aria-label={`Cart — ${cartCount} items`}
                onClick={onCartOpen}
                className="relative w-9 h-9 flex items-center justify-center text-cream-200 hover:text-gold-400 transition-colors"
              >
                <ShoppingBag size={16} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-wine-600 text-cream-100 text-[9px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button aria-label="Account" className="hidden lg:flex w-9 h-9 items-center justify-center text-cream-200 hover:text-gold-400 transition-colors">
                <User size={16} />
              </button>
              <button
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMenuOpen(v => !v)}
                className="lg:hidden w-9 h-9 flex items-center justify-center text-cream-200"
              >
                {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col pt-16"
            style={{ background: 'rgba(10,6,8,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.href}
                    className="font-serif text-3xl font-light text-cream-100 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link to="/shop" className="btn-primary mt-4">Claim Free Experience</Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
