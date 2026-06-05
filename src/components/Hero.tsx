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
      className="relative min-h-[85vh] flex items-center justify-center py-20 px-4 overflow-hidden bg-white"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-100/30 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '12s' }} />
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-dark-main leading-[1.1] mb-6"
          id="hero-headline"
        >
          Professional Printing, <br className="hidden sm:inline" />
          <span className="text-brand-orange">
            Handled Fast.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-muted font-normal leading-relaxed mb-10"
          id="hero-subtitle"
        >
          Fast document printing and vibrant photo prints — right here in Rhobeni, Xihoko. 
          Expert results, glossy & matte finishes, styled up to A4.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
          id="hero-actions"
        >
          <a
            href={waLink}
            target="_blank"
            referrerPolicy="no-referrer"
            className="flex items-center justify-center gap-3 w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white font-bold px-8 py-4 rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200"
            id="cta-hero-whatsapp"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Get a Quote on WhatsApp</span>
          </a>

          <button
            onClick={scrollToEstimator}
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white hover:bg-slate-50 text-dark-main font-semibold px-8 py-4 rounded-lg border border-gray-light-border hover:border-brand-orange/40 transition-all duration-200 shadow-sm"
            id="cta-hero-estimator"
          >
            <span>Estimate Printing Cost</span>
            <ArrowRight className="w-4 h-4 text-brand-orange" />
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 max-w-4xl mx-auto pt-8 border-t border-gray-light-border text-gray-muted text-sm"
          id="hero-features"
        >
          <div className="flex items-center justify-center gap-3">
            <Clock className="w-5 h-5 text-brand-orange flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-dark-main">Same-Day Turnaround</p>
              <p className="text-xs text-gray-muted">For standard queue orders</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Shield className="w-5 h-5 text-brand-orange flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-dark-main">Verified Pricing</p>
              <p className="text-xs text-gray-muted">R2 black-and-white print rate</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-5 h-5 text-brand-orange flex-shrink-0" />
            <div className="text-left">
              <p className="font-semibold text-dark-main">Glossy & Matte Available</p>
              <p className="text-xs text-gray-muted">Professional inks up to A4 size</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
