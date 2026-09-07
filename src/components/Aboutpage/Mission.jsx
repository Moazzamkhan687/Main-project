import React, { useState } from 'react';
import { 
  Eye, 
  Target, 
  Rocket, 
  Star, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Award, 
  Plus 
} from 'lucide-react';

const coreValuesData = [
  {
    id: 1,
    title: 'Innovation',
    icon: TrendingUp,
    details: 'Pioneering cutting-edge technology and modern interfaces to redefine everyday user convenience.',
  },
  {
    id: 2,
    title: 'Trust',
    icon: ShieldCheck,
    details: 'Building transparent, secure, and highly reliable connections between customers and service providers.',
  },
  {
    id: 3,
    title: 'Community',
    icon: Users,
    details: 'Empowering local businesses and drivers while connecting communities with essential daily services.',
  },
  {
    id: 4,
    title: 'Excellence',
    icon: Award,
    details: 'Delivering exceptional standard in performance, user satisfaction, and seamless operational quality.',
  },
];

const strategicGoals = [
  'National expansion across all 58 wilayas',
  'AI-powered service optimization',
  'Sustainable EV integration network',
  'Regional expansion across North Africa',
];

const Mission = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#fdfdfd]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-2.5">
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-r from-transparent to-[#c59a53]" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              Our Mission <span className="text-[#c59a53]">And Vision</span>
            </h2>
            <span className="hidden sm:inline-block w-12 h-[1.5px] bg-gradient-to-l from-transparent to-[#c59a53]" />
          </div>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Driving innovation with purpose, building Algeria's most trusted service ecosystem.
          </p>
        </div>

        {/* Two-Column Grid for Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: Our Vision */}
          <div className="group bg-white rounded-3xl p-7 sm:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(197,154,83,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Badge Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#fbf5ea] border border-[#f0e2ca] flex items-center justify-center mb-6 group-hover:bg-[#c59a53] transition-colors duration-300">
                <Eye className="w-5 h-5 text-[#b88c42] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-4">
                Our Vision
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                To become Algeria's leading multi-service platform, revolutionizing daily life through integrated digital solutions that connect communities with essential services.
              </p>

              {/* Strategic Goals Header */}
              <div className="flex items-center gap-2.5 mb-5">
                <Rocket className="w-5 h-5 text-[#b88c42]" />
                <h4 className="text-lg font-bold text-[#111827]">Strategic Goals</h4>
              </div>

              {/* Strategic Goals List */}
              <ul className="space-y-3.5 pl-1">
                {strategicGoals.map((goal, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm sm:text-base text-gray-700 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#b88c42] shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Card: Our Mission */}
          <div className="group bg-white rounded-3xl p-7 sm:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(197,154,83,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Badge Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#fbf5ea] border border-[#f0e2ca] flex items-center justify-center mb-6 group-hover:bg-[#c59a53] transition-colors duration-300">
                <Target className="w-5 h-5 text-[#b88c42] group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-4">
                Our Mission
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
                To empower Algerians with reliable, accessible, and innovative services that simplify everyday tasks while supporting local economies and digital transformation.
              </p>

              {/* Core Values Header */}
              <div className="flex items-center gap-2.5 mb-5">
                <Star className="w-5 h-5 text-[#b88c42] fill-[#b88c42]" />
                <h4 className="text-lg font-bold text-[#111827]">Core Values</h4>
              </div>

              {/* Values Items with Golden Gradient & Interactive Hover */}
              <div className="space-y-3">
                {coreValuesData.map((val) => {
                  const ValueIcon = val.icon;
                  const isOpen = activeAccordion === val.id;

                  return (
                    <div
                      key={val.id}
                      onClick={() => toggleAccordion(val.id)}
                      className="cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 bg-gradient-to-r from-[#5f4928] via-[#a88242] to-[#cb9e54] hover:from-[#6b522d] hover:via-[#b88e49] hover:to-[#dfaf5d] hover:shadow-md hover:scale-[1.01]"
                    >
                      <div className="flex items-center justify-between px-5 py-3.5 text-white">
                        <div className="flex items-center gap-3">
                          <ValueIcon className="w-5 h-5 text-white/95" />
                          <span className="font-semibold text-sm sm:text-base tracking-wide">
                            {val.title}
                          </span>
                        </div>
                        <Plus
                          className={`w-4 h-4 text-white/90 transition-transform duration-300 ${
                            isOpen ? 'rotate-45' : 'rotate-0'
                          }`}
                        />
                      </div>

                      {/* Dropdown description on click */}
                      {isOpen && (
                        <div className="px-5 pb-3 text-xs sm:text-sm text-amber-50/90 leading-relaxed border-t border-white/10 pt-2 animate-fadeIn">
                          {val.details}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;