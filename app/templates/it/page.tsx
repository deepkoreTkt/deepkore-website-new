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

const It = () => {
  const ratings = [4.8, 4.6, 4.4, 4.9, 4.3, 4.7, 4.5, 4.2, 4.1, 4.8];

  const templates = [
    {
      title: "Information Technology",
      subtitle: "Efficient IT Operations",
      description:
        "Automate and efficiently track IT tickets and other requests in a single console with our ready-made templates.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      features: [
        "IT Service Request",
        "IT Bug Tracking",
        "IT Problem Management",
        "IT Change Management",
        "IT Onboarding",
        "IT Release Management",
        "IT Incident Management",
      ],
      image: "/classic04.png",
      category: "Information Technology",
      href: "/templates/it",
    },
    {
      title: "IT Service Desk",
      subtitle: "Centralized IT Support",
      description:
        "Manage IT service requests, incidents, and user support with automated ticketing, knowledge base, and SLA tracking.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      features: [
        "Incident Management",
        "Service Requests",
        "Knowledge Base",
        "SLA Tracking",
        "User Portal",
        "Reporting Analytics",
      ],
      image: "/dataform.png",
      category: "Information Technology",
    },
    {
      title: "Network Management",
      subtitle: "Infrastructure Monitoring",
      description:
        "Monitor and manage network infrastructure with automated discovery, performance monitoring, and fault management.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      features: [
        "Network Discovery",
        "Performance Monitoring",
        "Fault Management",
        "Configuration Management",
        "Traffic Analysis",
        "Security Monitoring",
      ],
      image: "/analytics1.png",
      category: "Information Technology",
    },
    {
      title: "Cybersecurity",
      subtitle: "Threat Protection",
      description:
        "Protect against cyber threats with automated security monitoring, incident response, and compliance management.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      features: [
        "Threat Detection",
        "Incident Response",
        "Security Monitoring",
        "Compliance Management",
        "Vulnerability Assessment",
        "Access Control",
      ],
      image: "/classic02.png",
      category: "Information Technology",
    },
    {
      title: "Asset Management",
      subtitle: "IT Asset Lifecycle",
      description:
        "Track and manage IT assets throughout their lifecycle with automated discovery, maintenance scheduling, and disposal tracking.",
      icon: <Package className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: [
        "Asset Discovery",
        "Lifecycle Management",
        "Maintenance Scheduling",
        "License Management",
        "Depreciation Tracking",
        "Disposal Management",
      ],
      image: "/process.png",
      category: "Information Technology",
    },
    {
      title: "Cloud Infrastructure",
      subtitle: "Cloud Resource Management",
      description:
        "Manage cloud resources with automated provisioning, cost optimization, and performance monitoring across multiple providers.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      features: [
        "Resource Provisioning",
        "Cost Optimization",
        "Performance Monitoring",
        "Multi-cloud Management",
        "Security Compliance",
        "Backup & Recovery",
      ],
      image: "/report1.png",
      category: "Information Technology",
    },
    {
      title: "Data Center Management",
      subtitle: "Facility Operations",
      description:
        "Monitor and manage data center operations with environmental controls, power management, and capacity planning.",
      icon: <Factory className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      features: [
        "Environmental Monitoring",
        "Power Management",
        "Capacity Planning",
        "Equipment Tracking",
        "Maintenance Scheduling",
        "Energy Optimization",
      ],
      image: "/classic04.png",
      category: "Information Technology",
    },
    {
      title: "IT Governance",
      subtitle: "IT Policy Management",
      description:
        "Establish IT governance with policy management, risk assessment, and compliance monitoring for enterprise standards.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      features: [
        "Policy Management",
        "Risk Assessment",
        "Compliance Monitoring",
        "Audit Trails",
        "Change Control",
        "Performance Metrics",
      ],
      image: "/dataform.png",
      category: "Information Technology",
    },
    {
      title: "Help Desk Automation",
      subtitle: "Automated Support",
      description:
        "Automate help desk operations with intelligent routing, self-service portals, and automated resolution workflows.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      features: [
        "Intelligent Routing",
        "Self-Service Portal",
        "Automated Workflows",
        "Knowledge Base",
        "Chat Integration",
        "Analytics Dashboard",
      ],
      image: "/process.png",
      category: "Information Technology",
    },
    {
      title: "Access Requests",
      subtitle: "Secure Access Management",
      description:
        "Eliminate security breaches and unauthorized access with automated access request workflows and approval processes.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      features: [
        "Access Request Workflows",
        "Approval Processes",
        "Security Compliance",
        "Role-Based Access",
        "Audit Trails",
        "Automated Provisioning",
      ],
      image: "/classic02.png",
      category: "Information Technology",
    },
    {
      title: "Appointment Scheduling",
      subtitle: "Never Miss an Appointment",
      description:
        "Streamline appointment booking and management with automated scheduling, reminders, and calendar integration.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      features: [
        "Automated Scheduling",
        "Calendar Integration",
        "Reminder System",
        "Resource Booking",
        "Availability Management",
        "Conflict Resolution",
      ],
      image: "/dataform.png",
      category: "Information Technology",
    },
    {
      title: "Meeting Room Booking",
      subtitle: "Organize Meetings Anywhere",
      description:
        "Manage meeting room reservations with real-time availability, automated booking, and resource management.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      features: [
        "Real-time Availability",
        "Automated Booking",
        "Resource Management",
        "Calendar Integration",
        "Conflict Prevention",
        "Usage Analytics",
      ],
      image: "/process.png",
      category: "Information Technology",
    },
    {
      title: "Contact Manager",
      subtitle: "Centralized Contact Management",
      description:
        "Manage all your contacts from a single place with advanced search, categorization, and communication tracking.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: [
        "Contact Database",
        "Advanced Search",
        "Categorization",
        "Communication History",
        "Import/Export",
        "Data Synchronization",
      ],
      image: "/dataform.png",
      category: "Information Technology",
    },
    {
      title: "Project Tracker App",
      subtitle: "Project Management Made Easy",
      description:
        "Plan, coordinate, and execute your projects from a single place with task tracking, team collaboration, and progress monitoring.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      features: [
        "Task Tracking",
        "Team Collaboration",
        "Progress Monitoring",
        "Timeline Management",
        "Resource Allocation",
        "Reporting Dashboard",
      ],
      image: "/report1.png",
      category: "Information Technology",
    },
    {
      title: "Safety Management",
      subtitle: "Workplace Safety Solutions",
      description:
        "Ensure a safe and productive workplace for your employees with incident tracking, safety inspections, and compliance management.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      features: [
        "Incident Tracking",
        "Safety Inspections",
        "Compliance Management",
        "Training Records",
        "Risk Assessment",
        "Safety Reporting",
      ],
      image: "/classic04.png",
      category: "Information Technology",
    },
    {
      title: "Online Seat Booking",
      subtitle: "Reservations Made Easy",
      description:
        "Streamline seat reservations with real-time availability, automated booking, and flexible cancellation policies.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      features: [
        "Real-time Availability",
        "Automated Booking",
        "Flexible Policies",
        "Reservation Management",
        "Waitlist System",
        "Usage Analytics",
      ],
      image: "/process.png",
      category: "Information Technology",
    },
    {
      title: "Task Management",
      subtitle: "Streamline Your Tasks",
      description:
        "Streamline your tasks to finish them faster with automated workflows, priority management, and team collaboration.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      features: [
        "Task Organization",
        "Priority Management",
        "Team Collaboration",
        "Deadline Tracking",
        "Progress Monitoring",
        "Automated Workflows",
      ],
      image: "/dataform.png",
      category: "Information Technology",
    },
    {
      title: "Online Time Tracker",
      subtitle: "Boost Productivity",
      description:
        "Track time to boost productivity with automated time tracking, project billing, and performance analytics.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      features: [
        "Automated Tracking",
        "Project Billing",
        "Performance Analytics",
        "Time Reports",
        "Productivity Insights",
        "Integration APIs",
      ],
      image: "/analytics1.png",
      category: "Information Technology",
    },
    {
      title: "Database Management",
      subtitle: "Data Infrastructure Control",
      description:
        "Manage databases with automated backups, performance monitoring, query optimization, and data security controls.",
      icon: <Package className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      features: [
        "Automated Backups",
        "Performance Monitoring",
        "Query Optimization",
        "Data Security",
        "Replication Management",
        "Capacity Planning",
      ],
      image: "/dataform.png",
      category: "Information Technology",
    },
    {
      title: "Backup & Recovery",
      subtitle: "Data Protection & Continuity",
      description:
        "Ensure business continuity with automated backups, disaster recovery planning, and data restoration capabilities.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      features: [
        "Automated Backups",
        "Disaster Recovery",
        "Data Restoration",
        "Retention Policies",
        "Compliance Management",
        "Recovery Testing",
      ],
      image: "/classic04.png",
      category: "Information Technology",
    },
    {
      title: "IT Training Management",
      subtitle: "Skills Development Platform",
      description:
        "Manage employee training programs with course catalogs, certification tracking, and learning management systems.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      features: [
        "Course Catalogs",
        "Certification Tracking",
        "Learning Paths",
        "Progress Monitoring",
        "Assessment Tools",
        "Compliance Training",
      ],
      image: "/process.png",
      category: "Information Technology",
    },
    {
      title: "Software License Management",
      subtitle: "License Compliance & Optimization",
      description:
        "Track software licenses, ensure compliance, and optimize license usage across your organization.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      features: [
        "License Tracking",
        "Compliance Monitoring",
        "Usage Analytics",
        "Renewal Management",
        "Cost Optimization",
        "Audit Preparation",
      ],
      image: "/analytics1.png",
      category: "Information Technology",
    },
    {
      title: "IT Procurement",
      subtitle: "Technology Acquisition",
      description:
        "Streamline IT procurement with vendor management, purchase approvals, and technology asset acquisition workflows.",
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: [
        "Vendor Management",
        "Purchase Approvals",
        "Budget Tracking",
        "Contract Management",
        "Asset Acquisition",
        "Supplier Evaluation",
      ],
      image: "/report1.png",
      category: "Information Technology",
    },
    {
      title: "Remote Desktop Management",
      subtitle: "Remote Access Solutions",
      description:
        "Enable secure remote access with desktop virtualization, session management, and remote support capabilities.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      features: [
        "Desktop Virtualization",
        "Session Management",
        "Remote Support",
        "Security Controls",
        "Performance Monitoring",
        "Access Logging",
      ],
      image: "/classic02.png",
      category: "Information Technology",
    },
    {
      title: "IT Documentation",
      subtitle: "Knowledge Base Management",
      description:
        "Create and maintain comprehensive IT documentation with version control, search capabilities, and collaboration tools.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-gray-500 to-slate-500",
      bgColor: "bg-gray-50",
      features: [
        "Version Control",
        "Search Capabilities",
        "Collaboration Tools",
        "Template Library",
        "Approval Workflows",
        "Access Permissions",
      ],
      image: "/dataform.png",
      category: "Information Technology",
    },
    {
      title: "IT Budget Management",
      subtitle: "Financial Planning & Control",
      description:
        "Manage IT budgets with cost tracking, forecasting, expense approvals, and financial reporting for IT operations.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      features: [
        "Cost Tracking",
        "Budget Forecasting",
        "Expense Approvals",
        "Financial Reporting",
        "ROI Analysis",
        "Cost Optimization",
      ],
      image: "/analytics1.png",
      category: "Information Technology",
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
            Optimize IT Operations with
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
            Streamline IT operations with automated service management,
            infrastructure monitoring, and comprehensive IT governance.
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
                  Ready to Transform Your IT Operations?
                </h3>
                <p className="text-gray-600">
                  Schedule a consultation with our enterprise solutions team to
                  discuss your specific IT requirements.
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

export default It;
