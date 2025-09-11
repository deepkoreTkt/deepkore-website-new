"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ProductShowcase: React.FC = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const demos = [
    {
      title: "Dataform",
      description:
        "Our platform's Data Form feature allows you to create custom forms effortlessly without coding. With a drag-and-drop interface, it streamlines data collection, validation, and integration into your applications.",
      image: "/classic02.png",
      features: ["Drag & Drop", "No Coding", "Data Validation"],
    },
    {
      title: "Process Automation",
      description:
        "Automate complex workflows without code. Our platform's Process feature lets you design and automate processes with a simple drag-and-drop interface. Integrates seamlessly with your data and scales with your business.",
      image: "/classic04.png",
      features: ["Workflow Automation", "Drag & Drop", "Seamless Integration"],
    },
    {
      title: "Custom Applications",
      description:
        "Our platform's App feature allows you to create custom applications tailored to your business needs without any coding. With an intuitive interface and pre-built components, you can design, deploy, and manage apps quickly.",
      image: "/classic05.png",
      features: ["No Coding", "Pre-built Components", "Quick Deployment"],
    },
    {
      title: "Analytics & Insights",
      description:
        "Our platform's Analytics feature empowers you to turn data into actionable insights effortlessly. With intuitive dashboards and customizable reports, you can visualize key metrics and track performance in real time.",
      image: "/Main.png",
      features: [
        "Real-time Dashboards",
        "Custom Reports",
        "Data Visualization",
      ],
    },
  ];

  const features = [
    {
      icon: "/dataForm.svg",
      title: "Dataform",
      description:
        "Create custom forms effortlessly without coding. Drag-and-drop interface for streamlined data collection.",
    },
    {
      icon: "/process.svg",
      title: "Process",
      description:
        "Automate complex workflows without code. Design and automate processes with drag-and-drop interface.",
    },
    {
      icon: "/appwithhand.svg",
      title: "App",
      description:
        "Create custom applications without coding. Intuitive interface with pre-built components.",
    },
    {
      icon: "/analytics.svg",
      title: "Analytics",
      description:
        "Turn data into actionable insights effortlessly. Visualize key metrics and track performance.",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentDemo((prev) => (prev + 1) % demos.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, demos.length]);

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
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
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
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
                Enterprise Application Platform
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Leading Enterprise Application
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400">
              {" "}
              Platform
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Transform your business and boost productivity with Deepkore.
            Effortlessly build Enterprise apps that keep pace with your
            business&apos;s rapid growth—all without writing a single line of
            code.
          </motion.p>
        </motion.div>

        {/* Main Showcase */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Interactive Demo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              <motion.div
                className="relative bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Demo Navigation */}
                <div className="flex justify-center mb-6">
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-2 border border-slate-700/50">
                    <div className="flex space-x-2">
                      {demos.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentDemo(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentDemo === index
                              ? "bg-gradient-to-r from-blue-500 to-green-500 scale-125"
                              : "bg-gray-600 hover:bg-gray-500"
                          }`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Demo Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDemo}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <motion.h3
                      className="text-2xl font-bold text-white mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {demos[currentDemo].title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {demos[currentDemo].description}
                    </motion.p>

                    {/* Feature Tags */}
                    <motion.div
                      className="flex flex-wrap justify-center gap-2 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {demos[currentDemo].features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Interface Mockup */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="bg-gradient-to-br from-blue-600/20 to-green-600/20 rounded-2xl p-6 backdrop-blur-sm border border-blue-500/20">
                    <motion.div
                      className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentDemo}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={demos[currentDemo].image}
                            alt={`${demos[currentDemo].title} Interface`}
                            width={600}
                            height={300}
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Interface Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white text-sm">
                          <span className="bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                            Deepkore Vision Pro
                          </span>
                          <span className="bg-green-500/20 px-3 py-1 rounded-full backdrop-blur-sm border border-green-500/30">
                            Active
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Feature Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-12 h-12 mb-4 flex items-center justify-center bg-white rounded-xl"
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
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </motion.div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="/getstarted">
              <motion.button
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Demo
              </motion.button>
            </a>

            <motion.p
              className="text-gray-400 mt-4 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              Deepkore lets you transform ideas into powerful Enterprise
              applications that adapt to your business needs. One platform. No
              coding. Completely hassle-free.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
