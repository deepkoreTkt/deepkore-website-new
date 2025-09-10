"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TargetAudience: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const metrics = [
    {
      percentage: "97%",
      title: "CSAT",
      gradient: "from-blue-500 to-purple-500",
      image: "/classic04.png", // Correct public path for Next.js
      points: [
        "Hello, happiness.",
        "Looking for higher satisfaction scores? Solve more customer and employee issues, more quickly and easily. People love that.",
        "See the Freshservice Benchmark Report",
      ],
    },
    {
      percentage: "77%",
      title: "First Contact Resolution (FCR)",
      gradient: "from-purple-500 to-cyan-500",
      image: "/classic05.png",
      points: [
        "Get answers. Get going.",
        "Agentic AI gives users the freedom to find, fix, and finish their issues with a click.",
        "See the Customer Service Benchmark Report",
      ],
    },
  ];

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "none" }}
    >
      {/* Custom vibrant background image overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/bg1.png"
          alt="Vibrant background"
          className="w-full h-full object-cover"
          style={{ pointerEvents: "none", userSelect: "none" }}
        />
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>
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
              <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
                Built For Everyone
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Designed for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-400">
              Ease
            </span>
            , Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              Value
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Deepkore delivers enterprise-grade AI performance without the
            complexity. Experience seamless integration, unmatched reliability,
            and transformative results.
          </motion.p>
        </motion.div>

        {/* Single Metric Card Slider */}
        <div className="relative max-w-4xl mx-auto flex items-center justify-center">
          {/* Left Arrow */}
          <button
            className="absolute left-0 z-20 p-2 bg-white rounded-full shadow hover:bg-blue-100 transition disabled:opacity-30"
            onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
            disabled={currentIndex === 0}
            aria-label="Previous"
          >
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Card */}
          <motion.div
            key={currentIndex}
            className="group relative w-full max-w-3xl mx-auto flex bg-white rounded-3xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => setHoveredIndex(currentIndex)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            {/* Left Section: Metric */}
            <div className="flex-1 p-8 flex flex-col justify-center">
              <div
                className={`text-5xl font-bold mb-2 bg-gradient-to-r ${metrics[currentIndex].gradient} bg-clip-text text-transparent`}
              >
                {metrics[currentIndex].percentage}
                <span className="text-gray-400">%</span>
              </div>
              <div className="text-2xl font-bold mb-4 text-gray-800">
                {metrics[currentIndex].title}
              </div>
              <ul className="mt-4 mb-2 space-y-2">
                {metrics[currentIndex].points.map((point, idx) => (
                  <li
                    key={idx}
                    className={
                      idx === 0
                        ? "font-semibold text-lg"
                        : "text-gray-600 text-base"
                    }
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            {/* Right Section: Image */}
            <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
              <img
                src={metrics[currentIndex].image}
                alt={metrics[currentIndex].title + " illustration"}
                className="max-h-64 rounded-xl shadow-md object-contain"
              />
            </div>
          </motion.div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 z-20 p-2 bg-white rounded-full shadow hover:bg-blue-100 transition disabled:opacity-30"
            onClick={() =>
              setCurrentIndex((prev) => Math.min(prev + 1, metrics.length - 1))
            }
            disabled={currentIndex === metrics.length - 1}
            aria-label="Next"
          >
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 z-20 p-2 bg-white rounded-full shadow hover:bg-blue-100 transition disabled:opacity-30"
          onClick={() =>
            setCurrentIndex((prev) => Math.min(prev + 1, metrics.length - 1))
          }
          disabled={currentIndex === metrics.length - 1}
          aria-label="Next"
        >
          <svg
            width="32"
            height="32"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {metrics.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              currentIndex === index
                ? "bg-gradient-to-r from-blue-500 to-green-500"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Journey
        </motion.button>
      </motion.div>
    </section>
  );
};
export default TargetAudience;
