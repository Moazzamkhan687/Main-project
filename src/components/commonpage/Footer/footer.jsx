import React from "react";
import { motion } from "framer-motion";
import logo from "../../../assets/logo.png";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Star, 
  MessageCircle 
} from "lucide-react";

// Social SVG Icons
const FacebookIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Agar aapke paas mukhtalif pages hain, toh yahan unke routes/paths de dein
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    { name: 'Rides / Drivers', path: '/services' },
    { name: 'Deliveries', path: '/services' },
    { name: 'Roadside Assistance', path: '/services' },
    { name: 'Vehicle Rental', path: '/services' },
    { name: 'Apartment Rental', path: '/services' },
  ];

  return (
    <footer className="bg-black text-neutral-300 border-t border-neutral-800/80 pt-16 pb-8 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-neutral-900">
          
          {/* Column 1: Brand Info */}
          <motion.div variants={itemVariants} className="space-y-5">
            <div className="inline-block p-1.5 rounded-xl border border-[#c49746]/40 shadow-[0_0_15px_rgba(196,151,70,0.2)] bg-neutral-950 transition-transform duration-300 hover:scale-105">
              <img src={logo} alt="Allogo" className="h-14 w-14 object-contain" />
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              All-in-one platform for Rides, Rentals, Food Delivery, Apartments & Roadside Assistance.
            </p>

            <div className="flex items-center gap-2 text-sm text-[#c49746] font-medium pt-2">
              <Star size={16} className="fill-[#c49746]" />
              <span>Premium Services - 24/7 Available</span>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-[#c49746] font-bold text-sm tracking-wider uppercase border-b border-neutral-800/80 pb-2 inline-block w-full">
              Quick Links
            </h3>
            <ul className="space-y-3 pt-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.path}
                    className="inline-flex items-center gap-2.5 text-sm hover:text-[#c49746] hover:translate-x-1.5 transition-all duration-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c49746]"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-[#c49746] font-bold text-sm tracking-wider uppercase border-b border-neutral-800/80 pb-2 inline-block w-full">
              Services
            </h3>
            <ul className="space-y-3 pt-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a
                    href={service.path}
                    className="inline-flex items-center gap-2.5 text-sm hover:text-[#c49746] hover:translate-x-1.5 transition-all duration-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c49746]"></span>
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-[#c49746] font-bold text-sm tracking-wider uppercase border-b border-neutral-800/80 pb-2 inline-block w-full">
              Contact
            </h3>
            
            <div className="space-y-3.5 pt-2">
              <a 
                href="mailto:support@allogo.dz" 
                className="flex items-center gap-3 text-sm text-neutral-300 hover:text-[#c49746] transition-colors group"
              >
                <span className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-[#c49746]/50 transition-colors">
                  <Mail size={16} className="text-[#c49746]" />
                </span>
                <span>support@allogo.dz</span>
              </a>

              <a 
                href="tel:0541970532" 
                className="flex items-center gap-3 text-sm text-neutral-300 hover:text-[#c49746] transition-colors group"
              >
                <span className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-[#c49746]/50 transition-colors">
                  <Phone size={16} className="text-[#c49746]" />
                </span>
                <span>0541970532 / 0776927328</span>
              </a>

              <div className="flex items-center gap-3 text-sm text-neutral-300 group">
                <span className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-[#c49746]/50 transition-colors">
                  <MapPin size={16} className="text-[#c49746]" />
                </span>
                <span>Algiers, Algeria</span>
              </div>
            </div>

            <div className="pt-4 space-y-1 text-xs text-neutral-400 border-t border-neutral-900">
              <p><strong className="text-white">ALLOGO:</strong> Connecting users and service providers</p>
              <p className="text-[#c49746]">allogo.dz2025@gmail.com</p>
              <p className="pt-1 text-neutral-500 font-medium">Manel Meriem MEDJEROUB / Chemlal</p>
            </div>
          </motion.div>

        </div>

      {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants} 
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500"
        >
          {/* Left: Copyright */}
          <p className="order-1 md:order-1 text-center md:text-left">
            © 2026 ALLOGO — All Rights Reserved
          </p>

          {/* Center: Moazzam Khan */}
          <div className="order-2 md:order-2 flex items-center justify-center">
            <div className="relative group cursor-pointer px-4 py-1.5 rounded-full bg-neutral-950/80 shadow-[0_0_15px_rgba(196,151,70,0.15)] hover:shadow-[0_0_25px_rgba(196,151,70,0.5)] transition-all duration-500 overflow-hidden">
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
              <span className="text-sm font-extrabold tracking-widest uppercase bg-gradient-to-r from-[#e4b55e] via-[#fff3c4] to-[#c49746] bg-clip-text text-transparent group-hover:scale-105 inline-block transition-transform duration-300 drop-shadow-[0_2px_8px_rgba(228,181,94,0.4)]">
                Moazzam Khan
              </span>
            </div>
          </div>

          {/* Right: Social Icons */}
          <div className="order-3 md:order-3 flex items-center gap-3">
            {[
              { icon: FacebookIcon, href: '#' },
              { icon: TwitterIcon, href: '#' },
              { icon: InstagramIcon, href: '#' },
              { icon: MessageCircle, href: '#' },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="h-9 w-9 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-[#c49746] hover:border-[#c49746] hover:shadow-[0_0_12px_rgba(196,151,70,0.4)] transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              );
          })}
          </div>
        </motion.div>

      </motion.div>
    </footer>
  );
} 