"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Solution: React.FC = () => {
  const industries = [
    {
      title: "Sales & CRM",
      description:
        "Streamline your sales processes with comprehensive order management, customer tracking, and detailed sales analytics.",
      features: [
        "Sales Order Processing",
        "Sales Reporting",
        "Finished Product Master",
        "Customer Relationship Management",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
      link: "/solution/sales",
    },
    {
      title: "Human Resources",
      description:
        "Complete HR management solution covering employee lifecycle from onboarding to performance management.",
      features: [
        "Employee Master",
        "Employee On-Boarding",
        "Employee Off-Boarding",
        "Leave Processing",
        "HR Reports",
        "Performance Management",
      ],
      image:
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=300&fit=crop&crop=center",
      link: "/solution/hr",
    },
    {
      title: "Asset Management",
      description:
        "Comprehensive asset tracking and maintenance system for optimal resource utilization and cost control.",
      features: [
        "Asset Master",
        "Manpower Master",
        "Maintenance Request",
        "Maintenance Order",
        "Maintenance Reports",
      ],
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
      link: "/solution/assetmanagement",
    },
    {
      title: "AI Analytics & Reporting",
      description:
        "Advanced AI-powered analytics with interactive dashboards, predictive insights, and comprehensive reporting tools.",
      features: [
        "Analytics",
        "Charts and Graphs",
        "List Reporting",
        "Pivot Table",
        "Predictive Analytics",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
      link: "/solution/analytics",
    },
    {
      title: "Procurement & Supply Chain",
      description:
        "End-to-end procurement management from vendor selection to purchase order fulfillment and supplier performance tracking.",
      features: [
        "Material Master",
        "Vendor Master",
        "Purchase Indent",
        "Purchase Order",
        "Procurement Reports",
      ],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      link: "/solution/procurement",
    },
    {
      title: "Manufacturing & Production",
      description:
        "Complete manufacturing execution system with production planning, quality control, and operational efficiency tracking.",
      features: [
        "Finished Product Master",
        "Production Order",
        "Production Reports",
        "Quality Control",
        "Inventory Management",
      ],
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=300&fit=crop&crop=center",
      link: "/solution/manufacturing",
    },
    {
      title: "Banking & Financial Services",
      description:
        "Build secure digital banking solutions, streamline compliance processes, and deliver frictionless customer experiences with automated workflows.",
      features: [
        "Secure Transactions",
        "Compliance Automation",
        "Customer Onboarding",
        "Risk Management",
      ],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center",
      link: "/solution/banking",
    },
    {
      title: "Healthcare & Medical",
      description:
        "Transform patient experiences with connected healthcare ecosystems, streamline medical workflows, and ensure HIPAA compliance.",
      features: [
        "Patient Management",
        "Telemedicine",
        "Medical Records",
        "Appointment Scheduling",
      ],
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center",
      link: "/solution/healthcare",
    },
    {
      title: "Retail & E-commerce",
      description:
        "Create omnichannel retail experiences, optimize inventory management, and deliver personalized customer journeys.",
      features: [
        "POS Integration",
        "Inventory Sync",
        "Customer Analytics",
        "Loyalty Programs",
      ],
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
      link: "/solution/retail",
    },
    {
      title: "Education & E-learning",
      description:
        "Build digital learning platforms, streamline administrative processes, and enhance student engagement with interactive tools.",
      features: [
        "Learning Management",
        "Student Portal",
        "Assessment Tools",
        "Progress Tracking",
      ],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
      link: "/solution/education",
    },
    {
      title: "Government & Public Sector",
      description:
        "Deliver smarter digital government services, improve citizen engagement, and streamline public administration processes.",
      features: [
        "Citizen Services",
        "Document Management",
        "Permit Processing",
        "Public Records",
      ],
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop&crop=center",
      link: "/solution/government",
    },
    {
      title: "Logistics & Transportation",
      description:
        "Optimize supply chain operations with real-time tracking, route optimization, and comprehensive logistics management.",
      features: [
        "Fleet Management",
        "Route Optimization",
        "Shipment Tracking",
        "Warehouse Management",
      ],
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&crop=center",
      link: "/solution/transportation",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white">
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
                Business Solutions & Modules
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
                Comprehensive business management solutions covering Sales, HR,
                Procurement, Manufacturing, Analytics, and more. Transform your
                operations with our integrated platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* Header */}
                  <div className="p-5 pb-3">
                    <div className="w-full h-32 mb-4 overflow-hidden rounded-lg bg-gray-100 relative">
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "https://images.unsplash.com/photo-1486312338219-ce68e2c6f44d?w=400&h=300&fit=crop&crop=center";
                        }}
                      />
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <motion.div
                        className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.1 }}
                      >
                        <svg
                          className="w-3 h-3 text-gray-600"
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
                      </motion.div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#8112db] transition-colors">
                      {industry.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {industry.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="px-5 pb-3">
                    <div className="space-y-1.5">
                      {industry.features
                        .slice(0, 4)
                        .map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-1 h-1 bg-[#8112db] rounded-full flex-shrink-0"></div>
                            <span className="text-xs text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="px-5 pb-4">
                    <motion.a
                      href={industry.link}
                      className="inline-flex items-center space-x-2 text-[#8112db] font-medium text-sm hover:text-[#8112db]/80 transition-colors group"
                      whileHover={{ x: 3 }}
                    >
                      <span>Learn More</span>
                      <svg
                        className="w-3 h-3 group-hover:translate-x-1 transition-transform"
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

        {/* Bottom CTA */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-[#8112db]/5 to-[#8112db]/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Don&#39;t see your industry?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our flexible platform adapts to any business need. Contact us
                  to discuss your specific requirements and discover how
                  Deepkore can transform your operations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    className="px-8 py-3 bg-[#8112db] hover:bg-[#8112db]/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Sales
                  </motion.a>
                  <motion.a
                    href="/getstarted"
                    className="px-8 py-3 border-2 border-[#8112db] text-[#8112db] hover:bg-[#8112db] hover:text-white font-semibold rounded-xl transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Free Trial
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solution;
