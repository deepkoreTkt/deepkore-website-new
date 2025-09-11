"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  AnimatePresence,
  useMotionValue,
} from "framer-motion";

const EfficiencyMetrics: React.FC = () => {
  const [counters, setCounters] = useState({
    performance: 0,
    engagement: 0,
    speed: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const metrics = [
    {
      id: "performance",
      icon: "📈",
      title: "Performance Increase",
      value: 700,
      suffix: "%",
      description:
        "Boost in task automation efficiency, optimizing workflows for all users.",
      color: "from-blue-500 to-cyan-500",
      bgPattern:
        "radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
      waveData: [0.2, 0.4, 0.6, 0.8, 0.9, 0.95, 1.0],
      particles: 12,
      shape: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    },
    {
      id: "engagement",
      icon: "👥",
      title: "User Engagement",
      value: 95,
      suffix: "%",
      description:
        "Growth in interactive sessions, enhancing user experience and satisfaction.",
      color: "from-green-500 to-emerald-500",
      bgPattern:
        "radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
      waveData: [0.15, 0.35, 0.55, 0.75, 0.85, 0.92, 0.95],
      particles: 15,
      shape:
        "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)",
    },
    {
      id: "speed",
      icon: "⚡",
      title: "Processing Speed",
      value: 0.7,
      suffix: "s",
      description:
        "Lightning-fast response times, ensuring seamless interactions with our AI systems.",
      color: "from-purple-500 to-pink-500",
      bgPattern:
        "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
      waveData: [0.1, 0.3, 0.5, 0.7, 0.85, 0.95, 1.0],
      particles: 18,
      shape: "polygon(50% 0%, 90% 20%, 100% 60%, 50% 100%, 0% 60%, 10% 20%)",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
        setMousePosition({ x: e.clientX - centerX, y: e.clientY - centerY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("efficiency-metrics");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [controls]);

  useEffect(() => {
    if (!isVisible) return;

    const animateCounter = (
      key: keyof typeof counters,
      target: number,
      duration: number = 2500
    ) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters((prev) => ({
          ...prev,
          [key]: Math.round(current * 10) / 10,
        }));
      }, 16);
    };

    // Start animations with creative delays
    setTimeout(() => animateCounter("performance", 700), 300);
    setTimeout(() => animateCounter("engagement", 95), 800);
    setTimeout(() => animateCounter("speed", 0.7), 1300);
  }, [isVisible]);

  return (
    <section
      id="efficiency-metrics"
      ref={containerRef}
      className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 overflow-hidden"
    >
      {/* Advanced Animated Background */}
      <div className="absolute inset-0">
        {/* Dynamic Morphing Background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Geometric Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              rotate: [0, 360],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            <div
              className="w-16 h-16 border-2 border-blue-400/20"
              style={{
                clipPath:
                  i % 4 === 0
                    ? "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                    : i % 4 === 1
                    ? "polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)"
                    : i % 4 === 2
                    ? "polygon(50% 0%, 90% 20%, 100% 60%, 50% 100%, 0% 60%, 10% 20%)"
                    : "circle(50% at 50% 50%)",
              }}
            />
          </motion.div>
        ))}

        {/* Advanced Particle System */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1"
            style={{
              background: `linear-gradient(45deg, ${
                i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#10b981" : "#8b5cf6"
              }, transparent)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Interactive Wave Background */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)
            `,
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Enhanced Header */}
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
              <span className="text-green-400 font-medium text-sm tracking-wider uppercase">
                Impact Metrics
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Leading Enterprise Application Platform for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400">
              {" "}
              Digital Transformation.
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
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

        {/* Enhanced Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              className="group relative"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredCard(metric.id)}
              onHoverEnd={() => setHoveredCard(null)}
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 overflow-hidden cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  y: -20,
                  rotateX: hoveredCard === metric.id ? -5 : 0,
                  rotateY:
                    hoveredCard === metric.id ? mousePosition.x * 0.01 : 0,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{ background: metric.bgPattern }}
                />

                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${metric.color} opacity-0`}
                  animate={{ opacity: hoveredCard === metric.id ? 0.2 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Enhanced Icon with 3D Effect */}
                  <motion.div
                    className="text-6xl md:text-7xl mb-6 relative"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                      rotateY: hoveredCard === metric.id ? [0, 15, -15, 0] : 0,
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                      rotateY: { duration: 2, repeat: Infinity },
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <span style={{ transform: "translateZ(20px)" }}>
                      {metric.icon}
                    </span>
                  </motion.div>

                  {/* Creative Counter Animation */}
                  <motion.div
                    className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent relative`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  >
                    <motion.span
                      animate={{
                        textShadow:
                          hoveredCard === metric.id
                            ? [
                                "0 0 10px rgba(59, 130, 246, 0.5)",
                                "0 0 20px rgba(59, 130, 246, 0.8)",
                                "0 0 10px rgba(59, 130, 246, 0.5)",
                              ]
                            : "0 0 0px rgba(59, 130, 246, 0)",
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {counters[metric.id as keyof typeof counters]}
                    </motion.span>
                    <span className="text-3xl md:text-4xl">
                      {metric.suffix}
                    </span>

                    {/* Floating Numbers Effect */}
                    <AnimatePresence>
                      {hoveredCard === metric.id && (
                        <motion.div className="absolute inset-0 pointer-events-none">
                          {[...Array(5)].map((_, i) => (
                            <motion.span
                              key={i}
                              className={`absolute text-2xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
                              initial={{
                                x: "50%",
                                y: "50%",
                                scale: 0,
                                opacity: 0,
                              }}
                              animate={{
                                x: `${50 + (Math.random() - 0.5) * 200}%`,
                                y: `${50 + (Math.random() - 0.5) * 200}%`,
                                scale: [0, 1.5, 0],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 2,
                                delay: i * 0.2,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            >
                              {Math.floor(Math.random() * 100)}
                            </motion.span>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.h3
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  >
                    {metric.title}
                  </motion.h3>

                  <motion.p
                    className="text-gray-400 text-lg leading-relaxed mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                  >
                    {metric.description}
                  </motion.p>

                  {/* Creative Wave Visualization */}
                  <motion.div
                    className="relative h-20 bg-slate-900/50 rounded-xl p-4 overflow-hidden mb-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                  >
                    <svg className="w-full h-full" viewBox="0 0 200 50">
                      <motion.path
                        d={`M 0 25 ${metric.waveData
                          .map(
                            (point, i) => `L ${i * 28.57} ${25 - point * 20}`
                          )
                          .join(" ")} L 200 25 Z`}
                        fill={`url(#gradient-${metric.id})`}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: 1.6 + index * 0.2 }}
                      />
                      <defs>
                        <linearGradient
                          id={`gradient-${metric.id}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            stopColor="rgba(59, 130, 246, 0.3)"
                          />
                          <stop
                            offset="50%"
                            stopColor="rgba(16, 185, 129, 0.5)"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgba(147, 51, 234, 0.3)"
                          />
                        </linearGradient>
                      </defs>

                      {/* Animated Dots */}
                      {metric.waveData.map((point, i) => (
                        <motion.circle
                          key={i}
                          cx={i * 28.57}
                          cy={25 - point * 20}
                          r="2"
                          fill={`hsl(${(i * 60) % 360}, 70%, 60%)`}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: 2 + index * 0.2 + i * 0.1,
                          }}
                        />
                      ))}
                    </svg>

                    {/* Pulsing Background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 rounded-xl`}
                      animate={{ opacity: [0, 0.1, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    />
                  </motion.div>
                </div>

                {/* Enhanced Particle Effects */}
                <AnimatePresence>
                  {hoveredCard === metric.id && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {[...Array(metric.particles)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-2 h-2 bg-gradient-to-r ${metric.color} rounded-full`}
                          initial={{
                            x: "50%",
                            y: "50%",
                            scale: 0,
                            opacity: 0,
                          }}
                          animate={{
                            x: `${50 + (Math.random() - 0.5) * 300}%`,
                            y: `${50 + (Math.random() - 0.5) * 300}%`,
                            scale: [0, 1.5, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 3,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Morphing Shape Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${metric.color} opacity-0 pointer-events-none`}
                  style={{
                    clipPath:
                      hoveredCard === metric.id
                        ? metric.shape
                        : "polygon(0 0, 0 0, 0 0, 0 0)",
                  }}
                  animate={{
                    opacity: hoveredCard === metric.id ? 0.1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                />

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                  initial={{ x: "-150%" }}
                  whileHover={{ x: "150%" }}
                  transition={{ duration: 0.8 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="relative px-10 py-5 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 text-lg overflow-hidden group"
            whileHover={{
              scale: 1.05,
              y: -2,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Experience the Impact</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-full"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />

            {/* Button Particles */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  initial={{
                    x: "50%",
                    y: "50%",
                    scale: 0,
                    opacity: 0,
                  }}
                  animate={{
                    x: `${50 + (Math.random() - 0.5) * 100}%`,
                    y: `${50 + (Math.random() - 0.5) * 100}%`,
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 0.5,
                  }}
                />
              ))}
            </motion.div>
          </motion.button>

          <motion.p
            className="text-gray-400 mt-4 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
          >
            Join thousands of creative entrepreneurs already transforming their
            workflow
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default EfficiencyMetrics;
