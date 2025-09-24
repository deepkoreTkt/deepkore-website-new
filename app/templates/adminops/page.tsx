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

const AdminOps = () => {
  const ratings = [4.5, 4.8, 4.2, 4.7, 4.3, 4.6, 4.9, 4.4, 4.1, 4.5];

  const templates = [
    {
      title: "Administrative Operations Hub",
      subtitle: "Efficient Admin Processes",
      description:
        "Centralize administrative tasks with automated workflows, document management, and operational oversight.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-gray-500 to-slate-500",
      bgColor: "bg-gray-50",
      features: [
        "Document Management",
        "Task Automation",
        "Workflow Coordination",
        "Resource Planning",
        "Compliance Monitoring",
        "Performance Tracking",
      ],
      image: "/classic02.png",
      category: "Admin & Ops",
      href: "/templates/adminops",
    },
    {
      title: "Document Management System",
      subtitle: "Centralized Document Control",
      description:
        "Manage organizational documents with version control, access permissions, and automated archiving for compliance and efficiency.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      features: [
        "Version Control",
        "Access Permissions",
        "Document Search",
        "Automated Archiving",
        "Collaboration Tools",
        "Audit Trails",
      ],
      image: "/dataform.png",
      category: "Admin & Ops",
    },
    {
      title: "Task Management and Automation",
      subtitle: "Streamlined Task Processing",
      description:
        "Automate routine administrative tasks with workflow automation, task assignment, and progress tracking for improved productivity.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      features: [
        "Task Automation",
        "Workflow Design",
        "Assignment Rules",
        "Progress Tracking",
        "Deadline Management",
        "Reporting",
      ],
      image: "/process.png",
      category: "Admin & Ops",
    },
    {
      title: "Resource Planning",
      subtitle: "Strategic Resource Allocation",
      description:
        "Plan and allocate organizational resources with demand forecasting, capacity planning, and optimization tools.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: [
        "Demand Forecasting",
        "Capacity Planning",
        "Resource Allocation",
        "Utilization Tracking",
        "Budget Integration",
        "Scenario Planning",
      ],
      image: "/analytics1.png",
      category: "Admin & Ops",
    },
    {
      title: "Compliance Monitoring",
      subtitle: "Regulatory Compliance Management",
      description:
        "Monitor and ensure organizational compliance with automated tracking, reporting, and alert systems for regulatory requirements.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      features: [
        "Compliance Tracking",
        "Automated Reporting",
        "Alert Systems",
        "Audit Preparation",
        "Policy Management",
        "Risk Assessment",
      ],
      image: "/report1.png",
      category: "Admin & Ops",
    },
    {
      title: "Performance Tracking",
      subtitle: "Operational Performance Analytics",
      description:
        "Track and analyze operational performance with KPIs, dashboards, and continuous improvement tools for administrative functions.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      features: [
        "KPI Monitoring",
        "Performance Dashboards",
        "Trend Analysis",
        "Benchmarking",
        "Improvement Plans",
        "Reporting Tools",
      ],
      image: "/analytics1.png",
      category: "Admin & Ops",
    },
    {
      title: "Office Administration",
      subtitle: "Comprehensive Office Management",
      description:
        "Manage office operations with facility coordination, supply management, and administrative support workflows.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      features: [
        "Facility Coordination",
        "Supply Management",
        "Administrative Support",
        "Vendor Management",
        "Space Planning",
        "Maintenance Tracking",
      ],
      image: "/classic04.png",
      category: "Admin & Ops",
    },
    {
      title: "IT Service Desk",
      subtitle: "Internal IT Support Management",
      description:
        "Manage internal IT service requests with ticketing, knowledge base, and service level agreement tracking.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      features: [
        "Ticket Management",
        "Knowledge Base",
        "SLA Tracking",
        "Asset Management",
        "Incident Response",
        "User Self-Service",
      ],
      image: "/process.png",
      category: "Admin & Ops",
    },
    {
      title: "Employee Onboarding",
      subtitle: "New Hire Integration Process",
      description:
        "Streamline employee onboarding with automated checklists, document collection, and training assignment workflows.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      features: [
        "Onboarding Checklists",
        "Document Collection",
        "Training Assignment",
        "Equipment Setup",
        "Manager Notifications",
        "Progress Tracking",
      ],
      image: "/dataform.png",
      category: "Admin & Ops",
    },
    {
      title: "Policy Management",
      subtitle: "Organizational Policy Administration",
      description:
        "Manage organizational policies with version control, acknowledgment tracking, and automated distribution and updates.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      features: [
        "Policy Creation",
        "Version Control",
        "Acknowledgment Tracking",
        "Automated Distribution",
        "Update Notifications",
        "Compliance Reporting",
      ],
      image: "/classic02.png",
      category: "Admin & Ops",
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
            Streamline Administrative Operations with
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
            Drive administrative excellence with a complete suite of templates
            that ensure compliance, streamline workflows, and scale effortlessly
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
                  <button className="flex-1 py-2 px-4 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                    Preview
                  </button>
                  <button className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1">
                    Deploy
                    <ArrowRight className="w-3 h-3" />
                  </button>
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
                  Ready to Transform Your Administrative Operations?
                </h3>
                <p className="text-gray-600">
                  Schedule a consultation with our enterprise solutions team to
                  discuss your specific administrative requirements.
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

export default AdminOps;
