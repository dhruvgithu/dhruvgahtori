import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GitHubStats from "@/components/GitHubStats";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";
import { AnimatePresence, motion } from "framer-motion";

export type SectionKey = "home" | "about" | "education" | "skills" | "projects" | "github" | "contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  const sections: Record<SectionKey, React.ReactNode> = {
    home: <Hero onNavigate={(s) => setActiveSection(s as SectionKey)} />,
  about: <About />,
  education: <Education />,
  skills: (
    <div className="w-full h-full overflow-y-auto">
      <TechStack />
      <Skills />
    </div>
  ),
  projects: <Projects />,
  github: (
    <div className="w-full h-full overflow-y-auto">
      <GitHubStats />
      <CurrentlyLearning />
    </div>
  ),
  contact: (
    <div className="w-full h-full overflow-y-auto">
      <Contact />
      <Footer />
    </div>
  ),
};

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  return (
    <div className="h-screen w-screen overflow-hidden relative bg-background">
      <FloatingShapes />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="h-full w-full pt-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full w-full"
          >
            {sections[activeSection]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
