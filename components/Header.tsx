"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserGuideOpen, setIsUserGuideOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/usecase", label: "Use Cases" },

    // { href: "/pricing", label: "Pricing" },
    // { href: "/contact", label: "Contact Us" },
    { href: "/aboutus", label: "About Us" },
  ];

  // Product dropdown items
  const productDropdownItems = [
    { href: "/crm", label: "CRM" },
    { href: "/itservicedesk", label: "IT Service Desk" },
  ];

  // Solutions dropdown items
  const solutionsDropdownItems = [
    { href: "/sales-crm", label: "Sales & CRM" },
    { href: "/asset-management", label: "Asset Management" },
    { href: "/manufacturing-production", label: "Manufacturing & Production" },
    { href: "/healthcare-medical", label: "Healthcare & Medical" },
    { href: "/retail-ecommerce", label: "Retail & E-commerce" },
    { href: "/education-elearning", label: "Education & E-learning" },
    { href: "/logistics-transportation", label: "Logistics & Transportation" },
  ];

  // Grouped sections for Platform dropdown
  const platformDropdownSections = [
    {
      title: "Platform",
      items: [
        { href: "/whydeepkore", label: "Why Deepkore" },
        { href: "/lowcode", label: "What is Low Code" },
        { href: "/nocode", label: "What is No Code" },
      ],
    },
    {
      title: "Features",
      items: [
        { href: "/dataform", label: "Visual Development Interface" },
        { href: "/process", label: "Workflow and Logic Builder" },
        { href: "/integration", label: "Integration Capabilities" },
        { href: "/security", label: "Security and Compliance" },
        { href: "/encryption", label: "Data encryption and audit logs" },
      ],
    },
    {
      title: "Pre-Built Templates and Components",
      items: [
        { href: "/hr", label: "Human Resource" },
        { href: "/data-management", label: "Data Management Tools" },
        { href: "/procurement", label: "Procurement" },
        { href: "/finance", label: "Finance" },
        { href: "/admin-ops", label: "Admin & Ops" },
        { href: "/customer-support", label: "Customer Support" },
        { href: "/sales", label: "Sales" },
        { href: "/marketing", label: "Marketing" },
      ],
    },
  ];

  return (
    <motion.header
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-full shadow-lg px-4 py-2 relative">
        <div className="flex items-center justify-between min-w-[320px] lg:min-w-[720px]">
          {/* Logo Section */}
          <motion.a
            href="/"
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src="/darklogo.svg"
              alt="Deepkore Logo"
              width={140}
              height={45}
              className="relative"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* User Guide Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsUserGuideOpen(true)}
              onMouseLeave={() => setIsUserGuideOpen(false)}
            >
              <motion.button
                className="flex items-center justify-center space-x-1 px-3 py-1.5 text-black hover:text-gray-900 font-medium text-base transition-colors duration-200 rounded-full hover:bg-gray-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Platform</span>
                <motion.svg
                  className="w-2.5 h-2.5 ml-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isUserGuideOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {isUserGuideOpen && (
                  <motion.div
                    className="absolute top-full left-1/10 -translate-x-1/5 mt-2 bg-[#fafafa] backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/60 overflow-hidden z-50  grid grid-cols-3 gap-4 p-6 min-w-[710px]"
                    initial={{ opacity: 0, y: -15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {platformDropdownSections.map((section, sectionIdx) => (
                      <motion.div
                        key={section.title}
                        className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 shadow-sm border border-gray-100/50 hover:shadow-md transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: sectionIdx * 0.1,
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      >
                        <div className="font-semibold text-gray-900 mb-3 text-[15px] flex items-center">
                          <div className="w-2 h-2 bg-[#8112db] rounded-full mr-2"></div>
                          {section.title}
                        </div>
                        <div className="space-y-1">
                          {section.items.map((item, itemIdx) => (
                            <motion.a
                              key={item.href}
                              href={item.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-[#8112db] hover:bg-purple-50/60 rounded-lg font-medium transition-all duration-300 group"
                              onClick={() => setIsUserGuideOpen(false)}
                              initial={{ opacity: 0, x: -15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: itemIdx * 0.05 + sectionIdx * 0.1,
                                type: "spring",
                                stiffness: 300,
                                damping: 25,
                              }}
                              whileHover={{ x: 3, scale: 1.02 }}
                            >
                              <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                                {item.label}
                              </span>
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}

            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductOpen(true)}
              onMouseLeave={() => setIsProductOpen(false)}
            >
              <motion.button
                className="flex items-center justify-center px-2.5 py-1 text-black hover:text-gray-900 font-medium text-sm transition-colors duration-200 rounded-full hover:bg-gray-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Product</span>
                <motion.svg
                  className="w-2.5 h-2.5 ml-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isProductOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>
              <AnimatePresence>
                {isProductOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-1.5 bg-[#f5f5f2] backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/60 overflow-hidden z-50 grid grid-cols-1 gap-4 p-6 min-w-[280px]"
                    initial={{ opacity: 0, y: -15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {productDropdownItems.map((item, idx) => (
                      <motion.div
                        key={item.href}
                        className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 shadow-sm border border-gray-100/50 hover:shadow-md transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: idx * 0.1,
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      >
                        <motion.a
                          href={item.href}
                          className="block text-sm text-gray-600 hover:text-[#8112db] font-medium transition-all duration-300 group"
                          onClick={() => setIsProductOpen(false)}
                          whileHover={{ x: 3, scale: 1.02 }}
                        >
                          <div className="flex items-center mb-2">
                            <div className="w-2 h-2 bg-[#8112db] rounded-full mr-2"></div>
                            <span className="font-semibold text-gray-900 text-[15px]">
                              {item.label}
                            </span>
                          </div>
                          <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
                            Explore {item.label} features and capabilities
                          </span>
                        </motion.a>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <motion.button
                className="flex items-center justify-center sp
                ace-x-1 px-3 py-1.5 text-black hover:text-gray-900 font-medium text-base transition-colors duration-200 rounded-full hover:bg-gray-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Solutions</span>
                <motion.svg
                  className="w-2.5 h-2.5 ml-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isSolutionsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/60 overflow-hidden z-50 grid grid-cols-2 gap-4 p-6 min-w-[500px] max-h-[400px] overflow-y-auto"
                    initial={{ opacity: 0, y: -15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    {solutionsDropdownItems.map((item, idx) => (
                      <motion.div
                        key={item.href}
                        className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 shadow-sm border border-gray-100/50 hover:shadow-md transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: idx * 0.05,
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                      >
                        <motion.a
                          href={item.href}
                          className="block text-sm text-gray-600 hover:text-[#8112db] font-medium transition-all duration-300 group"
                          onClick={() => setIsSolutionsOpen(false)}
                          whileHover={{ x: 3, scale: 1.02 }}
                        >
                          <div className="flex items-center mb-2">
                            <div className="w-2 h-2 bg-[#8112db] rounded-full mr-2"></div>
                            <span className="font-semibold text-gray-900 text-[13px]">
                              {item.label}
                            </span>
                          </div>
                          <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block text-xs">
                            Learn more
                          </span>
                        </motion.a>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="flex items-center justify-center px-2.5 py-1 text-black hover:text-gray-900 font-medium text-sm transition-colors duration-200 rounded-full hover:bg-gray-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <motion.a
              href="/getstarted"
              className="inline-flex items-center justify-center px-4 py-1.5 bg-gradient-to-r from-green-600 to-blue-600 text-base font-medium text-white bg-[#8112db] hover:bg-[#8112db]/90 rounded-full transition-colors duration-200 shadow-sm hover:shadow-md"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              className="relative w-8 h-8 flex items-center justify-center text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="w-5 h-4 flex flex-col justify-between"
                animate={isMobileMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  className="w-full h-0.5 bg-black rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-black rounded-full"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-full h-0.5 bg-black rounded-full"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-200/50 shadow-lg mx-4"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="p-4">
                <div className="space-y-1 mb-4">
                  {/* User Guide Mobile */}
                  <motion.div className="border-b border-gray-100 pb-2 mb-2">
                    {platformDropdownSections.map((section, sectionIdx) => (
                      <div key={section.title} className="mb-2">
                        <span className="block px-3 py-2 text-sm font-semibold text-gray-700 tracking-wide">
                          {section.title}
                        </span>
                        {section.items.map((item, itemIdx) => (
                          <motion.a
                            key={item.href}
                            href={item.href}
                            className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: itemIdx * 0.04 + sectionIdx * 0.1,
                            }}
                          >
                            {item.label}
                          </motion.a>
                        ))}
                      </div>
                    ))}
                  </motion.div>

                  {/* Product Dropdown Mobile */}
                  <motion.div className="border-b border-gray-100 pb-2 mb-2">
                    <span className="block px-3 py-2 text-sm font-semibold text-gray-700 tracking-wide">
                      Product
                    </span>
                    {productDropdownItems.map((item, idx) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </motion.div>

                  {/* Solutions Dropdown Mobile */}
                  <motion.div className="border-b border-gray-100 pb-2 mb-2">
                    <span className="block px-3 py-2 text-sm font-semibold text-gray-700 tracking-wide">
                      Solutions
                    </span>
                    {solutionsDropdownItems.map((item, idx) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </motion.div>

                  {/* Other Nav Items */}
                  <motion.a
                    href="#blog"
                    className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </motion.a>

                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>

                <motion.a
                  href="#contact"
                  className="block w-full text-center px-4 py-3 text-sm font-medium text-white bg-[#8112db] hover:bg-[#8112db]/90 rounded-full transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Get Started
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
