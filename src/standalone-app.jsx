// Standalone bundle for zero-install direct browser viewing with Tailwind CSS & Lucide Icons
(function() {
  const { useState, useEffect, useMemo } = React;

  // --- Lucide-style SVG Icons ---
  const IconShield = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );

  const IconSparkles = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
      <path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
    </svg>
  );

  const IconZap = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );

  const IconTag = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );

  const IconMapPin = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );

  const IconCrown = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  );

  const IconPhone = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const IconMessageCircle = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );

  const IconUsers = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );

  const IconCar = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.2 2 11.6 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );

  const IconStar = ({ size = 20, className = '', fill = 'currentColor' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  const IconCheck = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const IconClock = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );

  const IconSearch = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );

  const IconX = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );

  const IconArrowRight = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );

  const IconChevronDown = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );

  const IconAward = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );

  const IconBuilding = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
    </svg>
  );

  // --- 3D UI Primitives ---
  const ThreeDIconTile = ({ icon, variant = 'blue', size = 'md', className = '' }) => {
    const variantStyles = {
      blue: 'from-blue-600/40 via-blue-500/20 to-indigo-600/30 border-blue-400/40 text-blue-400 shadow-[0_8px_20px_-6px_rgba(37,99,235,0.5)]',
      emerald: 'from-emerald-600/40 via-teal-500/20 to-green-600/30 border-emerald-400/40 text-emerald-400 shadow-[0_8px_20px_-6px_rgba(16,185,129,0.5)]',
      amber: 'from-amber-600/40 via-yellow-500/20 to-orange-600/30 border-amber-400/40 text-amber-400 shadow-[0_8px_20px_-6px_rgba(245,158,11,0.5)]',
      purple: 'from-purple-600/40 via-indigo-500/20 to-pink-600/30 border-purple-400/40 text-purple-400 shadow-[0_8px_20px_-6px_rgba(168,85,247,0.5)]',
      cyan: 'from-cyan-600/40 via-sky-500/20 to-blue-600/30 border-cyan-400/40 text-cyan-400 shadow-[0_8px_20px_-6px_rgba(6,182,212,0.5)]',
      gold: 'from-amber-500/50 via-yellow-400/30 to-amber-600/40 border-yellow-300/60 text-yellow-300 shadow-[0_8px_24px_-6px_rgba(234,179,8,0.6)]'
    };
    const sizeStyles = {
      sm: 'w-10 h-10 rounded-xl text-lg',
      md: 'w-14 h-14 rounded-2xl text-2xl',
      lg: 'w-18 h-18 rounded-3xl text-3xl'
    };

    return (
      <div className={`relative group/icon inline-flex items-center justify-center bg-gradient-to-br ${variantStyles[variant] || variantStyles.blue} ${sizeStyles[size] || sizeStyles.md} border backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-2xl ${className}`}>
        <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-white/30 to-transparent rounded-t-[inherit] pointer-events-none" />
        <div className="relative z-10 flex items-center justify-center transition-transform duration-300 group-hover/icon:scale-110">
          {icon}
        </div>
      </div>
    );
  };

  const FloatingPill = ({ children, className = '', variant = 'blue' }) => {
    const pillVariants = {
      blue: 'bg-blue-500/15 border-blue-400/30 text-blue-300 shadow-[0_4px_16px_-4px_rgba(59,130,246,0.3)]',
      emerald: 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300 shadow-[0_4px_16px_-4px_rgba(16,185,129,0.3)]',
      amber: 'bg-amber-500/15 border-amber-400/30 text-amber-300 shadow-[0_4px_16px_-4px_rgba(245,158,11,0.3)]',
      purple: 'bg-purple-500/15 border-purple-400/30 text-purple-300 shadow-[0_4px_16px_-4px_rgba(168,85,247,0.3)]',
      cyan: 'bg-cyan-500/15 border-cyan-400/30 text-cyan-300 shadow-[0_4px_16px_-4px_rgba(6,182,212,0.3)]'
    };

    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide border backdrop-blur-md transition-all duration-300 ${pillVariants[variant] || pillVariants.blue} ${className}`}>
        {children}
      </span>
    );
  };

  // --- Data Constants ---
  const COMPANY_INFO = {
    name: 'Abhishek Travels',
    tagline: 'Premium Car Rental & Chauffeur Services Across India',
    phone: '+919825045916',
    phoneDisplay: '+91 98250 45916',
    whatsappNumber: '919825045916',
    location: 'Ahmedabad, Gujarat, India',
    officeAddress: 'Abhishek Travels, Near SG Highway, Ahmedabad, Gujarat - 380054',
    email: 'booking@abhishektravels.in',
    hours: '24/7 Available (365 Days a Year)',
    experienceYears: '15+',
    tripsCompleted: '50,000+',
    fleetSize: '75+ Vehicles',
    happyClients: '99%'
  };

  const VEHICLE_CATEGORIES = [
    { id: '5-seater', label: '5-Seater Cars' },
    { id: '7-seater', label: '7-Seater SUVs / MUVs' },
    { id: 'tempo', label: 'Force Urbania & Tempo' },
    { id: 'bus', label: 'Luxury Buses & Sleeper' }
  ];

  const VEHICLES = [
    {
      id: 'dzire',
      name: 'Maruti Suzuki Dzire',
      category: '5-seater',
      categoryLabel: '5-Seater Sedan',
      capacity: '4 + 1 Passengers',
      image: 'images/dzire.png',
      badge: 'Most Popular Sedan',
      description: 'Exceptional fuel economy, plush comfortable ride, and ample boot space. Perfect for city tours, corporate meetings, and outstation trips.',
      specs: ['Airbags', 'Chilled AC', 'Bluetooth Audio', 'Large Boot Space', 'Clean Interiors']
    },
    {
      id: 'aura',
      name: 'Hyundai Aura',
      category: '5-seater',
      categoryLabel: '5-Seater Sedan',
      capacity: '4 + 1 Passengers',
      image: 'images/aura.png',
      badge: 'Executive Sedan',
      description: 'Modern styling with refined petrol engine, silent cabin, and smooth suspension for long highway cruising and airport pickups.',
      specs: ['Dual Airbags', 'Automatic Climate Control', 'USB Fast Charging', 'Plush Seats']
    },
    {
      id: 'amaze',
      name: 'Honda Amaze',
      category: '5-seater',
      categoryLabel: '5-Seater Sedan',
      capacity: '4 + 1 Passengers',
      image: 'images/amaze.png',
      badge: 'Spacious & Smooth',
      description: 'Premium Honda engineering featuring unmatched rear legroom, class-leading 420-liter trunk capacity, and whisper-quiet suspension.',
      specs: ['Airbags & ABS', 'Rear AC Vents', 'Touchscreen Infotainment', 'Large Trunk']
    },
    {
      id: 'swift',
      name: 'Maruti Suzuki Swift',
      category: '5-seater',
      categoryLabel: '5-Seater Hatchback',
      capacity: '4 + 1 Passengers',
      image: 'images/swift.png',
      badge: 'Economy Choice',
      description: 'Sporty and compact hatchback designed for nimble city maneuvering, efficient airport transfers, and affordable budget travel.',
      specs: ['Dual Airbags', 'Powerful AC', 'Music System', 'Compact & Nimble']
    },
    {
      id: 'innova-crysta',
      name: 'Toyota Innova Crysta',
      category: '7-seater',
      categoryLabel: '7-Seater Premium MUV',
      capacity: '6/7 + 1 Passengers',
      image: 'images/innova-crysta.png',
      badge: 'King of Highway',
      description: 'The undisputed benchmark for long-distance family travel. Luxurious captain seats, immense boot space, and unstoppable highway comfort.',
      specs: ['Captain Recliners', 'Roof-mounted AC', '7 Airbags & ABS', 'Carrier Available', 'High-Speed Stability']
    },
    {
      id: 'innova-hycross',
      name: 'Toyota Innova Hycross',
      category: '7-seater',
      categoryLabel: '7-Seater Luxury Hybrid',
      capacity: '6/7 + 1 Passengers',
      image: 'images/innova-hycross.png',
      badge: 'Ultra Luxury 2024',
      description: 'Next-generation luxury with ultra-refined hybrid engine, Ottoman recliner seating, panoramic sunroof, and VIP limousine feel.',
      specs: ['Ottoman Lounge Seats', 'Dual-Zone Auto AC', 'Panoramic Sunroof', 'VIP Ambient Lights']
    },
    {
      id: 'ertiga',
      name: 'Maruti Suzuki Ertiga',
      category: '7-seater',
      categoryLabel: '7-Seater Budget MUV',
      capacity: '6 + 1 Passengers',
      image: 'images/ertiga.png',
      badge: 'Best Value 7-Seater',
      description: 'The smart choice for family vacations and group trips. Highly comfortable seating, roof AC vents, and reliable performance.',
      specs: ['Dual AC Vents', 'Reclining 2nd & 3rd Row', 'Luggage Carrier', 'USB Ports']
    },
    {
      id: 'carens',
      name: 'Kia Carens',
      category: '7-seater',
      categoryLabel: '7-Seater Luxury RV',
      capacity: '6/7 + 1 Passengers',
      image: 'images/carens.png',
      badge: 'Modern Hi-Tech',
      description: 'Sophisticated 3-row recreational vehicle with aircraft-style seatback tables, ventilated front seats, and serene ride quality.',
      specs: ['6 Airbags Standard', 'Roof AC Diffusers', 'Bose Audio System', 'One-Touch Tumble Seats']
    },
    {
      id: 'xylo',
      name: 'Mahindra Xylo',
      category: '7-seater',
      categoryLabel: '7-Seater Heavy Duty',
      capacity: '7 + 1 Passengers',
      image: 'images/xylo.png',
      badge: 'Rugged Performer',
      description: 'Generous headroom, massive legroom in all three rows, and solid suspension built to conquer rough roads and pilgrimage routes.',
      specs: ['Surround AC', 'Spacious Theatre Seating', 'High Ground Clearance', 'Rooftop Luggage Carrier']
    },
    {
      id: 'urbania-maharaja',
      name: 'Force Urbania (Maharaja Luxury)',
      category: 'tempo',
      categoryLabel: '20-Seater Maharaja Luxury',
      capacity: '17 to 20 Passengers',
      image: 'images/tempo-20.png',
      badge: 'VIP Presidential Suite',
      description: 'International styling with 1x1 / 2x1 Maharaja plush recliner bucket seats, individual aircraft-style AC vents, panoramic sealed windows, and LED ambient cabin lighting.',
      specs: ['Maharaja 1x1 Recliners', 'Individual AC Vents', 'Ambient RGB Lighting', 'LED TV & Hi-Fi Audio', 'Air Suspension']
    },
    {
      id: 'urbania-standard',
      name: 'Force Urbania (Standard Seating)',
      category: 'tempo',
      categoryLabel: '20-Seater Executive Van',
      capacity: '20 + 1 Passengers',
      image: 'images/tempo-17.png',
      badge: 'Corporate & Wedding Favorite',
      description: 'Next-generation executive van with high headroom, individual reading lights, ergonomic high-back pushback seats, and expansive luggage bay.',
      specs: ['Pushback Seats', 'Dual High-Capacity AC', 'Full Stand-Up Height', 'USB at Every Seat']
    },
    {
      id: 'tempo-12-maharaja',
      name: '12-Seater Maharaja Tempo Traveller',
      category: 'tempo',
      categoryLabel: '12-Seater 1x1 Maharaja',
      capacity: '12 + 1 Passengers',
      image: 'images/tempo-12.png',
      badge: '1x1 Maharaja Recliners',
      description: 'Custom-built luxury traveller with 1x1 wide Maharaja sofa seats, generous walkway, charging sockets on every seat, and premium audio setup.',
      specs: ['1x1 Sofa Recliner Seats', 'Direct & Indirect Mood Lighting', 'High Cooling Dual AC', 'Mic & Audio System']
    },
    {
      id: 'tempo-9',
      name: '9-Seater Luxury Tempo Traveller',
      category: 'tempo',
      categoryLabel: '9-Seater VIP Executive',
      capacity: '9 + 1 Passengers',
      image: 'images/tempo-9.png',
      badge: 'VIP Small Group',
      description: 'Exclusive 9-seater luxury cabin with captain sofa chairs, ample legroom for tall passengers, and smooth highway handling.',
      specs: ['Captain Sofa Seats', 'Powerful AC', 'Smart Android TV', 'Big Luggage Space']
    },
    {
      id: 'tempo-15-17',
      name: '15 / 17 Seater Tempo Traveller',
      category: 'tempo',
      categoryLabel: '17-Seater Group Tourer',
      capacity: '15-17 Passengers',
      image: 'images/tempo-15.png',
      badge: 'Family Tour Specialist',
      description: 'The most popular choice for family pilgrimages to Somnath, Dwarka, Statue of Unity, and Rajasthan tours. Dependable, comfortable, and roomy.',
      specs: ['2x1 Pushback Seats', 'Front & Rear AC', 'Roof Luggage Carrier', 'Music & Video Screen']
    },
    {
      id: 'bus-25',
      name: '25-Seater Mini Luxury Bus',
      category: 'bus',
      categoryLabel: '25-Seater AC Coach',
      capacity: '25 Passengers',
      image: 'images/bus-25.png',
      badge: 'Corporate Events & Tours',
      description: 'Perfect intermediate size bus for corporate day outs, school picnics, and wedding guest transportation with high-deck comfort.',
      specs: ['2x2 High-Back Pushback', 'Chilled Central AC', 'PA Microphone System', 'Air Suspension']
    },
    {
      id: 'bus-35',
      name: '35-Seater Executive Coach',
      category: 'bus',
      categoryLabel: '35-Seater Luxury Bus',
      capacity: '35 Passengers',
      image: 'images/bus-35.png',
      badge: 'Group Travel Specialist',
      description: 'High-floor luxury coach featuring panoramic glass windows, curtains, reclining seats with footrests, and expansive under-floor luggage hold.',
      specs: ['2x2 Luxury Recliners', 'Underbody Luggage Hold', 'LED Entertainment', 'Smooth Air Bellows']
    },
    {
      id: 'bus-45-56',
      name: '45 / 49 / 56 Seater BharatBenz Luxury Bus',
      category: 'bus',
      categoryLabel: '56-Seater Volvo / BharatBenz',
      capacity: '45 to 56 Passengers',
      image: 'images/bus-45.png',
      badge: 'Mega Group Tourer',
      description: 'Full-size luxury touring coach with BharatBenz / Volvo chassis, ultra-smooth air suspension, plush seating, and emergency exits for ultimate safety.',
      specs: ['Air Suspension', 'Central Digital AC', 'Emergency Exit Safety', 'Mobile Charging Ports', 'Microphone System']
    },
    {
      id: 'sleeper-bus',
      name: 'Luxury AC Sleeper Coach (2x1)',
      category: 'bus',
      categoryLabel: '2x1 Luxury Sleeper',
      capacity: '30 Berths (Upper / Lower)',
      image: 'images/bus.png',
      badge: 'Overnight Journey Star',
      description: 'Spacious 2x1 AC sleeper berths with cozy mattresses, privacy curtains, individual charging points, reading lamps, and quiet night cruising.',
      specs: ['2x1 Upper & Lower Berths', 'Individual Charging & Lights', 'Privacy Curtains', 'Air Suspension', 'Luggage Compartment']
    }
  ];

  const DEFAULT_REVIEWS = [
    {
      id: 1,
      name: "Rajesh Patel",
      rating: 5,
      date: "2 days ago",
      trip: "Ahmedabad to Somnath - Dwarka (5 Days)",
      text: "Excellent service! The Innova was spotless, smelling fresh, and the chauffeur was extremely professional and courteous. Highly recommend Abhishek Travels for all outstation family tours."
    },
    {
      id: 2,
      name: "Sneha Sharma",
      rating: 5,
      date: "1 week ago",
      trip: "Family Wedding Tour (Ahmedabad to Udaipur)",
      text: "We booked the 20-seater Force Urbania with Maharaja seats for our destination wedding in Udaipur. The comfort was unbelievable! Everyone in the family praised the smooth ride and music system."
    },
    {
      id: 3,
      name: "Amit Desai",
      rating: 5,
      date: "2 weeks ago",
      trip: "Corporate Delegate Airport Transfers",
      text: "The best premium car rental service in Ahmedabad! I consistently rely on them for VIP business clients visiting our corporate hub. Prompt timings, neat attire, and billing without any surprises."
    },
    {
      id: 4,
      name: "Vikram Mehta",
      rating: 5,
      date: "3 weeks ago",
      trip: "Ahmedabad to Statue of Unity",
      text: "Outstanding trip to the Statue of Unity! Punctual pickup at 5:30 AM, clean seats, well-functioning AC vents, and very polite driver. Best rates in Ahmedabad."
    },
    {
      id: 5,
      name: "Pooja Trivedi",
      rating: 5,
      date: "1 month ago",
      trip: "Mount Abu Weekend Getaway",
      text: "Very affordable and safe ride with experienced mountain driver. AC was chilling even in peak noon. 10/10 service!"
    }
  ];

  const getStoredReviews = () => {
    try {
      const saved = localStorage.getItem('abhishek_travels_customer_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {}
    return DEFAULT_REVIEWS;
  };

  const saveNewReview = (newReview) => {
    try {
      const current = getStoredReviews();
      const updated = [
        { id: Date.now(), date: "Just now", trip: newReview.trip || "Verified Trip", ...newReview },
        ...current
      ];
      localStorage.setItem('abhishek_travels_customer_reviews', JSON.stringify(updated));
      return updated;
    } catch (e) {
      return DEFAULT_REVIEWS;
    }
  };

  // Mount Standalone if loaded directly
  window.ABHISHEK_TRAVELS_DATA = { COMPANY_INFO, VEHICLE_CATEGORIES, VEHICLES, getStoredReviews, saveNewReview };
})();
