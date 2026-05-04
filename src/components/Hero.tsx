import { motion } from "framer-motion";
import { BookOpen, FileText } from "lucide-react";
import { Button } from "./ui/button";
import ProfileSidebar from "./ProfileSidebar";

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <section id="home" className="w-full min-h-screen relative">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          <ProfileSidebar />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm min-w-0"
          >
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h1>
              <div className="mt-2 h-1 w-16 bg-primary rounded-full" />
            </div>

            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                B.Tech Computer Science student passionate about building intelligent systems. I work on problem-solving and creating AI-powered solutions that tackle real-world challenges.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md"
                onClick={() => onNavigate?.("projects")}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md"
                onClick={() => onNavigate?.("contact")}
              >
                Get in Touch
              </Button>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background border border-border rounded-xl p-5 flex flex-col">
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
              <div className="bg-background border border-border rounded-xl p-5 flex flex-col">
                <h3 className="text-base font-bold text-foreground mb-1">Resume</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  Explore my projects, skills, education, and everything I&apos;ve been working on.
                </p>
                <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md w-full h-10">
                  <a href="/DhruvGahtori_Resume.pdf" download="DhruvGahtori_Resume.pdf">
                    <FileText className="w-4 h-4 mr-1.5" />
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
