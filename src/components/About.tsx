import { motion } from "framer-motion";
import { Download, MapPin, GraduationCap, Code } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/dhruv-photo.jpg";

const About = () => {
  return (
    <section id="about" className="py-8 relative overflow-hidden w-full">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">
          {/* Profile Photo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden neon-border">
                <img
                  src={profilePhoto}
                  alt="Dhruv Gahtori"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl -z-10 blur-sm opacity-50" />
            </div>
          </motion.div>

          {/* Journey + Resume */}
          <motion.div
            className="glass-strong p-6 rounded-2xl neon-border"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4 font-heading gradient-text">My Journey</h3>
            <div className="space-y-3 text-muted-foreground text-sm">
              <p className="leading-relaxed">
                I am originally from <span className="text-neon-cyan font-semibold">Champawat, Uttarakhand</span>, and currently pursuing my B.Tech in Computer Science and Engineering at Graphic Era Hill University, Bhimtal.
              </p>
              <p className="leading-relaxed">
                I am passionate about technology, problem-solving, and exploring modern tools in software development. My focus is on building practical projects, learning new technologies, and continuously improving my skills as a developer.
              </p>
            </div>
            <div className="mt-6">
              <a href="/DhruvGahtori_Resume.pdf" download="DhruvGahtori_Resume.pdf">
                <Button
                  size="sm"
                  className="bg-foreground text-background hover:bg-foreground/90 font-semibold rounded-md"
                >
                  <Download className="w-4 h-4 mr-1.5" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Info Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://maps.app.goo.gl/GxTjDP99rKkEdqbT8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card/80 border border-border rounded-lg p-4 text-center hover:border-primary/40 transition-all duration-300 cursor-pointer"
          >
            <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
            <h4 className="text-sm font-bold text-foreground">Location</h4>
            <p className="text-xs text-muted-foreground mt-1">Uttarakhand, India</p>
          </a>

          <div className="bg-card/80 border border-border rounded-lg p-4 text-center hover:border-primary/40 transition-all duration-300">
            <GraduationCap className="w-6 h-6 mx-auto mb-2 text-primary" />
            <h4 className="text-sm font-bold text-foreground">Education</h4>
            <p className="text-xs text-muted-foreground mt-1">B.Tech CSE</p>
          </div>

          <div className="bg-card/80 border border-border rounded-lg p-4 text-center hover:border-primary/40 transition-all duration-300">
            <Code className="w-6 h-6 mx-auto mb-2 text-primary" />
            <h4 className="text-sm font-bold text-foreground">Interest</h4>
            <p className="text-xs text-muted-foreground mt-1">Software Development & AI</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
