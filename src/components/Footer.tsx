import { Printer, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

export default function Footer() {
  const scrollSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-[#111827] border-t border-slate-800 py-12 px-4 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Footer Label */}
        <div className="flex items-center gap-2" id="footer-logo">
          <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
            <Printer className="w-4 h-4 text-brand-orange" />
          </div>
          <span className="font-bold text-sm tracking-tight text-white">
            DubeSOS<span className="text-brand-orange">Printing</span>
          </span>
        </div>

        {/* Center Quick Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-semibold text-slate-400" id="footer-quick-links">
          <button 
            onClick={() => scrollSection('#services')} 
            className="hover:text-brand-orange transition-colors cursor-pointer"
            id="footer-btn-services"
          >
            Services & Pricing
          </button>
          <button 
            onClick={() => scrollSection('#estimator')} 
            className="hover:text-brand-orange transition-colors cursor-pointer"
            id="footer-btn-estimator"
          >
            Price Estimator
          </button>
          <button 
            onClick={() => scrollSection('#contact')} 
            className="hover:text-brand-orange transition-colors cursor-pointer"
            id="footer-btn-contact"
          >
            Contact & Location
          </button>
        </div>

        {/* Right Corner Banner Repeat */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 border border-slate-700/80 rounded-full text-[10px] text-brand-orange font-bold uppercase tracking-widest" id="footer-announcement-repeat">
          <Sparkles className="w-3 h-3 animate-pulse" />
          <span>{BUSINESS_INFO.announcement}</span>
        </div>

      </div>

      {/* Bottom Copyright Block */}
      <div className="max-w-6xl mx-auto border-t border-slate-800/50 mt-8 pt-8 text-center" id="footer-copyright-container">
        <p className="text-xs text-slate-500">
          © 2025 DubeSOS Printing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
