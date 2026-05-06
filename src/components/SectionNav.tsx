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
    <div className="w-full overflow-x-auto md:w-auto">
      <div className="inline-flex items-center gap-1 rounded-full md:rounded-none md:rounded-tr-2xl md:rounded-bl-2xl bg-background border border-border md:border-t-0 md:border-r-0 px-2 md:px-5 py-1.5 md:py-4 shadow-sm">
        {navItems.map((item) => (
          <button
            key={item.key}
            type="button"
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
                className="pointer-events-none absolute inset-0 bg-primary rounded-full"
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
