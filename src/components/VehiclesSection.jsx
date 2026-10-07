import React, { useState, useMemo, useEffect } from 'react';
import { VEHICLES, VEHICLE_CATEGORIES, COMPANY_INFO } from '../data/vehiclesData';
import { 
  IconCar, 
  IconSparkles, 
  IconCheck, 
  IconUsers, 
  IconPhone, 
  IconMessageCircle, 
  IconZap, 
  IconShield,
  IconSearch,
  IconX
} from './ui/Icons';
import { FloatingPill } from './ui/ThreeDComponents';

export default function VehiclesSection({ 
  activeCategory = '5-seater', 
  onCategoryChange, 
  onBookVehicle,
  selectedCarId,
  onSelectCar
}) {
  // Category state (defaults to 5-seater cars)
  const currentCategory = activeCategory === 'all' ? '5-seater' : (activeCategory || '5-seater');
  
  // Internal state for clicked vehicle (defaults to 5-seater Maruti Dzire)
  const [activeCarId, setActiveCarId] = useState(selectedCarId || 'dzire');
  const [searchQuery, setSearchQuery] = useState('');

  // Keep in sync with parent prop if provided
  useEffect(() => {
    if (selectedCarId) {
      setActiveCarId(selectedCarId);
    }
  }, [selectedCarId]);

  // Cars belonging to the active category
  const categoryVehicles = useMemo(() => {
    return VEHICLES.filter(v => v.category === currentCategory);
  }, [currentCategory]);

  // If activeCarId does not belong to the current category, switch to the first car of this category
  useEffect(() => {
    const exists = categoryVehicles.some(v => v.id === activeCarId);
    if (!exists && categoryVehicles.length > 0) {
      setActiveCarId(categoryVehicles[0].id);
    }
  }, [currentCategory, categoryVehicles, activeCarId]);

  // The single clicked vehicle to display
  const clickedVehicle = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const found = VEHICLES.find(v => 
        v.name.toLowerCase().includes(q) || 
        v.categoryLabel.toLowerCase().includes(q)
      );
      if (found) return found;
    }
    return VEHICLES.find(v => v.id === activeCarId) || categoryVehicles[0] || VEHICLES[0];
  }, [activeCarId, categoryVehicles, searchQuery]);

  const handleCategorySwitch = (catId) => {
    setSearchQuery('');
    if (onCategoryChange) {
      onCategoryChange(catId);
    }
    const firstCarOfCat = VEHICLES.find(v => v.category === catId);
    if (firstCarOfCat) {
      setActiveCarId(firstCarOfCat.id);
      if (onSelectCar) onSelectCar(firstCarOfCat.id);
    }
  };

  const handleCarClick = (vehicleId) => {
    setSearchQuery('');
    setActiveCarId(vehicleId);
    if (onSelectCar) onSelectCar(vehicleId);
  };

  const getWhatsAppLink = (carName) => {
    const text = `Hello Abhishek Travels, I want to book the ${carName}. Please check availability for my trip.`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-20 md:py-28 relative" id="vehicles">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block mb-3">
            <FloatingPill variant="gold" className="px-3.5 py-1 text-xs">
              <IconSparkles size={12} className="text-amber-300" />
              <span>Chauffeur-Driven Fleet Showcase</span>
            </FloatingPill>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Select & View Your Chauffeur Vehicle
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            Choose a vehicle category below to view and book your preferred car. 
            All vehicles are deep-cleaned, air-conditioned, and driven by verified highway chauffeurs.
          </p>
        </div>

        {/* Category Selector Tabs (Based on 5-Seater Cars) */}
        <div className="p-2 sm:p-2.5 rounded-2xl bg-zinc-900/85 border border-amber-500/20 backdrop-blur-xl shadow-xl mb-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {VEHICLE_CATEGORIES.map(category => {
              const isActive = currentCategory === category.id;
              const count = VEHICLES.filter(v => v.category === category.id).length;

              return (
                <button
                  key={category.id}
                  onClick={() => handleCategorySwitch(category.id)}
                  className={`py-3 px-3 rounded-xl text-xs font-bold transition-all duration-300 flex flex-col sm:flex-row items-center justify-center gap-1.5 ${
                    isActive 
                      ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 shadow-lg shadow-amber-500/25 border border-yellow-300/60 scale-[1.02]' 
                      : 'bg-zinc-800/70 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
                  }`}
                >
                  <span className="truncate">{category.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${isActive ? 'bg-zinc-950/20 text-zinc-950 font-black' : 'bg-white/5 text-zinc-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Vehicle Quick Switcher Pills for this Category */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-8 max-w-3xl mx-auto scrollbar-none px-2">
          {categoryVehicles.map(vehicle => {
            const isSelected = clickedVehicle && clickedVehicle.id === vehicle.id;
            return (
              <button
                key={vehicle.id}
                onClick={() => handleCarClick(vehicle.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-400/60 shadow-md shadow-amber-500/10 scale-105'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 opacity-80" />
                <span>{vehicle.name}</span>
              </button>
            );
          })}
        </div>

        {/* ========================================================
            ALL CARS IN THE SELECTED CATEGORY (e.g. All 5-Seater Cars)
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {categoryVehicles.map((vehicle) => {
            const isSelected = activeCarId === vehicle.id;
            
            return (
              <div 
                key={vehicle.id}
                id={`car-${vehicle.id}`}
                className={`relative rounded-3xl bg-gradient-to-b from-zinc-900/95 via-zinc-900/85 to-zinc-950/98 border p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between group ${
                  isSelected 
                    ? 'border-amber-400 shadow-amber-500/15 ring-2 ring-amber-400/40 scale-[1.01]' 
                    : 'border-amber-500/20 hover:border-amber-500/40'
                }`}
              >
                {/* Gold Top Specular Shimmer Line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80" />

                <div>
                  {/* Top Header: Badge & Seating Pill */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-lg border border-amber-500/20">
                        {vehicle.categoryLabel}
                      </span>
                      {vehicle.badge && (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20">
                          {vehicle.badge}
                        </span>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-zinc-300">
                      <IconUsers size={12} className="text-amber-400" />
                      <span>{vehicle.capacity}</span>
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {vehicle.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed mb-4 font-normal">
                    {vehicle.description}
                  </p>

                  {/* Stage with Vehicle Image */}
                  <div className="relative w-full h-44 sm:h-48 flex items-center justify-center p-2 my-2 bg-zinc-950/60 rounded-2xl border border-white/10 overflow-hidden">
                    <div className="absolute inset-x-6 bottom-2 h-10 bg-amber-500/15 rounded-full blur-xl animate-pulse-glow" />
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name}
                      className="relative z-10 max-h-40 max-w-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = 'images/bus.png'; }}
                    />
                  </div>

                  {/* Specifications & Comfort Chips */}
                  <div className="mt-4 mb-5">
                    <div className="flex flex-wrap gap-1.5">
                      {vehicle.specs.map((spec, idx) => (
                        <div 
                          key={idx} 
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-800/90 border border-white/10 text-[11px] font-semibold text-zinc-100 shadow-sm"
                        >
                          <IconCheck size={12} className="text-amber-400 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions Row: Call Now, WhatsApp Inquiry, Book Vehicle */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="py-3 px-3.5 rounded-xl bg-zinc-800/90 hover:bg-zinc-700 border border-amber-500/30 text-amber-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer shrink-0"
                    title={`Call Abhishek Travels Dispatch for ${vehicle.name}`}
                  >
                    <IconPhone size={14} className="text-amber-400" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={getWhatsAppLink(vehicle.name)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-shimmer flex-1 py-3 px-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-xs shadow-md shadow-emerald-600/20 flex items-center justify-center gap-1.5 transition-transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                  >
                    <IconMessageCircle size={15} />
                    <span>WhatsApp Inquiry</span>
                  </a>

                  <button
                    onClick={() => onBookVehicle(vehicle)}
                    className="py-3 px-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 font-black text-xs shadow-md shadow-amber-500/20 hover:brightness-110 flex items-center justify-center gap-1.5 transition-transform hover:scale-[1.02] active:scale-[0.98] border border-yellow-300/60 cursor-pointer shrink-0"
                  >
                    <IconZap size={14} />
                    <span>Book Vehicle</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Category helper note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-zinc-400">
            Click any category tab above to explore our complete 5-seater sedans, SUVs, Urbania vans, and luxury coaches.
          </p>
        </div>

      </div>
    </section>
  );
}
