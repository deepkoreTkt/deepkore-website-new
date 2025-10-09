"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Link,
  RotateCcw,
  Shield,
  Lock,
  BarChart3,
  Cloud,
  Square,
  Circle,
  MessageCircle,
  Users,
  Mail,
  Database,
  Workflow,
  Target,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

// Integration features data
const integrationFeatures = [
  {
    title: "Intelligent Triggers",
    subtitle: "Automate workflows with smart event detection",
    description:
      "Set up dynamic triggers that respond to real-time events, enabling conditional processes that adapt to your business needs.",
    icon: Zap,
    capabilities: [
      {
        name: "Dynamic Event Triggers",
        description:
          "Over 40 internal event triggers for conditional automation",
      },
      {
        name: "External System Integration",
        description: "Prebuilt, no-code triggers from external systems",
      },
      {
        name: "Smart Scheduling",
        description: "Schedulers based on days, weeks, or months",
      },
      {
        name: "Webhook Support",
        description: "Catch webhooks from any other system seamlessly",
      },
    ],
  },
  {
    title: "Universal Connectors",
    subtitle: "Bridge your entire ecosystem",
    description:
      "Connect disparate systems effortlessly with our comprehensive connector library, bringing your entire tech stack together.",
    icon: Link,
    capabilities: [
      {
        name: "No-Code Connectors",
        description: "Over 36 no-code connectors to external systems",
      },
      {
        name: "API Integration",
        description: "Send data through HTTP, REST, or SOAP calls",
      },
      {
        name: "Enterprise Connections",
        description: "Swift connections to your ERP and CRM systems",
      },
      {
        name: "Custom Logic",
        description: "Direct coding for advanced, custom connections",
      },
    ],
  },
  {
    title: "Advanced Iterations",
    subtitle: "Master complex data flows",
    description:
      "Go beyond basic automation with sophisticated iteration capabilities that handle complex, multi-step processes.",
    icon: RotateCcw,
    capabilities: [
      {
        name: "Conditional Routing",
        description:
          "Control your data's path through intelligent routing logic",
      },
      {
        name: "Data Validation",
        description:
          "Iterate through records and perform comprehensive validations",
      },
      {
        name: "Concurrent Processing",
        description: "Design processes to handle multiple tasks simultaneously",
      },
      {
        name: "Error Handling",
        description: "Robust error handling and retries",
      },
    ],
  },
  {
    title: "Enterprise Governance",
    subtitle: "Maintain control and compliance",
    description:
      "Ensure transparency, accountability, and compliance with comprehensive governance features that protect your data.",
    icon: Shield,
    capabilities: [
      {
        name: "Change Tracking",
        description: "Track app changes and detect anomalies in real-time",
      },
      {
        name: "Version Control",
        description:
          "View past app instances and modify them for continuous improvement",
      },
      {
        name: "Authorization Protocols",
        description:
          "Set multiple authorization protocols to safeguard sensitive data",
      },
      {
        name: "Role-Based Access",
        description:
          "Tailor roles and permissions for user groups to maintain data integrity",
      },
    ],
  },
];

// Success metrics
const integrationMetrics = [
  { number: "40+", label: "Event Triggers" },
  { number: "36+", label: "No-Code Connectors" },
  { number: "99.9%", label: "Uptime Reliability" },
  { number: "24/7", label: "Integration Monitoring" },
];

// Popular integrations
const popularIntegrations = [
  "Salesforce",
  "Microsoft Dynamics",
  "SAP",
  "Oracle",
  "Slack",
  "Microsoft Teams",
  "Google Workspace",
  "AWS",
  "Azure",
  "Zapier",
  "HubSpot",
  "Mailchimp",
];

const Integration: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#248aff]/10 via-green-50 to-blue-50 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-[#248aff]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-green-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-10 w-16 h-16 bg-purple-400/20 rounded-full blur-lg animate-pulse delay-1500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-[#248aff]/20 to-green-500/20 rounded-full text-[#248aff] font-semibold text-sm border border-[#248aff]/30">
                🚀 Next-Generation Integration Platform
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#248aff] via-green-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Seamless Integration
              <br />
              <span className="text-gray-800">Ecosystem</span>
            </h1>

            <motion.div
              className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect, automate, and scale your business processes
            </motion.div>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Break down data silos and create a unified workflow ecosystem. Our
              powerful integration platform connects your favorite tools,
              automates complex processes, and ensures enterprise-grade
              governance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/getstarted"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#248aff] to-green-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#248aff]/50 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start Integrating</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-[#248aff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gradient-to-r from-[#248aff] to-green-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrationMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {metric.number}
                </motion.div>
                <div className="text-lg text-green-100 group-hover:text-white transition-colors duration-300">
                  {metric.label}
                </div>
                <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Advanced Background Elements */}
        <div className="absolute inset-0">
          {/* Primary gradient orbs */}
          <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#248aff]/8 via-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-tr from-green-500/6 via-blue-500/4 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>

          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#248aff]/60 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-500/60 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-blue-500/60 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-500/60 rounded-full animate-bounce delay-900"></div>

          {/* Geometric patterns */}
          <div
            className="absolute top-10 left-10 w-32 h-32 border border-[#248aff]/10 rotate-45 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div
            className="absolute bottom-10 right-10 w-24 h-24 border border-green-500/10 rotate-12 animate-spin"
            style={{ animationDuration: "15s", animationDirection: "reverse" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#8112db]/10 via-white to-green-500/10 backdrop-blur-sm rounded-full border border-white/50 shadow-xl mb-8"
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-[#248aff] font-bold text-sm tracking-wide">
                ✨ COMPREHENSIVE CAPABILITIES
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-7xl font-semibold mb-8 bg-gradient-to-r from-gray-900 via-[#248aff] to-gray-900 bg-clip-text text-transparent leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Power Your
              <br />
              <span className="bg-gradient-to-r from-[#248aff] to-green-600 bg-clip-text text-transparent">
                Integration Vision
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              From intelligent automation to enterprise governance, our platform
              adapts to your most complex workflow requirements with
              cutting-edge technology.
            </motion.p>
          </motion.div>

          {/* Modern Feature Cards Layout */}
          <div className="space-y-32">
            {integrationFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-16`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Feature Content */}
                <div className="flex-1 space-y-8">
                  <motion.div
                    className="group relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon with advanced effects */}
                    <div className="relative inline-block mb-6">
                      <motion.div
                        className="relative z-10 p-6 bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl border border-white/50 backdrop-blur-sm"
                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <feature.icon className="w-12 h-12 text-[#248aff] drop-shadow-lg" />
                      </motion.div>

                      {/* Animated rings */}
                      <div className="absolute inset-0 rounded-3xl border-2 border-[#248aff]/20 animate-ping"></div>
                      <div className="absolute inset-2 rounded-2xl border border-green-500/20 animate-pulse delay-300"></div>

                      {/* Glow effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#248aff]/20 to-green-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    <motion.h3
                      className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-[#248aff] bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {feature.title}
                    </motion.h3>

                    <motion.p
                      className="text-xl font-semibold text-[#248aff] mb-6 tracking-wide"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {feature.subtitle}
                    </motion.p>

                    <motion.p
                      className="text-lg text-gray-600 leading-relaxed max-w-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      {feature.description}
                    </motion.p>
                  </motion.div>
                </div>

                {/* Enhanced Capability Cards */}
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {feature.capabilities.map((capability, cidx) => (
                      <motion.div
                        key={cidx}
                        className="group relative bg-gradient-to-br from-white via-gray-50/50 to-white backdrop-blur-sm rounded-2xl p-8 hover:shadow-2xl hover:shadow-[#248aff]/10 transition-all duration-500 border border-gray-200/50 hover:border-[#248aff]/30 overflow-hidden"
                        initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: cidx * 0.15 + 0.3,
                          type: "spring",
                          stiffness: 100,
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.05,
                          y: -8,
                          boxShadow: "0 25px 50px rgba(129, 18, 219, 0.15)",
                        }}
                      >
                        {/* Card background gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#248aff]/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#248aff]/20 transition-colors duration-500"></div>

                        <div className="relative z-10">
                          <div className="flex items-start mb-4">
                            <motion.div
                              className="w-4 h-4 bg-gradient-to-r from-[#248aff] to-green-500 rounded-full mt-1 mr-4 flex-shrink-0 shadow-lg"
                              whileHover={{ scale: 1.5, rotate: 180 }}
                              transition={{ duration: 0.3 }}
                            ></motion.div>
                            <div className="flex-1">
                              <motion.h4
                                className="font-bold text-gray-900 mb-3 text-lg group-hover:text-[#248aff] transition-colors duration-300"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                              >
                                {capability.name}
                              </motion.h4>
                              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                {capability.description}
                              </p>
                            </div>
                          </div>

                          {/* Progress bar animation */}
                          <motion.div
                            className="w-full h-1 bg-gradient-to-r from-[#248aff]/20 to-green-500/20 rounded-full overflow-hidden"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{
                              duration: 1,
                              delay: cidx * 0.2 + 0.8,
                            }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className="h-full bg-gradient-to-r from-[#248aff] to-green-500 rounded-full"
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              transition={{
                                duration: 1.5,
                                delay: cidx * 0.2 + 1,
                              }}
                              viewport={{ once: true }}
                            ></motion.div>
                          </motion.div>
                        </div>

                        {/* Floating particles on hover */}
                        <div className="absolute top-4 right-4 w-1 h-1 bg-[#248aff]/40 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-100"></div>
                        <div className="absolute bottom-4 left-4 w-0.5 h-0.5 bg-green-500/40 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-300"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action within Features */}
        </div>
      </section>

      {/* Popular Integrations Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#248aff]/5 to-transparent animate-pulse"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#248aff]/10 rounded-full blur-2xl animate-bounce delay-1000"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-500/10 rounded-full blur-2xl animate-bounce delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 mb-6 shadow-lg"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-[#248aff] font-semibold text-sm">
                🔗 Popular Integrations
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Connect with the tools your team already loves
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our extensive connector library makes integration effortless with
              pre-built connections to your favorite platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {popularIntegrations.map((integration, idx) => (
              <motion.div
                key={idx}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center hover:shadow-2xl hover:shadow-[#248aff]/20 transition-all duration-500 border border-gray-100 hover:border-[#248aff]/30"
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(129, 18, 219, 0.25)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="mb-3 text-[#248aff] group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {integration === "Salesforce" && (
                    <Cloud className="w-8 h-8 mx-auto drop-shadow-md" />
                  )}
                  {integration === "Microsoft Dynamics" && (
                    <Square className="w-8 h-8 mx-auto drop-shadow-md" />
                  )}
                  {integration === "SAP" && (
                    <Circle className="w-8 h-8 mx-auto drop-shadow-md" />
                  )}
                  {integration === "Oracle" && (
                    <Database className="w-8 h-8 mx-auto drop-shadow-md" />
                  )}
                  {integration === "Slack" && (
                    <MessageCircle className="w-8 h-8 mx-auto drop-shadow-md" />
                  )}
                  {integration === "Microsoft Teams" && (
                    <Users className="w-8 h-8 mx-auto drop-shadow-md" />
                  )}
                  {integration === "Google Workspace" && (
                    <Mail className="w-8 h-8 mx-auto drop-shadow-md" />
                  )}
                  {integration === "AWS" && (
                    <Cloud className="w-8 h-8 mx-auto drop-shadow-md" />
                  )}
                  {integration === "Azure" && (
                    <Cloud className="w-8 h-8 mx-auto drop-shadow-md" />
                  )}
                  {integration === "Zapier" && (
                    <Workflow className="w-8 h-8 mx-auto drop-shadow-md" />
                  )}
                  {integration === "HubSpot" && (
                    <Target className="w-8 h-8 mx-auto drop-shadow-md" />
                  )}
                  {integration === "Mailchimp" && (
                    <Mail className="w-8 h-8 mx-auto drop-shadow-md" />
                  )}
                </motion.div>

                <h3 className="font-semibold text-gray-800 text-sm group-hover:text-[#248aff] transition-colors duration-300">
                  {integration}
                </h3>

                {/* Hover effect line */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-[#248aff] to-green-500 mx-auto mt-2 group-hover:w-full transition-all duration-300 rounded-full"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-6">
              And many more! Our platform supports 36+ no-code connectors and
              custom API integrations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section className="py-20 bg-gradient-to-r from-[#248aff] to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade Integration
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Built for scale, security, and compliance. Our integration
              platform grows with your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Lock className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-4">Secure by Design</h3>
              <p className="text-blue-100 leading-relaxed">
                Enterprise security protocols, encryption, and compliance
                standards built into every connection.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Zap className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-4">Lightning Fast</h3>
              <p className="text-blue-100 leading-relaxed">
                Optimized performance with real-time data sync and sub-second
                response times across all integrations.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <BarChart3 className="w-12 h-12 mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-4">Full Visibility</h3>
              <p className="text-blue-100 leading-relaxed">
                Complete monitoring and logging of all integration activities
                with detailed analytics and reporting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-[#248aff]/5 to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#248aff]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-green-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#248aff]/20 to-green-500/20 rounded-full border border-[#248aff]/30 mb-6">
              <span className="text-[#248aff] font-semibold">
                🚀 Ready to Transform Your Workflow?
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-[#248aff] to-gray-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Connect Your World?
          </motion.h2>

          <motion.p
            className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of organizations that have unified their tech stack
            with Deepkore integrations. Start building powerful workflows today.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/getstarted"
              className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#248aff] to-green-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-[#248aff]/50 transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start Building Integrations</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-[#248aff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <motion.div
                className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100"
                initial={false}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              ></motion.div>
            </motion.a>

            <motion.a
              href="/contact"
              className="group relative inline-flex items-center px-8 py-4 border-2 border-[#248aff] text-[#248aff] font-semibold rounded-full hover:bg-[#248aff] hover:text-white transition-all duration-300 overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Talk to Integration Experts</span>
              <div className="absolute inset-0 bg-[#248aff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-500 mb-4">
              Trusted by leading companies worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold text-gray-400">SAP</div>
              <div className="text-2xl font-bold text-gray-400">Oracle</div>
              <div className="text-2xl font-bold text-gray-400">Salesforce</div>
              <div className="text-2xl font-bold text-gray-400">Microsoft</div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integration;
