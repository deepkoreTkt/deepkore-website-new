"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PowerfulFeatures: React.FC = () => {
  const features = [
    {
      title: "Data Form",
      description: "Create custom forms effortlessly without coding.",
      icon: "/dataForm.svg",
      avatar: "/dataform1.png",
      gradient: "from-blue-200 via-blue-100 to-white",
    },
    {
      title: "Process",
      description:
        "Design and automate processes with a simple drag-and-drop interface.",
      icon: "/process.svg",
      avatar: "/process.png",
      gradient: "from-green-200 via-green-100 to-white",
    },
    {
      title: "Integration",
      description:
        "Connect seamlessly with your existing tools and applications.",
      icon: "/integration.svg",
      avatar: "/classic02.png",
      gradient: "from-purple-200 via-purple-100 to-white",
    },
    {
      title: "Analytics",
      description: "Turn data into actionable insights effortlessly.",
      icon: "/analytics.svg",
      avatar: "/analytics1.png",
      gradient: "from-cyan-200 via-cyan-100 to-white",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleTabClick = (index: number) => {
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-[800px] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 md:px-16 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-8">
            <div className="px-8 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm shadow-lg">
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">
                Powerful Features
              </span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 drop-shadow-lg leading-tight">
            All Your Tasks,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Organized Effortlessly
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Vertical Tabs */}
          <div className="flex md:flex-col gap-4 md:gap-2 w-full md:w-1/4">
            {features.map((feature, idx) => (
              <motion.button
                key={feature.title}
                className={`flex flex-row items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 text-left w-full h-auto backdrop-blur-lg shadow-md cursor-pointer group
                  ${
                    activeTab === idx
                      ? "bg-white/90 shadow-xl scale-105 hover:scale-110"
                      : "bg-white/80 hover:bg-blue-50/80 hover:shadow-lg hover:scale-102"
                  }
                `}
                onClick={() => handleTabClick(idx)}
              >
                <div className="flex flex-col">
                  <span
                    className={`font-bold text-lg ${
                      activeTab === idx ? "text-blue-600" : "text-gray-700"
                    }`}
                  >
                    {feature.title}
                  </span>
                  <p
                    className={`text-sm leading-relaxed ${
                      activeTab === idx ? "text-blue-500" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Card Content - Prominent Image UI */}
          <motion.div
            key={activeTab}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
            className="flex flex-col items-center justify-center w-full md:w-2/5"
          >
            <div className="relative w-full max-w-2xl h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-lg flex items-center justify-center group">
              <Image
                src={features[activeTab].avatar}
                alt={`${features[activeTab].title} avatar`}
                width={800}
                height={500}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="/feature">
            <motion.button
              className="px-10 py-5 mb-5 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg tracking-wide"
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="button"
            >
              Explore All Features
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PowerfulFeatures;
