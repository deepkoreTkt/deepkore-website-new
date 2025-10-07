"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  FileCheck,
  UserPlus,
  AlertTriangle,
  CreditCard,
  BarChart3,
  Clock,
  TrendingUp,
  CheckCircle,
  Users,
  Eye,
  ArrowRight,
  PlayCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Banking: React.FC = () => {
  const keyFeatures = [
    {
      icon: Shield,
      title: "Secure Transactions",
      description:
        "Advanced security protocols for all banking transactions with encryption, multi-factor authentication, and fraud detection to ensure safe and reliable financial operations.",
      features: [
        "Transaction encryption",
        "Multi-factor authentication",
        "Fraud detection",
        "Secure payment processing",
      ],
      color: "blue",
    },
    {
      icon: FileCheck,
      title: "Compliance Automation",
      description:
        "Automated compliance processes with regulatory reporting, audit trails, and risk assessment tools to ensure adherence to financial regulations and standards.",
      features: [
        "Regulatory reporting",
        "Audit automation",
        "Risk assessment",
        "Compliance monitoring",
      ],
      color: "green",
    },
    {
      icon: UserPlus,
      title: "Customer Onboarding",
      description:
        "Streamlined customer onboarding processes with digital verification, automated KYC, and personalized account setup for frictionless customer experiences.",
      features: [
        "Digital verification",
        "Automated KYC",
        "Account setup",
        "Document management",
      ],
      color: "purple",
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description:
        "Comprehensive risk assessment and management tools with real-time monitoring, predictive analytics, and automated alerts for proactive risk mitigation.",
      features: [
        "Risk assessment",
        "Real-time monitoring",
        "Predictive analytics",
        "Automated alerts",
      ],
      color: "orange",
    },
    {
      icon: CreditCard,
      title: "Digital Banking Solutions",
      description:
        "Complete digital banking platform with mobile banking, online services, and integrated financial management tools for modern banking experiences.",
      features: [
        "Mobile banking",
        "Online services",
        "Digital wallets",
        "Payment integration",
      ],
      color: "red",
    },
    {
      icon: BarChart3,
      title: "Financial Analytics",
      description:
        "Advanced financial analytics and reporting with real-time insights, performance dashboards, and predictive modeling for strategic decision-making.",
      features: [
        "Performance dashboards",
        "Financial reporting",
        "Predictive modeling",
        "Market analysis",
      ],
      color: "teal",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Security",
      description:
        "Reduce security incidents by 80% with advanced encryption, fraud detection, and automated compliance monitoring.",
      metric: "80%",
      metricLabel: "Security Improvement",
    },
    {
      icon: Clock,
      title: "Faster Processing",
      description:
        "Accelerate transaction processing and customer onboarding by 60% with automated workflows and digital processes.",
      metric: "60%",
      metricLabel: "Processing Speed",
    },
    {
      icon: Eye,
      title: "Complete Compliance",
      description:
        "Achieve 100% regulatory compliance with automated reporting, audit trails, and real-time monitoring.",
      metric: "100%",
      metricLabel: "Compliance Rate",
    },
    {
      icon: TrendingUp,
      title: "Customer Satisfaction",
      description:
        "Improve customer satisfaction by 45% with frictionless digital experiences and personalized banking services.",
      metric: "45%",
      metricLabel: "Satisfaction Increase",
    },
  ];

  const challenges = [
    {
      icon: Shield,
      title: "Security Threats",
      description:
        "Increasing cyber threats and fraud attempts require advanced security measures and constant monitoring.",
      impact: "Financial Risk",
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      description:
        "Complex and evolving regulatory requirements demand automated compliance processes and reporting.",
      impact: "Operational Burden",
    },
    {
      icon: Clock,
      title: "Manual Processes",
      description:
        "Time-consuming manual processes for customer onboarding, transaction processing, and documentation.",
      impact: "Efficiency Loss",
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description:
        "Difficulty in real-time risk assessment and proactive management of financial and operational risks.",
      impact: "Strategic Risk",
    },
    {
      icon: Users,
      title: "Customer Experience",
      description:
        "Fragmented digital experiences and complex processes leading to customer dissatisfaction and churn.",
      impact: "Customer Retention",
    },
    {
      icon: BarChart3,
      title: "Financial Analytics",
      description:
        "Limited real-time insights and predictive analytics for strategic decision-making and market adaptation.",
      impact: "Competitive Disadvantage",
    },
  ];

  const useCases = [
    {
      title: "Retail Banking",
      description:
        "Complete retail banking solutions for customer accounts, transactions, loans, and digital banking services.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      benefits: [
        "Digital account opening",
        "Mobile banking",
        "Loan processing",
        "Transaction security",
      ],
    },
    {
      title: "Investment Banking",
      description:
        "Advanced investment platforms with portfolio management, trading systems, and wealth management tools.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
      benefits: [
        "Portfolio management",
        "Trading platforms",
        "Risk analytics",
        "Wealth management",
      ],
    },
    {
      title: "Fintech Solutions",
      description:
        "Innovative financial technology solutions including payment processing, lending platforms, and digital wallets.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=300&fit=crop",
      benefits: [
        "Payment processing",
        "Digital lending",
        "Fintech integration",
        "API management",
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
                      Banking & Financial Services
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Secure Digital
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 block mt-2">
                    Banking Solutions
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Build secure digital banking solutions, streamline compliance
                  processes, and deliver frictionless customer experiences with
                  automated workflows. Transform your financial operations with
                  our comprehensive banking platform.
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
                      src="/images/banking.jpg"
                      alt="Banking Dashboard"
                      className="w-full h-80 md:h-96 object-cover rounded-2xl"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJhbmtpbmcgRGFzaGJvYXJkPC90ZXh0Pjwvc3ZnPg==";
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
                            Secure Transactions
                          </div>
                          <div className="text-lg font-bold text-green-600">
                            2.1M
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
                            96.8%
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg border border-gray-200 pulse-border">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-6 h-6 text-orange-500" />
                        <div>
                          <div className="text-sm font-semibold text-gray-800">
                            Security Score
                          </div>
                          <div className="text-lg font-bold text-orange-600">
                            99.9%
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
                Complete Banking & Financial Services Suite
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to build secure, compliant, and
                customer-centric financial services, from transaction processing
                to risk management and digital banking solutions
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
                Our banking clients achieve significant improvements in
                security, efficiency, and customer satisfaction through
                comprehensive digital transformation
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
                Common Banking Challenges We Solve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your financial operations by addressing the key
                challenges that hinder security, compliance, and customer
                experience in modern banking
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
                Real-World Banking Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how different types of financial institutions leverage our
                platform for secure, compliant, and customer-centric banking
                solutions
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
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJhbmtpbmc8L3RleHQ+PC9zdmc+";
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
                Ready to Transform Your Banking Operations?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Join thousands of financial institutions using Deepkore to build
                secure digital banking solutions, streamline compliance, and
                deliver exceptional customer experiences.
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

export default Banking;
