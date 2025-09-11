"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import Comparison from "./Comparison";
import { div } from "framer-motion/client";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Free",
      price: "$0.00",
      period: "per month",
      credits: "Up to 250 credits",
      features: [
        "Essential features",
        "Basic AI assistance",
        "Community support",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Basic",
      price: "$24.99",
      period: "per month",
      credits: "1000 credits",
      features: [
        "Essential features",
        "Basic support options",
        "Community resources",
        "Advanced AI tools",
      ],
      buttonText: "Start Basic",
      popular: true,
    },
    {
      name: "Pro",
      price: "$49.00",
      period: "per month",
      credits: "Unlimited credits",
      features: [
        "Full access to all features",
        "Dedicated support",
        "Custom resources",
        "Priority processing",
        "Advanced analytics",
      ],
      buttonText: "Go Pro",
      popular: false,
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <section className="py-40 bg-slate-900">
        <Header />
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose the Plan That Fits Your Needs
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you&apos;re just starting out or looking to expand your
              capabilities, our plans provide the perfect solution for your
              needs.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-blue-500 scale-105" : ""
                }`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: plan.popular ? 1.07 : 1.05 }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-1">
                    {plan.price}
                  </div>
                  <div className="text-gray-400">{plan.period}</div>
                  <div className="text-blue-300 font-semibold mt-2">
                    {plan.credits}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-300"
                    >
                      <span className="text-green-400 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-green-600 text-white hover:shadow-lg"
                      : "bg-slate-700 text-white hover:bg-slate-600"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.buttonText}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <Comparison />
      </section>
      <Footer />
    </div>
  );
};

export default Pricing;
