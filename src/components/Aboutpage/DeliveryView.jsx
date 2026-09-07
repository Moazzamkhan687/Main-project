import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Utensils, 
  Pill, 
  Package, 
  ShoppingBag, 
  MapPin, 
  Navigation, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  CreditCard, 
  Banknote, 
  Send, 
  Car, 
  Truck, 
  Star, 
  Lock, 
  Layers 
} from 'lucide-react';
import BookYourDelivery from './BookYourDelivery';

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } 
  },
};

const serviceDetails = {
  'Food Delivery': {
    icon: Utensils,
    title: 'Food Delivery',
    desc: 'Restaurant meals, groceries, and specialty foods delivered hot, fresh, and insulated.',
    points: ['Live GPS tracking', 'Temperature & thermal packaging', 'Direct restaurant partnerships'],
    img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80',
    eta: '25 min',
    rating: '4.9'
  },
  'Pharmacy Delivery': {
    icon: Pill,
    title: 'Pharmacy Delivery',
    desc: 'Prescription medicines and healthcare essentials sealed and delivered with maximum privacy.',
    points: ['Verified pharmacy dispatch', 'Discreet sealed containers', 'Urgent priority riders'],
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80',
    eta: '30 min',
    rating: '4.95'
  },
  'Package Delivery': {
    icon: Package,
    title: 'Package Delivery',
    desc: 'Urgent parcel shipments, business documents, and express errands tracked at every stage.',
    points: ['Real-time location map', 'Digital OTP handover signature', 'Door-to-door direct transit'],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80',
    eta: '35 min',
    rating: '4.88'
  },
  'Product Delivery': {
    icon: ShoppingBag,
    title: 'Product Delivery',
    desc: 'Local marketplace purchases and e-commerce goods scheduled at your preferred time.',
    points: ['Flexible delivery windows', 'Fragile item handling', 'Bulk volume transport'],
    img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80',
    eta: '45 min',
    rating: '4.85'
  }
};

const DeliveryView = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState('Food Delivery');
  const [activeZone, setActiveZone] = useState('within');
  const [activePayment, setActivePayment] = useState('card');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setIsBookingOpen(false);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openBookingModal = () => {
    window.history.pushState({ modal: 'book-delivery' }, '', '#book-delivery');
    setIsBookingOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingOpen(false);
    if (window.location.hash === '#book-delivery') {
      window.history.replaceState(null, '', window.location.pathname);
    }
  };

  const currentDetail = serviceDetails[activeCategory];
  const DetailIcon = currentDetail.icon;

  return (
    <div className="w-full bg-[#fbf9f5] text-[#111827] overflow-x-hidden relative select-none">
      
      {/* 1. HERO BANNER */}
      <section className="relative w-full h-[75vh] sm:h-[84vh] min-h-[520px] flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=2000&q=85"
            alt="Fast Delivery Courier"
            className="w-full h-full object-cover object-center brightness-70 contrast-95"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/75 pointer-events-none" />

        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="absolute top-6 left-6 z-30 flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full bg-black/70 border border-neutral-700 text-gray-200 hover:text-white hover:border-[#c69a53] hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-md shadow-lg"
          >
            <ArrowLeft size={16} />
            <span>Back to About</span>
          </button>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg">
            <span className="text-white">Fast </span>
            <span className="text-[#c69a53] drop-shadow-[0_2px_14px_rgba(198,154,83,0.4)]">
              Delivery for Food
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-gray-300 font-normal tracking-wide drop-shadow max-w-2xl">
            All-in-one delivery platform for orders, errands, pickups and logistics.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
            <button 
              type="button"
              onClick={openBookingModal}
              className="px-7 sm:px-9 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:shadow-[0_8px_25px_rgba(197,154,83,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Get Started
            </button>
            <button 
              type="button"
              onClick={openBookingModal}
              className="px-7 sm:px-9 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:shadow-[0_8px_25px_rgba(197,154,83,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Order Now
            </button>
          </div>

          <div className="flex items-center gap-2 mt-8">
            <span className="w-7 h-2 bg-gradient-to-r from-[#b68840] to-[#dfb56b] rounded-full shadow" />
            <span className="w-2 h-2 bg-gray-500 rounded-full" />
            <span className="w-2 h-2 bg-gray-500 rounded-full" />
            <span className="w-2 h-2 bg-gray-500 rounded-full" />
            <span className="w-2 h-2 bg-gray-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* 2. OUR SERVICES CARDS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827]">
              Our <span className="text-[#c59a53]">Services</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
        </motion.div>

        <motion.div 
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {/* Card 1 */}
          <motion.div 
            variants={cardFadeUp}
            onClick={() => setActiveCategory('Food Delivery')}
            className={`group rounded-3xl p-7 transition-all duration-300 cursor-pointer ${
              activeCategory === 'Food Delivery'
                ? 'bg-gradient-to-br from-[#9e7638] via-[#bd9149] to-[#785420] text-white shadow-lg -translate-y-2'
                : 'bg-white border border-gray-200 hover:border-[#c59a53] text-gray-900 shadow-sm'
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
              activeCategory === 'Food Delivery' ? 'bg-white/15 text-white' : 'bg-[#faf5ec] text-[#b68840]'
            }`}>
              <Utensils size={26} />
            </div>
            <h3 className="text-xl font-bold mb-2">Food Delivery</h3>
            <p className={`text-xs leading-relaxed ${activeCategory === 'Food Delivery' ? 'text-amber-100' : 'text-gray-500'}`}>
              Restaurant meals, groceries, and specialty foods delivered hot and fresh.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={cardFadeUp}
            onClick={() => setActiveCategory('Pharmacy Delivery')}
            className={`group rounded-3xl p-7 transition-all duration-300 cursor-pointer ${
              activeCategory === 'Pharmacy Delivery'
                ? 'bg-gradient-to-br from-[#9e7638] via-[#bd9149] to-[#785420] text-white shadow-lg -translate-y-2'
                : 'bg-white border border-gray-200 hover:border-[#c59a53] text-gray-900 shadow-sm'
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
              activeCategory === 'Pharmacy Delivery' ? 'bg-white/15 text-white' : 'bg-[#faf5ec] text-[#b68840]'
            }`}>
              <Pill size={26} />
            </div>
            <h3 className="text-xl font-bold mb-2">Pharmacy Delivery</h3>
            <p className={`text-xs leading-relaxed ${activeCategory === 'Pharmacy Delivery' ? 'text-amber-100' : 'text-gray-500'}`}>
              Prescription medicines and healthcare products delivered discreetly.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            variants={cardFadeUp}
            onClick={() => setActiveCategory('Package Delivery')}
            className={`group rounded-3xl p-7 transition-all duration-300 cursor-pointer ${
              activeCategory === 'Package Delivery'
                ? 'bg-gradient-to-br from-[#9e7638] via-[#bd9149] to-[#785420] text-white shadow-lg -translate-y-2'
                : 'bg-white border border-gray-200 hover:border-[#c59a53] text-gray-900 shadow-sm'
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
              activeCategory === 'Package Delivery' ? 'bg-white/15 text-white' : 'bg-[#faf5ec] text-[#b68840]'
            }`}>
              <Package size={26} />
            </div>
            <h3 className="text-xl font-bold mb-2">Package Delivery</h3>
            <p className={`text-xs leading-relaxed ${activeCategory === 'Package Delivery' ? 'text-amber-100' : 'text-gray-500'}`}>
              Parcels, documents, and important shipments with real-time tracking.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            variants={cardFadeUp}
            onClick={() => setActiveCategory('Product Delivery')}
            className={`group rounded-3xl p-7 transition-all duration-300 cursor-pointer ${
              activeCategory === 'Product Delivery'
                ? 'bg-gradient-to-br from-[#9e7638] via-[#bd9149] to-[#785420] text-white shadow-lg -translate-y-2'
                : 'bg-white border border-gray-200 hover:border-[#c59a53] text-gray-900 shadow-sm'
            }`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
              activeCategory === 'Product Delivery' ? 'bg-white/15 text-white' : 'bg-[#faf5ec] text-[#b68840]'
            }`}>
              <ShoppingBag size={26} />
            </div>
            <h3 className="text-xl font-bold mb-2">Product Delivery</h3>
            <p className={`text-xs leading-relaxed ${activeCategory === 'Product Delivery' ? 'text-amber-100' : 'text-gray-500'}`}>
              Retail, e-commerce, and marketplace deliveries with flexible scheduling.
            </p>
          </motion.div>
        </motion.div>

        {/* Switcher Pills */}
        <div className="flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-white border border-gray-200 shadow-sm">
            {['Food Delivery', 'Pharmacy Delivery', 'Package Delivery', 'Product Delivery'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveCategory(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === tab
                    ? 'text-[#9e7638] underline decoration-2 underline-offset-4 bg-amber-50/60'
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC INTERACTIVE SERVICE DETAILS CARD */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8 hover:shadow-[0_14px_40px_rgba(197,154,83,0.15)] hover:border-[#dfb76c] transition-all duration-300"
        >
          <div className="flex-1 w-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#9e7638] to-[#6d4c1b] text-white flex items-center justify-center shadow-sm">
                <DetailIcon size={24} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{currentDetail.title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mb-6">
              {currentDetail.desc}
            </p>
            <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-gray-600">
              {currentDetail.points.map((pt, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#c59a53]" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <button 
              type="button"
              onClick={openBookingModal}
              className="px-8 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Order Now
            </button>
          </div>

          <div className="relative w-full lg:w-1/2 h-64 sm:h-72 rounded-3xl overflow-hidden shadow-inner border border-gray-100 group">
            <img
              src={currentDetail.img}
              alt={currentDetail.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/60 shadow-lg flex items-center justify-between text-xs hover:border-[#dfb76c] transition-colors">
              <div>
                <div className="flex items-center gap-2 font-bold text-gray-900 text-sm">
                  <span>Live Tracking</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] text-emerald-600 font-semibold">Active</span>
                </div>
                <div className="text-gray-500 text-[11px] mt-0.5">Status: Dispatched</div>
              </div>
              <div className="text-center px-2">
                <span className="text-[10px] text-gray-400 uppercase font-semibold block">ETA</span>
                <span className="text-xs sm:text-sm font-extrabold text-[#9e7638]">{currentDetail.eta}</span>
              </div>
              <div className="text-center px-2">
                <span className="text-[10px] text-gray-400 uppercase font-semibold block">Rating</span>
                <span className="text-xs sm:text-sm font-extrabold text-amber-500 flex items-center gap-0.5">
                  {currentDetail.rating} <Star size={12} fill="currentColor" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 4. COMPREHENSIVE ZONE COVERAGE */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827]">
              Comprehensive <span className="text-[#c59a53]">Zone Coverage</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
            Seamless delivery network across all zones with intelligent routing and real-time tracking
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="bg-white rounded-3xl p-6 border border-gray-200/90 shadow-sm hover:border-[#dfb76c] transition-all">
              <h4 className="text-base font-bold text-gray-900 mb-4">Select Zone Type</h4>
              
              <div 
                onClick={() => setActiveZone('within')} 
                className={`rounded-2xl p-4 shadow-sm cursor-pointer mb-3 transition-all ${
                  activeZone === 'within'
                    ? 'bg-gradient-to-r from-[#946e30] via-[#b88c42] to-[#785420] text-white ring-2 ring-[#b88c42]/40'
                    : 'bg-gray-50 text-gray-800 border border-gray-200 hover:border-[#b88c42]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${activeZone === 'within' ? 'bg-white/20 text-white' : 'bg-white text-[#b88c42] shadow-sm'}`}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">Within City</h5>
                      <p className={`text-xs ${activeZone === 'within' ? 'text-amber-100' : 'text-gray-500'}`}>
                        Standard intra-city delivery
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold ${activeZone === 'within' ? 'text-white' : 'text-[#b88c42]'}`}>
                    30-45 mins
                  </span>
                </div>
              </div>

              <div 
                onClick={() => setActiveZone('suburbs')} 
                className={`rounded-2xl p-4 shadow-sm cursor-pointer mb-3 transition-all ${
                  activeZone === 'suburbs'
                    ? 'bg-gradient-to-r from-[#946e30] via-[#b88c42] to-[#785420] text-white ring-2 ring-[#b88c42]/40'
                    : 'bg-gray-50 text-gray-800 border border-gray-200 hover:border-[#b88c42]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${activeZone === 'suburbs' ? 'bg-white/20 text-white' : 'bg-white text-[#b88c42] shadow-sm'}`}>
                      <Navigation size={18} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">Suburban & Outskirts</h5>
                      <p className={`text-xs ${activeZone === 'suburbs' ? 'text-amber-100' : 'text-gray-500'}`}>
                        Extended perimeter express transit
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold ${activeZone === 'suburbs' ? 'text-white' : 'text-[#b88c42]'}`}>
                    45-90 mins
                  </span>
                </div>
              </div>

              <div 
                onClick={() => setActiveZone('intercity')} 
                className={`rounded-2xl p-4 shadow-sm cursor-pointer transition-all ${
                  activeZone === 'intercity'
                    ? 'bg-gradient-to-r from-[#946e30] via-[#b88c42] to-[#785420] text-white ring-2 ring-[#b88c42]/40'
                    : 'bg-gray-50 text-gray-800 border border-gray-200 hover:border-[#b88c42]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${activeZone === 'intercity' ? 'bg-white/20 text-white' : 'bg-white text-[#b88c42] shadow-sm'}`}>
                      <Truck size={18} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm">Inter-City Logistics</h5>
                      <p className={`text-xs ${activeZone === 'intercity' ? 'text-amber-100' : 'text-gray-500'}`}>
                        Bulk freight and cross-region courier
                      </p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold ${activeZone === 'intercity' ? 'text-white' : 'text-[#b88c42]'}`}>
                    Same Day
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/90 shadow-sm hover:border-[#dfb76c] transition-all">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#a17c30]">ZONE METRICS</span>
                  <h4 className="text-lg font-bold text-gray-900 mt-0.5">
                    {activeZone === 'within' && 'Within City Network'}
                    {activeZone === 'suburbs' && 'Suburban Network'}
                    {activeZone === 'intercity' && 'Inter-City Regional Highway'}
                  </h4>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Active Dispatch
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-gray-600 mb-6">
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="text-gray-500">Average Transit Time</span>
                  <span className="font-bold text-gray-900">
                    {activeZone === 'within' ? '25 - 40 mins' : activeZone === 'suburbs' ? '45 - 75 mins' : '2 - 6 hours'}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="text-gray-500">Fleet Availability</span>
                  <span className="font-bold text-emerald-600">High Density (Bikes, Cars & Vans)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="text-gray-500">Tracking Engine</span>
                  <span className="font-bold text-gray-900">Live GPS via OpenStreetMap</span>
                </div>
              </div>

              <button 
                type="button"
                onClick={openBookingModal}
                className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
              >
                Schedule Delivery in This Zone
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. HOW IT WORKS / 4-STEP PROCESS (Layers & CheckCircle2) */}
      <section className="w-full py-20 bg-white border-y border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#c59a53]" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                How Delivery <span className="text-[#c59a53]">Works</span>
              </h2>
              <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
              From automated order placement to verified doorstep handover in 4 simple steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Place Order',
                desc: 'Select your item or specify pickup details and destination point.',
                icon: Layers
              },
              {
                step: '02',
                title: 'Rider Match',
                desc: 'Smart algorithms dispatch the closest verified courier instantly.',
                icon: Navigation
              },
              {
                step: '03',
                title: 'Live Tracking',
                desc: 'Follow the courier route and estimated arrival in real-time.',
                icon: MapPin
              },
              {
                step: '04',
                title: 'Safe Handover',
                desc: 'Receive your sealed package with digital confirmation.',
                icon: CheckCircle2
              }
            ].map((st, idx) => {
              const IconComp = st.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#fcfaf7] p-7 rounded-3xl border border-gray-200/80 shadow-sm hover:border-[#c59a53] hover:-translate-y-1.5 transition-all text-center flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#faf3e7] text-[#b68840] flex items-center justify-center mb-4 font-extrabold shadow-sm">
                    <IconComp size={24} />
                  </div>
                  <span className="text-[10px] font-extrabold text-[#b68840] uppercase tracking-wider mb-1">
                    STEP {st.step}
                  </span>
                  <h4 className="text-base font-bold text-gray-900 mb-2">{st.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SECURE PAYMENTS & GUARANTEE (CreditCard, Banknote, ShieldCheck, Lock) */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#0f172a] text-white rounded-3xl p-8 sm:p-14 shadow-xl border border-neutral-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#dfb56b] flex items-center gap-2">
                <ShieldCheck size={16} /> Verified Security Standards
              </span>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Flexible payments with <span className="text-[#c59a53]">end-to-end protection</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed font-normal">
                Choose to pay securely via digital credit/debit cards or select cash on delivery with complete transparent tracking.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div 
                  onClick={() => setActivePayment('card')}
                  className={`p-4 rounded-2xl border flex items-center gap-3.5 cursor-pointer transition-all ${
                    activePayment === 'card' 
                      ? 'border-[#c59a53] bg-white/10 shadow-md ring-1 ring-[#c59a53]' 
                      : 'border-neutral-700 bg-black/20 hover:border-neutral-500'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#c59a53]/20 text-[#dfb56b] flex items-center justify-center">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Digital Cards</h5>
                    <p className="text-[11px] text-gray-400">Instant cashless checkout</p>
                  </div>
                </div>

                <div 
                  onClick={() => setActivePayment('cash')}
                  className={`p-4 rounded-2xl border flex items-center gap-3.5 cursor-pointer transition-all ${
                    activePayment === 'cash' 
                      ? 'border-[#c59a53] bg-white/10 shadow-md ring-1 ring-[#c59a53]' 
                      : 'border-neutral-700 bg-black/20 hover:border-neutral-500'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#c59a53]/20 text-[#dfb56b] flex items-center justify-center">
                    <Banknote size={20} />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">Cash on Delivery</h5>
                    <p className="text-[11px] text-gray-400">Pay courier on arrival</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-neutral-700/80 space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#c59a53]/20 text-[#dfb56b] flex items-center justify-center mx-auto">
                <Lock size={22} />
              </div>
              <h4 className="text-base font-bold text-white">Encrypted Transactions</h4>
              <p className="text-xs text-gray-300 leading-relaxed font-normal">
                Every transaction and rider contact detail is protected through strict protocols ensuring zero data leakage.
              </p>
              <button 
                type="button"
                onClick={openBookingModal}
                className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                Schedule First Delivery
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOOKING MODAL POPUP */}
      <AnimatePresence>
        {isBookingOpen && (
          <BookYourDelivery onClose={closeBookingModal} />
        )}
      </AnimatePresence>

    </div>
  );
};

export default DeliveryView;