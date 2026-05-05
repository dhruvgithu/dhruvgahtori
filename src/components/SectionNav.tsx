import { motion } from "framer-motion";
import type { SectionKey } from "@/pages/Index";

interface SectionNavProps {
  activeSection: SectionKey;
  setActiveSection: (section: SectionKey) => void;
}

const navItems: { name: string; key: SectionKey }[] = [
  { name: "Home", key: "home" },
  { name: "Education", key: "education" },
  { name: "Skills", key: "skills" },
  { name: "Projects", key: "projects" },
  { name: "Contact", key: "contact" },
];

const SectionNav = ({ activeSection, setActiveSection }: SectionNavProps) => {
  return (
    <div>
      <div className="inline-flex items-center gap-1 bg-card border border-border rounded-tr-2xl rounded-bl-2xl border-t-0 border-r-0 px-2 py-1.5">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveSection(item.key)}
            className={`relative px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-colors ${
              activeSection === item.key
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {activeSection === item.key && (
              <motion.span
                layoutId="section-nav-pill"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionNav;
