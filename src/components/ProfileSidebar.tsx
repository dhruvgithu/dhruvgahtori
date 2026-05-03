import { motion } from "framer-motion";
import { Github, Linkedin, TreePine, Send, Mail, MapPin, GraduationCap } from "lucide-react";
import profilePhoto from "@/assets/dhruv-photo.jpg";

const ProfileSidebar = () => {
  const socialLinks = [
    { icon: Mail, label: "Email", link: "mailto:dhruvgahtori00@gmail.com", external: false },
    { icon: Github, label: "GitHub", link: "https://github.com/dhruvgithu", external: true },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/dhruv-gahtori-8b7b56285", external: true },
    { icon: TreePine, label: "Linktree", link: "https://linktr.ee/dhruvgahtori00", external: true },
    { icon: Send, label: "Telegram", link: "https://t.me/dhruvgahtori", external: true },
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card border border-border rounded-2xl p-6 shadow-sm lg:sticky lg:top-20"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-2xl overflow-hidden border border-border shadow-sm mb-4">
          <img src={profilePhoto} alt="Dhruv Gahtori" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-xl font-bold text-foreground">Dhruv Gahtori</h2>
        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 border border-border rounded-full text-xs font-semibold text-foreground">
          <span className="w-2 h-2 rounded-full bg-green-700" />
          Available for opportunities
        </div>
      </div>

      <div className="my-5 h-px bg-border" />

      <div className="space-y-4">
        <a href="mailto:dhruvgahtori00@gmail.com" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center shrink-0">
            <Mail className="w-4 h-4 text-primary" />
          </div>
          <div className="text-left min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Email</p>
            <p className="text-sm text-foreground truncate group-hover:text-primary transition-colors">dhruvgahtori00@gmail.com</p>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center shrink-0">
            <GraduationCap className="w-4 h-4 text-primary" />
          </div>
          <div className="text-left min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Education</p>
            <p className="text-sm text-foreground">B.Tech CSE</p>
          </div>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Champawat%2C%20Uttarakhand%2C%20India"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-md bg-muted flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4 text-primary" />
          </div>
          <div className="text-left min-w-0">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Location</p>
            <p className="text-sm text-foreground group-hover:text-primary transition-colors">Uttarakhand, India</p>
          </div>
        </a>
      </div>

      <div className="my-5 h-px bg-border" />

      <div className="flex items-center justify-center gap-2 flex-wrap">
        {socialLinks.map((s, i) => (
          <a
            key={i}
            href={s.link}
            target={s.external ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={s.label}
            className="w-9 h-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
          >
            <s.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </motion.aside>
  );
};

export default ProfileSidebar;
