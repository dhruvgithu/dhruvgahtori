import { motion } from "framer-motion";
import { BookOpen, Download } from "lucide-react";
import { Button } from "./ui/button";
import ProfileSidebar from "./ProfileSidebar";
import SectionNav from "./SectionNav";
import type { SectionKey } from "@/pages/Index";

interface HeroProps {
  onNavigate?: (section: string) => void;
  activeSection: SectionKey;
  setActiveSection: (section: SectionKey) => void;
}

const Hero = ({ onNavigate, activeSection, setActiveSection }: HeroProps) => {
  return (
    <section id="home" className="w-full relative">
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

            <div className="mb-6 md:pr-[440px]">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h1>
              <div className="mt-2 h-1 w-16 bg-primary rounded-full" />
            </div>

            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                B.Tech Computer Science Graduate passionate about building AI-powered applications and scalable solutions for real-world problems.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-xl w-full py-5 text-base"
                onClick={() => onNavigate?.("projects")}
              >
                View Projects
              </Button>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-xl w-full py-5 text-base"
                onClick={() => onNavigate?.("contact")}
              >
                Get in Touch
              </Button>
            </div>

            <div className="mt-10">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-1">Highlights</h2>
              <div className="h-1 w-12 bg-primary rounded-full mb-4" />
            </div>

            <div className="flex flex-col md:flex-row items-stretch gap-4">
              <div className="flex-1 bg-background border border-border rounded-xl p-5 flex flex-col h-full">
                <h3 className="text-base font-bold text-foreground mb-1">Articles</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  Insights from real interviews, core fundamentals, and practical strategies for tech roles.
                </p>
                <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md w-full h-10">
                  <a href="https://medium.com/@dhruvgahtori00" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="w-4 h-4 mr-1.5" />
                    Read Articles
                  </a>
                </Button>
              </div>
              <div className="flex-1 bg-background border border-border rounded-xl p-5 flex flex-col h-full">
                <h3 className="text-base font-bold text-foreground mb-1">Resume</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  Explore my projects, skills, and education everything I&apos;ve been working on.
                </p>
                <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md w-full h-10">
                  <a href="/DhruvGahtori_Resume.pdf" download="DhruvGahtori_Resume.pdf">
                    <Download className="w-4 h-4 mr-1.5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
