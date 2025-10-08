"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import {
  AlertCircle,
  Search,
  RefreshCcw,
  ClipboardList,
  Laptop,
  BookOpen,
  BarChart3,
  Clock,
  FileEdit,
  Eye,
  Link2,
  TrendingDown,
  Shield,
  Zap,
  Bot,
  PieChart,
  Link,
  Target,
  Lock,
} from "lucide-react";

const ITServiceDesk: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const workflowNodes = [
    {
      id: "incident",
      title: "Incident Management",
      shortTitle: "Incident Management",
      icon: "AlertCircle",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 15, y: 50 },
      connections: ["problem"],
      details: {
        subtitle:
          "Incident Logging, Categorization, Prioritization, Resolution Tracking",
        processes: [
          "Incident Logging",
          "Categorization & Prioritization",
          "Resolution Tracking",
          "Escalation Management",
        ],
      },
    },
    {
      id: "problem",
      title: "Problem Management",
      shortTitle: "Problem Management",
      icon: "Search",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 30, y: 50 },
      connections: ["change"],
      details: {
        subtitle:
          "Root Cause Analysis, Known Error Database, Proactive Problem Solving",
        processes: [
          "Root Cause Analysis",
          "Known Error Database",
          "Proactive Problem Solving",
          "Workaround Development",
        ],
      },
    },
    {
      id: "change",
      title: "Change Management",
      shortTitle: "Change Management",
      icon: "RefreshCcw",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 45, y: 50 },
      connections: ["service"],
      details: {
        subtitle:
          "Change Request Processing, Impact Assessment, Approval Workflows, Implementation",
        processes: [
          "Change Request Processing",
          "Impact Assessment",
          "Approval Workflows",
          "Implementation Tracking",
        ],
      },
    },
    {
      id: "service",
      title: "Service Requests",
      shortTitle: "Service Requests",
      icon: "ClipboardList",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 60, y: 50 },
      connections: ["asset"],
      details: {
        subtitle:
          "Request Fulfillment, Service Catalog, Self-Service Portal, SLA Management",
        processes: [
          "Request Fulfillment",
          "Service Catalog Management",
          "Self-Service Portal",
          "SLA Management",
        ],
      },
    },
    {
      id: "asset",
      title: "Asset Management",
      shortTitle: "Asset Management",
      icon: "Laptop",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 75, y: 50 },
      connections: ["knowledge"],
      details: {
        subtitle:
          "Asset Inventory, Lifecycle Management, Procurement, Disposal Tracking",
        processes: [
          "Asset Inventory",
          "Lifecycle Management",
          "Procurement Tracking",
          "Disposal Management",
        ],
      },
    },
    {
      id: "knowledge",
      title: "Knowledge Base",
      shortTitle: "Knowledge Base",
      icon: "BookOpen",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 85, y: 25 },
      connections: ["reporting"],
      details: {
        subtitle:
          "Article Creation, Content Management, Search & Discovery, Knowledge Sharing",
        processes: [
          "Article Creation",
          "Content Management",
          "Search & Discovery",
          "Knowledge Sharing",
        ],
      },
    },
    {
      id: "reporting",
      title: "Reporting & Analytics",
      shortTitle: "Reporting & Analytics",
      icon: "📊",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 85, y: 75 },
      connections: [],
      details: {
        subtitle:
          "Performance Metrics, SLA Reporting, Trend Analysis, Dashboard Creation",
        processes: [
          "Performance Metrics",
          "SLA Reporting",
          "Trend Analysis",
          "Dashboard Creation",
        ],
      },
    },
  ];

  const challenges = [
    {
      icon: "Clock",
      title: "Slow Incident Resolution",
      description:
        "Extended downtime and delays in resolving IT issues affecting business productivity.",
    },
    {
      icon: "FileEdit",
      title: "Manual Ticket Handling",
      description:
        "Time-consuming manual processes for logging, routing, and tracking support tickets.",
    },
    {
      icon: "Eye",
      title: "Lack of Visibility",
      description:
        "Limited visibility into IT operations and service performance across the organization.",
    },
    {
      icon: "🔗",
      title: "Disconnected Systems",
      description:
        "Siloed IT tools and systems that hinder efficient service delivery and collaboration.",
    },
    {
      icon: "TrendingDown",
      title: "Poor Analytics",
      description:
        "Difficulty in analyzing IT service trends and making data-driven improvements.",
    },
    {
      icon: "🛡️",
      title: "Compliance Challenges",
      description:
        "Struggling to maintain compliance with IT service standards and regulatory requirements.",
    },
  ];

  const solutions = [
    {
      icon: "Zap",
      title: "Automated Incident Response",
      description:
        "AI-powered incident routing and automated resolution workflows for faster response times.",
    },
    {
      icon: "Bot",
      title: "Intelligent Automation",
      description:
        "Streamline ticket handling and service requests with smart automation and workflows.",
    },
    {
      icon: "📊",
      title: "Real-Time Dashboards",
      description:
        "Get instant visibility into IT service performance and operational metrics.",
    },
    {
      icon: "🔗",
      title: "Integrated Service Platform",
      description:
        "Connect all IT service management processes into a unified, composable platform.",
    },
    {
      icon: "Target",
      title: "Predictive Analytics",
      description:
        "Leverage AI to predict incidents and optimize IT service delivery proactively.",
    },
    {
      icon: "🛡️",
      title: "Compliance Automation",
      description:
        "Automated compliance monitoring and reporting to meet IT service standards.",
    },
  ];

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "AlertCircle":
        return <AlertCircle className={className} />;
      case "Search":
        return <Search className={className} />;
      case "RefreshCcw":
        return <RefreshCcw className={className} />;
      case "ClipboardList":
        return <ClipboardList className={className} />;
      case "Laptop":
        return <Laptop className={className} />;
      case "BookOpen":
        return <BookOpen className={className} />;
      case "BarChart3":
        return <BarChart3 className={className} />;
      case "Clock":
        return <Clock className={className} />;
      case "FileEdit":
        return <FileEdit className={className} />;
      case "Eye":
        return <Eye className={className} />;
      case "Link2":
        return <Link2 className={className} />;
      case "TrendingDown":
        return <TrendingDown className={className} />;
      case "Shield":
        return <Shield className={className} />;
      case "Zap":
        return <Zap className={className} />;
      case "Bot":
        return <Bot className={className} />;
      case "PieChart":
        return <PieChart className={className} />;
      case "Link":
        return <Link className={className} />;
      case "Target":
        return <Target className={className} />;
      case "Lock":
        return <Lock className={className} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <section
        id="itservicedesk"
        className="relative py-30 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-40 lg:px-40 xl:px-40">
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
                  IT Service Desk Solutions
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
              Transform IT Service Management through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 block mt-2">
                Automation and Intelligence.
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Streamline IT operations and enhance service delivery with
              intelligent service desk applications. Empower your IT teams with
              composable platforms that adapt to your evolving needs.
            </motion.p>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/itbg.svg"
                alt="IT Service Desk Preview"
                className="max-w-250 h-auto mx-auto rounded-lg shadow-2xl"
              />
            </motion.div>

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
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg">
                Watch Demo
              </button>
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
                Common IT Service Desk Challenges
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Traditional IT service management systems face numerous
                obstacles that hinder service delivery
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
                  <div className="mb-4">
                    {getIcon(
                      challenge.icon,
                      "text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300"
                    )}
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
                Deepkore Solutions for IT Service Desk
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Transform your IT service management with our comprehensive
                low-code platform
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
                  <div className="mb-4">
                    {getIcon(
                      solution.icon,
                      "text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300"
                    )}
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
              Ready to Transform Your IT Service Management?
            </motion.h3>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join leading organizations using Deepkore to modernize their IT
              operations and enhance service delivery
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
              <a href="/getstarted">Start Your IT Service Transformation</a>
            </motion.button>

            <motion.p
              className="text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              • Setup in minutes
            </motion.p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ITServiceDesk;
