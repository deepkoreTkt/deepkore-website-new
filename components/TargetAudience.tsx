"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    percent: "🚀",
    label: "Accelerate Application Development",
    description: "Launch apps in days, not months",
    details:
      "Rapid deployment with no-code/low-code platforms. Scalable solutions that grow with your business.",
    link: "Learn more about rapid development",
    gradient: "from-blue-500 via-purple-500 to-blue-500",
    bg: "bg-white",
  },
  {
    percent: "👥",
    label: "Empowered Teams",
    description: "Let business users build without coding",
    details:
      "Citizen development empowers non-technical users. User-friendly interfaces for everyone.",
    link: "See how teams are empowered",
    gradient: "from-purple-500 via-blue-500 to-green-500",
    bg: "bg-white",
  },
  {
    percent: "🔗",
    label: "Seamless Integration",
    description: "Connect effortlessly across systems",
    details:
      "API-first approach with pre-built connectors. Unified data flow and real-time synchronization.",
    link: "Explore integrations",
    gradient: "from-cyan-500 via-green-500 to-blue-500",
    bg: "bg-white",
  },
  {
    percent: "🤖",
    label: "AI Intelligence Built into Every Workflow",
    description: "Smart automation and intelligent workflows",
    details:
      "Predictive analytics for better decision making. AI-powered insights and recommendations.",
    link: "Discover AI-powered workflows",
    gradient: "from-blue-500 via-indigo-500 to-purple-500",
    bg: "bg-white",
  },
];

const TargetAudience: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stats.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stats.length) % stats.length);
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
    <div>
      {/* Header Section */}
      <section
        className="py-20 bg-gradient-to-br from-blue-100 via-white to-green-100"
        style={{
          backgroundImage:
            "url(https://dz1x1c630cl14.cloudfront.net/webassets/images/website-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-2 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Drive your digital transformation forward with Deepkore
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Deepkore lets you transform ideas into powerful Enterprise
            applications that adapt to your business needs.
          </p>
        </div>
        <div className="max-w-5xl w-full mx-auto rounded-3xl shadow-xl bg-[#f5f7f7]/80 p-12 flex flex-col md:flex-row gap-8 items-stretch border border-blue-100">
          {/* Left: Heading and description */}

          <div className="flex-1 flex flex-col justify-center pr-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Designed for ease, built for value
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Faster implementation. Better ROI. Totally transparent costs.
              Freshworks delivers enterprise-grade performance without the
              enterprise-level complexity.
            </p>
          </div>
          {/* Right: Stat cards as carousel */}
          <div className="flex-1 relative">
            <div
              className="relative h-96 overflow-hidden rounded-2xl"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
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
                  className={`min-w-[320px] max-w-xs mx-auto rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col justify-between h-full`}
                  style={{ background: "#ffffffff" }}
                >
                  <div>
                    <div
                      className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stats[currentSlide].gradient} bg-clip-text text-transparent`}
                    >
                      {stats[currentSlide].percent}%
                    </div>
                    <div className="text-lg font-bold text-gray-900 mb-2">
                      {stats[currentSlide].label}
                    </div>
                    <div className="font-semibold text-gray-800 mb-1">
                      {stats[currentSlide].description}
                    </div>
                    <div className="text-gray-600 text-sm mb-2">
                      {stats[currentSlide].details}
                    </div>
                  </div>
                  <div className="mt-2">
                    <a href="#" className="text-blue-600 text-xs underline">
                      {stats[currentSlide].link}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* Navigation Arrows */}
            {/* <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-gray-700 p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5"
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
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-gray-700 p-2 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5"
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
            </button> */}
            {/* Progress Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {stats.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-8 bg-blue-600"
                      : "w-2 bg-blue-300 hover:bg-blue-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default TargetAudience;
