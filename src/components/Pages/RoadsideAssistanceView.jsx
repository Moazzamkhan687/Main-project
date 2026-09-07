import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wrench, 
  Truck, 
  Battery, 
  Fuel, 
  Disc, 
  Key, 
  MapPin, 
  Sliders, 
  Users, 
  CreditCard, 
  Star, 
  Percent, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  PhoneCall, 
  HelpCircle, 
  MessageCircle, 
  Headphones, 
  FileText, 
  Check, 
  Coins,
  Download,
  UserCheck,
  X,
  ArrowLeft,
  Calendar,
  Navigation
} from 'lucide-react';

const RoadsideAssistanceView = ({ onOpenSignUp, onOpenLogin }) => {
  const [legalChecked, setLegalChecked] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'request_help' or 'view_services'
  const [selectedService, setSelectedService] = useState('Mechanic');

  // Browser Back Button Management for Modals
  useEffect(() => {
    const handlePopState = () => {
      if (activeModal) {
        setActiveModal(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeModal]);

  const handleOpenModal = (modalType) => {
    window.history.pushState({ modal: modalType }, '');
    setActiveModal(modalType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseModal = () => {
    window.history.back();
    setActiveModal(null);
  };

  return (
    <div className="w-full bg-[#fbf9f5] text-neutral-900 overflow-x-hidden select-none relative">
      
      {/* ========================================================
          1. HERO SECTION (Screenshot 1)
      ======================================================== */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=2000&q=85" 
            alt="Roadside Assistance"
            className="w-full h-full object-cover object-center brightness-45 contrast-110"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/65 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md"
          >
            Instant Roadside <span className="text-[#dfb56b]">Assistance</span>
          </motion.h1>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get immediate roadside support anywhere in the city—mechanics, towing, battery boost, flat tire replacement, and fuel delivery.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handleOpenModal('request_help')}
              className="px-8 py-3 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#dfb56b] to-[#f4d69a] hover:from-[#ebc37b] hover:to-[#ffe7b6] shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Request Help
            </button>

            <button
              type="button"
              onClick={() => handleOpenModal('view_services')}
              className="px-8 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              View Services
            </button>
          </div>

          <div className="flex items-center gap-2 mt-12">
            <span className="w-6 h-2 rounded-full bg-[#dfb56b]" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
          </div>
        </div>
      </section>

      {/* ========================================================
          2. CUTE & PREMIUM ROADSIDE SERVICES (Screenshot 2)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Cute & Premium <span className="text-[#c59a53]">Roadside Services</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Truck, title: "Towing Service", desc: "Vehicle towing to the nearest garage or your preferred location", features: ["24/7 Available", "All vehicle types", "GPS tracked"] },
            { icon: Wrench, title: "Mechanic On-site", desc: "Certified mechanics come to your location for repairs", features: ["Minor repairs", "Diagnostics", "Spare parts available"] },
            { icon: Battery, title: "Battery Service", desc: "Jump-start or battery replacement service", features: ["Jump-start", "Battery test", "Replacement"] },
            { icon: Fuel, title: "Fuel Delivery", desc: "Emergency fuel delivery when you run out", features: ["Petrol/Diesel", "Quick delivery", "Safety measures"] },
            { icon: Disc, title: "Tire Service", desc: "Flat tire repair or replacement on the spot", features: ["Tire change", "Puncture repair", "New tires available"] },
            { icon: Key, title: "Lockout Service", desc: "Locked out of your car? We can help!", features: ["Key retrieval", "Lock opening", "No damage guarantee"] }
          ].map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div 
                key={idx} 
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-7 border border-amber-200/80 shadow-sm flex flex-col justify-between hover:border-[#b68840] hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#8d6226] flex items-center justify-center shadow-sm">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">{srv.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{srv.desc}</p>
                  <ul className="space-y-2 text-xs font-semibold text-gray-700 pt-2">
                    {srv.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2">
                        <span className="text-[#8d6226]">⚡</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <button type="button" onClick={() => handleOpenModal('request_help')} className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#7a5521] via-[#8d6226] to-[#dfb56b] shadow-sm cursor-pointer hover:opacity-95">
                    Learn More
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          3. CUTE & SMOOTH HOW IT WORKS (Screenshot 3)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Cute & Smooth <span className="text-[#c59a53]">How It Works</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
            6 easy steps to get roadside assistance quickly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { icon: MapPin, title: "Set Location", desc: "Pin your exact location on the map or use current GPS" },
            { icon: Sliders, title: "Choose Service", desc: "Select from towing, mechanic, battery, fuel, or tire service" },
            { icon: Users, title: "View Providers", desc: "See available service providers with ratings and ETA" },
            { icon: Wrench, title: "Get Help", desc: "Provider arrives and performs the required service" },
            { icon: CreditCard, title: "Secure Payment", desc: "Pay cash or card directly in the app" },
            { icon: Star, title: "Rate Service", desc: "Rate your experience and help improve the community" }
          ].map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-amber-200/80 shadow-sm text-center flex flex-col items-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#dfb56b] to-[#8d6226] text-white flex items-center justify-center shadow-md">
                  <Icon size={24} />
                </div>
                <h3 className="text-base font-bold text-neutral-900">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <div className="px-8 py-3 rounded-2xl bg-[#7a5521] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg">
            <Wrench size={16} className="text-amber-200" />
            <span>Average Response Time: 15-20 Minutes</span>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. PRICING & COMMISSION (Screenshot 4)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-amber-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                AllLogo <span className="text-[#c59a53]">Roadside Assistance</span>
              </h2>
              <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
              Fast, secure, and affordable roadside services with transparent pricing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-4">
              {[
                { title: "Towing Service", price: "Starting from 1500 DZD", payment: "Cash or Card", fee: "5% Fee" },
                { title: "Mechanic On-site", price: "Starting from 2000 DZD", payment: "Cash or Card", fee: "5% Fee" },
                { title: "Battery Service", price: "Starting from 1000 DZD", payment: "Cash or Card", fee: "5% Fee" },
                { title: "Fuel Delivery", price: "Fuel cost + 500 DZD", payment: "Cash or Card", fee: "5% Fee" }
              ].map((item, i) => (
                <div key={i} className="bg-[#fbf9f5] rounded-2xl p-5 border border-amber-200/80 shadow-sm flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-neutral-900">{item.title}</h4>
                    <p className="text-xs text-gray-600">Base Price: <strong className="text-neutral-900">{item.price}</strong></p>
                    <p className="text-[11px] text-gray-400">Payment: {item.payment}</p>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-[#7a5521] text-white text-[10px] font-bold shadow-sm">{item.fee}</span>
                </div>
              ))}
            </div>

            <div className="lg:col-span-6 space-y-3.5">
              {[
                { icon: Percent, title: "Low 5% Commission", desc: "Only 5% commission per service - lowest in market" },
                { icon: CreditCard, title: "Flexible Payments", desc: "Pay with cash or card as per your convenience" },
                { icon: CheckCircle2, title: "Transparent Pricing", desc: "See exact costs before confirming service" },
                { icon: ShieldCheck, title: "Secure Transactions", desc: "All payments processed securely through app" },
                { icon: Clock, title: "No Hidden Fees", desc: "What you see is what you pay - no surprises", highlight: true }
              ].map((val, vi) => {
                const Icon = val.icon;
                return (
                  <div key={vi} className={`p-4 rounded-2xl flex items-center gap-4 ${val.highlight ? 'bg-[#7a5521] text-white shadow-md' : 'bg-[#fbf9f5] border border-amber-200/80 text-neutral-800'}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${val.highlight ? 'bg-white/20 text-white' : 'bg-amber-100 text-[#7a5521]'}`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold block">{val.title}</h5>
                      <span className={`text-[11px] ${val.highlight ? 'text-amber-100' : 'text-gray-500'}`}>{val.desc}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 text-white bg-gradient-to-r from-[#3e2710] via-[#5c3e1a] to-[#26180a]">
            <div className="max-w-xl space-y-4 relative z-10">
              <div className="flex items-center gap-2">
                <ShieldCheck size={26} className="text-[#dfb56b]" />
                <h3 className="text-2xl sm:text-3xl font-extrabold">Why Only 5% Commission?</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-200">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#dfb56b]" /><span><strong>Lower than competitors</strong> (usually 10–20%)</span></li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#dfb56b]" /><span><strong>More earnings</strong> for service providers</span></li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#dfb56b]" /><span><strong>Affordable</strong> for customers</span></li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#dfb56b]" /><span><strong>Sustainable platform growth</strong></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. CREDIT & POINTS SYSTEM (Screenshot 5)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Credit & <span className="text-[#c59a53]">Points System</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto mt-2">
            Engage users and reward providers with smart credit and points system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#7a5521] text-white flex items-center justify-center">
                <Coins size={20} />
              </div>
              <div>
                <h4 className="text-base font-bold text-neutral-900">Provider Credit System</h4>
                <p className="text-xs text-gray-400">Required credit to unlock new missions</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#fbf9f5] border border-amber-200/80 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-neutral-900">Roadside Assistance</span>
                <span className="px-3 py-1 rounded-lg bg-[#7a5521] text-white font-bold text-xs">500 DZD</span>
              </div>
              <p className="text-xs text-gray-500">Initial credit required to start accepting roadside assistance missions</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#c59a53] text-white flex items-center justify-center">
                <Star size={20} />
              </div>
              <div>
                <h4 className="text-base font-bold text-neutral-900">User Points System</h4>
                <p className="text-xs text-gray-400">1 Point = 1 DZD value</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#fbf9f5] border border-amber-200/80 text-center space-y-3">
              <span className="inline-block px-4 py-1 rounded-full bg-[#7a5521] text-white text-[10px] font-bold">
                ⇄ Point Transfer Feature
              </span>
              <h5 className="text-sm font-bold text-neutral-900">Motivate Providers with Points</h5>
              <p className="text-xs text-gray-500 max-w-sm mx-auto">
                Transfer your points to service providers as appreciation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. LIVE MAP TRACKING & SERVICE DISCOVERY (Screenshot 6)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-amber-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Live Map Tracking & <span className="text-[#c59a53]">Service Discovery</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto mt-2">
              Real-time service provider tracking integrated with OpenStreetMap
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 bg-[#fbf9f5] rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-neutral-900 flex items-center gap-2">
                <MapPin size={18} className="text-[#7a5521]" /> Service Map Legend
              </h4>
              {[
                { title: "Roadside Assistance", badge: "Orange markers on the map", tags: ["Real-time tracking", "ETA estimation", "Service type visible"] },
                { title: "Rides / Drivers", badge: "Black (male) / Pink (female)", tags: ["Driver selection", "Price negotiation", "Live tracking"] },
                { title: "Deliveries", badge: "Dark blue markers", tags: ["Package tracking", "Multi-stop", "Direct assignment"] }
              ].map((lg, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-900">{lg.title}</span>
                    <span className="text-[10px] text-gray-400 font-medium">{lg.badge}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {lg.tags.map((t, ti) => (
                      <span key={ti} className="px-2.5 py-0.5 rounded-full bg-amber-50 text-[10px] text-[#7a5521] border border-amber-200">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#fbf9f5] rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-4">
                <h4 className="text-sm font-bold text-neutral-900">Real-time Features</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-gray-200 text-xs"><strong>2D / 3D View</strong></div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-200 text-xs"><strong>Live Tracking</strong></div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-200 text-xs"><strong>Pop-up Details</strong></div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-200 text-xs"><strong>Route Planning</strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. REGISTRATION PROCESS (Screenshot 7)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Registration <span className="text-[#c59a53]">Process</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-neutral-900 text-center">For Users</h4>
            {["Basic Info", "WhatsApp Verification", "Immediate Access"].map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 border border-amber-200/80 shadow-sm"><span className="text-xs font-bold">{step}</span></div>
            ))}
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-neutral-900 text-center">For Providers</h4>
            {["Document Upload", "Controller Review", "Approval & Activation"].map((step, i) => (
              <div key={i} className="bg-white rounded-2xl p-4 border border-amber-200/80 shadow-sm"><span className="text-xs font-bold">{step}</span></div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 border border-amber-200/80 shadow-sm space-y-3 text-xs">
          <h5 className="font-bold text-neutral-900 flex items-center gap-2">
            <FileText size={16} className="text-[#7a5521]" /> Legal & Security Notice
          </h5>
          <p className="text-gray-500 leading-relaxed italic">
            "I confirm I have read and accepted the ALLOGO terms. I understand ALLOGO is only a connecting platform and that any incident or payment outside the app is my responsibility."
          </p>
          <label className="flex items-center gap-2 pt-1 cursor-pointer font-semibold text-gray-700">
            <input 
              type="checkbox" 
              checked={legalChecked} 
              onChange={(e) => setLegalChecked(e.target.checked)} 
              className="w-4 h-4 rounded border-amber-300 accent-[#7a5521]" 
            />
            <span>Required checkbox during registration</span>
          </label>
        </div>
      </section>

      {/* ========================================================
          8. FREE SERVICES (Screenshot 8)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-amber-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Free <span className="text-[#c59a53]">Services</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto mt-2">
              Start your journey with ALLOGO and Enjoy Commission-free services for new providers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { badge: "3 free rides", title: "Car Rides", desc: "Get 3 free car rides when you start" },
              { badge: "2 free rides", title: "Motorcycle Rides", desc: "2 free motorcycle rides included" },
              { badge: "3 free deliveries", title: "Deliveries", desc: "Free food, pharmacy, or package delivery" },
              { badge: "2 free services", title: "Roadside Assistance", desc: "Free towing or mechanic service" },
              { badge: "2 free rentals", title: "Rental Services", desc: "Free vehicle or apartment rental" },
              { badge: "3 free services", title: "Other Services", desc: "Additional free services" }
            ].map((card, i) => (
              <div key={i} className="bg-[#fbf9f5] rounded-3xl p-6 border border-amber-200/80 shadow-sm space-y-2">
                <span className="px-3 py-1 rounded-full bg-[#7a5521] text-white text-[10px] font-bold">{card.badge}</span>
                <h4 className="text-sm font-bold text-neutral-900 pt-2">{card.title}</h4>
                <p className="text-xs text-gray-500">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          9. GET STARTED & SUPPORT FOOTER (Screenshot 9)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#fbf9f5]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="bg-[#7a5521] text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-start">
              <h3 className="text-2xl sm:text-3xl font-extrabold">Ready to Join ALLOGO?</h3>
              <p className="text-xs sm:text-sm text-amber-100">
                Join our platform and enjoy seamless roadside assistance and support anytime, anywhere.
              </p>
              <div className="flex flex-wrap gap-3 pt-3 justify-center md:justify-start">
                <button type="button" onClick={() => handleOpenModal('request_help')} className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#7a5521] bg-white hover:bg-amber-50 shadow transition-all cursor-pointer flex items-center gap-1.5">
                  <Download size={14} /> Download App
                </button>
                <button type="button" onClick={onOpenSignUp} className="px-6 py-2.5 rounded-xl text-xs font-bold text-white border border-white/40 hover:bg-white/10 transition-all cursor-pointer flex items-center gap-1.5">
                  <UserCheck size={14} /> Become a Provider
                </button>
              </div>
            </div>

            <div className="text-center md:text-end border-t md:border-t-0 md:border-l border-white/20 pt-4 md:pt-0 md:pl-8 flex-shrink-0">
              <span className="text-2xl sm:text-3xl font-extrabold block text-amber-200">24/7</span>
              <span className="text-xs text-amber-100 block">Emergency Support</span>
              <span className="text-sm font-bold mt-1 inline-flex items-center gap-1">
                <PhoneCall size={14} /> +213 XXX XXX XXX
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-amber-200/80 text-center space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#7a5521] text-white flex items-center justify-center mx-auto shadow"><HelpCircle size={22} /></div>
              <h5 className="text-sm font-bold text-neutral-900">FAQ & Help Center</h5>
              <p className="text-xs text-gray-500">Find answers to common questions</p>
              <span className="text-xs font-bold text-[#7a5521] cursor-pointer hover:underline block">Visit Help Center →</span>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-amber-200/80 text-center space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center mx-auto shadow"><MessageCircle size={22} /></div>
              <h5 className="text-sm font-bold text-neutral-900">WhatsApp Support</h5>
              <p className="text-xs text-gray-500">24/7 customer support via WhatsApp</p>
              <span className="text-xs font-bold text-[#7a5521] cursor-pointer hover:underline block">Chat Now →</span>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-amber-200/80 text-center space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#7a5521] text-white flex items-center justify-center mx-auto shadow"><Headphones size={22} /></div>
              <h5 className="text-sm font-bold text-neutral-900">Live Support</h5>
              <p className="text-xs text-gray-500">Call our support team anytime</p>
              <span className="text-xs font-bold text-[#7a5521] cursor-pointer hover:underline block">Contact Support →</span>
            </div>
          </div>

          <p className="text-center text-[11px] text-gray-400">
            ALLOGO is a connecting platform only. We are not responsible for incidents outside the app.
          </p>
        </div>
      </section>


      {/* ========================================================
          10. MODAL: REQUEST HELP / VIEW SERVICES (Screenshot Style)
      ======================================================== */}
      <AnimatePresence>
        {(activeModal === 'request_help' || activeModal === 'view_services') && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden my-8"
            >
              <div className="bg-neutral-900 text-white py-6 px-8 text-center relative border-b border-neutral-800">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 cursor-pointer"
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#dfb56b]">Roadside Assistance</h3>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-800 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 sm:p-10 space-y-6 max-h-[75vh] overflow-y-auto text-xs text-neutral-800">
                <div className="space-y-3">
                  <label className="font-bold text-sm text-neutral-900 block">Select Service</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      { id: 'Mechanic', label: 'Mechanic', icon: Wrench },
                      { id: 'Towing', label: 'Towing', icon: Truck },
                      { id: 'Battery', label: 'Battery', icon: Battery },
                      { id: 'Tires', label: 'Tires', icon: Disc },
                      { id: 'Fuel Delivery', label: 'Fuel Delivery', icon: Fuel },
                      { id: 'Other', label: 'Other', icon: FileText }
                    ].map((s) => {
                      const SIcon = s.icon;
                      const isSelected = selectedService === s.id;
                      return (
                        <div
                          key={s.id}
                          onClick={() => setSelectedService(s.id)}
                          className={`p-5 rounded-2xl border-2 flex flex-col items-center justify-center space-y-2 cursor-pointer transition-all duration-200 ${
                            isSelected ? 'border-[#b68840] bg-amber-50/50 shadow-md scale-[1.02]' : 'border-gray-200 bg-white hover:border-amber-300'
                          }`}
                        >
                          <SIcon size={24} className={isSelected ? 'text-[#8d6226]' : 'text-gray-600'} />
                          <span className={`font-bold ${isSelected ? 'text-[#8d6226]' : 'text-neutral-800'}`}>{s.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="font-bold text-sm text-neutral-900 flex items-center gap-1.5">
                    <MapPin size={16} className="text-[#8d6226]" /> Location
                  </label>
                  <input type="text" placeholder="Enter your location" className="w-full p-3.5 rounded-xl border border-gray-300 outline-none focus:border-[#8d6226] text-xs shadow-sm bg-white" />
                </div>

                <div className="p-5 rounded-2xl border border-gray-200 bg-[#fbf9f5] space-y-4">
                  <label className="font-bold text-sm text-neutral-900 flex items-center gap-1.5">
                    <Clock size={16} className="text-[#8d6226]" /> Schedule Service (Optional)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-semibold text-gray-600 flex items-center gap-1"><Calendar size={13} /> Select Date</span>
                      <input type="date" className="w-full p-3 rounded-xl border border-gray-300 bg-white outline-none focus:border-[#8d6226] text-xs" />
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-semibold text-gray-600 flex items-center gap-1"><Clock size={13} /> Select Time</span>
                      <input type="time" className="w-full p-3 rounded-xl border border-gray-300 bg-white outline-none focus:border-[#8d6226] text-xs" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      alert(`Roadside Service (${selectedService}) Confirmed Successfully!`);
                      handleCloseModal();
                    }}
                    className="px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    Continue
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default RoadsideAssistanceView;