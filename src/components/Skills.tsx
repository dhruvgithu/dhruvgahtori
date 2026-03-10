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
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-strong p-8 rounded-2xl ${category.borderClass} transition-all duration-300`}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className={`bg-gradient-to-br ${category.iconGradient} p-3 rounded-xl`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold font-heading">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-background/50 border border-primary/15 rounded-full text-sm font-medium hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
