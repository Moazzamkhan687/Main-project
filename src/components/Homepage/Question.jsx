import React, { useState, useEffect, useRef } from 'react';
import { 
  HelpCircle, 
  Banknote, 
  MapPin, 
  Coins, 
  ShieldCheck, 
  Plus 
} from 'lucide-react';

const faqData = [
  {
    id: 1,
    icon: HelpCircle,
    question: "What services does ALLOGO offer?",
    answer:
      "ALLOGO is Algeria's first multi-service super app offering VTC Ride Booking, Vehicle & Apartment Rentals, Package Delivery, Food Delivery, and 24/7 Roadside Assistance.",
  },
  {
    id: 2,
    icon: Banknote,
    question: "How does the commission system work?",
    answer:
      "We operate on a fair, tiered commission structure ranging from 3% to 9% depending on the service category (e.g., 9% for VTC, 5% for deliveries, and 3% for rentals).",
  },
  {
    id: 3,
    icon: MapPin,
    question: "What is 3D map tracking?",
    answer:
      "Our system integrates open-source MapLibre 3D visualization to show live vehicles, delivery drivers, and service providers moving in real-time across interactive map coordinates.",
  },
  {
    id: 4,
    icon: Coins,
    question: "How does the loyalty points system work?",
    answer:
      "Every transaction earns you points where 1 Point equals 1 DZD. You can redeem accumulated points for discounted rides, deliveries, or transfer them directly to providers.",
  },
  {
    id: 5,
    icon: ShieldCheck,
    question: "How secure is the platform?",
    answer:
      "Every driver, courier, and property host undergoes mandatory document validation by our controllers. Payments are securely encrypted with integrated card and cash protections.",
  },
];

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const toggleAccordion = (id) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & FAQs */}
          <div
            className={`lg:col-span-6 space-y-6 transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Header */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111827] tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-500 font-normal">
                Everything you need to know about ALLOGO services.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3.5 pt-2">
              {faqData.map((item) => {
                const IconComponent = item.icon;
                const isOpen = openIndex === item.id;

                return (
                  <div
                    key={item.id}
                    onClick={() => toggleAccordion(item.id)}
                    className={`group rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                      isOpen
                        ? 'border-[#dfb76c] bg-[#fffdfa] shadow-[0_8px_25px_rgba(197,154,83,0.12)]'
                        : 'border-gray-200/90 bg-white hover:border-[#dfb76c] hover:shadow-[0_6px_22px_rgba(197,154,83,0.12)]'
                    }`}
                  >
                    {/* Accordion Header Row */}
                    <div className="flex items-center justify-between p-4 sm:p-4.5 gap-4">
                      <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                        {/* Golden Circular Badge */}
                        <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#8f682c] via-[#b98e45] to-[#6d4d1d] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110">
                          <IconComponent className="w-5 h-5 text-white stroke-[2.2]" />
                        </div>

                        {/* Question Text with Golden Hover */}
                        <span
                          className={`text-sm sm:text-base font-semibold tracking-tight text-left transition-colors duration-200 ${
                            isOpen
                              ? 'text-[#b88c42]'
                              : 'text-[#111827] group-hover:text-[#b88c42]'
                          }`}
                        >
                          {item.question}
                        </span>
                      </div>

                      {/* Plus/Close Icon with Golden Hover */}
                      <div className="shrink-0 pl-2">
                        <Plus
                          className={`w-4 h-4 transition-all duration-300 stroke-[2.5] ${
                            isOpen
                              ? 'rotate-45 text-[#b88c42]'
                              : 'rotate-0 text-gray-400 group-hover:text-[#b88c42] group-hover:scale-110'
                          }`}
                        />
                      </div>
                    </div>

                    {/* Smooth Expandable Answer Body */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Modern City Skyline Image */}
          <div
            className={`lg:col-span-6 transition-all duration-700 ease-out delay-150 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-3xl overflow-hidden shadow-[0_16px_45px_rgba(0,0,0,0.12)] group border border-gray-100">
              {/* Skyline Image */}
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
                alt="Cityscape Skyline"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Sunset Golden Warmth Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-[#c59a53]/15 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Question;