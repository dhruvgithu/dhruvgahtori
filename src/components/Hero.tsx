import { motion } from "framer-motion";
import { BookOpen, FolderOpen, Github, Linkedin, TreePine, Send, FileText } from "lucide-react";
import { Button } from "./ui/button";
import ParticleBackground from "./ParticleBackground";

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com/dhruvgithu" },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/dhruv-gahtori-8b7b56285" },
    { icon: TreePine, label: "Linktree", link: "https://linktr.ee/dhruvgahtori00" },
    { icon: Send, label: "Telegram", link: "https://t.me/dhruvgahtori" },
  ];

  return (
    <section id="home" className="w-full h-full flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      </div>

      <div className="flex-1 flex flex-col justify-center container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight text-foreground">
            Hi, I&apos;m Dhruv Gahtori
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mb-6 leading-relaxed">
            B.Tech Computer Science student passionate about building intelligent systems.
            I work on problem-solving and creating AI-powered solutions that tackle real-world challenges.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 rounded-md"
              onClick={() => onNavigate?.("projects")}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 rounded-md"
              onClick={() => onNavigate?.("contact")}
            >
              Get in Touch
            </Button>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm text-muted-foreground">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10"
        >
          <h2 className="text-lg font-bold mb-4 text-foreground">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl items-stretch">
            <div className="bg-card border border-border rounded-lg p-5 shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300 flex h-full flex-col">
              <h3 className="text-base font-bold text-foreground mb-2">Articles</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Insights from real interviews, core fundamentals, and practical strategies for succeeding in tech roles.
              </p>
              <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md w-full h-10 mt-auto">
                <a href="https://medium.com/@dhruvgahtori00" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-4 h-4 mr-1.5" />
                  Read Articles
                </a>
              </Button>
            </div>

            <div className="bg-card border border-border rounded-lg p-5 shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300 flex h-full flex-col">
              <h3 className="text-base font-bold text-foreground mb-2">Portfolio</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Built for recruiters, focused on impact.
              </p>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md w-full h-10 mt-auto"
                onClick={() => onNavigate?.("about")}
              >
                <FolderOpen className="w-4 h-4 mr-1.5" />
                View Portfolio
              </Button>
            </div>

            <div className="bg-card border border-border rounded-lg p-5 shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300 flex h-full flex-col">
              <h3 className="text-base font-bold text-foreground mb-2">Resume</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                Explore my projects, skills, education, and everything I&apos;ve been working on.
              </p>
              <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] shadow-sm hover:shadow-md font-semibold rounded-md w-full h-10 mt-auto transition-all duration-300">
                <a href="/DhruvGahtori_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4 mr-1.5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative z-10 pb-4 pt-2"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 flex-wrap justify-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 border border-border rounded-md text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all"
                >
                  <social.icon className="w-4 h-4" />
                  {social.label}
                </a>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              © 2026 Dhruv Gahtori
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
