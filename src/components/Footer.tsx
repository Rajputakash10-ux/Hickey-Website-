import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const LINKS = [
  { label: 'FAQ', href: '/#faq' },
  { label: 'Track Order', href: '/track-order' },
  { label: 'Contact', href: 'mailto:support@hickey.co.in' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#FFFDF9', borderTop: '1px solid rgba(184,134,11,0.1)' }}>
      <div className="container-site py-10 lg:py-14">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8 pb-8" style={{ borderBottom: '1px solid rgba(184,134,11,0.09)' }}>
          <Link to="/" className="flex flex-col leading-none" aria-label="HICKEY Home">
            <span className="font-serif text-xl font-light tracking-[0.22em] text-choc-900">HICKEY</span>
            <span className="font-sans text-[7px] tracking-[0.3em] uppercase text-gold-500 mt-0.5">Crafted for Connection</span>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href="https://www.instagram.com/hickey.co.in"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="HICKEY on Instagram"
              className="w-9 h-9 rounded-full flex items-center justify-center text-choc-700 hover:text-gold-400 transition-all duration-200 hover:scale-110"
              style={{ border: '1px solid rgba(184,134,11,0.15)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a
              href="mailto:support@hickey.co.in"
              aria-label="Email HICKEY"
              className="w-9 h-9 rounded-full flex items-center justify-center text-choc-700 hover:text-gold-400 transition-all duration-200 hover:scale-110"
              style={{ border: '1px solid rgba(184,134,11,0.15)' }}
            >
              <Mail size={14} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
          {LINKS.map(link => (
            link.href.startsWith('mailto') || link.href === '#' ? (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-choc-700 hover:text-gold-400 transition-colors"
                style={{ opacity: 0.5 }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '0.5'; }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="font-sans text-sm text-choc-700 hover:text-gold-400 transition-colors"
                style={{ opacity: 0.5 }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '0.5'; }}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="font-sans text-xs text-choc-600" style={{ opacity: 0.3 }}>
            © {new Date().getFullYear()} HICKEY. All rights reserved.
          </p>
          <p className="font-sans text-xs text-choc-600 text-right" style={{ opacity: 0.25 }}>
            For adults only. Not intended to diagnose, treat, cure or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
