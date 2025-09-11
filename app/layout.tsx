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
  title: "Deepkore - Creative Entrepreneurship Platform",
  description:
    "Discover the power of Deepkore for your creative entrepreneurship journey. Fast, responsive, and accessible platform for innovators.",
  keywords:
    "Deepkore, creative entrepreneurship, AI assistant, innovation platform",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Deepkore - Creative Entrepreneurship Platform",
    description:
      "Discover the power of Deepkore for your creative entrepreneurship journey.",
    url: "https://your-domain.com",
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
    title: "Deepkore - Creative Entrepreneurship Platform",
    description:
      "Discover the power of Deepkore for your creative entrepreneurship journey.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://your-domain.com",
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
              description: "AI-powered creative entrepreneurship platform",
              url: "https://your-domain.com",
            }),
          }}
        />
      </body>
    </html>
  );
}
