import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Lock, Eye, EyeOff, X } from 'lucide-react';

const LoginModal = ({ onClose, onSwitchToSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-3 sm:p-4 overflow-y-auto select-none">
      {/* Dark Backdrop Overlay (Clicking outside closes modal) */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm sm:max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#c59a53]/40 z-10 my-auto flex flex-col"
      >
        {/* Top Dark Header (Screenshot 1:1) */}
        <div className="bg-[#111111] px-6 pt-7 pb-5 text-center relative border-b border-neutral-800 flex-shrink-0">
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 w-7 h-7 rounded-full bg-neutral-800 hover:bg-neutral-700 text-gray-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>

          <h3 className="text-xl sm:text-2xl font-extrabold tracking-wider text-[#d2a356] uppercase">
            Welcome Back
          </h3>
          <div className="w-48 h-[1px] bg-[#d2a356]/40 mx-auto my-2" />
          <p className="text-xs sm:text-sm text-gray-300 font-normal">
            Sign in to your account
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={(e) => e.preventDefault()} className="p-6 sm:p-7 space-y-4">
          {/* Phone Number Field */}
          <div>
            <label className="block text-xs font-semibold text-[#8d6226] mb-1.5">
              Phone Number
            </label>
            <div className="relative flex items-center">
              <Phone size={18} className="absolute left-3.5 text-[#b68840]" />
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full pl-10 pr-4 py-2.5 sm:py-3 text-xs sm:text-sm rounded-xl border border-amber-300/80 focus:border-[#b68840] focus:ring-2 focus:ring-[#b68840]/20 outline-none transition-all placeholder:text-gray-400 bg-white text-gray-800"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-xs font-semibold text-[#8d6226] mb-1.5">
              Password
            </label>
            <div className="relative flex items-center">
              <Lock size={18} className="absolute left-3.5 text-[#b68840]" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
                className="w-full pl-10 pr-10 py-2.5 sm:py-3 text-xs sm:text-sm rounded-xl border border-amber-300/80 focus:border-[#b68840] focus:ring-2 focus:ring-[#b68840]/20 outline-none transition-all placeholder:text-gray-400 bg-white text-gray-800"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 text-gray-400 hover:text-[#b68840] transition-colors cursor-pointer"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-xs pt-0.5">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-amber-300 accent-[#8d6226] cursor-pointer"
              />
              <span>Remember Me</span>
            </label>

            <button
              type="button"
              className="text-gray-500 hover:text-[#8d6226] hover:underline transition-colors cursor-pointer"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer mt-3"
          >
            Login
          </button>

          {/* Switch to Sign Up */}
          <p className="text-center text-xs text-gray-600 pt-2">
            Don’t have an account?{' '}
            <button
              type="button"
              onClick={onSwitchToSignUp}
              className="text-[#8d6226] hover:underline font-bold cursor-pointer"
            >
              Sign Up
            </button>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginModal;