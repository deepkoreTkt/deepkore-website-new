"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";

const WhatMakesUsUnique: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
    viewport: { once: true },
  };

  const stats = [
    { number: "500+", label: "Active Users" },
    { number: "100+", label: "Apps Built" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" },
  ];

  const features = [
    {
      id: 1,
      title: "True No-Code Innovation",
      subtitle:
        "Build enterprise applications effortlessly using visual designers and natural language - no coding required.",
      image: "/classic04.png",
      cta: "Explore Our Platform",
      ctaLink: "/feature",
      stats: "50% Faster Development",
      badge: "Industry Leader",
    },
    {
      id: 2,
      title: "AI-Powered Automation",
      subtitle:
        "Transform your workflows with intelligent automation that learns and adapts to your business needs.",
      image: "/classic02.png",
      cta: "Discover AI Features",
      ctaLink: "/feature",
      stats: "70% Efficiency Boost",
      badge: "AI-Native",
    },
    {
      id: 3,
      title: "Scalable Architecture",
      subtitle:
        "Grow your applications seamlessly with our cloud-native, scalable infrastructure designed for enterprise.",
      image: "/classic05.png",
      cta: "Learn More",
      ctaLink: "/feature",
      stats: "100% Scalable",
      badge: "Enterprise-Ready",
    },
  ];

  const achievements = [
    { title: "D-U-N-S Verified", year: "2025", icon: "🏆" },
    { title: "ISO 27001 Certified", year: "2024", icon: "🔒" },
    { title: "Best No-Code Platform", year: "2024", icon: "🎯" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-[#00A551]/10 via-[#2791D0]/5 to-[#00A551]/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 mb-6">
              <span className="w-2 h-2 bg-[#00A551] rounded-full animate-pulse"></span>
              Innovation at Scale
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent">
              What Makes Deepkore Unique
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover why leading enterprises choose Deepkore for their digital
              transformation journey
            </p>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-32">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.id}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-16`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00A551]/10 to-[#2791D0]/10 px-4 py-2 rounded-full text-sm font-medium text-[#00A551]">
                      <span className="w-2 h-2 bg-[#00A551] rounded-full"></span>
                      {feature.badge}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                      {feature.title}
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      {feature.subtitle}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="bg-gradient-to-r from-[#00A551]/5 to-[#2791D0]/5 rounded-2xl p-6 border border-[#00A551]/10">
                    <div className="text-3xl font-bold text-[#00A551] mb-2">
                      {feature.stats}
                    </div>
                    <div className="text-gray-600">
                      Average improvement with our platform
                    </div>
                  </div>

                  <motion.button
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {feature.cta}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.button>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      width={600}
                      height={400}
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Recognized by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to innovation and excellence has earned us
              recognition from the world&apos;s leading analyst firms
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {achievement.title}
                </h3>
                <div className="text-[#00A551] font-semibold">
                  {achievement.year}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24 bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Unmatched ROI & Performance
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of companies achieving extraordinary results with
              our platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                metric: "75%",
                title: "Faster Time-to-Market",
                description:
                  "Reduce development cycles and launch products faster than ever before",
              },
              {
                metric: "60%",
                title: "Cost Reduction",
                description:
                  "Lower development and maintenance costs with our efficient platform",
              },
              {
                metric: "90%",
                title: "User Adoption",
                description:
                  "High adoption rates with intuitive interfaces and powerful features",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-6xl md:text-7xl font-bold mb-4 opacity-20">
                  {item.metric}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Innovation with Purpose
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Deepkore Technologies, we believe in building technology that
              truly makes a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: "🚀",
                title: "Customer-First Approach",
                description:
                  "Every decision we make is guided by our commitment to your success and growth.",
              },
              {
                icon: "🔬",
                title: "Continuous Innovation",
                description:
                  "We invest heavily in R&D to bring you cutting-edge solutions that stay ahead of the curve.",
              },
              {
                icon: "🤝",
                title: "Trusted Partnership",
                description:
                  "We build long-term relationships based on transparency, reliability, and mutual success.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-r from-[#00A551]/10 to-[#2791D0]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  <span className="text-4xl">{item.icon}</span>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#00A551] to-[#2791D0] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Join thousands of companies already transforming their business
              with Deepkore Technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/getstarted">
                <motion.button
                  className="bg-white text-[#00A551] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.button>
              </a>
              <a href="/contact">
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatMakesUsUnique;
