"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import {
  Building2,
  Users,
  Target,
  Search,
  ClipboardList,
  BarChart3,
  RefreshCw,
  Clock,
  Eye,
  Phone,
  TrendingDown,
  Shield,
  Zap,
  Workflow,
  PieChart,
  Link,
  Brain,
  Lock,
} from "lucide-react";
import FlowLines from "./FlowLines";

const CRM: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const workflowNodes = [
    {
      id: "reports",
      title: "Reports",
      shortTitle: "Reports",
      icon: "BarChart3",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 50, y: 30 }, // Center top position
      connections: [],
      details: {
        subtitle:
          "Sales Analytics, Performance Metrics, Customer Insights, Forecasting",
        processes: [
          "Sales Analytics",
          "Performance Metrics",
          "Customer Insights",
          "Forecasting",
        ],
      },
    },
    {
      id: "organizations",
      title: "Organizations",
      shortTitle: "Organizations",
      icon: "Building2",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 20, y: 65 },
      connections: ["reports"],
      details: {
        subtitle:
          "Account Management, Organization Hierarchy, Contact Directory, Relationship Mapping",
        processes: [
          "Account Management",
          "Organization Hierarchy",
          "Contact Directory",
          "Relationship Mapping",
        ],
      },
    },
    {
      id: "customers",
      title: "Customers",
      shortTitle: "Customers",
      icon: "Users",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 35, y: 75 },
      connections: ["reports"],
      details: {
        subtitle:
          "Customer Profiles, Purchase History, Support Tickets, Loyalty Programs",
        processes: [
          "Customer Profiles",
          "Purchase History",
          "Support Tickets",
          "Loyalty Programs",
        ],
      },
    },
    {
      id: "leads",
      title: "Leads",
      shortTitle: "Leads",
      icon: "Target",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 50, y: 80 },
      connections: ["reports"],
      details: {
        subtitle:
          "Lead Generation, Lead Scoring, Lead Nurturing, Conversion Tracking",
        processes: [
          "Lead Generation",
          "Lead Scoring",
          "Lead Nurturing",
          "Conversion Tracking",
        ],
      },
    },
    {
      id: "prospects",
      title: "Prospects",
      shortTitle: "Prospects",
      icon: "Search",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 65, y: 75 },
      connections: ["reports"],
      details: {
        subtitle:
          "Prospect Qualification, Opportunity Management, Sales Pipeline, Deal Tracking",
        processes: [
          "Prospect Qualification",
          "Opportunity Management",
          "Sales Pipeline",
          "Deal Tracking",
        ],
      },
    },
    {
      id: "tasks",
      title: "Tasks",
      shortTitle: "Tasks",
      icon: "ClipboardList",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 80, y: 65 },
      connections: ["reports"],
      details: {
        subtitle:
          "Task Assignment, Follow-up Scheduling, Activity Logging, Workflow Automation",
        processes: [
          "Task Assignment",
          "Follow-up Scheduling",
          "Activity Logging",
          "Workflow Automation",
        ],
      },
    },
  ];

  const challenges = [
    {
      icon: "RefreshCw",
      title: "Data Silos",
      description:
        "Customer data scattered across multiple disconnected systems and platforms.",
    },
    {
      icon: "Clock",
      title: "Manual Processes",
      description:
        "Time-consuming manual data entry and follow-up tasks that slow down sales teams.",
    },
    {
      icon: "Eye",
      title: "Lack of Visibility",
      description:
        "Limited visibility into customer interactions and sales pipeline performance.",
    },
    {
      icon: "Phone",
      title: "Inefficient Communication",
      description:
        "Poor coordination between sales, marketing, and customer service teams.",
    },
    {
      icon: "TrendingDown",
      title: "Inaccurate Forecasting",
      description:
        "Difficulty in predicting sales trends and customer behavior due to outdated data.",
    },
    {
      icon: "Shield",
      title: "Data Security Concerns",
      description:
        "Risks associated with storing sensitive customer information across multiple systems.",
    },
  ];

  const solutions = [
    {
      icon: "Zap",
      title: "Unified Customer View",
      description:
        "Consolidate all customer data into a single, comprehensive platform for better insights.",
    },
    {
      icon: "Workflow",
      title: "Automated Workflows",
      description:
        "Streamline lead management and follow-up processes with intelligent automation.",
    },
    {
      icon: "PieChart",
      title: "Real-Time Analytics",
      description:
        "Get instant visibility into sales performance and customer behavior patterns.",
    },
    {
      icon: "Link",
      title: "Integrated Communication",
      description:
        "Connect all customer-facing teams with seamless collaboration tools.",
    },
    {
      icon: "Brain",
      title: "Predictive Analytics",
      description:
        "Leverage AI-powered forecasting to predict sales trends and customer needs.",
    },
    {
      icon: "Lock",
      title: "Secure Data Management",
      description:
        "Enterprise-grade security with compliance features for sensitive customer data.",
    },
  ];

  const connections: [string, string][] = [];
  workflowNodes.forEach((node) => {
    node.connections.forEach((conn) => {
      connections.push([`#${node.id}`, `#${conn}`]);
    });
  });

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className={className} />;
      case "Users":
        return <Users className={className} />;
      case "Target":
        return <Target className={className} />;
      case "Search":
        return <Search className={className} />;
      case "ClipboardList":
        return <ClipboardList className={className} />;
      case "BarChart3":
        return <BarChart3 className={className} />;
      case "RefreshCw":
        return <RefreshCw className={className} />;
      case "Clock":
        return <Clock className={className} />;
      case "Eye":
        return <Eye className={className} />;
      case "Phone":
        return <Phone className={className} />;
      case "TrendingDown":
        return <TrendingDown className={className} />;
      case "Shield":
        return <Shield className={className} />;
      case "Zap":
        return <Zap className={className} />;
      case "Workflow":
        return <Workflow className={className} />;
      case "PieChart":
        return <PieChart className={className} />;
      case "Link":
        return <Link className={className} />;
      case "Brain":
        return <Brain className={className} />;
      case "Lock":
        return <Lock className={className} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <section
        id="crm"
        className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-40 lg:px-40 xl:px-40">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="px-6 py-3 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
                <span className="text-blue-400 font-medium text-sm tracking-wider uppercase">
                  CRM Solutions
                </span>
              </div>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Transform Customer Relationships with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 block mt-2">
                AI & Low-Code CRM
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Build comprehensive customer relationship management systems that
              drive growth. Empower your teams with intelligent CRM applications
              that adapt to your business needs.
            </motion.p>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/crm.svg"
                alt="CRM Dashboard Preview"
                className="max-w-250 h-auto mx-auto rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <a href="/getstarted">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-lg">
                  Get Started Today
                </button>
              </a>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg">
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* CRM Workflow Map Section */}
          {/* <motion.div
            className="mb-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h3
                className="text-3xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                CRM Workflow Map
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Explore our comprehensive CRM process flow and click on any
                module to learn more
              </motion.p>
            </div>

            
            <div className="bg-gradient-to-br from-blue-50/50 via-white to-green-50/30 rounded-3xl shadow-2xl border border-blue-200/30 overflow-hidden backdrop-blur-sm">
              <div
                id="workflow-container"
                className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] p-4 sm:p-6 md:p-8"
              >
              
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
                      `,
                      backgroundSize: "25px 25px",
                    }}
                  />
                </div>

          
                <FlowLines
                  containerId="workflow-container"
                  itemSelector=".workflow-node"
                  connections={connections}
                />

                {workflowNodes.map((node, index) => (
                  <motion.div
                    id={node.id}
                    className="absolute group cursor-pointer z-20 workflow-node"
                    style={{
                      left: `${node.position.x}%`,
                      top: `${node.position.y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() =>
                      setActiveSection(
                        activeSection === node.id ? null : node.id
                      )
                    }
                  >
                   
                    <motion.div
                      className="flex flex-col items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                     
                      <motion.div
                        className={`w-16 h-16 md:w-20 md:h-20 ${node.color} rounded-xl shadow-xl flex items-center justify-center mb-3 border-2 border-white/50 backdrop-blur-sm`}
                        whileHover={{
                          boxShadow: "0 15px 40px rgba(37, 99, 235, 0.3)",
                          y: -3,
                          scale: 1.02,
                        }}
                      >
                        {getIcon(
                          node.icon,
                          "text-white text-xl md:text-2xl drop-shadow-sm"
                        )}
                      </motion.div>

                      
                      <motion.div
                        className="text-center max-w-32 md:max-w-40"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        <h4 className="text-xs md:text-sm font-bold text-gray-800 leading-tight mb-2 px-2">
                          {node.shortTitle}
                        </h4>
                        <div className="w-10 h-0.5 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full" />
                      </motion.div>

                      
                      <motion.div
                        className="mt-2 text-blue-500"
                        animate={{
                          rotate: activeSection === node.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    </motion.div>

                    {hoveredNode === node.id && (
                      <motion.div
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-30"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <h5 className="font-bold text-gray-800 mb-2">
                          {node.title}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {node.details.subtitle}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

             
              {activeSection && (
                <motion.div
                  className="border-t border-gray-200 bg-white"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {workflowNodes
                    .filter((node) => node.id === activeSection)
                    .map((node) => (
                      <div key={node.id} className="p-6 md:p-8">
                        <div className="text-center mb-8">
                          <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
                            <div
                              className={`w-12 h-12 ${node.color} rounded-lg flex items-center justify-center mr-0 sm:mr-4 mb-4 sm:mb-0`}
                            >
                              {getIcon(node.icon, "text-white text-xl")}
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                              {node.title}
                            </h3>
                          </div>
                          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {node.details.subtitle}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                          {node.details.processes.map((process, idx) => (
                            <motion.div
                              key={idx}
                              className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-6 rounded-xl border border-gray-200/50 hover:shadow-lg transition-all duration-300"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              whileHover={{
                                scale: 1.02,
                                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                              }}
                            >
                              <div className="flex items-start">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                                <div>
                                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2">
                                    {process}
                                  </h4>
                                  <p className="text-gray-600 leading-relaxed text-sm">
                                    Streamline and automate your{" "}
                                    {process.toLowerCase()} with intelligent
                                    workflows and real-time insights.
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                </motion.div>
              )}
            </div>
          </motion.div> */}

          {/* Challenges Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h3
                className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Common CRM Challenges
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Traditional CRM systems face numerous obstacles that hinder
                customer relationship management
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    {getIcon(
                      challenge.icon,
                      "text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300"
                    )}
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-black mb-3 leading-tight">
                    {challenge.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {challenge.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.h3
                className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Deepkore Solutions for CRM
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Transform your customer relationships with our comprehensive
                low-code CRM platform
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-blue-50/60 to-green-50/60 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4">
                    {getIcon(
                      solution.icon,
                      "text-4xl md:text-5xl group-hover:scale-110 transition-transform duration-300"
                    )}
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-black mb-3 leading-tight">
                    {solution.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center bg-gradient-to-r from-blue-50/50 to-green-50/50 rounded-3xl p-12 md:p-16 border border-blue-200/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl md:text-4xl font-bold text-black mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Customer Relationships?
            </motion.h3>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join leading businesses using Deepkore to modernize their CRM
              operations and drive growth
            </motion.p>
            <a href="/getstarted">
              <motion.button
                className="px-12 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-lg mb-4"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Start Your CRM Transformation
              </motion.button>
            </a>

            <motion.p
              className="text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              • Setup in minutes
            </motion.p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CRM;
