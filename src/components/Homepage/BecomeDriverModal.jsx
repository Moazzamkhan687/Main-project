import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Phone, 
  Car, 
  ChevronDown, 
  UploadCloud, 
  X 
} from 'lucide-react';

const BecomeDriverModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    whatsapp: '',
    vehicleType: '',
    driverGender: '',
    serviceType: '',
    vehiclePhoto: null,
    license: null,
    registration: null,
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      [field]: file ? file.name : null,
    }));
  };

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
        className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden my-auto border border-gray-100 flex flex-col"
      >
        {/* Dark Top Header */}
        <div className="relative bg-[#0d0d0d] py-6 px-6 text-center border-b border-neutral-800">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-[#bfa054]">
            Become a Driver
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 mt-1 font-normal tracking-wide">
            Register to drive with ALLOGO
          </p>

          {/* Cross (X) Button - Sirf Modal Close karega */}
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

        {/* Form Body */}
        <div className="p-5 sm:p-8 space-y-4 max-h-[82vh] overflow-y-auto">
          
          {/* Row 1: First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-800 mb-1">
                First Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a17c30]" size={16} />
                <input 
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#c59a53]/80 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c59a53]/20 bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-800 mb-1">
                Last Name
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a17c30]" size={16} />
                <input 
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#c59a53]/80 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c59a53]/20 bg-white transition-all"
                />
              </div>
            </div>
          </div>

          {/* Row 2: WhatsApp Number */}
          <div>
            <label className="block text-xs font-semibold text-gray-800 mb-1">
              WhatsApp Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a17c30]" size={16} />
              <input 
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="Enter WhatsApp number"
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-[#c59a53]/80 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c59a53]/20 bg-white transition-all"
              />
            </div>
          </div>

          {/* Row 3: Vehicle Type & Driver Gender */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-800 mb-1">
                Vehicle Type
              </label>
              <div className="relative">
                <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a17c30]" size={16} />
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-[#c59a53]/80 text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c59a53]/20 bg-white appearance-none cursor-pointer"
                >
                  <option value="">Select Vehicle Type</option>
                  <option value="bike">Motorcycle / Bike</option>
                  <option value="car">Car / Sedan</option>
                  <option value="rickshaw">Auto Rickshaw</option>
                  <option value="truck">Commercial Truck</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-800 mb-1">
                Driver Gender
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a17c30]" size={16} />
                <select
                  name="driverGender"
                  value={formData.driverGender}
                  onChange={handleChange}
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-[#c59a53]/80 text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c59a53]/20 bg-white appearance-none cursor-pointer"
                >
                  <option value="">Select Driver Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>
          </div>

          {/* Row 4: Service Type & Upload Vehicle Photo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-800 mb-1">
                Service Type
              </label>
              <div className="relative">
                <Car className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#a17c30]" size={16} />
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-[#c59a53]/80 text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#c59a53]/20 bg-white appearance-none cursor-pointer"
                >
                  <option value="">Select Service Type</option>
                  <option value="passenger">Passenger Ride</option>
                  <option value="delivery">Delivery & Logistics</option>
                  <option value="rental">Vehicle Rental</option>
                </select>
                <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-800 mb-1">
                Upload Vehicle Photo
              </label>
              <label className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-[#c59a53]/80 text-xs text-gray-600 bg-white hover:bg-gray-50/80 transition-all cursor-pointer overflow-hidden">
                <UploadCloud className="text-[#a17c30] shrink-0" size={18} />
                <span className="truncate">
                  {formData.vehiclePhoto || 'Choose File No file chosen'}
                </span>
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={(e) => handleFileChange(e, 'vehiclePhoto')}
                />
              </label>
            </div>
          </div>

          {/* Row 5: Upload License & Upload Registration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-800 mb-1">
                Upload License
              </label>
              <label className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-[#c59a53]/80 text-xs text-gray-600 bg-white hover:bg-gray-50/80 transition-all cursor-pointer overflow-hidden">
                <UploadCloud className="text-[#a17c30] shrink-0" size={18} />
                <span className="truncate">
                  {formData.license || 'Choose File No file chosen'}
                </span>
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={(e) => handleFileChange(e, 'license')}
                />
              </label>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-800 mb-1">
                Upload Vehicle Registration
              </label>
              <label className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-[#c59a53]/80 text-xs text-gray-600 bg-white hover:bg-gray-50/80 transition-all cursor-pointer overflow-hidden">
                <UploadCloud className="text-[#a17c30] shrink-0" size={18} />
                <span className="truncate">
                  {formData.registration || 'Choose File No file chosen'}
                </span>
                <input 
                  type="file" 
                  className="hidden" 
                  onChange={(e) => handleFileChange(e, 'registration')}
                />
              </label>
            </div>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="pt-2 flex items-start gap-2.5">
            <input 
              type="checkbox"
              id="allogo-terms"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              className="mt-0.5 rounded border-[#c59a53] text-[#a17c30] focus:ring-[#c59a53] cursor-pointer"
            />
            <label htmlFor="allogo-terms" className="text-[11px] sm:text-xs text-gray-500 leading-relaxed cursor-pointer select-none">
              I confirm I have read and accepted the ALLOGO terms. I understand ALLOGO is only a connecting platform and any incident or payment outside the app is my responsibility.
            </label>
          </div>

          {/* Submit Application Button */}
          <div className="flex justify-center pt-3">
            <button
              type="button"
              disabled={!formData.agreed}
              className={`px-8 sm:px-10 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white transition-all duration-200 shadow-md ${
                formData.agreed
                  ? 'bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] hover:scale-105 active:scale-95 cursor-pointer shadow-[0_4px_16px_rgba(182,136,64,0.35)]'
                  : 'bg-[#8f9ca8] cursor-not-allowed opacity-90'
              }`}
            >
              Submit Application
            </button>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default BecomeDriverModal;