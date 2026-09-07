import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Lock, 
  Phone, 
  CheckCircle2, 
  Star, 
  History, 
  Coins, 
  MapPin, 
  Image as ImageIcon, 
  CreditCard, 
  UserCheck, 
  Plus, 
  FileText, 
  ShieldCheck, 
  Calendar, 
  Percent, 
  Wallet, 
  AlertTriangle 
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const ApartmentRentalView = ({ onBack }) => {
  return (
    <div className="w-full min-h-screen bg-[#fbf9f5] text-[#111827] overflow-x-hidden relative select-none">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Screenshot 1) */}
      {/* ========================================================= */}
      <section className="relative w-full h-[75vh] sm:h-[84vh] min-h-[520px] flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85"
            alt="Apartment Exterior"
            className="w-full h-full object-cover object-center brightness-60 contrast-105"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/75 pointer-events-none" />

        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="absolute top-6 left-6 z-30 flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full bg-black/70 border border-neutral-700 text-gray-200 hover:text-white hover:border-[#c69a53] hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-md shadow-lg"
          >
            <ArrowLeft size={16} />
            <span>Back to Services</span>
          </button>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg text-white">
            Apartment <span className="text-[#c69a53]">Rentals</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-gray-300 font-normal tracking-wide drop-shadow max-w-2xl">
            Book verified apartments with secure online payment.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="px-7 sm:px-9 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Find an Apartment
            </button>
            <button className="px-7 sm:px-9 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer">
              List Your Apartment
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 mt-10">
            <span className="w-7 h-2 bg-gradient-to-r from-[#b68840] to-[#dfb56b] rounded-full shadow" />
            <span className="w-2 h-2 bg-gray-500 rounded-full" />
            <span className="w-2 h-2 bg-gray-500 rounded-full" />
            <span className="w-2 h-2 bg-gray-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 2. KEY BENEFITS (Screenshot 2) */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              Key <span className="text-[#c59a53]">Benefits</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm text-center flex flex-col items-center hover:border-[#c59a53] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#7a5521] text-white flex items-center justify-center mb-5 shadow-md">
              <Lock size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Card-only payment</h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">All bookings are securely paid via card only.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm text-center flex flex-col items-center hover:border-[#c59a53] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#7a5521] text-white flex items-center justify-center mb-5 shadow-md">
              <Phone size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Temporary number</h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">A temporary contact number is generated after payment.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm text-center flex flex-col items-center hover:border-[#c59a53] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#7a5521] text-white flex items-center justify-center mb-5 shadow-md">
              <CheckCircle2 size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Verified listings</h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">Documents and photos of apartments are thoroughly verified.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm text-center flex flex-col items-center hover:border-[#c59a53] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#7a5521] text-white flex items-center justify-center mb-5 shadow-md">
              <Star size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Owner & tenant ratings</h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">Rate both owners and tenants after your stay.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm text-center flex flex-col items-center hover:border-[#c59a53] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#7a5521] text-white flex items-center justify-center mb-5 shadow-md">
              <History size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">History & dispute management</h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">Track booking history and manage disputes efficiently.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm text-center flex flex-col items-center hover:border-[#c59a53] hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#7a5521] text-white flex items-center justify-center mb-5 shadow-md">
              <Coins size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Earn & use points</h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">Users can pay part of booking with points; owners may convert points to app credit.</p>
          </motion.div>

        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 3. CLIENT JOURNEY (TENANTS) (Screenshot 3) */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-y border-gray-200/80">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              Client <span className="text-[#c59a53]">Journey (Tenants)</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
        </motion.div>

        {/* Top 3 Cards */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm text-center flex flex-col items-center hover:border-[#c59a53] hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 flex items-center justify-center text-[#c59a53] mb-4">
              <MapPin size={26} />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Search by city, dates, price</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Select your preferred city, dates, and price range for your stay.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm text-center flex flex-col items-center hover:border-[#c59a53] hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 flex items-center justify-center text-[#c59a53] mb-4">
              <ImageIcon size={26} />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">View apartment details</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Check photos, amenities, and location on the map for each apartment.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm text-center flex flex-col items-center hover:border-[#c59a53] hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 flex items-center justify-center text-[#c59a53] mb-4">
              <Lock size={26} />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Book & pay by card only</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Securely book your apartment using card payment.</p>
          </motion.div>
        </motion.div>

        {/* Bottom 2 Cards (Centered) */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm text-center flex flex-col items-center hover:border-[#c59a53] hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 flex items-center justify-center text-[#c59a53] mb-4">
              <Phone size={26} />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Get contact number</h3>
            <p className="text-xs text-gray-500 leading-relaxed">Receive a temporary number and check-in details after booking.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm text-center flex flex-col items-center hover:border-[#c59a53] hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-10 h-10 flex items-center justify-center text-[#c59a53] mb-4">
              <Star size={26} />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Rate owner/apartment</h3>
            <p className="text-xs text-gray-500 leading-relaxed">After your stay, rate the owner and apartment to help future tenants.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 4. HOW IT WORKS – HOST / PROVIDER (Screenshot 4) */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              How It Works – <span className="text-[#c59a53]">Host / Provider</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
        </motion.div>

        {/* Timeline Structure */}
        <div className="relative">
          {/* Vertical Middle Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-[#dfb56b]/50" />

          <div className="space-y-10 md:space-y-14">
            
            {/* Step 1 (Left) */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-12">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative hover:border-[#c59a53] hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#faf5ec] text-[#b68840] absolute top-5 right-5 flex items-center justify-center">
                    <UserCheck size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-[#b68840] mb-1">1. Register as provider</h4>
                  <p className="text-xs text-gray-500 leading-relaxed pr-8">Sign up as a host and create your provider account on ALLOGO.</p>
                </motion.div>
              </div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#7a5521] text-white items-center justify-center shadow-md z-10">
                <UserCheck size={18} />
              </div>
              <div className="hidden md:block w-1/2" />
            </div>

            {/* Step 2 (Right) */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="hidden md:block w-1/2" />
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#7a5521] text-white items-center justify-center shadow-md z-10">
                <Plus size={18} />
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative hover:border-[#c59a53] hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#faf5ec] text-[#b68840] absolute top-5 right-5 flex items-center justify-center">
                    <Plus size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-[#b68840] mb-1">2. Add apartment listings</h4>
                  <p className="text-xs text-gray-500 leading-relaxed pr-8">Add apartments with photos, descriptions, and amenities.</p>
                </motion.div>
              </div>
            </div>

            {/* Step 3 (Left) */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-12">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative hover:border-[#c59a53] hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#faf5ec] text-[#b68840] absolute top-5 right-5 flex items-center justify-center">
                    <FileText size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-[#b68840] mb-1">3. Upload ownership documents</h4>
                  <p className="text-xs text-gray-500 leading-relaxed pr-8">Submit ownership or authorization documents for verification.</p>
                </motion.div>
              </div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#7a5521] text-white items-center justify-center shadow-md z-10">
                <FileText size={18} />
              </div>
              <div className="hidden md:block w-1/2" />
            </div>

            {/* Step 4 (Right) */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="hidden md:block w-1/2" />
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#7a5521] text-white items-center justify-center shadow-md z-10">
                <ShieldCheck size={18} />
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative hover:border-[#c59a53] hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#faf5ec] text-[#b68840] absolute top-5 right-5 flex items-center justify-center">
                    <ShieldCheck size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-[#b68840] mb-1">4. Get validated by controller</h4>
                  <p className="text-xs text-gray-500 leading-relaxed pr-8">Wait for verification and approval from the platform controller.</p>
                </motion.div>
              </div>
            </div>

            {/* Step 5 (Left) */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 md:pr-12">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative hover:border-[#c59a53] hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#faf5ec] text-[#b68840] absolute top-5 right-5 flex items-center justify-center">
                    <Calendar size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-[#b68840] mb-1">5. Manage bookings & prices</h4>
                  <p className="text-xs text-gray-500 leading-relaxed pr-8">Receive booking requests and manage your calendar and pricing.</p>
                </motion.div>
              </div>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#7a5521] text-white items-center justify-center shadow-md z-10">
                <Calendar size={18} />
              </div>
              <div className="hidden md:block w-1/2" />
            </div>

            {/* Step 6 (Right) */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="hidden md:block w-1/2" />
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#7a5521] text-white items-center justify-center shadow-md z-10">
                <Star size={18} />
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm relative hover:border-[#c59a53] hover:shadow-md transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#faf5ec] text-[#b68840] absolute top-5 right-5 flex items-center justify-center">
                    <Star size={16} />
                  </div>
                  <h4 className="text-sm font-bold text-[#b68840] mb-1">6. Rate tenants</h4>
                  <p className="text-xs text-gray-500 leading-relaxed pr-8">After each stay, rate the tenant to maintain trust and transparency.</p>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. COMMISSION PAYMENT & DISPUTE MANAGEMENT (Screenshot 5) */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-gray-200/80">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              Commission Payment <span className="text-[#c59a53]">& Dispute Management</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
        </motion.div>

        {/* 4 Cards Grid */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
          
          <motion.div variants={fadeUp} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm relative hover:border-[#c59a53] hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-lg bg-[#faf5ec] text-[#b68840] absolute top-6 right-6 flex items-center justify-center">
              <Percent size={18} />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">Commission</h4>
            <p className="text-xs text-gray-500 leading-relaxed pr-10">ALLOGO charges a 3% commission per booking on apartment rentals.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm relative hover:border-[#c59a53] hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-lg bg-[#faf5ec] text-[#b68840] absolute top-6 right-6 flex items-center justify-center">
              <CreditCard size={18} />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">Payment</h4>
            <p className="text-xs text-gray-500 leading-relaxed pr-10">All payments are processed very fastly via secure card transactions only.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm relative hover:border-[#c59a53] hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-lg bg-[#faf5ec] text-[#b68840] absolute top-6 right-6 flex items-center justify-center">
              <Wallet size={18} />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">Payout Flow</h4>
            <p className="text-xs text-gray-500 leading-relaxed pr-10">ALLOGO keeps the commission and sends the remaining amount directly to the apartment owner.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm relative hover:border-[#c59a53] hover:shadow-md transition-all">
            <div className="w-9 h-9 rounded-lg bg-[#faf5ec] text-[#b68840] absolute top-6 right-6 flex items-center justify-center">
              <AlertTriangle size={18} />
            </div>
            <h4 className="text-base font-bold text-gray-900 mb-2">Dispute Management</h4>
            <p className="text-xs text-gray-500 leading-relaxed pr-10">Tenants can report issues. The controller reviews booking, chat history, and photos. Outcomes may include refunds, partial refunds, or other resolutions.</p>
          </motion.div>

        </motion.div>

        {/* Ready to Explore Bottom Banner */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center pt-8 border-t border-gray-100">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Ready <span className="text-[#c59a53]">to Explore ALLOGO?</span>
            </h3>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mb-8 max-w-xl mx-auto">
            Browse thousands of apartments or start earning by listing your own.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="px-7 sm:px-9 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Browse Apartments
            </button>
            <button className="px-7 sm:px-9 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#8d6226] bg-white border border-[#c59a53] hover:bg-amber-50/50 shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer">
              List Your Apartment
            </button>
          </div>
        </motion.div>

      </section>

    </div>
  );
};

export default ApartmentRentalView;