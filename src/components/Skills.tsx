import { motion } from "framer-motion";
import { Code2, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      skills: ["Python", "C", "C++", "Java", "JavaScript"],
      borderClass: "neon-border",
      iconGradient: "from-primary to-secondary",
    },
    {
      icon: Brain,
      title: "AI / ML",
      skills: ["TensorFlow", "Scikit-learn", "Keras", "Pandas", "NumPy", "OpenCV", "CNNs"],
      borderClass: "neon-border-blue",
      iconGradient: "from-secondary to-neon-cyan",
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Docker", "Django"],
      borderClass: "neon-border-pink",
      iconGradient: "from-accent to-primary",
    },
  ];

  return (
    <div id="skills" className="py-4 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className={`glass-strong p-5 rounded-2xl ${category.borderClass} transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className={`bg-gradient-to-br ${category.iconGradient} p-2 rounded-lg`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <category.icon className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <h3 className="text-lg font-bold font-heading">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 bg-background/50 border border-primary/15 rounded-full text-xs font-medium hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
