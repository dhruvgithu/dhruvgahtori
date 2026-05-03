import { motion } from "framer-motion";
import { BookOpen, Github, Linkedin, TreePine, Send, FileText, Mail, MapPin, GraduationCap, Code2, Brain, Wrench, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import profilePhoto from "@/assets/dhruv-photo.jpg";

interface HeroProps {
  onNavigate?: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  const socialLinks = [
    { icon: Mail, label: "Email", link: "mailto:dhruvgahtori00@gmail.com", external: false },
    { icon: Github, label: "GitHub", link: "https://github.com/dhruvgithu", external: true },
    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com/in/dhruv-gahtori-8b7b56285", external: true },
    { icon: TreePine, label: "Linktree", link: "https://linktr.ee/dhruvgahtori00", external: true },
    { icon: Send, label: "Telegram", link: "https://t.me/dhruvgahtori", external: true },
  ];

  const doingItems = [
    {
      icon: Code2,
      title: "Software Development",
      desc: "Building clean, maintainable applications with modern languages and best engineering practices.",
    },
    {
      icon: Brain,
      title: "AI / Machine Learning",
      desc: "Designing intelligent systems with TensorFlow, Scikit-learn and computer vision pipelines.",
    },
    {
      icon: Sparkles,
      title: "Problem Solving",
      desc: "Tackling DSA challenges and turning real-world problems into efficient, working solutions.",
    },
    {
      icon: Wrench,
      title: "Tools & Workflows",
      desc: "Working with Git, Docker, Django and Jupyter to ship reliable, well-tested projects.",
    },
  ];

  return (
    <section id="home" className="w-full min-h-screen relative">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
          {/* Sidebar */}
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
              <span className="mt-2 inline-block px-3 py-1 rounded-md bg-muted text-xs font-medium text-foreground">
                Software Developer
              </span>
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

          {/* Main */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h1>
              <div className="mt-2 h-1 w-16 bg-primary rounded-full" />
            </div>

            <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>
                Hi, I&apos;m <span className="text-foreground font-semibold">Dhruv Gahtori</span> — a B.Tech Computer Science student passionate about building intelligent systems and clean, useful software. I enjoy turning complex problems into simple, elegant solutions.
              </p>
              <p>
                My focus is on software development, AI &amp; machine learning, and problem-solving. I work on practical projects that combine engineering fundamentals with modern tools, and I&apos;m always exploring new technologies to grow as a developer.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md"
                onClick={() => onNavigate?.("projects")}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-semibold rounded-md"
                onClick={() => onNavigate?.("contact")}
              >
                Get in Touch
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold rounded-md">
                <a href="/DhruvGahtori_Resume.pdf" download="DhruvGahtori_Resume.pdf">
                  <FileText className="w-4 h-4 mr-1.5" />
                  Resume
                </a>
              </Button>
            </div>

            <div className="mt-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-full text-sm font-semibold text-foreground">
                <span className="w-2.5 h-2.5 rounded-full bg-green-700" />
                Available for opportunities
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-foreground mb-1">What I&apos;m Doing</h2>
              <div className="h-1 w-12 bg-primary rounded-full mb-5" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {doingItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="bg-background border border-border rounded-xl p-5 flex gap-4 hover:border-primary/40 hover:shadow-md transition-all"
                  >
                    <div className="w-11 h-11 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background border border-border rounded-xl p-5 flex flex-col">
                <h3 className="text-base font-bold text-foreground mb-1">Articles</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  Insights from real interviews, core fundamentals, and practical strategies for tech roles.
                </p>
                <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md w-full h-10">
                  <a href="https://medium.com/@dhruvgahtori00" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="w-4 h-4 mr-1.5" />
                    Read Articles
                  </a>
                </Button>
              </div>
              <div className="bg-background border border-border rounded-xl p-5 flex flex-col">
                <h3 className="text-base font-bold text-foreground mb-1">Resume</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  Explore my projects, skills, education, and everything I&apos;ve been working on.
                </p>
                <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-md w-full h-10">
                  <a href="/DhruvGahtori_Resume.pdf" download="DhruvGahtori_Resume.pdf">
                    <FileText className="w-4 h-4 mr-1.5" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
