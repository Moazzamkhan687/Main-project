import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Truck, 
  MapPin, 
  Edit3, 
  Trash2, 
  Info, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  Banknote, 
  Wallet, 
  Camera, 
  PenTool, 
  Lock, 
  ShieldCheck, 
  Phone, 
  FileText, 
  MessageSquare, 
  PhoneCall, 
  Download, 
  Navigation,
  RefreshCw
} from 'lucide-react';

// Repeated Scroll Animation Variants
const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.65, ease: [0.25, 1, 0.5, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 }
  }
};

const cardPop = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.55, ease: [0.25, 1, 0.5, 1] } 
  }
};

const driversData = [
  { name: 'Ali Khan', vehicle: 'Motorbike', loc: 'Downtown', dist: '0.2km', status: 'Available Now', online: true, img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80' },
  { name: 'Sara Ahmed', vehicle: 'Car', loc: 'City Center', dist: '1.5km', status: 'Available Now', online: true, img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80' },
  { name: 'Omar Farooq', vehicle: 'Scooter', loc: 'Uptown', dist: '0.0km', status: 'Available Now', online: true, img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=300&q=80' },
  { name: 'Hina Ali', vehicle: 'Bike', loc: 'Midtown', dist: '1.9km', status: 'Offline', online: false, img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80' },
  { name: 'Bilal Khan', vehicle: 'Car', loc: 'Suburbs', dist: '1.2km', status: 'Available Now', online: true, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80' },
  { name: 'Fatima Noor', vehicle: 'Motorbike', loc: 'Downtown', dist: '0.3km', status: 'Available Now', online: true, img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80' }
];

const stages = [
  { title: 'Request Received', status: 'Completed' },
  { title: 'Driver Assigned', status: 'Completed' },
  { title: 'Driver Arrived', status: 'Completed' },
  { title: 'Picked Up', status: 'Completed' },
  { title: 'On the Way', status: 'Completed' },
  { title: 'Delivered', status: 'In Progress' }
];

const PackageDeliveryView = ({ onBack }) => {
  const [selectedPayment, setSelectedPayment] = useState('cash');
  const [selectedProof, setSelectedProof] = useState('photo');

  return (
    <div className="w-full min-h-screen bg-[#fcfaf7] text-[#111827] overflow-x-hidden relative select-none">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[75vh] sm:h-[84vh] min-h-[520px] flex items-center justify-center overflow-hidden bg-black">
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=2000&q=85"
            alt="Delivery Fast Background"
            className="w-full h-full object-cover object-center brightness-50 contrast-105"
          />
        </motion.div>

        {/* Ambient App Glows with continuous float */}
        <div className="absolute inset-0 flex items-center justify-around pointer-events-none opacity-40">
          <motion.div 
            animate={{ y: [-15, 15, -15], scale: [1, 1.1, 1] }} 
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} 
            className="w-36 h-36 rounded-full bg-emerald-500/50 blur-2xl" 
          />
          <motion.div 
            animate={{ y: [15, -15, 15], scale: [1, 1.15, 1] }} 
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} 
            className="w-52 h-52 rounded-full bg-amber-400/40 blur-3xl" 
          />
          <motion.div 
            animate={{ y: [-20, 20, -20], scale: [1.1, 1, 1.1] }} 
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} 
            className="w-44 h-44 rounded-full bg-sky-500/40 blur-2xl" 
          />
        </div>

        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        {onBack && (
          <motion.button
            whileHover={{ scale: 1.08, x: -4 }}
            whileTap={{ scale: 0.94 }}
            type="button"
            onClick={onBack}
            className="absolute top-6 left-6 z-30 flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full bg-black/70 border border-neutral-700 text-gray-200 hover:text-white hover:border-[#c69a53] transition-all cursor-pointer backdrop-blur-md shadow-lg"
          >
            <ArrowLeft size={16} />
            <span>Back to Services</span>
          </motion.button>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-lg text-white">
            Fast <span className="text-[#c69a53]">Delivery</span> for Food
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-base md:text-lg text-gray-300 font-normal tracking-wide drop-shadow max-w-2xl">
            All-in-one delivery platform for orders, errands, pickups and logistics.
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:shadow-[0_8px_25px_rgba(182,136,64,0.45)] transition-all cursor-pointer"
            >
              Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#dfb56b] bg-black/40 border border-[#c69a53] hover:bg-[#c69a53]/20 shadow-md transition-all cursor-pointer"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* 2. REAL-TIME DRIVER AVAILABILITY */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.2 }} 
          variants={sectionFade} 
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Truck size={26} className="text-[#8d6226]" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#8d6226]">
              Real-Time Driver Availability
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">Live tracking of nearby delivery drivers. Status updates every 5 seconds.</p>

          <div className="mt-6 flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#7a5521] to-[#dfb56b] shadow-md hover:shadow-lg flex items-center gap-2 transition-all cursor-pointer"
            >
              <MapPin size={14} /> Assign Nearest Driver
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.15 }} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {driversData.map((driver, idx) => (
            <motion.div 
              key={idx}
              variants={cardPop}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 border border-amber-200/60 shadow-sm hover:shadow-[0_12px_30px_rgba(197,154,83,0.22)] hover:border-[#c59a53] text-center flex flex-col items-center transition-all duration-300 group cursor-pointer"
            >
              <div className="relative mb-3">
                <img src={driver.img} alt={driver.name} className="w-16 h-16 rounded-full object-cover border-2 border-amber-100 shadow-sm group-hover:scale-105 transition-transform duration-300" />
                <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${driver.online ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-0.5 group-hover:text-[#8d6226] transition-colors">{driver.name}</h3>
              <span className="text-xs text-gray-500 mb-2">{driver.vehicle}</span>
              <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                <MapPin size={12} className="text-red-500" />
                <span>{driver.loc} • <b className="text-gray-800">{driver.dist}</b></span>
              </div>
              <span className={`text-xs font-semibold mb-4 flex items-center gap-1.5 ${driver.online ? 'text-emerald-600' : 'text-red-500'}`}>
                <span className={`w-2 h-2 rounded-full ${driver.online ? 'bg-emerald-500' : 'bg-red-500'}`} />
                {driver.status}
              </span>

              <div className="flex items-center gap-2 pt-2">
                <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} className="w-8 h-8 rounded-lg bg-amber-100/70 text-amber-700 flex items-center justify-center hover:bg-amber-200 transition-colors"><Edit3 size={14} /></motion.button>
                <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} className="w-8 h-8 rounded-lg bg-red-100/70 text-red-600 flex items-center justify-center hover:bg-red-200 transition-colors"><Trash2 size={14} /></motion.button>
                <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }} className="w-8 h-8 rounded-lg bg-sky-100/70 text-sky-600 flex items-center justify-center hover:bg-sky-200 transition-colors"><Info size={14} /></motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1.5">
          <RefreshCw size={12} className="text-sky-500 animate-spin" /> Real-time updates active • 5 drivers online
        </p>
      </section>

      {/* 3. LIVE DELIVERY TRACKING & STATUS */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.2 }} 
          variants={sectionFade} 
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">🚚</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#8d6226]">Live Delivery Tracking & Status</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">Real-time tracking with automatic status updates</p>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.2 }} 
          variants={sectionFade}
          whileHover={{ y: -4 }}
          className="bg-white rounded-3xl p-6 border border-amber-200 shadow-sm hover:shadow-lg transition-all flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80" alt="Driver" className="w-16 h-16 rounded-full object-cover border border-amber-200" />
              <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Ali Khan</h3>
              <p className="text-xs text-gray-500">🏍 Vehicle: Motorbike</p>
              <p className="text-xs text-gray-500 flex items-center gap-1"><MapPin size={12} className="text-red-500" /> Live Location: Lat 36.702, Lng 3.212</p>
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs text-emerald-600 font-semibold flex items-center justify-end gap-1 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Real-time GPS Active
            </span>
            <span className="px-4 py-1.5 rounded-full text-xs font-bold text-[#8d6226] bg-amber-50 border border-amber-200">
              Stage 6 of 6
            </span>
          </div>
        </motion.div>

        {/* Current Status Bar */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionFade}
          whileHover={{ scale: 1.01 }}
          className="rounded-2xl bg-gradient-to-r from-[#946e30] via-[#b88c42] to-[#785420] text-white p-3.5 text-center font-bold text-sm mb-8 flex items-center justify-center gap-3 shadow-md"
        >
          <span>Current Status:</span>
          <span className="px-4 py-1 rounded-xl bg-white/20 text-white font-semibold backdrop-blur-sm">Delivered</span>
        </motion.div>

        {/* Timeline Checklist */}
        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.15 }} 
          className="relative pl-6 space-y-5"
        >
          <div className="absolute left-10 top-4 bottom-4 w-[2px] bg-amber-200/80" />
          {stages.map((stage, idx) => (
            <motion.div 
              key={idx} 
              variants={cardPop}
              whileHover={{ x: 6, scale: 1.01 }}
              className="relative flex items-center justify-between bg-white p-4 rounded-2xl border border-amber-100 shadow-sm hover:border-[#c59a53] hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 text-white font-bold text-xs shadow-md transition-transform ${stage.status === 'Completed' ? 'bg-[#8d6226]' : 'bg-amber-400 animate-pulse'}`}>
                  ✓
                </div>
                <h4 className="text-sm font-bold text-gray-900">{stage.title}</h4>
              </div>
              <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${stage.status === 'Completed' ? 'bg-amber-100/70 text-[#8d6226]' : 'bg-amber-50 text-amber-600 border border-amber-300'}`}>
                {stage.status}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. LIVE DRIVER LOCATION MAP */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.2 }} 
          variants={sectionFade} 
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin size={24} className="text-red-500" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#8d6226]">Live Driver Location</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">Real-time GPS tracking on map</p>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.2 }} 
          variants={sectionFade}
          className="relative rounded-3xl overflow-hidden border-2 border-amber-300 shadow-xl h-96 group"
        >
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80" 
            alt="Map Preview" 
            className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Pulsing Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <span className="w-8 h-8 rounded-full bg-red-500 animate-ping absolute" />
            <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl relative z-10 border-2 border-white">
              <MapPin size={20} />
            </div>
          </div>

          {/* Map Tooltip Card */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-amber-200 shadow-lg text-xs"
          >
            <div className="flex items-center gap-2 font-bold text-gray-900 mb-1">
              <Navigation size={14} className="text-red-500" />
              <span>Driver Location</span>
            </div>
            <div className="text-gray-500 font-mono">Lat: 36.7020</div>
            <div className="text-gray-500 font-mono">Lng: 3.2120</div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionFade}
          className="mt-4 p-3 bg-white rounded-2xl border border-amber-100 shadow-sm text-center text-xs text-gray-600 flex flex-wrap items-center justify-center gap-4"
        >
          <span className="flex items-center gap-1.5"><RefreshCw size={12} className="text-sky-500" /> Auto-updating every 4 seconds</span>
          <span>•</span>
          <span className="font-bold text-gray-800">6 of 6 stages completed</span>
          <span>•</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Completed</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> In Progress</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-400" /> Pending</span>
        </motion.div>
      </section>

      {/* 5. PRICING & PAYMENT */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.2 }} 
          variants={sectionFade} 
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <CreditCard size={24} className="text-[#8d6226]" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#8d6226]">Pricing & Payment</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">Auto-calculated delivery fee with transparent breakdown</p>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.2 }} 
          variants={sectionFade} 
          className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm hover:shadow-md transition-all"
        >
          <h3 className="text-base font-bold text-gray-900 mb-6 flex items-center gap-2">
            📊 Delivery Fee Breakdown
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { label: 'Distance (12 km)', cost: '60 DZD', icon: MapPin, color: 'text-red-500' },
              { label: 'Time (25 mins)', cost: '40 DZD', icon: Clock, color: 'text-amber-600' },
              { label: 'Vehicle Type', cost: 'Motorbike', icon: Truck, color: 'text-sky-600', isBold: true },
              { label: 'Base Fee', cost: '150 DZD', icon: Wallet, color: 'text-amber-600' }
            ].map((fee, i) => {
              const FeeIcon = fee.icon;
              return (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 flex items-center justify-between transition-all"
                >
                  <div>
                    <span className="text-xs font-semibold text-gray-800 flex items-center gap-1.5">
                      <FeeIcon size={14} className={fee.color} /> {fee.label}
                    </span>
                    <span className="text-[10px] text-gray-400 block">Auto-calculated</span>
                  </div>
                  <span className={`text-sm font-bold ${fee.isBold ? 'text-[#8d6226]' : 'text-gray-900'}`}>
                    {fee.cost}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="p-5 rounded-2xl bg-[#faf5ec] border border-amber-200 flex items-center justify-between mb-8 shadow-sm"
          >
            <div>
              <h4 className="text-base font-bold text-gray-900">Total Amount</h4>
              <p className="text-xs text-gray-500">Including all fees</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-extrabold text-[#8d6226]">250 DZD</span>
              <span className="text-[10px] text-gray-400 block">Algerian Dinar</span>
            </div>
          </motion.div>

          <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
            💳 Payment Options
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { id: 'cash', label: 'Cash', icon: Banknote },
              { id: 'card', label: 'Card', icon: CreditCard, color: 'text-sky-500' },
              { id: 'wallet', label: 'Wallet / Balance', icon: Wallet, color: 'text-rose-500' }
            ].map((pay) => {
              const PayIcon = pay.icon;
              const isSelected = selectedPayment === pay.id;
              return (
                <motion.div 
                  key={pay.id}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedPayment(pay.id)}
                  className={`p-5 rounded-2xl border text-center cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-gradient-to-br from-[#7a5521] via-[#b68840] to-[#dfb56b] text-white shadow-lg' 
                      : 'bg-white border-gray-200 text-gray-700 hover:border-[#c59a53]'
                  }`}
                >
                  <PayIcon size={24} className={`mx-auto mb-2 ${isSelected ? 'text-white' : pay.color || ''}`} />
                  <h5 className="font-bold text-sm">{pay.label}</h5>
                  {isSelected && <span className="text-[10px] opacity-90 block mt-0.5">✓ Selected</span>}
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center">
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              ✓ Confirm Payment of 250 DZD
            </motion.button>
          </div>
        </motion.div>

        <p className="text-center text-xs text-gray-500 mt-4">
          💡 All fees are auto-calculated based on distance, time, and vehicle type. <b className="text-gray-800">No hidden charges.</b>
        </p>
      </section>

      {/* 6. PROOF OF DELIVERY */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.2 }} 
          variants={sectionFade} 
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <CheckCircle2 size={24} className="text-emerald-500" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#8d6226]">Proof of Delivery</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">Secure delivery verification methods</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.15 }} 
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
        >
          {[
            { id: 'photo', title: 'Upload Photo', desc: 'Driver uploads photo of delivered item to confirm delivery.', icon: Camera, btn: 'Upload Photo' },
            { id: 'signature', title: 'Customer Signature', desc: 'Collect signature as proof of successful delivery.', icon: PenTool, btn: 'Signature' },
            { id: 'otp', title: 'OTP Verification', desc: 'Delivery code/OTP required to verify completion securely.', icon: Lock, btn: 'Verify OTP' }
          ].map((item) => {
            const ItemIcon = item.icon;
            const isSelected = selectedProof === item.id;
            return (
              <motion.div 
                key={item.id}
                variants={cardPop}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedProof(item.id)}
                className={`bg-white rounded-3xl p-6 border text-center flex flex-col items-center justify-between cursor-pointer transition-all duration-300 ${
                  isSelected ? 'border-[#b68840] shadow-lg ring-2 ring-[#b68840]/30' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#faf5ec] text-[#b68840] flex items-center justify-center mb-4 mx-auto relative">
                    <ItemIcon size={22} />
                    {isSelected && <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border border-white" />}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6">{item.desc}</p>
                </div>
                <button className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  isSelected ? 'text-white bg-[#8d6226]' : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                }`}>
                  {item.btn}
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionFade}
          whileHover={{ scale: 1.01 }}
          className="bg-white rounded-2xl p-4 border border-amber-200 flex items-center justify-between shadow-sm mb-4"
        >
          <div>
            <h5 className="text-xs font-bold text-gray-900">
              Selected: {selectedProof === 'photo' ? 'Photo Upload' : selectedProof === 'signature' ? 'Customer Signature' : 'OTP Verification'}
            </h5>
            <p className="text-[11px] text-gray-500">Confirm delivery with selected verification method</p>
          </div>
          <motion.button whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }} className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#8d6226] flex items-center gap-1.5 shadow">
            ✓ Confirm Delivery
          </motion.button>
        </motion.div>

        <p className="text-center text-xs text-gray-500">
          🔒 All verification methods are securely encrypted and stored for delivery proof.
        </p>
      </section>

      {/* 7. SAFETY & SECURITY */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.2 }} 
          variants={sectionFade} 
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Lock size={24} className="text-[#8d6226]" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#8d6226]">Safety & Security</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
            Deliveries are secure with privacy for both customers and drivers. Insurance coverage is included, and support is always available for any delivery-related concerns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative rounded-3xl overflow-hidden border border-amber-200 shadow-lg group"
          >
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80" alt="Handshake" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" />
            <span className="absolute bottom-4 right-4 px-3 py-1.5 rounded-xl bg-black/70 text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-sm">
              <ShieldCheck size={14} className="text-amber-400" /> 24/7 Security
            </span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-white rounded-2xl p-4 border border-amber-200 grid grid-cols-3 text-center shadow-sm">
              <div>
                <span className="text-xl font-extrabold text-gray-900 block">59+</span>
                <span className="text-[10px] text-gray-400">Issues Resolved</span>
              </div>
              <div className="border-x border-gray-100">
                <span className="text-xl font-extrabold text-gray-900 block">100%</span>
                <span className="text-[10px] text-gray-400">Privacy Protected</span>
              </div>
              <div>
                <span className="text-xl font-extrabold text-gray-900 block">24/7</span>
                <span className="text-[10px] text-gray-400">Support Available</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: 'Phone Masking', desc: 'Customer and driver numbers are masked to ensure privacy.', badge: '🔒 Privacy Protected', icon: Phone },
                { title: 'Insurance Coverage', desc: 'Basic insurance protects against lost or damaged goods.', badge: '📦 Up to 500,000 DZD', icon: FileText },
                { title: 'Report & Support', desc: 'Option to report issues or contact support anytime.', isBtn: true, btnText: 'Report Issue', icon: ShieldCheck }
              ].map((sec, idx) => {
                const SecIcon = sec.icon;
                return (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-5 border border-amber-100 shadow-sm text-center flex flex-col items-center justify-between hover:border-[#c59a53] transition-all"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-full bg-[#faf5ec] text-[#b68840] flex items-center justify-center mb-3">
                        <SecIcon size={18} />
                      </div>
                      <h4 className="text-xs font-bold text-gray-900 mb-1">{sec.title}</h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed mb-4">{sec.desc}</p>
                    </div>
                    {sec.isBtn ? (
                      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-1.5 rounded-xl text-xs font-semibold text-white bg-[#8d6226]">
                        {sec.btnText}
                      </motion.button>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold text-amber-800 bg-amber-50">{sec.badge}</span>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <div className="bg-white rounded-2xl p-4 border border-amber-200 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#faf5ec] text-[#b68840] flex items-center justify-center">
                  <PhoneCall size={16} />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-900">Need Help?</h5>
                  <p className="text-[11px] text-gray-500">Contact support: <b className="text-gray-800">+213 123 456 789</b></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. COMMUNICATION & HISTORY */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, amount: 0.2 }} 
          variants={sectionFade} 
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Phone size={24} className="text-[#8d6226]" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#8d6226]">Communication & History</h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-500">Real-time communication with drivers and complete delivery history</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Live Communication */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: false, amount: 0.2 }} 
              variants={sectionFade} 
              className="bg-white rounded-3xl p-6 border border-amber-200 shadow-sm space-y-4 hover:shadow-md transition-all"
            >
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                💬 Live Communication
              </h3>

              <motion.div whileHover={{ scale: 1.02 }} className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-[#8d6226]" />
                  <div>
                    <h5 className="text-xs font-bold text-gray-900">Live ETA Updates</h5>
                    <span className="text-[10px] text-gray-400">Updated in real-time</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-extrabold text-[#8d6226]">15 min</span>
                  <span className="text-[10px] text-gray-400 block">Arrival Time</span>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div whileHover={{ y: -3 }} className="p-4 rounded-2xl bg-amber-50/40 border border-amber-100 text-center">
                  <div className="w-8 h-8 rounded-full bg-[#8d6226] text-white flex items-center justify-center mx-auto mb-2">
                    <MessageSquare size={14} />
                  </div>
                  <h5 className="text-xs font-bold text-gray-900 mb-1">In-app Chat</h5>
                  <p className="text-[10px] text-gray-400 mb-2">Message driver securely</p>
                  <span className="text-[9px] font-bold text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded-full">🔒 Encrypted</span>
                </motion.div>

                <motion.div whileHover={{ y: -3 }} className="p-4 rounded-2xl bg-amber-50/40 border border-amber-100 text-center">
                  <div className="w-8 h-8 rounded-full bg-[#8d6226] text-white flex items-center justify-center mx-auto mb-2">
                    <PhoneCall size={14} />
                  </div>
                  <h5 className="text-xs font-bold text-gray-900 mb-1">Direct Call</h5>
                  <p className="text-[10px] text-gray-400 mb-2">Call with masked number</p>
                  <span className="text-[9px] font-bold text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded-full">📞 Privacy Protected</span>
                </motion.div>
              </div>

              <p className="text-[11px] text-gray-500 text-center pt-2">
                <b className="text-gray-800">Live communication</b> with your driver ensures smooth delivery
              </p>
            </motion.div>
          </div>

          {/* Right: Delivery History */}
          <div className="lg:col-span-7 space-y-4">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: false, amount: 0.2 }} 
              variants={sectionFade} 
              className="bg-white rounded-3xl p-6 border border-amber-200 shadow-sm space-y-4"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                  📋 Delivery History
                </h3>
                <span className="text-xs text-gray-400 font-semibold">3 deliveries</span>
              </div>

              {[
                { date: '2025-11-28 • 14:30', status: 'Delivered', cost: '500 DZD', name: 'Ahmed Ali', vehicle: 'Motorbike', inv: '#INV1023' },
                { date: '2025-11-27 • 11:15', status: 'On the Way', cost: '350 DZD', name: 'Sara Khan', vehicle: 'Car', inv: '#INV1022' },
                { date: '2025-11-26 • 16:45', status: 'Delivered', cost: '700 DZD', name: 'Mohamed Farah', vehicle: 'Scooter', inv: '#INV1021' }
              ].map((rc, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 4, scale: 1.01 }}
                  className="p-4 rounded-2xl bg-amber-50/40 border border-amber-100 space-y-2 hover:border-[#c59a53] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {rc.date} 
                      <b className={`px-2 py-0.5 rounded-md text-[10px] ml-1.5 ${rc.status === 'Delivered' ? 'text-emerald-600 bg-emerald-50' : 'text-amber-600 bg-amber-50'}`}>
                        {rc.status}
                      </b>
                    </span>
                    <span className="text-sm font-extrabold text-[#8d6226]">{rc.cost}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <h5 className="font-bold text-gray-900">{rc.name}</h5>
                      <span className="text-[11px] text-gray-500">{rc.vehicle}</span>
                      <div className="flex text-amber-400 text-xs mt-0.5">★★★★★</div>
                    </div>
                    <span className="text-[10px] text-gray-400 font-mono">{rc.inv}</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-amber-100/60">
                    <span className="text-[10px] text-gray-400">Invoice available for download</span>
                    <motion.button whileHover={{ scale: 1.05 }} className="text-xs font-semibold text-[#8d6226] flex items-center gap-1 hover:underline">
                      <Download size={12} /> Download Receipt
                    </motion.button>
                  </div>
                </motion.div>
              ))}

              <div className="pt-4 flex justify-center">
                <motion.button 
                  whileHover={{ scale: 1.06, y: -2 }} 
                  whileTap={{ scale: 0.95 }} 
                  className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#8d6226] shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  View All Delivery History
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PackageDeliveryView;