import React, { useState, useEffect } from 'react';

const heroSlides = [
  // Slide 1: Exact screenshot matching
  {
    id: 1,
    whiteTitle: "24/7",
    goldTitle: "Roadside Assistance",
    subtitle: "Mechanic Towing Battery Fuel 5% Commission",
    description:
      "Request emergency help instantly mechanic, towing, battery service, tires, fuel delivery. Live tracking with in-app chat/call or WhatsApp communication.",
    buttonText: "Explore Now",
    bgImage:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1920&q=80",
  },
  // Slide 2: Luxury Chauffeur & VIP Rides (New)
  {
    id: 2,
    whiteTitle: "VIP",
    goldTitle: "Executive Chauffeur",
    subtitle: "Premium Fleet Luxury Sedans Professional Chauffeurs",
    description:
      "Experience seamless business travel and airport transfers with vetted private drivers, onboard WiFi, and complete privacy across major cities.",
    buttonText: "Book Luxury Ride",
    bgImage:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1920&q=80",
  },
  // Slide 3: Smart Heavy Haul & Moving Logistics (New)
  {
    id: 3,
    whiteTitle: "Smart",
    goldTitle: "Freight & Heavy Cargo",
    subtitle: "Citywide Moving Flatbed Trucks Verified Cargo Handlers",
    description:
      "Book commercial trucks and residential relocations with insured transport, real-time route optimization, and digital load tracking.",
    buttonText: "Request Cargo Truck",
    bgImage:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80",
  },
  // Slide 4: Mobile Car Spa & Detailing (New)
  {
    id: 4,
    whiteTitle: "Doorstep",
    goldTitle: "Auto Detailing & Spa",
    subtitle: "Eco Steam Cleaning Ceramic Polish Certified Detailers",
    description:
      "Professional automotive care brought directly to your home or office. Complete interior sanitization and exterior hydrophobic protection.",
    buttonText: "Schedule Spa",
    bgImage:
      "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1920&q=80",
  },
  // Slide 5: Autonomous Fleet & Smart Mobility (New)
  {
    id: 5,
    whiteTitle: "Eco",
    goldTitle: "Green EV Fleet",
    subtitle: "100% Electric Zero Emission Smart City Mobility",
    description:
      "Sustainable urban commute with rapid charging stations, emission-free electric vehicles, and pocket-friendly hourly green rates.",
    buttonText: "Go Electric",
    bgImage:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1920&q=80",
  },
];

const Heroo = ({ onExplore }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Smooth auto slide shift
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const current = heroSlides[currentIndex];

  const handleButtonClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof onExplore === 'function') {
      onExplore();
    }
  };

  return (
    <section className="relative w-full h-[85vh] sm:h-[90vh] min-h-[560px] flex items-center justify-center overflow-hidden bg-black select-none">
      {/* Background Images with Crossfade & Cinematic Slow Zoom */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentIndex === idx ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <img
            src={slide.bgImage}
            alt={slide.goldTitle}
            className={`w-full h-full object-cover object-center transform transition-transform duration-[6000ms] ease-out ${
              currentIndex === idx ? 'scale-110' : 'scale-100'
            }`}
          />
        </div>
      ))}

      {/* Cinematic Dark Moody Overlays */}
      <div className="absolute inset-0 bg-black/65 pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/75 pointer-events-none z-10" />

      {/* Center Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Animated Main Heading */}
        <h1
          key={`title-${currentIndex}`}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md transition-all duration-700"
        >
          <span className="text-white">{current.whiteTitle} </span>
          <span className="text-[#c69a53] drop-shadow-[0_2px_12px_rgba(198,154,83,0.35)]">
            {current.goldTitle}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          key={`sub-${currentIndex}`}
          className="mt-3 sm:mt-4 text-sm sm:text-lg md:text-xl font-medium text-gray-200 tracking-wide drop-shadow transition-all duration-700"
        >
          {current.subtitle}
        </p>

        {/* Description */}
        <p
          key={`desc-${currentIndex}`}
          className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed font-normal drop-shadow transition-all duration-700"
        >
          {current.description}
        </p>

        {/* Explore Button (High Z-Index & Click Enabled) */}
        <div className="mt-7 sm:mt-8 relative z-30 pointer-events-auto">
          <button 
            type="button"
            onClick={handleButtonClick}
            className="px-7 sm:px-9 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            {current.buttonText}
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center gap-2 mt-8 sm:mt-10 relative z-30">
          {heroSlides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Slide ${dotIdx + 1}`}
              className={`h-2 transition-all duration-500 rounded-full cursor-pointer ${
                currentIndex === dotIdx
                  ? 'w-7 bg-gradient-to-r from-[#b68840] to-[#dfb56b] shadow-[0_0_8px_#dfb56b]'
                  : 'w-2 bg-gray-500/70 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Heroo;