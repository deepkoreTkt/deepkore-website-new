"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Video, BookOpen } from "lucide-react";
import IconMenuMarquee from "../components/IconMenuMarquee";

const MarketingInsights: React.FC = () => {
  const insights = [
    {
      step: "01",
      label: "Start Free Trial",
      title: "Experience Deepkore Risk-Free",
      description:
        "Dive into our platform with a full-featured trial. No commitments, no credit card required. Discover how Deepkore transforms your workflows.",
      icon: "🚀",
      buttonText: "Start Trial",
      href: "/getstarted",
      color: "from-amber-500 to-orange-500",
    },
    {
      step: "02",
      label: "Schedule Demo",
      title: "See It In Action",
      description:
        "Get a personalized demonstration tailored to your industry and challenges. Our experts will show you real-world applications and ROI.",
      icon: "📹",
      buttonText: "Book Demo",
      href: "/getstarted",
      color: "from-violet-500 to-purple-500",
    },
    {
      step: "03",
      label: "Explore Resources",
      title: "Learn & Get Inspired",
      description:
        "Access our comprehensive library of case studies, tutorials, webinars, and industry insights to maximize your Deepkore experience.",
      icon: "📚",
      buttonText: "View Resources",
      href: "/solution",
      color: "from-emerald-500 to-green-500",
    },
  ];

  const icons = [
    <Rocket key="rocket" className="text-4xl text-purple-500" />,
    <Video key="video" className="text-4xl text-cyan-400" />,
    <BookOpen key="book" className="text-4xl text-green-400" />,
  ];

  return (
    <section className="relative py-32 bg-[#071933] overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-40 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-5xl font-bold text-white mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transform Your Business
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join thousands of companies already leveraging Deepkore&apos;s
            power. Start your journey today.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Connecting Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                viewport={{ once: true }}
              >
                {/* Step Number */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center border-4 border-gray-500 shadow-lg">
                    <span className="text-white font-bold text-sm">
                      {insight.step}
                    </span>
                  </div>
                </div>

                <motion.div
                  className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-lg transition-all duration-300 min-h-[450px] flex flex-col justify-between relative overflow-hidden"
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(147, 51, 234, 0.3)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative z-10 mt-4">
                    {/* Icon and Title Row */}
                    <div className="flex items-center mb-6">
                      <motion.div
                        className="mr-4"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {icons[index]}
                      </motion.div>
                      <div>
                        <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">
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

                  {/* Button */}
                  <motion.a
                    href={insight.href}
                    className="inline-block w-full py-4 px-8 text-center text-lg font-bold rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{insight.buttonText}</span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
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
