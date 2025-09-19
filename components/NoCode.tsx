"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const NoCode: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
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
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "🎯" },
    { id: "features", label: "Features", icon: "⚡" },
    { id: "benefits", label: "Benefits", icon: "🚀" },
    { id: "comparison", label: "vs Low-Code", icon: "⚖️" },
    { id: "applications", label: "Applications", icon: "🏗️" },
    { id: "success", label: "Success", icon: "⭐" },
    { id: "faq", label: "FAQ", icon: "❓" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-green-100">
      <Header />

      {/* Progress Bar */}

      {/* Hero Section - Split Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal-200/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-200/40 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-teal-300/25 rounded-full blur-xl animate-bounce delay-500"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59,130,246,0.3) 1px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>
        </div>

        <div className="relative container mx-auto px-40 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-teal-100/80 backdrop-blur-sm px-4 py-2 rounded-full border border-teal-200/50">
                <span className="text-2xl">🚀</span>
                <span className="text-teal-800 font-medium">
                  No-Code Revolution
                </span>
              </div>

              <h1 className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 bg-clip-text text-transparent leading-tight">
                Build Without
                <br />
                <span className="text-slate-800">Limits</span>
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Transform your ideas into powerful applications in minutes, not
                months. Our no-code platform empowers everyone to innovate,
                create, and scale without writing a single line of code.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                  <span className="flex items-center gap-3">
                    Start Building Free
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
                </button>
                <button className="group bg-white/80 backdrop-blur-sm hover:bg-white text-slate-800 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 border border-slate-200/50 shadow-lg">
                  <span className="flex items-center gap-3">
                    Watch Demo
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform"
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
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">10x</div>
                  <div className="text-sm text-slate-600">
                    Faster Development
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-600">95%</div>
                  <div className="text-sm text-slate-600">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">∞</div>
                  <div className="text-sm text-slate-600">Possibilities</div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative z-10">
                {/* Floating Cards */}
                <div className="grid grid-cols-2 gap-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 hover:scale-105">
                    <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center mb-4">
                      <span className="text-2xl">📱</span>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">
                      Mobile Apps
                    </h3>
                    <p className="text-sm text-slate-600">
                      Native iOS & Android apps
                    </p>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 hover:scale-105 mt-8">
                    <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center mb-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">Workflows</h3>
                    <p className="text-sm text-slate-600">
                      Automate any process
                    </p>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 hover:scale-105 -mt-4">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                      <span className="text-2xl">📊</span>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">
                      Dashboards
                    </h3>
                    <p className="text-sm text-slate-600">
                      Real-time analytics
                    </p>
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-300 hover:scale-105 mt-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center mb-4">
                      <span className="text-2xl">🔗</span>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">
                      Integrations
                    </h3>
                    <p className="text-sm text-slate-600">Connect everything</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Tab Navigation */}

      {/* Main Content */}
      <main className="py-20">
        {/* Overview Section */}
        {activeTab === "overview" && (
          <div className="space-y-20">
            {/* What is No-Code - Full Width */}
            <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                    What is No-Code?
                  </h2>
                  <p className="text-xl leading-relaxed text-slate-300 mb-12">
                    No-code is a revolutionary approach to software development
                    that empowers anyone—regardless of technical background—to
                    create powerful applications without writing a single line
                    of code.
                  </p>
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 max-w-2xl mx-auto">
                    <p className="text-teal-300 font-medium italic text-lg">
                      &#34;The future belongs to those who can turn ideas into
                      applications faster than ever before&#34;
                    </p>
                    <p className="text-cyan-400 text-sm mt-4">
                      - DeepKore Vision
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Development Section - Split */}
            <section className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl font-black text-slate-800">
                    No-Code Development:
                    <span className="block bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 bg-clip-text text-transparent">
                      The Future is Here
                    </span>
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    No-code development represents a paradigm shift in how
                    software is created. Instead of complex programming
                    languages and endless lines of code, users leverage visual
                    development environments.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Our platform eliminates traditional barriers to entry,
                    enabling business users, citizen developers, and IT
                    professionals to collaborate seamlessly.
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                    <span className="text-teal-600 font-semibold">
                      10x faster than traditional development
                    </span>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="bg-white rounded-2xl p-6 shadow-xl">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                          <span className="text-white text-xl">🎯</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-800">
                            Visual Builder
                          </h3>
                          <p className="text-sm text-slate-600">
                            Drag & drop interface
                          </p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full w-3/4"></div>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full w-1/2"></div>
                        </div>
                        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-400 to-teal-500 rounded-full w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Technologies Section - Cards Grid */}
            <section className="bg-slate-50 py-20">
              <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-black text-slate-800 mb-6">
                    No-Code Technologies:
                    <span className="block bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 bg-clip-text text-transparent">
                      Innovation Without Limits
                    </span>
                  </h2>
                  <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                    No-code technologies are sophisticated yet user-friendly
                    tools that transform complex development tasks into
                    intuitive visual experiences.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      icon: "🎨",
                      title: "Visual Canvas",
                      desc: "Drag-and-drop interfaces that make building applications feel like assembling a digital puzzle.",
                      color: "from-teal-500 to-cyan-500",
                    },
                    {
                      icon: "🤖",
                      title: "Smart Automation",
                      desc: "Intelligent workflows that adapt to your business needs with simple visual logic.",
                      color: "from-cyan-500 to-teal-500",
                    },
                    {
                      icon: "🧠",
                      title: "AI Assistance",
                      desc: "Built-in AI that suggests optimizations and helps you build better applications faster.",
                      color: "from-green-400 to-teal-500",
                    },
                    {
                      icon: "🔗",
                      title: "Integration Hub",
                      desc: "Connect with any system through pre-built connectors and APIs seamlessly.",
                      color: "from-teal-500 to-orange-400",
                    },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-2xl">{tech.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 mb-4">
                        {tech.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {tech.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Features Section */}
        {activeTab === "features" && (
          <section className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-slate-800 mb-6">
                DeepKore No-Code
                <span className="block bg-gradient-to-r from-blue-500 via-teal-400 to-green-400 bg-clip-text text-transparent">
                  Platform Features
                </span>
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              {[
                {
                  title: "Visual Application Designer",
                  desc: "Create stunning, responsive applications with our intuitive drag-and-drop designer. Build complex workflows and user interfaces without any coding knowledge.",
                  icon: "🎨",
                  color: "from-teal-500 to-cyan-500",
                },
                {
                  title: "Intelligent Workflow Automation",
                  desc: "Design sophisticated business processes with visual workflow builders. Automate approvals, notifications, and data routing with conditional logic.",
                  icon: "⚙️",
                  color: "from-cyan-500 to-teal-500",
                },
                {
                  title: "AI-Powered Analytics & Insights",
                  desc: "Built-in analytics that provide real-time insights into your application performance and user behavior. Make data-driven decisions effortlessly.",
                  icon: "📊",
                  color: "from-orange-400 to-teal-500",
                },
                {
                  title: "Seamless Integration Capabilities",
                  desc: "Connect with 100+ systems through pre-built connectors. REST APIs, webhooks, and custom integrations ensure your applications work with your existing tech stack.",
                  icon: "🔗",
                  color: "from-teal-500 to-orange-400",
                },
                {
                  title: "Enterprise Security & Governance",
                  desc: "Role-based access control, audit trails, and compliance features ensure your applications meet the highest security standards.",
                  icon: "🛡️",
                  color: "from-cyan-500 to-orange-400",
                },
                {
                  title: "Mobile-First Responsive Design",
                  desc: "Every application you build is automatically optimized for desktop, tablet, and mobile devices. Reach your users wherever they are.",
                  icon: "📱",
                  color: "from-orange-400 to-cyan-500",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${feature.color} rounded-3xl p-8 text-white transform hover:scale-105 transition-all duration-300 shadow-xl`}
                >
                  <div className="flex items-start gap-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed text-lg">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {activeTab === "benefits" && (
          <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-orange-50 py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black text-slate-800 mb-6">
                  Why Choose
                  <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    No-Code Development?
                  </span>
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Democratize Innovation",
                    desc: "Empower every team member to contribute to digital transformation. No-code breaks down silos between business and IT.",
                    icon: "🚀",
                    stats: "100%",
                    statLabel: "Team Involvement",
                  },
                  {
                    title: "Accelerate Time-to-Market",
                    desc: "Build and deploy applications in days, not months. Respond to market changes with unprecedented speed.",
                    icon: "⚡",
                    stats: "10x",
                    statLabel: "Faster Delivery",
                  },
                  {
                    title: "Reduce Development Costs",
                    desc: "Eliminate the need for extensive developer resources. Focus your IT budget on strategic initiatives.",
                    icon: "💰",
                    stats: "95%",
                    statLabel: "Cost Reduction",
                  },
                  {
                    title: "Ensure Scalability & Security",
                    desc: "Enterprise-grade architecture that grows with your business. Built-in security and compliance features.",
                    icon: "🛡️",
                    stats: "∞",
                    statLabel: "Scalability",
                  },
                  {
                    title: "Foster Continuous Improvement",
                    desc: "Iterate rapidly based on user feedback. Make changes instantly without complex deployments.",
                    icon: "🔄",
                    stats: "24/7",
                    statLabel: "Deployment",
                  },
                  {
                    title: "Bridge the Skills Gap",
                    desc: "Address the global developer shortage by enabling citizen development across your organization.",
                    icon: "🤝",
                    stats: "0",
                    statLabel: "Coding Required",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 group"
                  >
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4 group-hover:animate-bounce">
                        {benefit.icon}
                      </div>
                      <div className="text-3xl font-black text-teal-600 mb-1">
                        {benefit.stats}
                      </div>
                      <div className="text-sm text-slate-500 font-medium">
                        {benefit.statLabel}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-center">
                      {benefit.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Comparison Section */}
        {activeTab === "comparison" && (
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black text-slate-800 mb-6">
                  No-Code vs Low-Code:
                  <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    Understanding the Difference
                  </span>
                </h2>
              </div>
              <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-teal-500 to-cyan-500 rounded-3xl p-8 text-white">
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">🎯</div>
                    <h3 className="text-3xl font-bold mb-4">
                      No-Code: True Accessibility
                    </h3>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-8">
                    No-code platforms eliminate coding entirely, making
                    application development accessible to everyone. Business
                    users can build complex applications without technical
                    expertise.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Zero coding required",
                      "Perfect for citizen developers",
                      "Rapid prototyping and deployment",
                      "Intuitive visual interfaces",
                      "Built-in best practices",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4">⚙️</div>
                    <h3 className="text-3xl font-bold mb-4 text-slate-800">
                      Low-Code: Professional Flexibility
                    </h3>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Low-code platforms offer visual development with the option
                    to add custom code when needed. Ideal for professional
                    developers who want to accelerate development.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Optional coding for complex scenarios",
                      "Best for professional developers",
                      "Advanced customization capabilities",
                      "Greater technical control",
                      "Extensive API integrations",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                        <span className="text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Applications Section */}
        {activeTab === "applications" && (
          <section className="bg-slate-900 text-white py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black mb-6">
                  What Can You Build with
                  <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    No-Code?
                  </span>
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  From simple forms to complex enterprise applications, no-code
                  platforms enable you to build virtually any digital solution
                  your business needs.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Customer Portals",
                    icon: "👥",
                    desc: "Self-service platforms for customers",
                  },
                  {
                    name: "Workflow Automation",
                    icon: "⚙️",
                    desc: "Streamline business processes",
                  },
                  {
                    name: "Data Dashboards",
                    icon: "📊",
                    desc: "Real-time analytics and reporting",
                  },
                  {
                    name: "Mobile Apps",
                    icon: "📱",
                    desc: "Native mobile applications",
                  },
                  {
                    name: "E-commerce Platforms",
                    icon: "🛒",
                    desc: "Online stores and marketplaces",
                  },
                  {
                    name: "HR Management Systems",
                    icon: "👔",
                    desc: "Employee lifecycle management",
                  },
                  {
                    name: "Project Management Tools",
                    icon: "📋",
                    desc: "Team collaboration platforms",
                  },
                  {
                    name: "Inventory Systems",
                    icon: "📦",
                    desc: "Stock and supply chain management",
                  },
                  {
                    name: "Booking & Reservation",
                    icon: "📅",
                    desc: "Appointment and resource scheduling",
                  },
                ].map((app, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 border border-slate-700/50 group"
                  >
                    <div className="text-center">
                      <div className="text-5xl mb-6 group-hover:animate-bounce">
                        {app.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-white">
                        {app.name}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {app.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Industries */}
              <div className="mt-20">
                <h3 className="text-3xl font-bold text-center mb-12 text-white">
                  No-Code Solutions Across Industries
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    "Healthcare",
                    "Finance",
                    "Manufacturing",
                    "Retail",
                    "Education",
                    "Real Estate",
                    "Legal",
                    "Non-Profit",
                    "Construction",
                    "Logistics",
                    "Hospitality",
                    "Government",
                    "Energy",
                    "Agriculture",
                    "Media",
                    "Technology",
                  ].map((industry, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-6 py-3 hover:from-teal-500/30 hover:to-cyan-500/30 transition-all duration-300"
                    >
                      <span className="text-teal-300 font-medium">
                        {industry}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Success Stories */}
        {activeTab === "success" && (
          <section className="bg-gradient-to-r from-teal-600 via-cyan-600 to-orange-500 py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black text-white mb-6">
                  Real Success Stories
                </h2>
                <p className="text-xl text-white/90 max-w-3xl mx-auto">
                  See how organizations are transforming their business with
                  DeepKore&apos;s no-code platform
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    company: "Global Retail Chain",
                    achievement: "300% faster app deployment",
                    description:
                      "Built a comprehensive inventory management system in 2 weeks instead of 6 months.",
                    icon: "🏪",
                    color: "from-orange-400 to-teal-500",
                  },
                  {
                    company: "Healthcare Provider",
                    achievement: "95% reduction in paperwork",
                    description:
                      "Digitized patient intake and appointment scheduling, eliminating manual processes.",
                    icon: "🏥",
                    color: "from-teal-500 to-cyan-500",
                  },
                  {
                    company: "Financial Services Firm",
                    achievement: "$2.5M annual savings",
                    description:
                      "Automated compliance reporting and risk assessment workflows.",
                    icon: "🏦",
                    color: "from-cyan-500 to-orange-400",
                  },
                  {
                    company: "Manufacturing Company",
                    achievement: "50% improvement in efficiency",
                    description:
                      "Created real-time production monitoring and quality control dashboards.",
                    icon: "🏭",
                    color: "from-orange-400 to-cyan-500",
                  },
                ].map((story, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${story.color} rounded-2xl flex items-center justify-center`}
                      >
                        <span className="text-3xl">{story.icon}</span>
                      </div>
                      <div>
                        <div className="text-orange-300 font-bold text-lg">
                          {story.achievement}
                        </div>
                        <h3 className="text-white font-bold text-xl">
                          {story.company}
                        </h3>
                      </div>
                    </div>
                    <p className="text-white/90 leading-relaxed text-lg">
                      {story.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {activeTab === "faq" && (
          <section className="py-20">
            <div className="container mx-auto px-6 max-w-4xl">
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black text-slate-800 mb-6">
                  No-Code
                  <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    FAQ
                  </span>
                </h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    question: "Is no-code development secure?",
                    answer:
                      "Absolutely. DeepKore&apos;s no-code platform includes enterprise-grade security features like encryption, role-based access control, audit trails, and compliance with industry standards like SOC 2, GDPR, and HIPAA.",
                  },
                  {
                    question: "Can no-code applications scale?",
                    answer:
                      "Yes, our platform is built on scalable cloud infrastructure that can handle millions of users and transactions. Applications automatically scale based on demand.",
                  },
                  {
                    question: "Do I need technical skills to use no-code?",
                    answer:
                      "No technical skills are required. Our visual interface is designed to be intuitive for business users. However, having domain knowledge about your business processes is helpful.",
                  },
                  {
                    question: "How long does it take to build an application?",
                    answer:
                      "Simple applications can be built in hours or days. Complex enterprise applications typically take 1-4 weeks, compared to 6-12 months with traditional development.",
                  },
                  {
                    question: "Can I integrate with existing systems?",
                    answer:
                      "Yes, our platform offers 100+ pre-built connectors and APIs for seamless integration with popular business systems like Salesforce, SAP, Microsoft Dynamics, and more.",
                  },
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-8 bg-gradient-to-r from-slate-50 to-teal-50 hover:from-teal-50 hover:to-cyan-50 transition-all duration-300 flex justify-between items-center group"
                    >
                      <h3 className="text-xl font-bold text-slate-800 pr-4 group-hover:text-teal-600 transition-colors">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-6 h-6 text-teal-600 transform transition-transform duration-300 ${
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
                      className={`overflow-hidden transition-all duration-500 ${
                        expandedFaq === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-slate-600 p-8 pt-0 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-black mb-6">
              Ready to Start Building with
              <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                No-Code?
              </span>
            </h2>
            <p className="text-xl mb-12 text-slate-300 max-w-3xl mx-auto">
              Join thousands of organizations already transforming their
              business with DeepKore&apos;s no-code platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                START FREE TRIAL
              </button>
              <button className="bg-white hover:bg-slate-100 text-slate-800 px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
                SCHEDULE DEMO
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white p-4 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 ${
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

      <Footer />
    </div>
  );
};

export default NoCode;
