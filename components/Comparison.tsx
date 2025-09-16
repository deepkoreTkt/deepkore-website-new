"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Comparison: React.FC = () => {
  const comparisons = [
    {
      feature: "Task Customization",
      other: "Limited",
      prismo: "Advanced & Flexible",
      icon: "<svg width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"#2563eb\"/><path d=\"M12 8v4l3 2\" stroke=\"#fff\" strokeWidth=\"2\" strokeLinecap=\"round\"/></svg>",
      prismoCheck: true,
      otherCheck: false,
    },
    {
      feature: "Progress Tracking",
      other: "Slow & Manual",
      prismo: "Real-Time & Automated",
      icon: "<svg width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\"><rect x=\"4\" y=\"12\" width=\"4\" height=\"8\" fill=\"#22d3ee\"/><rect x=\"10\" y=\"8\" width=\"4\" height=\"12\" fill=\"#2563eb\"/><rect x=\"16\" y=\"4\" width=\"4\" height=\"16\" fill=\"#10b981\"/></svg>",
      prismoCheck: true,
      otherCheck: false,
    },
    {
      feature: "User Interface",
      other: "Complex",
      prismo: "Intuitive & Modern",
      icon: "<svg width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"12\" rx=\"3\" fill=\"#6366f1\"/><rect x=\"7\" y=\"19\" width=\"10\" height=\"2\" rx=\"1\" fill=\"#fff\"/></svg>",
      prismoCheck: true,
      otherCheck: false,
    },
    {
      feature: "Data Entry",
      other: "Manual",
      prismo: "Automated",
      icon: "<svg width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\"><rect x=\"6\" y=\"8\" width=\"12\" height=\"8\" rx=\"4\" fill=\"#f59e42\"/><circle cx=\"9\" cy=\"12\" r=\"1.5\" fill=\"#fff\"/><circle cx=\"15\" cy=\"12\" r=\"1.5\" fill=\"#fff\"/></svg>",
      prismoCheck: true,
      otherCheck: false,
    },
    {
      feature: "Integrations",
      other: "Limited",
      prismo: "Seamless Across Tools",
      icon: "<svg width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\"><path d=\"M8 12a4 4 0 0 1 4-4h4a4 4 0 1 1 0 8h-4a4 4 0 0 1-4-4z\" stroke=\"#10b981\" strokeWidth=\"2\"/><path d=\"M16 12a4 4 0 0 0-4-4H8a4 4 0 1 0 0 8h4a4 4 0 0 0 4-4z\" stroke=\"#2563eb\" strokeWidth=\"2\"/></svg>",
      prismoCheck: true,
      otherCheck: false,
    },
    {
      feature: "Bulk Actions",
      other: "Not Supported",
      prismo: "Powerful Support",
      icon: "<svg width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\"><path d=\"M13 2L3 14h7v8l8-12h-7V2z\" fill=\"#f59e42\"/></svg>",
      prismoCheck: true,
      otherCheck: false,
    },
    {
      feature: "Document Management",
      other: "Inconsistent",
      prismo: "Efficient & Organized",
      icon: "<svg width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"7\" width=\"18\" height=\"12\" rx=\"3\" fill=\"#6366f1\"/><rect x=\"7\" y=\"3\" width=\"6\" height=\"4\" rx=\"2\" fill=\"#22d3ee\"/></svg>",
      prismoCheck: true,
      otherCheck: false,
    },
    {
      feature: "Reporting",
      other: "Limited",
      prismo: "Comprehensive & AI-Driven",
      icon: "<svg width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\"><path d=\"M4 20V4h16v16H4z\" fill=\"#2563eb\"/><path d=\"M8 16l3-4 2 3 3-5\" stroke=\"#fff\" strokeWidth=\"2\"/></svg>",
      prismoCheck: true,
      otherCheck: false,
    },
    {
      feature: "Security",
      other: "Basic",
      prismo: "Enterprise-Grade",
      icon: "<svg width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\"><rect x=\"6\" y=\"10\" width=\"12\" height=\"8\" rx=\"4\" fill=\"#10b981\"/><rect x=\"10\" y=\"14\" width=\"4\" height=\"4\" rx=\"2\" fill=\"#fff\"/></svg>",
      prismoCheck: true,
      otherCheck: false,
    },
    {
      feature: "Scalability",
      other: "Limited",
      prismo: "Unlimited",
      icon: "<svg width=\"24\" height=\"24\" fill=\"none\" viewBox=\"0 0 24 24\"><path d=\"M4 20V4h16v16H4z\" fill=\"#22d3ee\"/><path d=\"M8 16l3-4 2 3 3-5\" stroke=\"#fff\" strokeWidth=\"2\"/></svg>",
      prismoCheck: true,
      otherCheck: false,
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-r from-blue-700/30 via-transparent to-green-500/30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-green-400 to-blue-600 mb-6 tracking-tight drop-shadow-lg">
            Enterprise-Grade Comparison
          </h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover how Deepkore&apos;s advanced platform delivers superior performance, security, and scalability compared to traditional solutions.
          </p>
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
            <div className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 p-10 text-white border-b border-slate-600">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-3 gap-8 items-center">
                  {/* Features Column */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-green-400/30 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-blue-500/30 shadow-lg">
                      <span dangerouslySetInnerHTML={{__html: comparisons[1].icon}} />
                    </div>
                    <h3 className="text-2xl font-bold mb-1 tracking-tight">Core Features</h3>
                    <p className="text-slate-300 text-base font-medium">Enterprise Capabilities</p>
                  </motion.div>

                  {/* VS Column */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-700 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3 border-4 border-blue-400 shadow-xl">
                        <span className="text-2xl font-extrabold text-white tracking-widest">VS</span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-lg font-bold text-white">✓</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-1 tracking-tight">Comparison</h3>
                    <p className="text-slate-400 text-base font-medium">Side-by-Side Analysis</p>
                  </motion.div>

                  {/* Deepkore Column */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center mb-3">
                      <Image
                        src="/lightlogo.png"
                        alt="Deepkore Logo"
                        width={120}
                        height={30}
                        className="w-auto h-8"
                      />
                    </div>

                    <p className="text-slate-300 text-base font-medium">Next-Generation Enterprise Solution</p>
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
                  className="grid grid-cols-3 gap-8 p-7 hover:bg-gradient-to-r hover:from-blue-900/20 hover:to-green-900/20 transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-5">
                    <span className="text-2xl drop-shadow-lg" dangerouslySetInnerHTML={{__html: comparison.icon}} />
                    <span className="font-semibold text-white text-xl tracking-tight group-hover:text-blue-400 transition-colors duration-200">
                      {comparison.feature}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-base font-bold shadow-md ${
                        comparison.otherCheck
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {comparison.otherCheck ? "✓" : "✗"}
                    </span>
                    <span className="text-gray-400 text-lg font-medium group-hover:text-red-400 transition-colors duration-200">{comparison.other}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="w-7 h-7 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-base font-bold text-white shadow-md">
                      ✓
                    </span>
                    <span className="text-gray-200 font-semibold text-lg group-hover:text-green-400 transition-colors duration-200">
                      {comparison.prismo}
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
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-blue-600 mb-6 tracking-tight drop-shadow-lg">
                  Enterprise Benefits
                </h3>
                <div className="grid md:grid-cols-3 gap-10 text-center">
                  <div className="bg-slate-900/60 rounded-2xl p-8 shadow-lg border border-blue-500/10">
                    <div className="mb-3"><span dangerouslySetInnerHTML={{__html: comparisons[8].icon}} className="text-4xl" /></div>
                    <h4 className="font-semibold text-white mb-2 text-xl">99.9% Uptime</h4>
                    <p className="text-gray-300 text-base">Guaranteed reliability for mission-critical operations</p>
                  </div>
                  <div className="bg-slate-900/60 rounded-2xl p-8 shadow-lg border border-green-500/10">
                    <div className="mb-3"><span dangerouslySetInnerHTML={{__html: comparisons[5].icon}} className="text-4xl" /></div>
                    <h4 className="font-semibold text-white mb-2 text-xl">50x Faster</h4>
                    <p className="text-gray-300 text-base">Accelerated workflows and data processing</p>
                  </div>
                  <div className="bg-slate-900/60 rounded-2xl p-8 shadow-lg border border-yellow-500/10">
                    <div className="mb-3"><span className="text-4xl">💰</span></div>
                    <h4 className="font-semibold text-white mb-2 text-xl">40% Cost Savings</h4>
                    <p className="text-gray-300 text-base">Reduced operational costs and increased ROI</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-700/30 to-green-700/30 p-12 text-center border-t border-white/10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-blue-600 mb-4 tracking-tight drop-shadow-lg">
                  Ready for Enterprise Excellence?
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg font-medium">
                  Join leading enterprises already transforming their operations with Deepkore&apos;s advanced platform.
                </p>
                <a href="/getstarted">
                  <motion.button
                    className="px-12 py-5 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-extrabold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-xl tracking-wide"
                    whileHover={{ scale: 1.07, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Enterprise Trial
                  </motion.button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
