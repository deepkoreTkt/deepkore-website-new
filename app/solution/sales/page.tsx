"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  BarChart3,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  DollarSign,
  Globe,
  CheckCircle,
  UserCheck,
  FileText,
  Calculator,
  AlertTriangle,
  Smartphone,
  Eye,
  Settings,
  ArrowRight,
  PlayCircle,
  MessageSquare,
  Phone,
  Mail,
  PieChart,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sales: React.FC = () => {
  const keyFeatures = [
    {
      icon: Users,
      title: "Contact Management",
      description:
        "Organize and manage all customer and prospect data in a unified database with advanced segmentation and profiling capabilities.",
      features: [
        "Customer database",
        "Contact segmentation",
        "Lead qualification",
        "Relationship tracking",
      ],
      color: "blue",
    },
    {
      icon: Target,
      title: "Lead Tracking & Conversion",
      description:
        "Track leads from initial contact to closed deal with automated workflows, follow-ups, and conversion optimization.",
      features: [
        "Lead scoring",
        "Pipeline management",
        "Automated nurturing",
        "Conversion analytics",
      ],
      color: "green",
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Monitor sales team performance with real-time dashboards, KPIs, and predictive analytics for data-driven decisions.",
      features: [
        "Sales dashboards",
        "Performance metrics",
        "Predictive analytics",
        "Goal tracking",
      ],
      color: "purple",
    },
    {
      icon: MessageSquare,
      title: "Communication Automation",
      description:
        "Automate email campaigns, follow-up sequences, and customer communications to maintain consistent engagement.",
      features: [
        "Email automation",
        "Follow-up sequences",
        "Personalized messaging",
        "Campaign tracking",
      ],
      color: "orange",
    },
    {
      icon: Calculator,
      title: "Sales Forecasting",
      description:
        "Predict future sales performance with AI-powered forecasting, trend analysis, and revenue projections.",
      features: [
        "Revenue forecasting",
        "Trend analysis",
        "Quota management",
        "Deal probability",
      ],
      color: "red",
    },
    {
      icon: Phone,
      title: "Call Center Integration",
      description:
        "Integrate with telephony systems for call logging, recording, and automated call routing to sales representatives.",
      features: [
        "Call logging",
        "Call routing",
        "Recording integration",
        "Performance tracking",
      ],
      color: "teal",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Sales Revenue",
      description:
        "Boost sales performance with automated processes and data-driven insights that help close more deals faster.",
      metric: "35%",
      metricLabel: "Revenue Growth",
      color: "emerald",
    },
    {
      icon: Clock,
      title: "Accelerate Sales Cycles",
      description:
        "Reduce time-to-close with automated follow-ups, lead nurturing, and streamlined sales processes.",
      metric: "40%",
      metricLabel: "Faster Closing",
      color: "blue",
    },
    {
      icon: Eye,
      title: "Complete Sales Visibility",
      description:
        "Get real-time insights into sales pipeline, team performance, and customer interactions across all channels.",
      metric: "100%",
      metricLabel: "Pipeline Visibility",
      color: "purple",
    },
    {
      icon: DollarSign,
      title: "Improve ROI",
      description:
        "Maximize return on sales investments through better lead quality, conversion rates, and resource allocation.",
      metric: "25%",
      metricLabel: "Higher ROI",
      color: "teal",
    },
  ];

  const challenges = [
    {
      icon: FileText,
      title: "Manual Data Entry",
      description:
        "Time-consuming manual entry of customer data, lead information, and sales activities across multiple systems.",
      impact: "Productivity Loss",
    },
    {
      icon: Users,
      title: "Lead Management",
      description:
        "Difficulty tracking and nurturing leads through the sales funnel without proper automation and follow-up.",
      impact: "Missed Opportunities",
    },
    {
      icon: MessageSquare,
      title: "Inconsistent Communication",
      description:
        "Lack of standardized communication processes leading to missed follow-ups and poor customer experience.",
      impact: "Customer Satisfaction",
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description:
        "Limited visibility into sales team performance, pipeline health, and forecasting accuracy.",
      impact: "Strategic Planning",
    },
    {
      icon: Calculator,
      title: "Sales Forecasting",
      description:
        "Inaccurate revenue predictions due to manual processes and lack of real-time data analysis.",
      impact: "Financial Planning",
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Risk of data breaches and compliance issues when customer information is scattered across platforms.",
      impact: "Compliance Risk",
    },
  ];

  const useCases = [
    {
      title: "B2B Sales Teams",
      description:
        "Enterprise sales organizations managing complex deals with multiple stakeholders and long sales cycles.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      benefits: [
        "Complex deal management",
        "Stakeholder tracking",
        "Proposal automation",
        "Revenue forecasting",
      ],
    },
    {
      title: "B2C Retail Sales",
      description:
        "Consumer-facing businesses optimizing customer interactions, upselling, and repeat purchase cycles.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      benefits: [
        "Customer segmentation",
        "Personalized marketing",
        "Loyalty programs",
        "Cross-selling automation",
      ],
    },
    {
      title: "Inside Sales Teams",
      description:
        "Remote and phone-based sales teams managing high-volume leads with automated calling and email sequences.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      benefits: [
        "Call automation",
        "Lead distribution",
        "Performance monitoring",
        "Script management",
      ],
    },
  ];
  const getChallengeColor = (index: number) => {
    const colors = [
      "from-blue-500 to-blue-600",
      "from-green-500 to-green-600",
      "from-purple-500 to-purple-600",
      "from-red-500 to-red-600",
      "from-orange-500 to-orange-600",
      "from-teal-500 to-teal-600",
    ];
    return colors[index % colors.length];
  };

  const getChallengeBgColor = (index: number) => {
    const colors = [
      "from-blue-100 to-blue-200",
      "from-green-100 to-green-200",
      "from-purple-100 to-purple-200",
      "from-red-100 to-red-200",
      "from-orange-100 to-orange-200",
      "from-teal-100 to-teal-200",
    ];
    return colors[index % colors.length];
  };

  const getChallengeIconColor = (index: number) => {
    const colors = [
      "text-blue-600",
      "text-green-600",
      "text-purple-600",
      "text-red-600",
      "text-orange-600",
      "text-teal-600",
    ];
    return colors[index % colors.length];
  };

  const getChallengeDotColor = (index: number) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-red-500",
      "bg-orange-500",
      "bg-teal-500",
    ];
    return colors[index % colors.length];
  };

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
          {/* Enhanced Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
            {/* Additional Floating Shapes */}
            <motion.div
              className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full"
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="absolute bottom-32 right-32 w-6 h-6 bg-indigo-400 rounded-full"
              animate={{ y: [0, 20, 0], opacity: [0.3, 0.8, 0.3] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            ></motion.div>
            <motion.div
              className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full"
              animate={{ x: [0, 15, 0], opacity: [0.4, 0.9, 0.4] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            ></motion.div>
          </div>

          <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-40">
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
                      Sales Automation Platform
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Close More Deals
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 block mt-2">
                    Faster & Smarter
                  </span>
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Automate your sales processes from lead generation to deal
                  closure. Track performance, nurture prospects, and boost
                  conversions with our comprehensive sales automation platform.
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
                      src="/images/sales.png"
                      alt="Sales Automation Dashboard"
                      className="w-full h-80 md:h-96 object-cover rounded-2xl"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVkdWNhdGlvbiBEYXNoYm9hcmQ8L3RleHQ+PC9zdmc+";
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
                            Closed Deals
                          </div>
                          <div className="text-lg font-bold text-green-600">
                            247
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
                            Conversion Rate
                          </div>
                          <div className="text-lg font-bold text-blue-600">
                            34.5%
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg border border-gray-200 pulse-border">
                      <div className="flex items-center space-x-3">
                        <DollarSign className="w-6 h-6 text-orange-500" />
                        <div>
                          <div className="text-sm font-semibold text-gray-800">
                            Revenue Growth
                          </div>
                          <div className="text-lg font-bold text-orange-600">
                            +42%
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
          <div className="container mx-auto px-4 md:px-8 lg:px-40">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete Sales Automation Suite
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to automate and optimize your sales
                processes, from lead generation to customer retention
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

          <div className="container mx-auto px-4 md:px-8 lg:px-40 relative z-10">
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
                Our sales clients achieve significant improvements in revenue,
                efficiency, and customer satisfaction through automation
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
                        benefit.color === "emerald"
                          ? "bg-gradient-to-r from-emerald-500 to-emerald-600"
                          : benefit.color === "blue"
                          ? "bg-gradient-to-r from-blue-500 to-blue-600"
                          : benefit.color === "purple"
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
        <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 lg:px-40 relative z-10">
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
                  Overcome Sales Challenges
                </motion.h2>
                <motion.p
                  className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Traditional sales systems struggle with modern demands.
                  Here&apos;s what we&apos;re solving:
                </motion.p>
              </div>

              {/* Responsive Layout: Grid on mobile, Hexagonal on desktop */}
              <div className="relative max-w-6xl mx-auto">
                {/* Mobile: Simple Grid Layout */}
                <div className="block md:hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -4 }}
                      >
                        <div className="flex items-start space-x-4">
                          <div
                            className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${getChallengeBgColor(
                              index
                            )} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <challenge.icon
                              className={`w-6 h-6 ${getChallengeIconColor(
                                index
                              )}`}
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                              {challenge.title}
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                              {challenge.description}
                            </p>
                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                              Impact: {challenge.impact}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Desktop: Hexagonal Grid Layout */}
                <div className="hidden md:block">
                  {/* Central hexagon */}
                  <div className="flex justify-center mb-8">
                    <motion.div
                      className="group relative"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative w-48 h-48">
                        {/* Hexagon shape */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-700 shadow-2xl"></div>
                        <div className="absolute inset-2 bg-white rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <Settings className="w-8 h-8 text-indigo-600" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 text-center mb-2 group-hover:text-indigo-800 transition-colors duration-300">
                            Core Issues
                          </h3>
                          <p className="text-sm text-gray-600 text-center leading-tight">
                            Sales bottlenecks we eliminate
                          </p>
                        </div>

                        {/* Animated border */}
                        <div className="absolute inset-0 rounded-lg transform rotate-45">
                          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-lg opacity-0 group-hover:opacity-30 blur-xl animate-pulse"></div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Surrounding hexagons in a circular pattern */}
                  <div className="relative w-full h-96 flex items-center justify-center">
                    {challenges.map((challenge, index) => {
                      const angle = index * 60 - 90; // Start from top
                      const radius = 180;
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
                          transition={{
                            duration: 0.6,
                            delay: index * 0.1 + 0.5,
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1, z: 50 }}
                        >
                          <div className="relative w-32 h-32">
                            {/* Hexagon background */}
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${getChallengeColor(
                                index
                              )} rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-xl`}
                            ></div>
                            <div className="absolute inset-1 bg-white rounded-lg transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                              <div
                                className={`w-10 h-10 bg-gradient-to-br ${getChallengeBgColor(
                                  index
                                )} rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-md`}
                              >
                                <challenge.icon
                                  className={`w-5 h-5 ${getChallengeIconColor(
                                    index
                                  )}`}
                                />
                              </div>
                              <h4 className="text-xs font-bold text-gray-900 text-center leading-tight mb-1 group-hover:text-gray-800 transition-colors duration-300">
                                {challenge.title
                                  .split(" ")
                                  .slice(0, 2)
                                  .join(" ")}
                              </h4>
                              <div
                                className={`w-2 h-2 rounded-full ${getChallengeDotColor(
                                  index
                                )} animate-pulse`}
                              ></div>
                            </div>

                            {/* Connecting line to center */}
                            <div
                              className="absolute top-1/2 left-1/2 w-px bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                              style={{
                                height: `${radius - 60}px`,
                                transform: `translate(-50%, -100%) rotate(${
                                  angle + 180
                                }deg)`,
                                transformOrigin: "bottom center",
                              }}
                            ></div>
                          </div>

                          {/* Tooltip on hover */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                            {challenge.title}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Bottom stats */}
                  <motion.div
                    className="text-center mt-40"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-indigo-600 mb-2">
                          35%
                        </div>
                        <div className="text-sm text-gray-600">
                          Revenue Growth
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                          40%
                        </div>
                        <div className="text-sm text-gray-600">
                          Faster Closing
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-pink-600 mb-2">
                          100%
                        </div>
                        <div className="text-sm text-gray-600">
                          Pipeline Visibility
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 relative">
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
            <motion.div
              className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl"
              animate={{
                y: [0, 20, 0],
                x: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
          </div>

          <div className="container mx-auto px-4 md:px-8 lg:px-40 relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-full text-blue-600 text-sm font-semibold">
                  Real-World Applications
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Sales
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Applications
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover how different types of sales organizations leverage our
                platform for enhanced performance, streamlined operations, and
                improved outcomes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -12, rotateY: 5 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVkdWNhdGlvbjwvdGV4dD48L3N2Zz4=";
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
        <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-bounce delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 md:px-8 lg:px-40 relative z-10">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to Transform Your Sales Operations?
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Join thousands of sales teams using Deepkore to automate
                processes, close more deals, and accelerate revenue growth.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="/getstarted"
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
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
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm opacity-80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>14-day free trial</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>No setup fees</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Cancel anytime</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Sales;
