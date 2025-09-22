"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    companyName: "",
    jobTitle: "",
    phone: "",
    message: "",
    country: "",
    organizationSize: "",
    typeOfQuery: "",
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

  const organizationSizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1000+ employees",
  ];

  const queryTypes = [
    "General inquiry",
    "Product demo",
    "Pricing information",
    "Technical support",
    "Partnership inquiry",
    "Career opportunities",
    "Media inquiry",
    "Other",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptTerms) {
      alert("Please accept the terms and privacy policy to continue.");
      return;
    }
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="pt-40 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Deepkore
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Questions about products, features, or pricing? Need a demo? Our
              experts are ready to help.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg inline-block">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Talk with our team
              </h2>
              <p className="text-gray-600">
                +1 (855) 747 6767 |{" "}
                <a
                  href="mailto:sales@deepkore.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  sales@deepkore.com
                </a>
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white shadow-xl rounded-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Email and Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="businessEmail"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your business email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              {/* Job Title and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm font-medium text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your job title"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <div className="flex">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="flex items-center px-3 py-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <Image
                          src={selectedCountry.flag}
                          alt={selectedCountry.name}
                          width={20}
                          height={15}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">
                          {selectedCountry.code}
                        </span>
                        <svg
                          className="ml-2 h-4 w-4 text-gray-400"
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

                      {isDropdownOpen && (
                        <div className="absolute z-10 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                          {countries.map((country) => (
                            <button
                              key={country.code}
                              type="button"
                              onClick={() => handleCountrySelect(country)}
                              className="flex items-center w-full px-3 py-2 hover:bg-gray-50 transition-colors"
                            >
                              <Image
                                src={country.flag}
                                alt={country.name}
                                width={20}
                                height={15}
                                className="mr-2"
                              />
                              <span className="text-sm text-gray-700">
                                {country.name} {country.code}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Country and Organization Size */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                <div>
                  <label
                    htmlFor="organizationSize"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Organization Size <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="organizationSize"
                    name="organizationSize"
                    required
                    value={formData.organizationSize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select organization size</option>
                    {organizationSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Type of Query */}
              <div>
                <label
                  htmlFor="typeOfQuery"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Type of Query <span className="text-red-500">*</span>
                </label>
                <select
                  id="typeOfQuery"
                  name="typeOfQuery"
                  required
                  value={formData.typeOfQuery}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select type of query</option>
                  {queryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="acceptTerms"
                  className="ml-3 text-sm text-gray-700"
                >
                  By supplying my contact information, I accept the Deepkore{" "}
                  <a
                    href="/terms"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Submit
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

