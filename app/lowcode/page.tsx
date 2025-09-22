import WhatIsLowCode from "@/components/WhatIsLowCode";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LowCodePage = () => {
  return (
    <div className="min-h-screen bg-[#f5f7f7]">
      <Header />
      <main>
        <WhatIsLowCode />
      </main>
      <Footer />
    </div>
  );
};

export default LowCodePage;

