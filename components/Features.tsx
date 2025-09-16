"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { image } from "framer-motion/client";
import Image from "next/image";
import {
  ShoppingCart,
  Settings,
  Building,
  BarChart3,
  Package,
  Factory,
} from "lucide-react";
const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Sales Processing",
      subtitle: "Complete Sales Lifecycle",
      description:
        "Streamline your entire sales process with AI-powered automation for order processing, reporting, and customer management.",
      gradient: "bg-blue-500/50",
      icon: <ShoppingCart className="w-16 h-16" />,
      image: "/dataform.png",
      bgPattern:
        "radial-gradient(circle at 30% 70%, rgba(135, 206, 235, 0.15) 0%, transparent 60%)",
      stats: { orders: "10K+", processing: "95%", reports: "Real-time" },
      features: [
        "Finished Product Master",
        "Sales Order Processing",
        "Sales Reporting",
        "Customer Management",
        "Order Tracking",
        "Revenue Analytics",
      ],
    },
    {
      title: "IT Service Management",
      subtitle: "AI-Powered Workflows",
      description:
        "Boost service desk performance with AI-powered workflows, intuitive automation, and actionable analytics.",
      gradient: "bg-green-500/50",
      icon: <Settings className="w-5 h-5" />,
      image: "/process.png",
      bgPattern:
        "radial-gradient(circle at 70% 30%, rgba(144, 238, 144, 0.15) 0%, transparent 60%)",
      stats: { tickets: "1M+", resolution: "90%", efficiency: "75%" },
      features: [
        "AI-Powered Workflows",
        "Intuitive Automation",
        "Actionable Analytics",
        "Performance Boost",
      ],
    },
    {
      title: "Asset Management",
      subtitle: "Smart Asset Tracking",
      description:
        "Intelligent asset management with automated tracking, maintenance scheduling, and comprehensive reporting capabilities.",
      gradient: "bg-purple-500/50",
      icon: <Building className="w-16 h-16" />,
      image: "/classic02.png",
      bgPattern:
        "radial-gradient(circle at 50% 50%, rgba(221, 160, 221, 0.15) 0%, transparent 60%)",
      stats: { assets: "25K+", uptime: "99%", maintenance: "Auto" },
      features: [
        "Asset Master",
        "Manpower Master",
        "Maintenance Request",
        "Maintenance Order",
        "Maintenance Reports",
        "Asset Tracking",
      ],
    },
    {
      title: "Analytics & Reporting",
      subtitle: "AI-Powered Insights",
      description:
        "Advanced analytics with intelligent reporting, interactive dashboards, and predictive insights for data-driven decisions.",
      gradient: "bg-orange-500/50",
      icon: <BarChart3 className="w-16 h-16" />,
      image: "/classic05.png",
      bgPattern:
        "radial-gradient(circle at 20% 80%, rgba(255, 218, 185, 0.15) 0%, transparent 60%)",
      stats: { reports: "500+", insights: "AI", dashboards: "50+" },
      features: [
        "Charts and Graphs",
        "List Reporting",
        "Pivot Table",
        "Interactive Dashboards",
        "Predictive Analytics",
        "Custom Reports",
      ],
    },
    {
      title: "Procurement",
      subtitle: "Smart Procurement Solutions",
      description:
        "AI-enhanced procurement management with intelligent vendor selection, automated ordering, and comprehensive tracking.",
      gradient: "bg-indigo-500/50",
      icon: <Package className="w-16 h-16" />,
      image: "/classic04.png",
      bgPattern:
        "radial-gradient(circle at 80% 20%, rgba(216, 191, 216, 0.15) 0%, transparent 60%)",
      stats: { vendors: "2K+", orders: "15K+", savings: "25%" },
      features: [
        "Material Master",
        "Vendor Master",
        "Purchase Indent",
        "Purchase Order",
        "Procurement Reports",
        "Supplier Analytics",
      ],
    },
    {
      title: "Manufacturing",
      subtitle: "Production Excellence",
      description:
        "End-to-end manufacturing management with AI-driven production planning, quality control, and performance optimization.",
      gradient: "bg-teal-500/50",
      icon: <Factory className="w-16 h-16" />,
      image: "/classic02.png",
      bgPattern:
        "radial-gradient(circle at 40% 60%, rgba(175, 238, 238, 0.15) 0%, transparent 60%)",
      stats: { production: "100K+", quality: "99.5%", efficiency: "85%" },
      features: [
        "Finished Product Master",
        "Production Order",
        "Production Reports",
        "Quality Control",
        "Process Optimization",
        "Inventory Management",
      ],
    },
  ];

  return (
    <section className="relative py-10 bg-[#f2f5f5] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-green-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="px-6 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
              <span className="text-green-600 font-medium text-sm tracking-wider uppercase">
                Business Applications
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Deepkore is evolving with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400">
              {" "}
              AI at its core
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Enabling smarter, faster, and more adaptive business applications
          </motion.p>
        </motion.div>

        {/* Feature Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#ffffff] backdrop-blur-xl rounded-2xl p-2 border border-gray-300/50">
            <div className="flex space-x-2">
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-black hover:bg-gray-200/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-lg flex items-center justify-center">
                      {React.cloneElement(feature.icon, {
                        className: "w-5 h-5",
                      })}
                    </span>
                    <span>{feature.title}</span>
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Feature Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Feature Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div>
                  {/* <motion.div
                    className="text-6xl md:text-8xl mb-6 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {features[activeFeature].icon}
                  </motion.div> */}

                  <motion.h3
                    className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${features[activeFeature].gradient} bg-clip-text text-transparent`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {features[activeFeature].title}
                  </motion.h3>

                  <motion.h4
                    className="text-2xl md:text-3xl text-blue-700 mb-6 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {features[activeFeature].subtitle}
                  </motion.h4>

                  <motion.p
                    className="text-xl text-gray-700 leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {features[activeFeature].description}
                  </motion.p>

                  {/* Feature List */}
                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {features[activeFeature].features.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
                        <span className="text-sm font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Feature Visualization */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className={`relative h-96 lg:h-[450px] bg-gradient-to-br ${features[activeFeature].gradient} rounded-3xl shadow-2xl overflow-hidden border border-white/10`}
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{ background: features[activeFeature].bgPattern }}
                  />

                  {/* Animated Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="relative"
                      animate={{
                        scale: [1, 1.02, 1],
                        rotate: [0, 1, -1, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                        <Image
                          src={features[activeFeature].image ?? "/fallback.png"}
                          alt={features[activeFeature].title}
                          width={550}
                          height={550}
                          className="object-cover"
                        />
                        {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
                      </div>
                    </motion.div>
                  </div>

                  {/* Stats Overlay */}
                  {/* <div className="absolute bottom-8 left-8 right-8">
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(features[activeFeature].stats).map(
                        ([key, value], index) => (
                          <motion.div
                            key={key}
                            className="bg-white/30 backdrop-blur-md rounded-xl p-4 text-center border border-white/20 shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.8 + index * 0.1,
                            }}
                            whileHover={{ scale: 1.05, y: -2 }}
                          >
                            <div className="text-2xl font-bold text-black mb-1 drop-shadow-sm">
                              {value}
                            </div>
                            <div className="text-sm text-gray-800 capitalize font-medium">
                              {key}
                            </div>
                          </motion.div>
                        )
                      )}
                    </div>
                  </div> */}

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: "-150%" }}
                    animate={{ x: "150%" }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Try {features[activeFeature].title} Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
