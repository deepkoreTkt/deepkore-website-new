"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      bio: "PhD in Machine Learning with 10+ years experience in neural networks and computer vision.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Marcus Johnson",
      role: "Head of Engineering",
      bio: "Former Google engineer specializing in scalable AI systems and distributed computing.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Director",
      bio: "Leading research in generative AI and multimodal learning systems.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Kim",
      role: "Product Manager",
      bio: "Product visionary focused on creating intuitive AI experiences for creators.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Lisa Wang",
      role: "UX Design Lead",
      bio: "Award-winning designer crafting beautiful interfaces for complex AI systems.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Alex Thompson",
      role: "Data Scientist",
      bio: "Expert in large-scale data processing and model optimization techniques.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      linkedin: "#",
      twitter: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
                Meet Our Team
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
            The Minds Behind
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400">
              {" "}
              Deepkore
            </span>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Our diverse team of AI experts, engineers, and designers is
            passionate about democratizing artificial intelligence and making it
            accessible to everyone.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-xl rounded-3xl p-6 border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-center">
                <motion.div
                  className="relative mb-6 mx-auto"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto border-4 border-gradient-to-r from-blue-500 to-green-500 shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="flex justify-center space-x-4">
                  <motion.a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href={member.twitter}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            <h3 className="text-2xl font-bold mb-2">Join Our Mission</h3>
            <p className="text-gray-400">
              We&apos;re always looking for talented individuals to join our
              team
            </p>
          </div>
          <motion.button
            className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View Open Positions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
