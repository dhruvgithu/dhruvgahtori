import { ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/dhruv-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-20 -left-20 animate-float" />
        <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl top-1/2 -right-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl -bottom-20 left-1/2 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">Dhruv Gahtori</span>
            </h1>
            <p className="text-2xl md:text-3xl text-secondary mb-4 font-semibold">
              Engineering Professional
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
              I'm passionate about building intelligent systems that can solve real-world challenges using AI and Machine Learning
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full glow"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <a
                href="/DhruvGahtori_Resume.pdf"
                download="DhruvGahtori_Resume.pdf"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full glow"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-foreground hover:bg-primary/10 font-semibold px-8 py-6 text-lg rounded-full"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-50 animate-glow" />
              <img
                src={profilePhoto}
                alt="Dhruv Gahtori"
                className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/30 shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
