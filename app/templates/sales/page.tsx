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

const Sales = () => {
  const ratings = [4.5, 4.9, 4.6, 4.8, 4.2, 4.7, 4.3, 4.4, 4.1, 4.5];

  const templates = [
    {
      title: "Sales Pipeline Optimizer",
      subtitle: "Accelerate Revenue Growth",
      description:
        "Transform your sales process with AI-driven lead scoring, automated follow-ups, and predictive analytics.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      features: [
        "Lead Scoring",
        "Automated Sequences",
        "Pipeline Analytics",
        "Deal Forecasting",
        "Customer Insights",
        "Performance Metrics",
      ],
      image: "/analytics1.png",
      category: "Sales",
      href: "/templates/sales",
    },
    {
      title: "Lead Management System",
      subtitle: "Intelligent Lead Qualification",
      description:
        "Capture, qualify, and nurture leads with automated scoring, segmentation, and conversion tracking throughout the sales funnel.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      features: [
        "Lead Capture",
        "Qualification Scoring",
        "Lead Nurturing",
        "Segmentation",
        "Conversion Tracking",
        "Source Analytics",
      ],
      image: "/dataform.png",
      category: "Sales",
    },
    {
      title: "Customer Relationship Management",
      subtitle: "Comprehensive CRM Solution",
      description:
        "Manage customer interactions, track opportunities, and maintain detailed customer profiles with integrated communication tools.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      features: [
        "Contact Management",
        "Opportunity Tracking",
        "Communication History",
        "Customer Profiles",
        "Integration APIs",
        "Reporting Tools",
      ],
      image: "/process.png",
      category: "Sales",
    },
    {
      title: "Sales Forecasting",
      subtitle: "Predictive Revenue Planning",
      description:
        "Generate accurate sales forecasts with historical data analysis, trend identification, and scenario planning capabilities.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      features: [
        "Historical Analysis",
        "Trend Forecasting",
        "Scenario Planning",
        "Accuracy Tracking",
        "Pipeline Forecasting",
        "Revenue Projections",
      ],
      image: "/analytics1.png",
      category: "Sales",
    },
    {
      title: "Quotation and Proposal Management",
      subtitle: "Streamlined Quote Generation",
      description:
        "Create professional quotes and proposals with automated pricing, template management, and approval workflows.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      features: [
        "Quote Generation",
        "Pricing Automation",
        "Template Management",
        "Approval Workflows",
        "Version Control",
        "Digital Signatures",
      ],
      image: "/classic02.png",
      category: "Sales",
    },
    {
      title: "Sales Performance Tracking",
      subtitle: "Comprehensive Sales Analytics",
      description:
        "Monitor sales team performance with KPIs, dashboards, and detailed analytics for continuous improvement and optimization.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      features: [
        "KPI Monitoring",
        "Performance Dashboards",
        "Team Analytics",
        "Goal Tracking",
        "Commission Calculations",
        "Achievement Recognition",
      ],
      image: "/report1.png",
      category: "Sales",
    },
    {
      title: "Customer Onboarding",
      subtitle: "Seamless Customer Integration",
      description:
        "Guide new customers through onboarding with automated checklists, milestone tracking, and personalized welcome experiences.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      features: [
        "Onboarding Checklists",
        "Milestone Tracking",
        "Welcome Sequences",
        "Customer Portal",
        "Progress Monitoring",
        "Success Metrics",
      ],
      image: "/dataform.png",
      category: "Sales",
    },
    {
      title: "Sales Analytics Dashboard",
      subtitle: "Data-Driven Sales Insights",
      description:
        "Gain actionable insights with comprehensive sales analytics, trend analysis, and predictive modeling for strategic decision-making.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      features: [
        "Sales Metrics",
        "Trend Analysis",
        "Predictive Modeling",
        "Custom Dashboards",
        "Real-time Updates",
        "Export Capabilities",
      ],
      image: "/analytics1.png",
      category: "Sales",
    },
    {
      title: "Territory Management",
      subtitle: "Strategic Territory Planning",
      description:
        "Optimize sales territories with geographic analysis, account distribution, and performance-based territory adjustments.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      features: [
        "Geographic Mapping",
        "Account Distribution",
        "Performance Analysis",
        "Territory Optimization",
        "Resource Allocation",
        "Growth Planning",
      ],
      image: "/classic04.png",
      category: "Sales",
    },
    {
      title: "Commission Management",
      subtitle: "Automated Commission Processing",
      description:
        "Calculate and manage sales commissions with automated processing, dispute resolution, and transparent reporting for sales teams.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-gray-500 to-slate-500",
      bgColor: "bg-gray-50",
      features: [
        "Commission Calculations",
        "Automated Processing",
        "Dispute Resolution",
        "Payment Scheduling",
        "Tax Management",
        "Audit Trails",
      ],
      image: "/process.png",
      category: "Sales",
    },
    {
      title: "Franchise Management",
      subtitle: "Streamline Network Operations",
      description:
        "Manage franchise operations with centralized control, performance tracking, and standardized processes across your network.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      features: [
        "Network Oversight",
        "Performance Monitoring",
        "Standardized Processes",
        "Royalty Management",
        "Compliance Tracking",
        "Reporting Dashboard",
      ],
      image: "/classic04.png",
      category: "Sales",
    },
    {
      title: "Online Catalog Maker",
      subtitle: "Build Digital Portfolio",
      description:
        "Create professional online catalogs with customizable templates, product management, and seamless customer browsing experiences.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      features: [
        "Catalog Templates",
        "Product Management",
        "Customization Tools",
        "Customer Portal",
        "Search Functionality",
        "Analytics Integration",
      ],
      image: "/dataform.png",
      category: "Sales",
    },
    {
      title: "Online Proofing",
      subtitle: "Automate Review Process",
      description:
        "Streamline content approval workflows with online proofing tools, version control, and collaborative feedback mechanisms.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: [
        "Proofing Workflows",
        "Version Control",
        "Collaborative Feedback",
        "Approval Tracking",
        "Comment Management",
        "Integration APIs",
      ],
      image: "/process.png",
      category: "Sales",
    },
    {
      title: "Point Of Sale (POS)",
      subtitle: "Complete Sales Data Management",
      description:
        "Manage retail operations with comprehensive POS systems, inventory tracking, and integrated payment processing.",
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      features: [
        "Transaction Processing",
        "Inventory Tracking",
        "Payment Integration",
        "Receipt Management",
        "Sales Analytics",
        "Customer Data",
      ],
      image: "/analytics1.png",
      category: "Sales",
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

      <div className="relative z-10 container mx-auto px-40 lg:px-40 py-24">
        {/* Hero Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className={`${inter.className} text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight text-center px-30`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Accelerate Sales Performance with
            <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 bg-clip-text text-transparent">
              {" "}
              Enterprise-Ready Templates
            </span>
          </motion.h1>

          <motion.p
            className={`${inter.className} text-lg text-gray-600 mb-8 text-center mx-auto max-w-3xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Drive revenue growth with intelligent sales automation,
            comprehensive customer management, and data-driven insights.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <a href="/getstarted">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors flex items-center gap-2">
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
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
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ready to Transform Your Sales Operations?
                </h3>
                <p className="text-gray-600">
                  Schedule a consultation with our enterprise solutions team to
                  discuss your specific sales requirements.
                </p>
              </div>
              <div className="flex gap-4">
                <a href="/getstarted">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                    Request Demo
                  </button>
                </a>
                <a href="/contact">
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
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

export default Sales;
