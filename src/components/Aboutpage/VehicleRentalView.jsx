import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  CreditCard, 
  Ban, 
  Phone, 
  UploadCloud, 
  CheckCircle2, 
  MapPin, 
  Map, 
  Eye, 
  Info, 
  Lock, 
  ShieldCheck, 
  MessageSquare, 
  PhoneCall, 
  MessageCircle, 
  Star, 
  Layers, 
  Check, 
  DollarSign, 
  Scale, 
  Coins 
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const VehicleRentalView = ({ onBack }) => {
  const [mapType, setMapType] = useState('osm');

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
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85"
            alt="Car Highway Motion"
            className="w-full h-full object-cover object-center brightness-65 contrast-105"
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
            Rentals <span className="text-[#c69a53]">Cars & Scooters</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-gray-300 font-normal tracking-wide drop-shadow max-w-2xl">
            Find vehicles nearby, book for hours or days...
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="px-7 sm:px-9 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Rent a vehicle
            </button>
            <button className="px-7 sm:px-9 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer">
              Rent Now
            </button>
          </div>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 2. PAYMENTS REQUIREMENTS (Screenshot 2) */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              Payments <span className="text-[#c59a53]">Requirements</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500">Secure payment process for all vehicle rentals</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm text-center flex flex-col items-center hover:border-[#c59a53] hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#faf5ec] text-[#b68840] flex items-center justify-center mb-6 shadow-sm">
              <CreditCard size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Card Only</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">Payment is by card ONLY for all vehicle rentals.</p>
            <p className="text-xs text-gray-500 leading-relaxed">Customer must present a valid card under their own name.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border-2 border-[#b68840] shadow-sm text-center flex flex-col items-center hover:shadow-lg transition-all relative">
            <div className="w-14 h-14 rounded-2xl bg-[#faf5ec] text-[#b68840] flex items-center justify-center mb-6 shadow-sm">
              <Ban size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">No Cash</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">No cash option allowed.</p>
            <p className="text-xs text-gray-500 leading-relaxed">Cash deposits or cash payments are strictly not accepted.</p>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#b68840] to-transparent mt-6" />
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-8 border border-gray-200/90 shadow-sm text-center flex flex-col items-center hover:border-[#c59a53] hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#faf5ec] text-[#b68840] flex items-center justify-center mb-6 shadow-sm">
              <Phone size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">After Payment</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">Temporary number generated only after payment completion.</p>
            <p className="text-xs text-gray-500 leading-relaxed">Confirmation details will appear automatically after your payment is processed.</p>
          </motion.div>
        </motion.div>

        <div className="flex justify-center">
          <span className="px-6 py-2 rounded-xl text-xs font-semibold text-white bg-[#8d6226] shadow-md">
            All requirements must be completed before service activation
          </span>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. COMMISSION & PRIVACY (Screenshot 3) */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-y border-gray-200/80">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              Commission & <span className="text-[#c59a53]">Privacy</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500">Automated systems ensuring transparency and user privacy</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 h-80 sm:h-96 group">
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80" alt="Bank Laptop" className="w-full h-full object-cover brightness-50" />
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#b68840] text-white flex items-center justify-center shadow-md">
                  <DollarSign size={24} />
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md border border-neutral-700 text-[#dfb56b]">
                  MANDATORY BUSINESS RULE
                </span>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#dfb56b] mb-4">3% Commission</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-200">
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#dfb56b]" /><span>ALLOGO takes 3% commission on every vehicle rental booking</span></li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#dfb56b]" /><span>Commission is automatically deducted from each transaction</span></li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#dfb56b]" /><span>Ensures seamless platform operations</span></li>
                </ul>
              </div>
              <div className="flex items-center justify-between text-[11px] text-gray-300 pt-4 border-t border-white/20">
                <span>Automated Process</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Active</span>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 h-80 sm:h-96 group">
            <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80" alt="Car Pump" className="w-full h-full object-cover brightness-50" />
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between text-white">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#b68840] text-white flex items-center justify-center shadow-md">
                  <Phone size={24} />
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/60 backdrop-blur-md border border-neutral-700 text-[#dfb56b]">
                  PRIVACY PROTECTION
                </span>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#dfb56b] mb-4">Temporary Number</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-200">
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#dfb56b]" /><span>Generated automatically after successful payment</span></li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#dfb56b]" /><span>Real phone numbers of user + provider are NEVER shown</span></li>
                  <li className="flex items-center gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-[#dfb56b]" /><span>Temporary number expires after rental ends</span></li>
                </ul>
              </div>
              <div className="flex items-center justify-between text-[11px] text-gray-300 pt-4 border-t border-white/20">
                <span>Automated Process</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold"><span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Active</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <span className="px-6 py-2 rounded-xl text-xs font-semibold text-white bg-[#8d6226] shadow-md">
            Both commission deduction and temporary number generation occur automatically
          </span>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. PROVIDER REQUIREMENTS (Screenshot 4) */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              Provider <span className="text-[#c59a53]">Requirements</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500">Complete these mandatory steps to become an ALLOGO provider</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-7 border-2 border-[#b68840] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-13 h-13 rounded-2xl bg-[#b68840] text-white flex items-center justify-center mb-5 mx-auto shadow-sm">
                <CreditCard size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Add Card</h3>
              <p className="text-[10px] font-bold text-[#b68840] uppercase tracking-wider text-center mb-4">MANDATORY FOR UNLOCKING SERVICES</p>
              <p className="text-xs text-gray-600 leading-relaxed mb-6 text-center">A valid payment card is required to unlock provider access.</p>
              <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Card must be added before accessing provider features</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Required for payment processing and commission collection</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Ensures transaction security and accountability</span></li>
              </ul>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs">
              <span className="text-gray-500">Mandatory</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200">Required</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-7 border border-gray-200/90 shadow-sm flex flex-col justify-between hover:border-[#c59a53] transition-all">
            <div>
              <div className="w-13 h-13 rounded-2xl bg-[#b68840] text-white flex items-center justify-center mb-5 mx-auto shadow-sm">
                <UploadCloud size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Upload Documents</h3>
              <p className="text-[10px] font-bold text-[#b68840] uppercase tracking-wider text-center mb-4">REQUIRED FOR VERIFICATION</p>
              <p className="text-xs text-gray-600 leading-relaxed mb-6 text-center">Upload license, vehicle registration papers and clear photos.</p>
              <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>License (if required by vehicle type)</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Vehicle registration papers</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Clear vehicle photos from multiple angles</span></li>
              </ul>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs">
              <span className="text-gray-500">Mandatory</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200">Required</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl p-7 border border-gray-200/90 shadow-sm flex flex-col justify-between hover:border-[#c59a53] transition-all">
            <div>
              <div className="w-13 h-13 rounded-2xl bg-[#b68840] text-white flex items-center justify-center mb-5 mx-auto shadow-sm">
                <CheckCircle2 size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">Manual Validation</h3>
              <p className="text-[10px] font-bold text-[#b68840] uppercase tracking-wider text-center mb-4">FINAL APPROVAL STEP</p>
              <p className="text-xs text-gray-600 leading-relaxed mb-6 text-center">ALLOGO must approve your account before you appear on the map.</p>
              <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Provider account must be manually validated by an ALLOGO controller</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Verification ensures quality and safety standards</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Only approved providers appear on the public map</span></li>
              </ul>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs">
              <span className="text-gray-500">Mandatory</span>
              <span className="px-3 py-1 rounded-full text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200">Required</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex justify-center">
          <span className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#8d6226] shadow-md flex items-center gap-2">
            <Lock size={15} />
            <span>Important: All three steps must be completed before provider account becomes active</span>
          </span>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. MAP REQUIREMENTS (Screenshot 5) */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-y border-gray-200/80">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              Map <span className="text-[#c59a53]">Requirements</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500">Interactive mapping with real-time provider locations</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-4 bg-gray-50/80 border-b border-gray-200 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-800">Live Map Preview</span>
                <div className="inline-flex rounded-xl bg-gray-200/70 p-1 text-xs">
                  <button onClick={() => setMapType('osm')} className={`px-3 py-1 rounded-lg font-semibold transition-all ${mapType === 'osm' ? 'bg-[#8d6226] text-white shadow' : 'text-gray-600'}`}>OpenStreetMap</button>
                  <button onClick={() => setMapType('google')} className={`px-3 py-1 rounded-lg font-semibold transition-all ${mapType === 'google' ? 'bg-[#8d6226] text-white shadow' : 'text-gray-600'}`}>Google Maps</button>
                </div>
              </div>
              <div className="h-64 sm:h-72 bg-gradient-to-b from-gray-100 to-gray-200/50 flex flex-col items-center justify-center relative p-6">
                <div className="w-14 h-14 rounded-2xl bg-[#faf5ec] border border-amber-200 text-[#b68840] flex items-center justify-center mb-3">
                  <Map size={28} />
                </div>
                <h4 className="text-base font-bold text-gray-900">OpenStreetMap Active</h4>
                <p className="text-xs text-gray-500 mt-1">Showing vehicle locations on OSM</p>
                <div className="flex gap-4 mt-6">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#8d6226] shadow-md animate-bounce" />
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#8d6226] shadow-md animate-pulse" />
                  <span className="w-6 h-6 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#8d6226] shadow-md animate-bounce" />
                </div>
              </div>
              <div className="p-3 text-center text-xs font-semibold text-gray-500 bg-gray-50 border-t border-gray-200">
                OpenStreetMap is mandatory for production
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#8d6226] mt-0.5 shrink-0" />
              <div>
                <span className="text-xs font-bold text-gray-900 block">Important Note</span>
                <p className="text-[11px] text-gray-600 mt-0.5 leading-relaxed">OpenStreetMap is required for all vehicle location displays. Providers only appear after ALLOGO validation.</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="lg:col-span-6 space-y-4">
            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8d6226] text-white flex items-center justify-center shrink-0">
                  <Map size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">OpenStreetMap Required</h4>
                  <span className="text-[11px] font-semibold text-[#8d6226] block mb-2">Free & Open Source</span>
                  <p className="text-xs text-gray-600 mb-2">Vehicle pickup locations must use OpenStreetMap.</p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" /><span>2D map view required</span></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" /><span>Free service only</span></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" /><span>No alternatives</span></li>
                  </ul>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold text-white bg-[#8d6226] uppercase">Mandatory</span>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8d6226] text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Provider Visibility</h4>
                  <span className="text-[11px] font-semibold text-[#8d6226] block mb-2">Post-Validation Only</span>
                  <p className="text-xs text-gray-600 mb-2">Providers appear only after successful validation.</p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" /><span>Validated providers only</span></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" /><span>Manual approval required</span></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" /><span>Real-time updates</span></li>
                  </ul>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold text-white bg-[#8d6226] uppercase">Mandatory</span>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex items-start justify-between">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#8d6226] text-white flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Vehicle Information</h4>
                  <span className="text-[11px] font-semibold text-[#8d6226] block mb-2">Detailed Pop-up</span>
                  <p className="text-xs text-gray-600 mb-2">Pins show provider details and availability.</p>
                  <ul className="space-y-1 text-xs text-gray-500">
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" /><span>Location pins</span></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" /><span>Name, type, rating</span></li>
                    <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" /><span>Availability status</span></li>
                  </ul>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-bold text-white bg-[#8d6226] uppercase">Mandatory</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. VEHICLE REQUIREMENTS (Screenshot 6) */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              Vehicle <span className="text-[#c59a53]">Requirements</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500">Complete these steps to book your vehicle and start the rental process</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <motion.div variants={fadeUp} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="relative h-44">
                <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80" alt="Vehicle Type" className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-black/60 text-white font-bold text-xs flex items-center justify-center border border-white/40">1</span>
              </div>
              <div className="p-5">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Select Vehicle Type</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Cars, scooters, motorcycles, SUVs, trucks, or bikes.</p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#7a5521] to-[#dfb56b] shadow-sm hover:brightness-110 transition-all">Select</button>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="relative h-44">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" alt="Rental Dates" className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-black/60 text-white font-bold text-xs flex items-center justify-center border border-white/40">2</span>
              </div>
              <div className="p-5">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Choose Rental Dates</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Pick your start date & end date for the rental.</p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#7a5521] to-[#dfb56b] shadow-sm hover:brightness-110 transition-all">Select</button>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="relative h-44">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80" alt="Pickup Location" className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-black/60 text-white font-bold text-xs flex items-center justify-center border border-white/40">3</span>
              </div>
              <div className="p-5">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Select Pickup Location</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Choose the location on the map for vehicle pickup.</p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#7a5521] to-[#dfb56b] shadow-sm hover:brightness-110 transition-all">Select</button>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="relative h-44">
                <img src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80" alt="Pay by Card" className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 w-7 h-7 rounded-full bg-black/60 text-white font-bold text-xs flex items-center justify-center border border-white/40">4</span>
              </div>
              <div className="p-5">
                <h4 className="text-sm font-bold text-gray-900 mb-1">Pay by Card</h4>
                <p className="text-xs text-gray-500 leading-relaxed">User must pay by card to confirm booking.</p>
              </div>
            </div>
            <div className="p-5 pt-0">
              <button className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#7a5521] to-[#dfb56b] shadow-sm hover:brightness-110 transition-all">Select</button>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#946e30] via-[#b88c42] to-[#785420] text-white shadow-md flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h5 className="font-bold text-sm">Booking Confirmed</h5>
              <p className="text-xs text-amber-100">Booking is immediately confirmed</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#946e30] via-[#b88c42] to-[#785420] text-white shadow-md flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <h5 className="font-bold text-sm">Temporary Phone Number Generated</h5>
              <p className="text-xs text-amber-100">Temporary number created for communication</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#946e30] via-[#b88c42] to-[#785420] text-white shadow-md flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h5 className="font-bold text-sm">Provider is Notified</h5>
              <p className="text-xs text-amber-100">Provider receives notification</p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-emerald-600 font-semibold flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> All steps occur automatically
        </p>
      </section>

      {/* ========================================================= */}
      {/* 7. COMMUNICATION & SERVICES (Screenshot 7) */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-y border-gray-200/80">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              Communication & <span className="text-[#c59a53]">Services</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">A premium communication system ensuring privacy, transparency, and trust between users and providers.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
            <div className="border-b border-gray-100 pb-3 mb-4">
              <h3 className="text-lg font-bold text-[#8d6226]">Secure Communication</h3>
              <span className="text-xs text-gray-400">Privacy First</span>
            </div>
            {[
              { label: 'In-app chat', icon: MessageSquare },
              { label: 'In-app call', icon: PhoneCall },
              { label: 'WhatsApp integration', icon: MessageCircle },
              { label: 'Only temporary numbers', icon: CheckCircle2 },
              { label: 'Never real numbers', icon: CheckCircle2 }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex items-center gap-3.5 p-3.5 rounded-xl border border-gray-200/90 bg-white hover:border-[#c59a53] transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#8d6226] text-white flex items-center justify-center shrink-0">
                    <IconComp size={16} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">{item.label}</span>
                </div>
              );
            })}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-4">
            <div className="border-b border-gray-100 pb-3 mb-4">
              <h3 className="text-lg font-bold text-[#8d6226]">History & Ratings</h3>
              <span className="text-xs text-gray-400">Transparent System</span>
            </div>
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-gray-200/90 bg-white hover:border-[#c59a53] transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#8d6226] text-white flex items-center justify-center shrink-0"><CheckCircle2 size={16} /></div>
              <span className="text-xs sm:text-sm font-semibold text-gray-800">User rental history</span>
            </div>
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-gray-200/90 bg-white hover:border-[#c59a53] transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#8d6226] text-white flex items-center justify-center shrink-0"><CheckCircle2 size={16} /></div>
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Provider rental history</span>
            </div>
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl border border-gray-200/90 bg-white hover:border-[#c59a53] transition-all">
              <div className="w-8 h-8 rounded-lg bg-[#8d6226] text-white flex items-center justify-center shrink-0"><Star size={16} /></div>
              <span className="text-xs sm:text-sm font-semibold text-gray-800">Two-way rating system</span>
            </div>
            <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-[#8d6226] text-white shadow-md transition-all">
              <div className="w-8 h-8 rounded-lg bg-white/20 text-white flex items-center justify-center shrink-0"><Star size={16} /></div>
              <span className="text-xs sm:text-sm font-semibold">Review system for feedback</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. SYSTEMS REQUIREMENTS (Screenshot 8) */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              Systems <span className="text-[#c59a53]">Requirements</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500">Complete framework for approval, legal compliance, and payment processing</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={fadeUp} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between hover:border-[#c59a53] transition-all">
            <div>
              <div className="bg-[#785420] text-white p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-200">REQUIREMENT</span>
                <h3 className="text-lg font-bold mt-1">Validation Requirements</h3>
              </div>
              <div className="p-6 space-y-4">
                <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-gray-100 text-gray-700">Admin System</span>
                <ul className="space-y-2.5 text-xs text-gray-600">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Approve or reject provider listings</span></li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Send notifications for corrections</span></li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Only approved vehicles become visible</span></li>
                </ul>
                <p className="text-[11px] text-gray-400 pt-3 border-t border-gray-100">Admin controller must be able to manage all provider approvals and corrections.</p>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-gray-700">
              <span>Status</span>
              <span className="flex items-center gap-1.5 text-[#785420]"><span className="w-2 h-2 rounded-full bg-[#785420]" /> Mandatory</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between hover:border-[#c59a53] transition-all">
            <div>
              <div className="bg-[#785420] text-white p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-200">REQUIREMENT</span>
                <h3 className="text-lg font-bold mt-1">Legal Requirement</h3>
              </div>
              <div className="p-6 space-y-4">
                <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-gray-100 text-gray-700">Legal System</span>
                <ul className="space-y-2.5 text-xs text-gray-600">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Mandatory checkbox during registration</span></li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Accept ALLOGO terms & conditions</span></li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Understand platform responsibility limits</span></li>
                </ul>
                <p className="text-[11px] text-gray-400 pt-3 border-t border-gray-100">Users must acknowledge that ALLOGO is only a connecting platform.</p>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-gray-700">
              <span>Status</span>
              <span className="flex items-center gap-1.5 text-[#785420]"><span className="w-2 h-2 rounded-full bg-[#785420]" /> Mandatory</span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between hover:border-[#c59a53] transition-all">
            <div>
              <div className="bg-[#785420] text-white p-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-200">REQUIREMENT</span>
                <h3 className="text-lg font-bold mt-1">Credits & Points System</h3>
              </div>
              <div className="p-6 space-y-4">
                <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-gray-100 text-gray-700">Financial System</span>
                <ul className="space-y-2.5 text-xs text-gray-600">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Provider credit wallet required</span></li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Points system for discounts</span></li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1.5" /><span>Point transfer between users & providers</span></li>
                </ul>
                <p className="text-[11px] text-gray-400 pt-3 border-t border-gray-100">Global requirement that applies across all payment transactions.</p>
              </div>
            </div>
            <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-gray-700">
              <span>Status</span>
              <span className="flex items-center gap-1.5 text-[#785420]"><span className="w-2 h-2 rounded-full bg-[#785420]" /> Mandatory</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
};

export default VehicleRentalView;