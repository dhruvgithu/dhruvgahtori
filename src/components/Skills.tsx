import { motion } from "framer-motion";
import { Code2, Brain, Wrench } from "lucide-react";
import SocialIcons from "./SocialIcons";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      skills: ["Python", "C", "C++", "Java", "JavaScript"],
    },
    {
      icon: Brain,
      title: "AI / ML",
      skills: ["TensorFlow", "Scikit-learn", "Keras", "Pandas", "NumPy", "OpenCV", "CNNs"],
    },
    {
      icon: Wrench,
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Docker", "Django"],
    },
  ];

  return (
    <div id="skills" className="py-6 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
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
              className="glass-strong p-5 rounded-2xl transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  className="bg-primary p-2 rounded-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <category.icon className="w-5 h-5 text-primary-foreground" />
                </motion.div>
                <h3 className="text-lg font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1.5 bg-muted border border-border rounded-full text-xs font-medium hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <SocialIcons />
      </div>
    </div>
  );
};

export default Skills;
