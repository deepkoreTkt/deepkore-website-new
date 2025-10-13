"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Rocket,
  Microscope,
  Handshake,
  Clock,
  DollarSign,
  Users,
  TrendingUp,
} from "lucide-react";

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
      image: "/whydeepkroe.svg",
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
      image: "/images/process/process2.svg",
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

  // const achievements = [
  //   { title: "D-U-N-S Verified", year: "2025", icon: "🏆" },
  //   { title: "ISO 27001 Certified", year: "2024", icon: "🔒" },
  //   { title: "Best No-Code Platform", year: "2024", icon: "🎯" },
  // ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 md:py-32 bg-gradient-to-br from-[#00A551]/10 via-[#2791D0]/5 to-[#00A551]/10 overflow-hidden">
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
            <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent">
              What Makes Deepkore Unique
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
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
                  <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent mb-2">
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16 md:space-y-32">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.id}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-16`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="flex-1 space-y-4 lg:space-y-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00A551]/10 to-[#2791D0]/10 px-4 py-2 rounded-full text-sm font-medium text-[#00A551]">
                      <span className="w-2 h-2 bg-[#00A551] rounded-full"></span>
                      {feature.badge}
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                      {feature.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {feature.subtitle}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="bg-gradient-to-r from-[#00A551]/5 to-[#2791D0]/5 rounded-2xl p-6 border border-[#00A551]/10">
                    <div className="text-2xl font-bold text-[#00A551] mb-2">
                      {feature.stats}
                    </div>
                    <div className="text-gray-600">
                      Average improvement with our platform
                    </div>
                  </div>
                  <a href={feature.ctaLink}>
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
                  </a>
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
                      className="w-full h-64 md:h-96 object-cover"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      {/* <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
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
            {/* {achievements.map((achievement, idx) => (
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
      </section> */}

      {/* ROI Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"
            animate={{
              y: [0, 20, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/8 rounded-full blur-lg"
            animate={{
              x: [0, 30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-12 md:mb-20" {...fadeInUp}>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-8">
              <TrendingUp className="w-4 h-4" />
              Proven Results
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Unmatched ROI & Performance
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of companies achieving extraordinary results with
              our platform. See the numbers that speak for themselves.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "75%",
                title: "Faster Time-to-Market",
                description:
                  "Reduce development cycles and launch products faster than ever before",
                icon: Clock,
                color: "from-orange-400 to-red-500",
                progress: 75,
              },
              {
                metric: "60%",
                title: "Cost Reduction",
                description:
                  "Lower development and maintenance costs with our efficient platform",
                icon: DollarSign,
                color: "from-green-400 to-emerald-500",
                progress: 60,
              },
              {
                metric: "90%",
                title: "User Adoption",
                description:
                  "High adoption rates with intuitive interfaces and powerful features",
                icon: Users,
                color: "from-blue-400 to-cyan-500",
                progress: 90,
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 h-full">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Metric */}
                  <motion.div
                    className="text-center mb-6"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl md:text-7xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                      {item.metric}
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-white/20 rounded-full h-2 mb-4 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        transition={{
                          duration: 1.5,
                          delay: idx * 0.2 + 0.5,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-base opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-all duration-300"
                    initial={false}
                    whileHover={{ scale: 1.02 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-base opacity-80 mb-6">
              Ready to achieve these results for your business?
            </p>
            <motion.button
              className="bg-white text-[#00A551] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A551' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-16 right-16 w-24 h-24 bg-gradient-to-r from-[#00A551]/5 to-[#2791D0]/5 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-16 left-16 w-32 h-32 bg-gradient-to-r from-[#2791D0]/5 to-[#00A551]/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-12 md:mb-20" {...fadeInUp}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00A551]/10 to-[#2791D0]/10 px-6 py-3 rounded-full text-sm font-medium text-[#00A551] mb-8">
              <span className="w-2 h-2 bg-[#00A551] rounded-full animate-pulse"></span>
              Our Core Values
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Innovation with Purpose
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Deepkore Technologies, we believe in building technology that
              truly makes a difference. Our values drive everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Customer-First Approach",
                description:
                  "Every decision we make is guided by our commitment to your success and growth.",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
                stats: "98%",
                statLabel: "Satisfaction Rate",
              },
              {
                icon: Microscope,
                title: "Continuous Innovation",
                description:
                  "We invest heavily in R&D to bring you cutting-edge solutions that stay ahead of the curve.",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
                stats: "50+",
                statLabel: "New Features/Year",
              },
              {
                icon: Handshake,
                title: "Trusted Partnership",
                description:
                  "We build long-term relationships based on transparency, reliability, and mutual success.",
                gradient: "from-emerald-500 to-teal-500",
                bgGradient: "from-emerald-50 to-teal-50",
                stats: "10+",
                statLabel: "Years Experience",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div
                  className={`bg-gradient-to-br ${item.bgGradient} rounded-3xl p-6 md:p-8 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 h-full backdrop-blur-sm`}
                >
                  {/* Icon Container */}
                  <motion.div
                    className="relative mb-8"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </motion.div>

                    {/* Floating Stats Badge */}
                    <motion.div
                      className="absolute -top-2 -right-2 bg-white rounded-full px-3 py-1 shadow-lg border border-gray-100"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: idx * 0.2 + 0.5, type: "spring" }}
                      viewport={{ once: true }}
                    >
                      <div className="text-sm font-bold text-gray-900">
                        {item.stats}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.statLabel}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Animated Border */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${item.gradient} transition-all duration-500`}
                    style={{
                      background: `linear-gradient(45deg, transparent, transparent)`,
                    }}
                    whileHover={{
                      background: `linear-gradient(45deg, ${item.gradient
                        .split(" ")[0]
                        .replace("from-", "")}, ${item.gradient
                        .split(" ")[1]
                        .replace("to-", "")})`,
                      opacity: 0.1,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Quote */}
          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <blockquote className="text-xl font-medium text-gray-700 italic max-w-4xl mx-auto">
              &ldquo;Technology should serve humanity, not the other way around.
              We build with purpose, innovate with heart, and partner with
              trust.&rdquo;
            </blockquote>
            <div className="mt-6 text-[#00A551] font-semibold">
              — Deepkore Technologies Team
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-32 bg-gradient-to-br from-[#00A551] via-[#2791D0] to-[#6366f1] text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Floating Particles */}

          {/* Large Floating Orbs */}

          {/* Geometric Shapes */}

          <motion.div
            className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-white/10 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 text-center">
          {/* Trust Indicators */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                10,000+ Companies Trust Us
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">
                99.9% Uptime Guarantee
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Business Today?
              </span>
            </h2>

            <p className="text-lg md:text-2xl mb-8 md:mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Join thousands of companies already revolutionizing their
              operations with Deepkore Technologies. Start your free trial and
              experience the difference.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 md:mb-12">
              <motion.a
                href="/getstarted"
                className="group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white text-[#00A551] px-6 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg shadow-2xl hover:shadow-white/25 transition-all duration-300 flex items-center gap-3">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                  Start Free Trial
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
              </motion.a>

              <motion.a
                href="/contact"
                className="group relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="border-3 border-white text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </motion.div>
                  Schedule Demo
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    📅
                  </motion.div>
                </div>
              </motion.a>
            </div>

            {/* Urgency Timer */}
          </motion.div>
        </div>

        {/* Bottom Wave Effect */}
      </section>

      <Footer />
    </div>
  );
};

export default WhatMakesUsUnique;
