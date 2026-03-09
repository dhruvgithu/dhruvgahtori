import { motion } from "framer-motion";
import { Code2, Database, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "Java", "JavaScript"],
      borderClass: "neon-border",
      iconGradient: "from-primary to-secondary",
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "Scikit-learn", "Keras", "Pandas", "NumPy", "OpenCV", "CNNs"],
      borderClass: "neon-border-blue",
      iconGradient: "from-secondary to-neon-cyan",
    },
    {
      icon: Database,
      title: "Data & Visualization",
      skills: ["Matplotlib", "Seaborn", "Data Augmentation", "Image Processing"],
      borderClass: "neon-border-pink",
      iconGradient: "from-accent to-primary",
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Docker"],
      borderClass: "neon-border",
      iconGradient: "from-primary to-accent",
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Leadership",
    "Public Speaking",
    "Time Management",
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

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
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

        <motion.div
          className="glass-strong p-8 rounded-2xl max-w-6xl mx-auto neon-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center font-heading">
            <span className="gradient-text">Soft Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full font-semibold hover:from-primary/20 hover:to-secondary/20 hover:border-primary/40 transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
