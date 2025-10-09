"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Clock,
  DollarSign,
  Unlink,
  TrendingUp,
  Shield,
  Bot,
  Zap,
  Link,
  BarChart3,
  Users,
  Monitor,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AllProducts: React.FC = () => {
  const challenges = [
    {
      icon: Clock,
      title: "Slow Development Cycles",
      description:
        "Traditional development takes months or years to deploy solutions.",
    },
    {
      icon: DollarSign,
      title: "High Development Costs",
      description:
        "Expensive custom development and maintenance of legacy systems.",
    },
    {
      icon: Unlink,
      title: "Disconnected Systems",
      description:
        "Siloed applications that don't communicate, leading to inefficiencies.",
    },
    {
      icon: TrendingUp,
      title: "Scalability Issues",
      description: "Difficulty scaling applications as business needs grow.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description:
        "Challenges in maintaining security and regulatory compliance.",
    },
    {
      icon: Bot,
      title: "Lack of AI Integration",
      description:
        "Missing advanced AI capabilities in existing business applications.",
    },
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Rapid Application Development",
      description:
        "Build and deploy applications in weeks with our low-code platform.",
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Solutions",
      description:
        "Reduce development costs by up to 70% with no-code and low-code tools.",
    },
    {
      icon: Link,
      title: "Integrated Platforms",
      description:
        "Connect all your systems into a unified, composable architecture.",
    },
    {
      icon: BarChart3,
      title: "Scalable Architecture",
      description: "Cloud-native solutions that grow with your business needs.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Built-in security and compliance features for all applications.",
    },
    {
      icon: Bot,
      title: "AI-Powered Features",
      description:
        "Leverage AI and machine learning to enhance business processes.",
    },
  ];

  return (
    <div>
      <Header />
      <section
        id="all-products"
        className="relative py-30 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 xl:px-40">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
                <span className="text-blue-400 font-medium text-sm tracking-wider uppercase">
                  All Products
                </span>
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Explore Our Complete Product Suite with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 block mt-2">
                AI & Low-Code
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Discover our comprehensive range of solutions including CRM, IT
              Service Desk, Manufacturing, and more. Build intelligent
              applications that adapt to your business needs.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <a href="/getstarted">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-lg">
                  Get Started Today
                </button>
              </a>
              <a href="/getstarted">
                <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg">
                  Get Demo
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Products Showcase Section */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h3
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Our Key Products
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Discover our flagship solutions designed to transform your
                business operations
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* CRM Card */}
              <motion.div
                className="bg-gradient-to-br from-blue-50/60 to-green-50/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-8">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Users className="w-10 h-10 text-white" />
                  </motion.div>
                  <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">
                    CRM
                  </h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Customer Relationship Management with AI & Low-Code
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">
                      Organizations, Customers, Leads, Prospects
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Tasks, Reports, Analytics</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">AI-Powered Automation</p>
                  </div>
                </div>

                <motion.button
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a href="/crm" className="block w-full h-full">
                    Learn More About CRM
                  </a>
                </motion.button>
              </motion.div>

              {/* IT Service Desk Card */}
              <motion.div
                className="bg-gradient-to-br from-blue-50/60 to-green-50/60 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -5 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-8">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Monitor className="w-10 h-10 text-white" />
                  </motion.div>
                  <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">
                    IT Service Desk
                  </h4>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    IT Service Management with AI & Low-Code
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">
                      Incident Management, Problem Solving
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">
                      Change Management, Asset Tracking
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-600">Knowledge Base, Reporting</p>
                  </div>
                </div>

                <motion.button
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a href="/itservicedesk" className="block w-full h-full">
                    Learn More About IT Service Desk
                  </a>
                </motion.button>
              </motion.div>
            </div>

            {/* Additional Products Teaser */}
          </motion.div>

          {/* Challenges Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                  Challenges
                </span>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </motion.div>
              <motion.h3
                className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Common Business Challenges
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Organizations face numerous obstacles when building and
                maintaining business applications
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {challenges.map((challenge, index) => {
                const colors = [
                  {
                    bg: "bg-red-50",
                    border: "border-red-200",
                    iconBg: "bg-red-100",
                    iconColor: "text-red-600",
                  },
                  {
                    bg: "bg-orange-50",
                    border: "border-orange-200",
                    iconBg: "bg-orange-100",
                    iconColor: "text-orange-600",
                  },
                  {
                    bg: "bg-yellow-50",
                    border: "border-yellow-200",
                    iconBg: "bg-yellow-100",
                    iconColor: "text-yellow-600",
                  },
                  {
                    bg: "bg-amber-50",
                    border: "border-amber-200",
                    iconBg: "bg-amber-100",
                    iconColor: "text-amber-600",
                  },
                  {
                    bg: "bg-purple-50",
                    border: "border-purple-200",
                    iconBg: "bg-purple-100",
                    iconColor: "text-purple-600",
                  },
                  {
                    bg: "bg-pink-50",
                    border: "border-pink-200",
                    iconBg: "bg-pink-100",
                    iconColor: "text-pink-600",
                  },
                ];
                const colorScheme = colors[index % colors.length];

                return (
                  <motion.div
                    key={index}
                    className={`relative ${colorScheme.bg} backdrop-blur-xl rounded-2xl p-6 md:p-8 border ${colorScheme.border}/50 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>

                    <div className="relative z-10">
                      {/* Icon with colored background */}
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 ${colorScheme.iconBg} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <challenge.icon
                          className={`w-7 h-7 ${colorScheme.iconColor}`}
                        />
                      </div>

                      <h4 className="text-lg md:text-xl font-bold text-black mb-3 leading-tight group-hover:text-gray-800 transition-colors duration-300">
                        {challenge.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base group-hover:text-gray-700 transition-colors duration-300">
                        {challenge.description}
                      </p>

                      {/* Bottom accent */}
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorScheme.iconBg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl`}
                      ></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.div
                className="inline-flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                  Solutions
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </motion.div>
              <motion.h3
                className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Deepkore Solutions
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Transform your business with our comprehensive low-code and
                no-code platform
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {solutions.map((solution, index) => {
                const gradients = [
                  "from-orange-50/60 via-rose-50/60 to-pink-50/60",
                  "from-teal-50/60 via-cyan-50/60 to-blue-50/60",
                  "from-amber-50/60 via-yellow-50/60 to-orange-50/60",
                  "from-slate-50/60 via-gray-50/60 to-zinc-50/60",
                  "from-emerald-50/60 via-green-50/60 to-teal-50/60",
                  "from-violet-50/60 via-purple-50/60 to-indigo-50/60",
                ];
                const borders = [
                  "border-orange-200/50",
                  "border-teal-200/50",
                  "border-amber-200/50",
                  "border-slate-200/50",
                  "border-emerald-200/50",
                  "border-violet-200/50",
                ];
                const iconColors = [
                  "text-orange-600",
                  "text-teal-600",
                  "text-amber-600",
                  "text-slate-600",
                  "text-emerald-600",
                  "text-violet-600",
                ];
                const loadingBarColors = [
                  "from-orange-400 to-rose-400",
                  "from-teal-400 to-cyan-400",
                  "from-amber-400 to-yellow-400",
                  "from-slate-400 to-gray-400",
                  "from-emerald-400 to-green-400",
                  "from-violet-400 to-purple-400",
                ];

                return (
                  <motion.div
                    key={index}
                    className={`relative bg-gradient-to-br ${
                      gradients[index % gradients.length]
                    } backdrop-blur-xl rounded-2xl p-6 md:p-8 border ${
                      borders[index % borders.length]
                    } shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden`}
                    whileHover={{ scale: 1.02, y: -5 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Floating geometric shapes */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/20 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>
                    <div className="absolute top-1/2 -left-6 w-8 h-8 bg-white/10 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                    <div className="absolute bottom-4 right-1/4 w-6 h-6 bg-white/15 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                    <div className="relative z-10">
                      {/* Enhanced icon */}
                      <div className="relative mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <solution.icon
                            className={`w-8 h-8 ${
                              iconColors[index % iconColors.length]
                            }`}
                          />
                        </div>
                        {/* Glow effect */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${
                            gradients[index % gradients.length]
                          } rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`}
                        ></div>
                      </div>

                      <h4 className="text-lg md:text-xl font-bold text-black mb-3 leading-tight group-hover:text-gray-800 transition-colors duration-300">
                        {solution.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base group-hover:text-gray-800 transition-colors duration-300">
                        {solution.description}
                      </p>

                      {/* Progress indicator */}
                      <div className="mt-4 flex items-center space-x-2">
                        <div className="flex-1 h-1.5 bg-white/50 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${
                              loadingBarColors[index % loadingBarColors.length]
                            } rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                          ></div>
                        </div>
                        <span
                          className={`text-xs font-semibold ${
                            iconColors[index % iconColors.length]
                          }`}
                        >
                          {85 + index * 3}%
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center bg-gradient-to-r from-blue-50/50 to-green-50/50 rounded-3xl p-12 md:p-16 border border-blue-200/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl md:text-4xl font-bold text-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Explore Our Product Suite?
            </motion.h3>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discover how Deepkore&apos;s AI-powered low-code platform can
              transform your business operations
            </motion.p>

            <motion.button
              className="px-12 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-lg mb-4"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a href="/getstarted" className="block w-full h-full">
                Get Started Today
              </a>
            </motion.button>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllProducts;
