"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Comparison: React.FC = () => {
  const comparisons = [
    {
      other: "Limited Task Customization",
      prismo: "Real-Time Progress Updates",
    },
    {
      other: "Slow Progress Tracking",
      prismo: "Intuitive User Experience",
    },
    {
      other: "Complex User Interface",
      prismo: "Automated Data Entry",
    },
    {
      other: "Manual Data Entry Required",
      prismo: "Seamless Integrations Across Tools",
    },
    {
      other: "Lack of Seamless Integration",
      prismo: "Powerful Bulk Action Support",
    },
    {
      other: "No Bulk Actions Support",
      prismo: "Efficient Document Organization",
    },
    {
      other: "Inconsistent Document Management",
      prismo: "Comprehensive Reporting Insights",
    },
    {
      other: "Limited Reporting Features",
      prismo: "Advanced Analytics & AI Insights",
    },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Sets Deepkore Apart
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how Deepkore outperforms other platforms with superior
            features, better performance, and unmatched ease of use.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-[40px] shadow-2xl overflow-hidden border border-white/10">
            {/* Header */}
            <div className="grid grid-cols-2 text-white pt-12 pb-8 px-8 relative">
              <div className="text-center">
                <h3 className="text-4xl font-bold tracking-tight">
                  OTHER PLATFORMS
                </h3>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/lightlogo.png"
                    alt="Deepkore Logo"
                    width={200}
                    height={50}
                    className="w-auto h-10"
                  />
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 top-12 transform -translate-x-1/2">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl border-2 border-white/10">
                V/S
              </div>
            </div>

            {/* Comparison Items */}
            <div className="divide-y divide-white/5">
              {comparisons.map((comparison, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-2 hover:bg-white/5 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-6 border-r border-white/5">
                    <div className="flex items-center space-x-4">
                      <span className="w-10 h-10 flex-shrink-0 bg-gray-800 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-lg">�️</span>
                      </span>
                      <span className="font-medium text-gray-400 text-lg">
                        {comparison.other}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4">
                      <span className="w-10 h-10 flex-shrink-0 bg-blue-500/10 rounded-xl flex items-center justify-center">
                        <span className="text-white bg-black w-6 h-6 rounded-lg flex items-center justify-center text-sm">
                          ✓
                        </span>
                      </span>
                      <span className="font-medium text-gray-200 text-lg">
                        {comparison.prismo}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a href="/getstarted" className="block">
              <div className="bg-gradient-to-r from-white/5 to-white/[0.02] p-8 text-center border-t border-white/5">
                <motion.button
                  className="px-8 py-4 bg-[#8112db] hover:bg-[#8112db]/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Get Started with Deepkore
                </motion.button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
