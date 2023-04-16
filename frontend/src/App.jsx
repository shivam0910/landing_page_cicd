import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";

function App() {
  return (
    <div className="bg-white">
      {/* Header */}
      <Header />

      <main>
        {/* Hero section */}
        <Hero />

        {/* Feature section */}
        <Feature />

        {/* Testimonial section */}
        <Testimonial />

        {/* Pricing section */}
        <Pricing />

        {/* FAQ section */}
        <Faq />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
