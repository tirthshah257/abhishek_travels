import React, { useState } from 'react';
import { COMPANY_INFO, VEHICLE_CATEGORIES, VEHICLES } from '../data/vehiclesData';
import { IconCar, IconPhone, IconMessageCircle, IconArrowRight, IconAward, IconUsers, IconStar, IconShield, IconSparkles, IconZap } from './ui/Icons';
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
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden" id="home">

      {/* Ambient Lighting Layer (Uses Master Unified Body Background) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-amber-500/15 via-orange-600/10 to-transparent blur-3xl opacity-70" />
      </div>

      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">

          {/* 3D Floating Gold Pill */}
          <div className="inline-block mb-6 animate-float">
            <FloatingPill variant="gold" className="px-4 py-1.5 text-xs shadow-lg shadow-amber-500/20">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping mr-1"></span>
              <IconSparkles size={13} className="text-amber-300" />
            </FloatingPill>
          </div>

          {/* Headline with High Contrast Gold & Crisp Text Shadow */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6 leading-[1.15] drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
            Journey in Supreme Luxury, <br />
            <span className="text-amber-300 drop-shadow-[0_4px_16px_rgba(0,0,0,1)] font-extrabold inline-block mt-1">Anywhere Across India.</span>
          </h1>

          {/* Subtitle with High-Contrast Backdrop Box for 100% Readability */}
          <p className="text-sm sm:text-lg md:text-xl text-zinc-100 max-w-3xl mx-auto mb-10 leading-relaxed font-normal bg-zinc-950/65 p-4 sm:p-5 rounded-2xl border border-amber-500/20 backdrop-blur-md shadow-2xl text-shadow-sm">
            Experience royal comfort on every highway with our pristine fleet of Toyota Innovas,
            VIP 20-Seater Force Urbania Maharaja vans, executive sedans, and AC sleeper coaches.
            Polite verified chauffeurs, zero hidden surcharges, and 24/7 on-demand booking.
          </p>

          {/* 3D Glass Booking Console (Warm Amber Gold) */}
          <div className="relative mb-14 p-2 rounded-3xl bg-gradient-to-b from-amber-500/30 via-zinc-800/50 to-zinc-900/80 border border-amber-500/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
            <form onSubmit={handleHeroSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 p-3 rounded-2xl bg-zinc-950/90">

              {/* Field 1: Category */}
              <div className="flex flex-col text-left px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 focus-within:border-amber-400 transition-colors">
                <label className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                  <IconCar size={13} className="text-amber-400" />
                  Vehicle Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-transparent text-white font-semibold text-sm focus:outline-none cursor-pointer"
                  aria-label="Vehicle Category"
                >
                  {VEHICLE_CATEGORIES.map(cat => (
                    <option key={cat.id} value={cat.id} className="bg-zinc-900 text-white">
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Field 2: Trip Type */}
              <div className="flex flex-col text-left px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 focus-within:border-amber-400 transition-colors">
                <label className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                  <IconShield size={13} className="text-amber-400" />
                  Trip Type
                </label>
                <select
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                  className="bg-transparent text-white font-semibold text-sm focus:outline-none cursor-pointer"
                  aria-label="Trip Type"
                >
                  <option value="outstation" className="bg-zinc-900 text-white">Outstation Round Trip</option>
                  <option value="local" className="bg-zinc-900 text-white">Local Tour (24h/300km)</option>
                  <option value="airport" className="bg-zinc-900 text-white">Airport Transfer</option>
                  <option value="wedding" className="bg-zinc-900 text-white">Wedding & Group Tour</option>
                  <option value="airport" className="bg-zinc-900 text-white">Other Occasion</option>
                </select>
              </div>

              {/* Field 3: Destination */}
              <div className="flex flex-col text-left px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 focus-within:border-amber-400 transition-colors">
                <label className="text-[11px] font-bold uppercase tracking-wider text-amber-400 mb-1">
                  Destination / Tour
                </label>
                <input
                  type="text"
                  placeholder="e.g. Udaipur, Somnath, Mumbai..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="bg-transparent text-white placeholder-zinc-400 font-medium text-sm focus:outline-none"
                  aria-label="Destination"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-shimmer flex items-center justify-center gap-2 h-full min-h-[48px] rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 font-black text-sm shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Find Fleet</span>
                <IconArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* Quick CTA Buttons - Responsive Stack on Mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
            <button
              onClick={() => onOpenBookingModal(null)}
              className="btn-shimmer w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 font-black text-sm tracking-wide shadow-[0_10px_30px_rgba(245,158,11,0.4)] hover:shadow-[0_12px_35px_rgba(245,158,11,0.6)] hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 border border-yellow-300/60 cursor-pointer"
            >
              <span>Get Custom Quote</span>
              <IconArrowRight size={16} />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-zinc-900/95 hover:bg-zinc-800 border border-amber-500/30 text-white font-semibold text-sm hover:border-amber-400/60 hover:-translate-y-1 transition-all flex items-center justify-center gap-2.5 shadow-lg"
            >
              <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <IconPhone size={13} />
              </div>
              <span>Hotline: {COMPANY_INFO.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Abhishek Travels, I would like to check vehicle availability and rates.')}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-semibold text-sm shadow-[0_8px_25px_rgba(16,185,129,0.35)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              <IconMessageCircle size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* 3D Glass Framed Fleet Showcase Banner (Road + Car Fleet) */}
          <div className="relative mb-14 rounded-3xl p-3 bg-gradient-to-b from-amber-500/30 via-zinc-800/40 to-zinc-900/90 border border-amber-500/35 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl group overflow-hidden">
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[16/9] lg:aspect-[20/9] max-h-[460px] bg-zinc-950">
              <img
                src={fleetRoadBg}
                onError={(e) => { e.target.src = '/images/fleet-road-hero.jpg'; }}
                alt="Abhishek Travels Fleet on Highway Road"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-80" />

              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-xl bg-zinc-950/80 border border-amber-500/40 text-amber-400 font-bold text-xs flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>OUR FLEET ON THE ROAD</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-left flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <h3 className="text-lg sm:text-2xl font-black text-white drop-shadow-md">
                    Pristine Vehicles Ready For Outstation & Local Dispatch
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-medium">
                    Innovas • Dzires • VIP 20-Seater Maharaja Urbania • AC Sleeper Coaches
                  </p>
                </div>
                <button
                  onClick={onExploreFleet}
                  className="px-4 py-2 rounded-xl bg-amber-500 text-zinc-950 font-black text-xs hover:bg-amber-400 transition-colors flex items-center gap-1.5 shrink-0 self-start sm:self-auto shadow-md"
                >
                  <span>Select Your Car</span>
                  <IconArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* 3D Elevated Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">

            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-zinc-900/85 to-zinc-950/95 border border-amber-500/20 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-transform group text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.experienceYears}
                </span>
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <IconAward size={16} />
                </div>
              </div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Years of Trust</p>
              <span className="text-[10px] text-amber-400/90 mt-1 block font-medium">Est. in Gujarat</span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-zinc-900/85 to-zinc-950/95 border border-amber-500/20 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-transform group text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.tripsCompleted}
                </span>
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <IconUsers size={16} />
                </div>
              </div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Trips Completed</p>
              <span className="text-[10px] text-emerald-400 mt-1 block font-medium">Across All States</span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-zinc-900/85 to-zinc-950/95 border border-amber-500/20 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-transform group text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-400 transition-colors">
                  {COMPANY_INFO.fleetSize}
                </span>
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <IconCar size={16} />
                </div>
              </div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Maintained Fleet</p>
              <span className="text-[10px] text-amber-300 mt-1 block font-medium">Sedans to Buses</span>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-zinc-900/85 to-zinc-950/95 border border-amber-500/20 backdrop-blur-xl shadow-xl hover:-translate-y-1 transition-transform group text-left">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl sm:text-3xl font-black text-amber-400">
                  4.9 ★
                </span>
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <IconStar size={16} fill="currentColor" />
                </div>
              </div>
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Customer Rating</p>
              <span className="text-[10px] text-amber-300 mt-1 block font-medium">1,450+ Verified Trips</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
