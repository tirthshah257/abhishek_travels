import React from 'react';

// 3D Embossed Icon Tile
export const ThreeDIconTile = ({ 
  icon, 
  variant = 'navy', 
  size = 'md',
  className = '' 
}) => {
  const variantStyles = {
    navy: 'from-[#1E3A5F] via-[#2A4D77] to-[#0F172A] border-white/20 text-white shadow-[0_8px_24px_-6px_rgba(30,58,95,0.4)]',
    lightBlue: 'from-[#E8F0F7] via-[#DCE8F3] to-[#C5D8EA] border-[#1E3A5F]/25 text-[#1E3A5F] shadow-[0_8px_20px_-6px_rgba(30,58,95,0.2)]',
    darkNavy: 'from-[#0F172A] via-[#1E3A5F] to-[#0F172A] border-[#E2E8F0]/30 text-white shadow-[0_8px_20px_-6px_rgba(15,23,42,0.4)]',
    emerald: 'from-emerald-600/30 via-teal-500/20 to-green-600/30 border-emerald-500/30 text-emerald-600 shadow-[0_8px_20px_-6px_rgba(16,185,129,0.3)]',
    slate: 'from-slate-200 via-slate-100 to-slate-300 border-slate-300 text-slate-700 shadow-[0_8px_20px_-6px_rgba(100,116,139,0.2)]',
    blue: 'from-[#1E3A5F]/90 via-[#2E5584] to-[#1E3A5F] border-[#E8F0F7]/30 text-white shadow-[0_8px_20px_-6px_rgba(30,58,95,0.3)]'
  };

  const sizeStyles = {
    sm: 'w-10 h-10 rounded-xl text-lg',
    md: 'w-14 h-14 rounded-2xl text-2xl',
    lg: 'w-18 h-18 rounded-3xl text-3xl'
  };

  return (
    <div className={`relative group/icon inline-flex items-center justify-center bg-gradient-to-br ${variantStyles[variant] || variantStyles.navy} ${sizeStyles[size] || sizeStyles.md} border backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl ${className}`}>
      {/* Specular 3D Top Highlight */}
      <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-white/30 to-transparent rounded-t-[inherit] pointer-events-none" />
      {/* Center Icon */}
      <div className="relative z-10 flex items-center justify-center transition-transform duration-300 group-hover/icon:scale-110">
        {icon}
      </div>
    </div>
  );
};

// 3D Glass Layered Card (Clean Dark Navy + Navy Blue Accents)
export const ThreeDCard = ({ 
  children, 
  className = '', 
  glow = 'navy',
  interactive = true 
}) => {
  const glowColors = {
    navy: 'hover:shadow-[0_20px_50px_-12px_rgba(30,58,95,0.4)] hover:border-[#1E3A5F]',
    lightBlue: 'hover:shadow-[0_20px_50px_-12px_rgba(30,58,95,0.3)] hover:border-[#1E3A5F]',
    emerald: 'hover:shadow-[0_20px_50px_-12px_rgba(16,185,129,0.35)] hover:border-emerald-500/50',
    slate: 'hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.3)] hover:border-slate-400/50',
    blue: 'hover:shadow-[0_20px_50px_-12px_rgba(30,58,95,0.4)] hover:border-[#1E3A5F]'
  };

  return (
    <div className={`relative rounded-2xl bg-[#0F172A]/92 border border-[#1E3A5F]/40 backdrop-blur-xl shadow-lg transition-all duration-300 ${interactive ? `hover:-translate-y-1.5 ${glowColors[glow] || glowColors.navy}` : ''} ${className}`}>
      {/* Top 3D Light Glaze */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1E3A5F]/40 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};

// 3D Floating Pill Badge (Clean White + Navy)
export const FloatingPill = ({ 
  children, 
  className = '', 
  variant = 'navy' 
}) => {
  const pillVariants = {
    navy: 'bg-[#E8F0F7] border-[#C5D8EA] text-[#1E3A5F] shadow-sm',
    white: 'bg-white border-[#E2E8F0] text-[#1E3A5F] shadow-sm',
    darkNavy: 'bg-[#0F172A] border-[#1E3A5F]/40 text-white shadow-sm',
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm',
    slate: 'bg-slate-100 border-slate-200 text-slate-700 shadow-sm'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border backdrop-blur-md transition-all duration-300 ${pillVariants[variant] || pillVariants.navy} ${className}`}>
      {children}
    </span>
  );
};
