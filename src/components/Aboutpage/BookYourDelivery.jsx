import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Utensils, 
  Pill, 
  Package, 
  ShoppingBag, 
  Box, 
  Clock, 
  Calendar,
  X 
} from 'lucide-react';

const deliveryTypes = [
  { id: 'Food', label: 'Food', icon: Utensils },
  { id: 'Pharmacy', label: 'Pharmacy', icon: Pill },
  { id: 'Packages', label: 'Packages', icon: Package },
  { id: 'Products', label: 'Products', icon: ShoppingBag },
  { id: 'Other', label: 'Other', icon: Box },
];

const BookYourDelivery = ({ onClose }) => {
  const [selectedType, setSelectedType] = useState('Food');
  const [weight, setWeight] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [budget, setBudget] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-sm overflow-y-auto select-none"
    >
      <motion.div 
        initial={{ scale: 0.94, y: 25, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.94, y: 20, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto border border-gray-100"
      >
        {/* Dark Top Header */}
        <div className="relative bg-[#0d0d0d] py-5 px-6 text-center border-b border-neutral-800">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-[#bfa054]">
            Book Your Delivery
          </h2>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-gray-400 hover:text-white hover:bg-neutral-800 transition-all cursor-pointer"
            >
              <X size={20} />
            </button>
          )}
        </div>

        {/* Form Body */}
        <div className="p-5 sm:p-8 space-y-5 sm:space-y-6 max-h-[82vh] overflow-y-auto">
          
          {/* Select Delivery Type */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2.5">
              Select Delivery Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {deliveryTypes.map((item) => {
                const Icon = item.icon;
                const isSelected = selectedType === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedType(item.id)}
                    className={`flex flex-col items-center justify-center py-3.5 px-2 rounded-xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-[#bfa054] bg-[#fdfbf6] shadow-sm ring-1 ring-[#bfa054]/30'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50/70 bg-white'
                    }`}
                  >
                    <Icon 
                      size={22} 
                      className={`mb-1.5 transition-transform duration-200 ${
                        isSelected ? 'text-[#a17c30] scale-110' : 'text-[#7d5e28]'
                      }`} 
                    />
                    <span className={`text-xs font-semibold ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Weight */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5">
              Weight
            </label>
            <input 
              type="text"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter weight (e.g., 2kg, 500g)"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#bfa054] focus:ring-2 focus:ring-[#bfa054]/20 transition-all bg-white"
            />
          </div>

          {/* Pickup & Drop-off */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5">
              Pickup & Drop-off
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input 
                type="text"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Pickup location"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#bfa054] focus:ring-2 focus:ring-[#bfa054]/20 transition-all bg-white"
              />
              <input 
                type="text"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                placeholder="Drop-off location"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#bfa054] focus:ring-2 focus:ring-[#bfa054]/20 transition-all bg-white"
              />
            </div>
          </div>

          {/* Your Budget / Price */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5">
              Your Budget / Price
            </label>
            <div className="flex items-center rounded-xl border border-gray-200 overflow-hidden focus-within:border-[#bfa054] focus-within:ring-2 focus-within:ring-[#bfa054]/20 transition-all bg-white">
              <span className="px-3.5 py-2.5 text-xs sm:text-sm font-bold text-gray-600 border-r border-gray-100 bg-gray-50/50 select-none">
                PKR
              </span>
              <input 
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="Enter your price (e.g. 500)"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Schedule Delivery (Optional) */}
          <div className="p-4 sm:p-5 rounded-2xl border border-gray-200/90 bg-white">
            <div className="flex items-center gap-2 mb-3.5 text-gray-900 font-semibold text-xs sm:text-sm">
              <Clock size={16} className="text-[#a17c30]" />
              <span>Schedule Delivery (Optional)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-gray-700 mb-1">
                  <Calendar size={13} className="text-gray-500" />
                  <span>Select Date</span>
                </label>
                <input 
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs text-gray-700 focus:outline-none focus:border-[#bfa054] focus:ring-1 focus:ring-[#bfa054]/20 transition-all bg-white"
                />
              </div>

              <div>
                <label className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-gray-700 mb-1">
                  <Clock size={13} className="text-gray-500" />
                  <span>Select Time</span>
                </label>
                <input 
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 text-xs text-gray-700 focus:outline-none focus:border-[#bfa054] focus:ring-1 focus:ring-[#bfa054]/20 transition-all bg-white"
                />
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="flex justify-end pt-2">
            <button
              type="button"
              className="px-8 sm:px-10 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_18px_rgba(182,136,64,0.35)] hover:shadow-[0_8px_24px_rgba(197,154,83,0.45)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Continue
            </button>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookYourDelivery;