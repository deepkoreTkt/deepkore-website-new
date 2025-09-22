"use client";
import Hero from "../components/Hero";
import TargetAudience from "../components/TargetAudience";
import About from "../components/About";
import EfficiencyMetrics from "../components/EfficiencyMetrics";
import Features from "../components/Features";
import ProductShowcase from "../components/ProductShowcase";
import Benefits from "../components/Benefits";
import Stats from "../components/Stats";
import PowerfulFeatures from "../components/PowerfulFeatures";
import Comparison from "../components/Comparison";
import ProductOverview from "../components/ProductOverview";
import MarketingInsights from "../components/MarketingInsights";
// import Pricing from '../components/Pricing';
import Footer from "../components/Footer";
import Header from "../components/Header";
import FloatingElements from "../components/FloatingElements";

export default function Home() {
  return (
    <div
      className="relative bg-gradient-to-r
         from-blue-200 via-white to-green-100"
    >
      {/* <FloatingElements /> */}
      <Header />
      <main>
        <Hero />

        <PowerfulFeatures />
        <ProductShowcase />
        <TargetAudience />
        <EfficiencyMetrics />

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

