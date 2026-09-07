import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  UserCheck, 
  MessageSquare, 
  MapPin, 
  PhoneCall, 
  Users, 
  History, 
  Car, 
  Bike, 
  CreditCard, 
  Banknote, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import BookYourRideModal from './BookYourRideModal';
import BecomeDriverModal from './BecomeDriverModal';

// Animation variants
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

const RideInterfaceView = ({ onBack }) => {
  const [isRideModalOpen, setIsRideModalOpen] = useState(false);
  const [isDriverModalOpen, setIsDriverModalOpen] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#fbf9f5] text-[#111827] overflow-x-hidden relative select-none">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative w-full h-[75vh] sm:h-[84vh] min-h-[520px] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=85"
            alt="Ride Service"
            className="w-full h-full object-cover brightness-60"
          />
        </div>

        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/75 pointer-events-none" />

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
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            <span className="text-white">Comfortable </span>
            <span className="text-[#c69a53] drop-shadow-[0_2px_14px_rgba(198,154,83,0.4)]">
              Rides On Demand
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-gray-300 max-w-2xl font-normal">
            Choose your destination, set your own fair price, and ride with certified drivers.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
            <button 
              type="button"
              onClick={() => setIsRideModalOpen(true)}
              className="px-7 sm:px-9 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:shadow-[0_8px_25px_rgba(197,154,83,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              Book a Ride
            </button>

            <button 
              type="button"
              onClick={() => setIsDriverModalOpen(true)}
              className="px-7 sm:px-9 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-white border border-[#c69a53]/80 bg-black/40 hover:bg-[#c69a53]/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer backdrop-blur-sm"
            >
              Become a Driver
            </button>
          </div>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 2. ALL THE TOOLS YOU NEED (Screenshot 1) */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              All the tools you need for <span className="text-[#c59a53]">safer, smarter rides.</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#a17c30] mb-1">
            FOR RIDERS & DRIVERS • ONE SIMPLE FLOW
          </p>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
            From driver selection and negotiation to GPS tracking and full trip history, everything stays inside the app.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left 6 Cards (2x3 Grid) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {[
              {
                icon: UserCheck,
                title: 'Driver selection',
                desc: 'Pick the driver you prefer before confirming your ride.'
              },
              {
                icon: MessageSquare,
                title: 'Real-time price negotiation',
                desc: 'Agree the fare directly with the driver, like in inDrive.'
              },
              {
                icon: MapPin,
                title: 'Live GPS tracking',
                desc: 'Follow every ride on OpenStreetMap from pickup to drop-off.'
              },
              {
                icon: PhoneCall,
                title: 'In-app chat, call & WhatsApp',
                desc: 'Contact your driver without sharing your real number.'
              },
              {
                icon: Users,
                title: 'Order for someone else',
                desc: 'Book rides for family or friends and track their trip.'
              },
              {
                icon: History,
                title: 'Trip history & ratings',
                desc: 'See all past trips, rate drivers and read reviews.'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="group bg-white rounded-2xl p-5 border border-gray-200/90 shadow-sm hover:border-[#c59a53] hover:shadow-[0_10px_25px_rgba(197,154,83,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9e7638] via-[#bd9149] to-[#785420] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#9e7638] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right 2 Stacked Cards */}
          <div className="lg:col-span-4 space-y-5">
            {/* Zones Covered Image Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative rounded-3xl overflow-hidden h-48 sm:h-52 shadow-md group border border-gray-200 cursor-pointer"
            >
              <img 
                src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80" 
                alt="City Roads" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#c59a53] block mb-1">
                  ZONES COVERED
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                  Inside city, neighborhoods & villas • Between areas in the same city
                </p>
              </div>
            </motion.div>

            {/* Built for Real Zones Dark Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-[#0b0b0c] text-white rounded-3xl p-6 sm:p-7 border border-neutral-800 shadow-lg"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#c59a53] mb-3">
                Built for your city's real zones.
              </h3>
              <div className="space-y-2 text-xs text-gray-300 leading-relaxed mb-4">
                <p>
                  <strong className="text-white">Inside the city</strong> — neighborhoods, downtown, residential areas and villas.
                </p>
                <p>
                  <strong className="text-white">Between areas in the same city</strong> — connect districts, campuses or industrial zones with a single request.
                </p>
              </div>
              <p className="text-[11px] text-gray-500">
                Choose your zone, set your price and let verified drivers respond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. HOW A RIDE WORKS FOR CLIENTS (Screenshot 2 - Dark Bar) */}
      {/* ========================================================= */}
      <section className="w-full py-20 bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-[#0a0a0a] text-white border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                How a ride works for <span className="text-[#c59a53]">ALLOGO clients.</span>
              </h2>
              <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
              From setting your pickup on the map to rating your driver, every ride follows the same clear, transparent flow.
            </p>
          </motion.div>

          {/* 5 Steps Horizontal Timeline */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
          >
            {[
              {
                step: '1',
                label: 'STEP 1',
                title: 'Set pickup & destination',
                desc: "Drop your pickup pin and destination on the map so drivers see exactly where you're going."
              },
              {
                step: '2',
                label: 'STEP 2',
                title: 'Propose your price',
                desc: 'Enter the fare you want to pay. You stay in control of the offer from the very beginning.'
              },
              {
                step: '3',
                label: 'STEP 3',
                title: 'Choose from drivers',
                desc: 'Drivers respond to your request. Check ratings, vehicles and reviews, then pick the one you prefer.'
              },
              {
                step: '4',
                label: 'STEP 4',
                title: 'Track ride in real time',
                desc: 'Follow the route live on OpenStreetMap and stay in touch via in-app chat, call or WhatsApp.'
              },
              {
                step: '5',
                label: 'STEP 5',
                title: 'Pay & rate your trip',
                desc: 'Pay with cash or card directly in the app, then leave a verified rating to help other clients.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-neutral-900/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#dfb56b] to-[#7a5521] text-white font-extrabold flex items-center justify-center text-lg shadow-md mb-3 ring-4 ring-black">
                  {item.step}
                </div>
                <span className="text-[10px] font-bold text-[#c59a53] uppercase tracking-wider mb-1">
                  {item.label}
                </span>
                <h4 className="text-sm font-bold text-white mb-2 min-h-[40px] flex items-center justify-center">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <p className="text-center text-[11px] sm:text-xs text-neutral-500 font-medium border-t border-neutral-800/80 pt-6">
            ALLOGO is a connection platform only. For full protection and history, keep all negotiations and payments inside the app.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. FROM REGISTRATION TO EARNING (Screenshot 3) */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              From registration to <span className="text-[#c59a53]">Earning with ALLOGO.</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
            Register once, get validated by controllers, then start receiving ride offers, negotiating and earning money plus points.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Driver Steps 1 to 5 */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-3.5"
          >
            {[
              {
                step: '1',
                title: 'Register as a driver',
                desc: 'Create your ALLOGO provider account as a male or female driver and complete your profile.',
                badge: 'Male / Female drivers'
              },
              {
                step: '2',
                title: 'Upload license & vehicle photos',
                desc: 'Upload your driving license, vehicle registration and clear photos of your car or motorcycle.',
                badge: 'License • Registration • Photos'
              },
              {
                step: '3',
                title: 'Wait for controller validation',
                desc: 'ALLOGO controllers manually review your documents and pictures before you appear on the map.',
                badge: 'Verified providers only'
              },
              {
                step: '4',
                title: 'Receive offers & negotiate',
                desc: 'Get ride requests, review client offers and negotiate your price before accepting.',
                badge: 'Live price negotiation'
              },
              {
                step: '5',
                title: 'Complete trips & earn',
                desc: 'Finish trips, earn cash and points, grow your rating and unlock more ride opportunities.',
                badge: 'Earnings + points system'
              }
            ].map((st, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-200/90 shadow-sm hover:border-[#c59a53] hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#8d6226] text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-sm mt-0.5">
                  {st.step}
                </div>
                <div className="flex-1">
                  <span className="text-[10px] font-bold text-[#b88c42] uppercase tracking-wider block">
                    STEP {st.step}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">
                    {st.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-2.5">
                    {st.desc}
                  </p>
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-50/70 text-[#9e7638] border border-amber-200/60">
                    {st.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Drive with ALLOGO Hero Image Banner */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative rounded-3xl overflow-hidden h-52 shadow-md border border-gray-200"
            >
              <img 
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80" 
                alt="Drivers Thumbs Up" 
                className="w-full h-full object-cover brightness-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#c59a53] block mb-1">
                  DRIVE WITH ALLOGO
                </span>
                <p className="text-xs sm:text-sm font-bold leading-snug">
                  Verified drivers receive ride offers, negotiate fares and earn money + points on every completed trip.
                </p>
              </div>
            </motion.div>

            {/* Why Drive with ALLOGO Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-gradient-to-br from-[#9e7638] via-[#bd9149] to-[#785420] text-white rounded-3xl p-6 shadow-md"
            >
              <h3 className="text-base font-bold mb-2">Why drive with ALLOGO?</h3>
              <p className="text-xs text-amber-100 mb-3.5 leading-relaxed font-normal">
                You're in control: pick the trips you want, negotiate prices and build your rating with every ride.
              </p>
              <ul className="space-y-1.5 text-xs text-white">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Male and female drivers welcome</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Transparent 7% commission on rides</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Earn cash + points for every completed trip</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  <span>Full trip history and performance overview</span>
                </li>
              </ul>
            </motion.div>

            {/* Controller Validation = Trust Card */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white rounded-3xl p-6 border border-gray-200/90 shadow-sm"
            >
              <h4 className="text-base font-bold text-[#a17c30] mb-2 flex items-center gap-2">
                <ShieldCheck size={20} />
                <span>Controller Validation = Trust</span>
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">
                Each driver is manually verified by ALLOGO controllers before appearing on the map, ensuring clients always ride with a trusted professional.
              </p>
              <ul className="space-y-1.5 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" />
                  <span>License & vehicle registration checks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" />
                  <span>Vehicle photos and identity verification</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59a53]" />
                  <span>Clear notifications for approval or corrections</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <p className="text-center text-[11px] text-gray-400 mt-12">
          ALLOGO is a connection platform only. All rides and payments must remain inside the app to correctly track commissions, earnings and points.
        </p>
      </section>

      {/* ========================================================= */}
      {/* 5. A CLEAR MAP FOR CARS, MOTOS & DRIVERS (Screenshot 4) */}
      {/* ========================================================= */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900">
              A clear map for <span className="text-[#c59a53]">cars, motos & drivers.</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
            Preview of the ALLOGO rides map with male / female drivers and quick icons for vehicles, chat, WhatsApp and payments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Smartphone Mockup with Realistic UI */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] h-[580px] bg-black rounded-[46px] p-3.5 shadow-2xl border-4 border-neutral-800 ring-1 ring-neutral-700">
              {/* Speaker Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-neutral-900 rounded-full z-20" />
              
              {/* Screen Area */}
              <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-neutral-900">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80" 
                  alt="City Map View" 
                  className="w-full h-full object-cover brightness-60"
                />

                {/* Top Overlay Badges */}
                <div className="absolute top-10 left-4 right-4 flex justify-between items-center z-10 text-[11px] font-semibold text-white">
                  <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-neutral-700">
                    City • OpenStreetMap
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-neutral-700">
                    Rides / Drivers
                  </span>
                </div>

                {/* Simulated Male Driver Marker */}
                <div className="absolute top-1/2 left-1/4 -translate-y-8 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#8d6226] border-2 border-white flex items-center justify-center text-base shadow-lg animate-bounce">
                    👨
                  </div>
                  <span className="mt-1 px-2.5 py-0.5 rounded-full bg-white text-[10px] font-bold text-gray-800 shadow">
                    Male driver
                  </span>
                </div>

                {/* Simulated Female Driver Marker */}
                <div className="absolute top-2/3 right-1/4 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-[#ec4899] border-2 border-white flex items-center justify-center text-base shadow-lg animate-pulse">
                    👩
                  </div>
                  <span className="mt-1 px-2.5 py-0.5 rounded-full bg-white text-[10px] font-bold text-gray-800 shadow">
                    Female driver
                  </span>
                </div>

                {/* Bottom Stats Pills */}
                <div className="absolute bottom-6 left-4 right-4 flex justify-between items-center z-10 text-[11px] font-semibold text-white">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-neutral-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span>Live drivers nearby</span>
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-neutral-700">
                    3-5 min pick-up
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Legends & Badges */}
          <div className="lg:col-span-6 space-y-4">
            {/* Box 1: DRIVERS ON THE MAP */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-3">
                DRIVERS ON THE MAP
              </span>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#8d6226] inline-block shadow-sm" />
                  <span className="text-xs font-semibold text-gray-800">Male driver marker</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#ec4899] inline-block shadow-sm" />
                  <span className="text-xs font-semibold text-gray-800">Female driver marker</span>
                </div>
              </div>
              <p className="text-[11px] text-gray-400 mt-2">
                Markers can carry either a car or motorcycle icon depending on the vehicle selected by the provider.
              </p>
            </div>

            {/* Box 2: VEHICLES */}
            <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-3">
                VEHICLES
              </span>
              <div className="flex gap-4">
                <div className="flex items-center gap-3 px-4 py-2 rounded-xl border border-gray-200">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9e7638] to-[#785420] text-white flex items-center justify-center shadow-sm">
                    <Car size={16} />
                  </div>
                  <span className="text-xs font-bold text-gray-800">Car</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-xl border border-gray-200">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9e7638] to-[#785420] text-white flex items-center justify-center shadow-sm">
                    <Bike size={16} />
                  </div>
                  <span className="text-xs font-bold text-gray-800">Motorcycle</span>
                </div>
              </div>
            </div>

            {/* Box 3 & 4: COMMUNICATION & PAYMENTS (2 Cols) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Communication */}
              <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm space-y-2.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                  COMMUNICATION
                </span>
                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 bg-gray-50/50">
                  <div className="w-8 h-8 rounded-lg bg-amber-700/80 text-white flex items-center justify-center">
                    <MessageSquare size={16} />
                  </div>
                  <span className="text-xs font-bold text-gray-800">In-app chat</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 bg-gray-50/50">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
                    <MessageCircle size={16} />
                  </div>
                  <span className="text-xs font-bold text-gray-800">WhatsApp</span>
                </div>
              </div>

              {/* Payments */}
              <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm space-y-2.5">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                  PAYMENTS
                </span>
                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 bg-gray-50/50">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 text-[#dfb56b] flex items-center justify-center">
                    <CreditCard size={16} />
                  </div>
                  <span className="text-xs font-bold text-gray-800">Card</span>
                </div>
                <div className="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 bg-gray-50/50">
                  <div className="w-8 h-8 rounded-lg bg-neutral-800 text-emerald-400 flex items-center justify-center">
                    <Banknote size={16} />
                  </div>
                  <span className="text-xs font-bold text-gray-800">Cash</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-gray-400 leading-relaxed pt-2">
              The final ALLOGO app will reuse these same colors and icons, so riders instantly understand who is nearby, how to contact them and how they can pay.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. MODALS POPUP (Book a Ride & Become a Driver) */}
      {/* ========================================================= */}
      <AnimatePresence>
        {isRideModalOpen && (
          <BookYourRideModal onClose={() => setIsRideModalOpen(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isDriverModalOpen && (
          <BecomeDriverModal onClose={() => setIsDriverModalOpen(false)} />
        )}
      </AnimatePresence>

    </div>
  );
};

export default RideInterfaceView;