"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Zap,
  TrendingUp,
  Shield,
  Lightbulb,
  DollarSign,
  Link,
  BarChart3,
  Settings,
  Snail,
  FileText,
  Building,
  Wrench,
  Home,
  Clock,
  Lock,
  BookOpen,
  ClipboardList,
  Handshake,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Manufacturing: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Build Without Barriers",
      description:
        "Let anyone in your team design and deploy apps—no coding required.",
    },
    {
      icon: Zap,
      title: "Speed Up Delivery",
      description:
        "From concept to launch, create and test applications in record time.",
    },
    {
      icon: TrendingUp,
      title: "Grow with Ease",
      description:
        "Adapt and expand your apps effortlessly as your business evolves.",
    },
    {
      icon: "�️",
      title: "Stay in Control",
      description:
        "Enable safe, governed development without slowing creativity.",
    },
    {
      icon: "�",
      title: "Ignite Creativity",
      description:
        "Give teams tools that turn ideas into solutions quickly and efficiently.",
    },
    {
      icon: "💰",
      title: "Optimize Costs",
      description:
        "Deliver more with less by reusing components and cutting development time.",
    },
  ];

  const capabilities = [
    {
      title: "Integrate",
      description:
        "Connect with ERPs, payment systems, vendors, and authentication services for seamless operations.",
      icon: Link,
    },
    {
      title: "Organize",
      description:
        "Centralize all manufacturing data and information in a unified, accessible platform.",
      icon: BarChart3,
    },
    {
      title: "Optimize",
      description:
        "Streamline processes to boost operational efficiency and drive productivity gains.",
      icon: Settings,
    },
    {
      title: "Enhance",
      description:
        "Improve order fulfillment with real-time inventory visibility and complete traceability.",
      icon: TrendingUp,
    },
  ];

  const challenges = [
    {
      icon: Snail,
      title: "Slow Development Cycles",
      description:
        "Traditional systems take months to build and deploy, delaying innovation.",
    },
    {
      icon: FileText,
      title: "Paper-Based Processes",
      description:
        "Manual approvals and paperwork create bottlenecks and increase error rates.",
    },
    {
      icon: Building,
      title: "Siloed Systems",
      description:
        "Disconnected departments hinder collaboration and data flow.",
    },
    {
      icon: Wrench,
      title: "Rigid ERP Limitations",
      description:
        "Off-the-shelf solutions lack flexibility for unique manufacturing needs.",
    },
    {
      icon: Home,
      title: "Legacy System Burden",
      description:
        "Outdated infrastructure that's costly to maintain and difficult to scale.",
    },
    {
      icon: DollarSign,
      title: "Technical Debt",
      description:
        "Accumulated inefficiencies from patchwork solutions and outdated code.",
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fillWidth {
          to {
            width: 100%;
          }
        }
      `}</style>
      <div>
        <Header />
        <section className="relative py-20 bg-gray-50">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 xl:px-40">
            {/* Hero Section */}
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Left Side Content */}
              <div className="text-left">
                <motion.div
                  className="inline-block mb-8"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
                    <span className="text-blue-400 font-medium text-sm tracking-wider uppercase">
                      Manufacturing ERP Solutions
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Revolutionize Manufacturing with
                  <span className="text-blue-600 block mt-2">Low-Code ERP</span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Say goodbye to rigid systems and paper-based processes. Build
                  custom manufacturing ERP solutions that adapt to your business
                  needs with our powerful low-code platform.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-start items-start"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                    Book a Free Demo
                  </button>
                  <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg">
                    Start Building
                  </button>
                </motion.div>
              </div>

              {/* Right Side Image */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-3xl blur-3xl transform rotate-6"></div>
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-200/50">
                    <img
                      src="/images/manufacturing-hero.jpg"
                      alt="Manufacturing ERP Solutions"
                      className="w-full h-80 md:h-96 object-cover rounded-2xl"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1hbnVmYWN0dXJpbmcgRVJQPC90ZXh0Pjwvc3ZnPg==";
                      }}
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-800">
                          Live Manufacturing Dashboard
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Roadblocks Section */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Facing Any of These Roadblocks?
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Traditional manufacturing approaches create barriers to
                  innovation and efficiency. Here&apos;s what holds many
                  manufacturers back:
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    icon: Clock,
                    title: "Delays in bringing ideas to market",
                    description:
                      "Slow development cycles prevent rapid innovation and competitive advantage.",
                    stat: "6-12 months",
                    statLabel: "Avg. development time",
                  },
                  {
                    icon: FileText,
                    title: "Manual, paper-heavy approval processes",
                    description:
                      "Tedious paperwork and manual approvals create bottlenecks and errors.",
                    stat: "40+ hours",
                    statLabel: "Weekly admin time",
                  },
                  {
                    icon: Link,
                    title: "Disconnected tools and siloed data",
                    description:
                      "Fragmented systems prevent seamless data flow and collaboration.",
                    stat: "15+ systems",
                    statLabel: "Avg. per company",
                  },
                  {
                    icon: Lock,
                    title: "Inflexible ERP platforms holding you back",
                    description:
                      "Rigid off-the-shelf solutions can't adapt to your unique manufacturing needs.",
                    stat: "70%",
                    statLabel: "Features unused",
                  },
                  {
                    icon: Building,
                    title: "Outdated systems struggling to keep pace",
                    description:
                      "Legacy infrastructure that's expensive to maintain and difficult to scale.",
                    stat: "15+ years",
                    statLabel: "System age",
                  },
                  {
                    icon: BookOpen,
                    title: "Growing piles of technical debt",
                    description:
                      "Accumulated inefficiencies from patchwork solutions and outdated technologies.",
                    stat: "$2.5M",
                    statLabel: "Annual maintenance cost",
                  },
                ].map((roadblock, index) => (
                  <motion.div
                    key={index}
                    className="group relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.02, y: -4 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Simple background */}
                    <div className="absolute inset-0 bg-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                    {/* Decorative elements */}
                    <div className="absolute top-3 right-3 w-8 h-8 bg-gray-200 rounded-full group-hover:scale-110 transition-transform duration-300"></div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {typeof roadblock.icon === "string" ? (
                          roadblock.icon
                        ) : (
                          <roadblock.icon className="w-6 h-6 text-gray-600" />
                        )}
                      </div>

                      {/* Stats display */}
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-gray-800 mb-1">
                          {roadblock.stat}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {roadblock.statLabel}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight group-hover:text-gray-800 transition-colors duration-300">
                        {roadblock.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                        {roadblock.description}
                      </p>

                      {/* Simple bottom accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl"></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Solution Bridge */}
              <motion.div
                className="text-center mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-full px-8 py-4 border border-blue-200/30">
                  <span className="text-blue-600 font-semibold">
                    But there&apos;s a better way
                  </span>
                  <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  <span className="text-green-600 font-semibold">
                    With Deepkore
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Features Section */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Why Choose Deepkore for Manufacturing ERP?
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our platform delivers the speed, security, and scalability
                  needed for modern manufacturing operations
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="group relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.02, y: -4 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Simple background */}
                    <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                    {/* Floating elements */}
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-blue-100 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>

                    <div className="relative z-10">
                      {/* Step indicator */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg text-sm font-bold text-white shadow-lg">
                          {index + 1}
                        </div>
                        <div className="w-8 h-8 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300"></div>
                      </div>

                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {typeof feature.icon === "string" ? (
                          feature.icon
                        ) : (
                          <feature.icon className="w-7 h-7 text-blue-600" />
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-800 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                        {feature.description}
                      </p>

                      {/* Progress indicator */}
                      <div className="mt-4 flex items-center space-x-2">
                        <div className="flex-1 h-2 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </div>
                        <span className="text-xs text-blue-600 font-semibold">
                          Step {index + 1}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Capabilities Section */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-16">
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Transform Your Manufacturing Operations
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Build integrated systems that work in harmony, not silos
                </motion.p>
              </div>

              <div className="space-y-6">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    className="group relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.01, x: 8 }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline connector */}
                    {index < capabilities.length - 1 && (
                      <div className="absolute left-8 top-full w-0.5 h-6 bg-gray-200 group-hover:bg-gray-300 transition-colors duration-300"></div>
                    )}

                    {/* Timeline dot */}
                    <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full group-hover:scale-125 transition-transform duration-300 border-2 border-white shadow-lg"></div>

                    {/* Simple background elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>

                    <div className="relative z-10 flex items-start space-x-6 ml-8">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          {typeof capability.icon === "string" ? (
                            capability.icon
                          ) : (
                            <capability.icon className="w-6 h-6 text-blue-600" />
                          )}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Phase indicator */}
                        <div className="flex items-center space-x-3 mb-3">
                          <span className="text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full shadow-sm">
                            Phase {index + 1}
                          </span>
                          <div className="flex-1 h-px bg-blue-200 group-hover:bg-blue-300 transition-colors duration-300"></div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-800 transition-colors duration-300">
                          {capability.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                          {capability.description}
                        </p>

                        {/* Timeline progress */}
                        <div className="mt-4 flex items-center space-x-3">
                          <div className="text-sm text-blue-600 font-semibold">
                            Progress
                          </div>
                          <div className="flex-1 h-2 bg-blue-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-600 rounded-full transition-all duration-700 ease-out"
                              style={{
                                width: "0%",
                                animationDelay: `${index * 0.2}s`,
                                animation: "fillWidth 1s ease-out forwards",
                              }}
                            ></div>
                          </div>
                          <div className="text-sm text-blue-600 font-semibold">
                            {(index + 1) * 25}%
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
                <motion.h2
                  className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  Overcome Manufacturing Challenges
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Traditional manufacturing systems struggle with modern
                  demands. Here&apos;s what we&apos;re solving:
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    className="group relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    whileHover={{ scale: 1.02, y: -4 }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Simple background */}
                    <div className="absolute inset-0 bg-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                    {/* Geometric decorative elements */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-gray-200 rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-gray-200 rounded-full group-hover:scale-125 transition-transform duration-500 delay-100"></div>

                    <div className="relative z-10">
                      {/* Priority indicator */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                            index < 2
                              ? "bg-red-100 text-red-800 border border-red-300"
                              : index < 4
                              ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                              : "bg-green-100 text-green-800 border border-green-300"
                          }`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${
                              index < 2
                                ? "bg-red-500"
                                : index < 4
                                ? "bg-yellow-500"
                                : "bg-green-500"
                            }`}
                          ></div>
                          <span>
                            {index < 2
                              ? "High Priority"
                              : index < 4
                              ? "Medium Priority"
                              : "Low Priority"}
                          </span>
                        </div>
                        <div className="text-xs text-gray-600 font-mono font-bold bg-gray-100 px-2 py-1 rounded">
                          #{String(index + 1).padStart(2, "0")}
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {typeof challenge.icon === "string" ? (
                          challenge.icon
                        ) : (
                          <challenge.icon className="w-7 h-7 text-gray-600" />
                        )}
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight group-hover:text-gray-800 transition-colors duration-300">
                        {challenge.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                        {challenge.description}
                      </p>

                      {/* Action indicator */}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-gray-600 font-semibold">
                          Action Required
                        </span>
                        <div className="flex space-x-1">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                                i < (index % 3) + 1
                                  ? "bg-gray-600"
                                  : "bg-gray-200"
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>

                      {/* Simple corner accent */}
                      <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-gray-200 group-hover:border-t-gray-300 transition-colors duration-300"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Material Procurement Section */}
            <motion.div
              className="mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
                <div className="text-center mb-8">
                  <motion.h2
                    className="text-3xl md:text-4xl font-bold text-black mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    Streamline Material Procurement
                  </motion.h2>
                  <motion.p
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Design and automate complex procurement workflows for
                    efficient material management
                  </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    className="group relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {/* Simple background */}
                    <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                    {/* Floating elements */}
                    <div className="absolute -top-3 -right-3 w-14 h-14 bg-blue-100 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>

                    <div className="relative z-10">
                      {/* Process step indicator */}
                      <div className="flex justify-center mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                            1
                          </div>
                          <div className="w-8 h-0.5 bg-blue-300 group-hover:bg-blue-400 transition-colors duration-300"></div>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="relative mb-6 mx-auto w-fit">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <ClipboardList className="w-8 h-8 text-blue-600" />
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-blue-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-800 transition-colors duration-300">
                        Purchase Orders
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300 mb-4">
                        Automated PO creation and approval routing
                      </p>

                      {/* Process checklist */}
                      <div className="space-y-2 text-left">
                        {["Create", "Review", "Approve", "Send"].map(
                          (step, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2 text-xs"
                            >
                              <div
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                  i < 2 ? "bg-blue-600" : "bg-blue-200"
                                }`}
                              ></div>
                              <span className="text-gray-600">{step}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {/* Simple background */}
                    <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                    {/* Floating elements */}
                    <div className="absolute -top-3 -right-3 w-14 h-14 bg-blue-100 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>

                    <div className="relative z-10">
                      {/* Process step indicator */}
                      <div className="flex justify-center mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                            2
                          </div>
                          <div className="w-8 h-0.5 bg-blue-300 group-hover:bg-blue-400 transition-colors duration-300"></div>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="relative mb-6 mx-auto w-fit">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Handshake className="w-8 h-8 text-blue-600" />
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-blue-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-800 transition-colors duration-300">
                        Vendor Management
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300 mb-4">
                        Centralized vendor database and performance tracking
                      </p>

                      {/* Process checklist */}
                      <div className="space-y-2 text-left">
                        {["Onboard", "Rate", "Monitor", "Optimize"].map(
                          (step, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2 text-xs"
                            >
                              <div
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                  i < 3 ? "bg-blue-600" : "bg-blue-200"
                                }`}
                              ></div>
                              <span className="text-gray-600">{step}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="group relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {/* Simple background */}
                    <div className="absolute inset-0 bg-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                    {/* Floating elements */}
                    <div className="absolute -top-3 -right-3 w-14 h-14 bg-blue-100 rounded-full blur-lg group-hover:scale-125 transition-transform duration-500"></div>

                    <div className="relative z-10">
                      {/* Process step indicator */}
                      <div className="flex justify-center mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                            3
                          </div>
                          <div className="w-8 h-0.5 bg-blue-300 group-hover:bg-blue-400 transition-colors duration-300"></div>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="relative mb-6 mx-auto w-fit">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <DollarSign className="w-8 h-8 text-blue-600" />
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-blue-400 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight group-hover:text-blue-800 transition-colors duration-300">
                        Invoice Processing
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300 mb-4">
                        Automated invoice matching and payment workflows
                      </p>

                      {/* Process checklist */}
                      <div className="space-y-2 text-left">
                        {["Receive", "Verify", "Pay", "Archive"].map(
                          (step, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2 text-xs"
                            >
                              <div
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                  i < 1 ? "bg-blue-600" : "bg-blue-200"
                                }`}
                              ></div>
                              <span className="text-gray-600">{step}</span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="text-center bg-blue-600 rounded-3xl p-12 md:p-16 text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-2xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to Digitize Your Manufacturing Operations?
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Join manufacturers worldwide using Deepkore to build flexible,
                scalable ERP solutions
              </motion.p>
              <a href="/getstarted">
                <motion.button
                  className="px-12 py-5 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg mb-4"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Get Started Today
                </motion.button>
              </a>

              <motion.p
                className="text-blue-100 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Free consultation • Custom demo
              </motion.p>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Manufacturing;
