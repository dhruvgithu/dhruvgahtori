import { motion } from "framer-motion";

const techStack = [
  { name: "Python", icon: "🐍" },
  { name: "C++", icon: "⚡" },
  { name: "Java", icon: "☕" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "Scikit-learn", icon: "📊" },
  { name: "OpenCV", icon: "👁️" },
  { name: "Pandas", icon: "🐼" },
  { name: "NumPy", icon: "🔢" },
  { name: "Git", icon: "🔀" },
  { name: "GitHub", icon: "🐙" },
  { name: "Docker", icon: "🐳" },
  { name: "VS Code", icon: "💻" },
  { name: "Jupyter", icon: "📓" },
];

const TechStack = () => {
  return (
    <section id="techstack" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.15 }}
              className="glass-strong p-4 rounded-2xl neon-border flex flex-col items-center gap-3 cursor-default group transition-all duration-300"
            >
              <span className="text-3xl group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
              <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
