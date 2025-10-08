"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Comparison from "@/components/Comparison";
import Link from "next/dist/client/link";
import {
  FileText,
  Cog,
  Link as LinkIcon,
  BarChart,
  FileBarChart,
  Shield,
  Workflow,
  Calculator,
  Zap,
  Settings,
  FolderOpen,
  Users,
  Clock,
  Tag,
  Handshake,
  Calendar,
  TrendingUp,
  DollarSign,
  GitBranch,
  Mail,
  File,
  Settings as SettingsIcon,
  Shuffle,
  Layers,
  Snail,
  Timer,
  Inbox,
  EyeOff,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
// Feature card data
const features = [
  {
    title: "Data Form",
    description: "Visualize tasks and deadlines at a glance.",
    icon: FileText,
    href: "/dataform",
  },
  {
    title: "Process",
    description: "Manage projects with priorities and due dates.",
    icon: Cog,
    href: "/process",
  },
  {
    title: "Integration",
    description: "Connect through task comments and updates.",
    icon: LinkIcon,
    href: "/integration",
  },
  {
    title: "Analytics",
    description: "Stay updated with alerts for key changes.",
    icon: BarChart,
    href: "/analytics",
  },
  {
    title: "Report",
    description: "Generate insightful reports with ease.",
    icon: FileBarChart,
    href: "/analytics",
  },
  {
    title: "Security",
    description: "Protect your data with advanced security features.",
    icon: Shield,
    href: "/governance",
  },
  {
    title: "Workflow Automation",
    description: "Connect all workflows to power enterprise-grade automation.",
    icon: Workflow,
    href: "/process",
  },
  {
    title: "Formula Builder",
    description: "Create custom formulas to automate calculations.",
    icon: Calculator,
    href: "/dataform",
  },
];

const powerfulFeatures = [
  {
    title: "Seamlessly integrate data",
    description: "Connect all your tools and data sources effortlessly",
    icon: LinkIcon,
  },
  {
    title: "Custom Fields - Tailor tasks to your workflow",
    description: "Create custom fields to match your specific needs",
    icon: Settings,
  },
  {
    title: "Real-Time Sync - Stay updated instantly",
    description: "Get instant updates across all your devices",
    icon: Zap,
  },
];

const problems = [
  { title: "Missed Deadlines", icon: Clock },
  { title: "Disorganized Workflows", icon: Shuffle },
  { title: "Unnecessary Complexity", icon: Layers },
  { title: "Slow Progress", icon: Snail },
  { title: "Wasted Time", icon: Timer },
  { title: "Lack of Collaboration", icon: Users },
  { title: "Task Overload", icon: Inbox },
  { title: "Poor Data Visibility", icon: EyeOff },
  { title: "Inefficient Communication", icon: MessageSquare },
];

const stats = [
  { number: "300K+", label: "Team Collaborations" },
  { number: "500K+", label: "Tasks Completed" },
  { number: "15M+", label: "Projects Managed" },
  { number: "150K+", label: "Successful Integrations" },
];

const testimonials = [
  {
    metric: "10X",
    metricLabel: "Revenue Boost",
    quote:
      "Deepkore has completely transformed how our team manages tasks. The platform has made our workflow seamless and boosted overall productivity.",
    author: "John Matthews",
    role: "Project Manager",
    avatar:
      "https://framerusercontent.com/images/OvvbpyjbKuCFO8zv5VOKScAJcA.png?width=184&height=185",
  },
  {
    metric: "2X",
    metricLabel: "Increase Efficiency",
    quote:
      "With Deepkore, we've streamlined our project management, reducing time spent on administrative tasks. It's user-friendly, and our team is now more efficient than ever.",
    author: "Sarah Collins",
    role: "Operations Lead",
    avatar:
      "https://framerusercontent.com/images/lGettqdhcKnvyoTl1qUpnGjew.png?width=184&height=185",
  },
  {
    metric: "5X",
    metricLabel: "Team Growth",
    quote:
      "We saw a massive improvement in our team's collaboration and communication. Deepkore helped us organize tasks efficiently, leading to better outcomes across all projects.",
    author: "David Chen",
    role: "Team Lead",
    avatar:
      "https://framerusercontent.com/images/1vLbGc8R4d4ZPbIcZw13RbjWkMw.png?width=184&height=185",
  },
  {
    metric: "3X",
    metricLabel: "Increased Productivity",
    quote:
      "We've increased our efficiency by at least 40% since implementing Deepkore. It's helped our team stay aligned and deliver exceptional results.",
    author: "Olivia Turner",
    role: "Operations Director",
    avatar:
      "https://framerusercontent.com/images/1vLbGc8R4d4ZPbIcZw13RbjWkMw.png?width=184&height=185",
  },
];

const comparisonFeatures = [
  { other: "Limited Task Customization", Deepkore: "Everything in Basic +" },
  { other: "Slow Progress Tracking", Deepkore: "Real-Time Progress Updates" },
  { other: "Complex User Interface", Deepkore: "Intuitive User Experience" },
  { other: "Manual Data Entry Required", Deepkore: "Automated Data Entry" },
  {
    other: "Lack of Seamless Integration",
    Deepkore: "Seamless Integrations Across Tools",
  },
  {
    other: "No Bulk Actions Support",
    Deepkore: "Powerful Bulk Action Support",
  },
  {
    other: "Inconsistent Document Management",
    Deepkore: "Efficient Document Organization",
  },
  {
    other: "Limited Reporting Features",
    Deepkore: "Comprehensive Reporting Insights",
  },
];

const productFeatures = [
  {
    title: "File Sharing",
    description: "Easily upload and share project files securely.",
    icon: FolderOpen,
  },
  {
    title: "Team Sync",
    description: "Keep your team aligned with real-time updates.",
    icon: Users,
  },
  {
    title: "Time Tracker",
    description: "Log work hours directly within the platform.",
    icon: Clock,
  },
  {
    title: "Task Tags",
    description: "Organize tasks with editable tags for quick filtering.",
    icon: Tag,
  },
];

const uniqueFeatures = [
  {
    title: "Seamless Collaboration for Effective Meetings",
    description:
      "Easily schedule and manage meetings, collaborate in real-time, and keep everyone aligned for successful team interactions and faster decision-making.",
    icon: Handshake,
  },
  {
    title: "Organize Events and Share Documents",
    description:
      "Effortlessly manage events, share important documents, and collaborate with your team to ensure everything is in one place and easily accessible.",
    icon: Calendar,
  },
  {
    title: "Efficient Planning and Real-Time Tracking",
    description:
      "Plan tasks, set priorities, and track progress with ease to ensure projects stay on track and deadlines are met with minimal effort.",
    icon: TrendingUp,
  },
];

const faqs = [
  {
    id: 1,
    title: "What is a Deepkore platform?",
    content:
      "An LCNC platform enables users to build applications without extensive coding knowledge. It provides visual interfaces, drag-and-drop features, and pre-built components, allowing both technical and non-technical users to create and customize apps quickly and efficiently.",
    category: "platform",
    tags: ["platform", "introduction", "overview"],
  },
  {
    id: 2,
    title: "Who can use this platform?",
    content:
      "Our platform is designed for everyone—from business professionals and project managers to software developers. No prior programming knowledge is required, so anyone looking to automate workflows, design custom apps, or streamline processes can benefit from it.",
    category: "platform",
    tags: ["users", "accessibility", "target audience"],
  },
  {
    id: 3,
    title: "How does Deepkore improve business productivity?",
    content:
      "Deepkore platforms speed up application development by reducing the time and complexity involved in coding. This allows businesses to launch solutions faster, automate routine tasks, and respond quickly to changes, thereby improving overall productivity.",
    category: "platform",
    tags: ["productivity", "efficiency", "business benefits"],
  },
  {
    id: 4,
    title: "Is coding knowledge required to use this platform?",
    content:
      "No, coding knowledge is not necessary. Our platform is intuitive and provides a drag-and-drop interface, along with pre-built templates, so you can create apps without writing a single line of code.",
    category: "platform",
    tags: ["coding", "no-code", "ease of use"],
  },
  {
    id: 5,
    title:
      "Can I scale applications built on this platform as my business grows?",
    content:
      "Absolutely! Applications built with our platform are flexible and scalable, ensuring that they can grow and adapt alongside your business needs.",
    category: "technical",
    tags: ["scalability", "growth", "flexibility"],
  },
  {
    id: 6,
    title: "What types of applications can I build using your platform?",
    content:
      "You can build a wide range of applications, including business process automation tools, customer relationship management (CRM) systems, project management apps, data collection forms, dashboards, and more. The possibilities are vast and customizable.",
    category: "features",
    tags: ["applications", "use cases", "capabilities"],
  },
  {
    id: 7,
    title: "How secure are the applications built on your platform?",
    content:
      "We prioritize security at every level. Our platform ensures data encryption, secure APIs, and compliance with industry-standard protocols, so the applications you build are safe and secure.",
    category: "technical",
    tags: ["security", "encryption", "compliance"],
  },
];

export default function Feature() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Features Section */}
      <section className="py-40 bg-gradient-to-br from-[#00A551]/10 to-[#2791D0]/10">
        <div className="max-w-7xl mx-auto px-8 md:px-40 lg:px-40">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            All Your Tasks, Organized Effortlessly
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="group bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col items-center text-center hover:shadow-2xl hover:bg-white/90 transition-all duration-300 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-6xl mb-6 text-[#00A551] flex justify-center">
                  <feature.icon />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                {feature.href && (
                  <Link
                    href={feature.href}
                    className="mt-4 inline-block text-blue-600 hover:underline"
                  >
                    Read more
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Powerful Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-40 lg:px-40">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Powerful Features
            </h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-8">
              Automate complex workflows without code
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              lets you design and automate processes with a simple drag-and-drop
              interface. Integrates seamlessly with your data and scales with
              your business. Streamline operations and reduce manual work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {powerfulFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 text-center hover:shadow-xl hover:bg-white/90 transition-all duration-300 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: "#00A551" }}
              >
                <div className="text-6xl mb-6 flex justify-center text-[#00A551]">
                  <feature.icon className="w-12 h-12" />
                </div>
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
        <div className="max-w-7xl mx-auto px-8 md:px-40 lg:px-40 text-center">
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
                <div className="flex items-center space-x-3">
                  <div className="text-2xl flex items-center">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-600">
                    {problem.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A551] to-[#2791D0] text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-40 lg:px-40">
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
                <div className="text-xl text-white">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <Comparison /> */}
      {/* Product Overview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-8 md:px-40 lg:px-40">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Leading Enterprise Application Platform forDigital Transformation
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
                  <div className="text-3xl flex items-center">
                    <feature.icon className="w-6 h-6" />
                  </div>
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
              <Image
                src="https://framerusercontent.com/images/ueZGlTIxd2iQuiPVws1AiA.png?width=900&height=664"
                alt="Dashboard"
                width={900}
                height={664}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unique Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-40 lg:px-40">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Unleash Deepkore&apos;s Unique Potential for you
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover Deepkore&apos;s powerful and unique tools that set it
              apart, offering unmatched efficiency, customization, and
              collaboration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {uniqueFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 hover:shadow-xl hover:bg-white/90 transition-all duration-300 border border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, borderColor: "#00A551" }}
              >
                <div className="text-5xl mb-6 flex justify-center">
                  <feature.icon className="w-10 h-10" text-black />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <Image
                src="https://framerusercontent.com/images/6LqMtTrytJZ09tRazNHOI13tQQ.svg?width=184&height=185"
                alt="Rachel Lewis"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="font-bold text-gray-800">Rachel Lewis</h4>
                <p className="text-gray-600">
                  Operations Manager, Velocity Tech
                </p>
              </div>
            </div>
            <blockquote className="text-gray-700 leading-relaxed italic">
              &ldquo;Deepkore has transformed how our team collaborates, tracks
              progress, and shares documents. It made our works more
              efficient&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Industry Insights Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A551]/5 to-[#2791D0]/5">
        <div className="max-w-7xl mx-auto px-8 md:px-40 lg:px-40">
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
                  className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg text-center hover:shadow-xl hover:bg-white/90 transition-all duration-300 border border-white/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <FileText className="w-12 h-12 mx-auto mb-4 text-[#00A551]" />
                  <h4 className="font-bold text-gray-800">Datafrom</h4>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Cog className="w-12 h-12 mx-auto mb-4 text-[#00A551]" />
                  <h4 className="font-bold text-gray-800">Process</h4>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <LinkIcon className="w-12 h-12 mx-auto mb-4 text-[#00A551]" />
                  <h4 className="font-bold text-gray-800">Intergration</h4>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <BarChart className="w-12 h-12 mx-auto mb-4 text-[#00A551]" />
                  <h4 className="font-bold text-gray-800">Analytics</h4>
                </motion.div>
              </div>

              <motion.div
                className="bg-gradient-to-r from-[#2791D0] to-[#00A551] text-white rounded-2xl p-8"
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
                    <BarChart className="w-8 h-8" />
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
                  <DollarSign className="w-10 h-10 mb-4 text-[#00A551]" />
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
                  <GitBranch className="w-8 h-8 mx-auto mb-2 text-[#00A551]" />
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
                  <Mail className="w-8 h-8 mx-auto mb-2 text-[#00A551]" />
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
                  <File className="w-8 h-8 mx-auto mb-2 text-[#00A551]" />
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
                  <SettingsIcon className="w-8 h-8 mx-auto mb-2 text-[#00A551]" />
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
        <div className="max-w-4xl mx-auto px-8 md:px-40 lg:px-30">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full text-left p-6 focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800">
                      {faq.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: openIndex === idx ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && faq.content && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.content}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Have Questions? We&apos;re Here to Help!
            </h3>
            <p className="text-gray-600 mb-6">
              Reach out to our support team for any queries or assistance.
            </p>
            <a
              href="/contact"
              className="bg-[#248aff] text-white px-6 py-3 rounded-full font-bold hover:bg-[#00A551]/90 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <Footer />
    </div>
  );
}
