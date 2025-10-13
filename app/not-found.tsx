"use client";

import Link from "next/link";
import {
  Home,
  MessageCircle,
  Zap,
  DollarSign,
  Users,
  FileText,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              404
            </h1>
          </div>

          {/* Title and Description */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Oops! Page Not Found
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The page you&apos;re looking for seems to have wandered off into
              the digital void. Don&apos;t worry, let&apos;s get you back on
              track!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <div>
              <Link
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-full shadow-lg border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
            </div>
          </div>

          {/* Popular Pages */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Or explore these popular pages:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {[
                {
                  href: "/features",
                  label: "Features",
                  icon: <Zap className="w-6 h-6" />,
                },
                {
                  href: "/pricing",
                  label: "Pricing",
                  icon: <DollarSign className="w-6 h-6" />,
                },
                {
                  href: "/aboutus",
                  label: "About Us",
                  icon: <Users className="w-6 h-6" />,
                },
                {
                  href: "/blog",
                  label: "Blog",
                  icon: <FileText className="w-6 h-6" />,
                },
              ].map((page, index) => (
                <div key={page.href}>
                  <Link
                    href={page.href}
                    className="block p-4 bg-white rounded-xl border-2 border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="text-blue-600 group-hover:text-blue-700 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {page.icon}
                    </div>
                    <div className="text-blue-600 group-hover:text-blue-700 font-medium">
                      {page.label}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Message */}
          <div className="text-gray-500 text-sm">
            Lost in the digital wilderness? We&apos;re here to help! 🚀
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
