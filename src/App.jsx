import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VehiclesSection from './components/VehiclesSection';
import WhyChooseUs from './components/WhyChooseUs';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';
import BookingModal from './components/BookingModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeCategory, setActiveCategory] = useState('5-seater'); // Default base 5-seater
  const [selectedCarId, setSelectedCarId] = useState('dzire'); // Default base 5-seater Maruti Dzire
  const [bookingVehicle, setBookingVehicle] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll spy to highlight active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'vehicles', 'why-us', 'reviews', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenBookingModal = (vehicle = null) => {
    setBookingVehicle(vehicle);
    setIsModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterCategory = (catId, carId = null) => {
    setActiveCategory(catId);
    if (carId) {
      setSelectedCarId(carId);
    }
    handleNavigate('vehicles');
  };

  return (
    <div className="app-root">
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
        onOpenBookingModal={handleOpenBookingModal}
      />

      <main className="app-main-content">
        <Hero 
          onExploreFleet={() => handleNavigate('vehicles')}
          onOpenBookingModal={handleOpenBookingModal}
          onFilterCategory={handleFilterCategory}
          onSelectCar={(catId, carId) => {
            setActiveCategory(catId);
            setSelectedCarId(carId);
            handleNavigate('vehicles');
          }}
        />

        <VehiclesSection 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          selectedCarId={selectedCarId}
          onSelectCar={setSelectedCarId}
          onBookVehicle={handleOpenBookingModal}
        />

        <WhyChooseUs />

        <ReviewsSection />

        <ContactSection 
          onOpenBookingModal={handleOpenBookingModal}
        />
      </main>

      <Footer 
        onNavigate={handleNavigate}
        onFilterCategory={handleFilterCategory}
      />

      <FloatingWidget 
        onOpenBookingModal={handleOpenBookingModal}
      />

      <BookingModal 
        vehicle={bookingVehicle}
        isOpen={isModalOpen}
        onClose={handleCloseBookingModal}
      />
    </div>
  );
}
