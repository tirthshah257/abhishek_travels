import React from 'react';
import { COMPANY_INFO } from '../data/vehiclesData';
import { IconUsers, IconCheck, IconTag, IconZap, IconPhone, IconMessageCircle } from './ui/Icons';
import { FloatingPill } from './ui/ThreeDComponents';

export default function VehicleCard({ vehicle, onBookVehicle }) {
  const getWhatsAppBookingLink = (carName) => {
    const text = `Hello Abhishek Travels, I am interested in booking the ${carName}. Please share rates and availability.`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="group relative rounded-3xl bg-gradient-to-b from-[#0F172A]/95 via-[#0F172A]/85 to-[#0F172A]/98 border border-[#1E3A5F]/30 hover:border-[#1E3A5F] backdrop-blur-xl shadow-xl hover:shadow-[0_20px_50px_-12px_rgba(30,58,95,0.4)] transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-2">
      
      {/* 3D Specular Top Glaze */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1E3A5F]/40 to-transparent pointer-events-none" />

      {/* Top Bar: Badge & Capacity */}
      <div className="flex items-center justify-between p-5 pb-2 relative z-10">
        {vehicle.badge ? (
          <FloatingPill variant="navy" className="text-[11px] font-bold uppercase tracking-wider py-1">
            {vehicle.badge}
          </FloatingPill>
        ) : <div />}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-300">
          <IconUsers size={12} className="text-[#93C5FD]" />
          <span>{vehicle.capacity}</span>
        </span>
      </div>

      {/* Vehicle Image Stage with Ambient Underglow */}
      <div className="relative h-48 px-6 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-x-12 bottom-4 h-12 bg-[#1E3A5F]/20 rounded-full blur-xl group-hover:bg-[#1E3A5F]/35 transition-all duration-300" />
        <img 
          src={vehicle.image} 
          alt={vehicle.name}
          className="relative z-10 max-h-40 max-w-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'images/bus.png';
          }}
        />
      </div>

      {/* Content Body */}
      <div className="p-5 pt-3 flex flex-col flex-1 bg-[#0F172A]/60 border-t border-white/5 text-left">
        <div className="flex items-baseline justify-between gap-2 mb-2">
          <h3 className="font-extrabold text-lg text-white group-hover:text-[#93C5FD] transition-colors">
            {vehicle.name}
          </h3>
          <span className="text-[11px] font-bold text-[#93C5FD] tracking-wide uppercase whitespace-nowrap">
            {vehicle.categoryLabel}
          </span>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1 line-clamp-3">
          {vehicle.description}
        </p>

        {/* Feature Specs */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {vehicle.specs.slice(0, 4).map((spec, i) => (
            <span key={i} className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-lg bg-white/5 border border-white/5 text-slate-300">
              <IconCheck size={11} className="text-[#93C5FD]" />
              <span>{spec}</span>
            </span>
          ))}
          {vehicle.specs.length > 4 && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-lg bg-[#1E3A5F]/20 text-[#E8F0F7]">
              +{vehicle.specs.length - 4} more
            </span>
          )}
        </div>

        {/* Quality Guarantee Tag */}
        <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/5 mb-4">
          <IconZap size={13} className="text-[#93C5FD] flex-shrink-0" />
          <span className="text-[11px] font-semibold text-slate-300 truncate">
            Chauffeur Included • All-India Permit
          </span>
        </div>

        {/* Actions Grid */}
        <div className="flex flex-col gap-2 mt-auto">
          <button 
            onClick={() => onBookVehicle(vehicle)}
            className="btn-shimmer w-full py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-xs shadow-md shadow-[#2563EB]/35 hover:shadow-lg hover:shadow-[#2563EB]/55 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 border border-white/20"
          >
            <IconZap size={14} className="text-[#93C5FD]" />
            <span>Instant Quote / Book</span>
          </button>
          
          <div className="grid grid-cols-2 gap-2">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="py-2 rounded-xl bg-[#E8F0F7] border border-[#C5D8EA] text-[#1E3A5F] font-semibold text-xs hover:bg-[#D4E4F3] transition-all flex items-center justify-center gap-1.5"
            >
              <IconPhone size={13} className="text-[#1E3A5F]" />
              <span>Call</span>
            </a>
            <a 
              href={getWhatsAppBookingLink(vehicle.name)} 
              target="_blank" 
              rel="noreferrer" 
              className="py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-600 hover:text-white transition-all font-semibold text-xs flex items-center justify-center gap-1.5"
            >
              <IconMessageCircle size={14} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
