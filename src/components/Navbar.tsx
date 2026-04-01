import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import type { SectionKey } from "@/pages/Index";

interface NavbarProps {
  activeSection: SectionKey;
  setActiveSection: (section: SectionKey) => void;
}

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { name: string; key: SectionKey }[] = [
    { name: "Home", key: "home" },
    { name: "About", key: "about" },
    { name: "Education", key: "education" },
    { name: "Skills", key: "skills" },
    { name: "Projects", key: "projects" },
    { name: "Contact", key: "contact" },
  ];

  const handleNav = (key: SectionKey) => {
    setActiveSection(key);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNav("home")}
            className="text-xl font-bold text-primary cursor-pointer hover:opacity-80 transition-all"
          >
            DG
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNav(item.key)}
                className={`px-3 py-1.5 text-sm transition-all font-medium relative group cursor-pointer rounded-full ${
                  activeSection === item.key
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {item.name}
                {activeSection === item.key && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border border-border rounded-2xl p-3 mb-3 overflow-hidden"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNav(item.key)}
                    className={`text-sm text-left transition-all font-medium p-2.5 rounded-xl cursor-pointer ${
                      activeSection === item.key
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
