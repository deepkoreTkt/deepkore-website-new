"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserGuideOpen, setIsUserGuideOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/solution", label: "Solutions" },
    { href: "/usecase", label: "Use Cases" },
    { href: "/pricing", label: "Pricing" },
    // { href: "/contact", label: "Contact Us" },
    // { href: "/aboutus", label: "About Us" },
  ];

  const userGuideItems = [
    { href: "/getstarted", label: "Getting Started" },
    { href: "/faq", label: "FAQ" },
    { href: "/whydeepkore", label: "Why Deepkore?" },
    { href: "#support", label: "Support" },
  ];

  return (
    <>
      {/* Logo Section */}
      <motion.a
        href="/"
        className="fixed top-4 left-15 z-50 flex items-center cursor-pointer bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-full shadow-lg px-6 py-3 h-[64px]"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Image
          src="/darklogo.png"
          alt="Deepkore Logo"
          width={160}
          height={60}
          className="relative"
        />
      </motion.a>
      <motion.div
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-full shadow-lg px-6 py-3 h-[64px]"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between min-w-[320px] lg:min-w-[650px]">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* User Guide Dropdown */}

            {/* Other Navigation Items */}
            <motion.a
              href="/feature"
              className="px-4 py-2 text-black hover:text-gray-900 font-medium text-base text-center transition-colors duration-200 rounded-full hover:bg-gray-50"
              whileHover={{ scale: 1.02 }}
            >
              Features
            </motion.a>

            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-black hover:text-gray-900 font-medium text-base text-center transition-colors duration-200 rounded-full hover:bg-gray-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
          <div className="relative">
            <motion.button
              onClick={() => setIsUserGuideOpen(!isUserGuideOpen)}
              className="flex items-center justify-center space-x-1 px-4 py-0 text-black hover:text-gray-900 font-medium text-base transition-colors duration-200 rounded-full hover:bg-gray-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>More</span>
              <motion.svg
                className="w-4 h-4 ml-1"
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
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200/50 overflow-hidden z-50"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {userGuideItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-base text-black hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                      onClick={() => setIsUserGuideOpen(false)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <motion.a
              href="/getstarted"
              className="inline-flex items-center justify-center px-5 py-2 text-base font-medium text-white bg-[#8112db] hover:bg-[#8112db]/90 rounded-full transition-colors duration-200 shadow-sm hover:shadow-md"
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
                    <span className="block px-3 py-2 text-base font-medium text-black uppercase tracking-wider">
                      User Guide
                    </span>
                    {userGuideItems.map((item, index) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-black hover:text-gray-900 hover:bg-gray-50 rounded-lg text-base text-center transition-all duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </motion.div>

                  {/* Other Nav Items */}
                  <motion.a
                    href="#blog"
                    className="block px-3 py-2 text-black hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium text-base text-center transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Blog
                  </motion.a>

                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-black hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium text-base text-center transition-all duration-200"
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
                  className="block w-full text-center px-4 py-3 text-base font-medium text-white bg-[#8112db] hover:bg-[#8112db]/90 rounded-full transition-colors duration-200"
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
      </motion.div>
    </>
  );
};

export default Header;
