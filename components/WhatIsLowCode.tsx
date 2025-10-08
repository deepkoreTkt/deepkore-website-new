"use client";

import React, { useState, useEffect } from "react";
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
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="/getstarted"
                className="group inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 border border-white/20"
              >
                <span className="flex items-center gap-2">
                  GET A DEMO
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
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
                      icon: "🚀",
                    },
                    {
                      title: "Improved business-IT alignment",
                      description:
                        "Build up technical literacy and turn your business-line employees into citizen developers. Low-code tools democratize software development.",
                      icon: "🤝",
                    },
                    {
                      title: "Faster digital transformation",
                      description:
                        "Digital transformation is about people. Make your employees the change champions by allowing them to develop the digital solutions they need.",
                      icon: "⚡",
                    },
                    {
                      title: "Enhanced customer experience (CX)",
                      description:
                        "Create omnichannel customer journeys, mobile-first apps, and AI-enabled solutions to keep up with the latest CX trends.",
                      icon: "🎯",
                    },
                    {
                      title: "Reduced total cost of ownership (TCO)",
                      description:
                        "Build more digital assets with the same resources while reducing maintenance costs. Repurpose and reuse system modules.",
                      icon: "💰",
                    },
                    {
                      title: "Improved governance and risk management",
                      description:
                        "Configure the system&#39;s security using admin tools, access control, and threat assessments with third-party attested certifications.",
                      icon: "🛡️",
                    },
                    {
                      title: "Higher productivity",
                      description:
                        "Empower your employees to automate repetitive tasks and make changes to workflows and business apps to increase their productivity.",
                      icon: "📈",
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
                    { name: "Web Applications", icon: "🌐" },
                    { name: "Mobile Applications", icon: "📱" },
                    { name: "Workflow Automation", icon: "⚙️" },
                    { name: "Customer Portals", icon: "👥" },
                    { name: "Internal Tools", icon: "🛠️" },
                    { name: "Data Analytics Dashboards", icon: "📊" },
                    { name: "Integration Solutions", icon: "🔗" },
                    { name: "AI-Powered Applications", icon: "🤖" },
                    { name: "Legacy System Modernization", icon: "🔄" },
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
                className="bg-white rounded-2xl shadow-xl p-8 border border-[#00A551]/20"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  Low-code use cases
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Customer engagement applications",
                      description:
                        "Create omnichannel customer-facing business applications to efficiently and quickly address various customer issues.",
                    },
                    {
                      title: "Employee experience and corporate services",
                      description:
                        "Streamline a wide range of daily corporate tasks, including employee management, request management, and internal service support.",
                    },
                    {
                      title: "Operational efficiency applications",
                      description:
                        "Build and integrate applications to automate enterprise-grade operational processes for various business domains.",
                    },
                    {
                      title: "Legacy modernization",
                      description:
                        "Modernize, extend, or completely replace legacy systems using a modern, open, and highly-customizable software ecosystem.",
                    },
                    {
                      title: "Collaboration and coordination apps",
                      description:
                        "Build applications for communication, collaboration, content sharing, task scheduling, and review management.",
                    },
                    {
                      title: "Vertical-focused automation",
                      description:
                        "Build applications to streamline operational and customer-facing processes specific to your industry and business domain.",
                    },
                  ].map((useCase, index) => (
                    <div
                      key={index}
                      className="border border-[#00A551]/20 rounded-lg p-6 hover:shadow-xl transition-all duration-300"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-700">{useCase.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Industry forecasts */}
              <div
                id="low-code-industry-forecasts"
                className="bg-[#f5f7f7] rounded-2xl p-8 text-gray-900"
              >
                <h2 className="text-3xl font-bold mb-8">
                  Low-code industry forecasts
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Composability and hyperautomation will drive the adoption of low-code technology through 2026",
                    "Low-code allows the creation of cloud-native applications with 70% fewer resources",
                    "TCO (total cost of ownership) of low-code applications is 54% of traditional development",
                    "Low-code platforms can reduce development time by up to 90%",
                    "An average business can increase in value by $4.4M by using low-code applications",
                  ].map((forecast, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                    >
                      <p className="text-gray-900 font-medium">{forecast}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div
                id="low-code-faq"
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#00A551]/20 hover:shadow-2xl transition-all duration-500"
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent mb-8 animate-gradient-x">
                  Low-code FAQ
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      question: "Who can use low-code at my organization?",
                      answer:
                        "Anyone from an HR manager to a professional developer can use low-code to develop business solutions. Their intuitive nature and scalability allow anyone within a company to create tools to automate their work.",
                    },
                    {
                      question: "Who is a low-code developer?",
                      answer:
                        "A low-code developer is someone who uses low-code platforms to create applications with minimal coding. This can include both technical professionals and business users (citizen developers).",
                    },
                    {
                      question: "Is low-code only for large enterprises?",
                      answer:
                        "No, low-code platforms are suitable for businesses of all sizes. Small and medium-sized businesses can benefit greatly from low-code solutions for their agility and cost-effectiveness.",
                    },
                    {
                      question: "What is visual development/ How does it work?",
                      answer:
                        "Visual development is a method of creating applications using graphical interfaces and drag-and-drop tools instead of writing code. Users can design workflows, user interfaces, and logic visually.",
                    },
                    {
                      question: "What is low-code vs zero code?",
                      answer:
                        "Low-code allows some coding when needed for complex functionality, while zero-code (no-code) requires absolutely no coding. Low-code offers more flexibility for advanced use cases.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full text-left p-6 bg-gradient-to-r from-[#00A551]/5 via-transparent to-[#2791D0]/5 hover:from-[#00A551]/20 hover:via-[#2791D0]/10 hover:to-[#2791D0]/20 transition-all duration-300 flex justify-between items-center group backdrop-blur-sm"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <svg
                          className={`w-5 h-5 text-[#00A551] transform transition-transform duration-200 ${
                            expandedFaq === index ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          expandedFaq === index
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-gray-700 p-6 pt-0 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final CTA */}
              <div className="bg-gradient-to-r from-[#00A551] to-[#2791D0] rounded-2xl p-8 text-white text-center hover-lift">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to explore low-code further?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Transform your business processes with the power of low-code
                  development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/getstarted"
                    className="inline-block bg-[#ffffff] hover:bg-[#ffffff]/90 text-[#00A551] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Get Started
                  </a>
                  <a
                    href="/getstarted"
                    className="inline-block bg-white hover:bg-gray-100 text-[#2791D0] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    GET A DEMO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 bg-[#00A551] hover:bg-[#2791D0] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 ${
          scrollProgress > 10
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default WhatIsLowCode;
