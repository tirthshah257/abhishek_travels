import React from 'react';
import { COMPANY_INFO, VEHICLE_CATEGORIES } from '../data/vehiclesData';
import { IconCar, IconPhone, IconMessageCircle, IconShield, IconSparkles } from './ui/Icons';

export default function Footer({ onNavigate, onFilterCategory }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 bg-slate-950 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14 text-left">
          
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <IconCar size={20} className="text-amber-400" />
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
              <p>📞 Hotline: <a href={`tel:${COMPANY_INFO.phone}`} className="text-amber-400 hover:underline font-bold">{COMPANY_INFO.phoneDisplay}</a></p>
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onNavigate('home')} className="hover:text-amber-400 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('vehicles')} className="hover:text-amber-400 transition-colors">Our Fleet</button></li>
              <li><button onClick={() => onNavigate('why-us')} className="hover:text-amber-400 transition-colors">Why Choose Us</button></li>
              <li><button onClick={() => onNavigate('reviews')} className="hover:text-amber-400 transition-colors">Client Reviews</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-amber-400 transition-colors">Contact & FAQ</button></li>
            </ul>
          </div>

          {/* Categories Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-amber-500 pl-2">
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
                    className="hover:text-amber-400 transition-colors text-left"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Instant Dispatch Col */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Instant Dispatch
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Need urgent airport pickup or outstation car reservation? Speak directly with our dispatch team:
            </p>
            <div className="flex flex-col gap-2.5">
              <a 
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 font-black text-xs flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-amber-500/20 transition-all"
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
          <div className="flex items-center gap-2 text-amber-400 font-semibold bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            <span>100% Client-Side React • Production-Ready SaaS UI</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
