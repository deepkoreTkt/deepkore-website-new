import Hero from "../components/Hero";
import TargetAudience from "../components/TargetAudience";
import About from "../components/About";
import EfficiencyMetrics from "../components/EfficiencyMetrics";
import Features from "../components/Features";
import ProductShowcase from "../components/ProductShowcase";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
// import Pricing from '../components/Pricing';
import Footer from "../components/Footer";
import Header from "../components/Header";
import FloatingElements from "../components/FloatingElements";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <FloatingElements />
      <Header />
      <br />
      <main>
        <section id="home">
          <Hero />
        </section>
        <TargetAudience />
        <About />
        <EfficiencyMetrics />
        <section id="features">
          <Features />
        </section>
        <ProductShowcase />
        <Benefits />
        <Testimonials />
        <Team />
        <Gallery />
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
