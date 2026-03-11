import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-4 border-t border-primary/10 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              Designed & Built by{" "}
              <span className="gradient-text font-bold">Dhruv Gahtori</span>
            </p>
            <p className="text-xs text-muted-foreground/80 mt-0.5">
              AI & ML Enthusiast | Uttarakhand, India
            </p>
          </div>

          <div className="flex items-center gap-2">
            {[
              { icon: Github, link: "https://github.com/dhruvgithu" },
              { icon: Linkedin, link: "https://linkedin.com/in/dhruv-gahtori-8b7b56285" },
              { icon: Mail, link: "mailto:dhruvgahtori00@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="p-2 glass rounded-full hover:neon-border transition-all"
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
