import React from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';

const contactInfo = [
  {
    id: 1,
    label: "WhatsApp Support",
    value: "1234 5678 890",
    icon: MessageCircle,
    href: "https://wa.me/12345678890",
  },
  {
    id: 2,
    label: "Email",
    value: "contact@allogo.dz",
    icon: Mail,
    href: "mailto:contact@allogo.dz",
  },
  {
    id: 3,
    label: "Phone",
    value: "1234 5678 890",
    icon: Phone,
    href: "tel:12345678890",
  },
];

const Ready = () => {
  return (
    <section className="w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Headings & Contact Details */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-tight">
                Ready to Transform <br />
                <span className="text-[#c59a53]">Service Experience?</span>
              </h2>
              <p className="mt-4 text-gray-600 text-sm sm:text-base">
                Join ALLOGO today as a user, driver, courier, or partner.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-4 pt-2">
              {contactInfo.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    className="flex items-center gap-4 group w-fit transition-transform duration-200 hover:translate-x-1"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#dfb76c] via-[#b88c42] to-[#6d5124] flex items-center justify-center shadow-md shrink-0 group-hover:brightness-110 transition-all">
                      <IconComponent className="w-5 h-5 text-white stroke-[2.2]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base font-bold text-[#111827] group-hover:text-[#b88c42] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Side: Action Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl p-7 sm:p-9 shadow-[0_12px_45px_rgba(0,0,0,0.06)] border border-gray-100 transition-all duration-300 hover:shadow-[0_18px_50px_rgba(197,154,83,0.14)]">
              <h3 className="text-2xl font-extrabold text-[#7d561d] mb-6">
                Get Started Now
              </h3>

              <div className="space-y-3.5">
                {/* Outlined Button 1 */}
                <button className="w-full py-3 px-6 rounded-2xl border-2 border-[#825c27] text-[#78531e] font-semibold text-sm sm:text-base hover:bg-[#825c27] hover:text-white transition-all duration-200 active:scale-[0.99]">
                  Sign Up Free
                </button>

                {/* Outlined Button 2 */}
                <button className="w-full py-3 px-6 rounded-2xl border-2 border-[#825c27] text-[#78531e] font-semibold text-sm sm:text-base hover:bg-[#825c27] hover:text-white transition-all duration-200 active:scale-[0.99]">
                  Login to Account
                </button>

                {/* Filled Gradient Button */}
                <button className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#6b4c20] via-[#a88242] to-[#dcb36b] text-white font-semibold text-sm sm:text-base shadow-md hover:brightness-110 transition-all duration-200 active:scale-[0.99]">
                  Explore Services
                </button>
              </div>

              {/* Bottom Notice */}
              <div className="mt-8 pt-5 border-t border-gray-100 text-center">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <span className="font-bold text-[#111827]">All commissions</span> reinvested in platform development & user experience
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Ready;