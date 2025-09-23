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
import Header from "./Header";
import Footer from "./Footer";

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
        className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50"
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
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-lg">
                Explore Products
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg">
                Get Demo
              </button>
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
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 mb-6">
                Plus Manufacturing, Low-Code Platforms, No-Code Applications,
                and more...
              </p>
              <motion.button
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Products
              </motion.button>
            </motion.div>
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
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <challenge.icon className="w-12 h-12 md:w-14 md:h-14" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-black mb-3 leading-tight">
                    {challenge.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {challenge.description}
                  </p>
                </motion.div>
              ))}
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
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-blue-50/60 to-green-50/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-12 h-12 md:w-14 md:h-14" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-black mb-3 leading-tight">
                    {solution.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
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

            <motion.p
              className="text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              No credit card required • 14-day free trial • Setup in minutes
            </motion.p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllProducts;
