import { motion } from "framer-motion";
import { Trophy, Camera, Award, Rocket, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const achievements = [
  {
    icon: Rocket,
    title: "4+ AI/ML Projects Built",
    description: "Developed multiple end-to-end AI & Machine Learning projects solving real-world problems.",
    gradient: "from-primary to-secondary",
    border: "neon-border",
  },
  {
    icon: Camera,
    title: "Real-Time ANPR System",
    description: "Built a real-time Automatic Number Plate Recognition system using OpenCV and OCR technology.",
    gradient: "from-secondary to-neon-cyan",
    border: "neon-border-blue",
  },
  {
    icon: Award,
    title: "ML Certifications Completed",
    description: "Completed Machine Learning and AI certifications to strengthen theoretical and practical knowledge.",
    gradient: "from-accent to-primary",
    border: "neon-border-pink",
  },
  {
    icon: Trophy,
    title: "Disease Prediction Web App",
    description: "Created an ML-powered web application for early disease diagnosis with less than 2 second latency.",
    gradient: "from-primary via-accent to-secondary",
    border: "neon-border",
  },
  {
    icon: BookOpen,
    title: "Articles",
    description: "Thoughts, tutorials, and insights on AI, Machine Learning, and software development.",
    gradient: "from-secondary to-accent",
    border: "neon-border-blue",
    isArticles: true,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-6 relative w-full">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass-strong p-5 rounded-2xl ${item.border} transition-all duration-300 cursor-default flex flex-col`}
            >
              <motion.div
                className={`bg-gradient-to-br ${item.gradient} p-3 rounded-xl w-fit mb-3`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <h3 className="text-sm font-bold mb-2 font-heading">{item.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed flex-1">{item.description}</p>
              {'isArticles' in item && item.isArticles && (
                <Button
                  size="sm"
                  className="mt-3 bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-primary-foreground font-semibold rounded-full text-xs"
                  onClick={() => window.open('https://medium.com/@dhruvgahtori00', '_blank')}
                >
                  <ExternalLink className="w-3 h-3 mr-1.5" />
                  Read Articles
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
