import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Car, 
  CreditCard, 
  Ban, 
  PhoneCall, 
  Laptop, 
  ShieldAlert, 
  FileCheck, 
  CheckCircle2, 
  Map, 
  Navigation, 
  Info, 
  Calendar, 
  MessageSquare, 
  Star, 
  Lock, 
  Coins, 
  ArrowRight,
  X,
  ArrowLeft,
  Home,
  DollarSign,
  User,
  Mail,
  Phone
} from 'lucide-react';

const VehicleRentalView = ({ onOpenSignUp, onOpenLogin }) => {
  const [activeModal, setActiveModal] = useState(null); // 'rent_form'

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
          1. HERO SECTION (Screenshot 1)
      ======================================================== */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center bg-black overflow-hidden">
        <motion.div 
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85" 
            alt="Rentals Cars & Scooters"
            className="w-full h-full object-cover object-center brightness-45 contrast-110"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/65 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md"
          >
            Rentals <span className="text-[#dfb56b]">Cars & Scooters</span>
          </motion.h1>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find vehicles nearby, book for hours or days...
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handleOpenModal('rent_form')}
              className="px-8 py-3 rounded-full text-xs sm:text-sm font-bold text-neutral-900 bg-gradient-to-r from-[#dfb56b] to-[#f4d69a] hover:from-[#ebc37b] hover:to-[#ffe7b6] shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Rent a vehicle
            </button>

            <button
              type="button"
              onClick={() => handleOpenModal('rent_form')}
              className="px-8 py-3 rounded-full text-xs sm:text-sm font-bold text-neutral-900 bg-gradient-to-r from-[#dfb56b] to-[#f4d69a] hover:from-[#ebc37b] hover:to-[#ffe7b6] shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Rent Now
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. PAYMENTS REQUIREMENTS (Screenshot 2)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Payments <span className="text-[#c59a53]">Requirements</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500">Secure payment process for all vehicle rentals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-8 border border-amber-200/80 shadow-sm text-center flex flex-col items-center space-y-4">
            <CreditCard size={28} className="text-[#8d6226]" />
            <h3 className="text-lg font-bold text-neutral-900">Card Only</h3>
            <p className="text-xs text-gray-500">Payment is by card ONLY for all vehicle rentals. Customer must present a valid card under their own name.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-amber-200/80 shadow-sm text-center flex flex-col items-center space-y-4">
            <Ban size={28} className="text-[#8d6226]" />
            <h3 className="text-lg font-bold text-neutral-900">No Cash</h3>
            <p className="text-xs text-gray-500">No cash option allowed. Cash deposits or cash payments are strictly not accepted.</p>
          </div>
          <div className="bg-white rounded-3xl p-8 border border-amber-200/80 shadow-sm text-center flex flex-col items-center space-y-4">
            <PhoneCall size={28} className="text-[#8d6226]" />
            <h3 className="text-lg font-bold text-neutral-900">After Payment</h3>
            <p className="text-xs text-gray-500">Temporary number generated only after payment completion and confirmation details appear automatically.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="px-6 py-3 rounded-xl bg-[#7a5521] text-white font-bold text-xs shadow-lg">
            All requirements must be completed before service activation
          </div>
        </div>
      </section>

      {/* ========================================================
          3. COMMISSION & PRIVACY (Screenshot 3)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-y border-amber-100">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Commission & <span className="text-[#c59a53]">Privacy</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">Automated systems ensuring transparency and user privacy</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-[#fbf9f5] rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-3">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-[#7a5521] text-[10px] font-bold">MANDATORY BUSINESS RULE</span>
            <h3 className="text-xl font-extrabold text-neutral-900">3% Commission</h3>
            <p className="text-xs text-gray-600">ALLOGO takes 3% commission on every vehicle rental booking automatically deducted from each transaction.</p>
          </div>
          <div className="bg-[#fbf9f5] rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-3">
            <span className="px-3 py-1 rounded-full bg-amber-100 text-[#7a5521] text-[10px] font-bold">PRIVACY PROTECTION</span>
            <h3 className="text-xl font-extrabold text-neutral-900">Temporary Number</h3>
            <p className="text-xs text-gray-600">Generated automatically after successful payment. Real phone numbers of user + provider are NEVER shown.</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. PROVIDER REQUIREMENTS (Screenshot 4)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Provider <span className="text-[#c59a53]">Requirements</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">Complete these mandatory steps to become an ALLOGO provider</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-7 border border-amber-200/80 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-neutral-900">Add Card</h3>
            <p className="text-xs text-gray-500">A valid payment card is required to unlock provider access.</p>
          </div>
          <div className="bg-white rounded-3xl p-7 border border-amber-200/80 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-neutral-900">Upload Documents</h3>
            <p className="text-xs text-gray-500">Upload license, vehicle registration papers and clear photos.</p>
          </div>
          <div className="bg-white rounded-3xl p-7 border border-amber-200/80 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-neutral-900">Manual Validation</h3>
            <p className="text-xs text-gray-500">ALLOGO must approve your account before you appear on the map.</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. MAP REQUIREMENTS (Screenshot 5)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-amber-100">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Map <span className="text-[#c59a53]">Requirements</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">Interactive mapping with real-time provider locations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#fbf9f5] rounded-2xl p-5 border border-amber-200/80 shadow-sm">
            <h5 className="text-sm font-bold text-neutral-900">OpenStreetMap Required</h5>
            <p className="text-xs text-gray-500 mt-1">Vehicle pickup locations must use OpenStreetMap (Free & Open Source).</p>
          </div>
          <div className="bg-[#fbf9f5] rounded-2xl p-5 border border-amber-200/80 shadow-sm">
            <h5 className="text-sm font-bold text-neutral-900">Provider Visibility</h5>
            <p className="text-xs text-gray-500 mt-1">Providers appear only after successful validation and manual approval.</p>
          </div>
          <div className="bg-[#fbf9f5] rounded-2xl p-5 border border-amber-200/80 shadow-sm">
            <h5 className="text-sm font-bold text-neutral-900">Vehicle Information</h5>
            <p className="text-xs text-gray-500 mt-1">Pins show provider details, name, type, rating, and availability status.</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. VEHICLE REQUIREMENTS (Screenshot 6)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Vehicle <span className="text-[#c59a53]">Requirements</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">Complete these steps to book your vehicle and start the rental process</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-5 border border-amber-200/80 shadow-sm space-y-2">
            <h4 className="text-sm font-bold">1. Select Vehicle Type</h4>
            <p className="text-xs text-gray-500">Cars, scooters, motorcycles, SUVs, trucks, or bikes.</p>
          </div>
          <div className="bg-white rounded-3xl p-5 border border-amber-200/80 shadow-sm space-y-2">
            <h4 className="text-sm font-bold">2. Choose Rental Dates</h4>
            <p className="text-xs text-gray-500">Pick your start date & end date for the rental.</p>
          </div>
          <div className="bg-white rounded-3xl p-5 border border-amber-200/80 shadow-sm space-y-2">
            <h4 className="text-sm font-bold">3. Select Pickup Location</h4>
            <p className="text-xs text-gray-500">Choose the location on the map for vehicle pickup.</p>
          </div>
          <div className="bg-white rounded-3xl p-5 border border-amber-200/80 shadow-sm space-y-2">
            <h4 className="text-sm font-bold">4. Pay by Card</h4>
            <p className="text-xs text-gray-500">User must pay by card to confirm booking.</p>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. COMMUNICATION & SERVICES (Screenshot 7)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-amber-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Communication & <span className="text-[#c59a53]">Services</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">A premium communication system ensuring privacy, transparency, and trust</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#fbf9f5] rounded-3xl p-6 border border-amber-200/80 space-y-3">
              <h4 className="text-base font-bold">Secure Communication</h4>
              <p className="text-xs text-gray-500">In-app chat, in-app call, WhatsApp integration, and temporary numbers only.</p>
            </div>
            <div className="bg-[#fbf9f5] rounded-3xl p-6 border border-amber-200/80 space-y-3">
              <h4 className="text-base font-bold">History & Ratings</h4>
              <p className="text-xs text-gray-500">User & provider rental history with a two-way rating system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. SYSTEMS REQUIREMENTS (Screenshot 8)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Systems <span className="text-[#c59a53]">Requirements</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">Complete framework for approval, legal compliance, and payment processing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl border border-amber-200/80 p-6 space-y-2">
            <h4 className="text-base font-extrabold text-[#7a5521]">Validation Requirements</h4>
            <p className="text-xs text-gray-500">Admin system to approve or reject provider listings.</p>
          </div>
          <div className="bg-white rounded-3xl border border-amber-200/80 p-6 space-y-2">
            <h4 className="text-base font-extrabold text-[#7a5521]">Legal Requirement</h4>
            <p className="text-xs text-gray-500">Mandatory checkbox during registration accepting terms.</p>
          </div>
          <div className="bg-white rounded-3xl border border-amber-200/80 p-6 space-y-2">
            <h4 className="text-base font-extrabold text-[#7a5521]">Credits & Points System</h4>
            <p className="text-xs text-gray-500">Provider credit wallet and user points system for discounts.</p>
          </div>
        </div>
      </section>


      {/* ========================================================
          MODAL: RENT A VEHICLE / BOOKING FORM
      ======================================================== */}
      <AnimatePresence>
        {activeModal && (
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
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#dfb56b]">Book Vehicle Rental</h3>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-800 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto text-xs text-neutral-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1"><label className="font-semibold text-gray-600">Full Name</label><input type="text" placeholder="Enter your name" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                  <div className="space-y-1"><label className="font-semibold text-gray-600">Phone Number</label><input type="text" placeholder="Enter phone number" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1"><label className="font-semibold text-gray-600">Vehicle Type</label><select className="w-full p-3 rounded-xl border border-amber-200 bg-white outline-none"><option>Car</option><option>Scooter</option><option>SUV</option><option>Motorcycle</option></select></div>
                  <div className="space-y-1"><label className="font-semibold text-gray-600">Rental Duration</label><input type="text" placeholder="e.g. 2 Days / 5 Hours" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                </div>

                <div className="space-y-1"><label className="font-semibold text-gray-600">Pickup Location</label><input type="text" placeholder="Enter pickup location" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-[11px] font-semibold">
                  Note: Payment is strictly by Card Only. No cash option available.
                </div>

                <div className="pt-4 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      alert("Vehicle Booking Confirmed Successfully!");
                      handleCloseModal();
                    }}
                    className="px-8 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#7a5521] via-[#8d6226] to-[#dfb56b] shadow-md cursor-pointer"
                  >
                    Confirm & Pay by Card
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

export default VehicleRentalView;