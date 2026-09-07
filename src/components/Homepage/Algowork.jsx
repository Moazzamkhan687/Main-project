import React, { useEffect, useRef, useState } from 'react';
import { 
  Search, 
  MapPin, 
  Users, 
  CheckCircle2 
} from 'lucide-react';

const stepsData = [
  {
    id: 1,
    icon: Search,
    title: "Choose Service",
    desc: "Select rides, deliveries, rentals, apartments, or roadside assistance",
  },
  {
    id: 2,
    icon: MapPin,
    title: "Set Details",
    desc: "Enter pickup, delivery, or service location and details",
  },
  {
    id: 3,
    icon: Users,
    title: "Match with Provider",
    desc: "Get connected to verified providers instantly",
  },
  {
    id: 4,
    icon: CheckCircle2,
    title: "Track & Complete",
    desc: "Monitor your service live in 3D until completion",
  },
];

const StepCard = ({ step, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const IconComponent = step.icon;

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
        transitionDelay: `${index * 120}ms`,
      }}
      className={`group bg-white rounded-3xl p-8 flex flex-col items-center text-center border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_40px_rgba(197,154,83,0.18)] hover:-translate-y-2 hover:border-[#dfb76c]/60 transition-all duration-500 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-12 scale-95'
      }`}
    >
      {/* Circle Metallic Gold Icon Badge */}
      <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#8f682c] via-[#b98e45] to-[#6d4d1d] flex items-center justify-center shadow-md mb-6 group-hover:scale-110 group-hover:brightness-110 transition-all duration-300">
        <IconComponent className="w-7 h-7 text-white stroke-[2.2]" />
      </div>

      {/* Step Title */}
      <h3 className="text-xl font-bold text-[#b88c42] mb-3 group-hover:text-[#976f2b] transition-colors duration-200">
        {step.title}
      </h3>

      {/* Step Description */}
      <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[240px]">
        {step.desc}
      </p>
    </div>
  );
};

const Algowork = () => {
  return (
    <section className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
              How <span className="text-[#111827]">ALLOGO</span> <span className="text-[#c59a53]">Works</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-normal">
            Book rides, deliveries, rentals, apartments, or roadside assistance in 4 simple steps with live 3D tracking and verified providers.
          </p>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {stepsData.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Algowork;