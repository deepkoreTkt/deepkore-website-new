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
  title: "Nexus AI - Creative Entrepreneurship Platform",
  description: "Discover the power of Nexus AI for your creative entrepreneurship journey. Fast, responsive, and accessible platform for innovators.",
  keywords: "Nexus AI, creative entrepreneurship, AI assistant, innovation platform",
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Nexus AI - Creative Entrepreneurship Platform",
    description: "Discover the power of Nexus AI for your creative entrepreneurship journey.",
    url: "https://your-domain.com",
    siteName: "Nexus AI",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nexus AI Innovation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus AI - Creative Entrepreneurship Platform",
    description: "Discover the power of Nexus AI for your creative entrepreneurship journey.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Nexus AI',
              description: 'AI-powered creative entrepreneurship platform',
              url: 'https://your-domain.com',
            }),
          }}
        />
      </body>
    </html>
  );
}
