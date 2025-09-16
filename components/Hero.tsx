"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const Hero = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Get the current dashboard image based on hovered feature
  const getCurrentDashboardImage = () => {
    if (!hoveredFeature) return "/bg22.png";

    const featureImages: { [key: string]: string } = {
      Dashboards: "/bg22.png",
      Dataform: "/dataform.png",
      Process: "/process.png",
      Analytics: "/classic05.png",
      Report: "/light-dash.png",
      Workflow: "/classic02.png",
      Dashboard: "/Main.png",
    };

    return featureImages[hoveredFeature] || "/bg22.png";
  };

  // Get the glow shadow based on hovered feature
  const getGlowShadow = () => {
    if (!hoveredFeature) return "0 0 60px 10px rgba(59,130,246,0.5)";

    const glowColors: { [key: string]: string } = {
      Dashboards: "rgba(59,130,246,0.5)",
      Dataform: "rgba(34,197,94,0.5)",
      Process: "rgba(147,51,234,0.5)",
      Analytics: "rgba(249,115,22,0.5)",
      Report: "rgba(99,102,241,0.5)",
      Workflow: "rgba(236,72,153,0.5)",
      Integration: "rgba(20,184,166,0.5)",
      Chat: "rgba(6,182,212,0.5)",
      Settings: "rgba(107,114,128,0.5)",
      Dashboard: "rgba(59,130,246,0.5)",
    };

    return `0 0 20px 10px ${
      glowColors[hoveredFeature] || "rgba(59,130,246,0.5)"
    }`;
  };

  // Get the feature color for backgrounds
  const getFeatureColor = (feature: string) => {
    const colors: { [key: string]: string } = {
      Dashboards: "#c4e1ff",
      Dataform: "#d5f2dd",
      Process: "#fff7c7",
      Analytics: "#ffe8c4",
      Report: "#edd7f7",
      Workflow: "#c7f2ef",
      Integration: "#c7f2ef",
      Chat: "#c4e1ff",
      Settings: "#d5f2dd",
      Dashboard: "#c4e1ff",
    };
    return colors[feature] || "#c4e1ff";
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50/0% via-red-200/20% via-white/60% to-green-300/100% overflow-hidden">
      {/* Enhanced Background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-transparent to-green-500/40"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-100/20 to-blue-50/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-100/20 to-orange-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </motion.div>
      <div className="container mx-auto px-6 lg:px-12 py-26 lg:py-35 relative z-10">
        <div className="flex flex-col items-center gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center space-y-4"
          >
            {/* Main Heading - WorkFast.ai Style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="space-y-2"
            >
              <h1
                className={`${inter.className} text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-slate-900 max-w-5xl mx-auto`}
              >
                Building the Future of
              </h1>
              <h1
                className={`${inter.className} text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight max-w-5xl mx-auto`}
              >
                <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 bg-clip-text text-transparent">
                  AI Driven Business
                </span>
              </h1>
            </motion.div>

            {/* Subheading - Exact Match */}
            <motion.p
              className={`${inter.className} text-base md:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              One powerful AI workspace to manage Projects, Tasks, Chat, Docs,
              <span> Report Dashboards, and more — all in one place.</span>
            </motion.p>

            {/* CTA Section - WorkFast.ai Style */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="flex flex-col items-center gap-2">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a Demo
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="w-full max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
            >
              {/* Section Header */}

              {/* Icons Grid */}
              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4 md:gap-6">
                {[
                  {
                    icon: "/admin.svg", // Dashboards
                    label: "Dashboards",
                    color: "#c4e1ff",
                  },
                  {
                    icon: "/dataForm.svg", // Dataform
                    label: "Dataform",
                    color: "#d5f2dd",
                  },
                  {
                    icon: "/process.svg", // Process
                    label: "Process",
                    color: "#fff7c7",
                  },
                  {
                    icon: "/analytics.svg", // Analytics
                    label: "Analytics",
                    color: "#ffe8c4",
                  },
                  {
                    icon: "/appwithhand.svg", // Report
                    label: "Report",
                    color: "#edd7f7",
                  },
                  {
                    icon: "/workflow.svg", // Workflow
                    label: "Workflow",
                    color: "#c7f2ef",
                  },
                  {
                    icon: "/integration.svg", // Integration
                    label: "Integration",
                    color: "#c7f2ef",
                  },
                  {
                    icon: "/mail.svg", // Chat
                    label: "Chat",
                    color: "#c4e1ff",
                  },
                  {
                    icon: "/Setting.svg", // Settings
                    label: "Settings",
                    color: "#d5f2dd",
                  },
                ].map((feature, index) => {
                  const isHovered = hoveredFeature === feature.label;
                  return (
                    <motion.div
                      key={feature.label}
                      className={`group flex flex-col items-center space-y-2 p-2 rounded-xl transition-all duration-300 cursor-pointer ${
                        isHovered
                          ? `bg-[${feature.color}] text-slate-800`
                          : "hover:bg-white/80 hover:shadow-md"
                      }`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onHoverStart={() => setHoveredFeature(feature.label)}
                      onHoverEnd={() => setHoveredFeature(null)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 + index * 0.05 }}
                    >
                      <motion.div
                        className={`w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-xl flex items-center justify-center transition-all duration-300 border border-slate-200/50 bg-white`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={feature.icon}
                          alt={feature.label}
                          width={16}
                          height={16}
                          className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
                        />
                      </motion.div>

                      <div className="text-center">
                        <h4 className="text-xs md:text-sm font-semibold text-slate-700 leading-tight">
                          {feature.label}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* New Dashboard Section - Unique UI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-7xl"
          >
            <div className="relative flex w-full max-w-full items-stretch justify-center">
              {/* Enhanced Split UI with better proportions */}
              <div
                className="w-full max-w-4xl rounded-2xl overflow-hidden border border-slate-200/30 mx-auto bg-white/90 backdrop-blur-sm transition-all duration-500"
                style={{ boxShadow: getGlowShadow() }}
              >
                <div
                  className={`flex items-center justify-center rounded-2xl w-full p-0 overflow-hidden transition-all duration-500 ${
                    hoveredFeature
                      ? `bg-gradient-to-br ${
                          ["Dashboards", "Dashboard"].includes(hoveredFeature)
                            ? "from-purple-600/30 via-transparent to-green-500/30"
                            : hoveredFeature === "Dataform"
                            ? "from-purple-600/30 via-transparent to-green-500/30"
                            : hoveredFeature === "Process"
                            ? "from-purple-600/30 via-transparent to-green-500/30"
                            : hoveredFeature === "Analytics"
                            ? "from-purple-600/30 via-transparent to-green-500/30"
                            : hoveredFeature === "Report"
                            ? "from-purple-600/30 via-transparent to-green-500/30"
                            : hoveredFeature === "Workflow"
                            ? "from-purple-600/30 via-transparent to-green-500/30"
                            : hoveredFeature === "Integration"
                            ? "from-purple-600/30 via-transparent to-green-500/30"
                            : hoveredFeature === "Chat"
                            ? "from-purple-600/30 via-transparent to-green-500/30"
                            : hoveredFeature === "Settings"
                            ? "from-purple-600/30 via-transparent to-green-500/30"
                            : ""
                        }`
                      : "bg-white"
                  }`}
                >
                  <Image
                    src={getCurrentDashboardImage()}
                    alt="Deepkore Enterprise Dashboard - WorkFast.ai Style"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover rounded-xl"
                    priority
                  />
                </div>
                <div
                  className={`flex-1 h-full ${
                    hoveredFeature
                      ? `bg-[${getFeatureColor(hoveredFeature)}]`
                      : "bg-slate-100"
                  } rounded-r-2xl`}
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
