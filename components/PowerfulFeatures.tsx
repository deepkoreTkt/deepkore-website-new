"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PowerfulFeatures: React.FC = () => {
  const features = [
    {
      title: "Data Form",
      description: "Create custom forms effortlessly without coding.",
      avatar: "/dataform1.png",
    },
    {
      title: "Process",
      description:
        "Design and automate processes with a simple drag-and-drop interface.",
      avatar: "/process.png",
    },
    {
      title: "Integration",
      description:
        "Connect seamlessly with your existing tools and applications.",
      avatar: "/classic02.png",
    },
    {
      title: "Analytics",
      description: "Turn data into actionable insights effortlessly.",
      avatar: "/analytics1.png",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleTabClick = (index: number) => {
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 min-h-[800px]">
      <div className="container mx-auto px-40 md:px-40">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-8">
            <div className="px-8 py-3 bg-gradient-to-r from-blue-500/15 to-green-500/15 dark:from-blue-600/40 dark:to-green-600/40 border border-blue-500/20 dark:border-blue-600/50 rounded-full backdrop-blur-sm shadow-lg">
              <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm tracking-wider uppercase">
                Powerful Features
              </span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 drop-shadow-lg leading-tight">
            All Your Tasks,{" "}
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Organized Effortlessly
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
          {/* Vertical Tabs */}
          <div className="flex md:flex-col gap-2 w-full md:w-1/3">
            {features.map((feature, idx) => (
              <button
                key={feature.title}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors text-left w-full border-l-4 ${
                  activeTab === idx
                    ? "bg-blue-50 border-blue-500 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-400"
                    : "bg-white border-transparent hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                }`}
                onClick={() => handleTabClick(idx)}
              >
                <div>
                  <div className="font-semibold text-lg">{feature.title}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Card Content - Prominent Image UI */}
          <motion.div
            key={activeTab}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            className="w-full md:w-2/3 flex justify-center"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl">
              <Image
                src={features[activeTab].avatar}
                alt={features[activeTab].title}
                width={600}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="/feature">
            <motion.button
              className="px-10 py-5 mb-5 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              whileHover={{ scale: 1.07, y: -2 }}
              whileTap={{ scale: 0.97 }}
              type="button"
            >
              Explore All Features
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PowerfulFeatures;
