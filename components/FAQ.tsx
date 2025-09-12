"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
    viewport: { once: true },
  };

  const categories = [
    {
      id: "all",
      name: "All Questions",
      icon: "📚",
      color: "from-[#00A551] to-[#2791D0]",
      bgColor: "bg-gradient-to-r from-[#00A551]/10 to-[#2791D0]/10",
    },
    {
      id: "platform",
      name: "Platform Basics",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10",
    },
    {
      id: "features",
      name: "Features & Capabilities",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-r from-purple-500/10 to-pink-500/10",
    },
    {
      id: "technical",
      name: "Technical Details",
      icon: "🔧",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-r from-orange-500/10 to-red-500/10",
    },
    {
      id: "pricing",
      name: "Pricing & Plans",
      icon: "💰",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-r from-green-500/10 to-emerald-500/10",
    },
    {
      id: "support",
      name: "Support & Resources",
      icon: "🎓",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-gradient-to-r from-indigo-500/10 to-purple-500/10",
    },
  ];

  const faqData = [
    {
      id: 1,
      title: "What is a Deepkore platform?",
      content:
        "An LCNC platform enables users to build applications without extensive coding knowledge. It provides visual interfaces, drag-and-drop features, and pre-built components, allowing both technical and non-technical users to create and customize apps quickly and efficiently.",
      category: "platform",
      tags: ["platform", "introduction", "overview"],
    },
    {
      id: 2,
      title: "Who can use this platform?",
      content:
        "Our platform is designed for everyone—from business professionals and project managers to software developers. No prior programming knowledge is required, so anyone looking to automate workflows, design custom apps, or streamline processes can benefit from it.",
      category: "platform",
      tags: ["users", "accessibility", "target audience"],
    },
    {
      id: 3,
      title: "How does Deepkore improve business productivity?",
      content:
        "Deepkore platforms speed up application development by reducing the time and complexity involved in coding. This allows businesses to launch solutions faster, automate routine tasks, and respond quickly to changes, thereby improving overall productivity.",
      category: "platform",
      tags: ["productivity", "efficiency", "business benefits"],
    },
    {
      id: 4,
      title: "Is coding knowledge required to use this platform?",
      content:
        "No, coding knowledge is not necessary. Our platform is intuitive and provides a drag-and-drop interface, along with pre-built templates, so you can create apps without writing a single line of code.",
      category: "platform",
      tags: ["coding", "no-code", "ease of use"],
    },
    {
      id: 5,
      title:
        "Can I scale applications built on this platform as my business grows?",
      content:
        "Absolutely! Applications built with our platform are flexible and scalable, ensuring that they can grow and adapt alongside your business needs.",
      category: "technical",
      tags: ["scalability", "growth", "flexibility"],
    },
    {
      id: 6,
      title: "What types of applications can I build using your platform?",
      content:
        "You can build a wide range of applications, including business process automation tools, customer relationship management (CRM) systems, project management apps, data collection forms, dashboards, and more. The possibilities are vast and customizable.",
      category: "features",
      tags: ["applications", "use cases", "capabilities"],
    },
    {
      id: 7,
      title: "How secure are the applications built on your platform?",
      content:
        "We prioritize security at every level. Our platform ensures data encryption, secure APIs, and compliance with industry-standard protocols, so the applications you build are safe and secure.",
      category: "technical",
      tags: ["security", "encryption", "compliance"],
    },
    {
      id: 8,
      title: "Can the platform integrate with other business tools?",
      content:
        "Yes, our platform supports seamless integrations with popular business tools, including CRM systems, ERP software, cloud storage, and other enterprise applications to enhance productivity.",
      category: "features",
      tags: ["integration", "third-party", "connectivity"],
    },
    {
      id: 9,
      title: "How fast can I launch an app using this platform?",
      content:
        "Depending on the complexity of your app, you can launch it in a matter of hours or days, as the platform significantly reduces traditional development time. Simple apps can be deployed almost immediately after creation.",
      category: "features",
      tags: ["deployment", "speed", "development time"],
    },
    {
      id: 10,
      title: "Is there customer support available if I need help?",
      content:
        "Yes, we offer comprehensive customer support, including live chat, email support, and a knowledge base with tutorials to guide you through any issues or questions.",
      category: "support",
      tags: ["support", "help", "assistance"],
    },
    {
      id: 11,
      title: "Can I make changes to my apps after they've been deployed?",
      content:
        "Yes, you can easily update or modify your applications post-deployment. Our platform allows you to make changes quickly without downtime or complex redevelopment processes.",
      category: "features",
      tags: ["updates", "modifications", "maintenance"],
    },
    {
      id: 12,
      title: "Do you offer any templates or pre-built components?",
      content:
        "Yes, our platform includes a variety of templates and pre-built components to help you get started. These templates cover common business use cases, allowing you to create customized apps even faster.",
      category: "features",
      tags: ["templates", "components", "starter kits"],
    },
    {
      id: 13,
      title: "How does your platform handle app performance under heavy usage?",
      content:
        "Our platform is built to handle high traffic and large-scale applications. We use efficient infrastructure and optimization techniques to ensure that your apps perform reliably, even under heavy usage.",
      category: "technical",
      tags: ["performance", "scalability", "infrastructure"],
    },
    {
      id: 14,
      title: "Is there a free trial available?",
      content:
        "Yes, we offer a free trial that allows you to explore the platform and build your first app at no cost. This way, you can experience the benefits of LCNC development before committing to a paid plan.",
      category: "pricing",
      tags: ["free trial", "demo", "getting started"],
    },
    {
      id: 15,
      title: "What pricing plans do you offer?",
      content:
        "We offer a range of pricing plans to fit different business needs, from small startups to large enterprises. Please visit our pricing page or contact our sales team for more information about which plan is right for you.",
      category: "pricing",
      tags: ["plans", "pricing", "tiers"],
    },
    {
      id: 16,
      title: "What pricing plans do you offer?",
      content:
        "We offer a range of pricing plans to suit various business needs, including Basic, Pro, and Enterprise tiers. Each plan comes with different features and levels of support, allowing you to choose the best fit for your organization.",
      category: "pricing",
      tags: ["plans", "basic", "pro", "enterprise"],
    },
    {
      id: 17,
      title: "Are there any hidden fees?",
      content:
        "No, we believe in transparency. Our pricing structure is straightforward, and you will only be charged the amount specified in your chosen plan. Additional services, if applicable, will be clearly outlined.",
      category: "pricing",
      tags: ["transparency", "fees", "hidden costs"],
    },
    {
      id: 18,
      title: "Can I change my pricing plan later?",
      content:
        "Absolutely! You can upgrade or downgrade your plan at any time to better suit your needs. Simply go to your account settings, and you can make changes easily.",
      category: "pricing",
      tags: ["upgrade", "downgrade", "plan changes"],
    },
    {
      id: 19,
      title: "What payment methods do you accept?",
      content:
        "We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. You can choose the payment option that is most convenient for you.",
      category: "pricing",
      tags: ["payment", "methods", "billing"],
    },
    {
      id: 20,
      title: "Do you offer discounts for annual subscriptions?",
      content:
        "Yes, we provide discounts for customers who choose annual subscriptions over monthly payments. This can save you money in the long run.",
      category: "pricing",
      tags: ["discounts", "annual", "savings"],
    },
    {
      id: 21,
      title: "What happens if I exceed the limits of my plan?",
      content:
        "If you exceed the limits of your plan, you will be notified, and you can choose to upgrade to a higher tier or continue using your current plan with a temporary overage fee.",
      category: "pricing",
      tags: ["limits", "overage", "usage"],
    },
    {
      id: 22,
      title: "Is customer support included in all pricing plans?",
      content:
        "Yes, all our pricing plans include customer support. However, the level of support may vary depending on your chosen plan, with higher tiers offering priority support.",
      category: "support",
      tags: ["support", "included", "priority"],
    },
    {
      id: 23,
      title: "Can I request a custom pricing plan?",
      content:
        "For larger organizations or specific needs, we can discuss custom pricing plans. Please contact our sales team for more information.",
      category: "pricing",
      tags: ["custom", "enterprise", "tailored"],
    },
    {
      id: 24,
      title: "How do I cancel my subscription?",
      content:
        "You can cancel your subscription at any time through your account settings. Upon cancellation, you will continue to have access to your plan until the end of your billing cycle.",
      category: "pricing",
      tags: ["cancellation", "subscription", "account"],
    },
    {
      id: 25,
      title: "Do you offer training programs?",
      content:
        "Yes! We offer various training options including self-paced online courses, live virtual training sessions, personalized onboarding for teams, and certification programs. Our training covers everything from basic platform usage to advanced development techniques.",
      category: "support",
      tags: ["training", "courses", "certification"],
    },
  ];

  const filteredFAQs = useMemo(() => {
    let filtered = faqData;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter(
        (faq) =>
          faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    return filtered;
  }, [activeCategory, searchTerm]);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const activeCategoryData = categories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-40 bg-gradient-to-br from-[#00A551]/10 to-[#2791D0]/10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#00A551] to-[#2791D0] bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about Deepkore Technologies and
              our platform.
            </p>
            <div className="mt-8 text-gray-500">
              Last updated: September 12, 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Find answers to common questions about our platform, features, and
              pricing
            </p>

            {/* Search Bar */}
            <motion.div
              className="max-w-md mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00A551] focus:border-transparent shadow-sm"
                />
              </div>
            </motion.div>

            {/* Category Tabs */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {categories.map((category, idx) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-lg">{category.icon}</span>
                  {category.name}
                  <span className="ml-1 text-xs opacity-75">
                    (
                    {
                      faqData.filter(
                        (faq) =>
                          category.id === "all" || faq.category === category.id
                      ).length
                    }
                    )
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Active Category Header */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`mb-8 p-6 rounded-2xl ${
                activeCategoryData?.bgColor || "bg-gray-50"
              }`}
            >
              <div className="text-center">
                <div className="text-4xl mb-3">{activeCategoryData?.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {activeCategoryData?.name}
                </h3>
                <p className="text-gray-600">
                  {filteredFAQs.length}{" "}
                  {filteredFAQs.length === 1 ? "question" : "questions"}{" "}
                  available
                  {searchTerm && ` for "${searchTerm}"`}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* FAQ Questions */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${searchTerm}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq, faqIdx) => {
                    const isOpen = openIndex === faqIdx;

                    return (
                      <motion.div
                        key={faq.id}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: faqIdx * 0.05 }}
                      >
                        <button
                          onClick={() => toggleQuestion(faqIdx)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-[#00A551] to-[#2791D0] rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">
                              {faqIdx + 1}
                            </div>
                            <h4 className="text-lg font-semibold text-gray-800 pr-4 leading-relaxed group-hover:text-[#00A551] transition-colors duration-200">
                              {faq.title}
                            </h4>
                          </div>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                          >
                            <svg
                              className="w-5 h-5 text-[#00A551] group-hover:text-[#2791D0] transition-colors duration-200"
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
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-6">
                                <div className="pl-12">
                                  <div className="w-1 bg-gradient-to-b from-[#00A551] to-[#2791D0] h-full absolute left-6 top-0 opacity-20"></div>
                                  <p className="text-gray-600 leading-relaxed pt-2">
                                    {faq.content}
                                  </p>
                                  {faq.tags && faq.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                      {faq.tags
                                        .slice(0, 3)
                                        .map((tag, tagIdx) => (
                                          <span
                                            key={tagIdx}
                                            className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                          >
                                            #{tag}
                                          </span>
                                        ))}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      No questions found
                    </h3>
                    <p className="text-gray-600">
                      Try adjusting your search terms or browse different
                      categories.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A551] to-[#2791D0] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Can&apos;t find the answer you&apos;re looking for? Our support
              team is here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Contact Support",
                description:
                  "Get in touch with our expert support team for personalized assistance.",
                icon: "💬",
                action: "contact@deepkore.com",
                actionType: "email",
              },
              {
                title: "Documentation",
                description:
                  "Explore our comprehensive documentation and tutorials.",
                icon: "📚",
                action: "View Docs",
                actionType: "link",
              },
              {
                title: "Community Forum",
                description:
                  "Join our community to connect with other users and share knowledge.",
                icon: "👥",
                action: "Join Community",
                actionType: "link",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="text-[#00A551] font-semibold">
                  {item.actionType === "email" ? (
                    <a
                      href={`mailto:${item.action}`}
                      className="hover:underline"
                    >
                      {item.action}
                    </a>
                  ) : (
                    <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors duration-200">
                      {item.action}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
