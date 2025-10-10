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
        "Design and automate processes with a drag-and-drop interface.",
      avatar: "/images/process/processgif.gif",
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
    <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-[#248aff] to-[#00d24b] min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-40">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-4 sm:mb-6 lg:mb-8">
            <div className="px-4 py-1 sm:px-6 sm:py-2 bg-white/20 border border-white/30 rounded-full backdrop-blur-sm shadow-lg">
              <span className="text-white font-semibold text-xs sm:text-sm tracking-wider uppercase">
                Powerful Features
              </span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg leading-snug sm:leading-tight">
            Transform Complex Workflows into Intelligent Applications -
            Effortlessly.
          </h2>
        </motion.div>

        {/* Features Section */}
        {/* Mobile Horizontal Scroll */}
        <div className="lg:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className="flex-shrink-0 w-80 bg-[#264a67] rounded-xl p-4 border border-[#264a67] shadow-xl"
              >
                <div className="mb-4">
                  {feature.avatar.includes(".mp4") ? (
                    <video
                      loop
                      muted
                      playsInline
                      autoPlay
                      className="w-full h-48 rounded-lg object-contain"
                    >
                      <source src={feature.avatar} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={feature.avatar}
                      alt={feature.title}
                      width={320}
                      height={192}
                      className="w-full h-48 rounded-lg object-contain"
                      unoptimized={feature.avatar.includes(".gif")}
                    />
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/90 mb-4">
                  {feature.description}
                </p>
                <Link
                  href={feature.href}
                  className="font-bold text-sm text-white underline"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-4 sm:gap-6 items-start justify-between w-full max-w-full mx-auto">
          {/* Vertical Tabs - Mobile: Horizontal scroll, Desktop: Vertical */}
          <div className="w-full lg:w-2/5">
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 scrollbar-hide">
              {features.map((feature, idx) => (
                <button
                  key={feature.title}
                  className={`flex-shrink-0 text-left w-full min-w-[280px] sm:min-w-0 py-3 px-4 rounded-lg transition-all duration-300 relative overflow-hidden group ${
                    activeTab === idx
                      ? "bg-gradient-to-r from-white to-white/60 text-blue-600 shadow-lg border border-white/30"
                      : "bg-transparent hover:bg-gradient-to-r hover:from-white hover:to-white text-white hover:text-blue-600 border border-transparent hover:border-white/15 hover:shadow-md"
                  }`}
                  onClick={() => handleTabClick(idx)}
                >
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 flex items-center">
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
                    <p className="text-xs sm:text-sm opacity-90 leading-relaxed mb-1 sm:mb-2 line-clamp-2">
                      {feature.description}
                    </p>
                    <Link
                      href={feature.href}
                      className="font-bold text-xs sm:text-sm mt-1 sm:mt-2 inline-block"
                    >
                      Learn More
                    </Link>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Card Content */}
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
            className="w-full lg:w-3/5 flex justify-center lg:justify-end mt-4 lg:mt-0"
          >
            <div className="bg-[#264a67] rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-3 sm:p-4 w-full min-h-[250px] sm:min-h-[350px] lg:min-h-[450px] xl:min-h-[500px] border border-[#264a67]">
              {features[activeTab].avatar.includes(".mp4") ? (
                <video
                  loop
                  muted
                  playsInline
                  autoPlay
                  className="w-full h-full rounded-lg object-contain"
                >
                  <source src={features[activeTab].avatar} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={features[activeTab].avatar}
                  alt={features[activeTab].title}
                  width={800}
                  height={500}
                  className="w-full h-full rounded-lg object-contain"
                  unoptimized={features[activeTab].avatar.includes(".gif")}
                  priority={activeTab === 0}
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
