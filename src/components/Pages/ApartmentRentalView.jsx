import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Lock, 
  PhoneCall, 
  CheckCircle2, 
  Star, 
  History, 
  Coins, 
  MapPin, 
  Image as ImageIcon, 
  UserPlus, 
  FileText, 
  Calendar, 
  Percent, 
  CreditCard, 
  Wallet, 
  AlertTriangle,
  X,
  ArrowLeft,
  Search,
  SlidersHorizontal,
  Home,
  DollarSign,
  User,
  Mail,
  Phone
} from 'lucide-react';

const ApartmentRentalView = ({ onOpenSignUp, onOpenLogin }) => {
  const [showListingForm, setShowListingForm] = useState(false);
  const [showFindView, setShowFindView] = useState(false);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // 20 Mock Luxury Apartments Data
  const apartmentsData = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: [
      "Urban Living", "Harmony Apartments", "Golden Nest Apartments", "Skyline Heights", 
      "Park View Residence", "Grand Luxury Suite", "Elite Palm Villa", "Sunset Horizon",
      "Royal Crown Apartment", "Metro Central Loft", "Blue Lagoon Residence", "Silver Oak Haven",
      "Emerald Bay Suite", "Crystal Palace", "Imperial Towers", "Starlight Haven",
      "Opulence Heights", "Serenity Springs", "Velvet Coast Residence", "Zenith Urban Space"
    ][index],
    rooms: (index % 3) + 1,
    rent: 850 + (index * 45),
    location: ["Midtown", "Riverbank", "North Side", "Downtown", "West End", "Beachfront", "Hillcrest", "Financial District"][index % 8],
    rating: (4.0 + (index % 10) * 0.1).toFixed(1),
    image: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
    ][index % 4],
    status: "Available"
  }));

  const filteredApartments = apartmentsData.filter(apt => 
    apt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    apt.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Precise Browser Back History Management
  useEffect(() => {
    const handlePopState = (event) => {
      // 1. Agar booking modal khula hai, toh back karne par sirf modal band ho aur 20 cards view par rahein
      if (selectedApartment) {
        setSelectedApartment(null);
      } 
      // 2. Agar listing form khula hai, toh back karne ke baad overview par jayein
      else if (showListingForm) {
        setShowListingForm(false);
      } 
      // 3. Agar 20 cards grid view khula hai, toh back karne par main overview par jayein
      else if (showFindView) {
        setShowFindView(false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedApartment, showListingForm, showFindView]);

  const handleOpenListingForm = () => {
    window.history.pushState({ modal: 'listing_form' }, '');
    setShowListingForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenFindView = () => {
    window.history.pushState({ view: 'find_apartments' }, '');
    setShowFindView(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (apt) => {
    window.history.pushState({ modal: 'booking' }, '');
    setSelectedApartment(apt);
  };

  const handleBackToOverview = () => {
    setShowFindView(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseListingForm = () => {
    setShowListingForm(false);
  };

  const handleCloseBooking = () => {
    setSelectedApartment(null);
  };

  return (
    <div className="w-full bg-[#fbf9f5] text-neutral-900 overflow-x-hidden select-none relative">
      
      {/* ========================================================
          CONDITIONAL VIEW: 20 LUXURY APARTMENTS GRID (Screenshot 1)
      ======================================================== */}
      {showFindView ? (
        <div className="w-full min-h-screen bg-[#f4f2ee] pb-20">
          <div className="bg-neutral-900 text-white py-6 px-6 sm:px-12 flex items-center justify-between shadow-md">
            <button
              type="button"
              onClick={handleBackToOverview}
              className="flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 cursor-pointer"
            >
              <ArrowLeft size={18} /> Back to Overview
            </button>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#dfb56b]">Luxury Apartments</h2>
            <div className="w-20" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-200/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 bg-[#fbf9f5] px-4 py-2.5 rounded-xl border border-gray-200 flex-1 max-w-md">
                <Search size={18} className="text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search location..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-xs outline-none w-full"
                />
              </div>

              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs font-semibold hover:border-[#8d6226] cursor-pointer">
                  <Home size={15} className="text-amber-600" /> Rooms ▾
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs font-semibold hover:border-[#8d6226] cursor-pointer">
                  <SlidersHorizontal size={15} className="text-amber-600" /> Low → High ▾
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApartments.map((apt) => (
                <motion.div 
                  key={apt.id}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-3xl overflow-hidden border border-amber-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-52">
                    <img src={apt.image} alt={apt.name} className="w-full h-full object-cover" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-green-600 text-white text-[10px] font-extrabold shadow">
                      {apt.status}
                    </span>
                  </div>

                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-base font-bold text-neutral-900">{apt.name}</h4>
                      <div className="flex items-center gap-4 mt-2 text-xs font-semibold">
                        <span className="flex items-center gap-1 text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/50">
                          🛏️ {apt.rooms} Rooms
                        </span>
                        <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/50">
                          💲 ${apt.rent}/month
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                        <MapPin size={14} className="text-amber-600" /> {apt.location}
                      </p>
                      <p className="text-xs font-bold text-gray-700 mt-1 flex items-center gap-1">
                        ⭐ {apt.rating}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100">
                      <button
                        type="button"
                        onClick={() => handleOpenBooking(apt)}
                        className="py-2.5 rounded-xl text-xs font-bold text-neutral-900 bg-gradient-to-r from-[#dfb56b] to-[#f4d69a] hover:from-[#ebc37b] hover:to-[#ffe7b6] shadow cursor-pointer text-center"
                      >
                        Book Now
                      </button>
                      <button
                        type="button"
                        onClick={() => handleOpenBooking(apt)}
                        className="py-2.5 rounded-xl text-xs font-bold text-gray-700 bg-gray-200 hover:bg-gray-300 transition-all cursor-pointer text-center"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* ========================================================
              1. HERO SECTION
          ======================================================== */}
          <section className="relative w-full min-h-[85vh] sm:min-h-[92vh] flex items-center justify-center bg-black overflow-hidden">
            <motion.div 
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85" 
                alt="Apartment Rentals"
                className="w-full h-full object-cover object-center brightness-45 contrast-110"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/65 pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
              <motion.h1 
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md"
              >
                Apartment <span className="text-[#dfb56b]">Rentals</span>
              </motion.h1>

              <p className="mt-4 text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Book verified apartments with secure online payment.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={handleOpenFindView}
                  className="px-8 py-3 rounded-full text-xs sm:text-sm font-bold text-neutral-900 bg-gradient-to-r from-[#dfb56b] to-[#f4d69a] hover:from-[#ebc37b] hover:to-[#ffe7b6] shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  Find an Apartment
                </button>

                <button
                  type="button"
                  onClick={handleOpenListingForm}
                  className="px-8 py-3 rounded-full text-xs sm:text-sm font-bold text-neutral-900 bg-gradient-to-r from-[#dfb56b] to-[#f4d69a] hover:from-[#ebc37b] hover:to-[#ffe7b6] shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  List Your Apartment
                </button>
              </div>
            </div>
          </section>

          {/* ========================================================
              2. KEY BENEFITS
          ======================================================== */}
          <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Key <span className="text-[#c59a53]">Benefits</span>
                </h2>
                <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-8 border-2 border-[#b68840] shadow-md text-center flex flex-col items-center space-y-4">
                <Lock size={28} className="text-[#8d6226]" />
                <h3 className="text-lg font-bold text-[#8d6226]">Card-only payment</h3>
                <p className="text-xs text-gray-500">All bookings are securely paid via card only.</p>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-amber-200/80 shadow-sm text-center flex flex-col items-center space-y-4">
                <PhoneCall size={28} className="text-[#8d6226]" />
                <h3 className="text-lg font-bold text-neutral-900">Temporary number</h3>
                <p className="text-xs text-gray-500">A temporary contact number is generated after payment.</p>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-amber-200/80 shadow-sm text-center flex flex-col items-center space-y-4">
                <CheckCircle2 size={28} className="text-[#8d6226]" />
                <h3 className="text-lg font-bold text-neutral-900">Verified listings</h3>
                <p className="text-xs text-gray-500">Documents and photos of apartments are thoroughly verified.</p>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-amber-200/80 shadow-sm text-center flex flex-col items-center space-y-4">
                <Star size={28} className="text-[#8d6226]" />
                <h3 className="text-lg font-bold text-neutral-900">Owner & tenant ratings</h3>
                <p className="text-xs text-gray-500">Rate both owners and tenants after your stay.</p>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-amber-200/80 shadow-sm text-center flex flex-col items-center space-y-4">
                <History size={28} className="text-[#8d6226]" />
                <h3 className="text-lg font-bold text-neutral-900">History & dispute management</h3>
                <p className="text-xs text-gray-500">Track booking history and manage disputes efficiently.</p>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-amber-200/80 shadow-sm text-center flex flex-col items-center space-y-4">
                <Coins size={28} className="text-[#8d6226]" />
                <h3 className="text-lg font-bold text-neutral-900">Earn & use points</h3>
                <p className="text-xs text-gray-500">Users can pay part of booking with points; owners may convert points to app credit.</p>
              </div>
            </div>
          </section>

          {/* ========================================================
              3. CLIENT JOURNEY (TENANTS)
          ======================================================== */}
          <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-y border-amber-100">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Client <span className="text-[#c59a53]">Journey (Tenants)</span>
                </h2>
                <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-6">
              <div className="bg-[#fbf9f5] rounded-3xl p-7 border border-amber-200/80 shadow-sm text-center flex flex-col items-center space-y-3">
                <MapPin size={22} className="text-[#8d6226]" />
                <h3 className="text-base font-bold text-neutral-900">Search by city, dates, price</h3>
                <p className="text-xs text-gray-500">Select your preferred city, dates, and price range for your stay.</p>
              </div>
              <div className="bg-[#fbf9f5] rounded-3xl p-7 border border-amber-200/80 shadow-sm text-center flex flex-col items-center space-y-3">
                <ImageIcon size={22} className="text-[#8d6226]" />
                <h3 className="text-base font-bold text-neutral-900">View apartment details</h3>
                <p className="text-xs text-gray-500">Check photos, amenities, and location on the map for each apartment.</p>
              </div>
              <div className="bg-[#fbf9f5] rounded-3xl p-7 border border-amber-200/80 shadow-sm text-center flex flex-col items-center space-y-3">
                <Lock size={22} className="text-[#8d6226]" />
                <h3 className="text-base font-bold text-neutral-900">Book & pay by card only</h3>
                <p className="text-xs text-gray-500">Securely book your apartment using card payment.</p>
              </div>
            </div>
          </section>

          {/* ========================================================
              4. HOW IT WORKS - HOST / PROVIDER
          ======================================================== */}
          <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  How It Works <span className="text-[#c59a53]">– Host / Provider</span>
                </h2>
                <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
              </div>
            </div>

            <div className="relative border-l-2 border-[#b68840] ml-4 md:ml-auto space-y-10 pl-6 md:pl-0">
              {[
                { step: "1. Register as provider", desc: "Sign up as a host and create your provider account on ALLOGO.", icon: UserPlus },
                { step: "2. Add apartment listings", desc: "Add apartments with photos, descriptions, and amenities.", icon: Building2 },
                { step: "3. Upload ownership documents", desc: "Submit ownership or authorization documents for verification.", icon: FileText },
                { step: "4. Get validated by controller", desc: "Wait for verification and approval from the platform controller.", icon: CheckCircle2 },
                { step: "5. Manage bookings & prices", desc: "Receive booking requests and manage your calendar and pricing.", icon: Calendar },
                { step: "6. Rate tenants", desc: "After each stay, rate the tenant to maintain trust and transparency.", icon: Star }
              ].map((item, i) => {
                const Icon = item.icon;
                const isEven = i % 2 === 0;
                return (
                  <div key={i} className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} gap-6`}>
                    <div className="w-full md:w-1/2">
                      <div className="bg-white rounded-2xl p-6 border border-amber-200/80 shadow-sm space-y-2">
                        <h4 className="text-sm font-bold text-[#8d6226]">{item.step}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                    <div className="absolute left-[-13px] md:relative md:left-0 w-8 h-8 rounded-full bg-[#8d6226] text-white flex items-center justify-center shadow-md">
                      <Icon size={16} />
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                );
              })}
            </div>
          </section>

          {/* ========================================================
              5. COMMISSION PAYMENT & DISPUTE MANAGEMENT
          ======================================================== */}
          <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white border-t border-amber-100">
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Commission Payment <span className="text-[#c59a53]">& Dispute Management</span>
                </h2>
                <span className="hidden sm:inline-block w-12 h-[1px] bg-[#c59a53]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="bg-[#fbf9f5] rounded-3xl p-7 border border-amber-200/85 shadow-sm space-y-3">
                <Percent size={20} className="text-[#8d6226]" />
                <h3 className="text-base font-bold text-neutral-900">Commission</h3>
                <p className="text-xs text-gray-500">ALLOGO charges a 3% commission per booking on apartment rentals.</p>
              </div>
              <div className="bg-[#fbf9f5] rounded-3xl p-7 border border-amber-200/85 shadow-sm space-y-3">
                <CreditCard size={20} className="text-[#8d6226]" />
                <h3 className="text-base font-bold text-neutral-900">Payment</h3>
                <p className="text-xs text-gray-500">All payments are processed very fastly via secure card transactions only.</p>
              </div>
              <div className="bg-[#fbf9f5] rounded-3xl p-7 border border-amber-200/85 shadow-sm space-y-3">
                <Wallet size={20} className="text-[#8d6226]" />
                <h3 className="text-base font-bold text-neutral-900">Payout Flow</h3>
                <p className="text-xs text-gray-500">ALLOGO keeps the commission and sends the remaining amount directly to the apartment owner.</p>
              </div>
              <div className="bg-[#fbf9f5] rounded-3xl p-7 border border-amber-200/85 shadow-sm space-y-3">
                <AlertTriangle size={20} className="text-[#8d6226]" />
                <h3 className="text-base font-bold text-neutral-900">Dispute Management</h3>
                <p className="text-xs text-gray-500">Tenants can report issues. The controller reviews booking, chat history, and photos.</p>
              </div>
            </div>
          </section>

          {/* ========================================================
              6. READY TO EXPLORE FOOTER
          ======================================================== */}
          <section className="w-full py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Ready <span className="text-[#c59a53]">to Explore ALLOGO?</span>
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">Browse thousands of apartments or start earning by listing your own.</p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={handleOpenFindView}
                className="px-8 py-3 rounded-xl text-xs font-bold text-white bg-[#b68840] hover:bg-[#8d6226] shadow-md transition-all cursor-pointer"
              >
                Browse Apartments
              </button>
              <button
                type="button"
                onClick={handleOpenListingForm}
                className="px-8 py-3 rounded-xl text-xs font-bold text-[#8d6226] bg-white border border-[#b68840] hover:bg-amber-50 shadow-sm transition-all cursor-pointer"
              >
                List Your Apartment
              </button>
            </div>
          </section>
        </>
      )}


      {/* ========================================================
          LIST YOUR APARTMENT POPUP FORM CARD
      ======================================================== */}
      <AnimatePresence>
        {showListingForm && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden my-8"
            >
              <div className="bg-neutral-900 text-white p-6 text-center relative border-b border-neutral-800">
                <button
                  type="button"
                  onClick={handleCloseListingForm}
                  className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 cursor-pointer"
                >
                  <ArrowLeft size={16} /> Back
                </button>
                <h3 className="text-2xl font-extrabold text-[#dfb56b]">List Your Apartment</h3>
                <button
                  type="button"
                  onClick={handleCloseListingForm}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-800 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto text-xs text-neutral-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1"><label className="font-semibold text-gray-600">First Name</label><input type="text" placeholder="Enter first name" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                  <div className="space-y-1"><label className="font-semibold text-gray-600">Last Name</label><input type="text" placeholder="Enter last name" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1"><label className="font-semibold text-gray-600">Owner Full Name</label><input type="text" placeholder="Enter full name" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                  <div className="space-y-1"><label className="font-semibold text-gray-600">Phone Number</label><input type="text" placeholder="Enter phone number" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1"><label className="font-semibold text-gray-600">Apartment Type</label><input type="text" placeholder="Apartment, House, Studio..." className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                  <div className="space-y-1"><label className="font-semibold text-gray-600">Number of Bedrooms</label><input type="text" placeholder="e.g. 1, 2, 3..." className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                </div>
                <div className="space-y-1"><label className="font-semibold text-gray-600">Monthly Rent Price</label><input type="text" placeholder="Enter rent price" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                <div className="space-y-1"><label className="font-semibold text-gray-600">Location</label><input type="text" placeholder="City / Area / Street" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                <div className="space-y-1"><label className="font-semibold text-gray-600">Apartment Photos</label><input type="file" className="w-full p-2.5 rounded-xl border border-amber-200 text-gray-500 bg-gray-50" /></div>
                <div className="space-y-1"><label className="font-semibold text-gray-600">Upload Ownership Document</label><input type="file" className="w-full p-2.5 rounded-xl border border-amber-200 text-gray-500 bg-gray-50" /></div>
                <label className="flex items-center gap-2 pt-2 cursor-pointer font-medium text-gray-600"><input type="checkbox" className="w-4 h-4 rounded border-amber-300 accent-[#8d6226]" /><span>I confirm I have read and accepted the ALLOGO terms.</span></label>
                <div className="pt-4 text-center">
                  <button type="button" onClick={handleCloseListingForm} className="px-8 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#7a5521] via-[#8d6226] to-[#dfb56b] shadow-md cursor-pointer">
                    Get Verification Code
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ========================================================
          REVIEW & CONFIRM BOOKING MODAL
      ======================================================== */}
      <AnimatePresence>
        {selectedApartment && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden my-8"
            >
              <div className="bg-neutral-900 text-white py-6 px-8 text-center relative border-b border-neutral-800">
                <h3 className="text-2xl font-extrabold text-[#dfb56b]">Review & Confirm Booking</h3>
              </div>

              <div className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto text-xs text-neutral-800">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border border-amber-200/80 bg-[#fbf9f5] flex items-center gap-3"><Home size={20} className="text-[#8d6226]" /><div><span className="text-[10px] text-gray-400 block">Apartment Name</span><strong className="text-sm">{selectedApartment.name}</strong></div></div>
                  <div className="p-4 rounded-2xl border border-amber-200/80 bg-[#fbf9f5] flex items-center gap-3"><span className="text-lg">🛏️</span><div><span className="text-[10px] text-gray-400 block">Rooms</span><strong className="text-sm">{selectedApartment.rooms}</strong></div></div>
                  <div className="p-4 rounded-2xl border border-amber-200/80 bg-[#fbf9f5] flex items-center gap-3"><DollarSign size={20} className="text-[#8d6226]" /><div><span className="text-[10px] text-gray-400 block">Rent</span><strong className="text-sm">${selectedApartment.rent}/month</strong></div></div>
                  <div className="p-4 rounded-2xl border border-amber-200/80 bg-[#fbf9f5] flex items-center gap-3"><MapPin size={20} className="text-[#8d6226]" /><div><span className="text-[10px] text-gray-400 block">Location</span><strong className="text-sm">{selectedApartment.location}</strong></div></div>
                  <div className="p-4 rounded-2xl border border-amber-200/80 bg-[#fbf9f5] flex items-center gap-3"><Star size={20} className="text-[#8d6226]" /><div><span className="text-[10px] text-gray-400 block">Rating</span><strong className="text-sm">{selectedApartment.rating}</strong></div></div>
                  <div className="p-4 rounded-2xl border border-amber-200/80 bg-[#fbf9f5] flex items-center gap-3"><User size={20} className="text-[#8d6226]" /><div><span className="text-[10px] text-gray-400 block">Name</span><strong className="text-sm">A.N</strong></div></div>
                  <div className="p-4 rounded-2xl border border-amber-200/80 bg-[#fbf9f5] flex items-center gap-3"><Mail size={20} className="text-[#8d6226]" /><div><span className="text-[10px] text-gray-400 block">Email</span><strong className="text-sm">nawaz51412@gmail.com</strong></div></div>
                  <div className="p-4 rounded-2xl border border-amber-200/80 bg-[#fbf9f5] flex items-center gap-3"><Phone size={20} className="text-[#8d6226]" /><div><span className="text-[10px] text-gray-400 block">Phone</span><strong className="text-sm">0300-0000000</strong></div></div>
                </div>

                <div className="pt-6 flex items-center justify-between">
                  <button type="button" onClick={handleCloseBooking} className="px-8 py-3 rounded-xl text-xs font-bold text-neutral-800 bg-gray-100 border border-gray-300 hover:bg-gray-200 cursor-pointer">Back</button>
                  <button type="button" onClick={() => { alert("Booking Confirmed Successfully!"); handleCloseBooking(); }} className="px-8 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#7a5521] via-[#8d6226] to-[#dfb56b] shadow-md cursor-pointer">Confirm Booking</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ApartmentRentalView;