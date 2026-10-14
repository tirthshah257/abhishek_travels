import React from 'react';
import { COMPANY_INFO, VEHICLE_CATEGORIES } from '../data/vehiclesData';
import { IconCar, IconPhone, IconMessageCircle, IconShield, IconSparkles } from './ui/Icons';

export default function Footer({ onNavigate, onFilterCategory }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 bg-[#0F172A] border-t border-[#1E3A5F]/40 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#1E3A5F]/15 blur-3xl pointer-events-none" />

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14 text-left">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E3A5F] via-[#2A4D77] to-[#0F172A] border border-white/20 p-0.5 flex items-center justify-center shadow-lg shadow-[#1E3A5F]/30">
                <div className="w-full h-full bg-[#0F172A] rounded-[10px] flex items-center justify-center">
                  <IconCar size={20} className="text-[#E8F0F7]" />
                </div>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-6 max-w-sm">
              Gujarat's trusted luxury transport partner providing chauffeur-driven car rentals, 
              Force Urbania Maharaja vans, and luxury tourist buses across India with reliable service and 24/7 assistance.
            </p>
            <div className="text-xs text-slate-300 space-y-1.5 font-medium">
              <p>📍 Location: <span className="text-slate-400">{COMPANY_INFO.location}</span></p>
              <p>🕒 Hours: <span className="text-slate-400">24/7 Available (365 Days)</span></p>
              <p>📞 Hotline: <a href={`tel:${COMPANY_INFO.phone}`} className="text-white hover:text-[#93C5FD] hover:underline font-bold">{COMPANY_INFO.phoneDisplay}</a> / <a href={`tel:${COMPANY_INFO.phone2}`} className="text-white hover:text-[#93C5FD] hover:underline font-bold">{COMPANY_INFO.phone2Display}</a></p>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#1E3A5F] pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#93C5FD] transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('vehicles')} className="hover:text-[#93C5FD] transition-colors">Our Fleet</button></li>
              <li><button onClick={() => onNavigate('why-us')} className="hover:text-[#93C5FD] transition-colors">Why Choose Us</button></li>
              <li><button onClick={() => onNavigate('reviews')} className="hover:text-[#93C5FD] transition-colors">Client Reviews</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#93C5FD] transition-colors">Contact & FAQ</button></li>
            </ul>
          </div>

          {/* Categories Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#1E3A5F] pl-2">
              Fleet Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {VEHICLE_CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <button 
                    onClick={() => {
                      onFilterCategory(cat.id);
                      onNavigate('vehicles');
                    }}
                    className="hover:text-[#93C5FD] transition-colors text-left"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Instant Dispatch Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#1E3A5F] pl-2">
              Instant Dispatch
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Need urgent airport pickup or outstation car reservation? Speak directly with our dispatch team:
            </p>
            <div className="flex flex-col gap-2.5">
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/35 transition-all border border-white/20"
              >
                <IconPhone size={14} />
                <span>Call Hotline</span>
              </a>
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Abhishek Travels, I would like to book a vehicle.')}`}
                target="_blank" 
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/30 text-emerald-300 hover:text-white font-bold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <IconMessageCircle size={15} />
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {COMPANY_INFO.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-2 text-[#E8F0F7] font-semibold bg-[#1E3A5F]/20 px-3 py-1 rounded-full border border-[#1E3A5F]/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
            <span>Premium Luxury Fleet Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
