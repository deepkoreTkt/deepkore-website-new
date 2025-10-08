"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
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
  "Database Connectors",
  "Cloud Storage",
  "API Integrations",
  "IoT Data Streams",
  "ERP Systems",
  "CRM Platforms",
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

const Analytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#8112db]/10 via-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-40">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#8112db] via-blue-600 to-green-600 bg-clip-text text-transparent">
              Smarter Decisions with Deepkore Analytics
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
              Transform raw data into strategic advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Move beyond static spreadsheets to dynamic, AI-powered
              visualizations that drive smarter decision-making. Our analytics
              platform empowers you to uncover insights, predict trends, and
              take action with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/getstarted"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8112db] to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Analyzing Data
              </motion.a>
              <motion.a
                href="/getstarted"
                className="inline-flex items-center px-8 py-4 border-2 border-[#8112db] text-[#8112db] font-semibold rounded-full hover:bg-[#8112db] hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-40">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Powerful Intelligence at Your Fingertips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience next-generation analytics that combines AI, real-time
              processing, and intuitive design
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {analyticsFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="text-5xl mr-4 text-[#8112db]">
                    <feature.icon />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, bidx) => (
                    <li key={bidx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-[#8112db] rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Analytics Section */}
      <section className="py-20 bg-gradient-to-br from-[#8112db]/5 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Advanced Data Analysis Made Simple
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Harness the power of pivot tables and beyond with our intuitive
              analytics tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#8112db]/20 to-blue-200 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#8112db]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Intelligent Data Summarization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Transform massive datasets into meaningful insights with
                AI-powered summarization that highlights key patterns and trends
                automatically.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-green-200 rounded-xl flex items-center justify-center mb-6">
                <Sliders className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Flexible View Customization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Filter, group, and organize data with drag-and-drop simplicity.
                Create personalized views that match your analytical needs
                perfectly.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-200 to-[#8112db]/20 rounded-xl flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Multi-Dimensional Comparisons
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Compare metrics across multiple dimensions simultaneously to
                uncover correlations and make data-driven strategic decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chart Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-40">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Comprehensive Chart Library
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from 18+ powerful chart types to visualize your data
              exactly how you need it
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chartTypes.map((chart, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3 text-[#8112db]">
                    <chart.icon />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {chart.name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {chart.description}
                </p>
                <div className="text-xs text-[#8112db] font-medium">
                  Use case: {chart.useCase}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-40">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how organizations are transforming their decision-making with
              Deepkore Analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="text-3xl font-bold text-[#8112db] mb-4">
                  {story.metric}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {story.company}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {story.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-r from-[#8112db] to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-40">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Seamless Data Integration
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Connect with your existing systems effortlessly. Our analytics
              platform integrates with hundreds of data sources.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, idx) => (
              <motion.div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl mb-2 text-white">
                  <LinkIcon />
                </div>
                <div className="font-semibold">{integration}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-40 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Unlock Your Data&apos;s Potential?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of organizations making smarter decisions with
            AI-powered analytics
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
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#8112db] to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Start Free Trial
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-[#8112db] text-[#8112db] font-semibold rounded-full hover:bg-[#8112db] hover:text-white transition-all duration-300"
            >
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
