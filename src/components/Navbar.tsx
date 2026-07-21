import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageSquare, Printer, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waLink = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('Hello! I would like to order print services from DubeSOS Printing.')}`;

  const navLinks = [
    { name: 'Services & Pricing', href: '#services' },
    { name: 'Price Estimator', href: '#estimator' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      id="navbar"
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-light-border shadow-sm' 
          : 'bg-white border-b border-gray-light-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo (use image assets) */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-3 group"
              id="nav-logo"
            >
              <img src="/assets/logo.png" alt="DubeSOS Printing logo" className="h-8 w-auto object-contain" />
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-dark-main">
                DubeSOS<span className="text-brand-orange">Printing</span>
              </span>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-gray-muted hover:text-brand-orange text-sm font-semibold transition-colors duration-200 relative py-1 group"
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Header Action CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={waLink}
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200"
              id="cta-nav-whatsapp"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order via WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-muted hover:text-dark-main p-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-gray-light-border transition-all"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              id="mobile-menu-toggle"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6 text-brand-orange" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-gray-light-border overflow-hidden shadow-lg"
            id="mobile-menu"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="flex items-center justify-between text-gray-muted hover:text-brand-orange px-3 py-2.5 rounded-lg hover:bg-slate-50 text-base font-semibold border-b border-slate-100 transition-all"
                  id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-brand-orange" />
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href={waLink}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center justify-center gap-3 w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-3.5 px-4 rounded-xl font-bold transition-all shadow-sm hover:shadow-md"
                  id="mobile-cta-nav-whatsapp"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>Order via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
