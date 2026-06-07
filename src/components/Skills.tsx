import { motion } from "framer-motion";
import { Code2, Brain, Wrench, Database } from "lucide-react";

interface SkillsProps {
  hideHeader?: boolean;
}

const Skills = ({ hideHeader = false }: SkillsProps) => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "C", "C++", "Java", "JavaScript"],
    },
    {
      title: "AI / ML",
      icon: Brain,
      skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "NLP", "FAISS", "LangChain"],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "GitHub", "Docker", "AWS", "Django", "Postman", "Jupyter Notebook", "Linux"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "SQLite"],
    },
  ];

  return (
    <div id="skills" className={hideHeader ? "pb-2 relative" : "relative"}>
      <div className="w-full max-w-6xl mx-auto">
        {!hideHeader && (
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
              Skills &amp; Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="glass-strong p-8 rounded-[20px] transition-all duration-300 hover:shadow-md flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-center mb-6 text-foreground">
                {category.title}
              </h3>
              <ul className="space-y-2.5 pl-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-3 text-foreground/85"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-[15px]">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
