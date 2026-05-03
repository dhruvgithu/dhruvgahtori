import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import GitHubStats from "@/components/GitHubStats";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProfileSidebar from "@/components/ProfileSidebar";
import { AnimatePresence, motion } from "framer-motion";

export type SectionKey = "home" | "education" | "skills" | "projects" | "contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>("home");

  const skillsContent = (
    <div className="w-full">
      <div className="pt-2">
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
    </div>
  );

  const wrapWithSidebar = (node: React.ReactNode, extra?: React.ReactNode) => (
    <section className="w-full min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          <ProfileSidebar />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm min-w-0"
          >
            {node}
            {extra}
          </motion.div>
        </div>
      </div>
    </section>
  );

  const sections: Record<SectionKey, React.ReactNode> = {
    home: <Hero onNavigate={(s) => setActiveSection(s as SectionKey)} />,
    education: wrapWithSidebar(<Education />),
    skills: wrapWithSidebar(skillsContent),
    projects: wrapWithSidebar(<Projects />),
    contact: wrapWithSidebar(<Contact />, <Footer />),
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
