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
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionNav;
