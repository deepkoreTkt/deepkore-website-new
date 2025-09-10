'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'I think it benefits everyone for devs to have more options to get paid to work on their passions, to support upstreams, and for users to have more confidence/transparency in the software',
      author: 'Mitchell Hashimoto',
      handle: '@mtchlhshmt',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      role: 'Co-founder & CEO',
      company: 'HashiCorp'
    },
    {
      quote: 'Nexus AI has revolutionized my workflow. The AI assistance is incredibly intuitive and saves me hours every day. The interface is clean and the results are consistently impressive.',
      author: 'Sarah Chen',
      handle: '@sarahchen_dev',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      role: 'Senior Developer',
      company: 'TechFlow Inc.'
    },
    {
      quote: 'The best AI assistant for any company out there. Game-changing productivity boost! The prompt enhancement feature alone has increased my output by 300%.',
      author: 'Alex Rodriguez',
      handle: '@alexrodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      role: 'Creative Director',
      company: 'Digital Studios'
    },
    {
      quote: 'Neural Vision 3.5 has transformed how I approach creative projects. The quality of generated images is stunning, and the workflow integration is seamless.',
      author: 'Emma Thompson',
      handle: '@emma_designs',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      role: 'UX Designer',
      company: 'Innovate Labs'
    },
    {
      quote: 'As a startup founder, Nexus AI has been instrumental in scaling our operations. The AI insights have helped us make data-driven decisions faster than ever.',
      author: 'David Kim',
      handle: '@davidkim_startup',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      role: 'Founder & CEO',
      company: 'NextGen Solutions'
    },
    {
      quote: 'The collaborative features make it perfect for our remote team. Everyone can contribute to projects seamlessly, and the AI suggestions are always spot-on.',
      author: 'Lisa Wang',
      handle: '@lisawang_team',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      role: 'Team Lead',
      company: 'Global Tech Corp'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Users Are Saying
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          At Nexus AI, we believe in the power of connection and collaboration.
        </motion.p>
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 mb-0 hover:border-blue-500 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <blockquote className="text-gray-300 mb-6 leading-relaxed text-sm">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full mr-4 border-2 border-blue-500/30"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-blue-300 text-sm">{testimonial.handle}</div>
                    <div className="text-gray-400 text-xs">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            100+
          </div>
          <p className="text-gray-400 mt-2">Happy creative entrepreneurs using Nexus AI</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;