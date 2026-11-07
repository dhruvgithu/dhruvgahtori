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
  { name: "GRC", icon: ShieldCheck, color: "text-skill-blue" },
  { name: "ISO 27001", icon: Shield, color: "text-skill-cyan" },
  { name: "Risk Management", icon: Scale, color: "text-skill-orange" },
  { name: "Risk Assessment", icon: SearchCheck, color: "text-skill-violet" },
  { name: "IT Audit", icon: ClipboardCheck, color: "text-skill-green" },
  { name: "IT Compliance", icon: BadgeCheck, color: "text-skill-red" },
  { name: "Information Security", icon: LockKeyhole, color: "text-skill-teal" },
  { name: "Risk Analysis", icon: ShieldAlert, color: "text-skill-amber" },
  { name: "Internal Controls", icon: ListChecks, color: "text-skill-indigo" },
  { name: "Control Testing", icon: FileCheck2, color: "text-skill-blue" },
  { name: "Policy Documentation", icon: FileText, color: "text-skill-orange" },
  { name: "Risk Mitigation", icon: ShieldCheck, color: "text-skill-green" },
  { name: "GDPR", icon: Globe2, color: "text-skill-cyan" },
  { name: "SOC 2", icon: BadgeCheck, color: "text-skill-violet" },
  { name: "IT Governance", icon: Landmark, color: "text-skill-amber" },
  { name: "GitHub", icon: Github, color: "text-skill-charcoal" },
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
              <t.icon aria-hidden="true" className={`w-8 h-8 sm:w-9 sm:h-9 ${t.color}`} strokeWidth={1.7} />
              <span className="text-[11px] sm:text-xs font-semibold text-foreground text-center leading-tight">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
