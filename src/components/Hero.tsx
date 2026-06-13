import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Shield, Clock, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

export default function Hero() {
  const waLink = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent("Hello! I would like to get a print quote for DubeSOS Printing.")}`;

  const scrollToEstimator = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const estimator = document.querySelector('#estimator');
    if (estimator) {
      estimator.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[50vh] sm:min-h-[85vh] flex items-center justify-center py-8 sm:py-24 px-4 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=1600&q=80')" }}
    >
      {/* Dark Overlay (rgba(0,0,0,0.65)) to ensure copy remains highly readable */}
      <div className="absolute inset-0 bg-black/65 z-0" />

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-45">
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-brand-orange/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-200/5 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '12s' }} />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 px-2 sm:px-4">
        {/* Large faded orange decorative circle behind heading for visual depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-brand-orange/15 rounded-full blur-[80px] sm:blur-[120px] -z-10 pointer-events-none" />

        {/* Heading with staggered fade-in animation */}
        <h1 
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] mb-3 sm:mb-6 animate-hero-headline"
          id="hero-headline"
        >
          Professional Printing, <br className="hidden sm:inline" />
          <span className="text-brand-orange">
            Handled Fast.
          </span>
        </h1>

        {/* Subtitle with staggered fade-in animation */}
        <p 
          className="max-w-2xl mx-auto text-xs xs:text-sm sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed mb-4 sm:mb-12 animate-hero-subtitle"
          id="hero-subtitle"
        >
          Fast document printing and vibrant photo prints — right here in Rhobeni, Xihoko. 
          Expert results, glossy & matte finishes, styled up to A4.
        </p>

        {/* Action Buttons with staggered fade-in animation */}
        <div 
          className="flex flex-row items-center justify-center gap-2 sm:gap-6 mb-6 sm:mb-20 animate-hero-button w-full max-w-md mx-auto"
          id="hero-actions"
        >
          <a
            href={waLink}
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex items-center justify-center gap-1.5 w-1/2 sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white text-xs sm:text-base font-bold px-3 py-2.5 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer text-center"
            id="cta-hero-whatsapp"
          >
            <MessageSquare className="w-4 h-4 sm:w-5 h-5 fill-current flex-shrink-0" />
            <span className="truncate">WhatsApp Quote</span>
          </a>

          <button
            onClick={scrollToEstimator}
            className="flex items-center justify-center gap-1 w-1/2 sm:w-auto bg-white hover:bg-slate-50 text-dark-main text-xs sm:text-base font-semibold px-3 py-2.5 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl border border-gray-light-border hover:border-brand-orange/40 transition-all duration-200 shadow-md cursor-pointer text-center"
            id="cta-hero-estimator"
          >
            <span className="truncate">Estimate Cost</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 h-4 text-brand-orange flex-shrink-0" />
          </button>
        </div>

        {/* Trust Badges - elegant semi-transparent separator line */}
        <div 
          className="grid grid-cols-3 sm:grid-cols-3 gap-1 sm:gap-4 max-w-4xl mx-auto pt-4 sm:pt-8 border-t border-white/10 text-slate-300 text-[10px] sm:text-sm animate-hero-button"
          id="hero-features"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center sm:text-left">
            <Clock className="w-4 h-4 sm:w-5 h-5 text-brand-orange flex-shrink-0" />
            <div>
              <p className="font-bold sm:font-semibold text-white leading-tight text-[10px] sm:text-sm">Same-Day</p>
              <p className="text-[8px] sm:text-xs text-slate-400 hidden xs:block">Standard turnaround</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center sm:text-left border-x border-white/10 sm:border-none px-1">
            <Shield className="w-4 h-4 sm:w-5 h-5 text-brand-orange flex-shrink-0" />
            <div>
              <p className="font-bold sm:font-semibold text-white leading-tight text-[10px] sm:text-sm">R2 Pricing</p>
              <p className="text-[8px] sm:text-xs text-slate-400 hidden xs:block">Verified rates</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center sm:text-left">
            <Sparkles className="w-4 h-4 sm:w-5 h-5 text-brand-orange flex-shrink-0" />
            <div>
              <p className="font-bold sm:font-semibold text-white leading-tight text-[10px] sm:text-sm">Glossy/Matte</p>
              <p className="text-[8px] sm:text-xs text-slate-400 hidden xs:block">Expert finishes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
