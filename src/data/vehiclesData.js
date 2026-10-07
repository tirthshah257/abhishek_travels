export const VEHICLE_CATEGORIES = [
  { id: '5-seater', label: '5-Seater Cars' },
  { id: '7-seater', label: '7-Seater SUVs / MUVs' },
  { id: 'tempo', label: 'Force Urbania & Tempo' },
  { id: 'bus', label: 'Luxury Buses & Sleeper' }
];

export const VEHICLES = [
  // 5-Seater (Default Base)
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

  // 7-Seater
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

  // Force Urbania & Tempo
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

  // Buses & Sleeper
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

export const COMPANY_INFO = {
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
