import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0F172A]/95 backdrop-blur-xl border-b border-[#1E3A5F]/40 shadow-[0_10px_35px_rgba(15,23,42,0.6)] py-2 sm:py-2.5' : 'bg-[#0F172A]/85 backdrop-blur-md border-b border-white/10 py-2.5 sm:py-3.5'}`}>
      <div className="container-custom flex items-center justify-between">
        
        {/* Brand Logo with 3D Specular Box - Compacted */}
        <a 
          href="#home" 
          className="flex items-center gap-2.5 sm:gap-3 group"
          onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl p-0.5 bg-gradient-to-br from-[#1E3A5F] via-[#2A4D77] to-[#0F172A] border border-white/20 shadow-[0_4px_16px_rgba(30,58,95,0.4)] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#0F172A] rounded-[9px] overflow-hidden flex items-center justify-center">
              <img 
                src="images/logo.png" 
                alt="Abhishek Travels" 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                onError={(e) => { e.target.style.display = 'none'; }} 
              />
            </div>
            {/* Top 3D highlight */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl pointer-events-none" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#E8F0F7] transition-colors leading-tight">
              Abhishek Travels
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#93C5FD] flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
              Royal Chauffeur Fleet
            </span>
          </div>
        </a>

        {/* Desktop Navigation - Compact & Balanced */}
        <nav className="hidden md:flex items-center p-1 rounded-full bg-[#0F172A]/90 border border-white/10 backdrop-blur-xl shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                className={`relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${isActive ? 'text-white font-bold shadow-md' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
                onClick={() => handleNavClick(item.id)}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-full bg-[#2563EB] border border-white/20 shadow-[0_2px_12px_rgba(37,99,235,0.5)] -z-10 animate-fade-in" />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {item.label}
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Action Buttons & Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:flex items-center gap-1.5">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#0F172A]/80 border border-[#1E3A5F]/40 text-slate-200 hover:border-[#2563EB] hover:bg-[#2563EB]/20 hover:text-white transition-all text-xs font-semibold shadow-sm group"
              title="Call 98250 45916"
            >
              <div className="w-4 h-4 rounded-md bg-[#2563EB] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <IconPhone size={10} />
              </div>
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a 
              href={`tel:${COMPANY_INFO.phone2}`} 
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#0F172A]/80 border border-[#1E3A5F]/40 text-slate-200 hover:border-[#2563EB] hover:bg-[#2563EB]/20 hover:text-white transition-all text-xs font-semibold shadow-sm group"
              title="Call 97272 45916"
            >
              <div className="w-4 h-4 rounded-md bg-[#2563EB] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <IconPhone size={10} />
              </div>
              <span>{COMPANY_INFO.phone2Display}</span>
            </a>
          </div>

          {/* Primary CTA: Instant Booking with Vibrant Blue Shade */}
          <button 
            className="btn-shimmer relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-xs tracking-wide shadow-[0_4px_16px_rgba(37,99,235,0.45)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-1.5 border border-white/25 shrink-0"
            onClick={() => onOpenBookingModal(null)}
          >
            <IconZap size={13} className="text-[#93C5FD] animate-bounce" />
            <span className="hidden xs:inline sm:inline">Instant Booking</span>
            <span className="xs:hidden sm:hidden">Book</span>
          </button>

          {/* Highly Visible Mobile Menu Button */}
          <button
            className="md:hidden flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-xl bg-[#1E3A5F] hover:bg-[#2563EB] text-white border border-[#60A5FA]/50 shadow-md shadow-[#0F172A]/80 transition-all shrink-0 cursor-pointer active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <IconX size={18} className="text-white" />
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2.5" className="text-white">
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
            <span className="text-xs font-bold text-white tracking-wide">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer - Rendered into document.body via Portal to escape header containing block */}
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[99999] md:hidden" 
          style={{ backgroundColor: 'rgba(5, 10, 20, 0.85)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] border-l border-[#2563EB]/40 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            style={{ 
              backgroundColor: '#0F172A', 
              height: '100vh', 
              minHeight: '100%',
              boxShadow: '-10px 0 40px rgba(0,0,0,0.8)' 
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#60A5FA] animate-pulse"></span>
                  <span className="font-extrabold text-lg text-white">Menu</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-[#1E3A5F] border border-white/20 text-white hover:bg-[#2563EB] transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <IconX size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className={`w-full text-left px-4 py-3 rounded-xl font-bold text-base transition-all cursor-pointer ${
                      activeSection === item.id 
                        ? 'bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/35 border border-white/20' 
                        : 'text-white hover:text-white hover:bg-white/10 border border-transparent'
                    }`}
                    style={activeSection === item.id ? { backgroundColor: '#2563EB', color: '#ffffff' } : { color: '#ffffff' }}
                    onClick={() => handleNavClick(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-6 border-t border-white/10 mt-6">
              <button 
                onClick={() => { onOpenBookingModal(null); setMobileMenuOpen(false); }}
                className="btn-shimmer flex items-center justify-center gap-2 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-sm shadow-lg shadow-[#2563EB]/40 border border-white/20 cursor-pointer"
                style={{ backgroundColor: '#2563EB', color: '#ffffff' }}
              >
                <IconZap size={15} className="text-[#93C5FD]" />
                <span>Instant Booking</span>
              </button>
              <a 
                href={`tel:${COMPANY_INFO.phone}`} 
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1E3A5F]/40 border border-[#1E3A5F]/50 text-white font-semibold text-sm hover:border-[#2563EB] transition-colors"
                style={{ color: '#ffffff' }}
              >
                <IconPhone size={16} className="text-[#93C5FD]" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <a 
                href={`tel:${COMPANY_INFO.phone2}`} 
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1E3A5F]/40 border border-[#1E3A5F]/50 text-white font-semibold text-sm hover:border-[#2563EB] transition-colors"
                style={{ color: '#ffffff' }}
              >
                <IconPhone size={16} className="text-[#93C5FD]" />
                <span>Call {COMPANY_INFO.phone2Display}</span>
              </a>
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Abhishek Travels, I want to book a vehicle.')}`}
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20"
                style={{ color: '#ffffff' }}
              >
                <IconMessageCircle size={16} />
                <span>WhatsApp Dispatch</span>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
