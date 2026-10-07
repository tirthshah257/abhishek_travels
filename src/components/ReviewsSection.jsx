import React, { useState } from 'react';
import { getStoredReviews, saveNewReview } from '../data/reviewsData';
import { IconStar, IconMapPin, IconShield, IconSparkles, IconCheck, IconAward } from './ui/Icons';
import { FloatingPill, ThreeDCard } from './ui/ThreeDComponents';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState(getStoredReviews);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('5');
  const [trip, setTrip] = useState('');
  const [text, setText] = useState('');
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newReview = {
      name: name.trim(),
      rating: parseInt(rating, 10),
      trip: trip.trim() || 'Verified Journey',
      text: text.trim()
    };

    const updated = saveNewReview(newReview);
    setReviews(updated);
    setName('');
    setText('');
    setTrip('');
    setRating('5');
    setShowSuccessToast(true);

    setTimeout(() => {
      setShowSuccessToast(false);
    }, 4000);
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, i) => (
      <IconStar 
        key={i} 
        size={14} 
        className={i < count ? 'text-amber-400' : 'text-zinc-700'} 
        fill={i < count ? 'currentColor' : 'none'} 
      />
    ));
  };

  return (
    <section className="py-20 md:py-28 relative" id="reviews">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-3">
            <FloatingPill variant="gold" className="px-3.5 py-1 text-xs">
              <IconSparkles size={12} className="text-amber-300" />
              <span>Real Traveler Feedback</span>
            </FloatingPill>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            What Travelers Say About Abhishek Travels
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            Real feedback from families, corporate travelers, and pilgrims who explored India with us.
          </p>
        </div>

        {/* 3D Overview Metrics Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/85 border border-amber-500/20 backdrop-blur-xl shadow-2xl mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="text-center md:text-left">
              <span className="text-5xl font-black text-amber-400 tracking-tight">4.9</span>
              <div className="flex items-center justify-center md:justify-start gap-1 my-1">
                {renderStars(5)}
              </div>
              <span className="text-xs text-zinc-400">Based on 1,450+ verified trip ratings</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-zinc-200">
              <IconShield size={14} className="text-emerald-400" />
              <span>100% Verified Trips</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-zinc-200">
              <IconAward size={14} className="text-amber-400" />
              <span>98% 5-Star Reviews</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-zinc-200">
              <IconCheck size={14} className="text-amber-300" />
              <span>99.4% On-Time Pickups</span>
            </div>
          </div>
        </div>

        {/* Layout Grid: Form + Cards Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form Column */}
          <div className="lg:col-span-5">
            <ThreeDCard className="p-7 sticky top-28" interactive={false}>
              <h3 className="text-xl font-bold text-white mb-1">
                Share Your Experience
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Traveled with us recently? We'd love to hear how your journey went!
              </p>

              {showSuccessToast && (
                <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-6 flex items-center gap-2 animate-in fade-in duration-300">
                  <IconCheck size={16} className="text-emerald-400" />
                  <span>Thank you! Your review has been published.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                <div>
                  <label className="text-xs font-bold text-zinc-300 mb-1.5 block">Your Full Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Priyank Trivedi" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/90 border border-white/10 focus:border-amber-400 text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-zinc-300 mb-1.5 block">Rating</label>
                    <select 
                      value={rating} 
                      onChange={(e) => setRating(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-zinc-950/90 border border-white/10 focus:border-amber-400 text-xs text-white focus:outline-none cursor-pointer"
                    >
                      <option value="5">5 ★ Exceptional</option>
                      <option value="4">4 ★ Very Good</option>
                      <option value="3">3 ★ Good</option>
                      <option value="2">2 ★ Average</option>
                      <option value="1">1 ★ Poor</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-zinc-300 mb-1.5 block">Route / Trip</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Ahmedabad to Diu" 
                      value={trip}
                      onChange={(e) => setTrip(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/90 border border-white/10 focus:border-amber-400 text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-zinc-300 mb-1.5 block">Your Feedback *</label>
                  <textarea 
                    required
                    rows="4" 
                    placeholder="How was the vehicle condition, AC cooling, driver behavior, and trip punctuality?"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950/90 border border-white/10 focus:border-amber-400 text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-shimmer mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-zinc-950 font-black text-xs tracking-wide shadow-lg shadow-amber-500/30 transition-transform hover:scale-[1.01]"
                >
                  Post Review Now
                </button>
              </form>
            </ThreeDCard>
          </div>

          {/* Testimonials List Column */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Recent Customer Feedback</h3>
              <span className="text-xs text-zinc-400 font-semibold">{reviews.length} reviews</span>
            </div>

            <div className="flex flex-col gap-4 max-h-[720px] overflow-y-auto pr-2 scrollbar-none">
              {reviews.map((rev) => (
                <div 
                  key={rev.id} 
                  className="p-5 rounded-2xl bg-gradient-to-b from-zinc-900/90 to-zinc-950/95 border border-white/10 hover:border-amber-500/30 transition-all text-left shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-zinc-950 font-black text-sm shadow-md">
                        {rev.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-white">{rev.name}</h4>
                        <span className="text-[10px] text-zinc-400">{rev.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5">
                      {renderStars(rev.rating)}
                    </div>
                  </div>

                  {rev.trip && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-[10px] font-semibold text-amber-300 mb-2.5">
                      <IconMapPin size={10} />
                      <span>{rev.trip}</span>
                    </div>
                  )}

                  <p className="text-xs text-zinc-300 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
