"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";

// Company logos data
const companyLogos = [
  {
    name: "Aramex",
    logo: "https://dam.freshworks.com/m/46f8426d7bd86bdb/original/aramax-logo-100x50.webp",
  },
  {
    name: "Big Bus",
    logo: "https://dam.freshworks.com/m/c10f85ec4f43bdd/original/Big-Bus-Logo-White.webp",
  },
  {
    name: "Bridgestone",
    logo: "https://dam.freshworks.com/m/172addb8908823a/original/bridgestone-logo.webp",
  },
  {
    name: "Decathlon",
    logo: "https://dam.freshworks.com/m/13976a43017a6c1/original/Decathlon.webp",
  },
  {
    name: "Orderin",
    logo: "https://dam.freshworks.com/m/3d87b598b0eedb55/original/Orderin.webp",
  },
  {
    name: "Pearson",
    logo: "https://dam.freshworks.com/m/37378e35f7c98c77/original/Pearson.webp",
  },
];

const Demo: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [selectedCountry, setSelectedCountry] = useState({
    code: "+91",
    flag: "https://flagcdn.com/w40/in.png",
    name: "India",
  });

  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  // Handle keyboard events for dropdown
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showCountryDropdown) {
        setShowCountryDropdown(false);
      }
    };

    if (showCountryDropdown) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [showCountryDropdown]);

  const countries = [
    {
      code: "+1",
      flag: "https://flagcdn.com/w40/us.png",
      name: "United States",
    },
    { code: "+1", flag: "https://flagcdn.com/w40/ca.png", name: "Canada" },
    {
      code: "+44",
      flag: "https://flagcdn.com/w40/gb.png",
      name: "United Kingdom",
    },
    { code: "+91", flag: "https://flagcdn.com/w40/in.png", name: "India" },
    { code: "+61", flag: "https://flagcdn.com/w40/au.png", name: "Australia" },
    { code: "+49", flag: "https://flagcdn.com/w40/de.png", name: "Germany" },
    { code: "+33", flag: "https://flagcdn.com/w40/fr.png", name: "France" },
    { code: "+81", flag: "https://flagcdn.com/w40/jp.png", name: "Japan" },
    { code: "+86", flag: "https://flagcdn.com/w40/cn.png", name: "China" },
    { code: "+55", flag: "https://flagcdn.com/w40/br.png", name: "Brazil" },
    {
      code: "+27",
      flag: "https://flagcdn.com/w40/za.png",
      name: "South Africa",
    },
    { code: "+971", flag: "https://flagcdn.com/w40/ae.png", name: "UAE" },
    { code: "+65", flag: "https://flagcdn.com/w40/sg.png", name: "Singapore" },
    {
      code: "+82",
      flag: "https://flagcdn.com/w40/kr.png",
      name: "South Korea",
    },
    {
      code: "+31",
      flag: "https://flagcdn.com/w40/nl.png",
      name: "Netherlands",
    },
    { code: "+46", flag: "https://flagcdn.com/w40/se.png", name: "Sweden" },
    { code: "+47", flag: "https://flagcdn.com/w40/no.png", name: "Norway" },
    { code: "+45", flag: "https://flagcdn.com/w40/dk.png", name: "Denmark" },
    {
      code: "+41",
      flag: "https://flagcdn.com/w40/ch.png",
      name: "Switzerland",
    },
    { code: "+43", flag: "https://flagcdn.com/w40/at.png", name: "Austria" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountrySelect = (country: (typeof countries)[0]) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove any existing country code from the input
    const phoneValue = e.target.value.replace(/^\+\d+\s*/, "");
    setFormData({
      ...formData,
      phone: phoneValue,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Combine country code with phone number
    const fullPhoneNumber = `${selectedCountry.code} ${formData.phone}`;
    const submissionData = {
      ...formData,
      phone: fullPhoneNumber,
      country: selectedCountry.name,
    };
    // Handle form submission
    console.log("Demo request submitted:", submissionData);
    // You can add API call here
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Left-Right Layout */}
      <section className="py-40 bg-gradient-to-br from-[#00A551]/5 to-[#2791D0]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Dashboard Mockup */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                <div className="bg-gradient-to-r from-[#00A551] to-[#2791D0] h-12 rounded-t-xl flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-white font-semibold">
                    Deepkore Dashboard
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#00A551]/20 rounded-2xl flex items-center justify-center">
                      <span className="text-[#00A551] font-bold">📊</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">
                        Project Overview
                      </div>
                      <div className="text-sm text-gray-600">
                        Track all your projects in one place
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#2791D0]/20 rounded-2xl flex items-center justify-center">
                      <span className="text-[#2791D0] font-bold">👥</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">
                        Team Collaboration
                      </div>
                      <div className="text-sm text-gray-600">
                        Real-time updates and communication
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-[#C5FF28]/20 rounded-2xl flex items-center justify-center">
                      <span className="text-[#00A551] font-bold">⚡</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">
                        Automation
                      </div>
                      <div className="text-sm text-gray-600">
                        Streamline workflows automatically
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 bg-gray-50 rounded-2xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Project Completion
                      </span>
                      <span className="text-sm text-[#00A551] font-semibold">
                        85%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#00A551] to-[#2791D0] h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Points */}
              <div className="mt-8 space-y-4">
                <motion.div
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="w-6 h-6 bg-[#00A551] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Personalized Demo
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Get a customized walkthrough of Deepkore&apos;s features
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="w-6 h-6 bg-[#2791D0] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Expert Guidance
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Learn from our solution experts with years of experience
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <div className="w-6 h-6 bg-[#C5FF28] rounded-full flex items-center justify-center mt-1">
                    <span className="text-[#00A551] text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      No Commitment
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Explore Deepkore at your own pace with no pressure
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent">
                  Request a Demo
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
                  Experience Deepkore with a personalized demo
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  See how Deepkore can transform your workflow. Schedule a demo
                  with our solution experts and discover the power of seamless
                  project management.
                </p>
              </div>

              {/* Demo Request Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#00A551] focus:border-transparent text-gray-900 placeholder-gray-500"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#00A551] focus:border-transparent text-gray-900 placeholder-gray-500"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#00A551] focus:border-transparent text-gray-900 placeholder-gray-500"
                      placeholder="Enter your business email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#00A551] focus:border-transparent text-gray-900 placeholder-gray-500"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative flex">
                      {/* Country Selector Button */}
                      <button
                        type="button"
                        onClick={() =>
                          setShowCountryDropdown(!showCountryDropdown)
                        }
                        className="flex items-center px-3 py-3 border border-r-0 border-gray-300 rounded-l-2xl bg-gray-50 hover:bg-gray-100 focus:ring-2 focus:ring-[#00A551] focus:border-transparent transition-colors"
                      >
                        <Image
                          src={selectedCountry.flag}
                          alt={`${selectedCountry.name} flag`}
                          width={20}
                          height={15}
                          className="mr-2 rounded-sm"
                        />
                        <span className="text-sm font-medium text-gray-700 mr-1">
                          {selectedCountry.code}
                        </span>
                        <svg
                          className={`w-4 h-4 text-gray-500 transition-transform ${
                            showCountryDropdown ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Phone Input */}
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-[#00A551] focus:border-transparent text-gray-900 placeholder-gray-500"
                        placeholder="Enter your phone number"
                      />

                      {/* Country Dropdown */}
                      {showCountryDropdown && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                          {countries.map((country, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => handleCountrySelect(country)}
                              className="w-full flex items-center px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                            >
                              <Image
                                src={country.flag}
                                alt={`${country.name} flag`}
                                width={20}
                                height={15}
                                className="mr-3 rounded-sm"
                              />
                              <span className="text-sm font-medium text-gray-700 mr-2">
                                {country.code}
                              </span>
                              <span className="text-sm text-gray-600">
                                {country.name}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Click outside to close dropdown */}
                    {showCountryDropdown && (
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowCountryDropdown(false)}
                      />
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Tell us about your needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00A551] focus:border-transparent text-gray-900 placeholder-gray-500"
                      placeholder="Describe your specific requirements or questions"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300"
                  >
                    Request Demo
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By supplying my contact information, I accept the{" "}
                    <a href="#" className="text-[#00A551] hover:underline">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#00A551] hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Companies Section */}
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
              Trusted by 74,000+ Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join thousands of companies that have transformed their operations
              with Deepkore
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companyLogos.map((company, idx) => (
              <motion.div
                key={idx}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={60}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Trial Section */}
      <section className="py-20 bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready for a Free Trial?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-[#C5FF28]/80"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Try Deepkore yourself with a 14-day free trial. No credit card
            required.
          </motion.p>
          <motion.button
            className="bg-[#C5FF28] text-[#00A551] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#C5FF28]/90 transition-all duration-300 shadow-xl hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free Trial
          </motion.button>

          <div className="mt-8 text-center">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl">⭐</span>
              <span className="text-lg text-[#C5FF28]/80">
                4.9 rating Based on 300k Users
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;
