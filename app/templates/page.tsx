"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
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

const Templates = () => {
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);

  const templates = [
    {
      title: "HR Operations Overview",
      subtitle: "Modern Employee Experience",
      description:
        "Create a comprehensive HR ecosystem with recruitment, onboarding, performance management, and employee engagement.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      features: [
        "Recruitment Workflow",
        "Employee Onboarding",
        "Performance Reviews",
        "Leave Management",
        "Training Programs",
        "Engagement Surveys",
      ],
      image: "/classic04.png",
      category: "Human Resource",
      href: "/templates/hr",
    },
    {
      title: "Procurement Operations Overview",
      subtitle: "Streamlined Procurement Processes",
      description:
        "Automate procurement workflows with vendor management, purchase orders, approvals, and cost tracking.",
      icon: <ShoppingCart className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      features: [
        "Vendor Management",
        "Purchase Orders",
        "Approval Workflows",
        "Cost Tracking",
        "Contract Management",
        "Supplier Analytics",
      ],
      image: "/process.png",
      category: "Procurement",
      href: "/templates/procurement",
    },
    {
      title: "Finance Operations Overview",
      subtitle: "Intelligent Finance Management",
      description:
        "Streamline financial operations with automated approvals, expense tracking, budgeting, and compliance monitoring.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      features: [
        "Expense Management",
        "Budget Planning",
        "Invoice Processing",
        "Financial Reporting",
        "Compliance Tracking",
        "Audit Trails",
      ],
      image: "/report1.png",
      category: "Finance",
      href: "/templates/finance",
    },
    {
      title: "Admin Operations Overview",
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
      title: "Customer Support Overview",
      subtitle: "Exceptional Customer Service",
      description:
        "Deliver outstanding customer support with intelligent ticketing, knowledge base, and automated resolution.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      features: [
        "Smart Ticketing",
        "Knowledge Base",
        "Automated Responses",
        "Customer Analytics",
        "SLA Management",
        "Feedback Collection",
      ],
      image: "/dataform.png",
      category: "Customer Support",
      href: "/templates/customersupport",
    },
    {
      title: "Sales Operations Overview",
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
      title: "Marketing Operations Overview",
      subtitle: "Data-Driven Marketing Success",
      description:
        "Orchestrate multi-channel marketing campaigns with intelligent segmentation, performance tracking, and ROI optimization.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      features: [
        "Campaign Planning",
        "Audience Segmentation",
        "Performance Analytics",
        "Multi-channel Integration",
        "ROI Tracking",
        "A/B Testing",
      ],
      image: "/analytics1.png",
      category: "Marketing",
      href: "/templates/marketing",
    },
    {
      title: "Product Operations Overview",
      subtitle: "Accelerate Product Development",
      description:
        "Manage product lifecycle with roadmap planning, feature requests, user feedback, and release management.",
      icon: <Package className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      features: [
        "Roadmap Planning",
        "Feature Requests",
        "User Feedback",
        "Release Management",
        "Competitive Analysis",
        "Product Analytics",
      ],
      image: "/process.png",
      category: "Product",
      href: "/templates/product",
    },
    {
      title: "Engineering Operations Overview",
      subtitle: "Streamline Development Processes",
      description:
        "Optimize engineering workflows with code reviews, CI/CD pipelines, testing automation, and project tracking.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      features: [
        "Code Review Process",
        "CI/CD Pipelines",
        "Testing Automation",
        "Project Tracking",
        "Quality Gates",
        "Deployment Management",
      ],
      image: "/classic02.png",
      category: "Engineering",
      href: "/templates/engineering",
    },
    {
      title: "IT Operations Overview",
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
      title: "Hospital Operations Overview",
      subtitle: "Comprehensive Healthcare Operations",
      description:
        "Manage hospital operations with patient records, appointment scheduling, inventory tracking, and staff coordination.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      features: [
        "Patient Records",
        "Appointment Scheduling",
        "Inventory Tracking",
        "Staff Coordination",
        "Billing Management",
        "Compliance Reporting",
      ],
      image: "/report1.png",
      category: "Hospital",
      href: "/templates/hospital",
    },
    {
      title: "Healthcare Operations Overview",
      subtitle: "Streamlined Healthcare Processes",
      description:
        "Automate healthcare workflows with patient onboarding, treatment tracking, compliance monitoring, and data analytics.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      features: [
        "Patient Onboarding",
        "Treatment Tracking",
        "Compliance Monitoring",
        "Data Analytics",
        "Telemedicine Integration",
        "Quality Assurance",
      ],
      image: "/analytics1.png",
      category: "Healthcare",
      href: "/templates/healthcare",
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
                Ready-to-Use Templates
              </span>
            </div>
          </motion.div>

          <motion.h1
            className={`${inter.className} text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Accelerate Your
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 bg-clip-text text-transparent">
              {" "}
              Digital Transformation
            </span>
          </motion.h1>

          <motion.p
            className={`${inter.className} text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Jumpstart your projects with our comprehensive collection of
            AI-powered templates. Customize, deploy, and scale enterprise
            applications in minutes, not months.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              Browse All Templates
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
                <Link href={template.href ?? "/templates"}>
                  <button
                    className={`w-full py-2 px-4 bg-gradient-to-r ${template.gradient} text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105`}
                  >
                    Explore Template
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
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
              Ready to Build Something Amazing?
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Start with our templates and customize them to fit your unique
              business needs. Deploy faster, scale smarter, and innovate
              continuously.
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

export default Templates;
