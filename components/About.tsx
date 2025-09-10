"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState("mission");
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { label: "AI Models Trained", value: 500, suffix: "+" },
    { label: "Users Worldwide", value: 1000000, suffix: "+" },
    { label: "Countries Served", value: 120, suffix: "+" },
    { label: "Uptime", value: 99.9, suffix: "%" },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description:
        "Deepkore was founded with a vision to democratize artificial intelligence.",
      icon: "🚀",
    },
    {
      year: "2021",
      title: "First Breakthrough",
      description:
        "Launched our first neural network model, revolutionizing creative workflows.",
      icon: "🧠",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to serve millions of users across 80+ countries.",
      icon: "🌍",
    },
    {
      year: "2023",
      title: "Neural Vision 3.0",
      description:
        "Released advanced computer vision capabilities with unprecedented accuracy.",
      icon: "👁️",
    },
    {
      year: "2024",
      title: "Enterprise Solutions",
      description:
        "Launched enterprise-grade AI solutions for Fortune 500 companies.",
      icon: "🏢",
    },
    {
      year: "2025",
      title: "Neural Vision 3.5",
      description:
        "Current generation with cutting-edge multimodal AI capabilities.",
      icon: "⚡",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Innovation First",
      description:
        "We push the boundaries of AI technology to solve real-world problems.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🤝",
      title: "Human-Centric",
      description: "AI should augment human capabilities, not replace them.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "🔒",
      title: "Privacy & Security",
      description:
        "Your data is protected with enterprise-grade security measures.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "🌱",
      title: "Sustainable AI",
      description: "Developing AI that benefits society and the environment.",
      color: "from-teal-500 to-green-500",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      expertise: "Neural Networks & ML",
    },
    {
      name: "Marcus Johnson",
      role: "Head of Engineering",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      expertise: "Scalable Systems",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      expertise: "Computer Vision",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
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

          <motion.h1
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
          </motion.h1>

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
                  { id: "mission", label: "Our Mission", icon: "🎯" },
                  { id: "story", label: "Our Story", icon: "📖" },
                  { id: "team", label: "Our Team", icon: "👥" },
                  { id: "values", label: "Our Values", icon: "💎" },
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
                      Democratizing Artificial Intelligence
                    </h3>
                    <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                      We believe that artificial intelligence should be
                      accessible to everyone, not just large corporations. Our
                      mission is to create intuitive, powerful AI tools that
                      empower creators, entrepreneurs, and innovators to bring
                      their ideas to life faster and more efficiently than ever
                      before.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                      {[
                        {
                          icon: "🚀",
                          title: "Innovation",
                          desc: "Pushing AI boundaries",
                        },
                        {
                          icon: "🌍",
                          title: "Accessibility",
                          desc: "AI for everyone",
                        },
                        {
                          icon: "⚡",
                          title: "Efficiency",
                          desc: "Faster workflows",
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.div>
                        <h4 className="text-xl font-bold text-black mb-2">
                          {member.name}
                        </h4>
                        <p className="text-blue-400 font-medium mb-2">
                          {member.role}
                        </p>
                        <p className="text-gray-600 text-sm">
                          {member.expertise}
                        </p>
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
          <motion.button
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Our Mission
          </motion.button>

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
