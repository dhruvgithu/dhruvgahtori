import { motion } from "framer-motion";
import { Download } from "lucide-react";
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
            <div className="space-y-4 text-muted-foreground text-sm">
              <p className="leading-relaxed">
                From <span className="text-neon-cyan font-semibold">Champawat, Uttarakhand</span>, I'm currently pursuing my B.Tech in Computer Science and Engineering at Graphic Era Hill University, Bhimtal.
              </p>
            </div>
            <div className="mt-6">
              <a href="/DhruvGahtori_Resume.pdf" download>
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
      </div>
    </section>
  );
};

export default About;
