"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Settings,
  Building,
  BarChart3,
  Package,
  Factory,
  Users,
} from "lucide-react";
const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      title: "Sales Processing",
      subtitle: "Complete Sales Lifecycle",
      description:
        "Streamline your entire sales process with AI-powered automation for order processing, reporting, and customer management.",
      gradient: "bg-[#248aff]",
      icon: <ShoppingCart className="w-16 h-16" />,
      image: "/images/sales.svg",
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
      link: "/solution/sales",
    },
    {
      title: "CRM",
      subtitle: "Customer Relationship Management",
      description:
        "Comprehensive customer relationship management with AI-driven insights, automated workflows, and personalized customer experiences.",
      gradient: "bg-[#248aff]",
      icon: <Users className="w-16 h-16" />,
      image: "/crm.png",
      bgPattern:
        "radial-gradient(circle at 60% 40%, rgba(255, 99, 71, 0.15) 0%, transparent 60%)",
      stats: { customers: "50K+", engagement: "95%", retention: "85%" },
      features: [
        "Lead Management",
        "Contact Management",
        "Sales Pipeline",
        "Customer Insights",
        "Automated Campaigns",
        "Support Integration",
      ],
      link: "/crm",
    },
    {
      title: "IT Service Management",
      subtitle: "AI-Powered Workflows",
      description:
        "Boost service desk performance with AI-powered workflows, intuitive automation, and actionable analytics.",
      gradient: "bg-[#248aff]",
      icon: <Settings className="w-5 h-5" />,
      image: "/images/it.svg",
      bgPattern:
        "radial-gradient(circle at 70% 30%, rgba(144, 238, 144, 0.15) 0%, transparent 60%)",
      stats: { tickets: "1M+", resolution: "90%", efficiency: "75%" },
      features: [
        "AI-Powered Workflows",
        "Intuitive Automation",
        "Actionable Analytics",
        "Performance Boost",
      ],
      link: "/itservicedesk",
    },
    {
      title: "Asset Management",
      subtitle: "Smart Asset Tracking",
      description:
        "Intelligent asset management with automated tracking, maintenance scheduling, and comprehensive reporting capabilities.",
      gradient: "bg-[#248aff]",
      icon: <Building className="w-16 h-16" />,
      image: "/images/asset.svg",
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
      link: "/solution/assetmanagement",
    },
    // {
    //   title: "Analytics & Reporting",
    //   subtitle: "AI-Powered Insights",
    //   description:
    //     "Advanced analytics with intelligent reporting, interactive dashboards, and predictive insights for data-driven decisions.",
    //   gradient: "bg-orange-500/50",
    //   icon: <BarChart3 className="w-16 h-16" />,
    //   image: "/classic05.png",
    //   bgPattern:
    //     "radial-gradient(circle at 20% 80%, rgba(255, 218, 185, 0.15) 0%, transparent 60%)",
    //   stats: { reports: "500+", insights: "AI", dashboards: "50+" },
    //   features: [
    //     "Charts and Graphs",
    //     "List Reporting",
    //     "Pivot Table",
    //     "Interactive Dashboards",
    //     "Predictive Analytics",
    //     "Custom Reports",
    //   ],
    // },
    {
      title: "Procurement",
      subtitle: "Smart Procurement Solutions",
      description:
        "AI-enhanced procurement management with intelligent vendor selection, automated ordering, and comprehensive tracking.",
      gradient: "bg-[#248aff]",
      icon: <Package className="w-16 h-16" />,
      image: "images/procurement.svg",
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
      link: "/solution/procurement",
    },
    {
      title: "Manufacturing",
      subtitle: "Production Excellence",
      description:
        "End-to-end manufacturing management with AI-driven production planning, quality control, and performance optimization.",
      gradient: "bg-[#248aff]",
      icon: <Factory className="w-16 h-16" />,
      image: "images/manufacturing.svg",
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
      link: "/solution/manufacturing",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  return (
    <section className="relative py-10 md:py-20 lg:py-24 bg-[#f2f5f5] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-green-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6 lg:mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="px-4 py-2 lg:px-6 lg:py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
              <span className="text-green-600 font-medium text-sm tracking-wider uppercase">
                Business Applications
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 lg:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Deepkore is evolving with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#248aff] to-[#00d24b]">
              {" "}
              AI at its core
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Enabling smarter, faster, and more adaptive business applications
          </motion.p>
        </motion.div>

        {/* Feature Navigation */}
        <div className="flex justify-center mb-8 lg:mb-12">
          <div className="bg-[#ffffff] backdrop-blur-xl rounded-2xl p-2 border border-gray-300/50 shadow-lg">
            <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`px-3 py-2 lg:px-6 lg:py-3 rounded-xl font-semibold transition-all duration-300 text-sm lg:text-base ${
                    activeFeature === index
                      ? "bg-gradient-to-r from-[#248aff] to-[#00d24b] text-white shadow-lg"
                      : "text-gray-600 hover:text-black hover:bg-gray-200/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-base lg:text-lg flex items-center justify-center">
                      {React.cloneElement(feature.icon, {
                        className: "w-4 h-4 lg:w-5 lg:h-5",
                      })}
                    </span>
                    <span className="hidden sm:inline">{feature.title}</span>
                    <span className="sm:hidden">
                      {feature.title.split(" ")[0]}
                    </span>
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
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="max-w-7xl mx-auto"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Feature Content */}
              <motion.div
                className="space-y-6 lg:space-y-8 order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div>
                  <motion.h3
                    className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 bg-gradient-to-r ${features[activeFeature].gradient} bg-clip-text text-transparent`}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {features[activeFeature].title}
                  </motion.h3>

                  <motion.h4 className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-4 lg:mb-6 font-medium">
                    {features[activeFeature].subtitle}
                  </motion.h4>

                  <motion.p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 lg:mb-8">
                    {features[activeFeature].description}
                  </motion.p>

                  {/* Feature List */}
                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {features[activeFeature].features.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 text-gray-700"
                      >
                        <div className="w-2 h-2 bg-[#248aff] rounded-full flex-shrink-0"></div>
                        <span className="text-sm lg:text-base font-medium">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Feature Visualization */}
              <motion.div
                className="relative order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className={`relative h-80 sm:h-96 lg:h-[450px] bg-[#ffffff] rounded-3xl shadow-2xl overflow-hidden border border-white/10`}
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Background Pattern */}
                  {/* <div
                    className="absolute inset-0 opacity-20"
                    style={{ background: features[activeFeature].bgPattern }}
                  /> */}

                  {/* Animated Elements */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-6">
                    <motion.div
                      className="relative"
                      // animate={{
                      //   scale: [1, 1.02, 1],
                      //   rotate: [0, 1, -1, 0],
                      // }}
                      // transition={{
                      //   duration: 6,
                      //   repeat: Infinity,
                      //   ease: "easeInOut",
                      // }}
                    >
                      <div className="relative rounded-2xl overflow-hidden border-4 bg-[#ffffff] border-gray-200 shadow-lg shadow-gray-500/10">
                        <Image
                          src={features[activeFeature].image ?? "/fallback.png"}
                          alt={features[activeFeature].title}
                          width={500}
                          height={500}
                          className="object-cover w-full h-auto max-w-full"
                        />
                      </div>
                    </motion.div>
                  </div>

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
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href={features[activeFeature].link}>
            <motion.button
              className="px-6 py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-[#248aff] to-[#00d24b] text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-sm lg:text-base"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Try {features[activeFeature].title} Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
