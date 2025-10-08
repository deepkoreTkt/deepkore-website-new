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

const Marketing = () => {
  const ratings = [4.7, 4.5, 4.9, 4.3, 4.8, 4.6, 4.2, 4.4, 4.1, 4.7];

  const templates = [
    {
      title: "Marketing Campaign Manager",
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
      title: "Content Management System",
      subtitle: "Centralized Content Creation",
      description:
        "Manage content creation, approval workflows, and distribution across all marketing channels with version control and collaboration tools.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      features: [
        "Content Planning",
        "Workflow Management",
        "Version Control",
        "Collaboration Tools",
        "Distribution Tracking",
        "Performance Analytics",
      ],
      image: "/dataform.png",
      category: "Marketing",
    },
    {
      title: "Email Marketing Automation",
      subtitle: "Intelligent Email Campaigns",
      description:
        "Create personalized email campaigns with automated segmentation, A/B testing, and comprehensive analytics for optimal engagement.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      features: [
        "Campaign Automation",
        "Audience Segmentation",
        "A/B Testing",
        "Personalization",
        "Analytics Dashboard",
        "Compliance Management",
      ],
      image: "/process.png",
      category: "Marketing",
    },
    {
      title: "Social Media Management",
      subtitle: "Unified Social Presence",
      description:
        "Manage all social media channels from a single platform with scheduling, engagement tracking, and cross-platform analytics.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-50",
      features: [
        "Multi-platform Management",
        "Content Scheduling",
        "Engagement Tracking",
        "Analytics Integration",
        "Community Management",
        "Brand Monitoring",
      ],
      image: "/analytics1.png",
      category: "Marketing",
    },
    {
      title: "SEO Optimization",
      subtitle: "Search Engine Visibility",
      description:
        "Optimize website content and performance with keyword tracking, competitor analysis, and automated SEO recommendations.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-orange-500 to-amber-500",
      bgColor: "bg-orange-50",
      features: [
        "Keyword Research",
        "Competitor Analysis",
        "Content Optimization",
        "Performance Tracking",
        "Technical SEO",
        "Reporting Tools",
      ],
      image: "/report1.png",
      category: "Marketing",
    },
    {
      title: "Customer Analytics",
      subtitle: "Behavioral Insights",
      description:
        "Gain deep customer insights with advanced analytics, segmentation, and predictive modeling for targeted marketing strategies.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50",
      features: [
        "Customer Segmentation",
        "Behavioral Analysis",
        "Predictive Modeling",
        "Journey Mapping",
        "Attribution Tracking",
        "Custom Dashboards",
      ],
      image: "/analytics1.png",
      category: "Marketing",
    },
    {
      title: "Brand Management",
      subtitle: "Consistent Brand Identity",
      description:
        "Maintain brand consistency across all touchpoints with asset management, style guides, and brand performance monitoring.",
      icon: <Building className="w-8 h-8" />,
      gradient: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      features: [
        "Brand Guidelines",
        "Asset Management",
        "Style Guide",
        "Brand Monitoring",
        "Consistency Checks",
        "Performance Metrics",
      ],
      image: "/classic02.png",
      category: "Marketing",
    },
    {
      title: "Event Management",
      subtitle: "Seamless Event Execution",
      description:
        "Plan and execute marketing events with registration management, attendee tracking, and post-event analytics and follow-up.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      features: [
        "Event Planning",
        "Registration Management",
        "Attendee Tracking",
        "Event Analytics",
        "Follow-up Automation",
        "Budget Management",
      ],
      image: "/dataform.png",
      category: "Marketing",
    },
    {
      title: "Influencer Marketing",
      subtitle: "Partnership Management",
      description:
        "Manage influencer partnerships with campaign tracking, performance measurement, and automated payment and contract management.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      features: [
        "Influencer Discovery",
        "Campaign Management",
        "Performance Tracking",
        "Contract Management",
        "Payment Processing",
        "ROI Analysis",
      ],
      image: "/process.png",
      category: "Marketing",
    },
    {
      title: "Marketing Automation",
      subtitle: "Intelligent Workflow Automation",
      description:
        "Automate marketing workflows with lead nurturing, customer journey mapping, and personalized communication sequences.",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      features: [
        "Workflow Automation",
        "Lead Nurturing",
        "Journey Mapping",
        "Personalization",
        "Integration APIs",
        "Performance Monitoring",
      ],
      image: "/classic04.png",
      category: "Marketing",
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
      category: "Marketing",
    },
    {
      title: "Custom CRM",
      subtitle: "Work Closely with Customers",
      description:
        "Build stronger customer relationships with personalized CRM solutions, advanced analytics, and seamless communication tools.",
      icon: <Users className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-500",
      bgColor: "bg-green-50",
      features: [
        "Customer Profiling",
        "Communication Tracking",
        "Sales Integration",
        "Analytics Dashboard",
        "Automation Rules",
        "Personalization",
      ],
      image: "/dataform.png",
      category: "Marketing",
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
            Elevate Your Marketing Strategy with
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
            Drive brand growth with intelligent marketing automation,
            comprehensive campaign management, and data-driven insights.
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
                  Ready to Transform Your Marketing Operations?
                </h3>
                <p className="text-gray-600">
                  Schedule a consultation with our enterprise solutions team to
                  discuss your specific marketing requirements.
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

export default Marketing;
