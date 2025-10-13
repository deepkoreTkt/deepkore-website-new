"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import getEnvConfig from "@/components/getenv";
import axios from "axios";
import { Rocket, Target, Star, Users, Zap, User, Sparkles } from "lucide-react";

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

  const [emailError, setEmailError] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const [successMessage, setSuccessMessage] = useState(false);

  const [emailCheck, setEmailCheck] = useState(false);

  // Email validation function
  function validateEmail(email: string) {
    const restrictedDomains = [
      "gmail.com",
      "ymail.com",
      "outlook.com",
      "live.com",
      "hotmail.com",
      "yahoo.com",
      "yahoo.co.in",
    ];

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    const domain = email.split("@")[1];
    return !restrictedDomains.includes(domain);
  }

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

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
    // Clear email error when user starts typing
    if (emailError) {
      setEmailError("");
    }
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

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const signup = () => {
    if (
      isChecked &&
      formData.firstName !== "" &&
      formData.lastName !== "" &&
      formData.email !== "" &&
      formData.phone !== "" &&
      formData.company !== ""
    ) {
      axios
        .post(`${getEnvConfig()}/site/leadsignup`, {
          name: `${formData.firstName} ${formData.lastName}`,
          business_email: formData.email,
          mobile: `${selectedCountry.code} ${formData.phone}`,
          company_name: formData.company,
        })
        .then(function (response) {
          setEmailCheck(false);
          setSuccessMessage(true);

          // Reset form after successful submission
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            phone: "",
            message: "",
          });
          setIsChecked(false);
          setSelectedCountry({
            code: "+91",
            flag: "https://flagcdn.com/w40/in.png",
            name: "India",
          });

          // Hide success message after 5 seconds
          setTimeout(() => {
            setSuccessMessage(false);
          }, 5000);
        })
        .catch(function (error) {
          if (error.response?.data?.message === "Email is required") {
            setEmailCheck(true);
          }
        });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(formData.email)) {
      setEmailError(
        "Please enter a valid business email address. Personal email domains are not allowed."
      );
      return;
    }

    // Clear any previous error
    setEmailError("");

    // Validate terms and conditions checkbox
    if (!isChecked) {
      return;
    }

    // Call signup function
    signup();
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

        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center min-h-[70vh] md:min-h-[80vh]">
            {/* Left Side - Enhanced Content */}
            <motion.div
              className="space-y-8 md:space-y-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Main Heading with Modern Typography */}
              <div className="space-y-4 md:space-y-6">
                <motion.div
                  className="inline-flex items-center px-3 py-2 md:px-4 bg-gradient-to-r from-[#00A551]/10 to-[#2791D0]/10 rounded-full border border-[#00A551]/20 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span className="text-xs md:text-sm font-semibold text-[#00A551]">
                    ✨ New Era of Development
                  </span>
                </motion.div>

                <motion.h1
                  className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <span className="bg-gradient-to-r from-[#248aff] to-[#00d24b] bg-clip-text text-transparent">
                    Unlock
                  </span>
                  <br />
                  <span className="text-slate-800">the Power of</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#2791D0] to-[#00A551] bg-clip-text text-transparent">
                    Deepkore
                  </span>
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Build apps faster, smarter, and easier with our revolutionary
                  low-code platform that transforms how you create digital
                  solutions.
                </motion.p>
              </div>

              {/* Enhanced Feature Cards */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {[
                  {
                    icon: User,
                    title: "Personal Demo",
                    desc: "1:1 session tailored to your needs",
                    color: "from-[#00A551] to-[#00A551]/80",
                  },
                  {
                    icon: Zap,
                    title: "Live Showcase",
                    desc: "Real-time automation demos",
                    color: "from-[#2791D0] to-[#2791D0]/80",
                  },
                  {
                    icon: Rocket,
                    title: "Latest Features",
                    desc: "Cutting-edge development tools",
                    color: "from-[#b28fff] to-[#b28fff]/80",
                  },
                  {
                    icon: Sparkles,
                    title: "Apps Come Alive",
                    desc: "Watch apps build in real-time",
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
                    <div className="relative p-4 md:p-6 rounded-2xl bg-gradient-to-br from-white/90 to-white/50 backdrop-blur-sm border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500">
                      <div
                        className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2 group-hover:text-[#00A551] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Modern Stats */}
              <motion.div
                className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                {[
                  {
                    value: "10x",
                    label: "Faster Development",
                    color: "#00A551",
                  },
                  { value: "90%", label: "Cost Reduction", color: "#2791D0" },
                  { value: "24/7", label: "Expert Support", color: "#2791D0" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="text-center group cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div
                      className="text-2xl md:text-4xl font-black mb-1 md:mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-slate-600 font-medium group-hover:text-slate-800 transition-colors">
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
                      Request Your Demo
                    </motion.h2>
                    <p className="text-slate-600 text-lg">
                      Experience Deepkore with a personalized demonstration
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-[#00A551]/50 focus:border-[#00A551] transition-all duration-300 text-slate-800 placeholder-slate-400"
                          placeholder="Enter first name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-[#00A551]/50 focus:border-[#00A551] transition-all duration-300 text-slate-800 placeholder-slate-400"
                          placeholder="Enter last name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleEmailChange}
                        required
                        className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-[#00A551]/50 focus:border-[#00A551] transition-all duration-300 text-slate-800 placeholder-slate-400"
                        placeholder="Enter business email"
                      />
                      {emailError && (
                        <p className="text-sm text-red-600 mt-1">
                          {emailError}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-[#00A551]/50 focus:border-[#00A551] transition-all duration-300 text-slate-800 placeholder-slate-400"
                        placeholder="Enter company name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">
                        Phone Number
                      </label>
                      <div className="relative flex">
                        <button
                          type="button"
                          onClick={() =>
                            setShowCountryDropdown(!showCountryDropdown)
                          }
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
                              showCountryDropdown ? "rotate-180" : ""
                            }`}
                          >
                            <path
                              stroke="currentColor"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          className="flex-1 px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-r-xl focus:ring-2 focus:ring-[#00A551]/50 focus:border-[#00A551] transition-all duration-300 text-slate-800 placeholder-slate-400"
                          placeholder="Enter phone number"
                        />

                        {/* Country Dropdown */}
                        {showCountryDropdown && (
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
                      {showCountryDropdown && (
                        <div
                          className="fixed inset-0 z-40"
                          onClick={() => setShowCountryDropdown(false)}
                        />
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">
                        Tell us about your needs
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-slate-200/50 rounded-xl focus:ring-2 focus:ring-[#00A551]/50 focus:border-[#00A551] transition-all duration-300 text-slate-800 placeholder-slate-400 resize-none"
                        placeholder="Describe your requirements..."
                      />
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={isChecked}
                        onChange={checkHandler}
                        required
                        className="mt-1 w-4 h-4 text-[#00A551] bg-white/70 border-slate-300 rounded focus:ring-[#00A551]/50 focus:ring-2"
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm text-slate-600 leading-relaxed"
                      >
                        I accept the{" "}
                        <Link
                          href="/termsandservices"
                          className="text-[#00A551] hover:text-[#2791D0] font-medium transition-colors"
                        >
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>
                    {!isChecked && (
                      <p className="text-sm text-red-600">
                        Please accept our terms and conditions
                      </p>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-[#00A551]/25 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Request Demo
                    </motion.button>

                    {/* Legal Text */}
                    <p className="text-xs text-slate-500 text-center leading-relaxed">
                      By submitting, you agree to our{" "}
                      <a
                        href="/termsandservices"
                        className="text-[#00A551] hover:text-[#2791D0] transition-colors"
                      >
                        Terms
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacypolicy"
                        className="text-[#00A551] hover:text-[#2791D0] transition-colors"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>

                  {/* Success Message */}
                  {successMessage && (
                    <motion.div
                      className="mt-6 p-4 bg-green-50/80 backdrop-blur-sm border border-green-200/50 rounded-xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-green-800">
                            Demo requested successfully!
                          </p>
                          <p className="text-sm text-green-700">
                            Our team will contact you soon.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Email Error */}
                  {emailCheck && (
                    <motion.div
                      className="mt-6 p-4 bg-red-50/80 backdrop-blur-sm border border-red-200/50 rounded-xl"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-red-800">
                            Email is required
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Companies Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00A551]/5 to-[#2791D0]/5" />
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-2 md:px-4 bg-gradient-to-r from-[#00A551]/10 to-[#2791D0]/10 rounded-full border border-[#00A551]/20 backdrop-blur-sm mb-4 md:mb-6">
              <span className="text-xs md:text-sm font-semibold text-[#00A551]">
                🌟 Trusted Worldwide
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Leading Businesses Choose Deepkore
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Join thousands of companies that have revolutionized their
              operations with our innovative platform
            </p>
          </motion.div>

          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {companyLogos.map((company, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 flex items-center justify-center h-20">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={100}
                    height={50}
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Enhanced Free Trial Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00A551] via-[#2791D0] to-[#00A551]" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-6 md:mb-8">
              <Rocket className="w-4 h-4 md:w-5 md:h-5 mr-2 text-white" />
              <span className="text-white font-semibold text-sm md:text-base">
                Start Building Today
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
              Ready for a{" "}
              <span className="bg-gradient-to-r from-[#ffffff] to-white bg-clip-text text-transparent">
                Free Trial?
              </span>
            </h2>

            <p className="text-lg md:text-xl mb-8 md:mb-10 text-white max-w-2xl mx-auto leading-relaxed px-4">
              Experience the power of Deepkore with a 14-day free trial. No
              credit card required, no strings attached.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
              <a href="/getstarted" className="w-full sm:w-auto">
                <motion.button
                  className="bg-[#ffffff] text-[#00A551] px-6 md:px-10 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg shadow-2xl hover:shadow-[#2791D0]/50 transition-all duration-300 transform hover:scale-105 md:hover:scale-110 active:scale-95 flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Target className="w-4 h-4 md:w-5 md:h-5" />
                  Start Free Trial
                </motion.button>
              </a>
              <a href="/getstarted" className="w-full sm:w-auto">
                <motion.button
                  className="border-2 border-white/30 text-white px-6 md:px-10 py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg backdrop-blur-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300 w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.button>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-white px-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-semibold text-sm md:text-base">
                  4.9 Rating
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-semibold text-sm md:text-base">
                  300k+ Users
                </span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30" />
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 md:w-6 md:h-6" />
                <span className="font-semibold text-sm md:text-base">
                  24/7 Support
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Demo;
