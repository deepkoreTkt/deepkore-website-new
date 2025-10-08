"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import About from "./About";
import {
  Target,
  Zap,
  Bot,
  Lock,
  Users,
  Newspaper,
  UserSquare2,
  BarChart3,
  UsersRound,
} from "lucide-react";

// Company logos data
const companyLogos = [
  {
    name: "University of Pennsylvania",
    logo: "https://dam.freshworks.com/m/6fddc527e6c0bd62/webimage-logo-color-penn-university-100x50.jpg",
  },
  {
    name: "Kansas City Chiefs",
    logo: "https://dam.freshworks.com/m/1a0022651b336c61/original/Kansas-City-Chiefs-Trustbar-logo.webp",
  },
  {
    name: "Databricks",
    logo: "https://dam.freshworks.com/m/58aa4a30b3a89872/original/Databricks-Trustbar-Logo.webp",
  },
  {
    name: "Bridgestone",
    logo: "https://dam.freshworks.com/m/1d9133b91cdf10e4/original/Bridgestone.webp",
  },
  {
    name: "American Express",
    logo: "https://dam.freshworks.com/m/692e8a15c3011f28/original/AE-GlobalBusiness-Trustbar-logo.webp",
  },
  {
    name: "7-Eleven",
    logo: "https://dam.freshworks.com/m/57852f0e417bcc4e/original/7-Eleven-Trustbar-logo.webp",
  },
];

const stats = [
  { number: "300K+", label: "Team Collaborations" },
  { number: "500K+", label: "Tasks Completed" },
  { number: "1,000,000+", label: "Projects Managed" },
  { number: "150K+", label: "Successful Integrations" },
];

const promises = [
  {
    title: "Uncomplicated Solutions",
    description:
      "Our enterprise-grade solutions are designed to be easy to implement, use, and configure. We make work easier and processes less complex.",
    icon: "Target",
  },
  {
    title: "Rapid Impact",
    description:
      "Our software makes a real difference in days or weeks, not months. We enable fast and accurate service that customers and employees love.",
    icon: "Zap",
  },
  {
    title: "AI-Powered Automation",
    description:
      "Our AI-assisted software is a force-multiplier, meant to help people deliver exceptional results. We put our customers first, always.",
    icon: "Bot",
  },
  {
    title: "No Surprises",
    description:
      "Our reliable products, transparent pricing, and honest approach won&apos;t surprise you with exorbitant costs. We&apos;re here to earn your trust.",
    icon: "Lock",
  },
];

const futureLinks = [
  {
    title: "Discover a better way to work",
    description:
      "Be part of our mission to make work more satisfying and productive for everyone",
    buttonText: "Get Started",
    buttonLink: "/getstarted",
    icon: "Users",
  },
  {
    title: "Check out the latest news",
    description:
      "Keep up with the story of a company that&apos;s reshaping the world of work",
    buttonText: "Newsroom",
    buttonLink: "/getstarted",
    icon: "Newspaper",
  },
  {
    title: "Get to know our leadership",
    description:
      "Meet the industry-leading executives creating the future of business software",
    buttonText: "Leadership",
    buttonLink: "/getstarted",
    icon: "UserSquare2",
  },
];

const AboutUs: React.FC = () => {
  const getIcon = (iconName: string, className: string = "w-8 h-8") => {
    switch (iconName) {
      case "Target":
        return <Target className={className} />;
      case "Zap":
        return <Zap className={className} />;
      case "Bot":
        return <Bot className={className} />;
      case "Lock":
        return <Lock className={className} />;
      case "Users":
        return <Users className={className} />;
      case "Newspaper":
        return <Newspaper className={className} />;
      case "UserSquare2":
        return <UserSquare2 className={className} />;
      case "BarChart3":
        return <BarChart3 className={className} />;
      case "UsersRound":
        return <UsersRound className={className} />;
      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#00A551]/5 to-[#2791D0]/5">
        <div className="max-w-7xl mx-auto px-4">
          <About />
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent">
              We make uncomplicated project management software
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
              Enterprise capability without enterprise complexity
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We help you untangle the knots left behind by outdated systems and
              outdated thinking. We celebrate you when you see ROI today—not
              someday. We craft software that simplifies, uses AI that
              amplifies, and solves project challenges without making new ones.
            </p>
          </motion.div>

          {/* Mission Statement */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Making an Impact Worldwide
            </h2>
            <p className="text-xl text-[#edf3f5]/80 max-w-3xl mx-auto">
              Join thousands of teams that have transformed their workflow with
              Deepkore
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-4 text-[#edf3f5]">
                  {stat.number}
                </div>
                <div className="text-xl text-white">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Explore our flagship products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The world is ready for better software. We&apos;re ready to
              deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00A551]/20 to-[#2791D0]/20 rounded-xl flex items-center justify-center mr-4">
                  <BarChart3 className="w-8 h-8 text-[#248aff]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Deepkore Analytics
                  </h3>
                  <p className="text-gray-600">
                    Advanced project insights and reporting
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Visualize your project data with powerful analytics tools. Track
                progress, identify bottlenecks, and make data-driven decisions
                with ease.
              </p>
              <a
                href="/analytics"
                className="inline-flex items-center text-[#248aff] font-semibold hover:text-[#00A551]/80 transition-colors"
              >
                Explore Analytics →
              </a>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2791D0]/20 to-[#2791D0]/20 rounded-xl flex items-center justify-center mr-4">
                  <UsersRound className="w-8 h-8 text-[#248aff]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Virtual Development Environment
                  </h3>
                  <p className="text-gray-600">
                    Collaborative workspace for teams
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bring your team together with real-time collaboration tools.
                Share files, communicate instantly, and work together from
                anywhere in the world.
              </p>
              <a
                href="/dataform"
                className="inline-flex items-center text-[#248aff] font-semibold hover:text-[#248aff]]/80 transition-colors"
              >
                Explore Datafrom →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Promises Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              The Deepkore promises
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re driven to uncomplicate work so teams can do more of
              what matters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {promises.map((promise, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="mb-4 text-[#248aff]">
                  {getIcon(promise.icon, "w-12 h-12")}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {promise.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {promise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A551]/5 to-[#2791D0]/5">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              See where we&apos;re going
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Here are the opportunities, events, and people framing the future
              for Deepkore.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureLinks.map((link, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 text-[#248aff]">
                  {getIcon(link.icon, "w-14 h-14")}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {link.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {link.description}
                </p>
                <a
                  href={link.buttonLink}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                >
                  {link.buttonText} →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to transform your workflow?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-[#edf3f5]/80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of teams already using Deepkore to streamline their
            projects
          </motion.p>
          <a href="/getstarted">
            <motion.button
              className="bg-[#edf3f5] text-[#00A551] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#edf3f5]/90 transition-all duration-300 shadow-xl hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Free Trial
            </motion.button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
