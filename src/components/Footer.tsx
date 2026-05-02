import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-4 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Designed & Built by{" "}
              <span className="text-primary font-bold">Dhruv Gahtori</span>
            </p>
            <a
              href="mailto:dhruvgahtori00@gmail.com"
              className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              dhruvgahtori00@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
