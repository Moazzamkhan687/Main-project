import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Car, 
  MapPin, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  Star, 
  Percent, 
  CreditCard, 
  Coins, 
  PhoneCall, 
  HelpCircle, 
  MessageCircle, 
  Headphones, 
  FileText, 
  Download, 
  UserCheck, 
  X, 
  ArrowLeft,
  Navigation,
  DollarSign,
  User,
  Wrench,
  CheckCircle2
} from 'lucide-react';

const RidesDriversView = ({ onOpenSignUp, onOpenLogin }) => {
  const [activeModal, setActiveModal] = useState(null); // 'book_ride' or 'request_driver'
  const [selectedRideType, setSelectedRideType] = useState('Standard Car');
  const [selectedDriverType, setSelectedDriverType] = useState('Personal Chauffeur');
  const [legalChecked, setLegalChecked] = useState(false);

  // Browser Back Button Management for Modals
  useEffect(() => {
    const handlePopState = () => {
      if (activeModal) {
        setActiveModal(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeModal]);

  const handleOpenModal = (modalType) => {
    window.history.pushState({ modal: modalType }, '');
    setActiveModal(modalType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseModal = () => {
    window.history.back();
    setActiveModal(null);
  };

  return (
    <div className="w-full bg-[#fbf9f5] text-neutral-900 overflow-x-hidden select-none relative">
      
      {/* ========================================================
          1. HERO SECTION
      ======================================================== */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=85" 
            alt="Rides & Drivers"
            className="w-full h-full object-cover object-center brightness-45 contrast-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/65 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md"
          >
            Reliable Rides & <span className="text-[#dfb56b]">Professional Drivers</span>
          </motion.h1>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Book secure rides instantly or hire professional drivers with real-time tracking, transparent pricing, and 24/7 support.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* Book a Ride Button */}
            <button
              type="button"
              onClick={() => handleOpenModal('book_ride')}
              className="px-8 py-3 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#dfb56b] to-[#f4d69a] hover:from-[#ebc37b] hover:to-[#ffe7b6] shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Book a Ride
            </button>

            {/* Request Driver Button */}
            <button
              type="button"
              onClick={() => handleOpenModal('request_driver')}
              className="px-8 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Request Driver
            </button>
          </div>

          <div className="flex items-center gap-2 mt-12">
            <span className="w-6 h-2 rounded-full bg-[#dfb56b]" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
          </div>
        </div>
      </section>

      {/* ========================================================
          2. RIDE SERVICES & FLEET TYPES
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Our Ride <span className="text-[#c59a53]">Fleet & Services</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
            Choose from standard cars, luxury vehicles, motorcycles, or female-driver options.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Standard Car", desc: "Comfortable everyday rides at affordable rates.", icon: "🚗" },
            { title: "Luxury Ride", desc: "Premium cars for business meetings and special events.", icon: "🚘" },
            { title: "Motorcycle", desc: "Quick city commutes bypassing traffic jams.", icon: "🏍️" },
            { title: "Women Safe Ride", desc: "Dedicated rides with verified female drivers.", icon: "🚙" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <span className="text-3xl block">{item.icon}</span>
                <h3 className="text-base font-bold text-neutral-900">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
              <button type="button" onClick={() => handleOpenModal('book_ride')} className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#7a5521] to-[#dfb56b] shadow-sm cursor-pointer">
                Select Ride
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          3. PRICING & COMMISSION
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-y border-amber-100">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Transparent Pricing & <span className="text-[#c59a53]">Commission</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">Lowest platform commission with clear, upfront fare estimates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-[#fbf9f5] rounded-3xl p-7 border border-amber-200/80 shadow-sm space-y-3">
            <Percent size={22} className="text-[#8d6226]" />
            <h3 className="text-base font-bold text-neutral-900">5% Low Commission</h3>
            <p className="text-xs text-gray-500">Drivers keep 95% of their earnings with minimal platform deductions.</p>
          </div>
          <div className="bg-[#fbf9f5] rounded-3xl p-7 border border-amber-200/80 shadow-sm space-y-3">
            <CreditCard size={22} className="text-[#8d6226]" />
            <h3 className="text-base font-bold text-neutral-900">Card & Cash</h3>
            <p className="text-xs text-gray-500">Flexible payment methods for riders with secure digital transactions.</p>
          </div>
          <div className="bg-[#fbf9f5] rounded-3xl p-7 border border-amber-200/80 shadow-sm space-y-3">
            <ShieldCheck size={22} className="text-[#8d6226]" />
            <h3 className="text-base font-bold text-neutral-900">No Hidden Fees</h3>
            <p className="text-xs text-gray-500">Upfront pricing before you book so you never overpay.</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. CREDIT & POINTS SYSTEM
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Credit & <span className="text-[#c59a53]">Points System</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-7 border border-amber-200/80 shadow-sm space-y-3">
            <Coins size={22} className="text-[#8d6226]" />
            <h3 className="text-base font-bold text-neutral-900">Driver Credit Wallet</h3>
            <p className="text-xs text-gray-500">Drivers maintain a small balance in their wallet to receive trip requests.</p>
          </div>
          <div className="bg-white rounded-3xl p-7 border border-amber-200/80 shadow-sm space-y-3">
            <Star size={22} className="text-[#8d6226]" />
            <h3 className="text-base font-bold text-neutral-900">Rider Loyalty Points</h3>
            <p className="text-xs text-gray-500">Earn reward points on every ride and redeem them for discounts or tips.</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. LIVE MAP TRACKING & ZONE COVERAGE
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-amber-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Live Map Tracking & <span className="text-[#c59a53]">Zone Coverage</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Real-time OpenStreetMap tracking with driver location and route planning.</p>
          </div>

          <div className="h-72 rounded-3xl bg-[#f4f2ee] flex items-center justify-center border border-amber-200/80 shadow-inner">
            <span className="text-xs font-bold text-gray-500">🗺️ Live OpenStreetMap GPS Tracking Active</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. REGISTRATION & SAFETY
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Registration & <span className="text-[#c59a53]">Safety Guidelines</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 border border-amber-200/80 shadow-sm space-y-3 text-xs">
          <h5 className="font-bold text-neutral-900 flex items-center gap-2">
            <FileText size={16} className="text-[#7a5521]" /> Legal & Safety Notice
          </h5>
          <p className="text-gray-500 leading-relaxed italic">
            "I confirm I have read and accepted the ALLOGO terms. I understand ALLOGO is only a connecting platform and that any incident or payment outside the app is my responsibility."
          </p>
          <label className="flex items-center gap-2 pt-1 cursor-pointer font-semibold text-gray-700">
            <input 
              type="checkbox" 
              checked={legalChecked} 
              onChange={(e) => setLegalChecked(e.target.checked)} 
              className="w-4 h-4 rounded border-amber-300 accent-[#7a5521]" 
            />
            <span>Required checkbox during registration</span>
          </label>
        </div>
      </section>

      {/* ========================================================
          7. SUPPORT FOOTER
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#fbf9f5]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="bg-[#7a5521] text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-start">
              <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Ride with ALLOGO?</h3>
              <p className="text-xs sm:text-sm text-amber-100">
                Download the app or sign up as a professional driver today.
              </p>
            </div>
            <div className="flex gap-3">
              <button type="button" onClick={() => handleOpenModal('book_ride')} className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#7a5521] bg-white shadow cursor-pointer">
                Book Now
              </button>
              <button type="button" onClick={onOpenSignUp} className="px-6 py-2.5 rounded-xl text-xs font-bold text-white border border-white/40 cursor-pointer">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ========================================================
          MODAL 1: BOOK A RIDE
      ======================================================== */}
      <AnimatePresence>
        {activeModal === 'book_ride' && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden my-8"
            >
              <div className="bg-neutral-900 text-white py-6 px-8 text-center relative border-b border-neutral-800">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 cursor-pointer"
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#dfb56b]">Book Your Ride</h3>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-800 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-xs text-neutral-800">
                <div className="space-y-3">
                  <label className="font-bold text-sm text-neutral-900 block">Select Ride Type</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {['Standard Car', 'Luxury Ride', 'Motorcycle', 'Women Safe'].map((type) => (
                      <div
                        key={type}
                        onClick={() => setSelectedRideType(type)}
                        className={`p-3 rounded-2xl border-2 text-center cursor-pointer font-bold transition-all ${
                          selectedRideType === type ? 'border-[#b68840] bg-amber-50 text-[#8d6226]' : 'border-gray-200 bg-white text-gray-700'
                        }`}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-sm text-neutral-900 block">Pickup & Destination</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Enter pickup location" className="w-full p-3.5 rounded-xl border border-gray-300 outline-none focus:border-[#8d6226]" />
                    <input type="text" placeholder="Enter destination" className="w-full p-3.5 rounded-xl border border-gray-300 outline-none focus:border-[#8d6226]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-sm text-neutral-900 block">Your Budget / Offer Price</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-gray-500">PKR</span>
                    <input type="text" placeholder="Enter your price" className="w-full p-3.5 pl-14 rounded-xl border border-gray-300 outline-none focus:border-[#8d6226]" />
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      alert(`Ride (${selectedRideType}) Requested Successfully! Finding nearby driver...`);
                      handleCloseModal();
                    }}
                    className="px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#7a5521] via-[#8d6226] to-[#dfb56b] shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    Find Driver Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ========================================================
          MODAL 2: REQUEST DRIVER (Dedicated Card)
      ======================================================== */}
      <AnimatePresence>
        {activeModal === 'request_driver' && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden my-8"
            >
              <div className="bg-neutral-900 text-white py-6 px-8 text-center relative border-b border-neutral-800">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 cursor-pointer"
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#dfb56b]">Request Professional Driver</h3>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-800 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto text-xs text-neutral-800">
                <div className="space-y-3">
                  <label className="font-bold text-sm text-neutral-900 block">Select Driver Category</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['Personal Chauffeur', 'Outstation Driver', 'Hourly Driver'].map((cat) => (
                      <div
                        key={cat}
                        onClick={() => setSelectedDriverType(cat)}
                        className={`p-3.5 rounded-2xl border-2 text-center cursor-pointer font-bold transition-all ${
                          selectedDriverType === cat ? 'border-[#b68840] bg-amber-50 text-[#8d6226]' : 'border-gray-200 bg-white text-gray-700'
                        }`}
                      >
                        {cat}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-semibold text-gray-600">Vehicle Transmission</label>
                    <select className="w-full p-3.5 rounded-xl border border-gray-300 bg-white outline-none focus:border-[#8d6226]">
                      <option>Automatic</option>
                      <option>Manual</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-semibold text-gray-600">Duration / Hours</label>
                    <input type="text" placeholder="e.g. 4 Hours / Full Day" className="w-full p-3.5 rounded-xl border border-gray-300 outline-none focus:border-[#8d6226]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-sm text-neutral-900 block">Pickup Location & Destination</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Enter pickup location" className="w-full p-3.5 rounded-xl border border-gray-300 outline-none focus:border-[#8d6226]" />
                    <input type="text" placeholder="Enter destination" className="w-full p-3.5 rounded-xl border border-gray-300 outline-none focus:border-[#8d6226]" />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-semibold">
                  Note: Verified professional drivers will be assigned with background checks and valid licenses.
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      alert(`Professional Driver (${selectedDriverType}) Requested Successfully!`);
                      handleCloseModal();
                    }}
                    className="px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#7a5521] via-[#8d6226] to-[#dfb56b] shadow-md hover:scale-105 transition-all cursor-pointer"
                  >
                    Confirm & Dispatch Driver
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default RidesDriversView;