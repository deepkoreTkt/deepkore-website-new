"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Comparison: React.FC = () => {
  const comparisons = [
    {
      feature: "Task Customization",
      other: "Limited",
      Deepkore: "Advanced & Flexible",
      icon: '<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#2563eb"/><path d="M12 8v4l3 2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>',
      DeepkoreCheck: true,
      otherCheck: false,
    },
    {
      feature: "Progress Tracking",
      other: "Slow & Manual",
      Deepkore: "Real-Time & Automated",
      icon: '<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="12" width="4" height="8" fill="#22d3ee"/><rect x="10" y="8" width="4" height="12" fill="#2563eb"/><rect x="16" y="4" width="4" height="16" fill="#10b981"/></svg>',
      DeepkoreCheck: true,
      otherCheck: false,
    },
    {
      feature: "User Interface",
      other: "Complex",
      Deepkore: "Intuitive & Modern",
      icon: '<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="12" rx="3" fill="#6366f1"/><rect x="7" y="19" width="10" height="2" rx="1" fill="#fff"/></svg>',
      DeepkoreCheck: true,
      otherCheck: false,
    },
    {
      feature: "Data Entry",
      other: "Manual",
      Deepkore: "Automated",
      icon: '<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="6" y="8" width="12" height="8" rx="4" fill="#f59e42"/><circle cx="9" cy="12" r="1.5" fill="#fff"/><circle cx="15" cy="12" r="1.5" fill="#fff"/></svg>',
      DeepkoreCheck: true,
      otherCheck: false,
    },
    {
      feature: "Integrations",
      other: "Limited",
      Deepkore: "Seamless Across Tools",
      icon: '<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M8 12a4 4 0 0 1 4-4h4a4 4 0 1 1 0 8h-4a4 4 0 0 1-4-4z" stroke="#10b981" strokeWidth="2"/><path d="M16 12a4 4 0 0 0-4-4H8a4 4 0 1 0 0 8h4a4 4 0 0 0 4-4z" stroke="#2563eb" strokeWidth="2"/></svg>',
      DeepkoreCheck: true,
      otherCheck: false,
    },
    {
      feature: "Bulk Actions",
      other: "Not Supported",
      Deepkore: "Powerful Support",
      icon: '<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M13 2L3 14h7v8l8-12h-7V2z" fill="#f59e42"/></svg>',
      DeepkoreCheck: true,
      otherCheck: false,
    },
    {
      feature: "Document Management",
      other: "Inconsistent",
      Deepkore: "Efficient & Organized",
      icon: '<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="12" rx="3" fill="#6366f1"/><rect x="7" y="3" width="6" height="4" rx="2" fill="#22d3ee"/></svg>',
      DeepkoreCheck: true,
      otherCheck: false,
    },
    {
      feature: "Reporting",
      other: "Limited",
      Deepkore: "Comprehensive & AI-Driven",
      icon: '<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 20V4h16v16H4z" fill="#2563eb"/><path d="M8 16l3-4 2 3 3-5" stroke="#fff" strokeWidth="2"/></svg>',
      DeepkoreCheck: true,
      otherCheck: false,
    },
    {
      feature: "Security",
      other: "Basic",
      Deepkore: "Enterprise-Grade",
      icon: '<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="6" y="10" width="12" height="8" rx="4" fill="#10b981"/><rect x="10" y="14" width="4" height="4" rx="2" fill="#fff"/></svg>',
      DeepkoreCheck: true,
      otherCheck: false,
    },
    {
      feature: "Scalability",
      other: "Limited",
      Deepkore: "Unlimited",
      icon: '<svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M4 20V4h16v16H4z" fill="#22d3ee"/><path d="M8 16l3-4 2 3 3-5" stroke="#fff" strokeWidth="2"/></svg>',
      DeepkoreCheck: true,
      otherCheck: false,
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-blue-700/30 via-transparent to-green-500/30"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-16 w-48 h-48 bg-green-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-40 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            className="inline-block text-blue-400 text-lg font-semibold mb-4 px-6 py-2 rounded-full bg-blue-950/50 border border-blue-500/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Platform Comparison
          </motion.span>
          <motion.h2
            className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 mb-8 tracking-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Enterprise-Grade <br className="hidden md:block" />
            Comparison
          </motion.h2>
          <motion.p
            className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover how Deepkore&apos;s advanced platform delivers superior
            performance, security, and scalability compared to traditional
            solutions.
          </motion.p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-white/10 backdrop-blur-2xl rounded-4xl shadow-3xl overflow-hidden border border-white/20 ring-2 ring-blue-500/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 p-12 text-white border-b border-slate-600 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-green-600/5"></div>
              <div className="max-w-6xl mx-auto relative">
                <div className="grid grid-cols-3 gap-12 items-center">
                  {/* Features Column */}
                  <motion.div
                    className="text-center relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-400/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative">
                      <motion.div
                        className="w-20 h-20 bg-gradient-to-br from-blue-600/30 to-green-400/30 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30 shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <span
                          dangerouslySetInnerHTML={{
                            __html: comparisons[1].icon,
                          }}
                          className="text-3xl transform group-hover:scale-110 transition-transform duration-300"
                        />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-200">
                        Core Features
                      </h3>
                      <p className="text-slate-300 text-lg font-medium">
                        Enterprise Capabilities
                      </p>
                    </div>
                  </motion.div>

                  {/* VS Column */}
                  <motion.div
                    className="text-center relative group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative">
                      <motion.div
                        className="w-24 h-24 bg-gradient-to-br from-blue-700 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-blue-400/50 shadow-xl group-hover:shadow-blue-500/50 transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        <span className="text-3xl font-extrabold text-white tracking-widest">
                          VS
                        </span>
                        <motion.div
                          className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg"
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <span className="text-lg font-bold text-white">
                            ✓
                          </span>
                        </motion.div>
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-green-400 transition-colors duration-200">
                        Comparison
                      </h3>
                      <p className="text-slate-300 text-lg font-medium">
                        Side-by-Side Analysis
                      </p>
                    </div>
                  </motion.div>

                  {/* Deepkore Column */}
                  <motion.div
                    className="text-center relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative">
                      <motion.div
                        className="flex items-center justify-center mb-4 relative"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl blur-xl"></div>
                        <Image
                          src="/lightlogo.png"
                          alt="Deepkore Logo"
                          width={160}
                          height={40}
                          className="w-auto h-10 relative"
                        />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2 tracking-tight group-hover:text-blue-400 transition-colors duration-200">
                        Deepkore
                      </h3>
                      <p className="text-slate-300 text-lg font-medium">
                        Next-Generation Enterprise Solution
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Enterprise Trust Indicators */}
                <motion.div
                  className="mt-8 pt-6 border-t border-slate-600"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center items-center space-x-8 text-xs text-slate-400">
                    <div className="flex items-center space-x-2">
                      <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                        ✓
                      </span>
                      <span>SOC 2 Compliant</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        ✓
                      </span>
                      <span>ISO 27001 Certified</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        ✓
                      </span>
                      <span>GDPR Ready</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        ✓
                      </span>
                      <span>99.9% Uptime SLA</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-white/10">
              {comparisons.map((comparison, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 p-4 sm:p-8 hover:bg-gradient-to-r hover:from-blue-900/30 hover:to-green-900/30 transition-all duration-300 group relative overflow-hidden rounded-xl mx-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center space-x-5 relative">
                    <motion.div className="relative" whileHover="hover">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-green-400/20 flex items-center justify-center border border-blue-500/20 shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300 cursor-help"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span
                          className="text-2xl drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300"
                          dangerouslySetInnerHTML={{ __html: comparison.icon }}
                        />
                      </motion.div>
                      <motion.div
                        className="absolute left-0 bottom-full mb-2 w-48 p-3 bg-slate-800/90 backdrop-blur-lg rounded-lg text-sm text-white shadow-xl border border-white/10 pointer-events-none z-50"
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        variants={{
                          hover: { opacity: 1, y: 0, scale: 1 },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="font-medium text-blue-400 mb-1">
                          Feature Details
                        </div>
                        <p className="text-gray-300">
                          Compare how {comparison.feature.toLowerCase()} works
                          in Deepkore vs other platforms
                        </p>
                        <div className="absolute left-4 bottom-0 w-2 h-2 bg-slate-800/90 transform rotate-45 translate-y-1/2 border-r border-b border-white/10"></div>
                      </motion.div>
                    </motion.div>
                    <motion.span
                      className="font-semibold text-white text-xl tracking-tight group-hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      {comparison.feature}
                    </motion.span>
                  </div>
                  <div className="flex items-center space-x-4 relative">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-base font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${
                        comparison.otherCheck
                          ? "bg-gradient-to-br from-green-500 to-green-600 text-white"
                          : "bg-gradient-to-br from-red-500 to-red-600 text-white"
                      }`}
                    >
                      {comparison.otherCheck ? "✓" : "✗"}
                    </span>
                    <span className="text-gray-400 text-lg font-medium group-hover:text-red-400 transition-colors duration-200">
                      {comparison.other}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 relative">
                    <span className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center text-base font-bold text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      ✓
                    </span>
                    <span className="text-gray-200 font-semibold text-lg group-hover:text-green-400 transition-colors duration-200">
                      {comparison.Deepkore}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enterprise Benefits */}
            <motion.div
              className="bg-gradient-to-r from-white/10 to-white/20 p-12 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <motion.h3
                  className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-blue-600 mb-12 tracking-tight drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Enterprise Benefits
                </motion.h3>
                <div className="grid md:grid-cols-3 gap-8 text-center max-w-6xl mx-auto">
                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-slate-900/80 rounded-3xl p-10 shadow-xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all duration-300">
                      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: comparisons[8].icon,
                          }}
                          className="text-5xl"
                        />
                      </div>
                      <h4 className="font-bold text-white mb-4 text-2xl">
                        99.9% Uptime
                      </h4>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Guaranteed reliability for mission-critical operations
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-slate-900/80 rounded-3xl p-10 shadow-xl border border-green-500/20 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300">
                      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: comparisons[5].icon,
                          }}
                          className="text-5xl"
                        />
                      </div>
                      <h4 className="font-bold text-white mb-4 text-2xl">
                        50x Faster
                      </h4>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Accelerated workflows and data processing
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <div className="relative bg-slate-900/80 rounded-3xl p-10 shadow-xl border border-yellow-500/20 backdrop-blur-sm hover:border-yellow-500/40 transition-all duration-300">
                      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        <span className="text-5xl">💰</span>
                      </div>
                      <h4 className="font-bold text-white mb-4 text-2xl">
                        40% Cost Savings
                      </h4>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Reduced operational costs and increased ROI
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 blur-3xl"></div>
              <div className="relative bg-gradient-to-r from-blue-900/50 to-green-900/50 p-16 text-center border-t border-white/10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="max-w-4xl mx-auto"
                >
                  <motion.span
                    className="inline-block text-blue-400 text-lg font-semibold mb-6 px-6 py-2 rounded-full bg-blue-950/50 border border-blue-500/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Get Started Today
                  </motion.span>
                  <motion.h3
                    className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 mb-6 tracking-tight drop-shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Ready for Enterprise Excellence?
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 mb-10 max-w-2xl mx-auto text-xl font-medium leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Join leading enterprises already transforming their
                    operations with Deepkore&apos;s advanced platform.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <a href="/getstarted" className="inline-block">
                      <motion.button
                        className="relative px-12 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white font-extrabold rounded-2xl shadow-xl text-xl tracking-wide overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                        <span className="relative flex items-center space-x-2">
                          <span>Start Enterprise Trial</span>
                          <svg
                            className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                      </motion.button>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
