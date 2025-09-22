"use client";

import React from "react";
import { motion } from "framer-motion";
import IconMenuMarquee from "../components/IconMenuMarquee";

const MarketingInsights: React.FC = () => {
  const insights = [
    {
      label: "Trial",
      stats: "Free to try. Fast to scale.",
      description:
        "Take better customer and employee experience for a spin with a free trial of Freshdesk or Freshservice. No credit card required.",
      buttonText: "Try it free",
      href: "/getstarted",
    },
    {
      label: "Contact Sales",
      stats: "See rapid impact in action",
      description:
        "Let our product experts show you how Freshworks can solve your specific challenges. Get a personalized walkthrough tailored to your needs.",
      buttonText: "Book a demo",
      href: "/getstarted",
    },
    {
      label: "Resources",
      stats: "Learn, explore, get inspired",
      description:
        "Explore our library of case studies, product tours, webinars and insights.",
      buttonText: "Browse more",
      href: "/getstarted",
    },
  ];

  return (
    <section className="relative py-24 bg-[#0d1a2f] min-h-[60vh]">
      <div className="container mx-auto px-4 md:px-12 lg:px-40">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get started with Deepkore
          </h2>
          <p className="text-xl text-gray-300">
            Take better customer and employee experience for a spin
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              className="rounded-2xl border border-blue-900 bg-[#101e36] p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[350px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-1 text-sm font-semibold bg-blue-100 text-blue-700 rounded-full mb-6">
                  {insight.label}
                </span>
                <div className="text-2xl md:text-2xl font-bold text-white mb-2">
                  {insight.stats}
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  {insight.description}
                </p>
              </div>
              <motion.button
                className="mt-auto w-full py-3 text-lg font-bold rounded-full bg-gradient-to-r from-green-600 to-blue-600 text-[#ffffff] hover:bg-[#2791D0]/90 transition-all duration-300 shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {insight.buttonText}
                <a href={insight.href} className="absolute inset-0"></a>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
      <IconMenuMarquee />
    </section>
  );
};

export default MarketingInsights;

