"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import FloatingElements from "./FloatingElements";

const UseCase: React.FC = () => {
  const useCases = [
    {
      title: "Virtual Care Platform",
      description:
        "Build comprehensive telemedicine solutions with video consultations, appointment scheduling, and patient management for modern healthcare delivery.",
      features: [
        "Video Consultations",
        "Appointment Scheduling",
        "Patient Records",
        "Prescription Management",
      ],
      image: "/images/usecase-01.jpg",
      category: "Healthcare",
      link: "/blog",
    },
    {
      title: "Order Management System",
      description:
        "Streamline your entire order lifecycle from quote to cash with automated workflows, inventory tracking, and real-time analytics.",
      features: [
        "Order Processing",
        "Inventory Management",
        "Payment Integration",
        "Order Tracking",
      ],
      image: "/images/usecase-02.jpg",
      category: "E-commerce",
      link: "/blog",
    },
    {
      title: "Performance Management",
      description:
        "Create comprehensive employee performance tracking systems with goal setting, feedback collection, and performance analytics.",
      features: [
        "Goal Setting",
        "Performance Reviews",
        "Feedback Collection",
        "Analytics Dashboard",
      ],
      image: "/images/usecase-03.jpg",
      category: "HR",
      link: "/blog",
    },
    {
      title: "Supply Chain Management",
      description:
        "Build end-to-end supply chain visibility with real-time tracking, demand forecasting, and automated procurement workflows.",
      features: [
        "Demand Forecasting",
        "Supplier Management",
        "Inventory Optimization",
        "Real-time Tracking",
      ],
      image: "/images/usecase-04.jpg",
      category: "Logistics",
      link: "/blog",
    },
    {
      title: "Home Banking Portal",
      description:
        "Develop secure digital banking experiences with account management, transaction history, and payment processing capabilities.",
      features: [
        "Account Management",
        "Transaction History",
        "Payment Processing",
        "Security Features",
      ],
      image: "/images/usecase-05.jpg",
      category: "Banking",
      link: "/blog",
    },
    {
      title: "Insurance Portals & Apps",
      description:
        "Create comprehensive insurance management platforms with policy administration, claims processing, and customer self-service.",
      features: [
        "Policy Management",
        "Claims Processing",
        "Customer Portal",
        "Risk Assessment",
      ],
      image: "/images/usecase-06.jpg",
      category: "Insurance",
      link: "/blog",
    },
    {
      title: "Intelligent Automation",
      description:
        "Implement AI-powered automation solutions for repetitive tasks, document processing, and workflow optimization across departments.",
      features: [
        "Process Automation",
        "Document Processing",
        "Workflow Optimization",
        "AI Integration",
      ],
      image: "/images/usecase-07.jpg",
      category: "Automation",
      link: "/blog",
    },
    {
      title: "Customer Portal",
      description:
        "Build comprehensive customer self-service portals with account management, support ticketing, and knowledge base integration.",
      features: [
        "Account Management",
        "Support Ticketing",
        "Knowledge Base",
        "Self-Service Tools",
      ],
      image: "/images/usecase-08.jpg",
      category: "Customer Service",
      link: "/blog",
    },
    {
      title: "Learning Management System",
      description:
        "Develop comprehensive e-learning platforms with course management, progress tracking, and interactive learning modules.",
      features: [
        "Course Management",
        "Progress Tracking",
        "Interactive Content",
        "Assessment Tools",
      ],
      image: "/images/usecase-09.jpg",
      category: "Education",
      link: "/blog",
    },
    {
      title: "Asset Management Portal",
      description:
        "Create comprehensive asset tracking systems with maintenance scheduling, lifecycle management, and performance analytics.",
      features: [
        "Asset Tracking",
        "Maintenance Scheduling",
        "Lifecycle Management",
        "Performance Analytics",
      ],
      image: "/images/usecase-10.jpg",
      category: "Operations",
      link: "/blog",
    },
    {
      title: "Government Services Portal",
      description:
        "Build citizen-centric government portals with service requests, document management, and public information access.",
      features: [
        "Service Requests",
        "Document Management",
        "Public Information",
        "Citizen Portal",
      ],
      image: "/images/usecase-11.jpg",
      category: "Government",
      link: "/blog",
    },
    {
      title: "Manufacturing Execution",
      description:
        "Develop comprehensive manufacturing execution systems with production tracking, quality control, and operational efficiency.",
      features: [
        "Production Tracking",
        "Quality Control",
        "Resource Management",
        "Efficiency Analytics",
      ],
      image: "/images/usecase-12.jpg",
      category: "Manufacturing",
      link: "/blog",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#00A551]/10 to-[#2791D0]/10">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-r from-[#00A551] via-[#2791D0] to-[#00A551] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Use Cases & Applications
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
                Discover how businesses are transforming operations with our
                platform. From virtual care to intelligent automation, explore
                real-world applications that drive results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Use Cases Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100/50 h-full"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-100/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-100/30 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Category Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white text-xs font-semibold mb-4 shadow-lg">
                      <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                      {useCase.category}
                    </div>

                    {/* Image */}
                    <div className="w-full h-40 mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 relative group-hover:shadow-lg transition-shadow duration-300">
                      <Image
                        src={useCase.image}
                        alt={useCase.title}
                        width={400}
                        height={160}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=400&h=300&fit=crop&crop=center";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                      {useCase.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {useCase.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {useCase.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: featureIndex * 0.1,
                            }}
                            viewport={{ once: true }}
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-[#00A551] to-[#2791D0] rounded-full flex-shrink-0 shadow-sm"></div>
                            <span className="text-sm text-gray-700 font-medium">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href={useCase.link}
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-[#00A551] to-[#2791D0] hover:from-[#00A551]/90 hover:to-[#2791D0]/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Case Study</span>
                      <svg
                        className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build Your Solution?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                See how our platform can transform your business processes. Get
                started with a free trial or contact our experts for a
                personalized demo.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  className="px-10 py-4 bg-white text-[#8B5CF6] hover:bg-gray-100 font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.a>
                <motion.a
                  href="/getstarted"
                  className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-[#8B5CF6] font-bold rounded-2xl transition-all duration-300 text-lg"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCase;
