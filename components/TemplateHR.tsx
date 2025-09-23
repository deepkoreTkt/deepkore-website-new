"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
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

const TemplateHR = () => {
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);

  const templates = [
    {
      title: "Leave Management System",
      subtitle: "Efficient Vacation and Absence Tracking",
      description:
        "Automate leave requests, approvals, and tracking with comprehensive calendar integration and policy enforcement.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      features: [
        "Leave Request Forms",
        "Calendar Integration",
        "Policy Management",
        "Approval Workflows",
        "Balance Tracking",
        "Reporting Analytics",
      ],
      image: "/dataform.png",
      category: "Human Resources",
    },
    {
      title: "Attendance Monitoring",
      subtitle: "Real-Time Workforce Presence Tracking",
      description:
        "Monitor employee attendance with automated check-ins, shift scheduling, and comprehensive time tracking capabilities.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      features: [
        "Automated Check-ins",
        "Shift Scheduling",
        "Overtime Calculation",
        "Geofencing",
        "Mobile Access",
        "Compliance Reports",
      ],
      image: "/process.png",
      category: "Human Resources",
    },
    {
      title: "Recruitment Workflow",
      subtitle: "Streamlined Hiring Process Automation",
      description:
        "Manage the entire recruitment lifecycle from job posting to offer acceptance with intelligent candidate matching.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: [
        "Job Posting Automation",
        "Candidate Screening",
        "Interview Scheduling",
        "Offer Management",
        "Onboarding Integration",
        "Hiring Analytics",
      ],
      image: "/analytics1.png",
      category: "Human Resources",
    },
    {
      title: "Employee Handbook",
      subtitle: "Digital Policy and Procedure Management",
      description:
        "Create and distribute comprehensive employee handbooks with version control, acknowledgment tracking, and updates.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      features: [
        "Policy Documentation",
        "Version Control",
        "Acknowledgment Tracking",
        "Search Functionality",
        "Update Notifications",
        "Compliance Monitoring",
      ],
      image: "/classic02.png",
      category: "Human Resources",
    },
    {
      title: "Exit Interview Process",
      subtitle: "Structured Employee Departure Management",
      description:
        "Conduct thorough exit interviews, manage offboarding checklists, and gather valuable feedback for organizational improvement.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      features: [
        "Interview Templates",
        "Feedback Collection",
        "Offboarding Checklists",
        "Asset Recovery",
        "Knowledge Transfer",
        "Exit Analytics",
      ],
      image: "/report1.png",
      category: "Human Resources",
    },
    {
      title: "Time Off Requests",
      subtitle: "Flexible Leave Request Processing",
      description:
        "Handle various types of time off requests with automated approvals, calendar synchronization, and balance management.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      features: [
        "Request Submission",
        "Multi-level Approvals",
        "Calendar Sync",
        "Balance Management",
        "Holiday Calendar",
        "Conflict Resolution",
      ],
      image: "/process.png",
      category: "Human Resources",
    },
    {
      title: "Employee Directory",
      subtitle: "Comprehensive Staff Information Hub",
      description:
        "Maintain an up-to-date employee directory with contact information, organizational charts, and searchable profiles.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      features: [
        "Contact Management",
        "Organizational Charts",
        "Search & Filter",
        "Profile Updates",
        "Access Permissions",
        "Integration APIs",
      ],
      image: "/classic04.png",
      category: "Human Resources",
    },
    {
      title: "Payroll Processing",
      subtitle: "Automated Salary and Compensation Management",
      description:
        "Streamline payroll calculations, tax deductions, and payment processing with accurate and compliant automation.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      features: [
        "Salary Calculations",
        "Tax Management",
        "Deductions Processing",
        "Payment Scheduling",
        "Compliance Checks",
        "Audit Trails",
      ],
      image: "/analytics1.png",
      category: "Human Resources",
    },
    {
      title: "Benefits Enrollment",
      subtitle: "Employee Benefits Administration",
      description:
        "Manage benefits enrollment, open enrollment periods, and employee communications for comprehensive benefits programs.",
      icon: <Package className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      features: [
        "Benefits Catalog",
        "Enrollment Forms",
        "Open Enrollment",
        "Cost Calculations",
        "Communication Tools",
        "Compliance Tracking",
      ],
      image: "/classic02.png",
      category: "Human Resources",
    },
    {
      title: "Compliance Reporting",
      subtitle: "Regulatory and Legal Compliance Management",
      description:
        "Ensure organizational compliance with automated reporting, audit trails, and regulatory requirement tracking.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-gray-500 to-slate-500",
      bgColor: "bg-gray-50",
      features: [
        "Regulatory Tracking",
        "Automated Reports",
        "Audit Preparation",
        "Document Management",
        "Risk Assessment",
        "Alert Systems",
      ],
      image: "/report1.png",
      category: "Human Resources",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/10 to-green-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-40 lg:px-40 py-40">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
              <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
                HR Templates
              </span>
            </div>
          </motion.div>

          <motion.h1
            className={`${inter.className} text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to DeepKore&apos;s
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text text-transparent">
              {" "}
              HR Templates
            </span>
          </motion.h1>

          <motion.p
            className={`${inter.className} text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Revolutionize your HR processes with cutting-edge automation
            templates that enhance efficiency, compliance, and employee
            engagement.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              Browse HR Templates
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-slate-400 hover:bg-slate-50 transition-all duration-300">
              Watch Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {templates.map((template, index) => (
            <motion.div
              key={index}
              className={`group relative ${template.bgColor} rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden`}
              whileHover={{ y: -5, scale: 1.02 }}
              onHoverStart={() => setHoveredTemplate(template.title)}
              onHoverEnd={() => setHoveredTemplate(null)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
              ></div>

              {/* Category Badge */}
              <div className="relative z-10 mb-4">
                <span className="inline-block px-3 py-1 bg-white/70 text-slate-600 text-xs font-medium rounded-full">
                  {template.category}
                </span>
              </div>

              {/* Icon */}
              <div
                className={`relative z-10 w-12 h-12 rounded-xl bg-gradient-to-br ${template.gradient} flex items-center justify-center mb-4 text-white shadow-lg`}
              >
                {template.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors">
                  {template.title}
                </h3>
                <h4 className="text-sm font-medium text-slate-600 mb-3">
                  {template.subtitle}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {template.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-4">
                  {template.features.slice(0, 3).map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-xs text-slate-600"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${template.gradient}`}
                      ></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {template.features.length > 3 && (
                    <div className="text-xs text-slate-500 font-medium">
                      +{template.features.length - 3} more features
                    </div>
                  )}
                </div>

                {/* CTA */}
                <button
                  className={`w-full py-2 px-4 bg-gradient-to-r ${template.gradient} text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105`}
                >
                  Explore Template
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Hover Image Preview */}
              <AnimatePresence>
                {hoveredTemplate === template.title && (
                  <motion.div
                    className="absolute top-4 right-4 w-20 h-20 rounded-lg overflow-hidden border-2 border-white/50 shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={template.image}
                      alt={template.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Empower Your HR Team Today
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Deploy our HR templates instantly and transform manual processes
              into automated workflows that drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started Free
              </button>
              <button className="px-8 py-3 border-2 border-slate-300 text-slate-700 font-semibold rounded-full hover:border-slate-400 hover:bg-slate-50 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default TemplateHR;
