import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "../components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deepkore.com"),
  title: "Deepkore -  Building the Future of AI Driven Businessm",
  description:
    "Transform your business and boost productivity with Deepkore. Effortlessly build Enterprise apps that keep pace with your business's rapid growth—all without writing a single line of code.",
  keywords:
    "Deepkore lets you transform ideas into powerful Enterprise applications that adapt to your business needs.",
  authors: [{ name: "Your Name" }],
  icons: {
    icon: "/logo-icon.svg",
  },
  openGraph: {
    title: "Deepkore - Building the Future of AI Driven Business",
    description:
      "Transform your business and boost productivity with Deepkore. Effortlessly build Enterprise apps that keep pace with your business's rapid growth—all without writing a single line of code.",
    url: "https://deepkore.com",
    siteName: "Deepkore",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Deepkore Innovation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepkore - Building the Future of AI Driven Business",
    description:
      "Transform your business and boost productivity with Deepkore. Effortlessly build Enterprise apps that keep pace with your business's rapid growth—all without writing a single line of code.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://deepkore.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/logo-icon.svg"
          as="image"
          type="image/svg+xml"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Resource hints for performance */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Deepkore",
              description: "Building the Future of AI Driven Business",
              url: "https://deepkore.com",
            }),
          }}
        />
      </body>
    </html>
  );
}
