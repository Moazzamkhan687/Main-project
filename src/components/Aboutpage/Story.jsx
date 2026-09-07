import React from "react";
import { motion } from "framer-motion";
import { Rocket, Users, Globe } from "lucide-react";

export default function Story() {
  const storyCards = [
    {
      icon: Rocket,
      title: "The Beginning",
      desc: "Started with a simple idea: create a unified platform that solves multiple daily needs.",
      bgImage:
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000&auto=format&fit=crop", // Glowing clocks / time concept
    },
    {
      icon: Users,
      title: "UC Design",
      desc: "Clean interfaces and discreet registration with powerful features.",
      bgImage:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop", // UI / Modern 3D design cards
    },
    {
      icon: Globe,
      title: "Local Focus",
      desc: "Tailored for Algerian cities with inter-wilaya and intra-wilaya services.",
      bgImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop", // Earth night lights / cities
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };

  return (
    <section className="relative w-full bg-white text-neutral-800 py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Title with Subtle Side Accent Lines */}
          <div className="flex items-center justify-center gap-4">
            <span className="w-8 sm:w-12 h-[1.5px] bg-neutral-300 rounded-full" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
              Our{" "}
              <span className="bg-gradient-to-r from-[#9c7736] via-[#c49746] to-[#e4b55e] bg-clip-text text-transparent">
                Story
              </span>
            </h2>
            <span className="w-8 sm:w-12 h-[1.5px] bg-neutral-300 rounded-full" />
          </div>

          {/* Subtitle / Description */}
          <p className="mt-5 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Born from the vision to create Algeria's most comprehensive service platform, our journey began with a commitment to bridge the gap between traditional services and digital convenience.
          </p>
        </motion.div>

        {/* 3 Story Image Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {storyCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -7, scale: 1.015 }}
                transition={{ duration: 0.3 }}
                className="group relative h-[250px] sm:h-[280px] rounded-2xl overflow-hidden border border-neutral-200/80 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-end p-6"
              >
                {/* Card Background Image with Smooth Hover Zoom */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.bgImage})` }}
                />

                {/* Dark Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 group-hover:from-black/95 transition-colors duration-300" />

                {/* Content Inside Card */}
                <div className="relative z-10 space-y-2">
                  {/* Icon + Title Row */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#9c7736] via-[#c49746] to-[#e4b55e] flex items-center justify-center text-black shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={18} className="stroke-[2.2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}