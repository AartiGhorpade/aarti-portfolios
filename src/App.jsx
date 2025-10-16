import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import HeroSection from "./pages/HeroSection";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
