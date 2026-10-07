import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/vehiclesData';
import { IconPhone, IconMessageCircle, IconBuilding, IconChevronDown, IconSparkles, IconClock, IconMapPin } from './ui/Icons';
import { ThreeDIconTile, ThreeDCard, FloatingPill } from './ui/ThreeDComponents';

export default function ContactSection({ onOpenBookingModal }) {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "What is included in the vehicle rental charges?",
      a: "Our rates include the vehicle hire, fuel, and professional chauffeur service. Toll taxes, state border permits, and parking are either included in all-inclusive packages or charged at actual receipts based on your route choice."
    },
    {
      q: "How early should I book the 20-Seater Force Urbania or Maharaja Tempo?",
      a: "Force Urbania and Maharaja 1x1 Tempo Travellers are in extremely high demand for weddings and family pilgrimages. We recommend reserving at least 3-7 days in advance, although emergency same-day dispatch is also available upon confirmation."
    },
    {
      q: "Do you offer one-way outstation taxi drops?",
      a: "Yes! We offer economical one-way cab drops from Ahmedabad to Mumbai, Surat, Vadodara, Rajkot, Udaipur, Mount Abu, Indore, and all major cities across India."
    },
    {
      q: "Are the vehicles sanitized and safe for elderly passengers and kids?",
      a: "Absolutely. All our cars and vans feature deep-sanitized upholstery, functioning seatbelts, child locks, smooth air suspension, and courteous drivers who drive with extreme care."
    }
  ];

  return (
    <section className="py-20 md:py-28 relative" id="contact">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3">
            <FloatingPill variant="gold" className="px-3.5 py-1 text-xs">
              <IconSparkles size={12} className="text-amber-300" />
              <span>24/7 Helpline & Booking Desk</span>
            </FloatingPill>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Book Your Ride Or Inquire 24/7
          </h2>
          <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal bg-zinc-950/60 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
            Our dispatch managers are available round the clock to customize your travel package.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1: Direct Call */}
          <ThreeDCard className="p-8 text-center flex flex-col items-center" glow="gold">
            <ThreeDIconTile icon={<IconPhone size={24} />} variant="gold" size="md" className="mb-5" />
            <h3 className="text-lg font-bold text-white mb-1.5">Direct Phone Call</h3>
            <p className="text-xs text-zinc-200 mb-4 font-normal">Speak immediately with our booking coordinator for instant rates.</p>
            <a href={`tel:${COMPANY_INFO.phone}`} className="text-base font-black text-amber-400 hover:text-amber-300 mb-6 block">
              {COMPANY_INFO.phoneDisplay}
            </a>
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="mt-auto w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 font-black text-xs transition-colors shadow-lg shadow-amber-500/20"
            >
              Call Hotline Now
            </a>
          </ThreeDCard>

          {/* Card 2: WhatsApp */}
          <ThreeDCard className="p-8 text-center flex flex-col items-center" glow="emerald">
            <ThreeDIconTile icon={<IconMessageCircle size={24} />} variant="emerald" size="md" className="mb-5" />
            <h3 className="text-lg font-bold text-white mb-1.5">WhatsApp Booking</h3>
            <p className="text-xs text-zinc-400 mb-4">Get instant car photos, video walk-arounds, and written quotations.</p>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Abhishek Travels, I would like to book a vehicle.')}`} 
              target="_blank" 
              rel="noreferrer" 
              className="text-base font-black text-emerald-400 hover:text-emerald-300 mb-6 block"
            >
              +91 98250 45916
            </a>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Abhishek Travels, I would like to book a vehicle.')}`} 
              target="_blank" 
              rel="noreferrer" 
              className="mt-auto w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-xs transition-colors shadow-lg shadow-emerald-600/25"
            >
              Chat on WhatsApp
            </a>
          </ThreeDCard>

          {/* Card 3: Office & Timings */}
          <ThreeDCard className="p-8 text-center flex flex-col items-center" glow="amber">
            <ThreeDIconTile icon={<IconBuilding size={24} />} variant="amber" size="md" className="mb-5" />
            <h3 className="text-lg font-bold text-white mb-1.5">Office & Timings</h3>
            <p className="text-xs text-zinc-200 font-semibold mb-1">{COMPANY_INFO.location}</p>
            <p className="text-[11px] text-zinc-400 mb-4">{COMPANY_INFO.officeAddress}</p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[11px] font-semibold text-amber-300 mb-6">
              <IconClock size={12} />
              <span>{COMPANY_INFO.hours}</span>
            </div>
            <button 
              onClick={() => onOpenBookingModal(null)} 
              className="mt-auto w-full py-2.5 rounded-xl bg-zinc-900 border border-amber-500/30 hover:border-amber-400 hover:bg-zinc-800 text-amber-300 font-bold text-xs transition-all"
            >
              Online Reservation Form
            </button>
          </ThreeDCard>

        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h3>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${isOpen ? 'bg-zinc-900/90 border-amber-500/40 shadow-xl shadow-amber-500/10' : 'bg-zinc-900/60 border-white/10 hover:border-white/20'}`}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <div className="p-5 flex items-center justify-between gap-4">
                    <span className="font-bold text-sm sm:text-base text-white text-left">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-amber-400 bg-amber-500/15' : ''}`}>
                      <IconChevronDown size={16} />
                    </div>
                  </div>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed text-left border-t border-white/5 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
