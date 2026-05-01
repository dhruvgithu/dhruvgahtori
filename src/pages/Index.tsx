import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import GitHubStats from "@/components/GitHubStats";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";

export type SectionKey = "home" | "about" | "education" | "skills" | "projects" | "contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  const sections: Record<SectionKey, React.ReactNode> = {
    home: <Hero onNavigate={(s) => setActiveSection(s as SectionKey)} />,
    about: <About />,
    education: <Education />,
    skills: (
      <div className="w-full">
        <div className="container mx-auto px-4 pt-6">
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
          </motion.div>
        </div>
        <Skills hideHeader />
        <GitHubStats />
        <SocialIcons />
      </div>
    ),
    projects: (
      <div className="w-full">
        <Projects />
      </div>
    ),
    contact: (
      <div className="w-full">
        <Contact />
        <Footer />
      </div>
    ),
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeSection]);

  return (
    <div className="min-h-screen w-full relative bg-background">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full pt-16"
        >
          {sections[activeSection]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
