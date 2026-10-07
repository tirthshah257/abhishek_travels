import React from 'react';
import { COMPANY_INFO } from '../data/vehiclesData';
import { IconShield, IconSparkles, IconZap, IconTag, IconMapPin, IconCrown, IconArrowRight, IconMessageCircle } from './ui/Icons';
import { ThreeDIconTile, ThreeDCard, FloatingPill } from './ui/ThreeDComponents';

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: <IconShield size={24} />,
      variant: 'gold',
      title: 'Verified & Skilled Chauffeurs',
      desc: 'All our drivers have 5+ years of highway driving expertise, commercial licenses, police verification, and thorough local route knowledge.'
    },
    {
      icon: <IconSparkles size={24} />,
      variant: 'amber',
      title: 'Deep Sanitized & Fresh Fleet',
      desc: 'Every car undergoes a complete wash, vacuum cleaning, and fragrance treatment prior to departure. Chilled AC on guaranteed.'
    },
    {
      icon: <IconZap size={24} />,
      variant: 'orange',
      title: '24/7 Breakdown & Assistance',
      desc: 'Comprehensive nationwide support network. In the rare event of mechanical issues, a quick replacement vehicle is dispatched immediately.'
    },
    {
      icon: <IconTag size={24} />,
      variant: 'emerald',
      title: 'Clear Upfront Quotes & No Surprises',
      desc: 'Transparent trip estimates without unexpected hidden driver night charges or fuel surcharges. Reliable and honest booking.'
    },
    {
      icon: <IconMapPin size={24} />,
      variant: 'purple',
      title: 'All-India Commercial Permits',
      desc: 'All vehicles carry up-to-date commercial tourist permits, interstate tax clearance, and valid comprehensive insurance for smooth travel across states.'
    },
    {
      icon: <IconCrown size={24} />,
      variant: 'gold',
      title: 'Tailored Tour Itineraries',
      desc: 'Travel at your own pace with unlimited stops for photography, tea, food, and sightseeing without rigid schedules.'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative" id="why-us">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3">
            <FloatingPill variant="gold" className="px-3.5 py-1 text-xs">
              <IconCrown size={12} className="text-amber-300" />
              <span>The Abhishek Travels Guarantee</span>
            </FloatingPill>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Why Thousands of Travelers Trust Us
          </h2>
          <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal bg-zinc-950/60 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
            For over {COMPANY_INFO.experienceYears} years, we have been delivering unforgettable journeys 
            across Gujarat, Rajasthan, Maharashtra, and all over India with unmatched punctuality.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {highlights.map((item, index) => (
            <ThreeDCard key={index} className="p-7" glow={item.variant}>
              <div className="mb-5">
                <ThreeDIconTile 
                  icon={item.icon} 
                  variant={item.variant} 
                  size="md" 
                />
              </div>
              <h3 className="text-lg font-bold text-white mb-2.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
                {item.desc}
              </p>
            </ThreeDCard>
          ))}
        </div>

        {/* Bulk Event Trust Banner */}
        <div className="relative rounded-3xl p-7 sm:p-9 bg-gradient-to-r from-amber-950/80 via-zinc-900/90 to-zinc-950/95 border border-amber-500/35 shadow-[0_20px_50px_rgba(245,158,11,0.2)] backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden">
          <div className="flex items-center gap-5 relative z-10 text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-300/40 flex items-center justify-center text-amber-300 flex-shrink-0 shadow-lg">
              <IconCrown size={28} />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                Planning a wedding, corporate conference, or pilgrimage?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300">
                We provide bulk fleet bookings (multiple Innovas, Urbania vans & luxury buses) with dedicated on-ground transport coordinators.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 relative z-10 w-full lg:w-auto">
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Abhishek Travels, I need bulk fleet booking for an event.')}`} 
              target="_blank" 
              rel="noreferrer" 
              className="btn-shimmer w-full lg:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 font-black text-xs tracking-wide shadow-xl transition-transform hover:scale-105"
            >
              <IconMessageCircle size={16} />
              <span>Inquire for Bulk Booking</span>
              <IconArrowRight size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
