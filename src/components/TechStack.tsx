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
    <div id="techstack" className="py-4 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-3 max-w-4xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ y: -6, scale: 1.1 }}
              className="glass-strong p-3 rounded-xl neon-border flex flex-col items-center gap-2 cursor-default group transition-all duration-300"
            >
              <span className="text-2xl group-hover:scale-125 transition-transform duration-300">{tech.icon}</span>
              <span className="text-[10px] font-semibold text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
