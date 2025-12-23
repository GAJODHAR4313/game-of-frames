import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; // Import About
import Showreel from "./components/Showreel";
import Gear from "./components/Gear";
import Skills from "./components/Skills";
import SoftwareMarquee from "./components/SoftwareMarquee";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#050505]">
      <Navbar />
      <Hero />
      <About /> {/* Add About here */}
      <Showreel />
      <Gear />
      <Skills />
      <SoftwareMarquee />
      <Footer />
   
    </div>
  );
}

export default App;