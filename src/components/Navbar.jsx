import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/vehiclesData';
import { IconPhone, IconMessageCircle, IconCar, IconZap, IconX } from './ui/Icons';

export default function Navbar({ activeSection, onNavigate, onOpenBookingModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'vehicles', label: 'Our Fleet' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/92 backdrop-blur-xl border-b border-amber-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.8)] py-3' : 'bg-zinc-950/70 backdrop-blur-md border-b border-white/5 py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        
        {/* Brand Logo with 3D Gold Specular Box */}
        <a 
          href="#home" 
          className="flex items-center gap-3.5 group"
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
        >
          <div className="relative w-11 h-11 rounded-xl p-0.5 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 shadow-[0_4px_16px_rgba(245,158,11,0.4)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1">
            <div className="w-full h-full bg-zinc-950 rounded-[10px] overflow-hidden flex items-center justify-center">
              <img 
                src="images/logo.png" 
                alt="Abhishek Travels" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                onError={(e) => { e.target.style.display = 'none'; }} 
              />
            </div>
            {/* Top 3D highlight */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/40 to-transparent rounded-t-xl pointer-events-none" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-amber-400 transition-colors">
              Abhishek Travels
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              Royal Chauffeur Fleet
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center p-1.5 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-xl shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive ? 'text-zinc-950 font-bold shadow-md' : 'text-zinc-400 hover:text-zinc-100 hover:bg-white/5'}`}
                onClick={() => handleNavClick(item.id)}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.5)] -z-10 animate-fade-in" />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {item.label}
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 animate-ping"></span>}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3.5">
          <a 
            href={`tel:${COMPANY_INFO.phone}`} 
            className="hidden lg:flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-900/80 border border-amber-500/20 text-zinc-200 hover:border-amber-400/50 hover:bg-amber-500/10 hover:text-amber-300 transition-all text-xs font-semibold shadow-sm group"
          >
            <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 transition-transform">
              <IconPhone size={13} />
            </div>
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>

          <button 
            className="btn-shimmer relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 font-extrabold text-xs tracking-wide shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.6)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 border border-yellow-300/60"
            onClick={() => onOpenBookingModal(null)}
          >
            <IconZap size={14} className="text-zinc-950 animate-bounce" />
            <span>Instant Booking</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <IconX size={22} />
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5">
                <line x1="4" y1="7" x2="20" y2="7"></line>
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="17" x2="20" y2="17"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-zinc-950 border-l border-amber-500/20 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <span className="font-bold text-lg text-white">Menu</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white"
                >
                  <IconX size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className={`w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-colors ${activeSection === item.id ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold' : 'text-zinc-300 hover:bg-white/5'}`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <a 
                href={`tel:${COMPANY_INFO.phone}`} 
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white font-semibold text-sm hover:border-amber-500/50"
              >
                <IconPhone size={16} className="text-amber-400" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Abhishek Travels, I want to book a vehicle.')}`}
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20"
              >
                <IconMessageCircle size={16} />
                <span>WhatsApp Dispatch</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
