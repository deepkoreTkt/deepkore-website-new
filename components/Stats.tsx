"use client";

import React from "react";
import { motion } from "framer-motion";

const Stats: React.FC = () => {
  const stats = [
    {
      value: "700%",
      label: "Performance Increase",
      description:
        "Boost in task automation efficiency, optimizing workflows for all users.",
      icon: "📈",
    },
    {
      value: "95%",
      label: "User Engagement",
      description:
        "Growth in interactive sessions, enhancing user experience and satisfaction.",
      icon: "👥",
    },
    {
      value: "0.7s",
      label: "Processing Speed",
      description:
        "Lightning-fast response times, ensuring seamless interactions with our AI systems.",
      icon: "⚡",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transforming Efficiency in Creative Entrepreneurship
          </h2>
          <p className="text-xl text-gray-300">
            Deepkore&apos;s Impact at a Glance
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl mb-4">{stat.icon}</div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                {stat.value}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {stat.label}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
