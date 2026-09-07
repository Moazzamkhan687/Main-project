import React, { useEffect, useRef, useState } from 'react';
import { 
  Car, 
  Bike, 
  Home, 
  Truck, 
  UtensilsCrossed, 
  Wrench 
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Car,
    titlePrimary: "Smart",
    titleSecondary: "Ride Booking (VTC)",
    description:
      "Choose your driver (male/female), vehicle type, negotiate price, and even order a ride for someone else. Track rides in real-time 3D across Algeria.",
    features: [
      "Driver Selection",
      "Price Negotiation",
      "Order for Someone Else",
      "Live 3D Tracking",
      "7% Commission",
    ],
  },
  {
    id: 2,
    icon: Bike,
    titlePrimary: "",
    titleSecondary: "Vehicle Rentals",
    description:
      "Rent cars, scooters, motorcycles, SUVs, or trucks with card-only payment and temporary numbers for secure communication.",
    features: [
      "Hourly/Daily Booking",
      "Verified Vehicles",
      "Secure Payments",
      "Temporary Numbers",
      "3% Commission",
    ],
  },
  {
    id: 3,
    icon: Home,
    titlePrimary: "",
    titleSecondary: "Apartment Rentals",
    description:
      "Book verified apartments instantly with integrated card payment, ratings, and dispute management for tenants and owners.",
    features: [
      "Verified Listings",
      "Secure Card Payment",
      "Ratings & History",
      "Dispute Management",
      "3% Commission",
    ],
  },
  {
    id: 4,
    icon: Truck,
    titlePrimary: "",
    titleSecondary: "Package Delivery",
    description:
      "Send parcels, products, or pharmacy items with live courier tracking and optional direct assignment of a delivery person.",
    features: [
      "Live Tracking",
      "Direct Assignment",
      "Delivery Confirmation",
      "Secure Handling",
      "5% Commission",
    ],
  },
  {
    id: 5,
    icon: UtensilsCrossed,
    titlePrimary: "",
    titleSecondary: "Food Delivery",
    description:
      "Order from restaurants or groceries with live tracking and instant delivery confirmation.",
    features: [
      "Restaurant & Grocery Network",
      "Live Tracking",
      "Fresh Delivery",
      "Secure Payments",
      "5% Commission",
    ],
  },
  {
    id: 6,
    icon: Wrench,
    titlePrimary: "",
    titleSecondary: "Roadside Assistance",
    description:
      "Request mechanics, towing, battery, tire change, or fuel delivery instantly. 24/7 assistance with nearby technician matching.",
    features: [
      "24/7 Support",
      "Nearby Technicians",
      "Quick Response",
      "Direct Assignment",
      "5% Commission",
    ],
  },
];

// Single Card Component (Bar bar scroll karne par smooth animation)
const ServiceCard = ({ item, index, onSeeMore }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const IconComponent = item.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        transitionDelay: `${(index % 3) * 100}ms`,
      }}
      className={`relative bg-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-700 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-16 scale-95'
      } hover:shadow-[0_16px_40px_rgba(184,140,66,0.18)] hover:-translate-y-2 group`}
    >
      {/* Top Gold Border Accent */}
      <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#b88c42] to-transparent rounded-full" />

      {/* Decorative Corner Circles */}
      <div className="absolute top-6 right-6 w-16 h-16 rounded-full border border-gray-100/80 pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-10 h-10 rounded-full border border-gray-100/60 pointer-events-none" />

      <div>
        {/* Top Icon Badge */}
        <div className="w-12 h-12 rounded-2xl bg-[#67481f] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:brightness-110 transition-all duration-300">
          <IconComponent className="w-6 h-6 text-white stroke-[2]" />
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-3.5">
          {item.titlePrimary && (
            <span className="text-[#111827] mr-1.5">{item.titlePrimary}</span>
          )}
          <span className="text-[#b88c42]">{item.titleSecondary}</span>
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed mb-6">
          {item.description}
        </p>

        {/* Feature List */}
        <ul className="space-y-2 mb-8">
          {item.features.map((feat, i) => (
            <li
              key={i}
              className="flex items-center gap-2.5 text-xs sm:text-[13px] text-gray-700 font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#b88c42] shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <div className="flex justify-end pt-2 relative z-10">
        <button 
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (onSeeMore) onSeeMore(item);
          }}
          className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#6b4c20] via-[#946e30] to-[#b88c42] hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md cursor-pointer"
        >
          See more
        </button>
      </div>
    </div>
  );
};

// Component header me onSeeMore prop le rahe hain
const Ourservices = ({ onSeeMore }) => {
  return (
    <section id="ourservices-section" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#fafaf9] scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Our <span className="text-[#c59a53]">Services</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Ride, rent, deliver, and repair all in Algeria's first multi-service super app with live 3D tracking, verified providers, and secure payments.
          </p>
        </div>

        {/* Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((item, index) => (
            <ServiceCard 
              key={item.id} 
              item={item} 
              index={index} 
              onSeeMore={onSeeMore} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourservices;