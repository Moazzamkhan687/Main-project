import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Ban, 
  PhoneCall, 
  DollarSign, 
  ShieldCheck, 
  FileText, 
  UserCheck, 
  Map, 
  CheckCircle2, 
  MapPin, 
  MessageSquare, 
  Phone, 
  Star, 
  Bell,
  Lock,
  ArrowLeft
} from 'lucide-react';

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    }
  }
};

const cardFadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] } 
  }
};

const ShortTermRental = ({ onBack }) => {
  return (
    <div className="w-full bg-[#fbf9f5] text-[#111827] overflow-x-hidden">
      
      {/* 1. HERO SECTION (ELECTRIC SCOOTER / SHORT TERM RENTALS) */}
      <section className="relative w-full h-[75vh] sm:h-[82vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black select-none">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1597843797221-cf7b946892fc?auto=format&fit=crop&w=2000&q=85"
            alt="Electric Scooter Rental"
            className="w-full h-full object-cover object-center brightness-70 contrast-95"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/75 pointer-events-none" />

        {onBack && (
          <button
            type="button"
            onClick={onBack}
            className="absolute top-6 left-6 z-30 flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full bg-black/70 border border-neutral-700 text-gray-200 hover:text-white hover:border-[#c69a53] hover:scale-105 active:scale-95 transition-all cursor-pointer backdrop-blur-md shadow-lg"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg leading-tight">
            <span className="text-[#c69a53] drop-shadow-[0_2px_14px_rgba(198,154,83,0.4)]">For Clients </span>
            <span className="text-white">Short-term Hours / </span>
            <span className="text-[#c69a53] drop-shadow-[0_2px_14px_rgba(198,154,83,0.4)] block sm:inline">Days</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-300 font-normal tracking-wide drop-shadow">
            Rent a car or scooter in a few taps...
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="px-7 sm:px-9 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:shadow-[0_8px_25px_rgba(197,154,83,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
              View Map
            </button>
            <button className="px-7 sm:px-9 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:shadow-[0_8px_25px_rgba(197,154,83,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
              Rent Now
            </button>
          </div>
        </motion.div>
      </section>

      {/* 2. PAYMENTS REQUIREMENTS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827]">
              Payments <span className="text-[#c59a53]">Requirements</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 font-normal">
            Secure payment process for all vehicle rentals
          </p>
        </motion.div>

        <motion.div 
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10"
        >
          <motion.div variants={cardFadeUp} className="group bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-sm flex flex-col items-center text-center hover:shadow-[0_12px_35px_rgba(197,154,83,0.18)] hover:-translate-y-2 hover:border-[#dfb76c] transition-all duration-300 cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#805923] via-[#b38843] to-[#6a491c] flex items-center justify-center text-white mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <CreditCard size={26} />
            </div>
            <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#b88c42] transition-colors mb-3">Card Only</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Payment is by card ONLY for all vehicle rentals.
            </p>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              Customer must present a valid card under their own name.
            </p>
          </motion.div>

          <motion.div variants={cardFadeUp} className="group bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-sm flex flex-col items-center text-center hover:shadow-[0_12px_35px_rgba(197,154,83,0.18)] hover:-translate-y-2 hover:border-[#dfb76c] transition-all duration-300 cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#805923] via-[#b38843] to-[#6a491c] flex items-center justify-center text-white mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <Ban size={26} />
            </div>
            <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#b88c42] transition-colors mb-3">No Cash</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              No cash option allowed.
            </p>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              Cash deposits or cash payments are strictly not accepted.
            </p>
          </motion.div>

          <motion.div variants={cardFadeUp} className="group bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-sm flex flex-col items-center text-center hover:shadow-[0_12px_35px_rgba(197,154,83,0.18)] hover:-translate-y-2 hover:border-[#dfb76c] transition-all duration-300 cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#805923] via-[#b38843] to-[#6a491c] flex items-center justify-center text-white mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
              <PhoneCall size={26} />
            </div>
            <h3 className="text-xl font-bold text-[#111827] group-hover:text-[#b88c42] transition-colors mb-3">After Payment</h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Temporary number generated only after payment completion.
            </p>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              Confirmation details will appear automatically after your payment is processed.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom Tag Bar */}
        <div className="flex justify-center mt-6">
          <div className="px-5 py-2 rounded-xl bg-[#835a22] text-white text-xs font-semibold tracking-wide shadow-md">
            All requirements must be completed before service activation
          </div>
        </div>
      </section>

      {/* 3. COMMISSION & PRIVACY */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827]">
              Commission & <span className="text-[#c59a53]">Privacy</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500">
            Automated systems ensuring transparency and user privacy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative rounded-3xl overflow-hidden min-h-[310px] border border-neutral-800 shadow-md group hover:border-[#c59a53] hover:shadow-[0_12px_35px_rgba(197,154,83,0.2)] transition-all duration-500 cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80"
              alt="Commission Laptop"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/75 p-6 sm:p-8 flex flex-col justify-between group-hover:bg-black/70 transition-colors">
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#b38843] to-[#6a491c] flex items-center justify-center text-white font-bold">
                    <DollarSign size={20} />
                  </div>
                  <span className="px-3 py-1 rounded-md bg-white/10 text-[11px] text-gray-300 uppercase tracking-wider font-semibold backdrop-blur-sm">
                    Mandatory Business Rule
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#c59a53] mt-4 mb-3">3% Commission</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-200">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" />
                    <span>ALLOGO takes 3% commission on every vehicle rental booking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" />
                    <span>Commission is automatically deducted from each transaction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" />
                    <span>Ensures seamless platform operations</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-white/10">
                <span>Automated Process</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Active
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="relative rounded-3xl overflow-hidden min-h-[310px] border border-neutral-800 shadow-md group hover:border-[#c59a53] hover:shadow-[0_12px_35px_rgba(197,154,83,0.2)] transition-all duration-500 cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80"
              alt="Temporary Number Car"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black/75 p-6 sm:p-8 flex flex-col justify-between group-hover:bg-black/70 transition-colors">
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#b38843] to-[#6a491c] flex items-center justify-center text-white">
                    <PhoneCall size={20} />
                  </div>
                  <span className="px-3 py-1 rounded-md bg-white/10 text-[11px] text-gray-300 uppercase tracking-wider font-semibold backdrop-blur-sm">
                    Privacy Protection
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#c59a53] mt-4 mb-3">Temporary Number</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-200">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" />
                    <span>Generated automatically after successful payment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" />
                    <span>Real phone numbers of user + provider are NEVER shown</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" />
                    <span>Temporary number expires after rental ends</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-white/10">
                <span>Automated Process</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Active
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Tag Bar */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#835a22] text-white text-xs font-semibold shadow-md">
            <ShieldCheck size={16} />
            <span>Both commission deduction and temporary number generation occur automatically</span>
          </div>
        </div>
      </section>

      {/* 4. PROVIDER REQUIREMENTS */}
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
              Provider <span className="text-[#c59a53]">Requirements</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500">
            Complete these mandatory steps to become an ALLOGO provider
          </p>
        </motion.div>

        <motion.div 
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10"
        >
          <motion.div variants={cardFadeUp} className="group bg-white rounded-3xl p-7 border border-neutral-200/80 shadow-sm flex flex-col justify-between hover:shadow-[0_12px_35px_rgba(197,154,83,0.18)] hover:-translate-y-2 hover:border-[#dfb76c] transition-all duration-300 cursor-pointer">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#805923] to-[#6a491c] flex items-center justify-center text-white mx-auto mb-5 shadow-sm group-hover:scale-110 transition-transform">
                <CreditCard size={26} />
              </div>
              <h3 className="text-xl font-bold text-center text-[#111827] group-hover:text-[#b88c42] transition-colors">Add Card</h3>
              <p className="text-[11px] font-bold text-[#b88c42] uppercase tracking-wider text-center mt-1 mb-4">
                Mandatory for Unlocking Services
              </p>
              <p className="text-xs text-gray-600 text-center mb-6">
                A valid payment card is required to unlock provider access.
              </p>
              <ul className="space-y-2 text-xs text-gray-500 mb-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1 shrink-0" />
                  <span>Card must be added before accessing provider features</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1 shrink-0" />
                  <span>Required for payment processing and commission collection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1 shrink-0" />
                  <span>Ensures transaction security and accountability</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs font-semibold">
              <span className="text-gray-500">Mandatory</span>
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-200">Required</span>
            </div>
          </motion.div>

          <motion.div variants={cardFadeUp} className="group bg-white rounded-3xl p-7 border border-neutral-200/80 shadow-sm flex flex-col justify-between hover:shadow-[0_12px_35px_rgba(197,154,83,0.18)] hover:-translate-y-2 hover:border-[#dfb76c] transition-all duration-300 cursor-pointer">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#805923] to-[#6a491c] flex items-center justify-center text-white mx-auto mb-5 shadow-sm group-hover:scale-110 transition-transform">
                <FileText size={26} />
              </div>
              <h3 className="text-xl font-bold text-center text-[#111827] group-hover:text-[#b88c42] transition-colors">Upload Documents</h3>
              <p className="text-[11px] font-bold text-[#b88c42] uppercase tracking-wider text-center mt-1 mb-4">
                Required for Verification
              </p>
              <p className="text-xs text-gray-600 text-center mb-6">
                Upload license, vehicle registration papers and clear photos.
              </p>
              <ul className="space-y-2 text-xs text-gray-500 mb-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1 shrink-0" />
                  <span>License (if required by vehicle type)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1 shrink-0" />
                  <span>Vehicle registration papers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1 shrink-0" />
                  <span>Clear vehicle photos from multiple angles</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs font-semibold">
              <span className="text-gray-500">Mandatory</span>
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-200">Required</span>
            </div>
          </motion.div>

          <motion.div variants={cardFadeUp} className="group bg-white rounded-3xl p-7 border border-neutral-200/80 shadow-sm flex flex-col justify-between hover:shadow-[0_12px_35px_rgba(197,154,83,0.18)] hover:-translate-y-2 hover:border-[#dfb76c] transition-all duration-300 cursor-pointer">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#805923] to-[#6a491c] flex items-center justify-center text-white mx-auto mb-5 shadow-sm group-hover:scale-110 transition-transform">
                <UserCheck size={26} />
              </div>
              <h3 className="text-xl font-bold text-center text-[#111827] group-hover:text-[#b88c42] transition-colors">Manual Validation</h3>
              <p className="text-[11px] font-bold text-[#b88c42] uppercase tracking-wider text-center mt-1 mb-4">
                Final Approval Step
              </p>
              <p className="text-xs text-gray-600 text-center mb-6">
                ALLOGO must approve your account before you appear on the map.
              </p>
              <ul className="space-y-2 text-xs text-gray-500 mb-6">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1 shrink-0" />
                  <span>Provider account must be manually validated by an ALLOGO controller</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1 shrink-0" />
                  <span>Verification ensures quality and safety standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53] mt-1 shrink-0" />
                  <span>Only approved providers appear on the public map</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs font-semibold">
              <span className="text-gray-500">Mandatory</span>
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-200">Required</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Tag Bar */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#835a22] text-white text-xs font-semibold shadow-md">
            <Lock size={15} />
            <span>Important: All three steps must be completed before provider account becomes active</span>
          </div>
        </div>
      </section>

      {/* 5. MAP REQUIREMENTS */}
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
              Map <span className="text-[#c59a53]">Requirements</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500">
            Interactive mapping with real-time provider locations
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
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <span className="text-sm font-bold text-gray-800">Live Map Preview</span>
                <div className="flex items-center gap-1.5 bg-gray-100 p-1 rounded-xl text-xs font-semibold">
                  <button className="px-3 py-1 bg-[#805923] text-white rounded-lg shadow-sm">
                    OpenStreetMap
                  </button>
                  <button className="px-3 py-1 text-gray-600 hover:text-black">
                    Google Maps
                  </button>
                </div>
              </div>

              <div className="h-64 bg-gray-50 flex flex-col items-center justify-center relative p-6">
                <div className="w-16 h-16 rounded-2xl bg-[#f0e6d6] flex items-center justify-center text-[#805923] mb-3 shadow-inner">
                  <Map size={32} />
                </div>
                <h4 className="font-bold text-sm text-gray-800">OpenStreetMap Active</h4>
                <p className="text-xs text-gray-500 mt-1">Showing vehicle locations on OSM</p>

                <div className="flex items-center gap-4 mt-6">
                  <span className="w-4 h-4 rounded-full bg-[#b88c42] shadow-md animate-pulse" />
                  <span className="w-4 h-4 rounded-full bg-[#805923] shadow-md animate-pulse delay-100" />
                  <span className="w-4 h-4 rounded-full bg-[#c59a53] shadow-md animate-pulse delay-200" />
                </div>
              </div>

              <div className="p-3 bg-gray-50/80 text-center text-xs text-gray-500 border-t border-gray-100 font-medium">
                OpenStreetMap is mandatory for production
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#fffdfa] border border-[#dfb76c]/50 text-xs text-gray-700 flex items-start gap-3">
              <CheckCircle2 size={18} className="text-[#805923] shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900 block font-semibold mb-0.5">Important Note</strong>
                OpenStreetMap is required for all vehicle location displays. Providers only appear after ALLOGO validation.
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
            {[
              {
                icon: Map,
                title: "OpenStreetMap Required",
                subtitle: "Free & Open Source",
                desc: "Vehicle pickup locations must use OpenStreetMap.",
                points: ["2D map view required", "Free service only", "No alternatives"]
              },
              {
                icon: CheckCircle2,
                title: "Provider Visibility",
                subtitle: "Post-Validation Only",
                desc: "Providers appear only after successful validation.",
                points: ["Validated providers only", "Manual approval required", "Real-time updates"]
              },
              {
                icon: MapPin,
                title: "Vehicle Information",
                subtitle: "Detailed Pop-up",
                desc: "Pins show provider details and availability.",
                points: ["Location pins", "Name, type, rating", "Availability status"]
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm flex items-start gap-4 hover:border-[#dfb76c] hover:shadow-[0_8px_25px_rgba(197,154,83,0.12)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#805923] to-[#6a491c] flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Icon size={22} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-base text-gray-900">{item.title}</h4>
                      <span className="px-2.5 py-0.5 rounded-md bg-[#805923] text-white text-[10px] font-bold uppercase tracking-wider">
                        Mandatory
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-[#805923] block mt-0.5">{item.subtitle}</span>
                    <p className="text-xs text-gray-600 mt-1.5">{item.desc}</p>
                    <ul className="mt-2.5 space-y-1 text-xs text-gray-500">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2">• {pt}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 6. VEHICLE REQUIREMENTS */}
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
              Vehicle <span className="text-[#c59a53]">Requirements</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500">
            Complete these steps to book your vehicle and start the rental process
          </p>
        </motion.div>

        <motion.div 
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {[
            {
              step: 1,
              title: "Select Vehicle Type",
              desc: "Cars, scooters, motorcycles, SUVs, trucks, or bikes.",
              img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
            },
            {
              step: 2,
              title: "Choose Rental Dates",
              desc: "Pick your start date & end date for the rental.",
              img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=600&q=80"
            },
            {
              step: 3,
              title: "Select Pickup Location",
              desc: "Choose the location on the map for vehicle pickup.",
              img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80"
            },
            {
              step: 4,
              title: "Pay by Card",
              desc: "User must pay by card to confirm booking.",
              img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80"
            }
          ].map((item, idx) => (
            <motion.div key={idx} variants={cardFadeUp} className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-[0_12px_35px_rgba(197,154,83,0.18)] hover:-translate-y-2 hover:border-[#dfb76c] transition-all duration-300">
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 w-6 h-6 rounded-full bg-[#b88c42] text-white text-xs font-bold flex items-center justify-center shadow">
                  {item.step}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-sm text-gray-900 group-hover:text-[#b88c42] transition-colors mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{item.desc}</p>
                </div>
                <button className="w-full py-2.5 rounded-xl bg-[#805923] hover:bg-[#976a2b] hover:shadow-md text-white font-medium text-xs transition-all cursor-pointer">
                  Select
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#b38843] to-[#734e1c] text-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-2.5 font-bold text-sm mb-1.5">
              <CheckCircle2 size={18} />
              <span>Booking Confirmed</span>
            </div>
            <p className="text-xs text-amber-100 font-normal">Booking is immediately confirmed</p>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#b38843] to-[#734e1c] text-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-2.5 font-bold text-sm mb-1.5">
              <PhoneCall size={18} />
              <span>Temporary Phone Number Generated</span>
            </div>
            <p className="text-xs text-amber-100 font-normal">Temporary number created for communication</p>
          </div>

          <div className="p-6 rounded-3xl bg-gradient-to-br from-[#b38843] to-[#734e1c] text-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="flex items-center gap-2.5 font-bold text-sm mb-1.5">
              <Bell size={18} />
              <span>Provider is Notified</span>
            </div>
            <p className="text-xs text-amber-100 font-normal">Provider receives notification</p>
          </div>
        </motion.div>

        <p className="text-center text-xs text-gray-500 mt-5 font-medium">
          • All steps occur automatically
        </p>
      </section>

      {/* 7. COMMUNICATION & SERVICES */}
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
              Communication & <span className="text-[#c59a53]">Services</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
            A premium communication system ensuring privacy, transparency, and trust between users and providers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
            className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/90 shadow-sm hover:border-[#dfb76c] transition-all"
          >
            <h3 className="text-xl font-bold text-[#805923]">Secure Communication</h3>
            <p className="text-xs text-gray-400 mt-0.5 mb-4">Privacy First</p>
            <div className="w-full h-[1px] bg-[#dfb76c]/40 mb-6" />

            <div className="space-y-3.5">
              {[
                { icon: MessageSquare, label: "In-app chat" },
                { icon: Phone, label: "In-app call" },
                { icon: MessageSquare, label: "WhatsApp integration" },
                { icon: CheckCircle2, label: "Only temporary numbers" },
                { icon: CheckCircle2, label: "Never real numbers" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group/item p-3.5 rounded-2xl border border-gray-100 bg-[#fcfaf7] hover:bg-white hover:border-[#dfb76c] hover:shadow-[0_4px_16px_rgba(197,154,83,0.12)] hover:translate-x-1.5 flex items-center gap-3.5 transition-all duration-300 cursor-pointer">
                    <div className="w-9 h-9 rounded-xl bg-[#805923] text-white flex items-center justify-center shrink-0 group-hover/item:scale-105 transition-transform">
                      <Icon size={18} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover/item:text-[#805923] transition-colors">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
            className="bg-white rounded-3xl p-7 sm:p-8 border border-gray-200/90 shadow-sm hover:border-[#dfb76c] transition-all"
          >
            <h3 className="text-xl font-bold text-[#805923]">History & Ratings</h3>
            <p className="text-xs text-gray-400 mt-0.5 mb-4">Transparent System</p>
            <div className="w-full h-[1px] bg-[#dfb76c]/40 mb-6" />

            <div className="space-y-3.5">
              {[
                { icon: CheckCircle2, label: "User rental history" },
                { icon: CheckCircle2, label: "Provider rental history" },
                { icon: Star, label: "Two-way rating system" },
                { icon: Star, label: "Review system for feedback" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group/item p-3.5 rounded-2xl border border-gray-100 bg-[#fcfaf7] hover:bg-white hover:border-[#dfb76c] hover:shadow-[0_4px_16px_rgba(197,154,83,0.12)] hover:translate-x-1.5 flex items-center gap-3.5 transition-all duration-300 cursor-pointer">
                    <div className="w-9 h-9 rounded-xl bg-[#805923] text-white flex items-center justify-center shrink-0 group-hover/item:scale-105 transition-transform">
                      <Icon size={18} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover/item:text-[#805923] transition-colors">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. SYSTEMS REQUIREMENTS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
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
              Systems <span className="text-[#c59a53]">Requirements</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500">
            Complete framework for approval, legal compliance, and payment processing
          </p>
        </motion.div>

        <motion.div 
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {[
            {
              title: "Validation Requirements",
              tag: "Admin System",
              points: [
                "Approve or reject provider listings",
                "Send notifications for corrections",
                "Only approved vehicles become visible"
              ],
              footer: "Admin controller must be able to manage all provider approvals and corrections."
            },
            {
              title: "Legal Requirement",
              tag: "Legal System",
              points: [
                "Mandatory checkbox during registration",
                "Accept ALLOGO terms & conditions",
                "Understand platform responsibility limits"
              ],
              footer: "Users must acknowledge that ALLOGO is only a connecting platform."
            },
            {
              title: "Credits & Points System",
              tag: "Financial System",
              points: [
                "Provider credit wallet required",
                "Points system for discounts",
                "Point transfer between users & providers"
              ],
              footer: "Global requirement that applies across all payment transactions."
            }
          ].map((item, idx) => (
            <motion.div key={idx} variants={cardFadeUp} className="group bg-white rounded-3xl overflow-hidden border border-gray-200/90 shadow-sm flex flex-col justify-between hover:shadow-[0_14px_35px_rgba(197,154,83,0.18)] hover:-translate-y-2 hover:border-[#dfb76c] transition-all duration-300 cursor-pointer">
              <div>
                <div className="bg-[#7d5621] p-6 text-white group-hover:brightness-110 transition-all">
                  <span className="text-[10px] font-bold tracking-widest uppercase opacity-80 block mb-1">
                    REQUIREMENT
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold">{item.title}</h3>
                </div>
                <div className="p-6">
                  <span className="px-3 py-1 rounded-lg bg-[#f4ece1] text-[#7d5621] text-xs font-bold inline-block mb-5">
                    {item.tag}
                  </span>
                  <ul className="space-y-3 text-xs sm:text-sm text-gray-600">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#7d5621] mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 mb-4">{item.footer}</p>
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-gray-500">Status</span>
                  <span className="flex items-center gap-1 text-[#7d5621]">
                    <span className="w-2 h-2 rounded-full bg-[#7d5621] animate-pulse" /> Mandatory
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
};

export default ShortTermRental;