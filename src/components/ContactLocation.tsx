import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Mail, MapPin, Clock, Calendar, Send, Copy, Check } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

export default function ContactLocation() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!name.trim() || !message.trim()) {
      alert('Please fill out your Name and Message to proceed.');
      return;
    }

    const whatsappMessage = `Hello DubeSOS Printing! I have an inquiry from your website.

*Contact Details:*
- Name: ${name.trim()}
- Phone/WhatsApp: ${phone.trim() || 'Not specified'}

*Message:*
${message.trim()}`;

    const encodedText = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank', 'noreferrer');
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_INFO.location);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-bg-soft relative border-t border-gray-light-border z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange-light border border-brand-orange/20 rounded-full text-brand-orange text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-main tracking-tight" id="contact-heading">
            Get In Touch & <span className="text-brand-orange">Find Us</span>
          </h2>
          <p className="text-gray-muted max-w-xl mx-auto mt-4 text-sm sm:text-base">
            Have questions about document formats, high-volume discounts, or school project paper types? Drop us a line of support.
          </p>
        </div>

        {/* Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-6 bg-white border border-gray-light-border rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto" id="contact-form-container">
            <div>
              <h3 className="text-lg font-bold text-dark-main mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-orange" />
                <span>Send a Quick Inquiry</span>
              </h3>
              <p className="text-xs text-gray-muted mb-6">
                Fill out your details below and your custom draft will instantly load up in WhatsApp to initiate chat support.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-gray-muted uppercase tracking-widest mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-slate-50 border border-gray-light-border rounded-xl px-4 py-3 text-sm text-dark-main placeholder-slate-400 focus:outline-none focus:border-brand-orange transition-colors"
                    id="contact-input-name"
                  />
                </div>

                {/* WhatsApp Number (Optional callback) */}
                <div>
                  <label className="block text-xs font-bold text-gray-muted uppercase tracking-widest mb-1.5">
                    WhatsApp or Contact Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +27 76 976 6070"
                    className="w-full bg-slate-50 border border-gray-light-border rounded-xl px-4 py-3 text-sm text-dark-main placeholder-slate-400 focus:outline-none focus:border-brand-orange transition-colors"
                    id="contact-input-phone"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-muted uppercase tracking-widest mb-1.5">
                    Your Message / Question *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you want to print, ask questions, or verify special requirements..."
                    className="w-full bg-slate-50 border border-gray-light-border rounded-xl px-4 py-3 text-sm text-dark-main placeholder-slate-400 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                    id="contact-input-message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3.5 px-6 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition-all"
                  id="contact-btn-submit"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Physical Location & Details */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6 w-full max-w-sm sm:max-w-md lg:max-w-none mx-auto" id="contact-info-container">
            
            {/* Location Panel */}
            <div className="bg-white border border-gray-light-border rounded-3xl p-6 sm:p-8 flex-1 shadow-sm">
              <h3 className="text-lg font-bold text-dark-main mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-orange" />
                <span>Our Physical Location</span>
              </h3>
              
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 mb-6 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-left">
                  <p className="font-semibold text-dark-main">Find Us in Limpopo:</p>
                  <p className="text-slate-700 font-medium text-xs sm:text-sm mt-1">{BUSINESS_INFO.location}</p>
                </div>
                
                <button
                  onClick={copyAddress}
                  className="inline-flex items-center gap-1.5 text-xs text-brand-orange font-bold bg-brand-orange-light border border-brand-orange/20 px-3 py-2 rounded-lg hover:bg-brand-orange/10 transition-colors cursor-pointer flex-shrink-0"
                  id="btn-copy-address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Helpful descriptive landmark callout */}
              <div className="bg-brand-orange-light/50 border border-brand-orange/15 rounded-2xl p-4 text-xs text-slate-800">
                <p className="font-bold text-brand-orange mb-1">📍 Landmarks & Help:</p>
                <p>Located in Rhobeni, very close to the ZCC Church(nyakelani ZCC). If you are nearby or having trouble locating us, please call or ping us on WhatsApp/phone and we will direct you!</p>
              </div>
            </div>

            {/* Operating Hours & Mail Panel */}
            <div className="bg-white border border-gray-light-border rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-dark-main mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-orange" />
                <span>Working Hours & Email Contact</span>
              </h3>

              {/* Working Hours list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <span className="text-xs text-gray-muted uppercase tracking-wider block">Weekdays:</span>
                  <span className="text-dark-main font-semibold">{BUSINESS_INFO.hours.weekdays}</span>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <span className="text-xs text-gray-muted uppercase tracking-wider block">Saturdays:</span>
                  <span className="text-dark-main font-semibold">{BUSINESS_INFO.hours.saturday}</span>
                </div>
              </div>

              <div className="space-y-3">
                {/* Email active action */}
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 p-4 rounded-xl border border-gray-light-border hover:border-brand-orange/20 text-slate-700 text-sm transition-all"
                  id="link-contact-email"
                >
                  <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <div className="text-left overflow-hidden">
                    <span className="text-xs text-gray-muted block font-normal">Active Email Support</span>
                    <span className="font-bold text-dark-main block text-sm overflow-ellipsis overflow-hidden">{BUSINESS_INFO.email}</span>
                  </div>
                </a>

                {/* Direct quick whatsapp text */}
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent('Hello! I would like to ask a question.')}`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="flex items-center gap-3 bg-slate-50 hover:bg-slate-100 p-4 rounded-xl border border-gray-light-border hover:border-brand-orange/20 text-slate-700 text-sm transition-all"
                  id="link-contact-direct-whatsapp"
                >
                  <MessageSquare className="w-5 h-5 text-brand-orange flex-shrink-0" />
                  <div className="text-left">
                    <span className="text-xs text-gray-muted block font-normal">Direct WhatsApp Text</span>
                    <span className="font-bold text-dark-main block text-sm">{BUSINESS_INFO.formattedWhatsApp}</span>
                  </div>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
