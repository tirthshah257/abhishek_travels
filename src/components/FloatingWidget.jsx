import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/vehiclesData';
import { IconPhone, IconMessageCircle, IconZap } from './ui/Icons';

export default function FloatingWidget({ onOpenBookingModal }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Scroll to Top */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#0F172A]/90 border border-[#1E3A5F]/50 text-white flex items-center justify-center shadow-xl hover:bg-[#1E3A5F] hover:scale-110 active:scale-95 transition-all text-sm font-bold backdrop-blur-md"
          title="Scroll to Top"
        >
          ↑
        </button>
      )}

      {/* Floating Instant Book Action - Sleeker, Less Dominant with Vibrant Blue */}
      <button 
        onClick={() => onOpenBookingModal(null)}
        className="btn-shimmer hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-[11px] shadow-lg shadow-[#2563EB]/40 hover:scale-105 active:scale-95 transition-all border border-white/20 backdrop-blur-sm"
      >
        <IconZap size={12} className="text-[#93C5FD]" />
        <span>Book Now</span>
      </button>

      {/* 3D Pulsating WhatsApp Button */}
      <a 
        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Abhishek Travels, I want to book a vehicle.')}`}
        target="_blank" 
        rel="noreferrer" 
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white flex items-center justify-center shadow-[0_8px_30px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all group"
        title="Chat on WhatsApp"
      >
        {/* Radar wave ping */}
        <span className="radar-ping absolute inset-0 rounded-full bg-emerald-500 pointer-events-none" />
        <IconMessageCircle size={28} className="relative z-10 transition-transform group-hover:scale-110" />
      </a>

      {/* Direct Call Button (Mobile) */}
      <a 
        href={`tel:${COMPANY_INFO.phone}`} 
        className="sm:hidden w-12 h-12 rounded-full bg-[#2563EB] text-white border border-white/20 flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all font-bold"
        title="Call Directly"
      >
        <IconPhone size={20} />
      </a>

    </div>
  );
}
