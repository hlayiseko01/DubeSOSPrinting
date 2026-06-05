import { motion } from 'motion/react';
import { FileText, Image, Printer, CheckCircle2, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, PRICING } from '../types';

export default function ServicesPrices() {
  const docWaText = encodeURIComponent(`Hello DubeSOS Printing! I am interested in your Document Printing service (B&W or Colour). Please advise on how I can submit my documents.`);
  const photoWaText = encodeURIComponent(`Hello DubeSOS Printing! I want to print some photos (Jumbo / A4). Please guide me on sending my images.`);

  const listItemsDoc = [
    'Perfect for assignments, CVs, and flyers',
    'Forms & Official Document Applications',
    'Standard A4 size office paper prints',
    'Fast processing while you wait',
    'Crisp B&W text or vibrant Color text'
  ];

  const listItemsPhoto = [
    'Premium Glossy or Elegant Matte finishes',
    'Vibrant high-contrast photo paper',
    'Vivid, long-lasting digital photo colors',
    'Standard Jumbo 10×15 cm formats',
    'Stunning high-impact A4 enlargements'
  ];

  return (
    <section id="services" className="py-24 px-4 relative z-10 bg-bg-soft border-t border-gray-light-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange-light border border-brand-orange/20 rounded-full text-brand-orange text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Our Prices</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-dark-main tracking-tight"
            id="services-heading"
          >
            Simple, Transparent <span className="text-brand-orange">Pricing</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-muted max-w-xl mx-auto mt-4 text-sm sm:text-base"
          >
            Top-tier print quality with no hidden fees. Select your style, choose your finish, and order straight from WhatsApp.
          </motion.p>
        </div>

        {/* Side-by-Side Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* Card 1 — Document Printing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            whileHover={{ y: -6, borderColor: '#F97316' }}
            className="bg-white rounded-3xl border border-gray-light-border p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative overflow-hidden group shadow-sm"
            id="card-document-printing"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl group-hover:bg-brand-orange/10 transition-all duration-500" />
            
            <div>
              {/* Header Box */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-brand-orange-light border border-brand-orange/20 text-brand-orange">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-main uppercase tracking-tight">Document Printing</h3>
                  <p className="text-xs text-brand-orange font-semibold">Standard A4 Size</p>
                </div>
              </div>

              {/* Price display tags */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center">
                  <p className="text-xs text-gray-muted font-medium">Black & White</p>
                  <p className="text-2xl font-black text-dark-main mt-1">
                    R {PRICING.document.bw}
                    <span className="text-xs text-gray-muted font-medium"> /page</span>
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center">
                  <p className="text-xs text-gray-muted font-medium">Vibrant Colour</p>
                  <p className="text-2xl font-black text-brand-orange mt-1">
                    R {PRICING.document.color}
                    <span className="text-xs text-gray-muted font-medium"> /page</span>
                  </p>
                </div>
              </div>

              {/* Inclusions list */}
              <div className="space-y-3.5 mb-8">
                <p className="text-xs text-gray-muted font-bold uppercase tracking-wider">Perfect Solutions For:</p>
                {listItemsDoc.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action button */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${docWaText}`}
              target="_blank"
              referrerPolicy="no-referrer"
              className="mt-4 flex items-center justify-center gap-2.5 w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-3.5 rounded-lg font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200"
              id="btn-order-document"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order Documents via WhatsApp</span>
            </a>
          </motion.div>

          {/* Card 2 — Photo Printing */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            whileHover={{ y: -6, borderColor: '#F97316' }}
            className="bg-white rounded-3xl border border-gray-light-border p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative overflow-hidden group shadow-sm"
            id="card-photo-printing"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-3xl group-hover:bg-brand-orange/10 transition-all duration-500" />
            
            <div>
              {/* Header Box */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-brand-orange-light border border-brand-orange/20 text-brand-orange">
                  <Image className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-main uppercase tracking-tight">Photo Printing</h3>
                  <p className="text-xs text-brand-orange font-semibold">Glossy or Matte Paper</p>
                </div>
              </div>

              {/* Price display tags */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center">
                  <p className="text-xs text-gray-muted font-medium">Jumbo (10×15 cm)</p>
                  <p className="text-2xl font-black text-dark-main mt-1">
                    R {PRICING.photo.jumbo}
                    <span className="text-xs text-gray-muted font-medium"> /print</span>
                  </p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-center">
                  <p className="text-xs text-gray-muted font-medium">A4 Enlargements</p>
                  <p className="text-2xl font-black text-brand-orange mt-1">
                    R {PRICING.photo.a4}
                    <span className="text-xs text-gray-muted font-medium"> /print</span>
                  </p>
                </div>
              </div>

              {/* Inclusions list */}
              <div className="space-y-3.5 mb-8">
                <p className="text-xs text-gray-muted font-bold uppercase tracking-wider">Premium Features Included:</p>
                {listItemsPhoto.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action button */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${photoWaText}`}
              target="_blank"
              referrerPolicy="no-referrer"
              className="mt-4 flex items-center justify-center gap-2.5 w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-3.5 rounded-lg font-bold text-sm shadow-sm hover:shadow-md transition-all duration-200"
              id="btn-order-photo"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Order Photos via WhatsApp</span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
