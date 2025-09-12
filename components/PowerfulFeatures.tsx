"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PowerfulFeatures: React.FC = () => {
  const features = [
    {
      title: "Data Form",
      description: "Create custom forms effortlessly without coding.",
      icon: "/dataForm.svg",
      avatar:
        "https://framerusercontent.com/images/C73JaQknNYyRYvGQWukXPqclJqc.png?width=146&height=147",
      bg: "bg-[#e3f2fd]", // light blue
      border: "border-blue-100",
    },
    {
      title: "Process",
      description:
        "Design and automate processes with a simple drag-and-drop interface.",
      icon: "/process.svg",
      avatar:
        "https://framerusercontent.com/images/fzKQ5bQ0vj7zhOUIcwAUXMs7Od4.png?width=147&height=147",
      bg: "bg-[#e8f5e9]", // light green
      border: "border-green-100",
    },
    {
      title: "Integration",
      description:
        "Connect seamlessly with your existing tools and applications.",
      icon: "/integration.svg",
      avatar:
        "https://framerusercontent.com/images/Ak5k2agDTtdBba2G24v5QE1Hqi8.png?width=147&height=147",
      bg: "bg-[#f3e5f5]", // light purple
      border: "border-purple-100",
    },
    {
      title: "Analytics",
      description: "Turn data into actionable insights effortlessly.",
      icon: "/analytics.svg",
      avatar:
        "https://framerusercontent.com/images/wO1BnpgvlYgarcc8JQl3WU75XA.png?width=147&height=147",
      bg: "bg-[#e0f7fa]", // light cyan
      border: "border-cyan-100",
    },
  ];

  return (
    <section className="py-24 bg-[#f5f7f7]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-6">
            <div className="px-6 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
              <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
                Powerful Features
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All Your Tasks, Organized Effortlessly
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${feature.bg} ${feature.border} flex flex-col items-center text-center min-h-[420px]`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, y: -5 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-2"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </motion.div>

                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-sm">
                  <Image
                    src={feature.avatar}
                    alt={`${feature.title} avatar`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="/feature">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
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
