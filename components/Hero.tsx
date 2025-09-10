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
    if (!hoveredFeature) return "/Main.png";

    const featureImages: { [key: string]: string } = {
      Dashboards: "/Main.png",
      Dataform: "/classic02.png",
      Process: "/classic04.png",
      Analytics: "/classic05.png",
      Report: "/light-dash.png",
      Workflow: "/classic02.png",
      Dashboard: "/Main.png",
    };

    return featureImages[hoveredFeature] || "/Main.png";
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-100 via-white to-green-200 overflow-hidden">
      {/* Enhanced Background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-green-100/40"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-100/20 to-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-100/20 to-orange-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10">
        <div className="flex flex-col items-center gap-20 lg:gap-24 max-w-7xl mx-auto">
          {/* Enhanced Text Content */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center space-y-12"
          >
            {/* Main Heading - WorkFast.ai Style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <h1
                className={`${inter.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-slate-900 max-w-5xl mx-auto`}
              >
                Building the Future of
              </h1>
              <h1
                className={`${inter.className} text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-slate-900 max-w-5xl mx-auto`}
              >
                AI Driven Business
              </h1>
            </motion.div>

            {/* Subheading - Exact Match */}
            <motion.p
              className={`${inter.className} text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              One powerful AI workspace to manage Projects, Tasks, Chat, Docs,
              Report Dashboards, and more — all in one place.
            </motion.p>

            {/* CTA Section - WorkFast.ai Style */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <div className="flex flex-col items-center gap-4">
                <motion.button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.button>

                <p className="text-slate-500 font-medium text-center">
                  Free 14 days free trial
                </p>
              </div>

              {/* Trust Indicator */}
              <motion.div
                className="flex justify-center items-center gap-2 py-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <div className="flex items-center space-x-1">
                  <span className="text-yellow-400 text-lg">⭐</span>
                  <span className="text-slate-600 text-sm font-medium">
                    Trusted by 1,000+ Teams. Loved by 4,000+ Users.
                  </span>
                  <span className="text-yellow-400 text-lg">⭐</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Enhanced Feature Icons - WorkFast.ai Style */}
            <motion.div
              className="w-full max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0 }}
            >
              {/* Section Header */}
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <h3
                  className={`${inter.className} text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4`}
                >
                  Set up your Workspace
                </h3>
                <p className="text-slate-600 text-lg md:text-xl">
                  Start with what you need, customize as you go.
                </p>
              </motion.div>

              {/* Icons Grid */}
              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6 md:gap-8">
                {[
                  {
                    icon: "📊", // Dashboards
                    label: "Dashboards",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: "�️", // Dataform
                    label: "Dataform",
                    color: "from-green-500 to-green-600",
                  },
                  {
                    icon: "🔄", // Process
                    label: "Process",
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    icon: "�", // Analytics
                    label: "Analytics",
                    color: "from-orange-500 to-orange-600",
                  },
                  {
                    icon: "📈", // Report
                    label: "Report",
                    color: "from-indigo-500 to-indigo-600",
                  },
                  {
                    icon: "🔗", // Workflow
                    label: "Workflow",
                    color: "from-pink-500 to-pink-600",
                  },
                  {
                    icon: "🔌", // Integration
                    label: "Integration",
                    color: "from-teal-500 to-teal-600",
                  },
                  {
                    icon: "💬", // Chat
                    label: "Chat",
                    color: "from-cyan-500 to-cyan-600",
                  },
                  {
                    icon: "⚙️", // Settings
                    label: "Settings",
                    color: "from-gray-500 to-gray-600",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    className="group flex flex-col items-center space-y-3 p-4 rounded-2xl hover:bg-white/80 hover:shadow-md transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onHoverStart={() => setHoveredFeature(feature.label)}
                    onHoverEnd={() => setHoveredFeature(null)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.05 }}
                  >
                    {/* Icon Container - WorkFast Style */}
                    <motion.div
                      className={`w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-2xl ${feature.color} flex items-center justify-center transition-all duration-300 border border-slate-200/50`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-2xl md:text-3xl text-slate-600">
                        {feature.icon}
                      </span>
                    </motion.div>

                    {/* Label */}
                    <div className="text-center">
                      <h4 className="text-xs md:text-sm font-semibold text-slate-700 leading-tight">
                        {feature.label}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Description */}
              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                <p className="text-slate-600 text-sm md:text-base">
                  Choose your preferred tools and workflows. Everything syncs
                  seamlessly.
                </p>
              </motion.div>
            </motion.div>

            {/* Enhanced Bottom Section */}
          </motion.div>

          {/* Dashboard Section - WorkFast.ai Style */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-7xl"
          >
            <div className="relative">
              {/* Clean Dashboard Container */}
              <motion.div
                className="relative rounded-2xl shadow-2xl overflow-hidden border border-slate-200/30 bg-white mx-auto"
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.12)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <motion.div
                  key={getCurrentDashboardImage()}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Image
                    src={getCurrentDashboardImage()}
                    alt="Deepkore Enterprise Dashboard - WorkFast.ai Style"
                    width={1200}
                    height={700}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* Floating Setup Panel - Matches WorkFast.ai */}
              <motion.div
                className="absolute -right-4 top-8 bg-white rounded-2xl shadow-xl border border-slate-200/50 p-6 w-80"
                initial={{ opacity: 0, x: 30, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-3">
                    <h4 className="font-bold text-slate-800 text-lg">
                      Set up your Workspace
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Start with what you need, customize as you go
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        icon: "📊",
                        label: "Dashboards",
                        color: "bg-orange-100",
                      },
                      { icon: "📋", label: "Kanban", color: "bg-red-100" },
                      { icon: "✅", label: "Tasks", color: "bg-blue-100" },
                      { icon: "💬", label: "Channel", color: "bg-green-100" },
                      { icon: "📈", label: "Report", color: "bg-purple-100" },
                      { icon: "📄", label: "Docs", color: "bg-blue-100" },
                      { icon: "⏰", label: "Check In", color: "bg-teal-100" },
                      { icon: "💬", label: "Chat", color: "bg-indigo-100" },
                      { icon: "⚙️", label: "Settings", color: "bg-gray-100" },
                    ].map((item, idx) => (
                      <motion.div
                        key={idx}
                        className={`${item.color} rounded-lg p-3 flex flex-col items-center space-y-1 hover:scale-105 transition-transform cursor-pointer`}
                        whileHover={{ y: -2 }}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-xs font-medium text-slate-700">
                          {item.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-slate-400 text-sm font-medium">
            Scroll to explore
          </span>
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
