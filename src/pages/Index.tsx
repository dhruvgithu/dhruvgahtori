import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";
import WaveSeparator from "@/components/WaveSeparator";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FloatingShapes />
      <Navbar />
      <Hero />
      <WaveSeparator variant="purple" />
      <About />
      <WaveSeparator variant="blue" flip />
      <Education />
      <WaveSeparator variant="pink" />
      <Projects />
      <WaveSeparator variant="purple" flip />
      <Skills />
      <WaveSeparator variant="blue" />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
