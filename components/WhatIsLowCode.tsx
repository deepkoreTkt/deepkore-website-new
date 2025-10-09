"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Globe,
  ChevronDown,
  ArrowUp,
  Rocket,
  Users,
  Zap,
  Target,
  DollarSign,
  Shield,
  BarChart2,
  Smartphone,
  Wrench,
  Link as LucideLink,
  Bot,
  RefreshCw,
  MessageSquare,
  Briefcase,
  Cog,
  Building,
  Handshake,
  Network,
  TrendingUp,
  Clock,
  Award,
  PieChart,
  DollarSign as Dollar,
  Cloud,
  HelpCircle,
  Play,
} from "lucide-react";
const WhatIsLowCode: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = (totalScroll / windowHeight) * 100;
      setScrollProgress(scroll);

      // Update active section
      const sections = document.querySelectorAll("[id]");
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="what-is-low-code relative min-h-screen">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#00A551] to-[#2791D0] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Hero Section - Full Width */}
      <section
        className="relative bg-cover bg-center bg-no-repeat text-white py-40 overflow-hidden"
        style={{ backgroundImage: "url('/bg1122.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>;
        <div className="relative container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white  to-white bg-clip-text text-transparent animate-gradient-x">
                What is low-code?
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed mb-12 opacity-95 max-w-4xl mx-auto font-light tracking-wide">
                Low-code is an approach to visual software development that
                <span className="font-medium text-[#ffffff]">
                  {" "}
                  accelerates application creation{" "}
                </span>
                by minimizing the amount of hand coding. Transform your ideas
                into reality faster than ever.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-300">
              <a
                href="/getstarted"
                className="group inline-block bg-gradient-to-r from-[#ffffff] to-[#ffffff]/90 text-[#00A551] px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(197,255,40,0.3)] shadow-lg backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  FREE 14-DAY TRIAL
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="/getstarted"
                className="group inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 border border-white/20"
              >
                <span className="flex items-center gap-2">
                  GET A DEMO
                  <Globe className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Layout with Sidebar */}
      <div className="flex">
        {/* Left Sidebar - Table of Contents */}
        <aside className="hidden lg:block w-80 bg-white/80 backdrop-blur-md shadow-lg border-r border-gray-200/50 sticky top-0 h-screen">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent">
              Table of Contents
            </h2>
            <div className="h-px w-full bg-gradient-to-r from-[#00A551]/20 to-[#2791D0]/20 mb-6"></div>
            <nav className="space-y-2 pr-2 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
              {[
                { title: "What is low-code?", id: "what-is-low-code" },
                {
                  title: "What is low-code app development?",
                  id: "what-is-low-code-app-development",
                },
                {
                  title: "Low-code Platform Features",
                  id: "low-code-platform-features",
                },
                {
                  title: "7 benefits of low-code platform",
                  id: "7-benefits-of-low-code-platform",
                },
                {
                  title:
                    "How is low-code different from no-code and high-code?",
                  id: "how-is-low-code-different-from-no-code-and-high-code",
                },
                {
                  title: "Low-code industry solutions",
                  id: "low-code-industry-solutions",
                },
                {
                  title:
                    "What can you build with a low-code development platform?",
                  id: "what-can-you-build-with-a-low-code-development-platform",
                },
                { title: "Low-code use cases", id: "low-code-use-cases" },
                {
                  title: "Low-code industry forecasts",
                  id: "low-code-industry-forecasts",
                },
                { title: "Low-code FAQ", id: "low-code-faq" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00A551]/10 hover:to-[#2791D0]/10 hover:shadow-md group ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-[#00A551]/20 to-[#2791D0]/20 text-[#00A551] font-semibold shadow-sm backdrop-blur-sm"
                      : "text-gray-700 hover:text-[#00A551]"
                  }`}
                >
                  <span className="text-sm leading-tight">{item.title}</span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Mobile Table of Contents - Collapsible */}
        <div className="lg:hidden">
          <details className="bg-white border-b border-gray-200">
            <summary className="p-4 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50">
              Table of Contents
            </summary>
            <div className="p-4 pt-0 space-y-2">
              {[
                { title: "What is low-code?", id: "what-is-low-code" },
                {
                  title: "What is low-code app development?",
                  id: "what-is-low-code-app-development",
                },
                {
                  title: "Low-code Platform Features",
                  id: "low-code-platform-features",
                },
                {
                  title: "7 benefits of low-code platform",
                  id: "7-benefits-of-low-code-platform",
                },
                {
                  title:
                    "How is low-code different from no-code and high-code?",
                  id: "how-is-low-code-different-from-no-code-and-high-code",
                },
                {
                  title: "Low-code industry solutions",
                  id: "low-code-industry-solutions",
                },
                {
                  title:
                    "What can you build with a low-code development platform?",
                  id: "what-can-you-build-with-a-low-code-development-platform",
                },
                { title: "Low-code use cases", id: "low-code-use-cases" },
                {
                  title: "Low-code industry forecasts",
                  id: "low-code-industry-forecasts",
                },
                { title: "Low-code FAQ", id: "low-code-faq" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 hover:bg-[#00A551]/10 ${
                    activeSection === item.id
                      ? "bg-[#00A551]/20 text-[#00A551] font-semibold"
                      : "text-gray-700 hover:text-[#00A551]"
                  }`}
                >
                  <span className="text-sm">{item.title}</span>
                </button>
              ))}
            </div>
          </details>
        </div>

        {/* Main Content */}
        <main className="flex-1 py-16 bg-gray-50 min-h-screen">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="space-y-16">
              {/* What is low-code */}
              <div
                id="what-is-low-code"
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#00A551]/20 hover:shadow-2xl hover:border-[#00A551]/40 transition-all duration-500 group"
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent mb-6 group-hover:scale-105 transform transition-transform duration-500">
                  What is low-code?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Low-code is an approach to visual software development that
                  accelerates application creation by minimizing the amount of
                  hand coding. Low-code development replaces traditional coding
                  with a visual drag-and-drop development interface to design
                  and configure applications, ready-to-use components,
                  integrations, and workflow tools.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Low-code platforms allow less technical employees (also known
                  as citizen developers) to rapidly build applications from
                  scratch, such as mobile applications, governance, legacy
                  upgrades, enterprise services, customer/client portals, etc.
                </p>
                <div className="bg-gradient-to-r from-[#00A551]/10 to-[#2791D0]/10 border-l-4 border-[#00A551] p-6 rounded">
                  <p className="text-[#00A551] font-medium italic">
                    &#34;By 2025, 70% of new applications developed by
                    enterprises will use low-code or no-code technologies&#34;
                  </p>
                  <p className="text-[#2791D0] text-sm mt-2">- Gartner</p>
                </div>
              </div>

              {/* What is low-code app development */}
              <div
                id="what-is-low-code-app-development"
                className="bg-white rounded-2xl shadow-xl p-8 border border-[#00A551]/20"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  What is low-code app development?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Low-code application development is a cutting-edge software
                  development approach aimed at accelerating the creation of
                  business apps by minimizing the reliance on traditional coding
                  practices. By utilizing visual interfaces and intuitive tools,
                  developers can swiftly design and deploy applications ranging
                  from simple to complex without traditional hand-coding.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Low code development not only enhances an organization&#39;s
                  scalability and profitability but also unlocks the potential
                  for above-average returns on digital investments.
                </p>
              </div>

              {/* Low-code Platform Features */}
              <div
                id="low-code-platform-features"
                className="bg-white rounded-2xl shadow-xl p-8 border border-[#00A551]/20"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Low-code Platform Features
                </h2>

                <div className="space-y-8">
                  <div className="border-l-4 border-[#00A551] pl-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Visual modeling tools
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      These tools included in low-code development platforms
                      allow you to cut software development time in half using a
                      wide range of pre-built system components. Drag-and-drop
                      features help create modern UIs, workflows, and data
                      models.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#2791D0] pl-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Integration and APIs
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      The integration tools enable you to connect your systems
                      and centralize data to create a digital ecosystem. A
                      low-code environment should include ready-made connectors
                      to enable seamless bi-directional integration with
                      third-party applications.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#2791D0] pl-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Security
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Low-code enables IT teams to build secure apps and ensure
                      compliance with industry standards. Configure security at
                      all application levels using out-of-the-box security tools
                      with certifications like SOC, PCI-DSS, HIPAA, and GDPR.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#00A551] pl-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Application lifecycle management
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Simplify and streamline application management processes –
                      from business requirement analysis and development to
                      maintenance. Unify all development environments in a
                      single view to gain end-to-end visibility and ensure
                      security.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#2791D0] pl-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Scalability
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      With the low-code platform&#39;s scalable architecture,
                      you can ensure seamless and rapid application development
                      and growth. You can effortlessly handle increasing demands
                      and user growth without compromising performance.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#2791D0] pl-6">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      Artificial Intelligence
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Discover customer insights instantly and make data-driven
                      business decisions. Use built-in AI capabilities such as
                      classification, scoring, next best offer (NBO), and next
                      best action (NBA) recommendations to ensure a better
                      customer experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* 7 benefits */}
              <div
                id="7-benefits-of-low-code-platform"
                className="bg-white rounded-2xl shadow-xl p-8 border border-[#00A551]/20 hover-lift"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                  7 benefits of low-code platform
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Freedom to own your automation",
                      description:
                        "Meet changing business needs with various customization and configuration capabilities, unparalleled agility, and resilience.",
                      icon: <Rocket className="w-8 h-8 text-[#00A551]" />,
                    },
                    {
                      title: "Improved business-IT alignment",
                      description:
                        "Build up technical literacy and turn your business-line employees into citizen developers. Low-code tools democratize software development.",
                      icon: <Users className="w-8 h-8 text-[#2791D0]" />,
                    },
                    {
                      title: "Faster digital transformation",
                      description:
                        "Digital transformation is about people. Make your employees the change champions by allowing them to develop the digital solutions they need.",
                      icon: <Zap className="w-8 h-8 text-[#00A551]" />,
                    },
                    {
                      title: "Enhanced customer experience (CX)",
                      description:
                        "Create omnichannel customer journeys, mobile-first apps, and AI-enabled solutions to keep up with the latest CX trends.",
                      icon: <Target className="w-8 h-8 text-[#2791D0]" />,
                    },
                    {
                      title: "Reduced total cost of ownership (TCO)",
                      description:
                        "Build more digital assets with the same resources while reducing maintenance costs. Repurpose and reuse system modules.",
                      icon: <DollarSign className="w-8 h-8 text-[#00A551]" />,
                    },
                    {
                      title: "Improved governance and risk management",
                      description:
                        "Configure the system&#39;s security using admin tools, access control, and threat assessments with third-party attested certifications.",
                      icon: <Shield className="w-8 h-8 text-[#2791D0]" />,
                    },
                    {
                      title: "Higher productivity",
                      description:
                        "Empower your employees to automate repetitive tasks and make changes to workflows and business apps to increase their productivity.",
                      icon: <BarChart2 className="w-8 h-8 text-[#00A551]" />,
                    },
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#00A551]/5 to-[#2791D0]/5 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-[#00A551]/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl mb-3">{benefit.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            {index + 1}. {benefit.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Low-code vs others */}
              <div
                id="how-is-low-code-different-from-no-code-and-high-code"
                className="bg-white rounded-2xl shadow-xl p-8 border border-[#00A551]/20"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  How is low-code different from no-code and high-code?
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="border border-[#00A551]/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Low-code vs. no-code
                    </h3>
                    <p className="text-gray-700 mb-4">
                      The main difference between low-code and no-code platforms
                      is that the former can still include coding in certain
                      cases, whereas no-code tools require absolutely no coding
                      whatsoever.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">
                          Pre-built components can be customized
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">
                          Simple to medium complexity apps
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">
                          Ideal for organizations looking to empower business
                          users
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border border-[#00A551]/20 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Low-code vs. high-code
                    </h3>
                    <p className="text-gray-700 mb-4">
                      The main difference between low-code and high-code
                      development lies in the level of coding involved during
                      application development.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">
                          Advanced customization
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">
                          Professional expertise required
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm text-gray-600">
                          Ideal for large-scale projects
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industry solutions */}
              <div
                id="low-code-industry-solutions"
                className="bg-white rounded-2xl shadow-xl p-8 border border-[#00A551]/20"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Low-code industry solutions
                </h2>
                <p className="text-gray-700 mb-8">
                  Low-code platforms offer an array of industry-specific
                  solutions, providing endless possibilities for businesses to
                  create enterprise applications across various sectors.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    "Banking",
                    "Credit Unions",
                    "Mortgage",
                    "Insurance",
                    "Manufacturing",
                    "Hi tech",
                    "Transportation",
                    "Business Services",
                    "Retail",
                    "CPG",
                    "Pharma",
                    "Telecom",
                    "Public sector",
                    "Media and advertising",
                  ].map((industry, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-br from-[#00A551]/10 via-[#2791D0]/10 to-[#2791D0]/10 p-6 rounded-lg text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-transparent hover:border-[#00A551]/30 backdrop-blur-sm relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00A551]/0 via-[#2791D0]/0 to-[#2791D0]/0 group-hover:from-[#00A551]/20 group-hover:via-[#2791D0]/20 group-hover:to-[#2791D0]/20 transition-all duration-500"></div>
                      <span className="relative z-10 text-gray-900 font-medium text-lg group-hover:text-[#00A551] transition-colors duration-300">
                        {industry}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What can you build */}
              <div
                id="what-can-you-build-with-a-low-code-development-platform"
                className="bg-white rounded-2xl shadow-xl p-8 border border-[#00A551]/20 hover-lift"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  What can you build with a low-code development platform?
                </h2>
                <p className="text-gray-700 mb-10 text-center max-w-3xl mx-auto leading-relaxed">
                  With a low-code development platform, you can build a wide
                  range of applications, from simple to complex. These platforms
                  offer the tools and resources to create web applications,
                  automate workflows, integrate with third-party systems, and
                  implement AI/ML functionalities.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Web Applications",
                      icon: (
                        <Globe className="w-12 h-12 text-[#00A551] mx-auto mb-4" />
                      ),
                    },
                    {
                      name: "Mobile Applications",
                      icon: (
                        <Smartphone className="w-12 h-12 text-[#2791D0] mx-auto mb-4" />
                      ),
                    },
                    {
                      name: "Workflow Automation",
                      icon: (
                        <Wrench className="w-12 h-12 text-[#00A551] mx-auto mb-4" />
                      ),
                    },
                    {
                      name: "Customer Portals",
                      icon: (
                        <Users className="w-12 h-12 text-[#2791D0] mx-auto mb-4" />
                      ),
                    },
                    {
                      name: "Internal Tools",
                      icon: (
                        <Wrench className="w-12 h-12 text-[#00A551] mx-auto mb-4" />
                      ),
                    },
                    {
                      name: "Data Analytics Dashboards",
                      icon: (
                        <BarChart2 className="w-12 h-12 text-[#2791D0] mx-auto mb-4" />
                      ),
                    },
                    {
                      name: "Integration Solutions",
                      icon: (
                        <LucideLink className="w-12 h-12 text-[#00A551] mx-auto mb-4" />
                      ),
                    },
                    {
                      name: "AI-Powered Applications",
                      icon: (
                        <Bot className="w-12 h-12 text-[#2791D0] mx-auto mb-4" />
                      ),
                    },
                    {
                      name: "Legacy System Modernization",
                      icon: (
                        <RefreshCw className="w-12 h-12 text-[#00A551] mx-auto mb-4" />
                      ),
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#00A551]/5 to-[#2791D0]/5 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-[#00A551]/10 group"
                    >
                      <div className="text-4xl mb-4 group-hover:animate-bounce">
                        {item.icon}
                      </div>
                      <span className="text-gray-900 font-semibold text-lg">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use cases */}
              <div
                id="low-code-use-cases"
                className="bg-white rounded-2xl shadow-xl p-8 border border-[#00A551]/20 relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300A551' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-r from-[#00A551]/10 to-[#2791D0]/10 rounded-full blur-xl animate-pulse"></div>
                  <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-[#2791D0]/10 to-[#00A551]/10 rounded-full blur-lg animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00A551]/10 to-[#2791D0]/10 px-4 py-2 rounded-full text-sm font-medium text-[#00A551] mb-4">
                      <Network className="w-4 h-4" />
                      Real-World Applications
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent mb-6">
                      Low-code use cases
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      Discover how low-code platforms transform business
                      operations across industries
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {[
                      {
                        title: "Customer engagement applications",
                        description:
                          "Create omnichannel customer-facing business applications to efficiently and quickly address various customer issues.",
                        icon: MessageSquare,
                        gradient: "from-blue-500 to-cyan-500",
                        bgGradient: "from-blue-50 to-cyan-50",
                        delay: 0,
                      },
                      {
                        title: "Employee experience and corporate services",
                        description:
                          "Streamline a wide range of daily corporate tasks, including employee management, request management, and internal service support.",
                        icon: Briefcase,
                        gradient: "from-emerald-500 to-teal-500",
                        bgGradient: "from-emerald-50 to-teal-50",
                        delay: 0.1,
                      },
                      {
                        title: "Operational efficiency applications",
                        description:
                          "Build and integrate applications to automate enterprise-grade operational processes for various business domains.",
                        icon: Cog,
                        gradient: "from-purple-500 to-indigo-500",
                        bgGradient: "from-purple-50 to-indigo-50",
                        delay: 0.2,
                      },
                      {
                        title: "Legacy modernization",
                        description:
                          "Modernize, extend, or completely replace legacy systems using a modern, open, and highly-customizable software ecosystem.",
                        icon: RefreshCw,
                        gradient: "from-orange-500 to-red-500",
                        bgGradient: "from-orange-50 to-red-50",
                        delay: 0.3,
                      },
                      {
                        title: "Collaboration and coordination apps",
                        description:
                          "Build applications for communication, collaboration, content sharing, task scheduling, and review management.",
                        icon: Handshake,
                        gradient: "from-pink-500 to-rose-500",
                        bgGradient: "from-pink-50 to-rose-50",
                        delay: 0.4,
                      },
                      {
                        title: "Vertical-focused automation",
                        description:
                          "Build applications to streamline operational and customer-facing processes specific to your industry and business domain.",
                        icon: Building,
                        gradient: "from-violet-500 to-purple-500",
                        bgGradient: "from-violet-50 to-purple-50",
                        delay: 0.5,
                      },
                    ].map((useCase, index) => (
                      <div
                        key={index}
                        className="group relative bg-gradient-to-br border border-white/50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${useCase.bgGradient
                            .split(" ")[0]
                            .replace("from-", "")}20 0%, ${useCase.bgGradient
                            .split(" ")[1]
                            .replace("to-", "")}20 100%)`,
                        }}
                      >
                        {/* Animated Background */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${useCase.bgGradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        ></div>

                        {/* Icon */}
                        <div className="relative z-10 mb-6">
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${useCase.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <useCase.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 text-center">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                            {useCase.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                            {useCase.description}
                          </p>
                        </div>

                        {/* Hover Effect Border */}
                        <div
                          className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${useCase.gradient} transition-all duration-500 opacity-0 group-hover:opacity-20`}
                        ></div>

                        {/* Floating Particles */}
                        <div className="absolute top-4 right-4 w-2 h-2 bg-current opacity-20 rounded-full animate-ping"></div>
                        <div className="absolute bottom-4 left-4 w-1 h-1 bg-current opacity-30 rounded-full animate-pulse delay-500"></div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom CTA */}
                  <div className="text-center mt-12">
                    <div className="bg-gradient-to-r from-[#00A551]/5 to-[#2791D0]/5 rounded-2xl p-8 border border-[#00A551]/10">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Ready to Build Your Next Application?
                      </h3>
                      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Transform your business processes with low-code
                        development. Start building today and see the
                        difference.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="/getstarted"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                          Start Building
                          <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-2 border-2 border-[#00A551] text-[#00A551] px-8 py-4 rounded-xl font-semibold hover:bg-[#00A551] hover:text-white transition-all duration-300"
                        >
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Industry forecasts */}
              <div
                id="low-code-industry-forecasts"
                className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 rounded-2xl p-8 text-gray-900 overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232791D0' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                </div>

                {/* Floating Elements */}
                {/* <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    className="absolute top-12 left-12 w-20 h-20 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute bottom-12 right-12 w-16 h-16 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-lg"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 3,
                    }}
                  />
                </div> */}

                <div className="relative z-10">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-6 py-3 rounded-full text-sm font-medium text-blue-600 mb-6">
                      <TrendingUp className="w-4 h-4" />
                      Market Insights & Forecasts
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                      Low-code industry forecasts
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      Discover the transformative impact of low-code technology
                      on the global development landscape
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        forecast:
                          "Composability and hyperautomation will drive the adoption of low-code technology through 2026",
                        icon: Cog,
                        gradient: "from-blue-500 to-cyan-500",
                        bgGradient: "from-blue-50 to-cyan-50",
                        stat: "2026",
                        statLabel: "Target Year",
                      },
                      {
                        forecast:
                          "Low-code allows the creation of cloud-native applications with 70% fewer resources",
                        icon: Cloud,
                        gradient: "from-emerald-500 to-teal-500",
                        bgGradient: "from-emerald-50 to-teal-50",
                        stat: "70%",
                        statLabel: "Resource",
                      },
                      {
                        forecast:
                          "TCO (total cost of ownership) of low-code applications is 54% of traditional development",
                        icon: Dollar,
                        gradient: "from-green-500 to-emerald-500",
                        bgGradient: "from-green-50 to-emerald-50",
                        stat: "54%",
                        statLabel: "Cost Savings",
                      },
                      {
                        forecast:
                          "Low-code platforms can reduce development time by up to 90%",
                        icon: Clock,
                        gradient: "from-purple-500 to-indigo-500",
                        bgGradient: "from-purple-50 to-indigo-50",
                        stat: "90%",
                        statLabel: "Time Saved",
                      },
                      {
                        forecast:
                          "An average business can increase in value by $4.4M by using low-code applications",
                        icon: Award,
                        gradient: "from-orange-500 to-red-500",
                        bgGradient: "from-orange-50 to-red-50",
                        stat: "$4.4M",
                        statLabel: "Value Increase",
                      },
                      {
                        forecast:
                          "By 2025, 70% of new applications developed by enterprises will use low-code or no-code technologies",
                        icon: BarChart2,
                        gradient: "from-blue-500 to-cyan-500",
                        bgGradient: "from-blue-50 to-cyan-50",
                        stat: "70%",
                        statLabel: "Adoption Rate",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="group relative bg-gradient-to-br border border-white/60 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 backdrop-blur-sm overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${item.bgGradient
                            .split(" ")[0]
                            .replace("from-", "")}15 0%, ${item.bgGradient
                            .split(" ")[1]
                            .replace("to-", "")}15 100%)`,
                        }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {/* Animated Background */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                        ></div>

                        {/* Icon & Stat Badge */}
                        <div className="relative z-10 mb-6 flex items-center justify-between">
                          <div
                            className={`w-14 h-14 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                          >
                            <item.icon className="w-7 h-7 text-white" />
                          </div>

                          {/* Floating Stat Badge */}
                          <motion.div
                            className="bg-white rounded-full px-4 py-2 shadow-lg border border-gray-100"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                              delay: 0.5 + index * 0.1,
                              type: "spring",
                            }}
                            viewport={{ once: true }}
                          >
                            <div className="text-sm font-bold text-gray-900">
                              {item.stat}
                            </div>
                            <div className="text-xs text-gray-500">
                              {item.statLabel}
                            </div>
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                          <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300 font-medium">
                            {item.forecast}
                          </p>
                        </div>

                        {/* Hover Effect Border */}
                        <div
                          className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${item.gradient} transition-all duration-500 opacity-0 group-hover:opacity-20`}
                        ></div>

                        {/* Floating Particles */}
                        <div className="absolute top-3 right-3 w-2 h-2 bg-current opacity-20 rounded-full animate-ping"></div>
                        <div className="absolute bottom-3 left-3 w-1 h-1 bg-current opacity-30 rounded-full animate-pulse delay-300"></div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Insight */}
                  <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-2xl p-8 border border-blue-500/10 max-w-4xl mx-auto">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <BarChart2 className="w-6 h-6 text-blue-600" />
                        <span className="text-blue-600 font-semibold">
                          Industry Impact
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mb-2">
                        &ldquo;Low-code is not just a trend&mdash;it&apos;s the
                        future of software development&rdquo;
                      </p>
                      <p className="text-gray-600">
                        — Industry analysts predict unprecedented growth and
                        adoption across all sectors
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* FAQ */}
              <div
                id="low-code-faq"
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#00A551]/20 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300A551' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-r from-[#00A551]/10 to-[#2791D0]/10 rounded-full blur-xl animate-pulse"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-r from-[#2791D0]/10 to-[#00A551]/10 rounded-full blur-lg animate-pulse delay-1000"
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  />
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00A551]/10 to-[#2791D0]/10 px-6 py-3 rounded-full text-sm font-medium text-[#00A551] mb-6">
                      <HelpCircle className="w-4 h-4" />
                      Common Questions
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent mb-6">
                      Low-code FAQ
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                      Get answers to the most frequently asked questions about
                      low-code development
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        question: "Who can use low-code at my organization?",
                        answer:
                          "Anyone from an HR manager to a professional developer can use low-code to develop business solutions. Their intuitive nature and scalability allow anyone within a company to create tools to automate their work.",
                        category: "users",
                        tags: [
                          "accessibility",
                          "citizen developers",
                          "business users",
                        ],
                      },
                      {
                        question: "Who is a low-code developer?",
                        answer:
                          "A low-code developer is someone who uses low-code platforms to create applications with minimal coding. This can include both technical professionals and business users (citizen developers).",
                        category: "roles",
                        tags: [
                          "developers",
                          "citizen developers",
                          "professionals",
                        ],
                      },
                      {
                        question: "Is low-code only for large enterprises?",
                        answer:
                          "No, low-code platforms are suitable for businesses of all sizes. Small and medium-sized businesses can benefit greatly from low-code solutions for their agility and cost-effectiveness.",
                        category: "business",
                        tags: ["scalability", "small business", "enterprise"],
                      },
                      {
                        question:
                          "What is visual development/ How does it work?",
                        answer:
                          "Visual development is a method of creating applications using graphical interfaces and drag-and-drop tools instead of writing code. Users can design workflows, user interfaces, and logic visually.",
                        category: "technical",
                        tags: [
                          "visual development",
                          "drag-and-drop",
                          "interfaces",
                        ],
                      },
                      {
                        question: "What is low-code vs zero code?",
                        answer:
                          "Low-code allows some coding when needed for complex functionality, while zero-code (no-code) requires absolutely no coding. Low-code offers more flexibility for advanced use cases.",
                        category: "comparison",
                        tags: ["no-code", "flexibility", "advanced features"],
                      },
                    ].map((faq, index) => (
                      <motion.div
                        key={index}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#00A551] to-[#2791D0] rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                              {index + 1}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800 pr-4 leading-relaxed group-hover:text-[#00A551] transition-colors duration-200">
                              {faq.question}
                            </h4>
                          </div>
                          <motion.div
                            animate={{
                              rotate: expandedFaq === index ? 180 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <ChevronDown className="w-5 h-5 text-[#00A551] group-hover:text-[#2791D0] transition-colors duration-200" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {expandedFaq === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6">
                                <div className="pl-12">
                                  <p className="text-gray-600 leading-relaxed pt-2">
                                    {faq.answer}
                                  </p>
                                  {faq.tags && faq.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                      {faq.tags
                                        .slice(0, 3)
                                        .map((tag, tagIdx) => (
                                          <span
                                            key={tagIdx}
                                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-[#00A551]/10 hover:text-[#00A551] transition-colors duration-200"
                                          >
                                            #{tag}
                                          </span>
                                        ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom CTA */}
                  <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gradient-to-r from-[#00A551]/5 to-[#2791D0]/5 rounded-2xl p-8 border border-[#00A551]/10 max-w-2xl mx-auto">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Still have questions?
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Our expert team is here to help you understand how
                        low-code can transform your business.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                          <MessageSquare className="w-5 h-5" />
                          Contact Support
                        </a>
                        <a
                          href="/getstarted"
                          className="inline-flex items-center gap-2 border-2 border-[#00A551] text-[#00A551] px-6 py-3 rounded-xl font-semibold hover:bg-[#00A551] hover:text-white transition-all duration-300"
                        >
                          <Play className="w-5 h-5" />
                          Watch Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Final CTA */}
            </div>
          </div>
        </main>
      </div>

      {/* Back to Top Button */}
    </div>
  );
};

export default WhatIsLowCode;
