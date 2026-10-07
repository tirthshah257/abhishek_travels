export const DEFAULT_REVIEWS = [
  {
    id: 1,
    name: "Rajesh Patel",
    rating: 5,
    date: "2 days ago",
    trip: "Ahmedabad to Somnath - Dwarka (5 Days)",
    vehicle: "Toyota Innova Crysta",
    text: "Excellent service! The Innova was spotless, smelling fresh, and the chauffeur was extremely professional and courteous. Highly recommend Abhishek Travels for all outstation family tours."
  },
  {
    id: 2,
    name: "Sneha Sharma",
    rating: 5,
    date: "1 week ago",
    trip: "Family Wedding Tour (Ahmedabad to Udaipur)",
    vehicle: "20-Seater Force Urbania (Maharaja)",
    text: "We booked the 20-seater Force Urbania with Maharaja seats for our destination wedding in Udaipur. The comfort was unbelievable! Everyone in the family praised the smooth ride and music system."
  },
  {
    id: 3,
    name: "Amit Desai",
    rating: 5,
    date: "2 weeks ago",
    trip: "Corporate Delegate Airport Transfers",
    vehicle: "Toyota Innova Hycross",
    text: "The best premium car rental service in Ahmedabad! I consistently rely on them for VIP business clients visiting our corporate hub. Prompt timings, neat attire, and billing without any surprises."
  },
  {
    id: 4,
    name: "Vikram Mehta",
    rating: 5,
    date: "3 weeks ago",
    trip: "Ahmedabad to Statue of Unity",
    vehicle: "12-Seater Maharaja Tempo Traveller",
    text: "Outstanding trip to the Statue of Unity! Punctual pickup at 5:30 AM, clean seats, well-functioning AC vents, and very polite driver. Best rates in Ahmedabad."
  },
  {
    id: 5,
    name: "Pooja Trivedi",
    rating: 5,
    date: "1 month ago",
    trip: "Mount Abu Weekend Getaway",
    vehicle: "Maruti Suzuki Dzire",
    text: "Very affordable and safe ride with experienced mountain driver. AC was chilling even in peak noon. 10/10 service!"
  }
];

const STORAGE_KEY = 'abhishek_travels_customer_reviews';

export const getStoredReviews = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Could not read reviews from localStorage:', err);
  }
  return DEFAULT_REVIEWS;
};

export const saveNewReview = (newReview) => {
  try {
    const current = getStoredReviews();
    const updated = [
      {
        id: Date.now(),
        date: "Just now",
        trip: newReview.trip || "Verified Trip",
        ...newReview
      },
      ...current
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.warn('Could not save review to localStorage:', err);
    return DEFAULT_REVIEWS;
  }
};
