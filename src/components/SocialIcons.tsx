import { Github, Linkedin, TreePine, Send, Mail } from "lucide-react";

const socialLinks = [
  { icon: Mail, label: "Email", link: "mailto:dhruvgahtori00@gmail.com" },
  { icon: Github, label: "GitHub", link: "https://github.com/dhruvgithu" },
  { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/dhruv-gahtori-8b7b56285" },
  { icon: TreePine, label: "Linktree", link: "https://linktr.ee/dhruvgahtori00" },
  { icon: Send, label: "Telegram", link: "https://t.me/dhruvgahtori" },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center gap-3 mt-8">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target={social.link.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="p-2.5 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
          title={social.label}
        >
          <social.icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
