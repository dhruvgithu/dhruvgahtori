import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import GitHubStats from "@/components/GitHubStats";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProfileSidebar from "@/components/ProfileSidebar";
import SectionNav from "@/components/SectionNav";
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
    <section className="w-full">
      <div className="mx-auto px-4 md:px-6 py-8 max-w-[1250px]">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 items-start">
          <ProfileSidebar />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative bg-card border border-border rounded-[20px] p-8 shadow-sm min-w-0 h-fit lg:min-h-[566px]"
          >
            <div className="absolute top-0 right-0 z-20 hidden md:block">
              <SectionNav activeSection={activeSection} setActiveSection={setActiveSection} />
            </div>
            <div className="mb-6 flex md:hidden">
              <SectionNav activeSection={activeSection} setActiveSection={setActiveSection} />
            </div>
            <div className="md:pt-16">
              {node}
              {extra}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  const sections: Record<SectionKey, React.ReactNode> = {
    home: <Hero onNavigate={(s) => setActiveSection(s as SectionKey)} activeSection={activeSection} setActiveSection={setActiveSection} />,
    education: wrapWithSidebar(<Education />),
    skills: wrapWithSidebar(skillsContent),
    projects: wrapWithSidebar(<Projects />),
    contact: wrapWithSidebar(<Contact />, <Footer />),
  };

  useEffect(() => {
    requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: "auto" }));
  }, [activeSection]);

  return (
    <div className="min-h-screen w-full relative bg-background">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full"
        >
          {sections[activeSection]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
