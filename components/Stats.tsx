"use client";

import React from "react";
import { motion } from "framer-motion";

const Stats: React.FC = () => {
  const stats = [
    {
      value: "01",
      label: "Unstructured Process",
      description:
        "Manual and inefficient workflows that hinder productivity and scalability.",
      icon: "⚠️",
    },
    {
      value: "02",
      label: "Restricted View of Critical Data",
      description:
        "Limited access to important information across departments and teams.",
      icon: "🔒",
    },
    {
      value: "03",
      label: "Lack of Cross Functional Collaboration",
      description: "Siloed teams and poor communication between departments.",
      icon: "🤝",
    },
    {
      value: "04",
      label: "Gaps in Process Insight and Analysis",
      description:
        "Lack of data-driven decision making and comprehensive analytics.",
      icon: "📊",
    },
    {
      value: "05",
      label: "Poor Integration Between Systems",
      description:
        "Disconnected tools and platforms causing inefficiencies and data silos.",
      icon: "🔗",
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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Challenges in Leading Industries
          </h2>
          <p className="text-xl text-gray-600">
            Addressing the most common obstacles in modern enterprises
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-6xl mb-4">{stat.icon}</div>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-2">
                {stat.value}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {stat.label}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
