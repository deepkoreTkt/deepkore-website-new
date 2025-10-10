"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  FileText,
  Users,
  BarChart3,
  ShoppingCart,
  Settings,
  Building,
  Package,
  Factory,
  Zap,
  ArrowRight,
} from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const CustomerSupport = () => {
  const ratings = [4.7, 4.9, 4.4, 4.8, 4.5, 4.6, 4.2, 4.3, 5.0, 4.7];

  const templates = [
    {
      title: "Customer Support Center",
      subtitle: "Exceptional Customer Service",
      description:
        "Deliver outstanding customer support with intelligent ticketing, knowledge base, and automated resolution.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      features: [
        "Smart Ticketing",
        "Knowledge Base",
        "Automated Responses",
        "Customer Analytics",
        "SLA Management",
        "Feedback Collection",
      ],
      image: "/dataform.png",
      category: "Customer Support",
      href: "/templates/customersupport",
    },
    {
      title: "Help Desk Ticketing System",
      subtitle: "Efficient Issue Resolution",
      description:
        "Manage customer inquiries and support tickets with automated routing, priority assignment, and comprehensive tracking.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      features: [
        "Ticket Creation",
        "Automated Routing",
        "Priority Management",
        "Status Tracking",
        "Escalation Rules",
        "Resolution Metrics",
      ],
      image: "/process.png",
      category: "Customer Support",
    },
    {
      title: "Knowledge Base Management",
      subtitle: "Self-Service Support Hub",
      description:
        "Create and maintain a comprehensive knowledge base with search functionality, categorization, and user feedback integration.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: [
        "Article Management",
        "Search Functionality",
        "Categorization",
        "User Feedback",
        "Version Control",
        "Analytics",
      ],
      image: "/classic02.png",
      category: "Customer Support",
    },
    {
      title: "Customer Feedback System",
      subtitle: "Continuous Improvement Insights",
      description:
        "Collect, analyze, and act on customer feedback with surveys, sentiment analysis, and automated follow-up processes.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      features: [
        "Survey Creation",
        "Sentiment Analysis",
        "Feedback Routing",
        "Trend Analysis",
        "Action Planning",
        "Reporting",
      ],
      image: "/analytics1.png",
      category: "Customer Support",
    },
    {
      title: "Live Chat Support",
      subtitle: "Real-Time Customer Engagement",
      description:
        "Provide instant customer support through live chat with intelligent routing, canned responses, and chat history tracking.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      features: [
        "Real-Time Chat",
        "Intelligent Routing",
        "Canned Responses",
        "Chat History",
        "File Sharing",
        "Multi-Channel",
      ],
      image: "/dataform.png",
      category: "Customer Support",
    },
    {
      title: "Customer Portal",
      subtitle: "Self-Service Customer Hub",
      description:
        "Empower customers with a comprehensive portal for account management, order tracking, and self-service support options.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      features: [
        "Account Management",
        "Order Tracking",
        "Self-Service Support",
        "Document Access",
        "Communication History",
        "Profile Updates",
      ],
      image: "/classic04.png",
      category: "Customer Support",
    },
    {
      title: "Issue Tracking and Resolution",
      subtitle: "Comprehensive Problem Management",
      description:
        "Track customer issues from identification to resolution with root cause analysis, preventive measures, and trend reporting.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      features: [
        "Issue Logging",
        "Root Cause Analysis",
        "Resolution Tracking",
        "Preventive Actions",
        "Trend Reporting",
        "Impact Assessment",
      ],
      image: "/report1.png",
      category: "Customer Support",
    },
    {
      title: "Customer Analytics Dashboard",
      subtitle: "Data-Driven Support Insights",
      description:
        "Gain actionable insights from customer data with comprehensive analytics, performance metrics, and predictive analytics.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      features: [
        "Performance Metrics",
        "Customer Segmentation",
        "Predictive Analytics",
        "Satisfaction Scores",
        "Channel Analysis",
        "Custom Reports",
      ],
      image: "/analytics1.png",
      category: "Customer Support",
    },
    {
      title: "SLA Management",
      subtitle: "Service Level Agreement Tracking",
      description:
        "Monitor and ensure SLA compliance with automated tracking, escalation alerts, and performance reporting.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      features: [
        "SLA Configuration",
        "Compliance Monitoring",
        "Escalation Alerts",
        "Performance Reporting",
        "Contract Management",
        "Penalty Tracking",
      ],
      image: "/process.png",
      category: "Customer Support",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#f2f5f5]">
      <Header />
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-200/20 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 xl:px-40 py-24">
        {/* Hero Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className={`${inter.className} text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight text-center px-4 md:px-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Deliver Exceptional Customer Support with
            <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 bg-clip-text text-transparent">
              {" "}
              Enterprise-Ready Templates
            </span>
          </motion.h1>

          <motion.p
            className={`${inter.className} text-base md:text-lg text-gray-600 mb-8 text-center mx-auto max-w-3xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Provide outstanding customer service with intelligent automation,
            comprehensive knowledge management, and data-driven insights.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <a href="/getstarted">
              <button className="px-6 md:px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {templates.map((template, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-lg border border-gray-200 hover:border-blue-200 transition-all duration-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <div className="p-6">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-lg">
                    <div className="text-blue-600">{template.icon}</div>
                  </div>
                  <span className="text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                    {template.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {template.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {template.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {template.features.slice(0, 3).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Implementation Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {Math.floor(Math.random() * 500) + 100}+ implementations
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="w-4 h-4 mr-1" />
                    {ratings[index]} rating
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a href="/getstarted">
                    <button className="flex-1 py-2 px-4 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                      Preview
                    </button>
                  </a>
                  <a href="/contact">
                    <button className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1">
                      Deploy
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="bg-white rounded-lg p-4 md:p-6 lg:p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ready to Transform Your Customer Support Operations?
                </h3>
                <p className="text-gray-600">
                  Schedule a consultation with our enterprise solutions team to
                  discuss your specific customer support requirements.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/getstarted">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto">
                    Request Demo
                  </button>
                </a>
                <a href="/contact">
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto">
                    Contact Sales
                  </button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default CustomerSupport;
