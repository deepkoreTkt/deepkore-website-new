"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarketingInsights from "@/components/MarketingInsights";
import Image from "next/image";
import axios from "axios";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    companyName: "",
    jobTitle: "",
    phone: "",
    country: "",
    message: "",
  });

  const [selectedCountry, setSelectedCountry] = useState({
    code: "+91",
    flag: "https://flagcdn.com/w40/in.png",
    name: "India",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  const countries = [
    {
      code: "+1",
      flag: "https://flagcdn.com/w40/us.png",
      name: "United States",
    },
    { code: "+91", flag: "https://flagcdn.com/w40/in.png", name: "India" },
    {
      code: "+44",
      flag: "https://flagcdn.com/w40/gb.png",
      name: "United Kingdom",
    },
    { code: "+61", flag: "https://flagcdn.com/w40/au.png", name: "Australia" },
    { code: "+49", flag: "https://flagcdn.com/w40/de.png", name: "Germany" },
    { code: "+33", flag: "https://flagcdn.com/w40/fr.png", name: "France" },
    {
      code: "+31",
      flag: "https://flagcdn.com/w40/nl.png",
      name: "Netherlands",
    },
    { code: "+81", flag: "https://flagcdn.com/w40/jp.png", name: "Japan" },
    { code: "+86", flag: "https://flagcdn.com/w40/cn.png", name: "China" },
    {
      code: "+82",
      flag: "https://flagcdn.com/w40/kr.png",
      name: "South Korea",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountrySelect = (country: (typeof countries)[0]) => {
    setSelectedCountry(country);
    setFormData((prev) => ({
      ...prev,
      country: country.name,
    }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert("Please accept the terms and privacy policy to continue.");
      return;
    }

    try {
      const response = await axios.post("/api/customer/contactus", {
        name: `${formData.firstName} ${formData.lastName}`,
        business_email: formData.businessEmail,
        company_name: formData.companyName,
        job_title: formData.jobTitle,
        phone: `${selectedCountry.code} ${formData.phone}`,
        country: formData.country,
        message: formData.message,
      });

      console.log("Contact form submitted successfully:", response.data);
      alert("Thank you for contacting us! We'll get back to you soon.");

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        businessEmail: "",
        companyName: "",
        jobTitle: "",
        phone: "",
        country: "",
        message: "",
      });
      setAcceptTerms(false);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("There was an error submitting your message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Header />

      {/* Modern Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00A551]/5 via-transparent to-[#2791D0]/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00A551]/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2791D0]/10 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Left Side - Enhanced Content */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Heading with Modern Typography */}
              <div className="space-y-6">
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#00A551]/10 to-[#2791D0]/10 rounded-full border border-[#00A551]/20 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-sm font-semibold text-[#00A551]">
                    📞 Get In Touch
                  </span>
                </motion.div>

                <motion.h1
                  className="text-6xl lg:text-7xl font-black leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <span className="bg-gradient-to-r from-[#00A551] via-[#2791D0] to-[#00A551] bg-clip-text text-transparent">
                    Contact
                  </span>
                  <br />
                  <span className="text-slate-800">Deepkore</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#2791D0] to-[#00A551] bg-clip-text text-transparent">
                    Today
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl text-slate-600 leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Questions about products, features, or pricing? Need a demo?
                  Our experts are ready to help you transform your business.
                </motion.p>
              </div>

              {/* Enhanced Feature Cards */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  {
                    icon: "💬",
                    title: "Expert Support",
                    desc: "24/7 technical assistance",
                    color: "from-[#00A551] to-[#00A551]/80",
                  },
                  {
                    icon: "🎯",
                    title: "Personal Demo",
                    desc: "Tailored product walkthrough",
                    color: "from-[#2791D0] to-[#2791D0]/80",
                  },
                  {
                    icon: "⚡",
                    title: "Quick Response",
                    desc: "Get answers within 24 hours",
                    color: "from-[#b28fff] to-[#b28fff]/80",
                  },
                  {
                    icon: "🤝",
                    title: "Partnership Ready",
                    desc: "Explore collaboration opportunities",
                    color: "from-[#00A551] to-[#2791D0]",
                  },
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="group relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/40 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl" />
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <span className="text-2xl">{feature.icon}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-[#00A551] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Modern Stats */}
              <motion.div
                className="flex flex-wrap gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {[
                  {
                    value: "24/7",
                    label: "Support Available",
                    color: "#00A551",
                  },
                  { value: "<24h", label: "Response Time", color: "#2791D0" },
                  {
                    value: "100+",
                    label: "Countries Served",
                    color: "#2791D0",
                  },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center group cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div
                      className="text-4xl font-black mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium group-hover:text-slate-800 transition-colors">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Modern Form */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Form Container with Glass Effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00A551]/20 to-[#2791D0]/20 rounded-3xl blur-2xl" />
                <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 md:p-10">
                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <motion.h2
                      className="text-4xl font-bold mb-3 bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      Send us a Message
                    </motion.h2>
                    <p className="text-slate-600 text-lg">
                      Fill out the form below and we&apos;ll get back to you
                      shortly
                    </p>
                  </div>

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-semibold text-slate-700"
                        >
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-[#00A551]/50 focus:border-[#00A551] transition-all duration-300 text-slate-800 placeholder-slate-400"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-semibold text-slate-700"
                        >
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-[#00A551]/50 focus:border-[#00A551] transition-all duration-300 text-slate-800 placeholder-slate-400"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    {/* Email and Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="businessEmail"
                          className="block text-sm font-semibold text-slate-700"
                        >
                          Business Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="businessEmail"
                          name="businessEmail"
                          required
                          value={formData.businessEmail}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-[#00A551]/50 focus:border-[#00A551] transition-all duration-300 text-slate-800 placeholder-slate-400"
                          placeholder="Enter your business email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="companyName"
                          className="block text-sm font-semibold text-slate-700"
                        >
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-[#00A551]/50 focus:border-[#00A551] transition-all duration-300 text-slate-800 placeholder-slate-400"
                          placeholder="Enter your company name"
                        />
                      </div>
                    </div>

                    {/* Job Title and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="jobTitle"
                          className="block text-sm font-semibold text-slate-700"
                        >
                          Job Title <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          required
                          value={formData.jobTitle}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-[#00A551]/50 focus:border-[#00A551] transition-all duration-300 text-slate-800 placeholder-slate-400"
                          placeholder="Enter your job title"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-slate-700"
                        >
                          Phone Number
                        </label>
                        <div className="relative flex">
                          <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center px-4 py-3 bg-white/70 backdrop-blur-sm border border-r-0 border-slate-200/50 rounded-l-xl hover:bg-white/80 transition-colors"
                          >
                            <Image
                              src={selectedCountry.flag}
                              alt={`${selectedCountry.name} flag`}
                              width={20}
                              height={15}
                              className="mr-2 rounded"
                            />
                            <span className="text-sm font-medium text-slate-700">
                              {selectedCountry.code}
                            </span>
                            <svg
                              className={`w-4 h-4 text-slate-500 ml-2 transition-transform ${
                                isDropdownOpen ? "rotate-180" : ""
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
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-r-xl focus:ring-2 focus:ring-[#00A551]/50 focus:border-[#00A551] transition-all duration-300 text-slate-800 placeholder-slate-400"
                            placeholder="Enter your phone"
                          />

                          {/* Country Dropdown */}
                          {isDropdownOpen && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-slate-200/50 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto">
                              {countries.map((country, index) => (
                                <button
                                  key={index}
                                  type="button"
                                  onClick={() => handleCountrySelect(country)}
                                  className="w-full flex items-center px-4 py-3 hover:bg-slate-50/50 transition-colors text-left"
                                >
                                  <Image
                                    src={country.flag}
                                    alt={`${country.name} flag`}
                                    width={20}
                                    height={15}
                                    className="mr-3 rounded"
                                  />
                                  <span className="text-sm font-medium text-slate-700 mr-2">
                                    {country.code}
                                  </span>
                                  <span className="text-sm text-slate-600">
                                    {country.name}
                                  </span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Click outside to close */}
                        {isDropdownOpen && (
                          <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsDropdownOpen(false)}
                          />
                        )}
                      </div>
                    </div>

                    {/* Country */}
                    <div className="space-y-2">
                      <label
                        htmlFor="country"
                        className="block text-sm font-semibold text-slate-700"
                      >
                        Country <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="country"
                        name="country"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-[#00A551]/50 focus:border-[#00A551] transition-all duration-300 text-slate-800"
                      >
                        <option value="">Select your country</option>
                        <option value="United States">United States</option>
                        <option value="India">India</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Australia">Australia</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Netherlands">Netherlands</option>
                        <option value="Japan">Japan</option>
                        <option value="China">China</option>
                        <option value="South Korea">South Korea</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-slate-700"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-[#00A551]/50 focus:border-[#00A551] transition-all duration-300 text-slate-800 placeholder-slate-400 resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="acceptTerms"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        required
                        className="mt-1 w-5 h-5 text-[#00A551] bg-white/70 border-slate-300 rounded focus:ring-[#00A551]/50 focus:ring-2"
                      />
                      <label
                        htmlFor="acceptTerms"
                        className="text-sm text-slate-600 leading-relaxed"
                      >
                        By supplying my contact information, I accept the
                        Deepkore{" "}
                        <a
                          href="/terms"
                          className="text-[#00A551] hover:text-[#2791D0] font-medium transition-colors"
                        >
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a
                          href="/privacy"
                          className="text-[#00A551] hover:text-[#2791D0] font-medium transition-colors"
                        >
                          Privacy Policy
                        </a>
                        .
                      </label>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-[#00A551]/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Send Message</span>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <MarketingInsights />
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
