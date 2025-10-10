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

const Healthcare = () => {
  const ratings = [4.9, 4.5, 4.8, 4.6, 4.3, 4.7, 4.2, 4.4, 4.1, 4.9];

  const templates = [
    {
      title: "Healthcare Workflow Automation",
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
    {
      title: "Patient Care Coordination",
      subtitle: "Integrated Care Management",
      description:
        "Coordinate patient care across multiple providers with centralized records, care plans, and communication tools.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      features: [
        "Care Coordination",
        "Provider Communication",
        "Care Plans",
        "Patient Monitoring",
        "Referral Management",
        "Outcome Tracking",
      ],
      image: "/dataform.png",
      category: "Healthcare",
    },
    {
      title: "Clinical Decision Support",
      subtitle: "Evidence-Based Care",
      description:
        "Support clinical decision-making with evidence-based guidelines, drug interaction alerts, and diagnostic assistance.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      features: [
        "Clinical Guidelines",
        "Drug Interactions",
        "Diagnostic Support",
        "Risk Assessment",
        "Treatment Protocols",
        "Quality Metrics",
      ],
      image: "/process.png",
      category: "Healthcare",
    },
    {
      title: "Population Health Management",
      subtitle: "Community Health Analytics",
      description:
        "Manage population health with risk stratification, preventive care programs, and health outcome analytics.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: [
        "Risk Stratification",
        "Preventive Care",
        "Health Analytics",
        "Patient Segmentation",
        "Outcome Measurement",
        "Care Gap Analysis",
      ],
      image: "/analytics1.png",
      category: "Healthcare",
    },
    {
      title: "Medical Practice Management",
      subtitle: "Clinic Operations",
      description:
        "Manage medical practice operations with appointment scheduling, patient registration, billing, and administrative workflows.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      features: [
        "Appointment Scheduling",
        "Patient Registration",
        "Medical Billing",
        "Practice Analytics",
        "Staff Management",
        "Compliance Tracking",
      ],
      image: "/report1.png",
      category: "Healthcare",
    },
    {
      title: "Chronic Disease Management",
      subtitle: "Long-term Care Coordination",
      description:
        "Manage chronic conditions with care plans, patient monitoring, medication management, and lifestyle tracking.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      features: [
        "Care Plans",
        "Patient Monitoring",
        "Medication Management",
        "Lifestyle Tracking",
        "Symptom Monitoring",
        "Care Team Coordination",
      ],
      image: "/classic04.png",
      category: "Healthcare",
    },
    {
      title: "Healthcare Compliance Management",
      subtitle: "Regulatory Compliance",
      description:
        "Ensure healthcare compliance with automated monitoring, audit trails, risk assessments, and regulatory reporting.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      features: [
        "Compliance Monitoring",
        "Audit Trails",
        "Risk Assessment",
        "Regulatory Reporting",
        "Policy Management",
        "Training Tracking",
      ],
      image: "/classic02.png",
      category: "Healthcare",
    },
    {
      title: "Healthcare Data Analytics",
      subtitle: "Clinical Insights & Reporting",
      description:
        "Analyze healthcare data with clinical outcomes, operational metrics, patient satisfaction, and performance dashboards.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      features: [
        "Clinical Outcomes",
        "Operational Metrics",
        "Patient Satisfaction",
        "Performance Dashboards",
        "Quality Reporting",
        "Predictive Analytics",
      ],
      image: "/analytics1.png",
      category: "Healthcare",
    },
    {
      title: "Telehealth Platform",
      subtitle: "Remote Healthcare Delivery",
      description:
        "Deliver healthcare remotely with video consultations, remote monitoring, secure messaging, and virtual care coordination.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      features: [
        "Video Consultations",
        "Remote Monitoring",
        "Secure Messaging",
        "Virtual Care",
        "Appointment Scheduling",
        "Integration APIs",
      ],
      image: "/process.png",
      category: "Healthcare",
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

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 xl:px-40 py-24">
        {/* Hero Section */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className={`${inter.className} text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight text-center px-4 md:px-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Transform Healthcare Delivery with
            <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 bg-clip-text text-transparent">
              {" "}
              Enterprise-Ready Templates
            </span>
          </motion.h1>

          <motion.p
            className={`${inter.className} text-base md:text-lg text-gray-600 mb-8 text-center mx-auto max-w-3xl`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Streamline healthcare workflows with automated patient care,
            clinical decision support, and comprehensive care coordination.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <a href="/getstarted">
              <button className="px-6 md:px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium rounded-lg shadow-sm hover:bg-blue-700 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
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
          <div className="bg-white rounded-lg p-4 md:p-6 lg:p-8 border border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Ready to Transform Your Healthcare Delivery?
                </h3>
                <p className="text-gray-600">
                  Schedule a consultation with our enterprise solutions team to
                  discuss your specific healthcare workflow requirements.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/getstarted">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto">
                    Request Demo
                  </button>
                </a>
                <a href="/contact">
                  <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto">
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

export default Healthcare;
