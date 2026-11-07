import { motion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Github,
  Globe2,
  Landmark,
  ListChecks,
  LockKeyhole,
  Scale,
  SearchCheck,
  Shield,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

interface SkillsProps {
  hideHeader?: boolean;
}

const tech = [
  { name: "GRC", icon: ShieldCheck },
  { name: "ISO 27001", icon: Shield },
  { name: "Risk Management", icon: Scale },
  { name: "Risk Assessment", icon: SearchCheck },
  { name: "IT Audit", icon: ClipboardCheck },
  { name: "IT Compliance", icon: BadgeCheck },
  { name: "Information Security", icon: LockKeyhole },
  { name: "Risk Analysis", icon: ShieldAlert },
  { name: "Internal Controls", icon: ListChecks },
  { name: "Control Testing", icon: FileCheck2 },
  { name: "Policy Documentation", icon: FileText },
  { name: "Risk Mitigation", icon: ShieldCheck },
  { name: "GDPR", icon: Globe2 },
  { name: "SOC 2", icon: BadgeCheck },
  { name: "IT Governance", icon: Landmark },
  { name: "GitHub", icon: Github },
];

const Skills = ({ hideHeader = false }: SkillsProps) => {
  return (
    <div id="skills" className={hideHeader ? "pb-2 relative" : "relative"}>
      <div className="w-full max-w-6xl mx-auto">
        {!hideHeader && (
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
              Skills &amp; Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
          </motion.div>
        )}

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2.5 sm:gap-3">
          {tech.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              whileHover={{ y: -4 }}
              className="bg-background border border-border rounded-lg p-2.5 flex flex-col items-center justify-center gap-1.5 aspect-square hover:border-primary/40 hover:shadow-md transition-all"
            >
              <t.icon aria-hidden="true" className="w-8 h-8 sm:w-9 sm:h-9 text-primary" strokeWidth={1.7} />
              <span className="text-[11px] sm:text-xs font-semibold text-foreground text-center leading-tight">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
