import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, VEHICLES } from '../data/vehiclesData';
import { IconX, IconPhone, IconMessageCircle, IconCheck, IconCalendar, IconMapPin, IconUsers, IconCar, IconZap } from './ui/Icons';
import { FloatingPill } from './ui/ThreeDComponents';

export default function BookingModal({ vehicle, isOpen, onClose }) {
  const [selectedVehicleId, setSelectedVehicleId] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [tripType, setTripType] = useState('Outstation Round Trip');
  const [pickupCity, setPickupCity] = useState('Ahmedabad');
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [passengers, setPassengers] = useState('4');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (vehicle) {
      setSelectedVehicleId(vehicle.id);
    } else if (VEHICLES.length > 0) {
      setSelectedVehicleId(VEHICLES[0].id);
    }
  }, [vehicle]);

  if (!isOpen) return null;

  const currentVehicle = VEHICLES.find(v => v.id === selectedVehicleId) || vehicle || VEHICLES[0];

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const bookingDetails = 
`*NEW VEHICLE BOOKING INQUIRY - ABHISHEK TRAVELS*
---------------------------------------
*Vehicle:* ${currentVehicle ? currentVehicle.name : 'Not Specified'}
*Trip Type:* ${tripType}
*Customer Name:* ${customerName || 'Guest'}
*Contact Number:* ${customerPhone || 'Not provided'}
*Pickup Location:* ${pickupCity}
*Destination:* ${destination || 'To be discussed'}
*Travel Date:* ${travelDate || 'Flexible'}
*Passengers:* ${passengers}
${notes ? `*Special Request:* ${notes}\n` : ''}---------------------------------------
Please confirm vehicle availability and lowest rate quotation.`;

    const waUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(bookingDetails)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200" onClick={onClose}>
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-950 border border-white/15 p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] animate-in zoom-in-95 duration-200 scrollbar-none"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div>
            <FloatingPill variant="gold" className="text-[10px] mb-1">
              <span>Instant Reservation</span>
            </FloatingPill>
            <h3 className="text-xl font-extrabold text-white">
              Book {currentVehicle?.name || 'A Vehicle'}
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <IconX size={16} />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 text-3xl">
              <IconCheck size={36} />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Booking Inquiry Dispatched!</h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto mb-8 leading-relaxed">
              Your vehicle inquiry has been forwarded to our WhatsApp reservation desk. Our team will verify car availability and confirm with you promptly.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href={`tel:${COMPANY_INFO.phone}`} 
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 font-black text-xs flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-amber-500/20"
              >
                <IconPhone size={14} />
                <span>Need Urgent Confirmation? Call Dispatch</span>
              </a>
              <button 
                onClick={onClose} 
                className="w-full py-3 rounded-xl bg-slate-900 border border-white/10 text-slate-300 font-semibold text-xs hover:text-white"
              >
                Back to Fleet
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSubmit} className="flex flex-col gap-4 text-left">
            
            {/* Selected Vehicle Banner Card */}
            {currentVehicle && (
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-12 bg-slate-950 rounded-xl p-1 flex items-center justify-center">
                    <img 
                      src={currentVehicle.image} 
                      alt={currentVehicle.name} 
                      className="max-h-full max-w-full object-contain" 
                      onError={(e) => { e.target.src = 'images/bus.png'; }}
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">{currentVehicle.name}</span>
                    <span className="text-[11px] text-amber-400">{currentVehicle.capacity}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Vehicle Selection dropdown */}
            <div>
              <label className="text-xs font-bold text-slate-300 mb-1.5 block">Select Different Vehicle</label>
              <select 
                value={selectedVehicleId} 
                onChange={(e) => setSelectedVehicleId(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 focus:border-amber-400 text-xs text-white focus:outline-none cursor-pointer"
              >
                {VEHICLES.map(v => (
                  <option key={v.id} value={v.id} className="bg-slate-950 text-white">
                    {v.name} ({v.capacity})
                  </option>
                ))}
              </select>
            </div>

            {/* Two Columns: Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-300 mb-1.5 block">Your Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Ramesh Patel" 
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 focus:border-amber-400 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 mb-1.5 block">Mobile Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. 98250 45916" 
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 focus:border-amber-400 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Two Columns: Trip Type & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-300 mb-1.5 block">Trip Type</label>
                <select 
                  value={tripType} 
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 focus:border-amber-400 text-xs text-white focus:outline-none cursor-pointer"
                >
                  <option value="Outstation Round Trip">Outstation Round Trip</option>
                  <option value="One Way Drop">One Way Drop</option>
                  <option value="Local Tour (8hr/80km)">Local Tour (8hr/80km)</option>
                  <option value="Airport Pickup / Drop">Airport Pickup / Drop</option>
                  <option value="Wedding / Corporate Bulk">Wedding / Corporate Bulk</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 mb-1.5 block">Pickup Date</label>
                <input 
                  type="date" 
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 focus:border-amber-400 text-xs text-white focus:outline-none"
                />
              </div>
            </div>

            {/* Two Columns: Pickup & Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-300 mb-1.5 block">Pickup City</label>
                <input 
                  type="text" 
                  placeholder="e.g. Ahmedabad, Airport" 
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 focus:border-amber-400 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 mb-1.5 block">Destination / Tour</label>
                <input 
                  type="text" 
                  placeholder="e.g. Somnath, Udaipur" 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 focus:border-amber-400 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="text-xs font-bold text-slate-300 mb-1.5 block">Special Requests (Optional)</label>
              <textarea 
                rows="2"
                placeholder="Luggage requirements, child seats, specific route preferences..." 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 focus:border-amber-400 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Actions */}
            <div className="mt-2 flex flex-col gap-3">
              <button 
                type="submit" 
                className="btn-shimmer w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-bold text-xs tracking-wide shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 transition-transform hover:scale-[1.01]"
              >
                <IconMessageCircle size={18} />
                <span>Send Booking Request on WhatsApp</span>
              </button>

              <div className="text-center text-xs text-slate-400">
                Or call directly: <a href={`tel:${COMPANY_INFO.phone}`} className="text-amber-400 font-bold hover:underline">{COMPANY_INFO.phoneDisplay}</a>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
