"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const Manufacturing: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const workflowNodes = [
    {
      id: "marketing",
      title: "Marketing & Promotion",
      shortTitle: "Marketing & Promotion",
      icon: "📢",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 15, y: 50 },
      connections: ["sales"],
      details: {
        subtitle:
          "Lead Management, Campaign Management, Trade Promotions, Channel Rebates & MDFs",
        processes: [
          "Lead Management",
          "Campaign Management",
          "Trade Promotions",
          "Channel Rebates and MDFs",
        ],
      },
    },
    {
      id: "sales",
      title: "Sales & Distribution",
      shortTitle: "Sales & Distribution",
      icon: "🛒",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 30, y: 50 },
      connections: ["quotes"],
      details: {
        subtitle:
          "Opportunity Management, Partner Relationship, Field Visits, E-commerce Orders",
        processes: [
          "Opportunity Management",
          "Partner Relationship Management",
          "Field Visits",
          "E-commerce Orders Processing",
        ],
      },
    },
    {
      id: "support",
      title: "Customer Support",
      shortTitle: "Customer Support",
      icon: "👥",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 85, y: 50 },
      connections: ["compliance"],
      details: {
        subtitle:
          "Omnichannel Case Management, Warranty Management, Dispatching, Returns Processing",
        processes: [
          "Omnichannel Case Management",
          "Warranty Management",
          "Dispatching",
          "Returns Processing",
        ],
      },
    },
    {
      id: "quotes",
      title: "Quotes, Orders, and Invoices",
      shortTitle: "Quotes, Orders, and Invoices",
      icon: "�",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 45, y: 50 },
      connections: ["procurement", "production"],
      details: {
        subtitle:
          "Product Catalog, Quote Management, Order Processing, Billing & Invoicing",
        processes: [
          "Product Catalog and Configuration",
          "Quote Management",
          "Order Processing",
          "Billing and Invoicing",
        ],
      },
    },
    {
      id: "production",
      title: "Production Management",
      shortTitle: "Production Management",
      icon: "⚙️",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 60, y: 50 },
      connections: ["supply"],
      details: {
        subtitle:
          "Product Lifecycle, Resource Assignment, Work Order Management, Performance Monitoring",
        processes: [
          "Product Lifecycle Management",
          "Resource Assignment",
          "Work Order Management",
          "Performance Monitoring",
        ],
      },
    },
    {
      id: "procurement",
      title: "Procurement",
      shortTitle: "Procurement",
      icon: "�",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 45, y: 25 },
      connections: ["production"],
      details: {
        subtitle:
          "Request Management, Vendor Management, Procurement Lifecycle, RFx Management",
        processes: [
          "Request Management",
          "Vendor Management",
          "Procurement Lifecycle Management",
          "RFx Management",
        ],
      },
    },
    {
      id: "supply",
      title: "Supply Chain Management",
      shortTitle: "Supply Chain Management",
      icon: "🚚",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 75, y: 50 },
      connections: ["support"],
      details: {
        subtitle:
          "Supply Chain Planning, Shipment Lifecycle, Inventory Planning & Control",
        processes: [
          "Supply Chain Planning & Tracking",
          "Shipment Lifecycle Management",
          "Inventory Planning & Control",
        ],
      },
    },
    {
      id: "corporate",
      title: "Corporate Services",
      shortTitle: "Corporate Services",
      icon: "🏢",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 85, y: 75 },
      connections: [],
      details: {
        subtitle:
          "Employee Lifecycle, Employee Requests, Collaboration & Knowledge",
        processes: [
          "Employee Lifecycle",
          "Employee Request Management",
          "Collaboration & Knowledge Sharing",
        ],
      },
    },
    {
      id: "compliance",
      title: "Risk & Compliance Management",
      shortTitle: "Risk & Compliance Management",
      icon: "🛡️",
      color: "bg-gradient-to-r from-blue-600 to-green-600",
      position: { x: 85, y: 25 },
      connections: ["corporate"],
      details: {
        subtitle:
          "Customer Privacy, Regulatory Compliance, Legal Case Management, Internal Audit",
        processes: [
          "Customer Privacy Management",
          "Regulatory Compliance Control",
          "Legal Case Management",
          "Internal Audit",
        ],
      },
    },
  ];

  const challenges = [
    {
      icon: "⏱️",
      title: "Slow Development Cycles",
      description:
        "Traditional manufacturing systems take months or years to develop and deploy.",
    },
    {
      icon: "📝",
      title: "Manual Paper-Based Processes",
      description:
        "Reliance on manual approvals and paperwork slows down operations and increases errors.",
    },
    {
      icon: "🔗",
      title: "Siloed Systems",
      description:
        "Disconnected systems across production, inventory, and quality control hinder efficiency.",
    },
    {
      icon: "⚙️",
      title: "Rigid ERP Limitations",
      description:
        "Outdated ERP systems lack flexibility to adapt to changing manufacturing needs.",
    },
    {
      icon: "🏗️",
      title: "Legacy System Issues",
      description:
        "Aging infrastructure that's expensive to maintain and difficult to integrate.",
    },
    {
      icon: "💸",
      title: "Technical Debt",
      description:
        "Accumulated inefficiencies from quick fixes and outdated technologies.",
    },
  ];

  const solutions = [
    {
      icon: "🚀",
      title: "Rapid Application Development",
      description:
        "Build and deploy manufacturing applications in weeks, not months, with our low-code platform.",
    },
    {
      icon: "🤖",
      title: "AI-Powered Automation",
      description:
        "Automate approvals, quality checks, and reporting with intelligent workflows.",
    },
    {
      icon: "🔄",
      title: "Integrated Systems",
      description:
        "Connect all your manufacturing processes into a unified, composable platform.",
    },
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description:
        "Get instant insights into production metrics, inventory levels, and quality data.",
    },
    {
      icon: "☁️",
      title: "Cloud-Native Architecture",
      description:
        "Scalable, secure, and flexible infrastructure that grows with your business.",
    },
    {
      icon: "🔧",
      title: "Modern Tech Stack",
      description:
        "Leverage cutting-edge AI and machine learning to optimize manufacturing operations.",
    },
  ];

  return (
    <div>
      <Header />
      <section
        id="manufacturing"
        className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 xl:px-40">
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
                  Manufacturing Solutions
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
              Transform Manufacturing with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 block mt-2">
                AI & Low-Code
              </span>
            </motion.h2>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Break down silos and build integrated manufacturing systems that
              work in harmony. Empower your teams with composable applications
              that adapt to your evolving needs.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-lg">
                Get Started Today
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg">
                Watch Demo
              </button>
            </motion.div>
          </motion.div>

          {/* Manufacturing Workflow Map Section */}
          <motion.div
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
                Manufacturing Workflow Map
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Explore our comprehensive manufacturing process flow and click
                on any department to learn more
              </motion.p>
            </div>

            {/* Visual Workflow Diagram */}
            <div className="bg-gradient-to-br from-blue-50/50 via-white to-green-50/30 rounded-3xl shadow-2xl border border-blue-200/30 overflow-hidden backdrop-blur-sm">
              <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] p-4 sm:p-6 md:p-8">
                {/* Background Grid */}
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

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  <defs>
                    <linearGradient
                      id="blueGreenGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                    <marker
                      id="arrowhead"
                      markerWidth="8"
                      markerHeight="6"
                      refX="8"
                      refY="3"
                      orient="auto"
                    >
                      <path
                        d="M0,0 L8,3 L0,6"
                        fill="none"
                        stroke="url(#blueGreenGradient)"
                        strokeWidth="1"
                      />
                    </marker>
                  </defs>

                  {/* Marketing to Sales */}
                  <motion.path
                    d={`M ${15 * 10},${50 * 5} C ${22 * 10},${45 * 5} ${
                      23 * 10
                    },${45 * 5} ${30 * 10},${50 * 5}`}
                    stroke="url(#blueGreenGradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Sales to Quotes */}
                  <motion.path
                    d={`M ${30 * 10},${50 * 5} C ${37 * 10},${45 * 5} ${
                      38 * 10
                    },${45 * 5} ${45 * 10},${50 * 5}`}
                    stroke="url(#blueGreenGradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Quotes to Procurement */}
                  <motion.path
                    d={`M ${45 * 10},${50 * 5} C ${45 * 10},${35 * 5} ${
                      45 * 10
                    },${35 * 5} ${45 * 10},${25 * 5}`}
                    stroke="url(#blueGreenGradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.4 }}
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Quotes to Production */}
                  <motion.path
                    d={`M ${45 * 10},${50 * 5} C ${52 * 10},${45 * 5} ${
                      55 * 10
                    },${45 * 5} ${60 * 10},${50 * 5}`}
                    stroke="url(#blueGreenGradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Production to Supply Chain */}
                  <motion.path
                    d={`M ${60 * 10},${50 * 5} C ${67 * 10},${45 * 5} ${
                      68 * 10
                    },${45 * 5} ${75 * 10},${50 * 5}`}
                    stroke="url(#blueGreenGradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Supply Chain to Customer Support */}
                  <motion.path
                    d={`M ${75 * 10},${50 * 5} C ${80 * 10},${45 * 5} ${
                      80 * 10
                    },${45 * 5} ${85 * 10},${50 * 5}`}
                    stroke="url(#blueGreenGradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.7 }}
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Customer Support to Risk & Compliance */}
                  <motion.path
                    d={`M ${85 * 10},${50 * 5} C ${85 * 10},${35 * 5} ${
                      85 * 10
                    },${35 * 5} ${85 * 10},${25 * 5}`}
                    stroke="url(#blueGreenGradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.8 }}
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Risk & Compliance to Corporate Services */}
                  <motion.path
                    d={`M ${85 * 10},${25 * 5} C ${85 * 10},${50 * 5} ${
                      85 * 10
                    },${50 * 5} ${85 * 10},${75 * 5}`}
                    stroke="url(#blueGreenGradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.9 }}
                    markerEnd="url(#arrowhead)"
                  />
                </svg>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                  {workflowNodes.map((node) =>
                    node.connections.map((targetId) => {
                      const target = workflowNodes.find(
                        (n) => n.id === targetId
                      );
                      if (!target) return null;

                      // Calculate start and end points
                      const startX = node.position.x * 10;
                      const startY = node.position.y * 5;
                      const endX = target.position.x * 10;
                      const endY = target.position.y * 5;

                      // Calculate control points for smoother curves
                      const midX = (startX + endX) / 2;

                      // Vertical offset for control points
                      const controlY =
                        Math.abs(endY - startY) > 50
                          ? (startY + endY) / 2 // For vertical connections
                          : startY; // For horizontal connections

                      // Generate path
                      const path = `M ${startX},${startY} C ${midX},${controlY} ${midX},${controlY} ${endX},${endY}`;

                      return (
                        <motion.path
                          key={`${node.id}-${targetId}`}
                          d={path}
                          stroke="url(#blueGreenGradient)"
                          strokeWidth="3"
                          strokeDasharray="8,4"
                          fill="none"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.8 }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                          markerEnd="url(#arrowhead)"
                        />
                      );
                    })
                  )}

                  {/* Sales to Quotes */}
                  <motion.path
                    d={`M ${22 * 10},${50 * 5} C ${29 * 10},${50 * 5} ${
                      29 * 10
                    },${50 * 5} ${36 * 10},${50 * 5}`}
                    stroke="url(#blueGreenGradient)"
                    strokeWidth="3"
                    strokeDasharray="8,4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Quotes to Procurement */}
                  <motion.path
                    d={`M ${36 * 10},${50 * 5} C ${43 * 10},${50 * 5} ${
                      43 * 10
                    },${30 * 5} ${50 * 10},${30 * 5}`}
                    stroke="url(#blueGreenGradient)"
                    strokeWidth="3"
                    strokeDasharray="8,4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Procurement to Production */}
                  <motion.path
                    d={`M ${50 * 10},${30 * 5} C ${50 * 10},${50 * 5} ${
                      50 * 10
                    },${50 * 5} ${50 * 10},${70 * 5}`}
                    stroke="url(#blueGreenGradient)"
                    strokeWidth="3"
                    strokeDasharray="8,4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Production to Supply Chain */}
                  <motion.path
                    d={`M ${50 * 10},${70 * 5} C ${57 * 10},${70 * 5} ${
                      57 * 10
                    },${50 * 5} ${64 * 10},${50 * 5}`}
                    stroke="url(#blueGreenGradient)"
                    strokeWidth="3"
                    strokeDasharray="8,4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 1.5, delay: 1.0 }}
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Supply Chain to Customer Support */}
                  <motion.path
                    d={`M ${64 * 10},${50 * 5} C ${71 * 10},${50 * 5} ${
                      71 * 10
                    },${50 * 5} ${78 * 10},${50 * 5}`}
                    stroke="url(#blueGreenGradient)"
                    strokeWidth="3"
                    strokeDasharray="8,4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Customer Support to Compliance */}
                  <motion.path
                    d={`M ${78 * 10},${50 * 5} C ${81.5 * 10},${50 * 5} ${
                      81.5 * 10
                    },${25 * 5} ${85 * 10},${25 * 5}`}
                    stroke="url(#blueGreenGradient)"
                    strokeWidth="3"
                    strokeDasharray="8,4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 1.5, delay: 1.4 }}
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Compliance to Corporate */}
                  <motion.path
                    d={`M ${85 * 10},${25 * 5} C ${85 * 10},${50 * 5} ${
                      85 * 10
                    },${50 * 5} ${85 * 10},${75 * 5}`}
                    stroke="url(#blueGreenGradient)"
                    strokeWidth="3"
                    strokeDasharray="8,4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 1.5, delay: 1.6 }}
                    markerEnd="url(#arrowhead)"
                  />

                  {/* Arrow Marker Definition */}
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon
                        points="0 0, 10 3.5, 0 7"
                        fill="url(#blueGreenGradient)"
                      />
                    </marker>
                  </defs>

                  {/* SVG Gradient Definition */}
                  <defs>
                    <linearGradient
                      id="blueGreenGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="100%" stopColor="#16a34a" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Workflow Nodes */}
                {workflowNodes.map((node, index) => (
                  <motion.div
                    key={node.id}
                    className="absolute group cursor-pointer z-20"
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
                    {/* Department Node */}
                    <motion.div
                      className="flex flex-col items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Icon Container */}
                      <motion.div
                        className={`w-16 h-16 md:w-20 md:h-20 ${node.color} rounded-xl shadow-xl flex items-center justify-center mb-3 border-2 border-white/50 backdrop-blur-sm`}
                        whileHover={{
                          boxShadow: "0 15px 40px rgba(37, 99, 235, 0.3)",
                          y: -3,
                          scale: 1.02,
                        }}
                      >
                        <span className="text-white text-xl md:text-2xl drop-shadow-sm">
                          {node.icon}
                        </span>
                      </motion.div>

                      {/* Title */}
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

                      {/* Dropdown Arrow */}
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

                    {/* Hover Effect */}
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

              {/* Expanded Section Details */}
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
                              <span className="text-white text-xl">
                                {node.icon}
                              </span>
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
          </motion.div>

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
                Common Manufacturing Challenges
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Traditional manufacturing systems face numerous obstacles that
                hinder efficiency and growth
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
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {challenge.icon}
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
                Deepkore Solutions for Manufacturing
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Transform your manufacturing operations with our comprehensive
                low-code platform
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
                  <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
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
              Ready to Transform Your Manufacturing Operations?
            </motion.h3>

            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join leading manufacturers using Deepkore to modernize their
              operations and stay competitive
            </motion.p>

            <motion.button
              className="px-12 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-lg mb-4"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Start Your Manufacturing Transformation
            </motion.button>

            <motion.p
              className="text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              No credit card required • 14-day free trial • Setup in minutes
            </motion.p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Manufacturing;
