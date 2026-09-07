import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Phone, 
  Mail, 
  Lock, 
  Tag, 
  Eye, 
  EyeOff, 
  X 
} from 'lucide-react';

const SignUpModal = ({ onClose, onSwitchToLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none">
      {/* Background Dark Overlay */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#c59a53]/50 z-10 my-auto"
      >
        {/* Cross Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5 pt-1">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-[#8d6226] mb-1">
              Full Name
            </label>
            <div className="relative flex items-center">
              <User size={18} className="absolute left-3.5 text-[#b68840]" />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-amber-300/80 focus:border-[#b68840] focus:ring-2 focus:ring-[#b68840]/20 outline-none transition-all placeholder:text-gray-400 bg-white"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-[#8d6226] mb-1">
              Phone Number
            </label>
            <div className="relative flex items-center">
              <Phone size={18} className="absolute left-3.5 text-[#b68840]" />
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-amber-300/80 focus:border-[#b68840] focus:ring-2 focus:ring-[#b68840]/20 outline-none transition-all placeholder:text-gray-400 bg-white"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-[#8d6226] mb-1">
              Email
            </label>
            <div className="relative flex items-center">
              <Mail size={18} className="absolute left-3.5 text-[#b68840]" />
              <input
                type="email"
                placeholder="Enter email"
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-amber-300/80 focus:border-[#b68840] focus:ring-2 focus:ring-[#b68840]/20 outline-none transition-all placeholder:text-gray-400 bg-white"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-semibold text-[#8d6226] mb-1">
              Password
            </label>
            <div className="relative flex items-center">
              <Lock size={18} className="absolute left-3.5 text-[#b68840]" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-amber-300/80 focus:border-[#b68840] focus:ring-2 focus:ring-[#b68840]/20 outline-none transition-all placeholder:text-gray-400 bg-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-400 hover:text-[#b68840] transition-colors cursor-pointer"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs font-semibold text-[#8d6226] mb-1">
              Confirm Password
            </label>
            <div className="relative flex items-center">
              <Lock size={18} className="absolute left-3.5 text-[#b68840]" />
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Re-enter password"
                className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm rounded-xl border border-amber-300/80 focus:border-[#b68840] focus:ring-2 focus:ring-[#b68840]/20 outline-none transition-all placeholder:text-gray-400 bg-white"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 text-gray-400 hover:text-[#b68840] transition-colors cursor-pointer"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Referral Code */}
          <div>
            <label className="block text-xs font-semibold text-[#8d6226] mb-1">
              Referral Code (optional)
            </label>
            <div className="relative flex items-center">
              <Tag size={18} className="absolute left-3.5 text-[#b68840]" />
              <input
                type="text"
                placeholder="Enter referral code"
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-amber-300/80 focus:border-[#b68840] focus:ring-2 focus:ring-[#b68840]/20 outline-none transition-all placeholder:text-gray-400 bg-white"
              />
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="terms-check"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 rounded border-amber-300 accent-[#8d6226] cursor-pointer"
            />
            <label htmlFor="terms-check" className="text-[11px] sm:text-xs text-gray-600 cursor-pointer select-none">
              I agree to the <span className="text-[#8d6226] hover:underline font-medium">Terms & Conditions</span> and <span className="text-[#8d6226] hover:underline font-medium">Privacy Policy</span>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-md hover:shadow-lg transition-all cursor-pointer mt-2"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-xs text-gray-600 pt-1">
            Already have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              className="text-[#8d6226] hover:underline font-bold cursor-pointer"
            >
              Login
            </button>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUpModal;