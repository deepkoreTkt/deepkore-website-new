'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: 'Generate',
      subtitle: 'Images never used.',
      description: 'Create unique, original content with our advanced AI generation tools that produce stunning visuals from your imagination.',
      gradient: 'from-blue-600 via-cyan-500 to-green-600',
      icon: '🎨',
      bgPattern: 'radial-gradient(circle at 30% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
      stats: { users: '10K+', projects: '50K+', satisfaction: '98%' },
      features: ['AI-Powered Generation', 'High-Resolution Output', 'Style Customization', 'Batch Processing']
    },
    {
      title: 'Enhance',
      subtitle: 'Your prompts',
      description: 'Transform basic ideas into powerful, detailed prompts that unlock the full potential of AI creativity.',
      gradient: 'from-green-600 via-emerald-500 to-blue-600',
      icon: '✨',
      bgPattern: 'radial-gradient(circle at 70% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)',
      stats: { users: '25K+', projects: '100K+', satisfaction: '96%' },
      features: ['Smart Prompt Analysis', 'Context Enhancement', 'Style Optimization', 'Multi-language Support']
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
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
              <span className="text-green-400 font-medium text-sm tracking-wider uppercase">
                Powerful Features
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
            AI That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400">
              {' '}Works For You
            </span>
          </motion.h2>
        </motion.div>

        {/* Feature Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-2 border border-slate-700/50">
            <div className="flex space-x-2">
              {features.map((feature, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-2">
                    <span className="text-lg">{feature.icon}</span>
                    <span>{feature.title}</span>
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Feature Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Feature Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div>
                  <motion.div
                    className="text-6xl md:text-8xl mb-6"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    {features[activeFeature].icon}
                  </motion.div>

                  <motion.h3
                    className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${features[activeFeature].gradient} bg-clip-text text-transparent`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {features[activeFeature].title}
                  </motion.h3>

                  <motion.h4
                    className="text-2xl md:text-3xl text-blue-300 mb-6 font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {features[activeFeature].subtitle}
                  </motion.h4>

                  <motion.p
                    className="text-xl text-gray-300 leading-relaxed mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {features[activeFeature].description}
                  </motion.p>

                  {/* Feature List */}
                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {features[activeFeature].features.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
                        <span className="text-sm font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Feature Visualization */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div
                  className={`relative h-96 lg:h-[500px] bg-gradient-to-br ${features[activeFeature].gradient} rounded-3xl shadow-2xl overflow-hidden`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{ background: features[activeFeature].bgPattern }}
                  />

                  {/* Animated Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-8xl lg:text-9xl opacity-20"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {features[activeFeature].icon}
                    </motion.div>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(features[activeFeature].stats).map(([key, value], index) => (
                        <motion.div
                          key={key}
                          className="bg-black/20 backdrop-blur-sm rounded-xl p-4 text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        >
                          <div className="text-2xl font-bold text-white mb-1">{value}</div>
                          <div className="text-sm text-gray-300 capitalize">{key}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
                    initial={{ x: '-150%' }}
                    animate={{ x: '150%' }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Try {features[activeFeature].title} Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;