"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Target,
  BookOpen,
  Users,
  Diamond,
  Rocket,
  Globe,
  Zap,
  Shield,
  Cloud,
  Lock,
  BoltIcon,
  Linkedin,
} from "lucide-react";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { label: "AI Agents Implemented", value: 100, suffix: "+" },
    { label: "Users Worldwide", value: 1000, suffix: "+" },
    { label: "Industries Served", value: 12, suffix: "+" },
    { label: "Uptime", value: 99.9, suffix: "%" },
  ];

  const milestones = [
    {
      year: "Nov 2023",
      title: "Product Design & Dev",
      description:
        "Initial phase focused on designing and developing our core platform.",
      icon: <Target className="w-6 h-6" />,
    },
    {
      year: "Jan 2025",
      title: "Product Completion",
      description:
        "Successfully completed the development of our core product features and capabilities.",
      icon: <BoltIcon className="w-6 h-6" />,
    },
    {
      year: "Mar 2025",
      title: "Product Launch",
      description: "Official launch of Deepkore platform to the market.",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      year: "April 2025",
      title: "Multiple verticals",
      description:
        "Expansion into diverse industry verticals with specialized solutions.",
      icon: <Diamond className="w-6 h-6" />,
    },
    {
      year: "June 2025",
      title: "First Customer",
      description:
        "Onboarding of our first customer, marking a significant milestone.",
      icon: <Diamond className="w-6 h-6" />,
    },
    {
      year: "Sept 2025",
      title: "AI enablement",
      description:
        "Integration of advanced AI capabilities across our platform.",
      icon: <Zap className="w-6 h-6" />,
    },

    {
      year: "Jan 2027",
      title: "Geographic Expansion",
      description: "Strategic expansion into new geographic markets worldwide.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      year: "June 2027",
      title: "IPO",
      description: "Major milestone with our initial public offering.",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovate with Purpose",
      description:
        "We are driven by a relentless curiosity to push the boundaries of what's possible with AI. But for us, innovation isn't just about creating new technology; it's about solving real-world business problems. We build intelligent solutions with a clear purpose: to deliver practical, powerful, and transformative results for our customers.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Success is Our Success",
      description:
        "We view our customers as partners on a shared journey of transformation. Your goals are our goals. We are deeply committed to understanding your challenges and are not satisfied until our platform delivers a tangible, measurable impact on your ROI and operational efficiency. Your success is the ultimate measure of our own.",
      color: "from-green-500 to-blue-500",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Move with Agility and Excellence",
      description:
        "In the modern enterprise, speed is critical, but it can never come at the expense of quality. We operate with a sense of urgency to help you innovate faster, while holding ourselves to the highest standards of excellence, security, and reliability. We deliver robust, enterprise-grade solutions with the speed and agility your business demands.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Empowerment Through Simplicity",
      description:
        "Our mission is to democratize the power of advanced AI. We believe the most powerful solutions are those that are accessible to everyone. We are passionate about transforming complex technology into simple, intuitive tools that empower your business experts—the people who know your processes best—to build, innovate, and drive change from within.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Act with Integrity, Always",
      description:
        "Trust is the currency of every great partnership. We are committed to upholding the highest standards of transparency, honesty, and security in everything we do. From protecting your data to communicating openly, we believe that acting with unwavering integrity is the only way to build lasting relationships with our customers, partners, and team.",
      color: "from-gray-500 to-slate-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Champion Ethical AI",
      description:
        "We are committed to developing AI that is ethical, transparent, and beneficial to society. We prioritize responsible AI practices, ensuring our technology enhances human potential without compromising values or privacy.",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const team = [
    {
      name: "Murugan Mariappan",
      role: "Co-Founder at Deepkore",
      image: "/images/muru.jpg",
      bio: "With 25+ years in global consultancy and leadership across regions, specializing in SAP solutions, process optimization, and continuous improvement. Early experience in cement, chemical, and rubber manufacturing shaped a passion for efficiency, further refined in industries like oil & gas, petrochemicals, manufacturing, and utilities.",
      linkedin:
        "https://www.linkedin.com/in/murugan-mariappan-02623b2/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWvtdeGq4SfaG%2Bd8ANnWMkg%3D%3D",
    },
    {
      name: "Kris Gopalakrishnan",
      role: "Co-Founder at Deepkore",
      image: "/images/kris.jpeg",
      bio: "25+ years' experience in transformative IT strategies, ERP implementation, and digital business growth, client focus, and risk mitigation. Proven track record in driving high-profile transformations across Oil & Gas, Engineering, Manufacturing, and FMCG sectors, delivering innovative digital initiatives and surpassing expectations.",
      linkedin:
        "https://www.linkedin.com/in/kris-sr-technology-and-business-transformation-leadership-expert/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbzhLeDSkS1qzRXgSWPXVAQ%3D%3D",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section id="about" className="relative py-10  overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1920),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1080),
              opacity: 0,
            }}
            animate={{
              y: [null, -100, null],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="px-6 py-2 bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
              <span className="text-blue-400 font-medium text-sm tracking-wider uppercase">
                About Deepkore
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Pioneering the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400">
              {" "}
              Future of AI
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            We&apos;re on a mission to democratize artificial intelligence,
            making cutting-edge technology accessible to creators, businesses,
            and innovators worldwide.
          </motion.p>

          {/* Animated Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 mb-2"
                  animate={{
                    scale: index === currentStat ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {index === currentStat ? (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      key={currentStat}
                    >
                      {stat.value.toLocaleString()}
                      {stat.suffix}
                    </motion.span>
                  ) : (
                    `${stat.value.toLocaleString()}${stat.suffix}`
                  )}
                </motion.div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Interactive Tabs Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-100/50 backdrop-blur-xl rounded-2xl p-2 border border-gray-300/50">
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  {
                    id: "mission",
                    label: "Our Mission",
                    icon: <Target className="w-5 h-5" />,
                  },
                  {
                    id: "story",
                    label: "Our Story",
                    icon: <BookOpen className="w-5 h-5" />,
                  },
                  {
                    id: "team",
                    label: "Our Team",
                    icon: <Users className="w-5 h-5" />,
                  },
                  {
                    id: "values",
                    label: "Our Values",
                    icon: <Diamond className="w-5 h-5" />,
                  },
                ].map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg"
                        : "text-gray-600 hover:text-black hover:bg-gray-200/50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="text-lg">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="min-h-[400px]"
            >
              {activeTab === "mission" && (
                <div className="text-center">
                  <motion.div
                    className="bg-gradient-to-br from-gray-100/50 to-gray-200/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-300/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="text-6xl md:text-8xl mb-8"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      🎯
                    </motion.div>
                    <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                      Our Mission & Approach
                    </h3>
                    <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                      Our mission is to democratize AI-powered development. We
                      believe that the people with the best understanding of a
                      business process should be empowered to improve it.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                      {[
                        {
                          icon: <Rocket className="w-8 h-8" />,
                          title: "Speed",
                          desc: "Turn months of development into days, allowing you to innovate and adapt at the speed of your market",
                        },
                        {
                          icon: <Zap className="w-8 h-8" />,
                          title: "Intelligence",
                          desc: "Beyond automation with autonomous AI agents managing complex workflows, analyzing data, and optimizing outcomes",
                        },
                        {
                          icon: <Users className="w-8 h-8" />,
                          title: "Partnership",
                          desc: "Strategic partner in business transformation, aligning technical innovation with enterprise growth and ROI",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-100/50 rounded-xl p-6 border border-gray-300/50"
                          whileHover={{ scale: 1.05, y: -5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="text-4xl mb-4">{item.icon}</div>
                          <h4 className="text-lg font-bold text-black mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-600">{item.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}

              {activeTab === "story" && (
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
                    Our Journey Through Time
                  </h3>
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-green-500 rounded-full"></div>

                    <div className="space-y-12">
                      {milestones.map((milestone, index) => (
                        <motion.div
                          key={index}
                          className={`flex items-center ${
                            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                          }`}
                          initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -50 : 50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div
                            className={`w-1/2 ${
                              index % 2 === 0
                                ? "pr-8 text-right"
                                : "pl-8 text-left"
                            }`}
                          >
                            <motion.div
                              className="bg-gradient-to-br from-gray-100/50 to-gray-200/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-300/50"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className="text-2xl mb-2">
                                {milestone.icon}
                              </div>
                              <h4 className="text-xl font-bold text-black mb-2">
                                {milestone.title}
                              </h4>
                              <p className="text-gray-700 mb-2">
                                {milestone.description}
                              </p>
                              <div className="text-blue-400 font-semibold">
                                {milestone.year}
                              </div>
                            </motion.div>
                          </div>
                          <div className="relative">
                            <motion.div
                              className="w-4 h-4 bg-gradient-to-r from-blue-500 to-green-500 rounded-full border-4 border-white"
                              whileHover={{ scale: 1.5 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            />
                          </div>
                          <div className="w-1/2"></div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "team" && (
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
                    Meet Our Visionaries
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {team.map((member, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-br from-gray-100/50 to-gray-200/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-300/50 text-center group"
                        whileHover={{ scale: 1.05, y: -10 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          opacity: { duration: 0.6, delay: index * 0.2 },
                          y: { duration: 0.6, delay: index * 0.2 },
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="relative mb-6 mx-auto"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={120}
                            height={120}
                            className="rounded-full mx-auto shadow-lg"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 opacity-0  transition-opacity duration-300"></div>
                        </motion.div>
                        <h4 className="text-xl font-bold text-black mb-2">
                          {member.name}
                        </h4>
                        <p className="text-blue-400 font-medium mb-4">
                          {member.role}
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {member.bio}
                        </p>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                        >
                          <Linkedin className="w-5 h-5" />
                          <span className="text-sm font-medium">LinkedIn</span>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "values" && (
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
                    Our Core Values
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {values.map((value, index) => (
                      <motion.div
                        key={index}
                        className="bg-gradient-to-br from-gray-100/50 to-gray-200/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-300/50 group"
                        whileHover={{ scale: 1.05, y: -10 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          opacity: { duration: 0.6, delay: index * 0.2 },
                          y: { duration: 0.6, delay: index * 0.2 },
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-start space-x-6">
                          <motion.div
                            className="text-5xl"
                            animate={{
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              delay: index * 0.5,
                              ease: "easeInOut",
                            }}
                          >
                            {value.icon}
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="text-2xl font-bold text-black mb-3">
                              {value.title}
                            </h4>
                            <p className="text-gray-700 leading-relaxed">
                              {value.description}
                            </p>
                            <motion.div
                              className={`mt-4 h-1 bg-gradient-to-r ${value.color} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{ duration: 1, delay: 0.5 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="/get-started">
            <motion.button
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Mission
            </motion.button>
          </a>

          <motion.p
            className="text-gray-600 mt-4 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Be part of the AI revolution that&apos;s shaping the future
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
