"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Processicon from "../../components/Processicon";

const Process: React.FC = () => {
  const features = [
    {
      title: "Tailored Processes",
      description:
        "Customize processes and ensure greater alignment with business goals and processes that fit like a glove",
      icon: "🎯",
      image: "/images/process-1.webp", // Placeholder, replace with actual image
    },
    {
      title: "Enhanced Productivity",
      description:
        "Reduce manual effort and errors by automating processes, enabling teams to focus on more strategic tasks",
      icon: "⚡",
      image: "/images/process-2.webp",
    },
    {
      title: "Cross-functional Synergy",
      description:
        "Foster teamwork across departments, break down silos, and promote cross-functional cooperation",
      icon: "🤝",
      image: "/images/process-3.webp",
    },
    {
      title: "Long-term Adaptability",
      description:
        "Ensure that the system remains aligned with the evolving needs of the business and maintains process excellence",
      icon: "🔄",
      image: "/images/process-4.webp",
    },
  ];

  const workflowTools = [
    {
      title: "Dynamic Boards",
      description:
        "Map out projects and workflows on flexible, interactive boards that adapt to your team's needs.",
      icon: "📋",
      details:
        "Stay organized, eliminate clutter, and ensure every task stays on track.",
      image: "/classic02.png",
    },
    {
      title: "Streamlined Processes",
      description:
        "Simplify each stage of work with intuitive workflows that make planning, prioritization, and delegation seamless.",
      icon: "⚙️",
      details:
        "Stay organized, eliminate clutter, and ensure every task stays on track.",
      image: "/classic04.png",
    },
    {
      title: "Flexible Customization",
      description:
        "Create tailored forms that match any process requirement without limitation.",
      icon: "🔧",
      details:
        "Decide who initiates workflows, control visibility, and define permissions at every stage.",
      image: "/classic05.png",
    },
    {
      title: "Seamless Integration",
      description:
        "Link different workflows and processes together for smooth, multi-step operations—all without a single line of code.",
      icon: "🔗",
      details:
        "Effortlessly shift between structured and unstructured flows for maximum adaptability.",
      image: "/classic02.png",
    },
  ];

  const stats = [
    { number: "500+", label: "Processes Automated" },
    { number: "95%", label: "Efficiency Increase" },
    { number: "24/7", label: "Process Monitoring" },
    { number: "99.9%", label: "Uptime Guarantee" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background with animated elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00A551]/5 via-[#2791D0]/5 to-[#2791D0]/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00A551]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2791D0]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#2791D0]/5 to-transparent rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-[#00A551]/20 to-[#2791D0]/20 text-[#00A551] font-semibold rounded-full text-sm border border-[#00A551]/30">
                ✨ No Coding Required
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00A551] via-[#2791D0] to-[#00A551] bg-clip-text text-transparent animate-gradient">
              Simple Automation with Process Management
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-8">
              Powerful tools to accelerate your workflows
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              Clear, structured, and effortless. No coding required&mdash;just
              build, automate, and manage with ease.
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Achieve and maintain process excellence with Deepkore&apos;s
              powerful automation platform. Build enterprise-grade processes
              without coding, enabling your teams to focus on what matters most.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.button
              className="group relative bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2791D0] to-[#00A551] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.button>
            <motion.button
              className="group border-2 border-[#00A551] text-[#00A551] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#00A551] hover:text-white transition-all duration-500 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                Book a Demo
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-gray-500 mb-4">
              Trusted by 74,000+ businesses worldwide
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl">🏆</div>
              <div className="text-2xl">⭐</div>
              <div className="text-2xl">🎯</div>
              <div className="text-2xl">🚀</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00A551] via-[#2791D0] to-[#00A551]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#2791D0]/10 rounded-full blur-2xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Process Excellence in Numbers
            </h2>
            <p className="text-xl text-[#ffffff]/90 max-w-3xl mx-auto">
              Join thousands of businesses transforming their operations with
              automated processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center group"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-[#2791D0]/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#2791D0]/20">
                  <motion.div
                    className="text-5xl md:text-7xl font-bold mb-4 text-[#ffffff] group-hover:scale-110 transition-transform duration-500"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: idx * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-xl text-white/90 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
              Achieve Process Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our platform delivers a wide range of benefits for structured
              process evolution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="group bg-white rounded-3xl shadow-xl p-8 hover:shadow-3xl transition-all duration-500 border border-gray-100 overflow-hidden relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
              >
                {/* Background gradient */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#00A551]/5 to-[#2791D0]/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-[#00A551] to-[#2791D0] rounded-2xl flex items-center justify-center mr-4 shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-3xl">{feature.icon}</span>
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#00A551] transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
              How Process Automation Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple steps to transform your business processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-8">
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-[#00A551] to-[#2791D0] rounded-full flex items-center justify-center mx-auto shadow-2xl border-4 border-white"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-3xl font-bold text-white">1</span>
                </motion.div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-[#00A551] to-[#2791D0] rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#00A551] transition-colors duration-300">
                Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Use our visual designer to map out your processes without coding
              </p>
            </motion.div>

            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-8">
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-[#2791D0] to-[#00A551] rounded-full flex items-center justify-center mx-auto shadow-2xl border-4 border-white"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-3xl font-bold text-white">2</span>
                </motion.div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-[#2791D0] to-[#00A551] rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#2791D0] transition-colors duration-300">
                Automate
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Set up automated workflows, approvals, and notifications
              </p>
            </motion.div>

            <motion.div
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-8">
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-[#00A551] to-[#2791D0] rounded-full flex items-center justify-center mx-auto shadow-2xl border-4 border-white"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-3xl font-bold text-white">3</span>
                </motion.div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-[#00A551] to-[#2791D0] rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-[#00A551] transition-colors duration-300">
                Optimize
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor performance and continuously improve your processes
              </p>
            </motion.div>
          </div>

          {/* Connection line */}
          <div className="hidden md:block relative mt-12">
            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-4xl h-0.5 bg-gradient-to-r from-[#00A551] via-[#2791D0] to-[#00A551] rounded-full opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Workflow Tools Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Powerful Tools for Workflow Acceleration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Clear, structured, and effortless solutions to transform your
              business processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-12">
            {workflowTools.map((tool, idx) => (
              <motion.div
                key={idx}
                className={`bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-200/50 overflow-hidden relative group ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                } flex flex-col lg:flex-row items-center`}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00A551]/5 via-transparent to-[#2791D0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A551] to-[#2791D0] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>

                {/* Content Section */}
                <div className="relative z-10 p-8 lg:p-12 flex-1">
                  <div className="flex items-start mb-6">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-[#00A551] to-[#2791D0] rounded-xl flex items-center justify-center mr-6 shadow-lg"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-2xl">{tool.icon}</span>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#00A551] transition-colors duration-300">
                        {tool.title}
                      </h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-[#00A551] to-[#2791D0] rounded-full"></div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {tool.description}
                  </p>

                  <p className="text-base text-gray-600 leading-relaxed mb-8 italic">
                    &ldquo;{tool.details}&rdquo;
                  </p>

                  {/* Enterprise-style CTA */}
                  <motion.button
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </motion.button>
                </div>

                {/* Image Section */}
                <div className="relative z-10 flex-1 p-8 lg:p-12">
                  <motion.div
                    className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-inner border border-gray-300/50 group-hover:shadow-xl transition-shadow duration-500"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {tool.image ? (
                        <Image
                          src={tool.image}
                          alt={tool.title}
                          width={500}
                          height={400}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      ) : (
                        <div className="text-center text-gray-500">
                          <div className="text-6xl mb-4 opacity-50">📊</div>
                          <p className="text-lg font-medium">
                            Process Visualization
                          </p>
                        </div>
                      )}
                    </div>
                    {/* Overlay for enterprise feel */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
                      <p className="text-sm text-gray-700 font-medium">
                        Enterprise-Grade Solution
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <Processicon />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Automate Your Processes?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-[#ffffff]/80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of businesses already using Deepkore to streamline
            their operations
          </motion.p>
          <motion.button
            className="bg-[#ffffff] text-[#00A551] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#2791D0]/90 transition-all duration-300 shadow-xl hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Free Trial
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;
