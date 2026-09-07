import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Car, 
  User, 
  CheckCircle2, 
  UserPlus, 
  Clock, 
  Banknote, 
  X 
} from 'lucide-react';

const steps = [
  { id: 1, title: 'Book Ride & Pickup/Drop-off', icon: Car },
  { id: 2, title: 'Driver & Vehicle', icon: User },
  { id: 3, title: 'Confirm Your Order', icon: CheckCircle2 },
];

const bookingTypes = [
  { id: 'ride', label: 'Book a Ride', icon: Car },
  { id: 'someone', label: 'Book for Someone Else', icon: UserPlus },
  { id: 'schedule', label: 'Schedule Ride', icon: Clock },
];

const BookYourRideModal = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingType, setBookingType] = useState('ride');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [fare, setFare] = useState('');

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
        className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto border border-gray-100 flex flex-col"
      >
        {/* Dark Header Banner with Step Count */}
        <div className="relative bg-[#080808] py-5 px-6 text-center border-b border-neutral-800">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-[#bfa054]">
            Book Your Ride
          </h2>
          <p className="text-xs text-neutral-400 mt-0.5 font-medium">
            Step {currentStep} of 3
          </p>

          {/* Cross (X) Close Button - Sirf Modal Close karega */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-gray-400 hover:text-white hover:bg-neutral-800 transition-all cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-h-[82vh] overflow-y-auto">
          
          {/* Left Steps Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setCurrentStep(step.id)}
                  className={`w-full flex items-center gap-3.5 p-3 sm:p-4 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#946e30] via-[#b88c42] to-[#785420] text-white border-transparent shadow-md font-semibold'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-amber-300 hover:bg-amber-50/30'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-[#a17c30]'
                  }`}>
                    <Icon size={18} />
                  </div>
                  <span className="text-xs sm:text-sm">{step.title}</span>
                </div>
              );
            })}
          </div>

          {/* Right Form Container */}
          <div className="lg:col-span-8 p-5 sm:p-7 rounded-2xl border border-gray-200/90 bg-white space-y-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#bfa054]">
              Book Your Ride
            </h3>

            {/* Select Booking Type */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2.5">
                Select Booking Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {bookingTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = bookingType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setBookingType(type.id)}
                      className={`flex flex-col items-center justify-center py-4 px-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'border-[#bfa054] bg-[#fdfbf6] shadow-sm ring-1 ring-[#bfa054]/30 text-gray-900'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50/70 bg-white text-gray-700'
                      }`}
                    >
                      <Icon 
                        size={20} 
                        className={`mb-2 transition-transform duration-200 ${
                          isSelected ? 'text-[#a17c30] scale-110' : 'text-[#7d5e28]'
                        }`} 
                      />
                      <span className="text-xs font-semibold text-center leading-tight">
                        {type.label}
                      </span>
                    </button>
                  );
                })}
              </div>
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

            {/* Offer Your Fare */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-1.5">
                Offer Your Fare
              </label>
              <div className="flex items-center rounded-xl border border-gray-200 overflow-hidden focus-within:border-[#bfa054] focus-within:ring-2 focus-within:ring-[#bfa054]/20 transition-all bg-white">
                <div className="px-3.5 py-2.5 text-gray-500 border-r border-gray-100 bg-gray-50/50 flex items-center justify-center">
                  <Banknote size={18} />
                </div>
                <input 
                  type="text"
                  value={fare}
                  onChange={(e) => setFare(e.target.value)}
                  placeholder="Enter your offer (PKR)"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Continue Button */}
            <div className="flex justify-end pt-2">
              <button
                type="button"
                className="px-9 sm:px-11 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_18px_rgba(182,136,64,0.35)] hover:shadow-[0_8px_24px_rgba(197,154,83,0.45)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Continue
              </button>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookYourRideModal;