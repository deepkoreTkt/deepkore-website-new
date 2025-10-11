"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";

const TermsAndConditions: React.FC = () => {
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

  const termsSections = [
    {
      title: "Acceptance of Terms",
      icon: "📋",
      content: [
        {
          text: "By using our platform and Services, you agree to these Terms and any additional terms that may apply. You must be at least 18 years old to use our Services. If you are using our Services on behalf of an organization, you are agreeing to these Terms on behalf of that organization.",
        },
      ],
    },
    {
      title: "Changes to Terms",
      icon: "�",
      content: [
        {
          text: "We reserve the right to update or modify these Terms at any time. Any changes will be effective immediately upon posting the revised version on our website. Your continued use of the Services after such changes constitutes your acceptance of the new Terms. Please review these Terms periodically for updates.",
        },
      ],
    },
    {
      title: "Services Overview",
      icon: "⚙️",
      content: [
        {
          text: "Our platform enables users to create, manage, and deploy applications using low-code/no-code tools. The specific services we offer may include:",
        },
        {
          subtitle: "Application Development",
          text: "Tools to build applications without extensive coding.",
        },
        {
          subtitle: "Customization and Automation",
          text: "Features to automate processes and customize workflows.",
        },
        {
          subtitle: "Hosting and Deployment",
          text: "Hosting services for applications created on the platform.",
        },
        {
          subtitle: "Integration with Third-Party Services",
          text: "Connections with other applications and services through APIs.",
        },
      ],
    },
    {
      title: "User Accounts",
      icon: "👤",
      content: [
        {
          text: "To access certain features of our Services, you may be required to create an account. You agree to:",
        },
        {
          subtitle: "Account Requirements",
          text: "Provide accurate, current, and complete information when registering. Maintain the security of your account and password. Notify us immediately of any unauthorized use of your account. Be responsible for all activities that occur under your account.",
        },
        {
          subtitle: "Account Termination",
          text: "We reserve the right to terminate accounts that provide false or misleading information or violate these Terms.",
        },
      ],
    },
    {
      title: "User Responsibilities",
      icon: "🛡️",
      content: [
        {
          text: "By using our Services, you agree that you will not:",
        },
        {
          subtitle: "Prohibited Activities",
          text: "Use the platform for any unlawful purposes or in violation of any applicable laws or regulations. Distribute viruses, malware, or other harmful software. Reverse-engineer, decompile, or disassemble the Services or any underlying technology. Infringe on any intellectual property rights or rights of privacy. Misuse or abuse our Services, including creating malicious or fraudulent applications.",
        },
        {
          subtitle: "Content Responsibility",
          text: "You are responsible for the content you create, including any applications, data, or code.",
        },
      ],
    },
    {
      title: "Fees and Payment",
      icon: "💳",
      content: [
        {
          text: "Some of our Services may be provided on a paid basis. By selecting a paid plan or subscription, you agree to pay the fees associated with that plan. All fees are non-refundable unless otherwise specified in writing. We reserve the right to change our pricing at any time with reasonable notice.",
        },
      ],
    },
    {
      title: "Intellectual Property",
      icon: "©️",
      content: [
        {
          subtitle: "Ownership",
          text: "All content, technology, and intellectual property rights on our platform, including software, logos, and designs, are owned by or licensed to us. You agree not to copy, distribute, or create derivative works based on our platform without prior written permission.",
        },
        {
          subtitle: "Your Content",
          text: "You retain ownership of any content, data, or applications you create using our platform. By using our Services, you grant us a worldwide, royalty-free license to use, host, store, reproduce, and display your content solely for the purpose of providing the Services to you.",
        },
      ],
    },
    {
      title: "Third-Party Services",
      icon: "🔗",
      content: [
        {
          text: "Our platform may integrate with or allow you to use third-party services. These third-party services are not controlled by us, and their use is subject to their own terms and privacy policies. We are not responsible for the content, accuracy, or reliability of any third-party services.",
        },
      ],
    },
    {
      title: "Termination of Services",
      icon: "🚪",
      content: [
        {
          text: "We reserve the right to suspend or terminate your access to the Services at any time, without notice, for any reason, including, but not limited to, violation of these Terms. Upon termination, your right to use the Services will immediately cease, and you must stop using the platform and any related services.",
        },
        {
          subtitle: "User Termination",
          text: "You may also terminate your account at any time by contacting us at contact@deepkore.com. Please note that any fees paid are non-refundable upon termination.",
        },
      ],
    },
    {
      title: "Disclaimer of Warranties",
      icon: "⚠️",
      content: [
        {
          text: 'The Services are provided "as is" and "as available" without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.',
        },
        {
          subtitle: "Service Guarantees",
          text: "We do not warrant that: The Services will function uninterrupted, secure, or error-free. The results obtained from the use of the Services will be accurate or reliable. Any errors or defects in the Services will be corrected.",
        },
      ],
    },
    {
      title: "Limitation of Liability",
      icon: "⚖️",
      content: [
        {
          text: "To the fullest extent permitted by law, Deepkore Technologies and its affiliates, officers, directors, employees, and agents will not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Services, even if we have been advised of the possibility of such damages.",
        },
        {
          subtitle: "Liability Cap",
          text: "Our total liability to you for any claim arising from or relating to these Terms or the Services will not exceed the amount you paid to us in the twelve months preceding the claim.",
        },
      ],
    },
    {
      title: "Indemnification",
      icon: "🛡️",
      content: [
        {
          text: "You agree to indemnify, defend, and hold harmless Deepkore Technologies, its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in connection with:",
        },
        {
          subtitle: "Indemnified Claims",
          text: "Your use of the Services. Your violation of these Terms. Your infringement of any intellectual property or other rights of any person or entity.",
        },
      ],
    },
    {
      title: "Governing Law",
      icon: "🏛️",
      content: [
        {
          text: "These Terms will be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in [Jurisdiction], and you hereby consent to the jurisdiction of such courts.",
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
              Terms and Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our services.
            </p>
            <div className="mt-8 text-gray-500">Last updated: 11/10/2025</div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Terms of Service Agreement
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Welcome to Deepkore Technologies. These Terms of Service
              (&quot;Terms&quot;) govern your access to and use of our website,
              services, and platform (collectively, the &quot;Services&quot;).
              By accessing or using the Services, you agree to be bound by these
              Terms. If you do not agree to these Terms, please do not use the
              Services.
            </p>
            <div className="bg-gradient-to-r from-[#00A551]/5 to-[#2791D0]/5 rounded-2xl p-8 border border-[#00A551]/20">
              <div className="text-6xl mb-4">📜</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Legal Agreement
              </h3>
              <p className="text-gray-600">
                These terms constitute a legally binding agreement between you
                and Deepkore Technologies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Terms Sections */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              Key Terms and Conditions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding your rights and responsibilities when using our
              services
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {termsSections.map((section, idx) => (
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
              Important Information
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Governing Law",
                description:
                  "These terms are governed by applicable laws. Any disputes will be resolved in the appropriate jurisdiction.",
                icon: "🏛️",
              },
              {
                title: "Indemnification",
                description:
                  "You agree to indemnify and hold harmless Deepkore Technologies from claims arising from your use of services.",
                icon: "�️",
              },
              {
                title: "Service Availability",
                description:
                  "Services are provided as-is without warranties. We strive for continuous availability but cannot guarantee it.",
                icon: "⚡",
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
                <p className="text-white/90 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Updates Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="bg-gradient-to-br from-[#00A551]/5 to-[#2791D0]/5 rounded-2xl p-8 border border-[#00A551]/20"
            {...fadeInUp}
          >
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Changes to These Terms
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-center">
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting. Your continued use of
              our services constitutes acceptance of the modified terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-[#00A551] to-[#2791D0] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Questions About These Terms?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              We&apos;re here to help. Contact our legal team with any questions
              about these terms and conditions.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6 text-left">
                <div>
                  <div className="text-2xl mb-2">📧</div>
                  <h4 className="font-bold mb-1">Email</h4>
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

export default TermsAndConditions;
