"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Clock,
  Shield,
  Target,
  DollarSign,
  CheckCircle,
  FileText,
  AlertTriangle,
  Eye,
  ArrowRight,
  PlayCircle,
  Activity,
  Database,
  LineChart,
  Table,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Analytics: React.FC = () => {
  // Helper function to get color hex values
  const getColorHex = (color: string) => {
    switch (color) {
      case "blue":
        return "#3b82f6";
      case "green":
        return "#10b981";
      case "purple":
        return "#8b5cf6";
      case "orange":
        return "#f97316";
      case "red":
        return "#ef4444";
      case "teal":
        return "#14b8a6";
      default:
        return "#10b981";
    }
  };

  // Circular Progress Component
  const CircularProgress = ({
    percentage,
    size = 80,
    strokeWidth = 8,
    color = "#10b981",
  }: {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
  }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 2, ease: "easeInOut" }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold" style={{ color }}>
            {percentage}%
          </span>
        </div>
      </div>
    );
  };
  const keyFeatures = [
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description:
        "Advanced AI-powered analytics with interactive dashboards, predictive insights, and comprehensive reporting tools for data-driven decision making.",
      features: [
        "Interactive dashboards",
        "Predictive analytics",
        "Real-time insights",
        "Custom visualizations",
      ],
      color: "blue",
    },
    {
      icon: PieChart,
      title: "Charts and Graphs",
      description:
        "Create stunning visualizations with various chart types including bar charts, pie charts, line graphs, and advanced statistical plots.",
      features: [
        "Multiple chart types",
        "Interactive elements",
        "Custom styling",
        "Export capabilities",
      ],
      color: "green",
    },
    {
      icon: FileText,
      title: "List Reporting",
      description:
        "Generate detailed list reports with filtering, sorting, and grouping capabilities for comprehensive data analysis and presentation.",
      features: [
        "Advanced filtering",
        "Dynamic sorting",
        "Grouping options",
        "Export to multiple formats",
      ],
      color: "purple",
    },
    {
      icon: Table,
      title: "Pivot Table",
      description:
        "Powerful pivot table functionality for data summarization, cross-tabulation, and multi-dimensional analysis of complex datasets.",
      features: [
        "Drag-and-drop interface",
        "Calculated fields",
        "Multi-level grouping",
        "Conditional formatting",
      ],
      color: "orange",
    },
    {
      icon: LineChart,
      title: "Trend Analysis",
      description:
        "Advanced trend analysis with forecasting models, seasonal decomposition, and anomaly detection for predictive insights.",
      features: [
        "Trend forecasting",
        "Seasonal analysis",
        "Anomaly detection",
        "Correlation analysis",
      ],
      color: "red",
    },
    {
      icon: Database,
      title: "Data Integration",
      description:
        "Seamlessly integrate data from multiple sources including databases, APIs, spreadsheets, and cloud services for unified analytics.",
      features: [
        "Multi-source integration",
        "Real-time data sync",
        "Data transformation",
        "API connectivity",
      ],
      color: "teal",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Faster Decision Making",
      description:
        "Reduce decision-making time by 50% with real-time insights and automated reporting that provide instant access to critical business metrics.",
      metric: "50",
      metricLabel: "Faster Decisions",
      color: "green",
    },
    {
      icon: Target,
      title: "Improved Accuracy",
      description:
        "Enhance forecast accuracy and reduce errors with AI-powered predictive analytics and automated data validation processes.",
      metric: "75",
      metricLabel: "Accuracy Improvement",
      color: "blue",
    },
    {
      icon: Eye,
      title: "Complete Data Visibility",
      description:
        "Gain 360-degree visibility into your business operations with comprehensive dashboards and cross-functional data integration.",
      metric: "360",
      metricLabel: "Data Visibility",
      color: "purple",
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description:
        "Identify cost-saving opportunities and optimize resource allocation with detailed analytics and ROI tracking across all business functions.",
      metric: "25",
      metricLabel: "Cost Savings",
      color: "orange",
    },
  ];

  const challenges = [
    {
      icon: Database,
      title: "Data Silos",
      description:
        "Fragmented data across multiple systems and departments prevents comprehensive analysis and informed decision-making.",
      impact: "Limited Insights",
      color: "orange",
    },
    {
      icon: Clock,
      title: "Manual Reporting",
      description:
        "Time-consuming manual report generation and data compilation delays access to critical business intelligence.",
      impact: "Delayed Decisions",
      color: "blue",
    },
    {
      icon: AlertTriangle,
      title: "Data Quality Issues",
      description:
        "Inconsistent data formats, duplicates, and inaccuracies compromise the reliability of analytics and reporting.",
      impact: "Poor Accuracy",
      color: "red",
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Concerns about data privacy and security when consolidating sensitive business information from multiple sources.",
      impact: "Compliance Risk",
      color: "purple",
    },
    {
      icon: Activity,
      title: "Real-time Analytics",
      description:
        "Lack of real-time data processing capabilities hinders timely response to changing business conditions.",
      impact: "Reactive Approach",
      color: "green",
    },
    {
      icon: BarChart3,
      title: "Complex Visualizations",
      description:
        "Difficulty creating meaningful visualizations from complex datasets without specialized technical skills.",
      impact: "User Adoption",
      color: "teal",
    },
  ];

  const chartTypes = [
    {
      icon: PieChart,
      title: "Pie Chart",
      description:
        "Perfect for showing proportions and percentages of a whole dataset",
      useCase: "Market share analysis, budget allocation",
      color: "blue",
    },
    {
      icon: PieChart,
      title: "Donut Chart",
      description:
        "Similar to pie charts but with a hollow center for additional information",
      useCase: "Category breakdowns with center metrics",
      color: "green",
    },
    {
      icon: TrendingUp,
      title: "Radar Chart",
      description:
        "Displays multivariate data in a two-dimensional chart with multiple axes",
      useCase: "Performance comparisons, skill assessments",
      color: "purple",
    },
    {
      icon: TrendingUp,
      title: "Funnel Chart",
      description: "Visualizes a linear process with stages that narrow down",
      useCase: "Sales funnels, conversion rates, user journeys",
      color: "orange",
    },
    {
      icon: BarChart3,
      title: "Bar Chart",
      description: "Compares different categories using rectangular bars",
      useCase: "Category comparisons, frequency distributions",
      color: "red",
    },
    {
      icon: BarChart3,
      title: "Column Chart",
      description: "Vertical bar charts for comparing values across categories",
      useCase: "Time series data, category comparisons",
      color: "teal",
    },
    {
      icon: BarChart3,
      title: "Stacked Horizontal Bar Chart",
      description:
        "Shows part-to-whole relationships horizontally with stacked segments",
      useCase: "Component breakdowns, progress tracking",
      color: "blue",
    },
    {
      icon: BarChart3,
      title: "Stacked Vertical Bar Chart",
      description:
        "Vertical bars with stacked segments showing part-to-whole relationships",
      useCase: "Time-based component analysis",
      color: "green",
    },
    {
      icon: BarChart3,
      title: "100% Stacked Horizontal Chart",
      description: "Horizontal bars showing 100% distribution of components",
      useCase: "Percentage breakdowns, composition analysis",
      color: "purple",
    },
    {
      icon: BarChart3,
      title: "100% Stacked Vertical Chart",
      description: "Vertical bars showing 100% distribution of components",
      useCase: "Percentage comparisons over time",
      color: "orange",
    },
    {
      icon: TrendingUp,
      title: "Box Plot",
      description:
        "Statistical chart showing distribution through quartiles and outliers",
      useCase: "Statistical analysis, data distribution",
      color: "red",
    },
    {
      icon: BarChart3,
      title: "Pareto Chart",
      description:
        "Combines bar and line charts to show frequency and cumulative percentage",
      useCase: "80/20 rule analysis, priority identification",
      color: "teal",
    },
    {
      icon: TrendingUp,
      title: "Bump Chart",
      description: "Shows ranking changes over time with connected lines",
      useCase: "Ranking trends, position changes",
      color: "blue",
    },
    {
      icon: LineChart,
      title: "Line Chart",
      description: "Connects data points with lines to show trends over time",
      useCase: "Time series analysis, trend identification",
      color: "green",
    },
    {
      icon: BarChart3,
      title: "Combo Chart",
      description: "Combines different chart types in one visualization",
      useCase: "Multiple data relationships, complex comparisons",
      color: "purple",
    },
    {
      icon: TrendingUp,
      title: "Stacked Area Chart",
      description: "Area charts with stacked layers showing cumulative values",
      useCase: "Cumulative trends, component contributions",
      color: "orange",
    },
    {
      icon: TrendingUp,
      title: "Area Chart",
      description: "Filled line charts showing quantity beneath the line",
      useCase: "Volume trends, cumulative data",
      color: "red",
    },
    {
      icon: TrendingUp,
      title: "Scatter Chart",
      description: "Plots individual data points on x-y coordinates",
      useCase: "Correlation analysis, distribution patterns",
      color: "teal",
    },
  ];

  const useCases = [
    {
      title: "Business Intelligence",
      description:
        "Enterprise-wide business intelligence solutions for executives and managers requiring comprehensive performance monitoring and strategic insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      benefits: [
        "Executive dashboards",
        "KPI monitoring",
        "Strategic reporting",
        "Performance analytics",
      ],
    },
    {
      title: "Financial Analytics",
      description:
        "Advanced financial reporting and analysis tools for CFOs and finance teams with budgeting, forecasting, and variance analysis capabilities.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      benefits: [
        "Financial forecasting",
        "Budget analysis",
        "Variance reporting",
        "Cash flow analytics",
      ],
    },
    {
      title: "Operational Analytics",
      description:
        "Real-time operational insights for process optimization, quality control, and efficiency improvements across all business functions.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      benefits: [
        "Process monitoring",
        "Quality analytics",
        "Efficiency tracking",
        "Performance optimization",
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
            {/* Additional Floating Elements */}
            <motion.div
              className="absolute top-10 right-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="absolute bottom-10 left-10 w-16 h-16 bg-purple-400/20 rounded-full blur-xl"
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            ></motion.div>
            <motion.div
              className="absolute top-1/3 left-10 w-12 h-12 bg-orange-400/20 rounded-full blur-xl"
              animate={{ x: [0, 30, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            ></motion.div>
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
                      AI Analytics & Reporting
                    </span>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Advanced AI-Powered
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 block mt-2">
                    Analytics Platform
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Advanced AI-powered analytics with interactive dashboards,
                  predictive insights, and comprehensive reporting tools.
                  Transform your data into actionable intelligence with our
                  intelligent analytics platform.
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
                    <Image
                      src="/images/classic05.png"
                      alt="Analytics Dashboard"
                      width={800}
                      height={600}
                      className="w-full h-80 md:h-96 object-cover rounded-2xl"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFuYWx5dGljcyBEYXNoYm9hcmQ8L3RleHQ+PC9zdmc+";
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
                            Data Sources
                          </div>
                          <div className="text-lg font-bold text-green-600">
                            25+
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
                            Insights Generated
                          </div>
                          <div className="text-lg font-bold text-blue-600">
                            1.2M
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-xl p-4 shadow-lg border border-gray-200 pulse-border">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-6 h-6 text-orange-500" />
                        <div>
                          <div className="text-sm font-semibold text-gray-800">
                            Prediction Accuracy
                          </div>
                          <div className="text-lg font-bold text-orange-600">
                            94.5%
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
                Complete Analytics & Reporting Suite
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to transform raw data into actionable
                insights, from basic reporting to advanced AI-powered predictive
                analytics
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100/50 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Asymmetrical Background Shape */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-green-100/20 to-blue-100/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 delay-100"></div>

                  {/* Color Accent Triangle */}
                  <div
                    className={`absolute top-6 right-6 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] opacity-80 group-hover:opacity-100 transition-opacity duration-300 ${
                      feature.color === "blue"
                        ? "border-l-transparent border-r-transparent border-b-blue-400"
                        : feature.color === "green"
                        ? "border-l-transparent border-r-transparent border-b-green-400"
                        : feature.color === "purple"
                        ? "border-l-transparent border-r-transparent border-b-purple-400"
                        : feature.color === "orange"
                        ? "border-l-transparent border-r-transparent border-b-orange-400"
                        : feature.color === "red"
                        ? "border-l-transparent border-r-transparent border-b-red-400"
                        : "border-l-transparent border-r-transparent border-b-teal-400"
                    }`}
                  ></div>

                  {/* Icon with Floating Animation */}
                  <motion.div
                    className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-300 ${
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
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8" />
                    {/* Pulsing Dot */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-current rounded-full opacity-60 animate-ping"></div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Features List with Staggered Animation */}
                  <div className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: itemIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            feature.color === "blue"
                              ? "bg-blue-100"
                              : feature.color === "green"
                              ? "bg-green-100"
                              : feature.color === "purple"
                              ? "bg-purple-100"
                              : feature.color === "orange"
                              ? "bg-orange-100"
                              : feature.color === "red"
                              ? "bg-red-100"
                              : "bg-teal-100"
                          }`}
                        >
                          <CheckCircle
                            className={`w-3 h-3 ${
                              feature.color === "blue"
                                ? "text-blue-600"
                                : feature.color === "green"
                                ? "text-green-600"
                                : feature.color === "purple"
                                ? "text-purple-600"
                                : feature.color === "orange"
                                ? "text-orange-600"
                                : feature.color === "red"
                                ? "text-red-600"
                                : "text-teal-600"
                            }`}
                          />
                        </div>
                        <span className="text-sm text-gray-600">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <div className="w-8 h-8 border-2 border-current rounded-tl-2xl"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Chart Library Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-40">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Chart Library
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from 18+ powerful chart types to visualize your data
                exactly how you need it. From simple bar charts to complex
                statistical plots, create stunning visualizations that bring
                your data to life.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chartTypes.map((chart, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 overflow-hidden"
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Diagonal Color Accent */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 transform rotate-45 translate-x-10 -translate-y-10 opacity-20 group-hover:opacity-30 transition-opacity duration-300 ${
                      chart.color === "blue"
                        ? "bg-blue-500"
                        : chart.color === "green"
                        ? "bg-green-500"
                        : chart.color === "purple"
                        ? "bg-purple-500"
                        : chart.color === "orange"
                        ? "bg-orange-500"
                        : chart.color === "red"
                        ? "bg-red-500"
                        : "bg-teal-500"
                    }`}
                  ></div>

                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-current opacity-20 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-current opacity-30 rounded-full animate-pulse"></div>

                  {/* Content Container */}
                  <div className="relative z-10">
                    {/* Icon with Glow Effect */}
                    <div className="relative mb-4">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl group-hover:scale-110 transition-all duration-300 ${
                          chart.color === "blue"
                            ? "bg-blue-100 text-blue-600 shadow-blue-200"
                            : chart.color === "green"
                            ? "bg-green-100 text-green-600 shadow-green-200"
                            : chart.color === "purple"
                            ? "bg-purple-100 text-purple-600 shadow-purple-200"
                            : chart.color === "orange"
                            ? "bg-orange-100 text-orange-600 shadow-orange-200"
                            : chart.color === "red"
                            ? "bg-red-100 text-red-600 shadow-red-200"
                            : "bg-teal-100 text-teal-600 shadow-teal-200"
                        } shadow-lg`}
                      >
                        <chart.icon className="w-7 h-7" />
                      </div>
                      {/* Glow Ring */}
                      <div
                        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
                          chart.color === "blue"
                            ? "bg-blue-400"
                            : chart.color === "green"
                            ? "bg-green-400"
                            : chart.color === "purple"
                            ? "bg-purple-400"
                            : chart.color === "orange"
                            ? "bg-orange-400"
                            : chart.color === "red"
                            ? "bg-red-400"
                            : "bg-teal-400"
                        } blur-xl`}
                      ></div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors">
                      {chart.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {chart.description}
                    </p>

                    {/* Use Case Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 group-hover:bg-gray-200 transition-colors duration-300">
                      <span className="truncate">{chart.useCase}</span>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-current opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-40">
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
                Our analytics clients achieve significant improvements in
                decision-making speed, accuracy, and business performance
                through advanced AI-powered insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center overflow-hidden border border-gray-100/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -15,
                    scale: 1.08,
                    rotateY: 10,
                    transformPerspective: 1000,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Radial Background */}
                  <div className="absolute inset-0 bg-gradient-radial from-transparent via-white/50 to-white/80 rounded-3xl"></div>

                  {/* Orbiting Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3 bg-current rounded-full opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  ></motion.div>
                  <motion.div
                    className="absolute bottom-4 left-4 w-2 h-2 bg-current rounded-full opacity-30"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1,
                    }}
                  ></motion.div>

                  {/* Icon with Magnetic Effect */}
                  <motion.div
                    className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-all duration-300"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className={`w-full h-full rounded-full flex items-center justify-center ${
                        benefit.color === "green"
                          ? "bg-gradient-to-br from-green-100 to-green-200 text-green-600 shadow-green-200"
                          : benefit.color === "blue"
                          ? "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 shadow-blue-200"
                          : benefit.color === "purple"
                          ? "bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 shadow-purple-200"
                          : benefit.color === "orange"
                          ? "bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 shadow-orange-200"
                          : "bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 shadow-blue-200"
                      } shadow-lg`}
                    >
                      <benefit.icon className="w-10 h-10" />
                    </div>
                    {/* Magnetic Field Effect */}
                    <div className="absolute inset-0 rounded-full border-2 border-current opacity-0 group-hover:opacity-20 scale-110 transition-all duration-300"></div>
                  </motion.div>

                  {/* Metric with Enhanced Circular Progress */}
                  <div className="relative mb-6 flex flex-col items-center">
                    <div className="relative">
                      <CircularProgress
                        percentage={parseInt(benefit.metric)}
                        color={getColorHex(benefit.color)}
                        size={100}
                        strokeWidth={6}
                      />
                      {/* Inner Glow */}
                      <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/50 to-transparent blur-sm"></div>
                    </div>
                    <div className="text-sm font-bold text-gray-600 uppercase tracking-wider mt-3 px-3 py-1 bg-gray-50 rounded-full">
                      {benefit.metricLabel}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {benefit.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges Section */}
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
                Common Analytics Challenges We Solve
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transform your data challenges into competitive advantages by
                addressing the key barriers that prevent organizations from
                leveraging their data effectively
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -8,
                    rotateX: 5,
                    skewX: index % 2 === 0 ? 2 : -2,
                    scale: 1.02,
                    transformPerspective: 1000,
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Angular Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-gray-200 to-transparent transform rotate-12"></div>
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-transparent via-gray-200 to-transparent transform -rotate-12"></div>
                  </div>

                  {/* Impact Badge with Pulse */}
                  <div className="absolute top-4 right-4 z-10">
                    <motion.span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                        challenge.color === "orange"
                          ? "bg-orange-100 text-orange-800"
                          : challenge.color === "blue"
                          ? "bg-blue-100 text-blue-800"
                          : challenge.color === "green"
                          ? "bg-green-100 text-green-800"
                          : challenge.color === "purple"
                          ? "bg-purple-100 text-purple-800"
                          : challenge.color === "red"
                          ? "bg-red-100 text-red-800"
                          : "bg-teal-100 text-teal-800"
                      }`}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {challenge.impact}
                    </motion.span>
                  </div>

                  {/* Icon with Geometric Background */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 transform rotate-45 scale-150 opacity-20"></div>
                    <div
                      className={`relative inline-flex items-center justify-center w-14 h-14 rounded-lg group-hover:scale-110 transition-all duration-300 ${
                        challenge.color === "orange"
                          ? "bg-orange-100 text-orange-600"
                          : challenge.color === "blue"
                          ? "bg-blue-100 text-blue-600"
                          : challenge.color === "green"
                          ? "bg-green-100 text-green-600"
                          : challenge.color === "purple"
                          ? "bg-purple-100 text-purple-600"
                          : challenge.color === "red"
                          ? "bg-red-100 text-red-600"
                          : "bg-teal-100 text-teal-600"
                      }`}
                    >
                      <challenge.icon className="w-7 h-7" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors pr-16">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {challenge.description}
                  </p>

                  {/* Solution Indicator with Arrow */}
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-2 text-sm text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      <CheckCircle className="w-4 h-4" />
                      <span>Solved by Deepkore</span>
                    </div>
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5 text-blue-600" />
                    </motion.div>
                  </motion.div>

                  {/* Corner Accents */}
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-gray-200 opacity-30"></div>
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-gray-200 opacity-20"></div>
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
                Real-World Analytics Applications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how different types of organizations leverage our analytics
                platform for data-driven decision making and business
                transformation
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
                    <Image
                      src={useCase.image}
                      alt={useCase.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e: { currentTarget: { src: string } }) => {
                        e.currentTarget.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFuYWx5dGljczwvdGV4dD48L3N2Zz4=";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                    {/* Hover Overlay Text */}
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="text-lg font-bold">{useCase.title}</h4>
                    </div>
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
        <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-600 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-400/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            ></motion.div>
          </div>
          <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-40">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Data into Insights?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                Join thousands of organizations using Deepkore to unlock the
                power of their data, accelerate decision-making, and drive
                business growth through advanced analytics.
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

export default Analytics;
