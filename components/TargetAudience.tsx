'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TargetAudience: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const audiences = [
    {
      emoji: '🏝️',
      text: 'individuals',
      description: 'Creative entrepreneurs and solo innovators',
      gradient: 'from-blue-500 to-cyan-500',
      bgPattern: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
    },
    {
      emoji: '🎨',
      text: 'independent creators',
      description: 'Artists, designers, and content makers',
      gradient: 'from-green-500 to-emerald-500',
      bgPattern: 'radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)'
    },
    {
      emoji: '💼',
      text: 'tech companies',
      description: 'Startups and established businesses',
      gradient: 'from-purple-500 to-pink-500',
      bgPattern: 'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
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
                Built For Everyone
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
            For{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-400">
              Visionaries
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Empowering creative entrepreneurs, independent creators, and tech innovators with Nexus AI&apos;s cutting-edge solutions.
          </motion.p>
        </motion.div>

        {/* Interactive Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{ background: audience.bgPattern }}
                />

                {/* Animated Border */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${audience.gradient} opacity-0 group-hover:opacity-20`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-6xl md:text-7xl mb-6"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? [0, -5, 5, 0] : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {audience.emoji}
                  </motion.div>

                  <motion.h3
                    className={`text-2xl md:text-3xl font-bold mb-3 bg-gradient-to-r ${audience.gradient} bg-clip-text text-transparent`}
                    animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {audience.text}
                  </motion.h3>

                  <motion.p
                    className="text-gray-400 text-lg leading-relaxed"
                    initial={{ opacity: 0.7 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0.7 }}
                    transition={{ duration: 0.3 }}
                  >
                    {audience.description}
                  </motion.p>
                </div>

                {/* Hover Effect Particles */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-2 h-2 bg-gradient-to-r ${audience.gradient} rounded-full`}
                          initial={{
                            x: '50%',
                            y: '50%',
                            scale: 0,
                            opacity: 0,
                          }}
                          animate={{
                            x: `${50 + (Math.random() - 0.5) * 200}%`,
                            y: `${50 + (Math.random() - 0.5) * 200}%`,
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </motion.div>
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
      </div>
    </section>
  );
};

export default TargetAudience;