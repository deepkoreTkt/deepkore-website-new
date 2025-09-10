"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Benefits: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const benefits = [
    {
      title: "Easy for Anyone",
      subtitle: "Simplify collaboration for everyone.",
      description:
        "Deepkore&apos;s intuitive design ensures anyone, regardless of technical expertise, can harness AI tools effortlessly.",
      icon: "👥",
      gradient: "from-blue-500 to-green-600",
    },
    {
      title: "So. Fast.",
      subtitle: "Accelerate your team's productivity",
      description:
        "Deepkore delivers lightning-fast results, streamlining workflows and saving valuable time on every task.",
      icon: "⚡",
      gradient: "from-green-500 to-blue-600",
    },
    {
      title: "Smart Solutions",
      subtitle: "AI built for smarter business decisions.",
      description:
        "Unlock innovative possibilities with Deepkore&apos;s intelligent tools, designed to optimize efficiency and insight.",
      icon: "🧠",
      gradient: "from-blue-600 to-green-500",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % benefits.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, benefits.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Deepkore does powerful work in a really simple way
          </h2>
          <p className="text-gray-400 text-lg">
            All within an enterprise-grade secure environment.
          </p>
        </motion.div>

        {/* Slideshow Container */}
        <div className="max-w-4xl mx-auto relative">
          <div
            className="relative h-96 md:h-80 overflow-hidden rounded-3xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence custom={currentSlide} mode="wait">
              <motion.div
                key={currentSlide}
                custom={currentSlide}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                className="absolute inset-0"
              >
                <div
                  className={`bg-gradient-to-br ${benefits[currentSlide].gradient} p-8 md:p-12 h-full rounded-3xl shadow-2xl`}
                >
                  <div className="flex flex-col md:flex-row items-center justify-between h-full">
                    <div className="flex-1 text-center md:text-left">
                      <div className="text-6xl md:text-7xl mb-6">
                        {benefits[currentSlide].icon}
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        {benefits[currentSlide].title}
                      </h3>
                      <h4 className="text-xl md:text-2xl text-white/90 mb-4">
                        {benefits[currentSlide].subtitle}
                      </h4>
                      <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                        {benefits[currentSlide].description}
                      </p>
                    </div>

                    {/* Slide Counter */}
                    <div className="mt-8 md:mt-0 md:ml-8">
                      <div className="text-white/60 text-sm font-medium">
                        {String(currentSlide + 1).padStart(2, "0")}
                      </div>
                      <div className="text-white/30 text-xs">
                        / {String(benefits.length).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {benefits.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-8 bg-white"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentSlide && (
                  <motion.div
                    className="absolute inset-0 bg-white rounded-full"
                    initial={{ width: "100%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2 text-white/60 text-sm">
              <div
                className={`w-2 h-2 rounded-full ${
                  isAutoPlaying ? "bg-green-500" : "bg-gray-400"
                }`}
              ></div>
              <span>{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
            </div>
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            <h3 className="text-2xl font-bold mb-2">
              We use advanced AI tools to enhance our systems
            </h3>
            <p className="text-gray-400">
              for delivering smarter solutions to transform the industry
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
