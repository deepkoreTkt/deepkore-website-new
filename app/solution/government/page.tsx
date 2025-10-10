"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  FileText,
  CheckCircle,
  Clock,
  Shield,
  Target,
  DollarSign,
  BarChart3,
  Eye,
  ArrowRight,
  PlayCircle,
  Building,
  Database,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Government: React.FC = () => {
  const keyFeatures = [
    {
      icon: Users,
      title: "Citizen Services",
      description:
        "Comprehensive digital citizen services portal with online applications, service requests, and personalized dashboards for seamless government-citizen interactions.",
      features: [
        "Online applications",
        "Service requests",
        "Personalized dashboards",
        "Multi-channel access",
      ],
      color: "blue",
    },
    {
      icon: FileText,
      title: "Document Management",
      description:
        "Secure document management system with automated workflows, digital signatures, and compliance tracking for all government documents and records.",
      features: [
        "Digital signatures",
        "Automated workflows",
        "Compliance tracking",
        "Secure storage",
      ],
      color: "green",
    },
    {
      icon: CheckCircle,
      title: "Permit Processing",
      description:
        "Streamlined permit application and approval processes with automated routing, status tracking, and integration with regulatory requirements.",
      features: [
        "Application routing",
        "Status tracking",
        "Regulatory compliance",
        "Automated approvals",
      ],
      color: "purple",
    },
    {
      icon: Database,
      title: "Public Records",
      description:
        "Centralized public records management with advanced search capabilities, data classification, and secure access controls for transparency and compliance.",
      features: [
        "Advanced search",
        "Data classification",
        "Access controls",
        "Audit trails",
      ],
      color: "orange",
    },
    {
      icon: Building,
      title: "Public Administration",
      description:
        "Integrated public administration platform for departmental coordination, resource management, and inter-agency collaboration.",
      features: [
        "Departmental coordination",
        "Resource management",
        "Inter-agency collaboration",
        "Workflow automation",
      ],
      color: "red",
    },
    {
      icon: BarChart3,
      title: "Government Analytics",
      description:
        "Advanced analytics and reporting for government performance monitoring, citizen satisfaction tracking, and data-driven policy decisions.",
      features: [
        "Performance monitoring",
        "Citizen feedback",
        "Policy analytics",
        "Public dashboards",
      ],
      color: "teal",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Faster Service Delivery",
      description:
        "Reduce service delivery time by 60% with automated processes, digital workflows, and streamlined citizen interactions.",
      metric: "60%",
      metricLabel: "Faster Services",
    },
    {
      icon: Target,
      title: "Improved Citizen Satisfaction",
      description:
        "Enhance citizen satisfaction by 45% through digital services, transparent processes, and responsive government interactions.",
      metric: "45%",
      metricLabel: "Higher Satisfaction",
    },
    {
      icon: Eye,
      title: "Enhanced Transparency",
      description:
        "Increase government transparency with open data initiatives, public dashboards, and accessible service information.",
      metric: "100%",
      metricLabel: "Transparency",
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description:
        "Reduce operational costs by 35% through process automation, digital transformation, and efficient resource utilization.",
      metric: "35%",
      metricLabel: "Cost Savings",
    },
  ];

  const challenges = [
    {
      icon: FileText,
      title: "Paper-Based Processes",
      description:
        "Outdated paper-based systems causing delays, errors, and inefficiencies in government service delivery and record management.",
      impact: "Service Delays",
    },
    {
      icon: Users,
      title: "Citizen Engagement",
      description:
        "Limited channels for citizen interaction and feedback, resulting in poor communication and service quality perception.",
      impact: "Public Trust",
    },
    {
      icon: Shield,
      title: "Data Security & Privacy",
      description:
        "Concerns about citizen data protection, privacy regulations compliance, and secure handling of sensitive government information.",
      impact: "Security Risks",
    },
    {
      icon: BarChart3,
      title: "Inter-Agency Coordination",
      description:
        "Siloed departments and lack of integrated systems preventing efficient collaboration and unified service delivery.",
      impact: "Operational Efficiency",
    },
    {
      icon: Clock,
      title: "Regulatory Compliance",
      description:
        "Complex regulatory requirements and changing compliance standards making it difficult to maintain consistent governance.",
      impact: "Compliance Burden",
    },
    {
      icon: Database,
      title: "Digital Transformation",
      description:
        "Legacy systems and resistance to change hindering the adoption of modern digital government solutions and services.",
      impact: "Innovation Gap",
    },
  ];

  const useCases = [
    {
      title: "Municipal Services",
      description:
        "Digital municipal services including permits, licenses, public records access, and citizen service requests for local government efficiency.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      benefits: [
        "Digital permitting",
        "Online service requests",
        "Public records access",
        "Citizen portals",
      ],
    },
    {
      title: "State Government",
      description:
        "Comprehensive state-level digital government platform for citizen services, inter-agency coordination, and statewide program management.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      benefits: [
        "Statewide services",
        "Inter-agency coordination",
        "Program management",
        "Citizen engagement",
      ],
    },
    {
      title: "Federal Agencies",
      description:
        "Secure federal digital platforms for citizen services, regulatory compliance, and cross-agency collaboration with advanced security features.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
      benefits: [
        "Regulatory compliance",
        "Secure communications",
        "Cross-agency collaboration",
        "National service delivery",
      ],
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes pulse-border {
          0%,
          100% {
            border-color: rgba(59, 130, 246, 0.3);
          }
          50% {
            border-color: rgba(59, 130, 246, 0.6);
          }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        .pulse-border {
          animation: pulse-border 2s ease-in-out infinite;
        }
      `}</style>

      <div className="relative min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 container mx-auto px-40">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side Content */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
                    <span className="text-blue-600 font-semibold text-sm tracking-wide uppercase">
                      Government & Public Sector
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Smarter Digital
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 block mt-2">
                    Government Services
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Deliver smarter digital government services, improve citizen
                  engagement, and streamline public administration processes.
                  Transform government operations with modern digital solutions.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <motion.a
                    href="/getstarted"
                    className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg inline-flex items-center justify-center"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  <motion.a
                    href="/getstarted"
                    className="group px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg inline-flex items-center justify-center"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <PlayCircle className="mr-2 w-5 h-5" />
                    Watch Demo
                  </motion.a>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-6 text-sm text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Free 14-day trial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>No credit card required</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side Visual */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative">
                  {/* Main Dashboard Image */}
                  <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-gray-200/50">
                    <img
                      src="/images/government.jpeg"
                      alt="Government Services Dashboard"
                      className="w-full h-80 md:h-96 object-cover rounded-2xl"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkdvdmVybm1lbnQgU2VydmljZXM8L3RleHQ+PC9zdmc+";
                      }}
                    />

                    {/* Floating Stats Cards */}
                    <motion.div
                      className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200 float-animation"
                      style={{ animationDelay: "0s" }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div>
                          <div className="text-sm font-semibold text-gray-800">
                            Citizens Served
                          </div>
                          <div className="text-lg font-bold text-green-600">
                            50K+
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute -bottom-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200 float-animation"
                      style={{ animationDelay: "2s" }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <div>
                          <div className="text-sm font-semibold text-gray-800">
                            Service Efficiency
                          </div>
                          <div className="text-lg font-bold text-blue-600">
                            94.2%
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg border border-gray-200 pulse-border">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-6 h-6 text-orange-500" />
                        <div>
                          <div className="text-sm font-semibold text-gray-800">
                            Processing Time
                          </div>
                          <div className="text-lg font-bold text-orange-600">
                            -65%
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Background Decorative Elements */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl blur-3xl transform rotate-6 -z-10"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-40">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete Government Digital Suite
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to modernize government operations, from
                citizen services to public administration and regulatory
                compliance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  {/* Background Color Accent */}
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${
                      feature.color === "blue"
                        ? "from-blue-500 to-blue-600"
                        : feature.color === "green"
                        ? "from-green-500 to-green-600"
                        : feature.color === "purple"
                        ? "from-purple-500 to-purple-600"
                        : feature.color === "orange"
                        ? "from-orange-500 to-orange-600"
                        : feature.color === "red"
                        ? "from-red-500 to-red-600"
                        : "from-teal-500 to-teal-600"
                    }`}
                  ></div>

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      feature.color === "blue"
                        ? "bg-blue-100 text-blue-600"
                        : feature.color === "green"
                        ? "bg-green-100 text-green-600"
                        : feature.color === "purple"
                        ? "bg-purple-100 text-purple-600"
                        : feature.color === "orange"
                        ? "bg-orange-100 text-orange-600"
                        : feature.color === "red"
                        ? "bg-red-100 text-red-600"
                        : "bg-teal-100 text-teal-600"
                    }`}
                  >
                    <feature.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle
                          className={`w-4 h-4 ${
                            feature.color === "blue"
                              ? "text-blue-500"
                              : feature.color === "green"
                              ? "text-green-500"
                              : feature.color === "purple"
                              ? "text-purple-500"
                              : feature.color === "orange"
                              ? "text-orange-500"
                              : feature.color === "red"
                              ? "text-red-500"
                              : "text-teal-500"
                          }`}
                        />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Arrow */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight
                      className={`w-5 h-5 ${
                        feature.color === "blue"
                          ? "text-blue-500"
                          : feature.color === "green"
                          ? "text-green-500"
                          : feature.color === "purple"
                          ? "text-purple-500"
                          : feature.color === "orange"
                          ? "text-orange-500"
                          : feature.color === "red"
                          ? "text-red-500"
                          : "text-teal-500"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-500 rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-500 rounded-full"></div>
            <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-green-500 rounded-full"></div>
          </div>

          <div className="container mx-auto px-40 relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Measurable Results You Can Expect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our government clients achieve significant improvements in
                service delivery, citizen satisfaction, and operational
                efficiency through digital transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center overflow-hidden border border-gray-100/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.02 }}
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-indigo-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping delay-100"></div>

                  {/* Icon with Glow Effect */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-blue-200/50">
                    <benefit.icon className="w-8 h-8" />
                    <div className="absolute inset-0 bg-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </div>

                  {/* Animated Metric */}
                  <motion.div
                    className="relative mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2 group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                      {benefit.metric}
                    </div>
                    <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                      {benefit.metricLabel}
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>

                  {/* Progress Bar Animation */}
                  <motion.div
                    className="mt-6 w-full bg-gray-200 rounded-full h-2 overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className={`h-full rounded-full ${
                        benefit.title === "Faster Service Delivery"
                          ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                          : benefit.title === "Improved Citizen Satisfaction"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600"
                          : benefit.title === "Enhanced Transparency"
                          ? "bg-gradient-to-r from-purple-500 to-purple-600"
                          : "bg-gradient-to-r from-teal-500 to-teal-600"
                      }`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1 + 0.7,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                    ></motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.05),transparent_50%)]"></div>
          </div>

          <div className="container mx-auto px-40 relative z-10">
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
                  Government Challenges We Overcome
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Modern government operations face complex challenges.
                  Here&apos;s how we transform these obstacles into
                  opportunities for better citizen services.
                </motion.p>
              </div>

              {/* Circular Timeline Layout */}
              <div className="relative max-w-5xl mx-auto">
                {/* Central Hub */}
                <div className="flex justify-center mb-16">
                  <motion.div
                    className="group relative"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative w-40 h-40">
                      {/* Central Circle */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 rounded-full shadow-xl border-4 border-white"></div>
                      <div className="absolute inset-2 bg-white rounded-full"></div>

                      {/* Content */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <Building className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 text-center mb-1 group-hover:text-blue-800 transition-colors duration-300">
                          Government Core
                        </h3>
                        <p className="text-xs text-gray-600 text-center leading-tight">
                          Citizen Services
                        </p>
                      </div>

                      {/* Pulsing Ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-30 animate-ping"></div>
                    </div>
                  </motion.div>
                </div>

                {/* Surrounding Challenge Nodes */}
                <div className="relative w-full h-96 flex items-center justify-center">
                  {challenges.map((challenge, index) => {
                    const angle = (index * 360) / challenges.length - 90; // Start from top
                    const radius = 200;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;

                    return (
                      <motion.div
                        key={index}
                        className="absolute group cursor-pointer"
                        style={{
                          left: `calc(50% + ${x}px)`,
                          top: `calc(50% + ${y}px)`,
                          transform: "translate(-50%, -50%)",
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, z: 50 }}
                      >
                        <div className="relative w-36 h-36">
                          {/* Challenge Node */}
                          <div className="absolute inset-0 bg-white rounded-2xl shadow-lg border-2 border-gray-100/50 group-hover:border-blue-200 transition-colors duration-300"></div>

                          {/* Impact Badge */}

                          {/* Content */}
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                              <challenge.icon className="w-5 h-5 text-red-500" />
                            </div>
                            <h4 className="text-xs font-bold text-gray-900 text-center leading-tight mb-1 group-hover:text-gray-800 transition-colors duration-300">
                              {challenge.title.split(" ").slice(0, 2).join(" ")}
                            </h4>
                            <div className="flex items-center space-x-1 text-xs text-blue-600 font-semibold">
                              <CheckCircle className="w-3 h-3" />
                              <span>Solved</span>
                            </div>
                          </div>

                          {/* Connecting Line to Center */}
                          <div
                            className="absolute top-1/2 left-1/2 w-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                            style={{
                              height: `${radius - 80}px`,
                              transform: `translate(-50%, -100%) rotate(${
                                angle + 180
                              }deg)`,
                              transformOrigin: "bottom center",
                            }}
                          ></div>
                        </div>

                        {/* Tooltip on hover */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20 shadow-lg">
                          {challenge.description}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom Stats */}
                <motion.div
                  className="text-center mt-50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-500 mb-2">
                        60%
                      </div>
                      <div className="text-sm text-gray-500">
                        Faster Services
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-500 mb-2">
                        45%
                      </div>
                      <div className="text-sm text-gray-500">
                        Higher Satisfaction
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-500 mb-2">
                        35%
                      </div>
                      <div className="text-sm text-gray-500">Cost Savings</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-40">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Real-World Government Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how different levels of government leverage our platform for
                digital transformation and improved citizen services
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkdvdmVybm1lbnQgU2VydmljZXM8L3RleHQ+PC9zdmc+";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {useCase.description}
                    </p>

                    {/* Benefits List */}
                    <div className="space-y-2">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <div className="mt-6 flex items-center space-x-2 text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container mx-auto px-40">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Government Services?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Join government agencies worldwide using Deepkore to modernize
                operations, improve citizen engagement, and deliver efficient
                public services.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <motion.a
                  href="/getstarted"
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.a>
                <motion.a
                  href="/contact"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.a>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-80">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Government;
