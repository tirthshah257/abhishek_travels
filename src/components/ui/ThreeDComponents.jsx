import React from 'react';

// 3D Embossed Icon Tile
export const ThreeDIconTile = ({ 
  icon, 
  variant = 'gold', 
  size = 'md',
  className = '' 
}) => {
  const variantStyles = {
    gold: 'from-amber-500/40 via-yellow-500/20 to-amber-600/30 border-amber-400/50 text-amber-300 shadow-[0_8px_24px_-6px_rgba(245,158,11,0.5)]',
    amber: 'from-amber-600/40 via-orange-500/20 to-amber-700/30 border-amber-400/40 text-amber-300 shadow-[0_8px_20px_-6px_rgba(245,158,11,0.5)]',
    orange: 'from-orange-600/40 via-amber-500/20 to-red-600/30 border-orange-400/40 text-orange-300 shadow-[0_8px_20px_-6px_rgba(234,88,12,0.5)]',
    emerald: 'from-emerald-600/40 via-teal-500/20 to-green-600/30 border-emerald-400/40 text-emerald-400 shadow-[0_8px_20px_-6px_rgba(16,185,129,0.5)]',
    purple: 'from-purple-600/40 via-amber-500/20 to-indigo-600/30 border-purple-400/40 text-purple-300 shadow-[0_8px_20px_-6px_rgba(168,85,247,0.5)]',
    blue: 'from-amber-500/30 via-slate-700/30 to-zinc-800/40 border-amber-400/30 text-amber-200 shadow-[0_8px_20px_-6px_rgba(245,158,11,0.3)]'
  };

  const sizeStyles = {
    sm: 'w-10 h-10 rounded-xl text-lg',
    md: 'w-14 h-14 rounded-2xl text-2xl',
    lg: 'w-18 h-18 rounded-3xl text-3xl'
  };

  return (
    <div className={`relative group/icon inline-flex items-center justify-center bg-gradient-to-br ${variantStyles[variant] || variantStyles.gold} ${sizeStyles[size] || sizeStyles.md} border backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl ${className}`}>
      {/* Specular 3D Top Highlight */}
      <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-white/30 to-transparent rounded-t-[inherit] pointer-events-none" />
      {/* Center Icon */}
      <div className="relative z-10 flex items-center justify-center transition-transform duration-300 group-hover/icon:scale-110">
        {icon}
      </div>
    </div>
  );
};

// 3D Glass Layered Card
export const ThreeDCard = ({ 
  children, 
  className = '', 
  glow = 'gold',
  interactive = true 
}) => {
  const glowColors = {
    gold: 'hover:shadow-[0_20px_50px_-12px_rgba(245,158,11,0.3)] hover:border-amber-500/50',
    amber: 'hover:shadow-[0_20px_50px_-12px_rgba(217,119,6,0.3)] hover:border-amber-400/50',
    emerald: 'hover:shadow-[0_20px_50px_-12px_rgba(16,185,129,0.3)] hover:border-emerald-500/50',
    orange: 'hover:shadow-[0_20px_50px_-12px_rgba(234,88,12,0.3)] hover:border-orange-500/50',
    blue: 'hover:shadow-[0_20px_50px_-12px_rgba(245,158,11,0.25)] hover:border-amber-400/40'
  };

  return (
    <div className={`relative rounded-2xl bg-gradient-to-b from-zinc-900/85 via-zinc-900/90 to-zinc-950/95 border border-white/10 backdrop-blur-xl shadow-xl transition-all duration-300 ${interactive ? `hover:-translate-y-2 ${glowColors[glow] || glowColors.gold}` : ''} ${className}`}>
      {/* Top 3D Light Glaze */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-200/30 to-transparent pointer-events-none" />
      {children}
    </div>
  );
};

// 3D Floating Pill Badge
export const FloatingPill = ({ 
  children, 
  className = '', 
  variant = 'gold' 
}) => {
  const pillVariants = {
    gold: 'bg-amber-500/15 border-amber-400/40 text-amber-300 shadow-[0_4px_16px_-4px_rgba(245,158,11,0.4)]',
    amber: 'bg-amber-600/15 border-amber-500/40 text-amber-200 shadow-[0_4px_16px_-4px_rgba(217,119,6,0.4)]',
    orange: 'bg-orange-500/15 border-orange-400/40 text-orange-300 shadow-[0_4px_16px_-4px_rgba(234,88,12,0.4)]',
    emerald: 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300 shadow-[0_4px_16px_-4px_rgba(16,185,129,0.35)]',
    purple: 'bg-purple-500/15 border-purple-400/40 text-purple-300 shadow-[0_4px_16px_-4px_rgba(168,85,247,0.35)]'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border backdrop-blur-md transition-all duration-300 ${pillVariants[variant] || pillVariants.gold} ${className}`}>
      {children}
    </span>
  );
};
