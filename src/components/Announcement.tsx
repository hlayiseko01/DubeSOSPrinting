import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../types';

export default function Announcement() {
  return (
    <div id="announcement-banner" className="bg-[#FFF7ED] text-[#F97316] py-1 px-4 text-center select-none relative overflow-hidden flex items-center justify-center font-extrabold text-[11px] tracking-widest uppercase h-7 border-b border-[#F97316]/10">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center justify-center gap-2"
      >
        <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
        <span>{BUSINESS_INFO.announcement}</span>
        <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
      </motion.div>
    </div>
  );
}
