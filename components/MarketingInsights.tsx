"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Video, BookOpen, Sparkles } from "lucide-react";
import IconMenuMarquee from "../components/IconMenuMarquee";

const MarketingInsights: React.FC = () => {
  const insights = [
    {
      step: "01",
      label: "Start Free Trial",
      title: "Experience Deepkore Risk-Free",
      description:
        "Dive into our platform with a full-featured trial. No commitments, no credit card required. Discover how Deepkore transforms your workflows.",
      icon: Rocket,
      buttonText: "Start Trial",
      href: "/getstarted",
      color: "from-cyan-400 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
    },
    {
      step: "02",
      label: "Schedule Demo",
      title: "See It In Action",
      description:
        "Get a personalized demonstration tailored to your industry and challenges. Our experts will show you real-world applications and ROI.",
      icon: Video,
      buttonText: "Book Demo",
      href: "/getstarted",
      color: "from-purple-400 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10",
    },
    {
      step: "03",
      label: "Explore Resources",
      title: "Learn & Get Inspired",
      description:
        "Access our comprehensive library of case studies, tutorials, webinars, and industry insights to maximize your Deepkore experience.",
      icon: BookOpen,
      buttonText: "View Resources",
      href: "/solution",
      color: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-500/10 to-teal-500/10",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 md:px-12 lg:px-40 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-medium">
              Transform Your Business
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Ready to Innovate?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Join thousands of companies already leveraging Deepkore&apos;s
            power. Start your journey today and unlock unprecedented efficiency.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Enhanced Connecting Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {insights.map((insight, index) => {
              const IconComponent = insight.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Step Number with Glow */}
                  <div className="absolute -top-6  z-20">
                    <motion.div className="w-14 h-14 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center border-4 border-white/20 shadow-2xl backdrop-blur-sm">
                      <span className="text-white font-bold text-lg">
                        {insight.step}
                      </span>
                    </motion.div>
                  </div>

                  <motion.div
                    className={`relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl transition-all duration-500 min-h-[500px] flex flex-col justify-between overflow-hidden bg-gradient-to-br ${insight.bgGradient}`}
                    whileHover={{
                      y: -15,
                      scale: 1.05,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative z-10 mt-4">
                      {/* Icon and Title Row */}
                      <div className="flex items-start mb-6">
                        <motion.div
                          className="mr-4 p-3 bg-white/20 rounded-2xl backdrop-blur-sm"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <IconComponent className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-cyan-300 uppercase tracking-wider mb-2">
                            {insight.label}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                            {insight.title}
                          </h3>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {insight.description}
                      </p>
                    </div>

                    {/* Enhanced Button */}
                    <motion.a
                      href={insight.href}
                      className={`inline-block w-full py-4 px-8 text-center text-lg font-bold rounded-2xl bg-gradient-to-r ${insight.color} text-white hover:shadow-2xl transition-all duration-300 relative overflow-hidden group/btn`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {insight.buttonText}
                        <motion.div>→</motion.div>
                      </span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 "></div>
                    </motion.a>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="mt-20">
        <IconMenuMarquee />
      </div>
    </section>
  );
};

export default MarketingInsights;
