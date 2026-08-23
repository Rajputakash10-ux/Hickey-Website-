import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

const NAV = [
  { label: 'Why HICKEY', href: '/#why-hickey' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/#faq' },
];

function NavLink({ label, href, isActive, onClick }: {
  label: string; href: string; isActive: boolean; onClick?: () => void;
}) {
  const [clicked, setClicked] = useState(false);
  const [ripple, setRipple] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleClick = () => {
    setRipple(true);
    setClicked(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setRipple(false);
      setClicked(false);
    }, 700);
    onClick?.();
  };

  const isLocked = isActive || clicked;

  const inner = (
    <span className="relative inline-flex flex-col items-center gap-0.5">
      {/* Ripple */}
      <AnimatePresence>
        {ripple && (
          <motion.span
            className="absolute inset-0 rounded-sm pointer-events-none"
            initial={{ opacity: 0.5, scale: 0.6 }}
            animate={{ opacity: 0, scale: 2.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            style={{ background: 'rgba(201,164,92,0.18)', borderRadius: 4 }}
          />
        )}
      </AnimatePresence>

      <span
        style={{
          fontSize: '0.58rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontFamily: 'var(--font-sans)',
          color: isLocked ? 'var(--color-gold-400)' : 'rgba(244,237,227,0.55)',
          transition: 'color 0.2s ease',
          fontWeight: isLocked ? 600 : 400,
        }}
      >
        {label}
      </span>

      {/* Underline — locked when active/clicked */}
      <motion.span
        style={{
          display: 'block',
          height: 1,
          background: 'var(--color-gold-500)',
          borderRadius: 1,
          boxShadow: isLocked ? '0 0 6px rgba(201,164,92,0.6)' : 'none',
        }}
        animate={{ width: isLocked ? '100%' : '0%', opacity: isLocked ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      />
    </span>
  );

  if (href.startsWith('/#')) {
    return (
      <button
        onClick={handleClick}
        className="relative bg-transparent border-none cursor-pointer py-1 px-0.5 group"
        onMouseEnter={e => {
          if (!isLocked) (e.currentTarget.querySelector('span > span:first-of-type') as HTMLElement)?.style.setProperty('color', 'rgba(244,237,227,0.9)');
        }}
        onMouseLeave={e => {
          if (!isLocked) (e.currentTarget.querySelector('span > span:first-of-type') as HTMLElement)?.style.setProperty('color', 'rgba(244,237,227,0.55)');
        }}
      >
        {inner}
      </button>
    );
  }

  return (
    <Link to={href} onClick={handleClick} className="relative py-1 px-0.5">
      {inner}
    </Link>
  );
}

export default function Navbar({ cartCount, onCartOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
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
    setActiveAnchor(href);
    setTimeout(() => setActiveAnchor(''), 800);
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
          background: scrolled ? 'rgba(14,8,20,0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(22px) saturate(1.4)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,164,92,0.09)' : 'none',
          transition: 'all 0.35s ease',
        }}
      >
        <div className="container-site">
          <div
            className="flex items-center justify-between"
            style={{ height: scrolled ? 52 : 62, transition: 'height 0.3s ease' }}
          >
            {/* Logo */}
            <Link to="/" className="flex flex-col leading-none flex-shrink-0 group" aria-label="HICKEY Home">
              <span
                className="font-serif font-light tracking-[0.3em] group-hover:text-gold-400 transition-colors duration-300"
                style={{ fontSize: 'clamp(1.05rem, 3vw, 1.25rem)', color: 'var(--color-cream-100)' }}
              >
                HICKEY
              </span>
              <span
                className="font-sans tracking-[0.35em] uppercase text-gold-500"
                style={{ fontSize: '0.48rem', marginTop: 1, opacity: 0.7 }}
              >
                Crafted for Connection
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
              {NAV.map(link => (
                <NavLink
                  key={link.label}
                  label={link.label}
                  href={link.href}
                  isActive={link.href.startsWith('/#') ? activeAnchor === link.href : pathname === link.href}
                  onClick={link.href.startsWith('/#') ? () => handleAnchor(link.href) : undefined}
                />
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1">
              {/* Shop CTA */}
              <button
                onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
                className="hidden lg:inline-flex items-center font-sans uppercase"
                style={{
                  fontSize: '0.55rem',
                  letterSpacing: '0.22em',
                  padding: '0.45rem 1.2rem',
                  border: '1px solid rgba(201,164,92,0.3)',
                  background: 'rgba(201,164,92,0.05)',
                  color: 'var(--color-cream-100)',
                  transition: 'all 0.22s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(201,164,92,0.12)';
                  el.style.borderColor = 'rgba(201,164,92,0.55)';
                  el.style.color = 'var(--color-gold-400)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background = 'rgba(201,164,92,0.05)';
                  el.style.borderColor = 'rgba(201,164,92,0.3)';
                  el.style.color = 'var(--color-cream-100)';
                }}
              >
                Shop Now
              </button>

              {/* Cart icon */}
              <motion.button
                aria-label={`Cart — ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
                onClick={onCartOpen}
                className="relative flex items-center justify-center"
                style={{ width: 46, height: 46, color: 'var(--color-cream-200)' }}
                whileHover={{ color: 'var(--color-gold-400)' }}
                whileTap={{ scale: 0.88 }}
                transition={{ duration: 0.15 }}
              >
                <ShoppingBag size={23} strokeWidth={1.4} />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute flex items-center justify-center rounded-full font-sans font-bold"
                      style={{
                        top: 6, right: 6,
                        width: 17, height: 17,
                        fontSize: 8.5,
                        background: 'var(--color-gold-500)',
                        color: '#160D1E',
                        boxShadow: '0 0 8px rgba(201,164,92,0.5)',
                      }}
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Hamburger */}
              <motion.button
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMenuOpen(v => !v)}
                className="lg:hidden flex items-center justify-center"
                style={{ width: 46, height: 46, color: 'var(--color-cream-200)' }}
                whileHover={{ color: 'var(--color-gold-400)' }}
                whileTap={{ scale: 0.88 }}
                transition={{ duration: 0.15 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={menuOpen ? 'x' : 'menu'}
                    initial={{ opacity: 0, rotate: -80, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 80, scale: 0.7 }}
                    transition={{ duration: 0.22 }}
                  >
                    {menuOpen
                      ? <X size={24} strokeWidth={1.4} />
                      : <Menu size={24} strokeWidth={1.4} />
                    }
                  </motion.span>
                </AnimatePresence>
              </motion.button>
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
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 lg:hidden flex flex-col"
            style={{ background: 'rgba(10,6,16,0.97)', backdropFilter: 'blur(28px)', paddingTop: 62 }}
          >
            <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(201,164,92,0.35), transparent)' }} />

            <nav className="flex flex-col flex-1 justify-center px-8 gap-0" aria-label="Mobile navigation">
              {NAV.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.065, duration: 0.32 }}
                  style={{ borderBottom: '1px solid rgba(201,164,92,0.07)' }}
                >
                  {link.href.startsWith('/#') ? (
                    <button onClick={() => handleAnchor(link.href)} className="w-full text-left py-5 bg-transparent border-none cursor-pointer group">
                      <span className="font-serif font-light text-cream-100 group-hover:text-gold-400 transition-colors duration-200" style={{ fontSize: 'clamp(1.6rem, 6vw, 2.2rem)' }}>
                        {link.label}
                      </span>
                    </button>
                  ) : (
                    <Link to={link.href} className="block py-5 group">
                      <span className="font-serif font-light text-cream-100 group-hover:text-gold-400 transition-colors duration-200" style={{ fontSize: 'clamp(1.6rem, 6vw, 2.2rem)' }}>
                        {link.label}
                      </span>
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.32 }}
              className="px-8 pb-12"
            >
              <button
                onClick={() => { setMenuOpen(false); setTimeout(() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
                className="flex items-center justify-center w-full font-sans uppercase"
                style={{
                  minHeight: 52,
                  fontSize: '0.62rem',
                  letterSpacing: '0.25em',
                  background: 'var(--color-gold-500)',
                  color: '#160D1E',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Shop HICKEY
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
