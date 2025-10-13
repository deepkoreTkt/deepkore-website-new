"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Settings,
  Shield,
  User,
  Baby,
  FileText,
  Mail,
  Lock,
} from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

const PrivacyPolicy: React.FC = () => {
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

  const privacySections = [
    {
      title: "Information We Collect",
      icon: <BarChart3 className="w-12 h-12 text-[#00A551]" />,
      content: [
        {
          subtitle: "Personal Data",
          text: "Personal identification information such as your name, email address, phone number, job title, and company name when you sign up for our services, contact us, or otherwise interact with us.",
        },
        {
          subtitle: "Non-Personal Data",
          text: "Non-identifiable and anonymous information such as usage data, device information (IP address, browser type, device type), and other statistical data to improve our services.",
        },
        {
          subtitle: "Cookies",
          text: "We use cookies and similar tracking technologies to track the activity on our website and store certain information to enhance user experience. You can modify your cookie preferences through your browser settings.",
        },
      ],
    },
    {
      title: "How We Use Your Information",
      icon: <Settings className="w-12 h-12 text-[#00A551]" />,
      content: [
        {
          subtitle: "To Provide and Improve Services",
          text: "To personalize your experience, improve our website, and provide the services you request.",
        },
        {
          subtitle: "To Communicate",
          text: "To send you updates, newsletters, and other communications related to our products, services, or promotions, where you have opted in to receive such communications.",
        },
        {
          subtitle: "To Comply with Legal Obligations",
          text: "To comply with laws, regulations, and legal requests.",
        },
        {
          subtitle: "To Analyze Website Usage",
          text: "To monitor and analyze website usage and trends to enhance user experience.",
        },
      ],
    },
    {
      title: "How We Share Your Information",
      icon: <Shield className="w-12 h-12 text-[#00A551]" />,
      content: [
        {
          subtitle: "Service Providers",
          text: "We may share your information with third-party vendors, consultants, and service providers who perform services on our behalf.",
        },
        {
          subtitle: "Business Transfers",
          text: "If we undergo a merger, acquisition, or asset sale, your information may be transferred to the new entity.",
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law or if we believe such action is necessary to comply with legal obligations or protect the rights and safety of our company or users.",
        },
      ],
    },
    {
      title: "Data Security & Retention",
      icon: <Lock className="w-12 h-12 text-[#00A551]" />,
      content: [
        {
          subtitle: "Data Security",
          text: "We implement reasonable technical, administrative, and physical safeguards to protect your personal data from unauthorized access, use, or disclosure. However, no security system is completely infallible, and we cannot guarantee the security of your data.",
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy or as required by law.",
        },
      ],
    },
    {
      title: "Your Rights",
      icon: <User className="w-12 h-12 text-[#00A551]" />,
      content: [
        {
          text: "Depending on your location and applicable laws, you may have certain rights regarding your personal data, including: The right to access and request copies of your personal data. The right to request correction of any inaccuracies in your personal data. The right to request deletion of your personal data. The right to withdraw your consent at any time where we rely on your consent to process your personal data.",
        },
        {
          subtitle: "Contact for Rights",
          text: "To exercise these rights, please contact us at contact@deepkore.com",
        },
      ],
    },
  ];

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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and
              protect your personal information.
            </p>
            <div className="mt-8 text-gray-500">Last updated: 11-10-2025</div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Our Commitment to Your Privacy
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              At Deepkore Technologies, your privacy is important to us. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website
              deepkore.com, use our services, or engage with us. Please read
              this policy carefully to understand our views and practices
              regarding your personal data and how we will treat it.
            </p>
            <div className="bg-gradient-to-r from-[#00A551]/5 to-[#2791D0]/5 rounded-2xl p-8 border border-[#00A551]/20">
              <div className="flex justify-center mb-4">
                <Lock className="w-16 h-16 text-[#00A551]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Your Consent
              </h3>
              <p className="text-gray-600">
                By using our services, you consent to the data practices
                described in this Privacy Policy.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Privacy Sections */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Key Privacy Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding how we handle your data and your rights
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {privacySections.map((section, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-5xl mb-6">{section.icon}</div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  {section.title}
                </h3>
                <div className="space-y-4">
                  {section.content.map((item, itemIdx) => (
                    <div key={itemIdx}>
                      {"subtitle" in item && item.subtitle && (
                        <h4 className="text-lg font-semibold mb-2 text-[#00A551]">
                          {item.subtitle}
                        </h4>
                      )}
                      <p className="text-gray-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-20 bg-gradient-to-br from-[#00A551] to-[#2791D0] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Additional Privacy Details
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Third-Party Links",
                description:
                  "Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.",
                icon: <Shield className="w-10 h-10 text-white" />,
              },
              {
                title: "Children's Privacy",
                description:
                  "Our services are not intended for children under 13. We do not knowingly collect their information.",
                icon: <Baby className="w-10 h-10 text-white" />,
              },
              {
                title: "Data Protection",
                description:
                  "We implement comprehensive security measures to protect your personal information.",
                icon: <Shield className="w-10 h-10 text-white" />,
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
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/90 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Updates Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="bg-gradient-to-br from-[#00A551]/5 to-[#2791D0]/5 rounded-2xl p-8 border border-[#00A551]/20"
            {...fadeInUp}
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <FileText className="w-12 h-12 text-[#00A551]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Changes to This Privacy Policy
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-center">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the &quot;Last updated&quot; date. We encourage you
              to review this Privacy Policy periodically.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              &quot;Questions About Your Privacy?&quot;
            </h2>
            <p className="text-xl mb-8 text-white/90">
              We&apos;re here to help. Contact our privacy team with any
              questions or concerns.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-left">
                <div>
                  <div className="flex items-center mb-2">
                    <Mail className="w-6 h-6 text-white mr-2" />
                    <h4 className="font-bold">Email</h4>
                  </div>
                  <p className="text-white/90">contact@deepkore.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
