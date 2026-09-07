import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Package, 
  Utensils, 
  Pill, 
  Box, 
  ShoppingBag, 
  FileText, 
  MapPin, 
  DollarSign, 
  Clock, 
  Calendar, 
  ArrowLeft, 
  X,
  Navigation,
  Percent,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  Coins,
  Star,
  Download,
  UserCheck,
  PhoneCall,
  HelpCircle,
  MessageCircle,
  Headphones,
  Building,
  Truck,
  Globe,
  Banknote,
  Lock,
  MessageSquare,
  Send,
  Plus,
  Check
} from 'lucide-react';

const DeliveriesView = ({ onOpenSignUp, onOpenLogin }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [selectedType, setSelectedType] = useState('Food');
  const [activeZone, setActiveZone] = useState('within');
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [chatMessage, setChatMessage] = useState('');
  const [legalChecked, setLegalChecked] = useState(false);

  // Browser Back Button Management for Modal
  useEffect(() => {
    const handlePopState = () => {
      if (activeModal) {
        setActiveModal(false);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeModal]);

  const handleOpenModal = () => {
    window.history.pushState({ modal: 'book_delivery' }, '');
    setActiveModal(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseModal = () => {
    window.history.back();
    setActiveModal(false);
  };

  return (
    <div className="w-full bg-[#fbf9f5] text-neutral-900 overflow-x-hidden select-none relative">
      
      {/* ========================================================
          1. HERO SECTION (Screenshot 1)
      ======================================================== */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1526367460867-13a6744f538f?auto=format&fit=crop&w=2000&q=85" 
            alt="Deliveries"
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
            Fast <span className="text-[#dfb56b]">Delivery</span> for Food
          </motion.h1>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            All-in-one delivery platform for orders, errands, pickups and logistics.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleOpenModal}
              className="px-8 py-3 rounded-xl text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#dfb56b] to-[#f4d69a] hover:from-[#ebc37b] hover:to-[#ffe7b6] shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Get Started
            </button>

            <button
              type="button"
              onClick={handleOpenModal}
              className="px-8 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#7a5521] via-[#b68840] to-[#dfb56b] hover:from-[#8d6226] hover:to-[#ebc37b] shadow-[0_6px_20px_rgba(182,136,64,0.35)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              Order Now
            </button>
          </div>

          <div className="flex items-center gap-2 mt-12">
            <span className="w-6 h-2 rounded-full bg-[#dfb56b]" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
            <span className="w-2 h-2 rounded-full bg-white/40" />
          </div>
        </div>
      </section>

      {/* ========================================================
          2. OUR SERVICES (Screenshot 2)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Our <span className="text-[#c59a53]">Services</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { icon: Utensils, title: "Food Delivery", desc: "Restaurant meals, groceries, and specialty foods delivered hot and fresh." },
            { icon: Pill, title: "Pharmacy Delivery", desc: "Prescription medicines and healthcare products delivered discreetly." },
            { icon: Package, title: "Package Delivery", desc: "Parcels, documents, and important shipments with real-time tracking." },
            { icon: ShoppingBag, title: "Product Delivery", desc: "Retail, e-commerce, and marketplace deliveries with flexible scheduling." }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-amber-200/70 shadow-sm flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-amber-50 text-[#8d6226] flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          3. COMPREHENSIVE ZONE COVERAGE (Screenshot 3)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-y border-amber-100">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Comprehensive <span className="text-[#c59a53]">Zone Coverage</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto">
            Seamless delivery network across all zones with intelligent routing and real-time tracking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#fbf9f5] rounded-3xl p-6 border border-amber-200/80 shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Select Zone Type</h4>
              <div className="p-4 rounded-2xl bg-[#7a5521] text-white space-y-2">
                <span className="font-bold text-sm block">Within City</span>
                <p className="text-xs text-amber-100">Fast deliveries within city limits under 30 minutes average with real-time traffic updates.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-amber-200/60 text-gray-800">
                <span className="font-bold text-sm block">Between Cities</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-amber-200/60 text-gray-800">
                <span className="font-bold text-sm block">Multi-Zone Network</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#8d6226] text-white rounded-2xl p-5 shadow-sm"><span className="text-xs text-amber-200 block">Active Providers</span><h3 className="text-2xl font-extrabold">1250</h3></div>
              <div className="bg-[#c59a53] text-white rounded-2xl p-5 shadow-sm"><span className="text-xs text-amber-100 block">Daily Deliveries</span><h3 className="text-2xl font-extrabold">8500</h3></div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#fbf9f5] rounded-3xl p-6 border border-amber-200/80 shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-neutral-900">Zone Network Map</h4>
              <div className="h-64 rounded-2xl bg-[#f4f2ee] flex items-center justify-center relative border border-gray-200">
                <span className="text-xs font-bold text-gray-500">Interactive Coverage Visualization</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#6e4e1f] via-[#a37835] to-[#dfb56b] text-white rounded-3xl p-8 shadow-xl text-center space-y-4">
              <h3 className="text-2xl font-extrabold">Ready to Deliver?</h3>
              <p className="text-xs text-amber-100 max-w-md mx-auto">Join our network of delivery providers and start earning today. 5% flat commission across all zones.</p>
              <button type="button" onClick={onOpenSignUp} className="px-6 py-2.5 rounded-xl text-xs font-bold text-[#6e4e1f] bg-white shadow cursor-pointer">Become a Provider</button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SMART DELIVERY ROUTING (Screenshot 4)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Smart <span className="text-[#c59a53]">Delivery Routing</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">Efficient multi-stop routing across zones with real-time optimization.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {[
            { title: "Food Delivery", icon: "🍔" },
            { title: "Pharmacy", icon: "💊" },
            { title: "Packages", icon: "📦" },
            { title: "Products", icon: "🛍️" }
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 border border-amber-200/80 shadow-sm text-center space-y-3">
              <span className="text-3xl block">{card.icon}</span>
              <h4 className="text-base font-bold">{card.title}</h4>
              <button type="button" onClick={handleOpenModal} className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#7a5521] to-[#dfb56b] shadow-sm cursor-pointer">Order Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          5. PAYMENT SYSTEM (Screenshot 5)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-amber-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Payment <span className="text-[#c59a53]">System</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Secure and simple payments for customers and delivery providers</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 bg-[#fbf9f5] rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-4">
              <h4 className="text-base font-bold text-[#8d6226]">Customer Payment Options</h4>
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#6e4e1f] to-[#9c7736] text-white flex items-center justify-between">
                <div className="flex items-center gap-3"><CreditCard size={20} /><div><span className="text-xs font-bold block">Card Payment</span><span className="text-[10px] text-amber-100">Secure debit or credit card</span></div></div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-gray-200 text-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-3"><Banknote size={20} /><div><span className="text-xs font-bold block">Cash on Delivery</span><span className="text-[10px] text-gray-400">Pay after receiving</span></div></div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h4 className="text-base font-bold text-[#8d6226]">Provider Requirements</h4>
              <div className="bg-[#7a5521] text-white p-4 rounded-2xl shadow-sm"><span className="text-xs font-bold block">Card Required to Unlock Deliveries</span><span className="text-[11px] text-amber-100">Providers must verify a payment card.</span></div>
              <div className="bg-[#8d6226] text-white p-4 rounded-2xl shadow-sm"><span className="text-xs font-bold block">Secure Daily Payouts</span></div>
              <div className="bg-[#6e4e1f] text-white p-4 rounded-2xl shadow-sm"><span className="text-xs font-bold block">ALLOGO Commission: Flat 5%</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. LIVE DELIVERY TRACKING (Screenshot 6)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#8d6226]">Live Delivery Tracking</h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">Track your order in real-time with status updates & driver location</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            {["Request Received", "Driver Assigned", "Driver Arrived", "Picked Up", "On the Way", "Delivered"].map((stage, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#8d6226] text-white flex items-center justify-center text-xs font-bold">✓</div>
                <div className="flex-1"><span className="text-xs font-bold text-gray-800">{stage}</span><div className="w-full h-1.5 rounded-full bg-gradient-to-r from-[#dfb56b] to-[#8d6226] mt-1" /></div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 h-80 rounded-3xl bg-[#e5e5e0] p-6 flex flex-col justify-between shadow-inner">
            <div className="bg-white rounded-2xl p-4 shadow-xl w-48 text-xs">
              <span className="font-bold block">🚗 Driver Info</span>
              <span className="text-[10px] text-gray-500 block">ETA: 15 min</span>
            </div>
            <div className="text-end"><span className="px-3 py-1 rounded-full bg-black/60 text-white text-[10px] font-bold">Live GPS Tracker</span></div>
          </div>
        </div>
      </section>

      {/* ========================================================
          7. REAL-TIME COMMUNICATION (Screenshot 7)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-amber-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Real-time <span className="text-[#c59a53]">Communication</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 bg-[#fbf9f5] rounded-3xl p-6 border border-amber-200/80 space-y-4">
              <h4 className="text-sm font-bold">Chat Channels</h4>
              <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-bold">Customer Support</div>
              <button type="button" className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#8d6226] shadow cursor-pointer">New Conversation</button>
            </div>

            <div className="lg:col-span-8 bg-[#fbf9f5] rounded-3xl border border-amber-200/80 p-6 flex flex-col h-80 justify-between">
              <div className="p-3 bg-white rounded-2xl border text-xs max-w-sm">Hi! How can I help with your delivery today?</div>
              <div className="p-3 bg-[#8d6226] text-white rounded-2xl text-xs max-w-sm ml-auto">Can you update the delivery address?</div>
              <div className="flex gap-2"><input type="text" placeholder="Type your message..." className="flex-1 p-2.5 rounded-xl border text-xs bg-white" /><button className="px-4 bg-[#8d6226] text-white rounded-xl text-xs font-bold">Send</button></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. PROVIDER REQUIREMENTS & FOOTER (Screenshot 8)
      ======================================================== */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-8">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
            Provider <span className="text-[#8d6226]">Requirements</span>
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">To ensure secure delivery assignments, providers must verify a payment card.</p>
        </div>

        <div className="bg-[#fbf9f5] rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-sm space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-start text-xs font-semibold text-gray-700">
            <div className="p-3.5 rounded-xl bg-white border border-gray-200 flex items-center gap-3">🔒 Secure access to delivery tasks</div>
            <div className="p-3.5 rounded-xl bg-white border border-gray-200 flex items-center gap-3">🛡️ Encrypted card information</div>
            <div className="p-3.5 rounded-xl bg-white border border-gray-200 flex items-center gap-3">✅ Unlock deliveries instantly</div>
            <div className="p-3.5 rounded-xl bg-white border border-gray-200 flex items-center gap-3">💳 Supports multiple card types</div>
          </div>
          <button type="button" onClick={onOpenSignUp} className="px-8 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#7a5521] to-[#b68840] shadow-md cursor-pointer">Verify Your Card</button>
        </div>
      </section>


      {/* ========================================================
          MODAL: BOOK YOUR DELIVERY
      ======================================================== */}
      <AnimatePresence>
        {activeModal && (
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
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#dfb56b]">Book Your Delivery</h3>
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
                  <label className="font-bold text-sm text-neutral-900 block">Select Delivery Type</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                    {[
                      { id: 'Food', label: 'Food', icon: Utensils },
                      { id: 'Pharmacy', label: 'Pharmacy', icon: Pill },
                      { id: 'Packages', label: 'Packages', icon: Box },
                      { id: 'Products', label: 'Products', icon: ShoppingBag },
                      { id: 'Other', label: 'Other', icon: FileText }
                    ].map((d) => {
                      const DIcon = d.icon;
                      const isSelected = selectedType === d.id;
                      return (
                        <div
                          key={d.id}
                          onClick={() => setSelectedType(d.id)}
                          className={`p-4 rounded-2xl border-2 flex flex-col items-center justify-center space-y-2 cursor-pointer transition-all duration-200 ${
                            isSelected ? 'border-[#b68840] bg-amber-50/50 shadow-md scale-[1.02]' : 'border-gray-200 bg-white hover:border-amber-300'
                          }`}
                        >
                          <DIcon size={22} className={isSelected ? 'text-[#8d6226]' : 'text-gray-600'} />
                          <span className={`font-bold text-xs ${isSelected ? 'text-[#8d6226]' : 'text-neutral-800'}`}>{d.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <label className="font-bold text-sm text-neutral-900 block">Weight</label>
                  <input type="text" placeholder="Enter weight (e.g., 2kg, 500g)" className="w-full p-3.5 rounded-xl border border-gray-300 outline-none focus:border-[#8d6226] text-xs shadow-sm bg-white" />
                </div>

                <div className="space-y-2 pt-1">
                  <label className="font-bold text-sm text-neutral-900 block">Pickup & Drop-off</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" placeholder="Pickup location" className="w-full p-3.5 rounded-xl border border-gray-300 outline-none focus:border-[#8d6226] text-xs shadow-sm bg-white" />
                    <input type="text" placeholder="Drop-off location" className="w-full p-3.5 rounded-xl border border-gray-300 outline-none focus:border-[#8d6226] text-xs shadow-sm bg-white" />
                  </div>
                </div>

                <div className="space-y-2 pt-1">
                  <label className="font-bold text-sm text-neutral-900 block">Your Budget / Price</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-bold text-gray-500">PKR</span>
                    <input type="text" placeholder="Enter your price (e.g. 500)" className="w-full p-3.5 pl-14 rounded-xl border border-gray-300 outline-none focus:border-[#8d6226] text-xs shadow-sm bg-white" />
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-gray-200 bg-[#fbf9f5] space-y-4">
                  <label className="font-bold text-sm text-neutral-900 flex items-center gap-1.5">
                    <Clock size={16} className="text-[#8d6226]" /> Schedule Delivery (Optional)
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
                      alert(`Delivery Booking (${selectedType}) Confirmed Successfully!`);
                      handleCloseModal();
                    }}
                    className="px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#7a5521] via-[#8d6226] to-[#dfb56b] shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
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

export default DeliveriesView;