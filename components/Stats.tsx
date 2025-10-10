"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  Lock,
  Users,
  BarChart3,
  Link,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

const Stats: React.FC = () => {
  const stats = [
    {
      value: "01",
      label: "Unstructured Process",
      description:
        "Manual and inefficient workflows that hinder productivity and scalability. Organizations struggle with outdated processes that require excessive manual intervention, leading to errors and delays. This unstructured approach prevents teams from achieving optimal performance and adapting quickly to market changes. Implementing streamlined workflows can significantly improve operational efficiency and resource utilization.",
      icon: AlertTriangle,
      color: "border-red-300 bg-red-50",
      iconColor: "text-red-500",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=280&fit=crop",
    },
    {
      value: "02",
      label: "Restricted View of Critical Data",
      description:
        "Limited access to important information across departments and teams. Critical data remains siloed in different systems, preventing comprehensive analysis and informed decision-making. Employees often work with incomplete information, leading to suboptimal outcomes and missed opportunities. Breaking down data barriers enables better collaboration and more effective business strategies.",
      icon: Lock,
      color: "border-orange-300 bg-orange-50",
      iconColor: "text-orange-500",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=280&fit=crop",
    },
    {
      value: "03",
      label: "Lack of Cross Functional Collaboration",
      description:
        "Siloed teams and poor communication between departments. Different departments operate in isolation, leading to duplicated efforts and conflicting priorities. This lack of cross-functional collaboration hinders innovation and slows down project delivery. Fostering better communication channels and shared goals can transform organizational performance and employee satisfaction.",
      icon: Users,
      color: "border-blue-300 bg-blue-50",
      iconColor: "text-blue-500",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=280&fit=crop",
    },
    {
      value: "04",
      label: "Gaps in Process Insight and Analysis",
      description:
        "Lack of data-driven decision making and comprehensive analytics. Organizations rely on intuition rather than insights from data analysis, leading to missed opportunities and poor strategic choices. Without proper analytics tools, it's difficult to identify trends and optimize performance. Investing in robust analytics capabilities enables proactive decision-making and competitive advantage.",
      icon: BarChart3,
      color: "border-green-300 bg-green-50",
      iconColor: "text-green-600",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=280&fit=crop",
    },
    {
      value: "05",
      label: "Poor Integration Between Systems",
      description:
        "Disconnected tools and platforms causing inefficiencies and data silos. Multiple systems that don't communicate with each other create data duplication and integration challenges. Employees waste time switching between incompatible tools and manually transferring information. A unified platform approach eliminates these inefficiencies and provides a seamless user experience across all business functions.",
      icon: Link,
      color: "border-teal-300 bg-teal-50",
      iconColor: "text-teal-500",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=280&fit=crop",
    },
    {
      value: "06",
      label: "Scalability Challenges",
      description:
        "Difficulty adapting to growth and handling increased demands efficiently. As organizations scale, existing systems and processes struggle to keep up with rising complexity and volume. This leads to performance bottlenecks and decreased customer satisfaction. Building scalable infrastructure and processes ensures that growth translates to success rather than operational challenges.",
      icon: TrendingUp,
      color: "border-purple-300 bg-purple-50",
      iconColor: "text-purple-500",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=280&fit=crop",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
    },
  };

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-10 sm:px-8 lg:px-8 xl:px-40">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Key Challenges in Leading Industries
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Addressing the most common obstacles in modern enterprises
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`flex flex-col rounded-xl sm:rounded-2xl border-2 ${stat.color} shadow-sm hover:shadow-lg p-4 sm:p-6 transition-all duration-300 bg-white hover:scale-[1.02]`}
              >
                {/* Image Container */}
                <div className="w-full flex justify-center mb-3 sm:mb-4">
                  <div className="relative w-full h-32 sm:h-36 lg:h-40 rounded-lg sm:rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
                    <Image
                      width={400}
                      height={280}
                      src={stat.image}
                      alt={stat.label}
                      className="object-cover w-full h-full rounded-lg sm:rounded-xl"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="
                    />
                    {/* Icon Badge */}
                    <motion.div
                      className="absolute top-2 left-2 w-6 h-6 sm:w-7 sm:h-7 rounded-md border border-white bg-white/90 flex items-center justify-center shadow-sm"
                      variants={iconVariants}
                    >
                      <IconComponent
                        className={`w-3 h-3 sm:w-4 sm:h-4 ${stat.iconColor}`}
                      />
                    </motion.div>
                    {/* Number Badge */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/80 shadow-sm flex items-center justify-center">
                      <span className="text-xs sm:text-sm font-bold text-gray-700">
                        {stat.value}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 flex items-start w-full text-black">
                    <span className={`mr-2 mt-0.5 flex-shrink-0`}>
                      <IconComponent
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.iconColor}`}
                      />
                    </span>
                    <span className="leading-tight">{stat.label}</span>
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-4 sm:line-clamp-5">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
