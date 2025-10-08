"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Zap,
  Settings,
  Sparkles,
  Hospital,
  Factory,
  ShoppingBag,
  BookOpen,
  Lightbulb,
  Wrench,
  Palette,
  BarChart,
  RefreshCw,
  ArrowRight,
  Users,
  FileText,
  ShoppingCart,
  DollarSign,
  Briefcase,
  Play,
  Bell,
  Package,
  Truck,
} from "lucide-react";

interface FeaturedItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MenuItem {
  href: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
  featured: FeaturedItem[];
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const navItems: MenuItem[] = [
    { href: "/pricing", label: "Pricing", featured: [] },
    { href: "/aboutus", label: "About Us", featured: [] },
  ];

  const renderMenuSection = (
    section: MenuSection,
    isFirstSection: boolean = false
  ) => (
    <div
      className={`${
        isFirstSection ? "w-1/3 pr-4 border-r border-gray-100" : "flex-1"
      }`}
    >
      <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-4">
        {section.title}
      </h3>
      <div className={!isFirstSection ? "grid grid-cols-2 gap-4" : ""}>
        {section.items.map((item, idx) => (
          <motion.a
            key={item.href}
            href={item.href}
            className="flex items-start gap-3 py-2.5 text-gray-600 hover:bg-gray-50/80 rounded transition-all duration-200 group"
            onClick={() => setIsDropdownOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <span className="text-base w-7 h-7 flex items-center justify-center bg-blue-50 text-blue-600 rounded shrink-0">
              {item.icon ? <item.icon className="w-4 h-4" /> : null}
            </span>
            <div className="flex-1">
              <div className="font-medium text-sm text-gray-900 group-hover:text-blue-600">
                {item.label}
              </div>
              <div className="text-xs text-gray-500 leading-relaxed mt-0.5">
                {item.description}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );

  // Grouped sections for Platform dropdown
  const menuSections = {
    platform: [
      {
        title: "Platform",
        items: [
          {
            href: "/whydeepkore",
            label: "Why Deepkore",
            icon: Lightbulb,
            featured: [],
          },
          {
            href: "/lowcode",
            label: "What is Low Code",
            icon: Zap,
            featured: [],
          },
          {
            href: "/nocode",
            label: "What is No Code",
            icon: Wrench,
            featured: [],
          },
        ],
      },
      {
        title: "Features",
        items: [
          {
            href: "/dataform",
            label: "Visual Development",
            icon: Palette,
            featured: [],
          },
          {
            href: "/process",
            label: "Workflow Builder",
            icon: Settings,
            featured: [],
          },
          {
            href: "/analytics",
            label: "Analytics & Insights",
            icon: BarChart,
            featured: [],
          },
          {
            href: "/integration",
            label: "Integration Capabilities",
            icon: RefreshCw,
            featured: [],
          },
          {
            href: "/feature",
            label: "Explore all features",
            icon: ArrowRight,
            featured: [],
          },
          // { href: "/security", label: "Security", icon: "🔒" },
          // { href: "/encryption", label: "Data encryption", icon: "🔐" },
        ],
      },
      {
        title: "Pre-Built Templates",
        items: [
          {
            href: "/templates/hr",
            label: "Human Resource",
            icon: Users,
            featured: [],
          },
          {
            href: "/templates/procurement",
            label: "Procurement",
            icon: ShoppingCart,
            featured: [],
          },
          {
            href: "/templates/finance",
            label: "Finance",
            icon: DollarSign,
            featured: [],
          },
          {
            href: "/templates/adminops",
            label: "Admin & Ops",
            icon: FileText,
            featured: [],
          },

          {
            href: "/templates",
            label: "Explore all templates",
            icon: ArrowRight,
            description: "Browse our complete collection of templates",
            featured: [],
          },
        ],
      },
    ],
    products: [
      {
        title: "Products",
        items: [
          {
            href: "/crm",
            label: "CRM Platform",
            icon: Briefcase,
            description:
              "Comprehensive customer relationship management solution that streamlines sales processes, enhances customer engagement, and drives business growth through intelligent automation and insights.",
            featured: [
              { label: "Product Tour", href: "/crm", icon: Play },
              { label: "What's New", href: "/crm", icon: Bell },
              { label: "Documentation", href: "/crm", icon: FileText },
            ],
          },
          {
            href: "/itservicedesk",
            label: "IT Service Desk",
            icon: Settings,
            description:
              "Advanced IT service management platform that simplifies incident resolution, asset tracking, and helpdesk operations with powerful workflow automation and reporting.",
            featured: [
              {
                label: "Product Tour",
                href: "/itservicedesk",
                icon: Play,
              },
              {
                label: "What's New",
                href: "/itservicedesk",
                icon: Bell,
              },
              {
                label: "Documentation",
                href: "/itservicedesk",
                icon: FileText,
              },
            ],
          },
        ],
      },
      {
        title: "",
        items: [
          {
            href: "/all-products",
            label: "Explore All Products",
            icon: ArrowRight,
            description:
              "Discover our complete suite of enterprise solutions and start your free trial",
            featured: [],
          },
        ],
      },
    ],
    solutions: [
      {
        title: "Use Cases",
        items: [
          {
            href: "/usecase",
            label: "Performance Management",
            icon: Briefcase,
            description: "Streamline your sales processes",
            featured: [],
          },
          {
            href: "/usecase",
            label: "Virtual Care Platform",
            icon: Package,
            description: "Track and manage assets effectively",
            featured: [],
          },
          {
            href: "/usecase",
            label: "Explore All Use Cases",
            icon: ArrowRight,
            featured: [],
          },
        ],
      },
      {
        title: "Industry Solutions",
        items: [
          {
            href: "/solution/manufacturing",
            label: "Manufacturing & Production",
            icon: Factory,
            description: "Optimize manufacturing processes",
            featured: [],
          },
          {
            href: "/solution/healthcare",
            label: "Healthcare & Medical",
            icon: Hospital,
            description: "Healthcare management solutions",
            featured: [],
          },
          {
            href: "/solution/retail",
            label: "Retail & E-commerce",
            icon: ShoppingBag,
            description: "Retail and online commerce tools",
            featured: [],
          },
        ],
      },
      {
        title: "More Industries",
        items: [
          {
            href: "/solution/education",
            label: "Education & E-learning",
            icon: BookOpen,
            description: "Educational platform solutions",
            featured: [],
          },
          {
            href: "/solution/transportation",
            label: "Logistics & Transportation",
            icon: Truck,
            description: "Logistics and transportation management",
            featured: [],
          },
          {
            href: "/solution",
            label: "Explore All Industries",
            icon: ArrowRight,
            featured: [],
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            className="fixed inset-0 bg-black/5 backdrop-blur-[1px] z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => {
              setIsDropdownOpen(false);
              setActiveSection(null);
            }}
          />
        )}
      </AnimatePresence>

      <motion.header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
        <div className="bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-full shadow-lg px-4 py-2.5 relative">
          <div className="flex items-center justify-between min-w-[340px] lg:min-w-[800px]">
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
            <nav className="hidden lg:flex items-center space-x-3">
              {/* Platform Button */}
              <div className="relative">
                <motion.button
                  className={`flex items-center justify-center space-x-1 px-2.5 py-1 text-black hover:text-gray-900 font-medium text-sm transition-all duration-200 rounded-md hover:bg-gray-50/80 hover:shadow-sm ${
                    activeSection === "platform" ? "bg-gray-50" : ""
                  }`}
                  onClick={() => {
                    if (activeSection === "platform" && isDropdownOpen) {
                      setIsDropdownOpen(false);
                      setActiveSection(null);
                    } else {
                      setActiveSection("platform");
                      setIsDropdownOpen(true);
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Platform</span>
                  <motion.svg
                    className="w-2.5 h-2.5 ml-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      rotate:
                        isDropdownOpen && activeSection === "platform"
                          ? 180
                          : 0,
                    }}
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
              </div>

              {/* Solutions Dropdown */}

              {/* Product Button */}
              <div className="relative">
                <motion.button
                  className={`flex items-center justify-center space-x-2 px-3 py-1.5 text-black hover:text-gray-900 font-medium text-sm transition-all duration-200 rounded-md hover:bg-gray-50/80 hover:shadow-sm ${
                    activeSection === "product" ? "bg-gray-50" : ""
                  }`}
                  onClick={() => {
                    if (activeSection === "product" && isDropdownOpen) {
                      setIsDropdownOpen(false);
                      setActiveSection(null);
                    } else {
                      setActiveSection("product");
                      setIsDropdownOpen(true);
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Product</span>
                  <motion.svg
                    className="w-2.5 h-2.5 ml-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      rotate:
                        isDropdownOpen && activeSection === "product" ? 180 : 0,
                    }}
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
              </div>
              <div className="relative">
                <motion.button
                  className={`flex items-center justify-center space-x-2 px-3 py-1.5 text-black hover:text-gray-900 font-medium text-sm transition-all duration-200 rounded-md hover:bg-gray-50/80 hover:shadow-sm ${
                    activeSection === "solutions" ? "bg-gray-50" : ""
                  }`}
                  onClick={() => {
                    if (activeSection === "solutions" && isDropdownOpen) {
                      setIsDropdownOpen(false);
                      setActiveSection(null);
                    } else {
                      setActiveSection("solutions");
                      setIsDropdownOpen(true);
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Solutions</span>
                  <motion.svg
                    className="w-2.5 h-2.5 ml-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{
                      rotate:
                        isDropdownOpen && activeSection === "solutions"
                          ? 180
                          : 0,
                    }}
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
              </div>

              {/* Unified Dropdown */}
              <AnimatePresence>
                {isDropdownOpen && activeSection && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white rounded-xl shadow-2xl border border-gray-100/50 overflow-hidden z-50 p-6 min-w-[720px] backdrop-blur-sm"
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {activeSection === "platform" && (
                      <div className="flex gap-8">
                        {renderMenuSection(menuSections.platform[0], true)}
                        <div className="flex-1">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-4">
                                {menuSections.platform[1].title}
                              </h3>
                              <div className="space-y-2">
                                {menuSections.platform[1].items.map(
                                  (item, itemIdx) => (
                                    <motion.a
                                      key={item.href}
                                      href={item.href}
                                      className="flex items-start gap-3 py-2.5 text-gray-600 hover:bg-gray-50/80 rounded transition-all duration-200 group"
                                      onClick={() => {
                                        setIsDropdownOpen(false);
                                        setActiveSection(null);
                                      }}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        delay: itemIdx * 0.05,
                                        duration: 0.2,
                                        ease: [0.16, 1, 0.3, 1],
                                      }}
                                      whileHover={{ scale: 1.02, x: 4 }}
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      <span className="text-base w-7 h-7 flex items-center justify-center bg-blue-50 text-blue-600 rounded shrink-0 group-hover:bg-blue-100 transition-colors duration-200">
                                        {item.icon ? (
                                          <item.icon className="w-4 h-4" />
                                        ) : null}
                                      </span>
                                      <div className="flex-1">
                                        <div className="font-medium text-sm text-gray-900 group-hover:text-blue-600">
                                          {item.label}
                                        </div>
                                        <div className="text-xs text-gray-500 leading-relaxed mt-0.5">
                                          {item.description}
                                        </div>
                                      </div>
                                    </motion.a>
                                  )
                                )}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-4">
                                {menuSections.platform[2].title}
                              </h3>
                              <div className="space-y-2">
                                {menuSections.platform[2].items.map(
                                  (item, itemIdx) => (
                                    <motion.a
                                      key={item.href}
                                      href={item.href}
                                      className="flex items-start gap-3 py-2.5 text-gray-600 hover:bg-gray-50/80 rounded transition-all duration-200 group"
                                      onClick={() => {
                                        setIsDropdownOpen(false);
                                        setActiveSection(null);
                                      }}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        delay: itemIdx * 0.05,
                                        duration: 0.2,
                                        ease: [0.16, 1, 0.3, 1],
                                      }}
                                      whileHover={{ scale: 1.02, x: 4 }}
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      <span className="text-base w-7 h-7 flex items-center justify-center bg-blue-50 text-blue-600 rounded shrink-0 group-hover:bg-blue-100 transition-colors duration-200">
                                        {item.icon ? (
                                          <item.icon className="w-4 h-4" />
                                        ) : null}
                                      </span>
                                      <div className="flex-1">
                                        <div className="font-medium text-sm text-gray-900 group-hover:text-blue-600">
                                          {item.label}
                                        </div>
                                      </div>
                                    </motion.a>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {activeSection === "product" && (
                      <div className="grid grid-cols-2 gap-8">
                        {menuSections.products[0].items.map(
                          (item: MenuItem, idx) => (
                            <motion.a
                              key={item.href}
                              href={item.href}
                              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100/50 block"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                delay: idx * 0.1,
                                duration: 0.3,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                              onClick={() => {
                                setIsDropdownOpen(false);
                                setActiveSection(null);
                              }}
                              whileHover={{ scale: 1.03, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                  <span className="text-base w-7 h-7 flex items-center justify-center bg-blue-50 text-blue-600 rounded shrink-0">
                                    {item.icon ? (
                                      <item.icon className="w-4 h-4" />
                                    ) : null}
                                  </span>
                                  <h3 className="text-md font-semibold text-gray-900">
                                    {item.label}
                                  </h3>
                                </div>
                                <p className="text-sm text-gray-600">
                                  {item.description}
                                </p>
                                {item.featured.length > 0 && (
                                  <div className="mt-4 space-y-2">
                                    <p className="text-sm text-gray-500">
                                      Featured content
                                    </p>
                                    <div className="space-y-2">
                                      {item.featured.map(
                                        (
                                          feature: FeaturedItem,
                                          fidx: number
                                        ) => (
                                          <motion.a
                                            key={fidx}
                                            href={feature.href}
                                            className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                            onClick={() => {
                                              setIsDropdownOpen(false);
                                              setActiveSection(null);
                                            }}
                                            whileHover={{ scale: 1.02, x: 2 }}
                                            whileTap={{ scale: 0.98 }}
                                          >
                                            {feature.icon ? (
                                              <feature.icon className="w-4 h-4" />
                                            ) : null}
                                            <span>{feature.label}</span>
                                          </motion.a>
                                        )
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </motion.a>
                          )
                        )}
                      </div>
                    )}
                    {activeSection === "product" && (
                      <div className="mt-6 pt-4 border-t">
                        {menuSections.products[1].items.map((item, idx) => (
                          <motion.a
                            key={item.href}
                            href={item.href}
                            className="flex items-center justify-end gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200"
                            onClick={() => {
                              setIsDropdownOpen(false);
                              setActiveSection(null);
                            }}
                            whileHover={{ scale: 1.05, x: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <span>{item.label}</span>
                            <item.icon className="w-5 h-5" />
                          </motion.a>
                        ))}
                      </div>
                    )}
                    {activeSection === "solutions" && (
                      <div className="flex gap-8">
                        {renderMenuSection(menuSections.solutions[0], true)}
                        <div className="flex-1">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-4">
                                {menuSections.solutions[1].title}
                              </h3>
                              <div className="space-y-2">
                                {menuSections.solutions[1].items.map(
                                  (item, itemIdx) => (
                                    <motion.a
                                      key={item.href}
                                      href={item.href}
                                      className="flex items-start gap-3 py-2.5 text-gray-600 hover:bg-gray-50/80 rounded transition-all duration-200 group"
                                      onClick={() => {
                                        setIsDropdownOpen(false);
                                        setActiveSection(null);
                                      }}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        delay: itemIdx * 0.05,
                                        duration: 0.2,
                                        ease: [0.16, 1, 0.3, 1],
                                      }}
                                      whileHover={{ scale: 1.02, x: 4 }}
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      <span className="text-base w-7 h-7 flex items-center justify-center bg-blue-50 text-blue-600 rounded shrink-0 group-hover:bg-blue-100 transition-colors duration-200">
                                        {item.icon ? (
                                          <item.icon className="w-4 h-4" />
                                        ) : null}
                                      </span>
                                      <div className="flex-1">
                                        <div className="font-medium text-sm text-gray-900 group-hover:text-blue-600">
                                          {item.label}
                                        </div>
                                        <div className="text-xs text-gray-500 leading-relaxed mt-0.5">
                                          {item.description}
                                        </div>
                                      </div>
                                    </motion.a>
                                  )
                                )}
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-4">
                                {menuSections.solutions[2].title}
                              </h3>
                              <div className="space-y-2">
                                {menuSections.solutions[2].items.map(
                                  (item, itemIdx) => (
                                    <motion.a
                                      key={item.href}
                                      href={item.href}
                                      className="flex items-start gap-3 py-2.5 text-gray-600 hover:bg-gray-50/80 rounded transition-all duration-200 group"
                                      onClick={() => {
                                        setIsDropdownOpen(false);
                                        setActiveSection(null);
                                      }}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        delay: itemIdx * 0.05,
                                        duration: 0.2,
                                        ease: [0.16, 1, 0.3, 1],
                                      }}
                                      whileHover={{ scale: 1.02, x: 4 }}
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      <span className="text-base w-7 h-7 flex items-center justify-center bg-blue-50 text-blue-600 rounded shrink-0 group-hover:bg-blue-100 transition-colors duration-200">
                                        {item.icon ? (
                                          <item.icon className="w-4 h-4" />
                                        ) : null}
                                      </span>
                                      <div className="flex-1">
                                        <div className="font-medium text-sm text-gray-900 group-hover:text-blue-600">
                                          {item.label}
                                        </div>
                                        <div className="text-xs text-gray-500 leading-relaxed mt-0.5">
                                          {item.description}
                                        </div>
                                      </div>
                                    </motion.a>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-center space-x-1 px-2.5 py-1 text-black hover:text-gray-900 font-medium text-sm transition-all duration-200 rounded-md hover:bg-gray-50/80 hover:shadow-sm"
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
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#248aff]  rounded-md transition-colors duration-200 shadow-sm hover:shadow-xl"
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
                      {menuSections.platform.map(
                        (section: MenuSection, sectionIdx: number) => (
                          <div key={section.title} className="mb-2">
                            <span className="block px-3 py-2 text-sm font-semibold text-gray-700 tracking-wide">
                              {section.title}
                            </span>
                            {section.items.map(
                              (item: MenuItem, itemIdx: number) => (
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
                              )
                            )}
                          </div>
                        )
                      )}
                    </motion.div>

                    {/* Product Dropdown Mobile */}
                    <motion.div className="border-b border-gray-100 pb-2 mb-2">
                      <span className="block px-3 py-2 text-sm font-semibold text-gray-700 tracking-wide">
                        Product
                      </span>
                      {menuSections.products[0].items.map(
                        (item: MenuItem, idx: number) => (
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
                        )
                      )}
                    </motion.div>

                    {/* Solutions Dropdown Mobile */}
                    <motion.div className="border-b border-gray-100 pb-2 mb-2">
                      <span className="block px-3 py-2 text-sm font-semibold text-gray-700 tracking-wide">
                        Solutions
                      </span>
                      {menuSections.solutions[0].items.map(
                        (item: MenuItem, idx: number) => (
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
                        )
                      )}
                    </motion.div>

                    {/* Other Nav Items */}
                    <motion.a
                      href="/blog"
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
                    href="/contact"
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
    </>
  );
};

export default Header;
