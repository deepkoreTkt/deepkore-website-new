"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Bot,
  BarChart3,
  Sparkles,
  Scale,
  TrendingUp,
  Sliders,
  Search,
  PieChart,
  Circle,
  Radar,
  Funnel,
  BarChart,
  BarChartHorizontal,
  Box,
  LineChart,
  ScatterChart,
  AreaChart,
  Link as LinkIcon,
  Database,
  Cloud,
  Zap,
  Server,
  Smartphone,
  Settings,
  Table,
  Play,
  ArrowRight,
} from "lucide-react";

// Analytics features data
const analyticsFeatures = [
  {
    title: "AI-Powered Data Summarization",
    description:
      "Leverage advanced AI to automatically summarize vast datasets into actionable insights, eliminating manual analysis and reducing time-to-decision.",
    icon: Bot,
    benefits: [
      "Instant dataset summarization",
      "AI-driven pattern recognition",
      "Automated insight generation",
    ],
  },
  {
    title: "Dynamic Visual Dashboards",
    description:
      "Create stunning, interactive dashboards that adapt to your data in real-time, providing crystal-clear visualizations for better understanding.",
    icon: BarChart3,
    benefits: [
      "Real-time data visualization",
      "Customizable dashboard layouts",
      "Interactive data exploration",
    ],
  },
  {
    title: "Predictive Analytics Engine",
    description:
      "Go beyond historical data with our predictive analytics that forecast trends, identify risks, and recommend optimal actions.",
    icon: Sparkles,
    benefits: [
      "Trend forecasting capabilities",
      "Risk assessment algorithms",
      "Actionable recommendations",
    ],
  },
  {
    title: "Multi-Dimensional Data Comparison",
    description:
      "Compare metrics across unlimited dimensions simultaneously, uncovering hidden correlations and driving strategic decisions.",
    icon: Scale,
    benefits: [
      "Cross-dimensional analysis",
      "Correlation discovery",
      "Strategic decision support",
    ],
  },
];

// Success stories
const successStories = [
  {
    company: "TechCorp Solutions",
    metric: "40% faster reporting",
    description:
      "Reduced monthly reporting time from 3 days to 1.5 days using AI-powered analytics.",
  },
  {
    company: "Global Manufacturing Inc",
    metric: "25% cost reduction",
    description:
      "Identified inefficiencies leading to $2M annual savings through predictive analytics.",
  },
  {
    company: "Retail Dynamics",
    metric: "60% better forecasting",
    description:
      "Improved inventory forecasting accuracy, reducing stockouts by 60%.",
  },
];

// Integration capabilities
const integrations = [
  { name: "Database Connectors", icon: Database },
  { name: "Cloud Storage", icon: Cloud },
  { name: "API Integrations", icon: Zap },
  { name: "IoT Data Streams", icon: Server },
  { name: "ERP Systems", icon: Settings },
  { name: "CRM Platforms", icon: Smartphone },
];

// Chart types data
const chartTypes = [
  {
    name: "Pie Chart",
    description:
      "Perfect for showing proportions and percentages of a whole dataset",
    icon: PieChart,
    useCase: "Market share analysis, budget allocation",
  },
  {
    name: "Donut Chart",
    description:
      "Similar to pie charts but with a hollow center for additional information",
    icon: Circle,
    useCase: "Category breakdowns with center metrics",
  },
  {
    name: "Radar Chart",
    description:
      "Displays multivariate data in a two-dimensional chart with multiple axes",
    icon: Radar,
    useCase: "Performance comparisons, skill assessments",
  },
  {
    name: "Funnel Chart",
    description: "Visualizes a linear process with stages that narrow down",
    icon: Funnel,
    useCase: "Sales funnels, conversion rates, user journeys",
  },
  {
    name: "Bar Chart",
    description: "Compares different categories using rectangular bars",
    icon: BarChart,
    useCase: "Category comparisons, frequency distributions",
  },
  {
    name: "Column Chart",
    description: "Vertical bar charts for comparing values across categories",
    icon: BarChart3,
    useCase: "Time series data, category comparisons",
  },
  {
    name: "Stacked Horizontal Bar Chart",
    description:
      "Shows part-to-whole relationships horizontally with stacked segments",
    icon: BarChartHorizontal,
    useCase: "Component breakdowns, progress tracking",
  },
  {
    name: "Stacked Vertical Bar Chart",
    description:
      "Vertical bars with stacked segments showing part-to-whole relationships",
    icon: BarChart,
    useCase: "Time-based component analysis",
  },
  {
    name: "100% Stacked Horizontal Chart",
    description: "Horizontal bars showing 100% distribution of components",
    icon: BarChartHorizontal,
    useCase: "Percentage breakdowns, composition analysis",
  },
  {
    name: "100% Stacked Vertical Chart",
    description: "Vertical bars showing 100% distribution of components",
    icon: BarChart,
    useCase: "Percentage comparisons over time",
  },
  {
    name: "Box Plot",
    description:
      "Statistical chart showing distribution through quartiles and outliers",
    icon: Box,
    useCase: "Statistical analysis, data distribution",
  },
  {
    name: "Pareto Chart",
    description:
      "Combines bar and line charts to show frequency and cumulative percentage",
    icon: BarChart,
    useCase: "80/20 rule analysis, priority identification",
  },
  {
    name: "Bump Chart",
    description: "Shows ranking changes over time with connected lines",
    icon: TrendingUp,
    useCase: "Ranking trends, position changes",
  },
  {
    name: "Line Chart",
    description: "Connects data points with lines to show trends over time",
    icon: LineChart,
    useCase: "Time series analysis, trend identification",
  },
  {
    name: "Combo Chart",
    description: "Combines different chart types in one visualization",
    icon: BarChart3,
    useCase: "Multiple data relationships, complex comparisons",
  },
  {
    name: "Stacked Area Chart",
    description: "Area charts with stacked layers showing cumulative values",
    icon: AreaChart,
    useCase: "Cumulative trends, component contributions",
  },
  {
    name: "Area Chart",
    description: "Filled line charts showing quantity beneath the line",
    icon: AreaChart,
    useCase: "Volume trends, cumulative data",
  },
  {
    name: "Scatter Chart",
    description: "Plots individual data points on x-y coordinates",
    icon: ScatterChart,
    useCase: "Correlation analysis, distribution patterns",
  },
];

// Pivot table features data
const pivotTableFeatures = [
  {
    title: "Drag-and-Drop Simplicity",
    description:
      "Build complex pivot tables with intuitive drag-and-drop interface. No coding required to transform your data.",
    icon: Table,
  },
  {
    title: "Advanced Aggregations",
    description:
      "Sum, average, count, min, max, and custom calculations to analyze your data comprehensively and accurately.",
    icon: TrendingUp,
  },
  {
    title: "Multi-Level Grouping",
    description:
      "Group data by multiple dimensions to uncover hidden patterns and relationships in your datasets.",
    icon: Scale,
  },
];

const Analytics: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 relative overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-40 relative z-10">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
            >
              Smarter Decisions with Deepkore Analytics
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold text-slate-700 mb-8"
            >
              Transform raw data into strategic advantage
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Move beyond static spreadsheets to dynamic, AI-powered
              visualizations that drive smarter decision-making. Our analytics
              platform empowers you to uncover insights, predict trends, and
              take action with confidence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/getstarted"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-indigo-500/25 transition-all duration-300 group"
              >
                <BarChart3 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Start Analyzing Data
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/getstarted"
                className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-600 hover:text-white hover:scale-105 transition-all duration-300 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Watch Demo
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
              Powerful Intelligence at Your Fingertips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience next-generation analytics that combines AI, real-time
              processing, and intuitive design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {analyticsFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white via-slate-50 to-indigo-50 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border border-slate-200 group relative overflow-hidden cursor-pointer"
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 shadow group-hover:scale-110 transition-transform duration-300 mr-6"
                  >
                    <feature.icon className="w-10 h-10 text-indigo-600" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, bidx) => (
                    <motion.li
                      key={bidx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: idx * 0.1 + bidx * 0.1,
                      }}
                      viewport={{ once: true }}
                      className="flex items-center text-slate-700"
                    >
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3 animate-pulse"></div>
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Analytics Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50/30 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              Advanced Data Analysis Made Simple
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Harness the power of pivot tables and beyond with our intuitive
              analytics tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-6 animate-fade-in">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Intelligent Data Summarization
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Transform massive datasets into meaningful insights with
                AI-powered summarization that highlights key patterns and trends
                automatically.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-6 animate-fade-in">
                <Sliders className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Flexible View Customization
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Filter, group, and organize data with drag-and-drop simplicity.
                Create personalized views that match your analytical needs
                perfectly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-6 animate-fade-in">
                <Search className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">
                Multi-Dimensional Comparisons
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Compare metrics across multiple dimensions simultaneously to
                uncover correlations and make data-driven strategic decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pivot Tables Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-50/30 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-40">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Powerful Pivot Tables
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform raw data into actionable insights with our advanced
              pivot table functionality. Summarize, analyze, and visualize your
              data with drag-and-drop ease.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {pivotTableFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 animate-fade-in ${
                    idx === 0
                      ? "bg-gradient-to-br from-indigo-100 to-purple-100"
                      : idx === 1
                      ? "bg-gradient-to-br from-blue-100 to-indigo-100"
                      : "bg-gradient-to-br from-purple-100 to-pink-100"
                  }`}
                >
                  <feature.icon
                    className={`w-8 h-8 ${
                      idx === 0
                        ? "text-indigo-600"
                        : idx === 1
                        ? "text-blue-600"
                        : "text-purple-600"
                    }`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chart Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
              Comprehensive Chart Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from 18+ powerful chart types to visualize your data
              exactly how you need it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chartTypes.map((chart, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gradient-to-br from-white via-gray-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center mb-4 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 shadow group-hover:scale-110 transition-transform duration-300 mr-4"
                  >
                    <chart.icon className="w-7 h-7 text-indigo-600" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {chart.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed relative z-10">
                  {chart.description}
                </p>
                <div className="text-xs text-indigo-600 font-medium relative z-10 bg-indigo-50 px-2 py-1 rounded-full inline-block">
                  {chart.useCase}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how organizations are transforming their decision-making with
              Deepkore Analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {successStories.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-white via-emerald-50 to-teal-50 rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border border-emerald-100 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full -translate-y-10 translate-x-10 opacity-20"></div>
                <div className="text-3xl font-extrabold text-emerald-600 mb-4 relative z-10">
                  {story.metric}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800 relative z-10">
                  {story.company}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {story.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-40">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Seamless Data Integration
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Connect with your existing systems effortlessly. Our analytics
              platform integrates with hundreds of data sources.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300 animate-fade-in">
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <div className="font-semibold text-sm">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 md:px-20 lg:px-40 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800"
          >
            Ready to Unlock Your Data&apos;s Potential?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-gray-600"
          >
            Join thousands of organizations making smarter decisions with
            AI-powered analytics
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/getstarted"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-indigo-500/25 transition-all duration-300 group"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-600 hover:text-white hover:scale-105 transition-all duration-300 group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Schedule Demo
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Analytics;
