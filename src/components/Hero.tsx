import { motion } from "framer-motion";
import { Download, BookOpen, FolderOpen, Github, Linkedin, Mail, TreePine, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import ParticleBackground from "./ParticleBackground";
import { useEffect, useState } from "react";

const typingTexts = [
  "Technology Enthusiast",
  "B.Tech Computer Science Student",
  "Problem Solver",
];

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[textIndex];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typingTexts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  const socialLinks = [
    { icon: Github, label: "GitHub", link: "https://github.com/dhruvgithu" },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/dhruv-gahtori-8b7b56285" },
    { icon: TreePine, label: "Linktree", link: "https://linktr.ee/dhruvgahtori00" },
    { icon: Mail, label: "Email", link: "mailto:dhruvgahtori00@gmail.com" },
  ];

  return (
    <section id="home" className="w-full h-full flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <ParticleBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      </div>

      <div className="flex-1 flex flex-col justify-center container mx-auto px-6 md:px-12 relative z-10">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight font-display">
            Hi, I'm{" "}
            <span className="gradient-text text-glow">Dhruv Gahtori</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mb-6 leading-relaxed">
            I am a B.Tech Computer Science student passionate about building intelligent systems.
            I work on problem-solving and creating AI-powered solutions that tackle real-world challenges.
          </p>
          <div className="flex gap-3">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-6 rounded-md"
              onClick={() => onNavigate?.('projects')}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-border text-foreground hover:bg-muted font-semibold px-6 rounded-md"
              onClick={() => onNavigate?.('contact')}
            >
              Hire Me
            </Button>
          </div>
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="mt-10"
        >
          <h2 className="text-lg font-bold mb-4 font-display text-foreground">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            {/* Articles Card */}
            <div className="bg-card/80 border border-border rounded-lg p-5 hover:border-primary/40 transition-all duration-300">
              <h3 className="text-base font-bold text-foreground mb-2 font-display">Articles</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Thoughts, tutorials, and insights on AI, machine learning, and software development.
              </p>
              <Button
                size="sm"
                className="bg-foreground text-background hover:bg-foreground/90 font-semibold rounded-md"
                onClick={() => window.open('https://medium.com/@dhruvgahtori00', '_blank')}
              >
                <BookOpen className="w-4 h-4 mr-1.5" />
                Read Articles
              </Button>
            </div>

            {/* Portfolio Card */}
            <div className="bg-card/80 border border-border rounded-lg p-5 hover:border-primary/40 transition-all duration-300">
              <h3 className="text-base font-bold text-foreground mb-2 font-display">Portfolio</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore my projects, skills, education, and everything I've been working on.
              </p>
              <Button
                size="sm"
                className="bg-foreground text-background hover:bg-foreground/90 font-semibold rounded-md"
                onClick={() => onNavigate?.('about')}
              >
                <FolderOpen className="w-4 h-4 mr-1.5" />
                View Portfolio
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social Links Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="relative z-10 pb-4 pt-2"
      >
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
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
