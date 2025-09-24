"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PowerfulFeatures: React.FC = () => {
  const features = [
    {
      title: "Data Form",
      description: "Create custom forms effortlessly without coding.",
      avatar: "/dataformbg1.svg",
      href: "/dataform",
    },
    {
      title: "Process",
      description:
        "Design and automate processes with a simple drag-and-drop interface.",
      avatar: "/process.png",
      href: "/process",
    },
    {
      title: "Integration",
      description:
        "Connect seamlessly with your existing tools and applications.",
      avatar: "/integration1.svg",
      href: "/integration",
    },
    {
      title: "Analytics",
      description: "Turn data into actionable insights effortlessly.",
      avatar: "/analytics1.png",
      href: "/analytics",
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
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 min-h-[800px]">
      <div className="container mx-auto px-8 md:px-40 lg:px-40">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-8">
            <div className="px-8 py-3 bg-white/20 border border-white/30 rounded-full backdrop-blur-sm shadow-lg">
              <span className="text-white font-semibold text-sm tracking-wider uppercase">
                Powerful Features
              </span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
            All Your Tasks, Organized Effortlessly
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-between max-w-7xl mx-auto">
          {/* Vertical Tabs */}
          <div className="flex lg:flex-col gap-3 w-full lg:w-2/5 space-y-1">
            {features.map((feature, idx) => (
              <button
                key={feature.title}
                className={`text-left w-full py-6 px-6 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                  activeTab === idx
                    ? "bg-gradient-to-r from-white to-white/60 text-blue-600 shadow-lg border border-white/30"
                    : "bg-transparent hover:bg-gradient-to-r hover:from-white hover:to-white/60 text-white/90 hover:text-blue-600 border border-transparent hover:border-white/15 hover:shadow-md"
                }`}
                onClick={() => handleTabClick(idx)}
              >
                <div>
                  <h3 className="font-semibold text-xl mb-2 flex items-center">
                    {feature.title}
                    <span
                      className={`ml-2 transition-opacity duration-300 ${
                        activeTab === idx
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      →
                    </span>
                  </h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    {feature.description}
                  </p>
                  <Link
                    href={feature.href}
                    className="inline-block mt-2 px-0 py-2  text-[#006ce8] font-semibold text-sm rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    Learn More
                  </Link>
                </div>
              </button>
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
            }}
            className="w-full lg:w-3/5 flex justify-center lg:justify-end"
          >
            <div className="bg-[#264a67] rounded-2xl shadow-2xl p-4 max-w-4xl border border-[#264a67]">
              {features[activeTab].avatar.includes(".mp4") ? (
                <video
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-lg"
                >
                  <source src={features[activeTab].avatar} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={features[activeTab].avatar}
                  alt={features[activeTab].title}
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-lg"
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PowerfulFeatures;
