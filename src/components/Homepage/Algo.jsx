import React, { useEffect, useRef, useState } from 'react';
import { 
  Map, 
  Award, 
  ShieldCheck, 
  UserCheck, 
  Zap, 
  Clock 
} from 'lucide-react';

const featuresData = [
  {
    id: 1,
    icon: Map,
    title: "3D Map Tracking",
    desc: "Real-time GPS tracking for rides, deliveries, and roadside assistance using OpenStreetMap",
  },
  {
    id: 2,
    icon: Award,
    title: "Loyalty Points",
    desc: "1 point = 1 DZD; use points for rides, deliveries, rentals, or transfer to providers",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "Integrated card & cash payment system, card required for rentals and provider credits",
  },
  {
    id: 4,
    icon: UserCheck,
    title: "Verified Providers",
    desc: "All drivers, delivery personnel, and owners verified by ALLOGO controller",
  },
  {
    id: 5,
    icon: Zap,
    title: "Real-time Updates",
    desc: "Instant notifications for assignments, negotiations, and delivery status",
  },
  {
    id: 6,
    icon: Clock,
    title: "24/7 Support",
    desc: "Always available assistance for rides, deliveries, rentals, and roadside emergencies",
  },
];

// Single Feature Card with Intersection Observer for bi-directional smooth scroll entry
const FeatureCard = ({ feature, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const IconComponent = feature.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        transitionDelay: `${(index % 3) * 100}ms`,
      }}
      className={`group relative bg-white rounded-3xl p-6 sm:p-7 flex items-start gap-4 sm:gap-5 transition-all duration-300 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-12 scale-95'
      } border border-gray-100 hover:border-[#dfb76c] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_35px_rgba(197,154,83,0.18)] hover:-translate-y-1.5`}
    >
      {/* Golden Bronze Squircle Icon Badge */}
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7d561d] via-[#a8803d] to-[#684617] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:brightness-110 transition-all duration-300">
        <IconComponent className="w-5 h-5 text-white stroke-[2.2]" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-base sm:text-lg font-bold text-[#0f172a] mb-1.5 group-hover:text-[#b88c42] transition-colors duration-200">
          {feature.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
          {feature.desc}
        </p>
      </div>
    </div>
  );
};

const Algo = () => {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#fdfdfd]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Why Choose <span className="text-[#c59a53]">ALLOGO?</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed font-normal">
            Built for efficiency, transparency, and multi-service convenience with points, credits, verified providers, and 24/7 support.
          </p>
        </div>

        {/* 6 Cards Grid (Responsive for all screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {featuresData.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Algo;