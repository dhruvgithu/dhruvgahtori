import { motion } from "framer-motion";
import { MapPin, Code } from "lucide-react";
import profilePhoto from "@/assets/dhruv-photo.jpg";
import SocialIcons from "./SocialIcons";

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
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            >
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
                <img
                  src={profilePhoto}
                  alt="Dhruv Gahtori"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl -z-10 blur-sm" />
            </motion.div>
          </motion.div>

          <motion.div
            className="glass-strong p-6 rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">My Journey</h3>
            <div className="space-y-3 text-muted-foreground text-sm">
              <p className="leading-relaxed">
                I am originally from <span className="text-primary font-semibold">Champawat, Uttarakhand</span>, and currently pursuing my B.Tech in Computer Science and Engineering at Graphic Era Hill University, Bhimtal.
              </p>
              <p className="leading-relaxed">
                I am passionate about technology, problem-solving, and exploring modern tools in software development. My focus is on building practical projects, learning new technologies, and continuously improving my skills as a developer.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=Champawat%2C%20Uttarakhand%2C%20India"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/40 hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <MapPin className="w-6 h-6 mx-auto mb-2 text-primary" />
            <h4 className="text-sm font-bold text-foreground">Location</h4>
            <p className="text-xs text-muted-foreground mt-1">Uttarakhand, India</p>
          </a>

          <div className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/40 hover:shadow-md transition-all duration-300">
            <Code className="w-6 h-6 mx-auto mb-2 text-primary" />
            <h4 className="text-sm font-bold text-foreground">Interest</h4>
            <p className="text-xs text-muted-foreground mt-1">Software Development & AI</p>
          </div>
        </motion.div>

        <SocialIcons />
      </div>
    </section>
  );
};

export default About;
