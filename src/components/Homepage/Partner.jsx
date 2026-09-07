import React, { useEffect, useRef, useState } from 'react';
import { 
  Coins, 
  CreditCard, 
  CheckCircle2, 
  MapPin 
} from 'lucide-react';

const partnerBenefits = [
  {
    id: 1,
    icon: Coins,
    title: "Points System",
    desc: "Earn points on all transactions (1 point = 1 DA) and redeem or transfer to providers.",
  },
  {
    id: 2,
    icon: CreditCard,
    title: "Credit Facility",
    desc: "Active users can access 1000-2000 DA credit based on loyalty and activity.",
  },
  {
    id: 3,
    icon: CheckCircle2,
    title: "Verified Providers",
    desc: "All drivers, delivery personnel, and property owners are validated by ALLOGO.",
  },
  {
    id: 4,
    icon: MapPin,
    title: "Real-time 3D Tracking",
    desc: "All services are visualized live on MapLibre 3D for transparency and trust.",
  },
];

const BenefitCard = ({ benefit, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const IconComponent = benefit.icon;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
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
        transitionDelay: `${(index % 2) * 120}ms`,
      }}
      className={`group bg-white rounded-3xl p-6 sm:p-8 flex items-start gap-5 border border-[#e5d6be] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_35px_rgba(197,154,83,0.16)] hover:-translate-y-1.5 hover:border-[#b88c42] transition-all duration-500 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-12 scale-95'
      }`}
    >
      {/* Rounded Squircle Metallic Gold Badge */}
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#805923] via-[#b38843] to-[#6a491c] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:brightness-110 transition-all duration-300">
        <IconComponent className="w-6 h-6 text-white stroke-[2]" />
      </div>

      {/* Text Details */}
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-bold text-[#8d6227] mb-2 group-hover:text-[#6a491c] transition-colors duration-200">
          {benefit.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
          {benefit.desc}
        </p>
      </div>
    </div>
  );
};

const Partner = () => {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-14 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
              Partner <span className="text-[#111827]">Benefits</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed font-normal">
            Incentives, rewards, and real-time tracking for all ALLOGO providers
          </p>
        </div>

        {/* 2x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {partnerBenefits.map((benefit, index) => (
            <BenefitCard key={benefit.id} benefit={benefit} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Partner;