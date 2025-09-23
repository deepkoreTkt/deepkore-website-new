"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, BarChart3, Code, Shield } from "lucide-react";

const ProductOverview: React.FC = () => {
  const features = [
    {
      title: "For Business Users",
      description: "Bring your ideas to life—no coding, just creating.",
      iconComponent: Users,
      bgColor: "bg-[#e3f2fd]",
    },
    {
      title: "For Business",
      description:
        "Stay ahead with smarter decisions. Powered by data-driven insights.",
      iconComponent: BarChart3,
      bgColor: "bg-[#e8f5e9]",
    },
    {
      title: "For Developers",
      description: "Code less, build more—launch powerful apps 10× faster.",
      iconComponent: Code,
      bgColor: "bg-[#f3e5f5]",
    },
    {
      title: "For IT Leaders",
      description: "Unlock agility and scale—accelerate IT like never before.",
      iconComponent: Shield,
      bgColor: "bg-[#e0f7fa]",
    },
  ];

  const additionalFeatures = [
    { name: "Resource Allocation", color: "bg-[#fef3c7]" },
    { name: "Advanced Analytics", color: "bg-[#fed7d7]" },
    { name: "Real-time Collaboration", color: "bg-[#c7f0db]" },
    { name: "Task Management", color: "bg-[#bfdbfe]" },
    { name: "Security Measures", color: "bg-[#e9d5ff]" },
    { name: "Document Sharing", color: "bg-[#fed7aa]" },
    { name: "Client Communication", color: "bg-[#d1fae5]" },
    { name: "Agile Workflow", color: "bg-[#dbeafe]" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-40">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Innovation in Every Hand
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover features designed to simplify workflows, boost
            productivity, and improve team collaboration seamlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${feature.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#ffffff] rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.iconComponent size={24} className="text-gray-900" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Dashboard Image */}
          {/* <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-green-100 p-8">
              <Image
                src="/classic04.gif"
                alt="Deepkore Dashboard"
                width={600}
                height={400}
                className="w-full h-auto rounded-xl shadow-lg"
                unoptimized={true}
              />
            </div>
          </motion.div> */}
        </div>

        {/* Additional Features */}
        {/* <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Other Interesting Features
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={`${feature.color} rounded-lg p-4 text-center hover:shadow-md transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-sm font-medium text-gray-700">
                  {feature.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* CTA */}
        <motion.div
          className="text-center mt-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </section>
  );
};

export default ProductOverview;
