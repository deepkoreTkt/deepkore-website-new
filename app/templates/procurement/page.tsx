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

const Procurement = () => {
  const ratings = [4.6, 4.8, 4.4, 4.9, 4.2, 4.5, 4.7, 4.3, 4.1, 4.6];

  const templates = [
    {
      title: "Purchase Request",
      subtitle: "Streamlined Purchase Request Processing",
      description:
        "Automate purchase request workflows with approval routing, budget validation, and seamless integration with procurement systems.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      features: [
        "Request Forms",
        "Approval Workflows",
        "Budget Checking",
        "Item Catalog",
        "Priority Management",
        "Status Tracking",
      ],
      image: "/dataform.png",
      category: "Procurement",
      href: "/templates/procurement",
    },
    {
      title: "Vendor Registration",
      subtitle: "Efficient Supplier Onboarding",
      description:
        "Streamline vendor registration with automated qualification checks, document collection, and approval processes for new suppliers.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      features: [
        "Registration Forms",
        "Document Upload",
        "Qualification Checks",
        "Approval Routing",
        "Vendor Portal",
        "Compliance Verification",
      ],
      image: "/process.png",
      category: "Procurement",
    },
    {
      title: "Purchase Order",
      subtitle: "Comprehensive PO Management",
      description:
        "Create and manage purchase orders with automated generation, approval workflows, and tracking from order to delivery.",
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: [
        "PO Generation",
        "Approval Processes",
        "Vendor Communication",
        "Delivery Tracking",
        "Status Updates",
        "Integration APIs",
      ],
      image: "/analytics1.png",
      category: "Procurement",
    },
    {
      title: "Advance Payment",
      subtitle: "Secure Advance Payment Processing",
      description:
        "Manage advance payments with approval workflows, milestone tracking, and automated reconciliation for procurement projects.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      features: [
        "Payment Requests",
        "Approval Workflows",
        "Milestone Tracking",
        "Reconciliation",
        "Audit Trails",
        "Compliance Checks",
      ],
      image: "/report1.png",
      category: "Procurement",
    },
    {
      title: "Vendor Onboarding",
      subtitle: "Efficient Supplier Registration and Qualification",
      description:
        "Streamline vendor registration, qualification processes, and compliance checks with automated workflows and document management.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      features: [
        "Vendor Registration",
        "Qualification Forms",
        "Document Verification",
        "Compliance Checks",
        "Approval Processes",
        "Vendor Portal",
      ],
      image: "/dataform.png",
      category: "Procurement",
    },
    {
      title: "Purchase Requisitions",
      subtitle: "Automated Purchase Request Processing",
      description:
        "Manage purchase requisitions from initiation to approval with multi-level workflows, budget controls, and integration capabilities.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: [
        "Request Forms",
        "Budget Validation",
        "Approval Routing",
        "Item Catalog",
        "Priority Levels",
        "Reporting",
      ],
      image: "/process.png",
      category: "Procurement",
    },
    {
      title: "Purchase Order Management",
      subtitle: "Comprehensive PO Processing and Tracking",
      description:
        "Create, approve, and track purchase orders with automated notifications, delivery tracking, and financial integration.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      features: [
        "PO Generation",
        "Approval Workflows",
        "Vendor Communication",
        "Delivery Tracking",
        "Invoice Matching",
        "Payment Processing",
      ],
      image: "/analytics1.png",
      category: "Procurement",
    },
    {
      title: "Invoice Processing",
      subtitle: "Automated Invoice Management and Payment",
      description:
        "Process vendor invoices with three-way matching, approval workflows, and automated payment scheduling for efficient accounts payable.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      features: [
        "Invoice Receipt",
        "Three-Way Matching",
        "Approval Routing",
        "Payment Scheduling",
        "Dispute Management",
        "Audit Trails",
      ],
      image: "/report1.png",
      category: "Procurement",
    },
    {
      title: "Contract Management",
      subtitle: "Comprehensive Supplier Contract Administration",
      description:
        "Manage supplier contracts with automated renewals, compliance tracking, and performance monitoring throughout the contract lifecycle.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      features: [
        "Contract Creation",
        "Renewal Alerts",
        "Compliance Monitoring",
        "Performance Tracking",
        "Amendment Management",
        "Termination Processes",
      ],
      image: "/classic02.png",
      category: "Procurement",
    },
    {
      title: "Supplier Performance",
      subtitle: "Vendor Evaluation and Scorecard Management",
      description:
        "Track and evaluate supplier performance with automated scorecards, KPIs, and continuous improvement initiatives.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      features: [
        "Performance Metrics",
        "Scorecard Generation",
        "KPI Tracking",
        "Improvement Plans",
        "Vendor Feedback",
        "Analytics Dashboard",
      ],
      image: "/analytics1.png",
      category: "Procurement",
    },
    {
      title: "Spend Analysis",
      subtitle: "Comprehensive Procurement Spend Analytics",
      description:
        "Analyze procurement spend patterns with detailed reporting, category analysis, and savings opportunity identification.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      features: [
        "Spend Categorization",
        "Trend Analysis",
        "Savings Tracking",
        "Supplier Comparison",
        "Budget vs Actual",
        "Forecasting",
      ],
      image: "/report1.png",
      category: "Procurement",
    },
    {
      title: "Inventory Management",
      subtitle: "Integrated Inventory and Procurement Control",
      description:
        "Manage inventory levels with automated reorder points, procurement integration, and demand forecasting capabilities.",
      icon: <Package className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      features: [
        "Stock Level Monitoring",
        "Reorder Automation",
        "Demand Forecasting",
        "Supplier Integration",
        "ABC Analysis",
        "Inventory Reports",
      ],
      image: "/classic04.png",
      category: "Procurement",
    },
    {
      title: "Compliance and Risk Management",
      subtitle: "Regulatory Compliance and Risk Mitigation",
      description:
        "Ensure procurement compliance with automated risk assessments, audit trails, and regulatory reporting capabilities.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-gray-500 to-slate-500",
      bgColor: "bg-gray-50",
      features: [
        "Risk Assessment",
        "Compliance Monitoring",
        "Audit Trails",
        "Regulatory Reporting",
        "Policy Enforcement",
        "Alert Systems",
      ],
      image: "/process.png",
      category: "Procurement",
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
            Accelerate Procurement with
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
            Drive procurement excellence with a complete suite of templates that
            ensure compliance, streamline workflows, and scale effortlessly
            across your organization.
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
                  Ready to Transform Your Procurement Operations?
                </h3>
                <p className="text-gray-600">
                  Schedule a consultation with our enterprise solutions team to
                  discuss your specific procurement requirements.
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

export default Procurement;
