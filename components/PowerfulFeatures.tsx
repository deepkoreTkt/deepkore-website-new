"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const PowerfulFeatures: React.FC = () => {
  const features = [
    {
      title: "Data Form",
      description: "Create custom forms effortlessly without coding.",
      avatar: "/dataformbg1.svg",
      href: "/dataform",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "Process",
      description:
        "Design and automate processes with a simple drag-and-drop interface.",
      avatar: "/images/process/processgif.gif",
      href: "/process",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: "Integration",
      description:
        "Connect seamlessly with your existing tools and applications.",
      avatar: "/integration1.svg",
      href: "/integration",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
    {
      title: "Analytics",
      description: "Turn data into actionable insights effortlessly.",
      avatar: "/analytics1.png",
      href: "/analytics",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [scrollFinished, setScrollFinished] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setScrollFinished(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive || scrollFinished) return;

    const handleWheel = (e: WheelEvent) => {
      if (!carouselRef.current) return;

      const carousel = carouselRef.current;
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      const currentScrollLeft = carousel.scrollLeft;

      // If scrolling down and reached the end, allow normal scroll down
      if (currentScrollLeft >= maxScrollLeft - 10 && e.deltaY > 0) {
        setScrollFinished(true);
        return;
      }

      // If scrolling up and reached the beginning, allow normal scroll up
      if (currentScrollLeft <= 10 && e.deltaY < 0) {
        setScrollFinished(true);
        return;
      }

      // Prevent default and do horizontal scroll
      e.preventDefault();
      carousel.scrollLeft += e.deltaY * 2; // Multiply for faster scrolling
    };

    document.addEventListener("wheel", handleWheel, { passive: false });

    return () => document.removeEventListener("wheel", handleWheel);
  }, [isActive, scrollFinished]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-10 md:py-10 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-[400px]"
    >
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5"></div>
      <div className="container mx-auto px-6 md:px-40 lg:px-40 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-block mb-8">
            <div className="px-6 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
              <span className="text-white font-medium text-sm tracking-wider uppercase">
                Feature Showcase
              </span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            Explore Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Powerful Capabilities
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Swipe through our innovative features designed to revolutionize your
            workflow.
          </p>
        </motion.div>

        <div
          className="relative overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          ref={carouselRef}
        >
          <motion.div
            className="flex gap-8 pb-4 min-w-max"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                className="flex-shrink-0 w-300 mb-8 bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/10 p-8 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center h-full">
                  <div className="w-1/2 pr-8 flex flex-col justify-center">
                    <h3 className="text-4xl font-bold text-white mb-8">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-8">{feature.description}</p>
                    <Link
                      href={feature.href}
                      className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 text-xl w-fit"
                    >
                      Explore
                      <svg
                        className="ml-4 w-8 h-8"
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
                    </Link>
                  </div>
                  <div className="w-1/2 pl-8">
                    <div className="relative overflow-hidden rounded-2xl bg-white/10 p-4 h-[400px]">
                      {feature.avatar.includes(".mp4") ? (
                        <video
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover rounded-xl"
                        >
                          <source src={feature.avatar} type="video/mp4" />
                        </video>
                      ) : (
                        <Image
                          src={feature.avatar}
                          alt={feature.title}
                          width={400}
                          height={500}
                          className="w-full h-full object-cover rounded-xl"
                          unoptimized={feature.avatar.includes(".gif")}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            Scroll horizontally to explore all features
          </p>
        </div>
      </div>
    </section>
  );
};

export default PowerfulFeatures;
