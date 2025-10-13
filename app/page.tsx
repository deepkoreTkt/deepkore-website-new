"use client";
import dynamic from "next/dynamic";
import Hero from "../components/Hero";
import TargetAudience from "../components/TargetAudience";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Stats from "../components/Stats";
import PowerfulFeatures from "../components/PowerfulFeatures";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Lazy load components that are not immediately visible
const ProductOverview = dynamic(() => import("../components/ProductOverview"), {
  loading: () => (
    <div className="h-96 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
      <div className="text-gray-400">Loading...</div>
    </div>
  ),
});

const MarketingInsights = dynamic(
  () => import("../components/MarketingInsights"),
  {
    loading: () => (
      <div className="h-96 bg-gradient-to-r from-gray-100 to-gray-200 animate-pulse flex items-center justify-center">
        <div className="text-gray-400">Loading...</div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <div className="relative bg-[#fffdfa]">
      {/* <FloatingElements /> */}
      <Header />
      <main>
        <Hero />

        <PowerfulFeatures />
        {/* <ProductShowcase /> */}
        <TargetAudience />
        {/* <EfficiencyMetrics /> */}

        {/* <About /> */}
        <Stats />
        <section id="features">
          <Features />
        </section>

        <Benefits />
        <ProductOverview />
        <MarketingInsights />
        {/* <Testimonials /> */}
        {/* <Team /> */}
        {/* <Gallery /> */}
        {/* <section id="pricing">
          <Pricing />
        </section> */}
      </main>
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}
