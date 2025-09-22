"use client";

import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const Governance = () => {
  return (
    <>
      <Header />
      <main className={`${inter.className} min-h-screen`}>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-green-50">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 bg-clip-text text-transparent">
                  AI-Powered Governance
                </span>
                <br />
                for Enterprise Applications
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Harness the power of artificial intelligence to maintain
                proactive control, ensure enterprise-grade security, and achieve
                intelligent compliance through advanced pattern analysis,
                real-time anomaly detection, and predictive insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                </button>
                <button className="px-8 py-4 border-2 border-blue-500 text-blue-500 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300">
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Powerful Intelligence Right Where You Need It
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transform your governance approach with AI-driven capabilities
                that adapt to your business needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Data Quality & Consistency
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ensure unparalleled data integrity across all your
                  applications with AI-powered validation, automated error
                  correction, and intelligent data harmonization.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Sensitive Data Protection
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Automatically identify, classify, and protect sensitive data
                  using advanced AI field analysis, encryption, and adaptive
                  security measures.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Real-Time Anomaly Detection
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Monitor data flows continuously with intelligent pattern
                  recognition, instant anomaly alerts, and predictive risk
                  assessment.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Predictive Compliance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Stay ahead of regulatory requirements with AI-driven
                  compliance monitoring, automated policy enforcement, and
                  proactive risk mitigation.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Intelligent Decision Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Empower data-driven decisions with reliable, AI-curated
                  datasets, automated insights, and contextual recommendations
                  across all applications.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Adaptive Governance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Evolve your governance framework dynamically with AI that
                  learns from your business patterns and adapts policies in
                  real-time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Policies Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Data Policies
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Revolutionize data governance with AI-powered policies that
                ensure quality, security, and reliability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    AI-Driven Data Integrity Assurance
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Leverage cutting-edge AI to maintain unparalleled data quality
                  and consistency across all enterprise applications, with
                  automated validation and intelligent harmonization.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Intelligent Sensitive Data Discovery and Shielding
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Automatically identify and protect sensitive data using
                  advanced AI field analysis, ensuring comprehensive security
                  and compliance with evolving regulations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Proactive Data Flow Surveillance with Smart Anomaly Alerts
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Monitor data flows in real-time with AI-powered anomaly
                  detection, receiving instant alerts to prevent issues before
                  they impact your operations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Unified Data Ecosystem for Informed Decision-Making
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Support data-driven decisions with a reliable, AI-curated
                  dataset ecosystem that provides consistent insights across all
                  applications and business units.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* App Monitoring Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                App Monitoring
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Achieve optimal application performance with intelligent
                monitoring and proactive optimization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Predictive Application Performance Intelligence
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Harness AI-driven real-time tracking to predict and optimize
                  application performance, ensuring seamless operations and user
                  satisfaction.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Usage Pattern Analytics for Operational Excellence
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Analyze usage patterns with advanced AI to continuously
                  optimize application operations, reducing costs and improving
                  efficiency.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Proactive Issue Resolution through Real-Time AI Insights
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Gain instant AI-powered insights to resolve issues
                  proactively, minimizing downtime and maintaining optimal
                  application health.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Seamless User Experience Optimization
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Ensure app stability and deliver exceptional user experiences
                  with AI-driven monitoring that adapts to changing demands and
                  usage patterns.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Monitoring Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                User Monitoring
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Organize, secure, and control your data with intelligent user
                monitoring capabilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Intelligent Data Organization and Fortification
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Transform raw data into structured, secure assets with
                  AI-powered organization that adapts to your evolving business
                  needs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Centralized Data Vault with Advanced Security
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Consolidate all your data in a fortified, AI-secured central
                  repository that ensures accessibility while maintaining
                  enterprise-grade protection.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Dynamic Information Structuring with Live Filters
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Structure and navigate information effortlessly with real-time
                  AI-driven filters and views that adapt to your analytical
                  requirements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Granular Access Control with Custom Permissions
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Implement precise data access controls with customizable
                  permissions that ensure users see only what they need, when
                  they need it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Role-Based Access Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Role-Based Access
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Secure your enterprise with advanced role-based access
                management that adapts to your organizational structure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Advanced Role-Based Security Architecture
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Deploy a sophisticated security framework that dynamically
                  manages access based on user roles, ensuring comprehensive
                  protection of sensitive data.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-green-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Precision Access Governance for Data Protection
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Define crystal-clear access controls that safeguard sensitive
                  data while enabling efficient collaboration across your
                  organization.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    Tailored Role Assignments for Minimal Privilege Access
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Assign roles intelligently to ensure users access only the
                  resources essential for their responsibilities, minimizing
                  security risks.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    IT-Validated Workflow Security Enforcement
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Control critical workflows with IT-verified security
                  configurations that ensure compliance and prevent unauthorized
                  access to sensitive processes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 via-teal-500 to-green-600">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Governance?
              </h2>
              <p className="text-lg text-blue-100 mb-8">
                Join leading enterprises leveraging AI-powered governance to
                achieve unprecedented control and compliance.
              </p>
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Start Your AI Governance Journey
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Governance;

