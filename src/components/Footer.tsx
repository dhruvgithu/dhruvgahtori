import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              Made with <Heart className="inline w-4 h-4 text-red-500" /> by{" "}
              <span className="gradient-text font-bold">Dhruv Gahtori</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © 2025 All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/dhruvgahtori"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-primary/10 hover:scale-110 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/dhruv-gahtori-8b7b56285"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-full hover:bg-primary/10 hover:scale-110 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:dhruvgahtori00@gmail.com"
              className="p-3 glass rounded-full hover:bg-primary/10 hover:scale-110 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
