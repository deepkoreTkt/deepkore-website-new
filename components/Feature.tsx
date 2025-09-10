"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

// Feature card data
const features = [
  {
    title: "Data Form",
    description: "Visualize tasks and deadlines at a glance.",
    image: "/bg.png",
  },
  {
    title: "Process",
    description: "Manage projects with priorities and due dates.",
    image: "/classic02.png",
  },
  {
    title: "Integration",
    description: "Connect through task comments and updates.",
    image: "/globe.svg",
  },
  {
    title: "Analytics",
    description: "Stay updated with alerts for key changes.",
    image: "/window.svg",
  },
];

const powerfulFeatures = [
  {
    title: "Seamlessly integrate data",
    description: "Connect all your tools and data sources effortlessly",
    icon: "🔗",
  },
  {
    title: "Custom Fields - Tailor tasks to your workflow",
    description: "Create custom fields to match your specific needs",
    icon: "⚙️",
  },
  {
    title: "Real-Time Sync - Stay updated instantly",
    description: "Get instant updates across all your devices",
    icon: "⚡",
  },
];

const problems = [
  "missed deadlines",
  "disorganized workflows",
  "unnecessary complexity",
  "slow progress",
  "wasted time",
  "lack of collaboration",
  "task overload",
];

const stats = [
  { number: "300K+", label: "Team Collaborations" },
  { number: "500K+", label: "Tasks Completed" },
  { number: "15M+", label: "Projects Managed" },
  { number: "150K+", label: "Successful Integrations" },
];

const testimonials = [
  {
    quote:
      "Prismo has completely transformed how our team manages tasks. The platform has made our workflow seamless and boosted overall productivity.",
    author: "John Matthews",
    role: "Project Manager",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "With Prismo, we've streamlined our project management, reducing time spent on administrative tasks. It's user-friendly, and our team is now more efficient than ever.",
    author: "Sarah Collins",
    role: "Operations Lead",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "We saw a massive improvement in our team's collaboration and communication. Prismo helped us organize tasks efficiently, leading to better outcomes across all projects.",
    author: "David Chen",
    role: "Team Lead",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
];

const comparisonFeatures = [
  { other: "Limited Task Customization", prismo: "Everything in Basic +" },
  { other: "Slow Progress Tracking", prismo: "Real-Time Progress Updates" },
  { other: "Complex User Interface", prismo: "Intuitive User Experience" },
  { other: "Manual Data Entry Required", prismo: "Automated Data Entry" },
  {
    other: "Lack of Seamless Integration",
    prismo: "Seamless Integrations Across Tools",
  },
  { other: "No Bulk Actions Support", prismo: "Powerful Bulk Action Support" },
  {
    other: "Inconsistent Document Management",
    prismo: "Efficient Document Organization",
  },
  {
    other: "Limited Reporting Features",
    prismo: "Comprehensive Reporting Insights",
  },
];

const productFeatures = [
  {
    title: "File Sharing",
    description: "Easily upload and share project files securely.",
    icon: "📁",
  },
  {
    title: "Team Sync",
    description: "Keep your team aligned with real-time updates.",
    icon: "👥",
  },
  {
    title: "Time Tracker",
    description: "Log work hours directly within the platform.",
    icon: "⏱️",
  },
  {
    title: "Task Tags",
    description: "Organize tasks with editable tags for quick filtering.",
    icon: "🏷️",
  },
];

const uniqueFeatures = [
  {
    title: "Seamless Collaboration for Effective Meetings",
    description:
      "Easily schedule and manage meetings, collaborate in real-time, and keep everyone aligned for successful team interactions and faster decision-making.",
    icon: "🤝",
  },
  {
    title: "Organize Events and Share Documents",
    description:
      "Effortlessly manage events, share important documents, and collaborate with your team to ensure everything is in one place and easily accessible.",
    icon: "📅",
  },
  {
    title: "Efficient Planning and Real-Time Tracking",
    description:
      "Plan tasks, set priorities, and track progress with ease to ensure projects stay on track and deadlines are met with minimal effort.",
    icon: "📊",
  },
];

const faqs = [
  {
    question: "What is Prismo?",
    answer:
      "Prismo is a comprehensive project management platform designed to streamline workflows, enhance collaboration, and boost productivity for teams of all sizes.",
  },
  {
    question: "How does Prismo improve productivity?",
    answer:
      "By automating tasks, streamlining workflows, and enhancing collaboration, Prismo increases team productivity and efficiency.",
  },
  {
    question: "Is Prismo easy to use?",
    answer:
      "Yes, Prismo features an intuitive user interface that's designed to be user-friendly for both beginners and experienced users.",
  },
  {
    question: "Can I integrate Prismo with other tools?",
    answer:
      "Absolutely! Prismo offers seamless integrations with popular tools and platforms to enhance your workflow.",
  },
  {
    question: "Is Prismo suitable for small teams?",
    answer:
      "Yes, Prismo is designed to scale with your business, making it perfect for small teams, startups, and large enterprises alike.",
  },
];

export default function Feature() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            All Your Tasks, Organized Effortlessly
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features
            </h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
              Automate complex workflows without code
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prismo lets you design and automate processes with a simple
              drag-and-drop interface. Integrates seamlessly with your data and
              scales with your business. Streamline operations and reduce manual
              work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {powerfulFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Goodbye Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Wave goodbye to
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-red-600">
                  {problem}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-4">
                  {stat.number}
                </div>
                <div className="text-xl text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Our Users Are Saying About Us
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What Sets Prismo Apart
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-red-600 mb-8">
                OTHER PLATFORMS
              </h3>
              {comparisonFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-700">{feature.other}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center items-center">
              <motion.div
                className="text-4xl font-bold text-gray-400"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                VS
              </motion.div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-green-600 mb-8">PRISMO</h3>
              {comparisonFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-700">{feature.prismo}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Leading Enterprise Application Platform for Digital Transformation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover features designed to simplify workflows, boost
              productivity, and improve team collaboration seamlessly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {productFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="aspect-video bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">📊</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Unleash Prismo's Unique Potential for You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover Prismo's powerful and unique tools that set it apart,
              offering unmatched efficiency, customization, and collaboration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {uniqueFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Insights Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              How Deepkore will help you in different sectors
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-4">📊</div>
                  <h4 className="font-bold text-gray-800">Data Form</h4>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-4">⚙️</div>
                  <h4 className="font-bold text-gray-800">Process</h4>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-4">🔗</div>
                  <h4 className="font-bold text-gray-800">Integration</h4>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl mb-4">📈</div>
                  <h4 className="font-bold text-gray-800">Analytics</h4>
                </motion.div>
              </div>

              <motion.div
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4">
                  Marketing Insights for Better Results
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-lg">70% Increase in Engagement</span>
                    <span className="text-2xl">📈</span>
                  </div>
                  <p className="text-blue-100">
                    Marketing strategies utilizing data-driven insights lead to
                    70% boost in audience engagement.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">💰</div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">
                    50% Higher ROI
                  </h4>
                  <p className="text-gray-600">
                    Businesses leveraging advanced marketing tools report a 50%
                    higher return on investment.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl mb-2">🚀</div>
                  <h5 className="font-semibold text-gray-800">
                    Agile Workflow
                  </h5>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl mb-2">💬</div>
                  <h5 className="font-semibold text-gray-800">Communication</h5>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl mb-2">📄</div>
                  <h5 className="font-semibold text-gray-800">
                    Document Sharing
                  </h5>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl mb-2">🔒</div>
                  <h5 className="font-semibold text-gray-800">
                    Security Measures
                  </h5>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Start your 7-day free trial
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Start your free trial now to experience seamless project management
            without any commitment!
          </motion.p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
