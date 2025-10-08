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

const Product = () => {
  const ratings = [4.9, 4.3, 4.7, 4.5, 4.8, 4.2, 4.6, 4.4, 4.1, 4.9];

  const templates = [
    {
      title: "Product Management Suite",
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
      title: "Roadmap Planning",
      subtitle: "Strategic Product Planning",
      description:
        "Create and manage product roadmaps with timeline visualization, milestone tracking, and stakeholder alignment.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      features: [
        "Timeline Visualization",
        "Milestone Tracking",
        "Stakeholder Alignment",
        "Priority Management",
        "Resource Planning",
        "Progress Monitoring",
      ],
      image: "/analytics1.png",
      category: "Product",
    },
    {
      title: "Feature Request Management",
      subtitle: "Systematic Feature Development",
      description:
        "Collect, prioritize, and manage feature requests with voting systems, impact analysis, and development tracking.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      features: [
        "Request Collection",
        "Voting Systems",
        "Impact Analysis",
        "Priority Scoring",
        "Development Tracking",
        "User Communication",
      ],
      image: "/dataform.png",
      category: "Product",
    },
    {
      title: "User Feedback Collection",
      subtitle: "Continuous User Insights",
      description:
        "Gather and analyze user feedback through surveys, interviews, and analytics to drive product improvements.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: [
        "Survey Creation",
        "Feedback Analysis",
        "User Interviews",
        "Sentiment Tracking",
        "Trend Identification",
        "Action Planning",
      ],
      image: "/process.png",
      category: "Product",
    },
    {
      title: "Release Management",
      subtitle: "Streamlined Product Releases",
      description:
        "Manage product releases with version control, deployment automation, and rollback capabilities for reliable delivery.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      features: [
        "Version Control",
        "Deployment Automation",
        "Rollback Capabilities",
        "Testing Integration",
        "Release Notes",
        "Stakeholder Communication",
      ],
      image: "/classic02.png",
      category: "Product",
    },
    {
      title: "Competitive Analysis",
      subtitle: "Market Intelligence",
      description:
        "Monitor competitors with automated tracking, feature comparison, and market trend analysis for strategic positioning.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      features: [
        "Competitor Tracking",
        "Feature Comparison",
        "Market Analysis",
        "Trend Monitoring",
        "SWOT Analysis",
        "Strategic Planning",
      ],
      image: "/analytics1.png",
      category: "Product",
    },
    {
      title: "Product Analytics",
      subtitle: "Data-Driven Product Insights",
      description:
        "Track product performance with comprehensive analytics, user behavior analysis, and conversion optimization.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      features: [
        "Usage Analytics",
        "Conversion Tracking",
        "User Behavior",
        "Performance Metrics",
        "A/B Testing",
        "Custom Dashboards",
      ],
      image: "/report1.png",
      category: "Product",
    },
    {
      title: "Agile Development",
      subtitle: "Flexible Product Development",
      description:
        "Manage agile development processes with sprint planning, backlog management, and team collaboration tools.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      features: [
        "Sprint Planning",
        "Backlog Management",
        "Team Collaboration",
        "Burndown Charts",
        "Retrospective Tools",
        "Velocity Tracking",
      ],
      image: "/process.png",
      category: "Product",
    },
    {
      title: "User Research",
      subtitle: "Deep User Understanding",
      description:
        "Conduct user research with survey tools, usability testing, and persona development for user-centered design.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      features: [
        "Survey Tools",
        "Usability Testing",
        "Persona Development",
        "Journey Mapping",
        "User Interviews",
        "Research Analysis",
      ],
      image: "/dataform.png",
      category: "Product",
    },
    {
      title: "Product Strategy",
      subtitle: "Strategic Product Planning",
      description:
        "Develop product strategy with market analysis, goal setting, and KPI tracking for long-term product success.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-gray-500 to-slate-500",
      bgColor: "bg-gray-50",
      features: [
        "Market Analysis",
        "Goal Setting",
        "KPI Tracking",
        "Strategy Mapping",
        "Risk Assessment",
        "Performance Review",
      ],
      image: "/classic04.png",
      category: "Product",
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
            Accelerate Product Development with
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
            Manage product lifecycle with roadmap planning, feature requests,
            user feedback, and release management.
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
                  Ready to Transform Your Product Operations?
                </h3>
                <p className="text-gray-600">
                  Schedule a consultation with our enterprise solutions team to
                  discuss your specific product requirements.
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

export default Product;
