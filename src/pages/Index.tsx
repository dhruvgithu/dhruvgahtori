import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import GitHubStats from "@/components/GitHubStats";
import CurrentlyLearning from "@/components/CurrentlyLearning";
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
      <TechStack />
      <WaveSeparator variant="purple" flip />
      <Projects />
      <WaveSeparator variant="blue" />
      <Skills />
      <WaveSeparator variant="pink" flip />
      <Experience />
      <WaveSeparator variant="purple" />
      <Achievements />
      <WaveSeparator variant="blue" flip />
      <GitHubStats />
      <WaveSeparator variant="pink" />
      <CurrentlyLearning />
      <WaveSeparator variant="purple" flip />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
