import React, { useState } from 'react';
import { COMPANY_INFO, VEHICLE_CATEGORIES, VEHICLES } from '../data/vehiclesData';
import { IconCar, IconPhone, IconMessageCircle, IconArrowRight, IconArrow, IconAward, IconUsers, IconStar, IconShield, IconSparkles, IconZap } from './ui/Icons';
import { FloatingPill } from './ui/ThreeDComponents';
import fleetRoadBg from '../assets/fleet-road-hero.jpg';

export default function Hero({ onExploreFleet, onOpenBookingModal, onFilterCategory, onSelectCar }) {
  const [selectedCategory, setSelectedCategory] = useState('5-seater');
  const [tripType, setTripType] = useState('outstation');
  const [destination, setDestination] = useState('');

  // Top flagship fleet vehicles to showcase on the road
  const featuredFleet = [
    {
      car: VEHICLES.find(v => v.id === 'innova-crysta') || VEHICLES[4],
      tag: 'Most Booked SUV',
      seatText: '6/7 Passengers'
    },
    {
      car: VEHICLES.find(v => v.id === 'urbania-maharaja') || VEHICLES[9],
      tag: 'VIP Maharaja 20-Seater',
      seatText: '20 Passengers'
    },
    {
      car: VEHICLES.find(v => v.id === 'dzire') || VEHICLES[0],
      tag: 'Top Executive Sedan',
      seatText: '4+1 Passengers'
    },
    {
      car: VEHICLES.find(v => v.id === 'bus-25') || VEHICLES[14],
      tag: 'Luxury Group Coach',
      seatText: '25-56 Seats'
    }
  ];

  const handleHeroSearch = (e) => {
    e.preventDefault();
    if (selectedCategory !== 'all') {
      onFilterCategory(selectedCategory);
    }
    onExploreFleet();
  };

  return (
    <section className="relative pt-6 pb-12 md:pt-10 md:pb-16 overflow-hidden" id="home">

      {/* Ambient Lighting Layer (Uses Master Unified Body Background) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#1E3A5F]/25 via-[#0F172A]/15 to-transparent blur-3xl opacity-40" />
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">

          {/* 3D Floating Navy Pill */}
          <div className="inline-block mb-4 animate-float">
            <FloatingPill variant="navy" className="px-4 py-1.5 text-xs shadow-lg shadow-[#1E3A5F]/20">
              <span className="w-2 h-2 rounded-full bg-[#60A5FA] animate-ping mr-1"></span>
              <IconSparkles size={13} className="text-[#1E3A5F]" />
              <span className="font-bold text-[#1E3A5F]">Gujarat & All India Travel Specialist</span>
            </FloatingPill>
          </div>

          {/* Headline with High Contrast Navy & Crisp Text Shadow - Reduced ~10% */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-black tracking-tight text-white mb-3 sm:mb-4 leading-[1.16] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            Journey in Supreme Luxury, <br />
            <span className="text-[#93C5FD] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] font-black inline-block mt-1">Anywhere Across India.</span>
          </h1>

          {/* Subtitle with High-Contrast Backdrop Box for 100% Readability */}
          <p className="text-sm sm:text-base md:text-lg text-slate-100 max-w-3xl mx-auto mb-6 sm:mb-7 leading-relaxed font-normal bg-[#0F172A]/80 p-3.5 sm:p-4.5 rounded-2xl border border-[#1E3A5F]/40 backdrop-blur-md shadow-2xl text-shadow-sm">
            Experience royal comfort on every highway with our pristine fleet of Toyota Innovas,
            VIP 20-Seater Force Urbania Maharaja vans, executive sedans, and AC sleeper coaches.
            Polite verified chauffeurs, zero hidden surcharges, and 24/7 on-demand booking.
          </p>

          {/* 3D Glass Booking Console (Navy & White) - Lifted Up & More Integrated */}
          <div className="relative mb-7 sm:mb-8 p-2 rounded-2xl sm:rounded-3xl bg-[#0F172A]/85 border border-[#1E3A5F]/40 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.85)] backdrop-blur-xl">
            <form onSubmit={handleHeroSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-[#0F172A]/95">

              {/* Field 1: Category */}
              <div className="flex flex-col text-left px-3.5 py-2.5 rounded-xl bg-[#132845] hover:bg-[#183153] border border-[#274A73] focus-within:border-[#60A5FA] focus-within:bg-[#1A375F] transition-all shadow-inner">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#93C5FD] mb-1 flex items-center gap-1.5">
                  <IconCar size={13} className="text-[#93C5FD]" />
                  Vehicle Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent text-white font-semibold text-sm focus:outline-none cursor-pointer"
                  aria-label="Vehicle Category"
                >
                  {VEHICLE_CATEGORIES.map(cat => (
                    <option key={cat.id} value={cat.id} className="bg-[#0F172A] text-white">
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 2: Trip Type */}
              <div className="flex flex-col text-left px-3.5 py-2.5 rounded-xl bg-[#132845] hover:bg-[#183153] border border-[#274A73] focus-within:border-[#60A5FA] focus-within:bg-[#1A375F] transition-all shadow-inner">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#93C5FD] mb-1 flex items-center gap-1.5">
                  <IconShield size={13} className="text-[#93C5FD]" />
                  Trip Type
                </label>
                <select
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                  className="bg-transparent text-white font-semibold text-sm focus:outline-none cursor-pointer"
                  aria-label="Trip Type"
                >
                  <option value="outstation" className="bg-[#0F172A] text-white">Outstation Round Trip</option>
                  <option value="local" className="bg-[#0F172A] text-white">Local Tour (24h/300km)</option>
                  <option value="airport" className="bg-[#0F172A] text-white">Airport Transfer</option>
                  <option value="wedding" className="bg-[#0F172A] text-white">Wedding & Group Tour</option>
                  <option value="airport" className="bg-[#0F172A] text-white">Other Occasion</option>
                </select>
              </div>

              {/* Field 3: Destination */}
              <div className="flex flex-col text-left px-3.5 py-2.5 rounded-xl bg-[#132845] hover:bg-[#183153] border border-[#274A73] focus-within:border-[#60A5FA] focus-within:bg-[#1A375F] transition-all shadow-inner">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#93C5FD] mb-1">
                  Destination / Tour
                </label>
                <input
                  type="text"
                  placeholder="e.g. Udaipur, Somnath, Mumbai..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="bg-transparent text-white placeholder-slate-300 font-medium text-sm focus:outline-none"
                  aria-label="Destination"
                />
              </div>

              {/* Submit CTA - Strongest Primary CTA with Vibrant Royal Blue */}
              <button
                type="submit"
                className="btn-shimmer flex items-center justify-center gap-2 h-full min-h-[48px] rounded-xl bg-gradient-to-r from-[#1D4ED8] via-[#2563EB] to-[#1D4ED8] hover:from-[#1E40AF] hover:to-[#1D4ED8] text-white font-black text-sm tracking-wide shadow-[0_6px_25px_rgba(37,99,235,0.55)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.8)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border border-[#93C5FD]/60 ring-2 ring-[#93C5FD]/30"
              >
                <span>Find Fleet</span>
                <IconArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* Quick CTA Buttons - Responsive Stack on Mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-7 sm:mb-8">
            {/* Subtle Outline Secondary Button */}
            <button
              onClick={() => onOpenBookingModal(null)}
              className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-transparent hover:bg-white/10 text-[#E8F0F7] hover:text-white font-semibold text-sm tracking-wide border border-white/25 hover:border-white/50 backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-sm"
            >
              <span>Get Custom Quote</span>
              <IconArrowRight size={15} className="text-[#93C5FD]" />
            </button>

            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full sm:w-auto px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#0F172A]/90 hover:bg-[#1E3A5F]/40 border border-[#1E3A5F]/40 text-white font-semibold text-xs sm:text-sm hover:border-[#2563EB] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-lg"
                title="Call 98250 45916"
              >
                <div className="w-5 h-5 rounded-md bg-[#2563EB] text-white flex items-center justify-center shrink-0">
                  <IconPhone size={11} />
                </div>
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone2}`}
                className="w-full sm:w-auto px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#0F172A]/90 hover:bg-[#1E3A5F]/40 border border-[#1E3A5F]/40 text-white font-semibold text-xs sm:text-sm hover:border-[#2563EB] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 shadow-lg"
                title="Call 97272 45916"
              >
                <div className="w-5 h-5 rounded-md bg-[#2563EB] text-white flex items-center justify-center shrink-0">
                  <IconPhone size={11} />
                </div>
                <span>{COMPANY_INFO.phone2Display}</span>
              </a>
            </div>

            {/* Preserved Recognized WhatsApp Green Button */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Abhishek Travels, I would like to check vehicle availability and rates.')}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold text-sm shadow-[0_8px_25px_rgba(16,185,129,0.35)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
            >
              <IconMessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* 3D Framed Fleet Showcase Banner (Road + Car Fleet) - Moved Upward & Streamlined */}
          <div className="relative mb-8 sm:mb-9 rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-[#0F172A]/90 border border-[#1E3A5F]/40 shadow-[0_20px_50px_rgba(15,23,42,0.8)] backdrop-blur-xl group overflow-hidden">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] max-h-[320px] sm:max-h-[350px] bg-[#0F172A]">
              <img
                src={fleetRoadBg}
                onError={(e) => { e.target.src = '/images/fleet-road-hero.jpg'; }}
                alt="Abhishek Travels Fleet on Highway Road"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/25 to-transparent opacity-85" />

              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-xl bg-[#0F172A]/90 border border-[#1E3A5F]/50 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>OUR FLEET ON THE ROAD</span>
                </div>
              </div>

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-6 sm:right-6 text-left flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <h3 className="text-base sm:text-xl md:text-2xl font-black text-white drop-shadow-md">
                    Pristine Vehicles Ready For Outstation & Local Dispatch
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium">
                    Innovas • Dzires • VIP 20-Seater Maharaja Urbania • AC Sleeper Coaches
                  </p>
                </div>
                <button
                  onClick={onExploreFleet}
                  className="px-4 py-2 rounded-xl bg-[#2563EB] text-white font-extrabold text-xs hover:bg-[#1D4ED8] transition-colors flex items-center gap-1.5 shrink-0 self-start sm:self-auto shadow-md shadow-[#2563EB]/40 border border-white/20"
                >
                  <span>Select Your Car</span>
                  <IconArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* 3D Elevated Statistics Grid - Compact & Elegant */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#0F172A]/90 to-[#0F172A]/95 border border-[#1E3A5F]/30 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-transform group text-left">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-white group-hover:text-[#93C5FD] transition-colors">
                  {COMPANY_INFO.experienceYears}
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1E3A5F]/40 text-[#93C5FD] flex items-center justify-center">
                  <IconAward size={15} />
                </div>
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Years of Trust</p>
              <span className="text-[10px] text-[#93C5FD] mt-0.5 block font-medium">Est. in Gujarat</span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#0F172A]/90 to-[#0F172A]/95 border border-[#1E3A5F]/30 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-transform group text-left">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-white group-hover:text-[#93C5FD] transition-colors">
                  {COMPANY_INFO.tripsCompleted}
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1E3A5F]/40 text-[#93C5FD] flex items-center justify-center">
                  <IconUsers size={15} />
                </div>
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Trips Completed</p>
              <span className="text-[10px] text-emerald-400 mt-0.5 block font-medium">Across All States</span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#0F172A]/90 to-[#0F172A]/95 border border-[#1E3A5F]/30 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-transform group text-left">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-white group-hover:text-[#93C5FD] transition-colors">
                  {COMPANY_INFO.fleetSize}
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1E3A5F]/40 text-[#93C5FD] flex items-center justify-center">
                  <IconCar size={15} />
                </div>
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Maintained Fleet</p>
              <span className="text-[10px] text-slate-300 mt-0.5 block font-medium">Sedans to Buses</span>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#0F172A]/90 to-[#0F172A]/95 border border-[#1E3A5F]/30 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-transform group text-left">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-white">
                  4.9 ★
                </span>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1E3A5F]/40 text-[#93C5FD] flex items-center justify-center">
                  <IconStar size={15} fill="currentColor" />
                </div>
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">Customer Rating</p>
              <span className="text-[10px] text-slate-300 mt-0.5 block font-medium">1,450+ Verified Trips</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
