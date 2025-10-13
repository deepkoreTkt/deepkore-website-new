import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Deepkore",
  description:
    "The page you're looking for doesn't exist. Return to Deepkore's homepage or explore our features.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-green-900 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 max-w-md mx-auto mb-8">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might
            have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mr-4"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-slate-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Support
          </Link>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-semibold text-white mb-4">
            Popular Pages
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/features"
              className="text-blue-300 hover:text-blue-100 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-blue-300 hover:text-blue-100 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/aboutus"
              className="text-blue-300 hover:text-blue-100 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/blog"
              className="text-blue-300 hover:text-blue-100 transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
