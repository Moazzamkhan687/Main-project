import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MessageCircle,
  MapPin,
  Building,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  Send,
  Briefcase,
  AlertTriangle,
  ChevronDown,
  User,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    subject: "",
    message: "",
  });

  const contactCards = [
    {
      icon: MapPin,
      title: "Headquarters",
      main: "Algiers Digital Hub, Bab Ezzouar, Algiers, Algeria",
      sub: "Main operational center",
      link: "#",
    },
    {
      icon: Building,
      title: "Regional Offices",
      main: "Oran · Constantine · Annaba · Tlemcen",
      sub: "Available in major cities",
      link: "#",
    },
    {
      icon: Phone,
      title: "Support Line",
      main: "+213 770 12 34 56",
      sub: "24/7 Customer Service",
      link: "tel:+213770123456",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Business",
      main: "+213 550 12 34 56",
      sub: "Quick response guaranteed",
      link: "https://wa.me/213550123456",
    },
    {
      icon: Mail,
      title: "Email",
      main: "contact@allogo.dz",
      sub: "support@allogo.dz",
      link: "mailto:contact@allogo.dz",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      main: "24/7 All Services",
      sub: "Round-the-clock availability",
      link: "#",
    },
  ];

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  };

  return (
    <div className="w-full bg-black">
      {/* ================= 1. HERO TOP SECTION ================= */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-black text-white px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-35 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/85 z-0" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/60 to-black z-0" />

        <motion.div
          className="relative z-10 max-w-4xl w-full mx-auto text-center flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={heroContainerVariants}
        >
          <motion.h1
            variants={heroItemVariants}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Contact{" "}
            <span className="bg-gradient-to-r from-[#e4b55e] via-[#fff4cc] to-[#c49746] bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(196,151,70,0.35)]">
              ALLOGO
            </span>{" "}
            Platform
          </motion.h1>

          <motion.p
            variants={heroItemVariants}
            className="mt-4 sm:mt-5 text-base sm:text-xl md:text-2xl font-semibold text-[#c49746] tracking-wide"
          >
            Algeria's Complete Service Ecosystem
          </motion.p>

          <motion.p
            variants={heroItemVariants}
            className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-neutral-300/90 leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Connect with our dedicated support team, explore partnership opportunities, or get assistance with any service across Algeria.
          </motion.p>

          <motion.div
            variants={heroItemVariants}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto relative group overflow-hidden px-7 py-3 rounded-xl bg-gradient-to-r from-[#9c7736] via-[#c49746] to-[#e4b55e] text-black font-bold text-sm sm:text-base shadow-[0_0_22px_rgba(196,151,70,0.35)] hover:shadow-[0_0_32px_rgba(228,181,94,0.6)] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
              <span>Launch Platform</span>
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-7 py-3 rounded-xl border border-[#c49746]/80 bg-neutral-950/70 hover:bg-[#c49746] text-[#e4b55e] hover:text-black font-semibold text-sm sm:text-base transition-all duration-300 shadow-[0_0_15px_rgba(196,151,70,0.15)] hover:shadow-[0_0_25px_rgba(196,151,70,0.4)] flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <MessageCircle size={18} />
              <span>Business Inquiry</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= 2. FORM & INFO SECTION ================= */}
      <section className="bg-white text-neutral-800 py-16 px-4 sm:px-6 lg:px-8 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-3.5">
              {contactCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.a
                    key={index}
                    href={card.link}
                    whileHover={{ y: -3, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-start gap-4 p-4 rounded-xl border border-neutral-200 bg-white hover:border-[#c49746] hover:shadow-[0_8px_20px_rgba(196,151,70,0.18)] transition-all duration-300 block"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[#9c7736] flex items-center justify-center text-white group-hover:bg-[#c49746] group-hover:scale-105 transition-all shadow-sm">
                      <Icon size={20} />
                    </div>

                    <div className="space-y-0.5">
                      <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        {card.title}
                      </h4>
                      <p className="text-sm sm:text-base font-bold text-neutral-900 group-hover:text-[#9c7736] transition-colors leading-snug">
                        {card.main}
                      </p>
                      <p className="text-xs text-neutral-500">{card.sub}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Emergency Support Card */}
            <div className="pt-2">
              <div className="p-4 rounded-xl border border-red-200 bg-red-50/40 text-center space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600">
                  <AlertTriangle size={15} />
                  <span>Emergency Support</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 px-4 rounded-lg bg-white border border-red-300 text-red-600 font-bold text-xs sm:text-sm hover:bg-red-600 hover:text-white transition-colors duration-200 shadow-sm"
                >
                  Emergency Roadside Assistance
                </motion.button>
              </div>
            </div>

            {/* Help & Legal Mentions */}
            <div className="pt-4 border-t border-neutral-200 text-xs text-neutral-500 space-y-1.5">
              <h5 className="font-bold text-neutral-800 text-xs tracking-wide uppercase">
                Help & Legal Mentions
              </h5>
              <p>
                <strong className="text-neutral-700">ALLOGO:</strong> Platform connecting users and service providers
              </p>
              <p>
                <strong className="text-neutral-700">Contact:</strong> allogo.dz2025@gmail.com
              </p>
              <p>
                <strong className="text-neutral-700">Creator:</strong> Manel Meriem MEDJEROUB / Chemlal
              </p>
              <p>
                <strong className="text-neutral-700">Phone:</strong> 0541970532 / 0776927328
              </p>
            </div>
          </div>

          {/* Right Side: Form + Map + Legal */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Form */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                
                {/* Row 1: Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name Field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-semibold text-[#9c7736]">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User
                        size={18}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                      />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c49746] focus:ring-2 focus:ring-[#c49746]/20 outline-none text-sm text-neutral-800 transition-all placeholder:text-neutral-400"
                      />
                    </div>
                  </div>

                  {/* Phone Number Field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-semibold text-[#9c7736]">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="+213 550 00 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c49746] focus:ring-2 focus:ring-[#c49746]/20 outline-none text-sm text-neutral-800 transition-all placeholder:text-neutral-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Email & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-semibold text-[#9c7736]">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                      />
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c49746] focus:ring-2 focus:ring-[#c49746]/20 outline-none text-sm text-neutral-800 transition-all placeholder:text-neutral-400"
                      />
                    </div>
                  </div>

                  {/* Service Dropdown */}
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-semibold text-[#9c7736]">
                      Service Interested In *
                    </label>
                    <div className="relative">
                      <Briefcase
                        size={18}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400"
                      />
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c49746] focus:ring-2 focus:ring-[#c49746]/20 outline-none text-sm text-neutral-800 transition-all appearance-none bg-white cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="rides">Rides / Drivers</option>
                        <option value="delivery">Deliveries</option>
                        <option value="roadside">Roadside Assistance</option>
                        <option value="vehicle">Vehicle Rental</option>
                        <option value="apartment">Apartment Rental</option>
                      </select>
                      <ChevronDown
                        size={18}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-semibold text-[#9c7736]">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Brief description of your inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c49746] focus:ring-2 focus:ring-[#c49746]/20 outline-none text-sm text-neutral-800 transition-all placeholder:text-neutral-400"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-semibold text-[#9c7736]">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please provide details about your request..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:border-[#c49746] focus:ring-2 focus:ring-[#c49746]/20 outline-none text-sm text-neutral-800 transition-all placeholder:text-neutral-400 resize-y"
                  />
                </div>

                {/* Send Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative group overflow-hidden py-3 px-6 rounded-lg bg-gradient-to-r from-[#9c7736] via-[#c49746] to-[#d8a853] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-[0_8px_25px_rgba(196,151,70,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                  <span>Send Message</span>
                  <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl border border-neutral-200 overflow-hidden bg-neutral-100 h-64 sm:h-72 flex items-center justify-center relative shadow-sm">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102353.60627581559!2d3.0039521!3d36.7538259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad6795639515%3A0x4ba4b4c9d0a7e602!2sAlgiers%2C%20Algeria!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full border-0 filter grayscale contrast-125 opacity-90"
                loading="lazy"
              />
            </div>

            {/* Disclaimer */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 shadow-sm space-y-2">
              <h5 className="font-bold text-neutral-900 text-sm">Legal Disclaimer</h5>
              <p className="text-xs text-neutral-500 leading-relaxed">
                I confirm that I have read and accepted the terms and conditions of the ALLOGO app. I understand that ALLOGO is only a platform connecting users and drivers/delivery personnel. Any negotiation, payment, incident, or problem during a ride or delivery is my responsibility and not the responsibility of ALLOGO.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}