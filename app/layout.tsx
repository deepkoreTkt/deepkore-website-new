import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deepkore.com"),
  title: "Deepkore -  Building the Future of AI Driven Businessm",
  description:
    "Transform your business and boost productivity with Deepkore. Effortlessly build Enterprise apps that keep pace with your business's rapid growth—all without writing a single line of code.",
  keywords:
    "Deepkore lets you transform ideas into powerful Enterprise applications that adapt to your business needs.",
  authors: [{ name: "Your Name" }],
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
        <link rel="icon" href="/logo-icon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
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
