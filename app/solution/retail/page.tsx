"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Package,
  BarChart3,
  Users,
  CreditCard,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  DollarSign,
  Globe,
  CheckCircle,
  Store,
  Truck,
  Calculator,
  AlertTriangle,
  Target,
  Smartphone,
  Eye,
  Settings,
  ArrowRight,
  PlayCircle,
  MessageSquare,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Retail: React.FC = () => {
  const keyFeatures = [
    {
      icon: ShoppingCart,
      title: "Point of Sale (POS)",
      description:
        "Complete POS system with transaction processing, receipt generation, and sales tracking for seamless checkout experiences.",
      features: [
        "Multi-payment processing",
        "Receipt generation",
        "Sales analytics",
        "Customer loyalty programs",
      ],
      color: "blue",
    },
    {
      icon: Package,
      title: "Inventory Management",
      description:
        "Real-time inventory tracking, automated reordering, stock alerts, and comprehensive warehouse management.",
      features: [
        "Stock level monitoring",
        "Automated reordering",
        "Barcode scanning",
        "Multi-location tracking",
      ],
      color: "green",
    },
    {
      icon: Truck,
      title: "Order Management",
      description:
        "Streamline order processing from placement to fulfillment with automated workflows and status tracking.",
      features: [
        "Order processing",
        "Fulfillment tracking",
        "Shipping integration",
        "Return management",
      ],
      color: "purple",
    },
    {
      icon: Users,
      title: "Customer Management",
      description:
        "Build customer profiles, track purchase history, manage loyalty programs, and personalize marketing campaigns.",
      features: [
        "Customer profiles",
        "Purchase history",
        "Loyalty programs",
        "Personalized marketing",
      ],
      color: "orange",
    },
    {
      icon: Calculator,
      title: "Financial Management",
      description:
        "Handle sales reporting, expense tracking, profit analysis, and comprehensive financial oversight.",
      features: [
        "Sales reporting",
        "Expense tracking",
        "Profit analysis",
        "Tax management",
      ],
      color: "red",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Advanced analytics for sales performance, inventory optimization, customer insights, and strategic decision making.",
      features: [
        "Sales performance",
        "Inventory analytics",
        "Customer insights",
        "Trend forecasting",
      ],
      color: "teal",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Sales Revenue",
      description:
        "Boost sales through better inventory management, personalized marketing, and improved customer experiences.",
      metric: "25%",
      metricLabel: "Revenue Growth",
    },
    {
      icon: Clock,
      title: "Reduce Operational Time",
      description:
        "Automate routine tasks and streamline processes to focus more on customer service and business growth.",
      metric: "40%",
      metricLabel: "Time Savings",
    },
    {
      icon: Eye,
      title: "Complete Inventory Visibility",
      description:
        "Real-time inventory tracking across all locations with automated alerts and accurate stock levels.",
      metric: "100%",
      metricLabel: "Inventory Accuracy",
    },
    {
      icon: DollarSign,
      title: "Optimize Profit Margins",
      description:
        "Reduce stockouts, minimize overstocking, and improve pricing strategies for better profitability.",
      metric: "30%",
      metricLabel: "Margin Improvement",
    },
  ];

  const challenges = [
    {
      icon: Package,
      title: "Inventory Management",
      description:
        "Difficulty tracking stock levels, managing multiple locations, and preventing stockouts or overstocking.",
      impact: "Stock Inefficiency",
    },
    {
      icon: Users,
      title: "Customer Data Management",
      description:
        "Scattered customer information across different systems making it hard to provide personalized experiences.",
      impact: "Customer Experience",
    },
    {
      icon: Calculator,
      title: "Financial Tracking",
      description:
        "Complex financial reporting, expense management, and profit analysis across multiple sales channels.",
      impact: "Financial Oversight",
    },
    {
      icon: BarChart3,
      title: "Sales Analytics",
      description:
        "Lack of real-time sales data and insights to make informed business decisions and optimize operations.",
      impact: "Decision Making",
    },
    {
      icon: Truck,
      title: "Order Fulfillment",
      description:
        "Inefficient order processing, shipping delays, and return management affecting customer satisfaction.",
      impact: "Operational Efficiency",
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Concerns about customer data privacy and transaction security in retail operations.",
      impact: "Compliance Risk",
    },
  ];

  const useCases = [
    {
      title: "Brick-and-Mortar Stores",
      description:
        "Complete retail management for physical stores with POS integration, inventory control, and customer analytics.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      benefits: [
        "POS system integration",
        "Real-time inventory",
        "Customer analytics",
        "Staff management",
      ],
    },
    {
      title: "E-commerce Platforms",
      description:
        "Online retail management with order processing, shipping integration, and multi-channel sales tracking.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      benefits: [
        "Order automation",
        "Shipping integration",
        "Multi-channel sales",
        "Customer support",
      ],
    },
    {
      title: "Multi-location Retail Chains",
      description:
        "Centralized management for retail chains with location-wise analytics, inventory distribution, and performance tracking.",
      image:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=300&fit=crop",
      benefits: [
        "Centralized control",
        "Location analytics",
        "Inventory distribution",
        "Performance tracking",
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

          <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 xl:px-40">
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
                      Smart Retail Solutions
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Transform Your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 block mt-2">
                    Retail Operations
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Complete retail management platform for modern businesses.
                  Streamline sales, manage inventory, track customers, and boost
                  profitability with our comprehensive retail management system.
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
                      src="/images/retail.jpg"
                      alt="Retail Management Dashboard"
                      className="w-full h-80 md:h-96 object-cover rounded-2xl"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRldGFpbCBNYW5hZ2VtZW50IERhc2hib2FyZDwvdGV4dD48L3N2Zz4=";
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
                            Daily Sales
                          </div>
                          <div className="text-lg font-bold text-green-600">
                            $12,450
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
                            Customer Satisfaction
                          </div>
                          <div className="text-lg font-bold text-blue-600">
                            94.8%
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg border border-gray-200 pulse-border">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-6 h-6 text-orange-500" />
                        <div>
                          <div className="text-sm font-semibold text-gray-800">
                            Revenue Growth
                          </div>
                          <div className="text-lg font-bold text-orange-600">
                            +32%
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
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-40">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete Retail Management Suite
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to run successful retail operations, from
                point of sale to customer relationship management
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
        <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl"
              animate={{
                y: [0, 20, 0],
                x: [0, -15, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute top-1/2 left-1/4 w-12 h-12 bg-purple-500/10 rounded-full blur-xl"
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
          </div>

          <div className="container mx-auto px-40 relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-700 text-sm font-semibold">
                  Proven Results
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Measurable Results You Can
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Expect
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Our retail clients achieve significant improvements in sales,
                efficiency, and customer satisfaction with measurable ROI
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 text-center overflow-hidden border border-white/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, scale: 1.02 }}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                  {/* Top Accent Border */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-3xl"></div>

                  {/* Icon with Enhanced Styling */}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mb-8 shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 group-hover:scale-110">
                    <benefit.icon className="w-10 h-10 text-white" />
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  </div>

                  {/* Metric with Animation */}
                  <div className="relative mb-6">
                    <motion.div
                      className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2 relative z-10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {benefit.metric}
                    </motion.div>
                    <div className="text-sm font-bold text-gray-600 uppercase tracking-wider relative z-10">
                      {benefit.metricLabel}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{
                          width: benefit.metric.includes("%")
                            ? benefit.metric.replace("%", "") + "%"
                            : "80%",
                        }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-800 transition-colors duration-300 relative z-10">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 relative z-10">
                    {benefit.description}
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-2xl"></div>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Stats Section */}
            <motion.div
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  500+
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  Retail Clients
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  $2.1B
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  Revenue Generated
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  98.5%
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  Client Satisfaction
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-600 font-semibold">
                  Support Available
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-40 relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold">
                  Critical Issues
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Retail Challenges
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  We Solve
                </span>
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Transform your retail operations by addressing the key pain
                points that hinder growth and customer satisfaction with our
                comprehensive solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-blue-100 hover:border-blue-200 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Impact Badge */}
                  <div className="absolute top-6 right-6">
                    <motion.span
                      className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      {challenge.impact}
                    </motion.span>
                  </div>

                  {/* Icon with Glow */}
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-8 shadow-2xl group-hover:shadow-blue-500/25 transition-shadow duration-500">
                    <challenge.icon className="w-8 h-8 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 group-hover:text-gray-700 transition-colors duration-300">
                    {challenge.description}
                  </p>

                  {/* Enhanced Solution Indicator */}
                  <motion.div
                    className="relative mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/50 group-hover:border-green-300/70 transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-emerald-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Success Badge */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <motion.div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        ✓ SOLVED
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="relative flex items-center justify-center space-x-3 pt-2">
                      <motion.div
                        className="flex items-center space-x-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Animated Check Icon */}
                        <motion.div
                          className="relative"
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          {/* Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full blur-md opacity-50 -z-10"></div>
                        </motion.div>

                        {/* Text with Gradient */}
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                            Solved by
                          </span>
                          <span className="text-lg font-bold text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                            Deepkore
                          </span>
                        </div>
                      </motion.div>

                      {/* Decorative Elements */}
                      <motion.div
                        className="flex space-x-1"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-2 h-2 bg-green-400 rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0,
                          }}
                        ></motion.div>
                        <motion.div
                          className="w-2 h-2 bg-emerald-400 rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.3,
                          }}
                        ></motion.div>
                        <motion.div
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.6,
                          }}
                        ></motion.div>
                      </motion.div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                  </motion.div>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-40">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Real-World Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how different types of retail businesses leverage our
                platform for operational excellence and growth
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
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlJldGFpbDwvdGV4dD48L3N2Zz4=";
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
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-40">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Retail Business?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Join thousands of retailers using Deepkore to streamline
                operations, increase sales, and deliver exceptional customer
                experiences.
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

export default Retail;
