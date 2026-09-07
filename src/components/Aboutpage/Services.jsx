import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Car, 
  Key, 
  Home, 
  Package, 
  Utensils, 
  Wrench 
} from 'lucide-react';
import BookYourRideModal from '../Homepage/BookYourRideModal';

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } 
  },
};

const servicesData = [
  {
    id: 'vtc',
    icon: Car,
    title: 'VTC Transport',
    desc: 'Book rides with choice of driver gender, vehicle type, and destination',
    btnText: 'Book a Ride →',
    img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    isRideTrigger: true,
  },
  {
    id: 'vehicle',
    icon: Key,
    title: 'Vehicle Rental',
    desc: 'Rent cars and scooters with availability management',
    btnText: 'Rent Now →',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    isRentalTrigger: true,
  },
  {
    id: 'apartment',
    icon: Home,
    title: 'Apartment Rental',
    desc: 'Find and rent apartments with integrated payment',
    btnText: 'Find Apartments →',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
    isApartmentTrigger: true,
  },
  {
    id: 'courier',
    icon: Package,
    title: 'Delivery & Courier',
    desc: 'Send packages with delivery confirmation',
    btnText: 'Send Package →',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    isPackageTrigger: true,
  },
  {
    id: 'food',
    icon: Utensils,
    title: 'Food Delivery',
    desc: 'Order food from local restaurants',
    btnText: 'Order Food →',
    img: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'roadside',
    icon: Wrench,
    title: 'Roadside Assistance',
    desc: 'Get help for vehicle breakdowns',
    btnText: 'Get Help →',
    img: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80',
  },
];

const Services = ({ onOpenRental, onOpenApartment, onOpenPackage }) => {
  const [isRideModalOpen, setIsRideModalOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setIsRideModalOpen(false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openRideModal = () => {
    window.history.pushState({ modal: 'book-ride' }, '', '#book-ride');
    setIsRideModalOpen(true);
  };

  const closeRideModal = () => {
    setIsRideModalOpen(false);
    if (window.location.hash === '#book-ride') {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  return (
    <section id="ourservices-section" className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Our <span className="text-[#c59a53]">Services</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
            Explore our wide range of services with modern, easy-to-use interfaces for every need.
          </p>
        </motion.div>

        {/* 6 Overlay Cards Grid */}
        <motion.div 
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardFadeUp}
                className="relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-sm group border border-gray-100 hover:shadow-xl hover:border-[#c59a53] transition-all duration-300"
              >
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20 group-hover:from-black/95 transition-colors duration-300" />

                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-between text-white z-10">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#7a5521] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                        <Icon size={18} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-wide">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xs text-gray-300 leading-relaxed font-normal max-w-[90%]">
                      {service.desc}
                    </p>
                  </div>

                  {/* Action Pill Button */}
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        if (service.isRideTrigger) openRideModal();
                        if (service.isRentalTrigger && onOpenRental) onOpenRental();
                        if (service.isApartmentTrigger && onOpenApartment) onOpenApartment();
                        if (service.isPackageTrigger && onOpenPackage) onOpenPackage();
                      }}
                      className="px-6 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_4px_14px_rgba(182,136,64,0.35)] hover:shadow-[0_6px_20px_rgba(197,154,83,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                    >
                      {service.btnText}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Book a Ride Modal Popup */}
      <AnimatePresence>
        {isRideModalOpen && (
          <BookYourRideModal onClose={closeRideModal} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;