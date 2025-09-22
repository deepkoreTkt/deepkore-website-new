"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

// Integration features data
const integrationFeatures = [
  {
    title: "Intelligent Triggers",
    subtitle: "Automate workflows with smart event detection",
    description:
      "Set up dynamic triggers that respond to real-time events, enabling conditional processes that adapt to your business needs.",
    icon: "⚡",
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
    icon: "🔗",
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
    icon: "🔄",
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
    ],
  },
  {
    title: "Enterprise Governance",
    subtitle: "Maintain control and compliance",
    description:
      "Ensure transparency, accountability, and compliance with comprehensive governance features that protect your data.",
    icon: "🛡️",
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#8112db]/10 via-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8112db] via-green-600 to-blue-600 bg-clip-text text-transparent">
              Seamless Integration Ecosystem
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
              Connect, automate, and scale your business processes
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Break down data silos and create a unified workflow ecosystem. Our
              powerful integration platform connects your favorite tools,
              automates complex processes, and ensures enterprise-grade
              governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/getstarted"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8112db] to-green-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Integrating
              </motion.a>
              <motion.a
                href="#connectors"
                className="inline-flex items-center px-8 py-4 border-2 border-[#8112db] text-[#8112db] font-semibold rounded-full hover:bg-[#8112db] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Connectors
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gradient-to-r from-[#8112db] to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrationMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {metric.number}
                </div>
                <div className="text-lg text-green-100">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Comprehensive Integration Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From simple triggers to complex enterprise workflows, our
              integration platform adapts to your needs
            </p>
          </motion.div>

          <div className="space-y-20">
            {integrationFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex-1">
                  <div className="flex items-center mb-6">
                    <div className="text-6xl mr-4">{feature.icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-[#8112db] font-semibold">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {feature.capabilities.map((capability, cidx) => (
                      <motion.div
                        key={cidx}
                        className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: cidx * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, y: -2 }}
                      >
                        <div className="flex items-start">
                          <div className="w-3 h-3 bg-[#8112db] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">
                              {capability.name}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {capability.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Integrations Section */}

      {/* Enterprise Features Section */}
      <section className="py-20 bg-gradient-to-r from-[#8112db] to-blue-600 text-white">
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
              <div className="text-5xl mb-4">🔒</div>
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
              <div className="text-5xl mb-4">⚡</div>
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
              <div className="text-5xl mb-4">📊</div>
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
      <section className="py-20 bg-gradient-to-br from-green-50 to-[#8112db]/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Connect Your World?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of organizations that have unified their tech stack
            with DeepKore integrations
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="/getstarted"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8112db] to-green-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Start Building Integrations
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-[#8112db] text-[#8112db] font-semibold rounded-full hover:bg-[#8112db] hover:text-white transition-all duration-300"
            >
              Talk to Integration Experts
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Integration;

