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
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-40">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Key Challenges in Leading Industries
          </h2>
          <p className="text-lg text-gray-600">
            Addressing the most common obstacles in modern enterprises
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className={`flex flex-col items-center rounded-2xl border-2 ${stat.color} shadow-md p-6 transition-all duration-300 hover:shadow-xl bg-white`}
              >
                <div className="w-full flex justify-center mb-4">
                  <div className="relative w-40 h-28 rounded-xl overflow-hidden bg-gray-200 flex items-center justify-center">
                    {/* Replace src with actual image path or use a placeholder */}
                    <Image
                      width={160}
                      height={112}
                      src={stat.image}
                      alt={stat.label}
                      className="object-cover w-full h-full rounded-xl"
                    />
                    <div className="absolute top-2 left-2 w-8 h-8 rounded-lg border-2 border-white bg-white/80 flex items-center justify-center shadow-md">
                      <IconComponent className={`w-5 h-5 ${stat.iconColor}`} />
                    </div>
                    <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/70 shadow-md"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 flex items-center w-full text-black">
                  <span className={`mr-2`}>
                    <IconComponent
                      className={`inline w-6 h-6 ${stat.iconColor}`}
                    />
                  </span>
                  <span>{stat.label}</span>
                </h3>
                <p className="text-gray-700 text-base w-full line-clamp-4">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

