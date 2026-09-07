import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const sectionFade = {
  hidden: { opacity: 0, y: 35 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 }
  }
};

const cardPop = {
  hidden: { opacity: 0, scale: 0.94, y: 25 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  }
};

const commissionCards = [
  {
    rate: '9%',
    title: 'VTC Transport',
    desc: 'Passenger Transport',
    badge: 'Premium',
    badgeColor: 'bg-[#b68840] text-white',
  },
  {
    rate: '5%',
    title: 'Vehicle Rental',
    desc: 'Car & scooter rentals',
    badge: 'Standard',
    badgeColor: 'bg-stone-200 text-stone-700',
    highlightTitle: true,
  },
  {
    rate: '5%',
    title: 'Delivery Services',
    desc: 'Packages & food delivery',
    badge: 'Standard',
    badgeColor: 'bg-stone-200 text-stone-700',
  },
  {
    rate: '5%',
    title: 'Road Assistance',
    desc: 'Emergency services',
    badge: 'Essential',
    badgeColor: 'bg-blue-100 text-blue-600',
  }
];

const Model = ({ onOpenSignUp, onOpenLogin }) => {
  return (
    <section id="model-section" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#fbf9f5] select-none overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Sustainable <span className="text-[#c59a53]">Business Model</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
            Fair commissions supporting platform growth while providing value to service providers
          </p>
        </motion.div>

        {/* 4 Commission Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {commissionCards.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardPop}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-200/70 shadow-sm hover:shadow-xl hover:border-[#c59a53] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#c59a53] tracking-tight">
                    {item.rate}
                  </span>
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className={`text-base sm:text-lg font-bold mb-1 ${item.highlightTitle ? 'text-[#c59a53]' : 'text-neutral-900'}`}>
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <span className="text-[11px] font-medium text-gray-500">
                  Platform commission rate
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Info */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1f2937] leading-tight">
                Ready to Transform
              </h3>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#d2a356] leading-tight">
                Service Experience?
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Join ALLOGO today as a user, driver, courier, or partner.
            </p>

            <div className="space-y-4 pt-2">
              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 transition-transform">
                <div className="w-11 h-11 rounded-2xl bg-[#936c2e] text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 block font-medium">WhatsApp Support</span>
                  <span className="text-xs sm:text-sm font-bold text-gray-800">1234 5678 890</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 transition-transform">
                <div className="w-11 h-11 rounded-2xl bg-[#936c2e] text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 block font-medium">Email</span>
                  <span className="text-xs sm:text-sm font-bold text-gray-800">contact@allogo.dz</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 transition-transform">
                <div className="w-11 h-11 rounded-2xl bg-[#936c2e] text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[11px] text-gray-400 block font-medium">Phone</span>
                  <span className="text-xs sm:text-sm font-bold text-gray-800">1234 5678 890</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side "Get Started Now" Card */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl max-w-md mx-auto space-y-6">
              <h4 className="text-xl sm:text-2xl font-bold text-[#8d6226]">
                Get Started Now
              </h4>

              <div className="space-y-3.5">
                {/* Sign Up Free Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => {
                    if (onOpenSignUp) onOpenSignUp();
                  }}
                  className="w-full py-3.5 px-4 rounded-2xl border-2 border-[#8d6226] text-[#8d6226] font-bold text-xs sm:text-sm hover:bg-[#8d6226] hover:text-white transition-all duration-200 cursor-pointer shadow-sm text-center"
                >
                  Sign Up Free
                </motion.button>

                {/* Login to Account Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => {
                    if (onOpenLogin) onOpenLogin();
                  }}
                  className="w-full py-3.5 px-4 rounded-2xl border-2 border-[#8d6226] text-[#8d6226] font-bold text-xs sm:text-sm hover:bg-[#8d6226] hover:text-white transition-all duration-200 cursor-pointer shadow-sm text-center"
                >
                  Login to Account
                </motion.button>

                {/* Explore Services */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#6e4e1f] via-[#a37835] to-[#dfb56b] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer text-center"
                >
                  Explore Services
                </motion.button>
              </div>

              <div className="pt-4 border-t border-gray-100 text-center">
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  <span className="font-bold text-[#8d6226]">All commissions</span> reinvested in platform development & user experience
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Model;