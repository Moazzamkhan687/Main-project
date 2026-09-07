import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';

const Hero = ({ onViewMore, onContactClick }) => {
  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center bg-black overflow-hidden select-none">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=2000&q=85"
          alt="ALLOGO Hero Background"
          className="w-full h-full object-cover object-center brightness-40 contrast-110"
        />
      </motion.div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/80 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#dfb56b] bg-white/5 border border-[#c59a53]/30 backdrop-blur-md mb-6 uppercase tracking-wider"
        >
          All-In-One Mobility & Living Platform
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md"
        >
          Moving People, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3b76a] via-[#c59a53] to-[#8d6226]">
            Delivering Possibilities
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          ALLOGO connects transport, deliveries, roadside help, and apartment rentals across the nation with zero hassle and verified safety.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* View More Button */}
          <button
            type="button"
            onClick={onViewMore}
            className="px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            <span>View More</span>
            <ArrowRight size={16} />
          </button>

          {/* Contact Us Button */}
          <button
            type="button"
            onClick={onContactClick}
            className="px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-[#dfb56b] bg-white/10 hover:bg-white/20 border border-[#c59a53]/40 backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            <MessageSquare size={16} />
            <span>Contact Us</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;