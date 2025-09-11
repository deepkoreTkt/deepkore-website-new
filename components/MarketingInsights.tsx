"use client";

import React from "react";
import { motion } from "framer-motion";

const MarketingInsights: React.FC = () => {
  const insights = [
    {
      title: "Marketing Insights for Better Results",
      stats: "70% Increase in Engagement",
      description:
        "Marketing strategies utilizing data-driven insights lead to 70% boost in audience engagement.",
      icon: "📈",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Higher ROI Performance",
      stats: "50% Higher ROI",
      description:
        "Businesses leveraging advanced marketing tools report a 50% higher return on investment.",
      icon: "💰",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const features = [
    "Agile Workflow",
    "Communication",
    "Document Sharing",
    "Security Measures",
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Deepkore will help you in different sectors
          </h2>
          <p className="text-xl text-gray-600">
            Transform your business operations with AI-powered insights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="text-center space-y-6">
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-r ${insight.color} rounded-2xl flex items-center justify-center mx-auto`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-3xl">{insight.icon}</span>
                </motion.div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {insight.title}
                </h3>

                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  {insight.stats}
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {insight.description}
                </p>

                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start 7-day free trial
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl mb-3">🔧</div>
              <h4 className="font-semibold text-gray-900">{feature}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingInsights;
