import Blog from "../../components/Blog";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Blog />
      <Footer />
    </div>
  );
}
