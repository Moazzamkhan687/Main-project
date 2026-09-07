import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../assets/logo.png";
import {
  ChevronDown,
  Globe,
  Menu,
  X,
  Car,
  Package,
  Wrench,
  Bike,
  Building2,
  Truck,
  ArrowLeft
} from "lucide-react";

export default function Navbar({ 
  currentPage, 
  setCurrentPage, 
  onSignUpClick, 
  onLoginClick 
}) {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeProviderModal, setActiveProviderModal] = useState(null);
  const navRef = useRef(null);

  const languages = [
    { code: "en", label: "English", dir: "ltr" },
    { code: "ur", label: "اردو", dir: "rtl" },
    { code: "ar", label: "العربية", dir: "rtl" },
  ];

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Browser Back Button Management for Provider Modals
  useEffect(() => {
    const handlePopState = () => {
      if (activeProviderModal) {
        setActiveProviderModal(null);
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeProviderModal]);

  const handleOpenProviderModal = (modalKey) => {
    window.history.pushState({ providerModal: modalKey }, '');
    setActiveProviderModal(modalKey);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseProviderModal = () => {
    window.history.back();
    setActiveProviderModal(null);
  };

  const handleToggle = (menuName) => {
    setActiveDropdown((prev) => (prev === menuName ? null : menuName));
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.code);
    document.documentElement.dir = lang.dir;
    document.documentElement.lang = lang.code;
    setActiveDropdown(null);
  };

  const handlePageClick = (targetPage) => {
    setCurrentPage(targetPage);
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  const serviceItems = [
    { label: t("ridesDrivers") || "Rides / Drivers", icon: Car, target: "rides" },
    { label: t("deliveries") || "Deliveries", icon: Package, target: "deliveries" },
    { label: t("roadsideAssistance") || "Roadside Assistance", icon: Wrench, target: "roadside" },
    { label: t("vehicleRental") || "Vehicle Rental", icon: Bike, target: "rental" },
    { label: t("apartmentRental") || "Apartment Rental", icon: Building2, target: "apartment" },
  ];

  const providerItems = [
    { label: "Become a Driver", icon: Car, modalKey: "driver" },
    { label: "Delivery Partner", icon: Truck, modalKey: "delivery" },
    { label: "Roadside Service", icon: Wrench, modalKey: "roadside" },
    { label: "List Your Vehicle", icon: Bike, modalKey: "vehicle" },
    { label: "List Your Apartment", icon: Building2, modalKey: "apartment" },
  ];

  return (
    <>
      <header
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          zIndex: 99999,
        }}
        className="bg-black/95 backdrop-blur-md text-white border-b border-neutral-800 shadow-xl select-none"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <button
                type="button"
                onClick={() => handlePageClick("home")}
                className="flex items-center gap-2 cursor-pointer focus:outline-none"
              >
                <div className="p-1 rounded-xl border border-[#c49746]/40 shadow-[0_0_15px_rgba(196,151,70,0.2)] bg-neutral-950 transition-transform duration-300 hover:scale-105">
                  <img src={logo} alt="Allogo" className="h-10 w-10 object-contain" />
                </div>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 rtl:space-x-reverse text-sm font-medium">
              <button
                type="button"
                onClick={() => handlePageClick("home")}
                className={`transition-colors cursor-pointer ${currentPage === "home" ? "text-[#c49746] font-semibold" : "text-gray-300 hover:text-[#c49746]"}`}
              >
                {t("home") || "Home"}
              </button>

              <button
                type="button"
                onClick={() => handlePageClick("about")}
                className={`transition-colors cursor-pointer ${currentPage === "about" ? "text-[#c49746] font-semibold" : "text-gray-300 hover:text-[#c49746]"}`}
              >
                {t("about") || "About Us"}
              </button>

              {/* Services Dropdown */}
              <div className="relative py-3">
                <button
                  type="button"
                  onClick={() => handleToggle("services")}
                  className="flex items-center gap-1.5 transition-colors cursor-pointer outline-none text-gray-300 hover:text-[#c49746]"
                >
                  <span>{t("services") || "Services"}</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180" : ""}`} />
                </button>

                {activeDropdown === "services" && (
                  <div style={{ zIndex: 100000 }} className="absolute top-full start-0 mt-1 w-64 bg-[#0d0d0d] border border-neutral-800 rounded-xl shadow-2xl p-2">
                    {serviceItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handlePageClick(item.target)}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#c49746] hover:text-black font-medium transition-all text-start cursor-pointer"
                        >
                          <Icon size={18} className="opacity-80" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Providers Dropdown */}
              <div className="relative py-3">
                <button
                  type="button"
                  onClick={() => handleToggle("providers")}
                  className="flex items-center gap-1.5 transition-colors cursor-pointer outline-none text-gray-300 hover:text-[#c49746]"
                >
                  <span>{t("providers") || "Providers"}</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${activeDropdown === "providers" ? "rotate-180" : ""}`} />
                </button>

                {activeDropdown === "providers" && (
                  <div style={{ zIndex: 100000 }} className="absolute top-full start-0 mt-1 w-64 bg-[#0d0d0d] border border-neutral-800 rounded-xl shadow-2xl p-2">
                    {providerItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleOpenProviderModal(item.modalKey)}
                          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#c49746] hover:text-black font-medium transition-all text-start cursor-pointer"
                        >
                          <Icon size={18} className="text-gray-400" />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => handlePageClick("contact")}
                className={`transition-colors cursor-pointer ${currentPage === "contact" ? "text-[#c49746] font-semibold" : "text-gray-300 hover:text-[#c49746]"}`}
              >
                {t("contact") || "Contact"}
              </button>
            </div>

            {/* Right Section: Language Dropdown & Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
              
              {/* Language Selector Dropdown */}
              <div className="relative py-3">
                <button
                  type="button"
                  onClick={() => handleToggle("languages")}
                  className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-neutral-800 bg-neutral-900/60 text-gray-200 hover:border-[#c49746] hover:text-[#c49746] transition-all cursor-pointer outline-none"
                >
                  <Globe size={18} />
                  <span>{currentLang.label}</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === "languages" ? "rotate-180" : ""}`} />
                </button>

                {activeDropdown === "languages" && (
                  <div style={{ zIndex: 100000 }} className="absolute top-full end-0 mt-1 w-36 bg-[#0d0d0d] border border-neutral-800 rounded-xl shadow-2xl p-1.5">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => changeLanguage(lang)}
                        className={`w-full text-start px-3 py-2 text-sm rounded-lg font-medium transition-all cursor-pointer ${
                          currentLang.code === lang.code ? "bg-[#c49746] text-black" : "text-gray-300 hover:bg-[#c49746]/20 hover:text-[#c49746]"
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Sign Up Button */}
              <button
                type="button"
                onClick={onSignUpClick}
                className="text-sm font-semibold px-5 py-2 rounded-lg border border-[#c49746] text-[#c49746] hover:bg-[#c49746] hover:text-black transition-all cursor-pointer"
              >
                {t("signUp") || "Sign Up"}
              </button>

              {/* Login Button */}
              <button
                type="button"
                onClick={onLoginClick}
                className="text-sm font-semibold px-5 py-2 rounded-lg bg-gradient-to-r from-[#9c7736] via-[#c49746] to-[#e4b55e] text-black shadow-md hover:scale-105 transition-all cursor-pointer"
              >
                {t("login") || "Login"}
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-400 hover:text-white focus:outline-none cursor-pointer"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-neutral-950 border-t border-neutral-800 px-4 pt-3 pb-6 space-y-3">
            <button
              type="button"
              onClick={() => handlePageClick("home")}
              className="w-full text-start block py-2 font-medium text-gray-200"
            >
              {t("home") || "Home"}
            </button>
            
            {/* Mobile Language Selector */}
            <div className="py-2 border-y border-neutral-800 flex items-center justify-between">
              <span className="text-sm text-gray-400">Language:</span>
              <div className="flex gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => changeLanguage(l)}
                    className={`px-3 py-1 text-xs rounded-lg font-bold ${currentLang.code === l.code ? "bg-[#c49746] text-black" : "bg-neutral-900 text-gray-300"}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => { setIsMobileMenuOpen(false); onSignUpClick(); }}
              className="w-full py-2.5 rounded-lg border border-[#c49746] text-[#c49746] text-center font-semibold text-sm cursor-pointer"
            >
              {t("signUp") || "Sign Up"}
            </button>
            <button
              type="button"
              onClick={() => { setIsMobileMenuOpen(false); onLoginClick(); }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#9c7736] via-[#c49746] to-[#e4b55e] text-black text-center font-semibold text-sm cursor-pointer"
            >
              {t("login") || "Login"}
            </button>
          </div>
        )}
      </header>

      <div style={{ height: "80px", width: "100%", flexShrink: 0 }} aria-hidden="true" />

      {/* ========================================================
          PROVIDER MODALS (Exact Screenshots Cards)
      ======================================================== */}
      <AnimatePresence>
        {activeProviderModal && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-amber-200 overflow-hidden my-8 text-neutral-900"
            >
              
              {/* 1. BECOME A DRIVER MODAL */}
              {activeProviderModal === 'driver' && (
                <>
                  <div className="bg-neutral-900 text-white py-6 px-8 text-center relative border-b border-neutral-800">
                    <button type="button" onClick={handleCloseProviderModal} className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs font-bold text-amber-400 cursor-pointer"><ArrowLeft size={16} /> Back</button>
                    <h3 className="text-2xl font-extrabold text-[#dfb56b]">Become a Driver</h3>
                    <p className="text-xs text-gray-400 mt-1">Register to drive with ALLOGO</p>
                    <button type="button" onClick={handleCloseProviderModal} className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-800 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer"><X size={18} /></button>
                  </div>
                  <div className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1"><label className="font-semibold text-gray-600">First Name</label><input type="text" placeholder="Enter first name" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Last Name</label><input type="text" placeholder="Enter last name" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                    </div>
                    <div className="space-y-1"><label className="font-semibold text-gray-600">WhatsApp Number</label><input type="text" placeholder="Enter WhatsApp number" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Vehicle Type</label><select className="w-full p-3 rounded-xl border border-amber-200 bg-white outline-none"><option>Select Vehicle Type</option></select></div>
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Driver Gender</label><select className="w-full p-3 rounded-xl border border-amber-200 bg-white outline-none"><option>Select Driver Gender</option></select></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Service Type</label><select className="w-full p-3 rounded-xl border border-amber-200 bg-white outline-none"><option>Select Service Type</option></select></div>
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Upload Vehicle Photo</label><input type="file" className="w-full p-2.5 rounded-xl border border-amber-200 text-gray-500 bg-gray-50" /></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Upload License</label><input type="file" className="w-full p-2.5 rounded-xl border border-amber-200 text-gray-500 bg-gray-50" /></div>
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Upload Vehicle Registration</label><input type="file" className="w-full p-2.5 rounded-xl border border-amber-200 text-gray-500 bg-gray-50" /></div>
                    </div>
                    <label className="flex items-center gap-2 pt-2 cursor-pointer font-medium text-gray-600"><input type="checkbox" className="w-4 h-4 rounded border-amber-300 accent-[#8d6226]" /><span>I confirm I have read and accepted the ALLOGO terms.</span></label>
                    <div className="pt-4 text-center"><button type="button" onClick={handleCloseProviderModal} className="px-8 py-3 rounded-xl text-xs font-bold text-white bg-neutral-700 hover:bg-neutral-800 shadow cursor-pointer">Submit Application</button></div>
                  </div>
                </>
              )}

              {/* 2. BECOME A DELIVERY PROVIDER MODAL */}
              {activeProviderModal === 'delivery' && (
                <>
                  <div className="bg-neutral-900 text-white py-6 px-8 text-center relative border-b border-neutral-800">
                    <button type="button" onClick={handleCloseProviderModal} className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs font-bold text-amber-400 cursor-pointer"><ArrowLeft size={16} /> Back</button>
                    <h3 className="text-2xl font-extrabold text-[#dfb56b]">Become a Delivery Provider</h3>
                    <p className="text-xs text-gray-400 mt-1">Register to provide delivery services with ALLOGO</p>
                    <button type="button" onClick={handleCloseProviderModal} className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-800 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer"><X size={18} /></button>
                  </div>
                  <div className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1"><label className="font-semibold text-gray-600">First Name</label><input type="text" placeholder="Enter first name" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Last Name</label><input type="text" placeholder="Enter last name" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                    </div>
                    <div className="space-y-1"><label className="font-semibold text-gray-600">WhatsApp Number</label><input type="text" placeholder="Enter WhatsApp number" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Vehicle Type</label><select className="w-full p-3 rounded-xl border border-amber-200 bg-white outline-none"><option>Select Vehicle Type</option></select></div>
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Delivery Category</label><select className="w-full p-3 rounded-xl border border-amber-200 bg-white outline-none"><option>Select Delivery Category</option></select></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Upload License</label><input type="file" className="w-full p-2.5 rounded-xl border border-amber-200 text-gray-500 bg-gray-50" /></div>
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Upload Vehicle Registration</label><input type="file" className="w-full p-2.5 rounded-xl border border-amber-200 text-gray-500 bg-gray-50" /></div>
                    </div>
                    <div className="space-y-1"><label className="font-semibold text-gray-600">Upload Vehicle Photo</label><input type="file" className="w-full p-2.5 rounded-xl border border-amber-200 text-gray-500 bg-gray-50" /></div>
                    <label className="flex items-center gap-2 pt-2 cursor-pointer font-medium text-gray-600"><input type="checkbox" className="w-4 h-4 rounded border-amber-300 accent-[#8d6226]" /><span>I confirm I have read and accepted the ALLOGO terms.</span></label>
                    <div className="pt-4 text-center"><button type="button" onClick={handleCloseProviderModal} className="px-8 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#7a5521] via-[#8d6226] to-[#dfb56b] shadow-md cursor-pointer">Get Verification Code</button></div>
                  </div>
                </>
              )}

              {/* 3. BECOME A ROADSIDE PROVIDER MODAL */}
              {activeProviderModal === 'roadside' && (
                <>
                  <div className="bg-neutral-900 text-white py-6 px-8 text-center relative border-b border-neutral-800">
                    <button type="button" onClick={handleCloseProviderModal} className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs font-bold text-amber-400 cursor-pointer"><ArrowLeft size={16} /> Back</button>
                    <h3 className="text-2xl font-extrabold text-[#dfb56b]">Become a Roadside Provider</h3>
                    <p className="text-xs text-gray-400 mt-1">Register as a mechanic, towing, battery, tire, or fuel assistance provider</p>
                    <button type="button" onClick={handleCloseProviderModal} className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-800 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer"><X size={18} /></button>
                  </div>
                  <div className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1"><label className="font-semibold text-gray-600">First Name</label><input type="text" placeholder="Enter first name" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Last Name</label><input type="text" placeholder="Enter last name" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                    </div>
                    <div className="space-y-1"><label className="font-semibold text-gray-600">WhatsApp Number</label><input type="text" placeholder="Enter WhatsApp number" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Roadside Service Type</label><select className="w-full p-3 rounded-xl border border-amber-200 bg-white outline-none"><option>Select roadside service</option></select></div>
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Service Zone / Area</label><input type="text" placeholder="Enter service zone / city" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Upload ID Card / Document</label><input type="file" className="w-full p-2.5 rounded-xl border border-amber-200 text-gray-500 bg-gray-50" /></div>
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Upload Equipment / Vehicle Photo</label><input type="file" className="w-full p-2.5 rounded-xl border border-amber-200 text-gray-500 bg-gray-50" /></div>
                    </div>
                    <label className="flex items-center gap-2 pt-2 cursor-pointer font-medium text-gray-600"><input type="checkbox" className="w-4 h-4 rounded border-amber-300 accent-[#8d6226]" /><span>I accept ALLOGO terms and understand that any payment/incident outside the app is my responsibility.</span></label>
                    <div className="pt-4 text-center"><button type="button" onClick={handleCloseProviderModal} className="px-8 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#7a5521] via-[#8d6226] to-[#dfb56b] shadow-md cursor-pointer">Get Verification Code</button></div>
                  </div>
                </>
              )}

              {/* 4. LIST YOUR VEHICLE MODAL */}
              {activeProviderModal === 'vehicle' && (
                <>
                  <div className="bg-neutral-900 text-white py-6 px-8 text-center relative border-b border-neutral-800">
                    <button type="button" onClick={handleCloseProviderModal} className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs font-bold text-amber-400 cursor-pointer"><ArrowLeft size={16} /> Back</button>
                    <h3 className="text-2xl font-extrabold text-[#dfb56b]">List Your Vehicle</h3>
                    <p className="text-xs text-gray-400 mt-1">Rent your car, scooter, motorcycle, SUV, or truck on ALLOGO</p>
                    <button type="button" onClick={handleCloseProviderModal} className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-800 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer"><X size={18} /></button>
                  </div>
                  <div className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1"><label className="font-semibold text-gray-600">First Name</label><input type="text" placeholder="Enter first name" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Last Name</label><input type="text" placeholder="Enter last name" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                    </div>
                    <div className="space-y-1"><label className="font-semibold text-gray-600">WhatsApp Number</label><input type="text" placeholder="Enter WhatsApp Number" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                    <div className="space-y-1"><label className="font-semibold text-gray-600">Vehicle Type</label><input type="text" placeholder="e.g. Car, Scooter, Truck" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Brand</label><input type="text" placeholder="e.g. Toyota, Honda" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Model</label><input type="text" placeholder="e.g. Corolla, Civic" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Rental Price (Daily)</label><input type="text" placeholder="Enter price per day" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Location</label><input type="text" placeholder="Enter pickup city / area" className="w-full p-3 rounded-xl border border-amber-200 outline-none" /></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Upload Vehicle Photos</label><input type="file" className="w-full p-2.5 rounded-xl border border-amber-200 text-gray-500 bg-gray-50" /></div>
                      <div className="space-y-1"><label className="font-semibold text-gray-600">Upload Registration Document</label><input type="file" className="w-full p-2.5 rounded-xl border border-amber-200 text-gray-500 bg-gray-50" /></div>
                    </div>
                    <label className="flex items-center gap-2 pt-2 cursor-pointer font-medium text-gray-600"><input type="checkbox" className="w-4 h-4 rounded border-amber-300 accent-[#8d6226]" /><span>I confirm I have read and accepted the ALLOGO terms.</span></label>
                    <div className="pt-4 text-center"><button type="button" onClick={handleCloseProviderModal} className="px-8 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#7a5521] via-[#8d6226] to-[#dfb56b] shadow-md cursor-pointer">Get Verification Code</button></div>
                  </div>
                </>
              )}

              {/* 5. LIST YOUR APARTMENT MODAL */}
              {activeProviderModal === 'apartment' && (
                <>
                  <div className="bg-neutral-900 text-white py-6 px-8 text-center relative border-b border-neutral-800">
                    <button type="button" onClick={handleCloseProviderModal} className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-xs font-bold text-amber-400 cursor-pointer"><ArrowLeft size={16} /> Back</button>
                    <h3 className="text-2xl font-extrabold text-[#dfb56b]">List Your Apartment</h3>
                    <p className="text-xs text-gray-400 mt-1">Add your apartment and rent it on ALLOGO</p>
                    <button type="button" onClick={handleCloseProviderModal} className="absolute right-6 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-neutral-800 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer"><X size={18} /></button>
                  </div>
                  <div className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
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
                    <div className="pt-4 text-center"><button type="button" onClick={handleCloseProviderModal} className="px-8 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#7a5521] via-[#8d6226] to-[#dfb56b] shadow-md cursor-pointer">Get Verification Code</button></div>
                  </div>
                </>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}