import Extensions from "./sections/Extensions";
import Faq from "./sections/Faq";
import Features from "./sections/Features";

import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Extensions />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
