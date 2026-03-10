import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
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

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <ParticleBackground />
        <div
          className="absolute w-[700px] h-[700px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, hsl(265, 90%, 65% / 0.25), transparent 70%)',
            top: '-15%',
            left: '-10%',
            transform: `translateY(${scrollY * 0.4}px)`,
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, hsl(200, 100%, 55% / 0.2), transparent 70%)',
            top: '30%',
            right: '-10%',
            animationDelay: '2s',
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full animate-pulse-glow"
          style={{
            background: 'radial-gradient(circle, hsl(330, 85%, 60% / 0.2), transparent 70%)',
            bottom: '-10%',
            left: '30%',
            animationDelay: '4s',
            transform: `translateY(${scrollY * 0.35}px)`,
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
        <div
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Aspiring AI & ML Engineer</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight font-display">
              Hi, I'm{" "}
              <span className="gradient-text text-glow">Dhruv Gahtori</span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-2 font-heading font-semibold text-glow-blue">
              Aspiring AI & Machine Learning Engineer
            </p>
            <p className="text-lg md:text-xl text-primary/80 mb-4 font-heading h-8">
              {typingTexts[textIndex].substring(0, charIndex)}
              <span className="animate-pulse">|</span>
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              B.Tech Computer Science Student passionate about building intelligent systems that solve real-world challenges using AI and Machine Learning
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full glow animate-gradient-shift"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <a href="/DhruvGahtori_Resume.pdf" download="DhruvGahtori_Resume.pdf" className="inline-block">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full glow-pink"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>

          {/* Profile Photo */}
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
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-2 border-primary/40 shadow-2xl"
              />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-secondary rounded-bl-lg" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-5 h-5 text-primary" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
