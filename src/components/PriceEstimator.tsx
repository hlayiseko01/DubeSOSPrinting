import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, FileText, Image, ClipboardCheck, Plus, Minus, Send, Share2, Gift } from 'lucide-react';
import { BUSINESS_INFO, PRICING, PrintCategory, DocumentType, PhotoSize, PhotoFinish, FramedSize } from '../types';

export default function PriceEstimator() {
  const [category, setCategory] = useState<PrintCategory>('document');
  const [docType, setDocType] = useState<DocumentType>('bw');
  const [photoSize, setPhotoSize] = useState<PhotoSize>('jumbo');
  const [photoFinish, setPhotoFinish] = useState<PhotoFinish>('glossy');
  const [framedSize, setFramedSize] = useState<FramedSize>('normal');
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Calculate live price
  useEffect(() => {
    let pricePerUnit = 0;
    if (category === 'document') {
      pricePerUnit = PRICING.document[docType];
    } else if (category === 'photo') {
      pricePerUnit = PRICING.photo[photoSize];
    } else {
      pricePerUnit = PRICING.framed[framedSize];
    }
    
    // Ensure quantity is positive
    const cleanQty = Math.max(1, Math.floor(quantity));
    setTotalPrice(pricePerUnit * cleanQty);
  }, [category, docType, photoSize, framedSize, quantity]);

  const handleQtyChange = (val: number) => {
    setQuantity(prev => {
      const next = prev + val;
      return next < 1 ? 1 : next;
    });
  };

  const handleManualQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < 1) {
      setQuantity(1);
    } else {
      setQuantity(val);
    }
  };

  // Generate WhatsApp text
  const sendOrderOverWhatsApp = () => {
    let orderType = '';
    let selectedOption = '';
    let finishDetails = 'Standard Document Paper';

    if (category === 'document') {
      orderType = '📄 Document Printing';
      selectedOption = docType === 'bw' 
        ? `Black & White (A4) @ R${PRICING.document.bw}/page`
        : `Vibrant Colour (A4) @ R${PRICING.document.color}/page`;
    } else if (category === 'photo') {
      orderType = '📷 Photo Printing';
      selectedOption = photoSize === 'jumbo'
        ? `Jumbo Size 10×15 cm @ R${PRICING.photo.jumbo}/photo`
        : `A4 enlargement @ R${PRICING.photo.a4}/photo`;
      finishDetails = photoFinish === 'glossy' ? 'Glossy Finish (Premium)' : 'Matte Finish (Elegant)';
    } else {
      orderType = '🎁 A4 Framed Photo';
      selectedOption = framedSize === 'normal'
        ? `Normal A4 Framed Photo @ R${PRICING.framed.normal}/unit`
        : `Customised A4 Framed Photo @ R${PRICING.framed.customised}/unit (Special moments / presents like Mother's/Father's Day)`;
      finishDetails = 'Premium glass/wood frame with active photo formatting support';
    }

    const message = `Hello DubeSOS Printing! I'd like to place a printing order. Here is my estimate from your website:

------------------------------------
*ORDER TYPE:* ${orderType}
*OPTION SELECTED:* ${selectedOption}
*SPECIFICATION:* ${category === 'photo' ? `Finish: ${finishDetails}` : category === 'framed' ? `Frame spec: ${finishDetails}` : 'Double/Single Sided (Standard)'}
*QUANTITY:* ${quantity} Page(s) / Frame(s) / Print(s)
------------------------------------
*ESTIMATED TOTAL:* R ${totalPrice.toFixed(2)}

Please let me know how I should send my digital files (PDF, images, etc.) to start printing! Thank you.`;

    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodedText}`;
    
    // Open in standard tab safely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="estimator" className="py-24 px-4 bg-white relative border-t border-gray-light-border overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange-light border border-brand-orange/20 rounded-full text-brand-orange text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Tool</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-dark-main tracking-tight" id="estimator-heading">
            Live Print <span className="text-brand-orange">Cost Estimator</span>
          </h2>
          <p className="text-gray-muted max-w-lg mx-auto mt-4 text-sm">
            Customize your options below, view pricing totals in real-time, and send your completed order directly over WhatsApp!
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Controls Panel */}
          <div className="md:col-span-7 bg-white border border-gray-light-border rounded-3xl p-6 sm:p-8 hover:border-brand-orange/20 transition-all duration-300 flex flex-col justify-between shadow-sm" id="estimator-controls">
            <div>
              {/* Step 1: Select Type */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-gray-muted uppercase tracking-widest mb-3.5">
                  1. Select Print Type
                </label>
                <div className="grid grid-cols-3 gap-3">
                  
                  {/* Document Toggle */}
                  <button 
                    type="button"
                    onClick={() => { setCategory('document'); setQuantity(1); }}
                    className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      category === 'document' 
                        ? 'bg-brand-orange-light border-brand-orange text-brand-orange shadow-[0_0_10px_rgba(249,115,22,0.05)]' 
                        : 'bg-slate-50 border-gray-light-border text-gray-muted hover:border-slate-350 hover:text-dark-main'
                    }`}
                    id="btn-select-doc-type"
                  >
                    <FileText className="w-5 h-5 mb-2 sm:w-6 sm:h-6" />
                    <span className="font-bold text-[11px] sm:text-xs tracking-tight">Documents</span>
                  </button>

                  {/* Photo Toggle */}
                  <button 
                    type="button"
                    onClick={() => { setCategory('photo'); setQuantity(1); }}
                    className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      category === 'photo' 
                        ? 'bg-brand-orange-light border-brand-orange text-brand-orange shadow-[0_0_10px_rgba(249,115,22,0.05)]' 
                        : 'bg-slate-50 border-gray-light-border text-gray-muted hover:border-slate-350 hover:text-dark-main'
                    }`}
                    id="btn-select-photo-type"
                  >
                    <Image className="w-5 h-5 mb-2 sm:w-6 sm:h-6" />
                    <span className="font-bold text-[11px] sm:text-xs tracking-tight">Photo Prints</span>
                  </button>

                  {/* Framed Photo Toggle */}
                  <button 
                    type="button"
                    onClick={() => { setCategory('framed'); setQuantity(1); }}
                    className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      category === 'framed' 
                        ? 'bg-brand-orange-light border-brand-orange text-brand-orange shadow-[0_0_10px_rgba(249,115,22,0.05)]' 
                        : 'bg-slate-50 border-gray-light-border text-gray-muted hover:border-slate-350 hover:text-dark-main'
                    }`}
                    id="btn-select-framed-type"
                  >
                    <Gift className="w-5 h-5 mb-2 sm:w-6 sm:h-6" />
                    <span className="font-bold text-[11px] sm:text-xs tracking-tight">Framed Photos</span>
                  </button>

                </div>
              </div>

              {/* Step 2: Select Formats */}
              <div className="mb-8">
                <label className="block text-xs font-bold text-gray-muted uppercase tracking-widest mb-3.5">
                  2. Choose Specifications
                </label>
                
                <AnimatePresence mode="wait">
                  {category === 'document' ? (
                    <motion.div
                      key="doc-specs"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-2 gap-3"
                      id="doc-suboptions"
                    >
                      <button
                        onClick={() => setDocType('bw')}
                        className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                          docType === 'bw'
                            ? 'bg-brand-orange/10 border-brand-orange text-brand-orange shadow-sm'
                            : 'bg-slate-50 border-gray-light-border text-gray-muted hover:border-slate-300'
                        }`}
                        id="opt-doc-bw"
                      >
                        Black & White (R2)
                      </button>
                      <button
                        onClick={() => setDocType('color')}
                        className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                          docType === 'color'
                            ? 'bg-brand-orange/10 border-brand-orange text-brand-orange shadow-sm'
                            : 'bg-slate-50 border-gray-light-border text-gray-muted hover:border-slate-300'
                        }`}
                        id="opt-doc-color"
                      >
                        Colour Paper (R5)
                      </button>
                    </motion.div>
                  ) : category === 'photo' ? (
                    <motion.div
                      key="photo-specs"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                      id="photo-suboptions"
                    >
                      {/* Photo size */}
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setPhotoSize('jumbo')}
                          className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                            photoSize === 'jumbo'
                              ? 'bg-brand-orange/10 border-brand-orange text-brand-orange shadow-sm'
                              : 'bg-slate-50 border-gray-light-border text-gray-muted hover:border-slate-300'
                          }`}
                          id="opt-photo-jumbo"
                        >
                          Jumbo 10×15 (R15)
                        </button>
                        <button
                          onClick={() => setPhotoSize('a4')}
                          className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                            photoSize === 'a4'
                              ? 'bg-brand-orange/10 border-brand-orange text-brand-orange shadow-sm'
                              : 'bg-slate-50 border-gray-light-border text-gray-muted hover:border-slate-300'
                          }`}
                          id="opt-photo-a4"
                        >
                          A4 Enlargement (R40)
                        </button>
                      </div>

                      {/* Photo Finish Indicator */}
                      <div className="pt-2" id="photo-finish-selector">
                        <label className="block text-xs font-semibold text-gray-muted tracking-wider mb-2">
                          Photo Finish (Cosmetic choice, no price difference)
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            onClick={() => setPhotoFinish('glossy')}
                            className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                              photoFinish === 'glossy'
                                ? 'bg-brand-orange/20 border-brand-orange/30 text-brand-orange'
                                : 'bg-slate-50 border-gray-light-border text-gray-muted hover:border-slate-300'
                            }`}
                            id="opt-finish-glossy"
                          >
                            Shiny Glossy
                          </button>
                          <button
                            onClick={() => setPhotoFinish('matte')}
                            className={`py-2 px-3 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                              photoFinish === 'matte'
                                ? 'bg-brand-orange/20 border-brand-orange/30 text-brand-orange'
                                : 'bg-slate-50 border-gray-light-border text-gray-muted hover:border-slate-300'
                            }`}
                            id="opt-finish-matte"
                          >
                            Elegant Matte
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="framed-specs"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                      id="framed-suboptions"
                    >
                      {/* Framed types */}
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFramedSize('normal')}
                          className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                            framedSize === 'normal'
                              ? 'bg-brand-orange/10 border-brand-orange text-brand-orange shadow-sm'
                              : 'bg-slate-50 border-gray-light-border text-gray-muted hover:border-slate-300'
                          }`}
                          id="opt-framed-normal"
                        >
                          Normal A4 Frame (R100)
                        </button>
                        <button
                          type="button"
                          onClick={() => setFramedSize('customised')}
                          className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                            framedSize === 'customised'
                              ? 'bg-brand-orange/10 border-brand-orange text-brand-orange shadow-sm'
                              : 'bg-slate-50 border-gray-light-border text-gray-muted hover:border-slate-300'
                          }`}
                          id="opt-framed-customised"
                        >
                          Customised Frame (R150)
                        </button>
                      </div>

                      {/* Frame Description Info */}
                      <div className="p-3.5 bg-brand-orange-light/50 border border-brand-orange/15 rounded-xl text-xs text-slate-700">
                        <p className="font-bold text-brand-orange mb-1">💝 Splendid Gift Idea:</p>
                        <p>Our customised frame option is beautifully styled and is best for celebrating special moments like Valentine’s, Anniversaries, Mother’s Day, or Father’s Day presents!</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Step 3: Quantity */}
              <div className="mb-2">
                <label className="block text-xs font-bold text-gray-muted uppercase tracking-widest mb-3">
                  3. Select Print Volume (Quantity)
                </label>
                
                <div className="flex items-center gap-4 bg-slate-50 rounded-2xl p-2 border border-gray-light-border w-full sm:w-60">
                  <button 
                    type="button"
                    onClick={() => handleQtyChange(-1)}
                    className="w-10 h-10 rounded-xl bg-slate-200 hover:bg-slate-300 text-dark-main flex items-center justify-center p-0 transition-colors cursor-pointer"
                    id="btn-qty-decrement"
                  >
                    <Minus className="w-4 h-4 text-gray-600 hover:text-brand-orange" />
                  </button>
                  
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={handleManualQtyChange}
                    min="1"
                    className="flex-1 bg-transparent text-center font-extrabold text-lg text-dark-main border-none focus:ring-0 select-all"
                    id="input-qty"
                  />

                  <button 
                    type="button"
                    onClick={() => handleQtyChange(1)}
                    className="w-10 h-10 rounded-xl bg-slate-200 hover:bg-slate-300 text-dark-main flex items-center justify-center p-0 transition-colors cursor-pointer"
                    id="btn-qty-increment"
                  >
                    <Plus className="w-4 h-4 text-gray-600 hover:text-brand-orange" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic Total Side Panel */}
          <div className="md:col-span-5 bg-gradient-to-b from-[#FFF7ED] to-white border border-brand-orange/30 rounded-3xl p-8 flex flex-col justify-between text-center relative overflow-hidden shadow-sm" id="estimator-panel-total">
            
            {/* Design accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#F97316] to-transparent" />
            
            <div className="relative z-10">
              <ClipboardCheck className="w-10 h-10 text-brand-orange mx-auto mb-6 opacity-90" />
              <p className="text-xs text-gray-muted font-bold uppercase tracking-wider mb-2">My Total Estimate Summary</p>
              
              <div className="py-8 border-y border-gray-light-border my-4">
                <span className="text-xs text-gray-muted uppercase tracking-widest block mb-1">Estimated Total</span>
                <span className="text-4xl sm:text-5xl font-black text-dark-main" id="estimator-total-text">
                  <span className="text-base text-brand-orange mr-1">R</span>
                  {totalPrice.toFixed(2)}
                </span>
                
                {/* Specific calculations callout */}
                <span className="block text-xs text-gray-muted mt-4 font-semibold italic">
                  {quantity} unit(s) x R {category === 'document' ? PRICING.document[docType] : category === 'photo' ? PRICING.photo[photoSize] : PRICING.framed[framedSize]}
                </span>
              </div>

              {/* Informative info item */}
              <div className="text-xs text-gray-muted flex flex-col gap-1 text-left bg-brand-orange-light/40 p-4 rounded-xl border border-brand-orange/10 mb-6">
                <p className="font-bold text-dark-main">💡 File Delivery Information:</p>
                <p>After clicking SEND, you will be directed to click Send on WhatsApp. Simply attach your document/photos to your message and we will begin printing.</p>
              </div>
            </div>

            <button
              onClick={sendOrderOverWhatsApp}
              className="relative z-10 w-full mt-auto flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              id="btn-send-estimated-order"
            >
              <Send className="w-4 h-4 fill-current" />
              <span>Send Order over WhatsApp</span>
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
