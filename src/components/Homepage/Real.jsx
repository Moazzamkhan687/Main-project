import React, { useEffect, useRef, useState } from 'react';
import { 
  Car, 
  Bike, 
  Home, 
  Truck, 
  UtensilsCrossed, 
  Wrench 
} from 'lucide-react';

const trackingPoints = [
  { id: 1, title: 'Ride Vehicles', icon: Car, top: '44%', left: '22%', delay: '0s' },
  { id: 2, title: 'Vehicle Rentals', icon: Bike, top: '61%', left: '33%', delay: '1s', pulse: true },
  { id: 3, title: 'Apartment Rentals', icon: Home, top: '76%', left: '46%', delay: '1.5s' },
  { id: 4, title: 'Package Delivery', icon: Truck, top: '46%', left: '60%', delay: '0.8s' },
  { id: 5, title: 'Food Delivery', icon: UtensilsCrossed, top: '61%', left: '69%', delay: '2s' },
  { id: 6, title: 'Roadside Assistance', icon: Wrench, top: '76%', left: '81%', delay: '2.5s' },
];

const Real = () => {
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

  return (
    <section 
      ref={sectionRef} 
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Main Heading Section */}
        <div className="text-center mb-14 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
              Real Time 3D <span className="text-[#c59a53]">Service Tracking</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Track rides, deliveries, rentals, and roadside assistance live in 3D with secure, free, and transparent MapLibre visualization
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Feature Details */}
          <div className={`lg:col-span-6 space-y-7 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#a67c37] tracking-wide">
              Live Service Tracking
            </h3>

            <div className="space-y-6 text-sm sm:text-base">
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b88c42] mt-1.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-[#111827]">Real-time 3D Visualization</h4>
                  <p className="text-gray-600 text-xs sm:text-sm font-normal mt-0.5 leading-relaxed">
                    All rides, deliveries, rentals, and roadside services shown live on map with gentle animation.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b88c42] mt-1.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-[#111827]">Free Map Solution</h4>
                  <p className="text-gray-600 text-xs sm:text-sm font-normal mt-0.5 leading-relaxed">
                    Open-source MapLibre 3D, no Google Maps fees.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b88c42] mt-1.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-[#111827]">Verified Providers</h4>
                  <p className="text-gray-600 text-xs sm:text-sm font-normal mt-0.5 leading-relaxed">
                    All drivers, delivery personnel, and owners validated by ALLOGO controller.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#b88c42] mt-1.5 shrink-0" />
                <div>
                  <h4 className="font-bold text-[#111827]">Credits & Points System</h4>
                  <p className="text-gray-600 text-xs sm:text-sm font-normal mt-0.5 leading-relaxed">
                    Providers and users earn points and credits; points can be used or transferred to providers.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Colors Card */}
            <div className="bg-[#fcfaf7] border border-[#f0e6d6] rounded-2xl p-5 sm:p-6 shadow-sm">
              <h4 className="font-bold text-[#8a6327] text-base mb-4">
                Service Colors
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 text-xs sm:text-sm text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#dfb76c]" />
                  <span>Ride Vehicles (Male/Female)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#4a3b2c]" />
                  <span>Vehicle Rentals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c59a53]" />
                  <span>Apartment Rentals</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2a241e]" />
                  <span>Package Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#e3be77]" />
                  <span>Food Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#6d5124]" />
                  <span>Roadside Assistance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Map Mockup */}
          <div className={`lg:col-span-6 transition-all duration-700 ease-out delay-150 transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="relative w-full h-[380px] sm:h-[430px] rounded-3xl overflow-hidden bg-[#0d131f] border border-gray-800 shadow-[0_15px_45px_rgba(0,0,0,0.25)] flex items-center justify-center group">
              
              {/* Map Grid Background */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #ffffff 1px, transparent 1px),
                    linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Main Golden Road Horizon Line */}
              <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-[#c59a53]/40 shadow-[0_0_10px_#c59a53]" />

              {/* Tracking Markers */}
              {trackingPoints.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.id}
                    style={{ top: item.top, left: item.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer group/node"
                  >
                    {/* Pulsing Radar Ring (Vehicle Rental node) */}
                    {item.pulse && (
                      <div className="absolute w-14 h-14 rounded-full border border-[#c59a53] animate-ping opacity-35" />
                    )}

                    {/* Outer Glow Halo */}
                    <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#e2ba73] bg-[#7d561d]/85 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/node:scale-125 group-hover/node:bg-[#c59a53]">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2]" />
                    </div>

                    {/* Tooltip on hover */}
                    <span className="absolute bottom-full mb-2 hidden group-hover/node:block px-2.5 py-1 text-[11px] rounded-md bg-black/90 text-white whitespace-nowrap shadow-md z-30 transition-all">
                      {item.title}
                    </span>
                  </div>
                );
              })}

              {/* MapLibre 3D Badge (Bottom Right) */}
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-md bg-black/60 border border-gray-700/60 backdrop-blur-sm text-[11px] text-gray-300 font-medium tracking-wide">
                MapLibre 3D
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Real;