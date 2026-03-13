import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/dhruv-photo.jpg";
import ParticleBackground from "./ParticleBackground";
import { useEffect, useState } from "react";

const typingTexts = [
  "AI & Machine Learning Enthusiast",
  "B.Tech Computer Science Student",
  "Python Developer",
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

  return (
    <section id="home" className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <ParticleBackground />
        <div
          className="absolute w-[700px] h-[700px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, hsl(265, 90%, 65% / 0.25), transparent 70%)',
            top: '-15%',
            left: '-10%',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, hsl(200, 100%, 55% / 0.2), transparent 70%)',
            top: '30%',
            right: '-10%',
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(hsl(265, 90%, 65% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(265, 90%, 65% / 0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Aspiring AI & ML Engineer</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight font-display">
              Hi, I'm{" "}
              <span className="gradient-text text-glow">Dhruv Gahtori</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-1 font-heading font-semibold text-glow-blue">
              Technology Enthusiast
            </p>
            <p className="text-base md:text-lg text-primary/80 mb-3 font-heading h-7">
              {typingTexts[textIndex].substring(0, charIndex)}
              <span className="animate-pulse">|</span>
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mb-6 leading-relaxed">
              B.Tech Computer Science Student passionate about building intelligent systems that solve real-world challenges using AI and Machine Learning
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-primary hover:opacity-90 text-primary-foreground font-semibold px-6 py-5 rounded-full glow animate-gradient-shift"
                onClick={() => onNavigate?.('projects')}
              >
                View My Work
              </Button>
              <a href="/DhruvGahtori_Resume.pdf" download="DhruvGahtori_Resume.pdf" className="inline-block">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-primary-foreground font-semibold px-6 py-5 rounded-full glow-pink"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold px-6 py-5 rounded-full transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary/50 text-foreground hover:bg-secondary/10 hover:border-secondary font-semibold px-6 py-5 rounded-full transition-all duration-300"
                onClick={() => window.open('https://medium.com/@dhruvgahtori00', '_blank')}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read Articles
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border border-secondary/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full blur-3xl opacity-40 animate-glow" />
              <img
                src={profilePhoto}
                alt="Dhruv Gahtori"
                className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-primary/40 shadow-2xl"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-secondary rounded-bl-lg" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
