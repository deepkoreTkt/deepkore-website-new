"use client";
import Hero from "../components/Hero";
import TargetAudience from "../components/TargetAudience";
import Features from "../components/Features";
import Benefits from "../components/Benefits";
import Stats from "../components/Stats";
import PowerfulFeatures from "../components/PowerfulFeatures";
import ProductOverview from "../components/ProductOverview";
import MarketingInsights from "../components/MarketingInsights";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
