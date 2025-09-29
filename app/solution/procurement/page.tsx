"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Package,
  Users,
  FileText,
  ClipboardList,
  BarChart3,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Target,
  DollarSign,
  Globe,
  CheckCircle,
  ShoppingCart,
  Truck,
  Calculator,
  AlertTriangle,
  Smartphone,
  Eye,
  Settings,
  ArrowRight,
  PlayCircle,
  MessageSquare,
  Building,
  Receipt,
  Warehouse,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Procurement: React.FC = () => {
  const keyFeatures = [
    {
      icon: Package,
      title: "Material Master",
      description:
        "Comprehensive material catalog with detailed specifications, pricing, and inventory tracking for all procurement items.",
      features: [
        "Item cataloging",
        "Pricing management",
        "Inventory tracking",
        "Specification details",
      ],
      color: "blue",
    },
    {
      icon: Building,
      title: "Vendor Master",
      description:
        "Complete vendor database with supplier profiles, performance ratings, contracts, and relationship management.",
      features: [
        "Supplier profiles",
        "Performance ratings",
        "Contract management",
        "Relationship tracking",
      ],
      color: "green",
    },
    {
      icon: ClipboardList,
      title: "Purchase Indent",
      description:
        "Streamlined purchase requisition process with approval workflows, budget checking, and automated routing.",
      features: [
        "Requisition creation",
        "Approval workflows",
        "Budget validation",
        "Auto-routing",
      ],
      color: "purple",
    },
    {
      icon: Receipt,
      title: "Purchase Order",
      description:
        "Automated purchase order generation, tracking, and fulfillment with vendor communication and delivery monitoring.",
      features: [
        "PO generation",
        "Order tracking",
        "Vendor communication",
        "Delivery monitoring",
      ],
      color: "orange",
    },
    {
      icon: Warehouse,
      title: "Inventory Management",
      description:
        "Real-time inventory tracking, demand forecasting, and automated reordering to optimize stock levels.",
      features: [
        "Stock monitoring",
        "Demand forecasting",
        "Auto-reordering",
        "Stock optimization",
      ],
      color: "red",
    },
    {
      icon: Truck,
      title: "Supply Chain Tracking",
      description:
        "End-to-end supply chain visibility with shipment tracking, delivery schedules, and supplier performance monitoring.",
      features: [
        "Shipment tracking",
        "Delivery schedules",
        "Performance monitoring",
        "Quality control",
      ],
      color: "teal",
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description:
        "Reduce procurement costs by 20-30% through better vendor negotiations, bulk purchasing, and spend analysis.",
      metric: "25%",
      metricLabel: "Cost Reduction",
    },
    {
      icon: Clock,
      title: "Faster Procurement Cycle",
      description:
        "Accelerate procurement processes by 40% with automated workflows, approvals, and streamlined vendor interactions.",
      metric: "40%",
      metricLabel: "Faster Processing",
    },
    {
      icon: Eye,
      title: "Complete Visibility",
      description:
        "Gain 100% visibility into procurement activities, supplier performance, and supply chain operations.",
      metric: "100%",
      metricLabel: "Supply Chain Visibility",
    },
    {
      icon: TrendingUp,
      title: "Supplier Performance",
      description:
        "Improve supplier performance by 35% through systematic evaluation, feedback, and relationship management.",
      metric: "35%",
      metricLabel: "Performance Improvement",
    },
  ];

  const challenges = [
    {
      icon: FileText,
      title: "Manual Processes",
      description:
        "Time-consuming manual procurement processes, paperwork, and approvals that slow down operations and increase errors.",
      impact: "Operational Inefficiency",
    },
    {
      icon: Users,
      title: "Vendor Management",
      description:
        "Difficulty managing multiple vendors, tracking performance, and maintaining consistent supplier relationships.",
      impact: "Supplier Relations",
    },
    {
      icon: Calculator,
      title: "Cost Control",
      description:
        "Lack of visibility into procurement spending, budget tracking, and cost optimization opportunities.",
      impact: "Financial Management",
    },
    {
      icon: AlertTriangle,
      title: "Supply Chain Disruptions",
      description:
        "Vulnerability to supply chain disruptions, delays, and quality issues without proper monitoring and contingency planning.",
      impact: "Risk Management",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Limited ability to analyze procurement performance, identify trends, and make data-driven decisions.",
      impact: "Strategic Planning",
    },
    {
      icon: Shield,
      title: "Compliance & Audit",
      description:
        "Challenges in maintaining procurement compliance, audit trails, and regulatory requirements across the supply chain.",
      impact: "Compliance Risk",
    },
  ];

  const useCases = [
    {
      title: "Manufacturing Procurement",
      description:
        "Streamlined procurement for manufacturing operations with material planning, vendor management, and just-in-time delivery.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      benefits: [
        "Material planning",
        "JIT procurement",
        "Quality assurance",
        "Cost optimization",
      ],
    },
    {
      title: "Retail Procurement",
      description:
        "Efficient retail procurement with automated ordering, inventory management, and supplier performance tracking.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      benefits: [
        "Automated ordering",
        "Inventory optimization",
        "Supplier evaluation",
        "Seasonal planning",
      ],
    },
    {
      title: "Service Industry Procurement",
      description:
        "Specialized procurement for service organizations with vendor selection, contract management, and service level tracking.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      benefits: [
        "Vendor selection",
        "Contract management",
        "Service tracking",
        "Performance monitoring",
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
                      Procurement & Supply Chain
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  End-to-End Procurement
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 block mt-2">
                    Management
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  End-to-end procurement management from vendor selection to
                  purchase order fulfillment and supplier performance tracking.
                  Streamline your supply chain operations with our comprehensive
                  procurement platform.
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
                    href="#demo"
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
                      src="/images/procurement.png"
                      alt="Procurement Management Dashboard"
                      className="w-full h-80 md:h-96 object-cover rounded-2xl"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2N1cmVtZW50IERhc2hib2FyZDwvdGV4dD48L3N2Zz4=";
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
                            Active Vendors
                          </div>
                          <div className="text-lg font-bold text-green-600">
                            1,247
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
                            On-Time Delivery
                          </div>
                          <div className="text-lg font-bold text-blue-600">
                            94.2%
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg border border-gray-200 pulse-border">
                      <div className="flex items-center space-x-3">
                        <DollarSign className="w-6 h-6 text-orange-500" />
                        <div>
                          <div className="text-sm font-semibold text-gray-800">
                            Cost Savings
                          </div>
                          <div className="text-lg font-bold text-orange-600">
                            $2.4M
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
                Complete Procurement Management Suite
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to manage the entire procurement lifecycle,
                from material planning to supplier performance tracking
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
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-40">
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
                Our procurement clients achieve significant improvements in cost
                savings, efficiency, and supplier performance through
                comprehensive automation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                >
                  {/* Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8" />
                  </div>

                  {/* Metric */}
                  <div className="relative mb-4">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {benefit.metric}
                    </div>
                    <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                      {benefit.metricLabel}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
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
                Common Procurement Challenges We Solve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your procurement operations by addressing the key pain
                points that hinder cost efficiency and supply chain performance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  {/* Impact Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                      {challenge.impact}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-xl mb-6">
                    <challenge.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {challenge.description}
                  </p>

                  {/* Solution Indicator */}
                  <div className="mt-6 flex items-center space-x-2 text-sm text-blue-600 font-semibold">
                    <CheckCircle className="w-4 h-4" />
                    <span>Solved by Deepkore</span>
                  </div>
                </motion.div>
              ))}
            </div>
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
                Real-World Procurement Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how different types of organizations leverage our
                procurement platform for efficient supply chain management and
                cost optimization
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
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2N1cmVtZW50PC90ZXh0Pjwvc3ZnPg==";
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
                Ready to Transform Your Procurement Operations?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Join thousands of organizations using Deepkore to streamline
                procurement processes, optimize costs, and enhance supplier
                relationships.
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

export default Procurement;
