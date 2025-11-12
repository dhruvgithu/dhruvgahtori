import { Code2, Database, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "C", "C++", "Java", "JavaScript"],
      color: "primary",
    },
    {
      icon: Brain,
      title: "Machine Learning & AI",
      skills: ["TensorFlow", "Scikit-learn", "Keras", "Pandas", "NumPy", "OpenCV", "CNNs"],
      color: "secondary",
    },
    {
      icon: Database,
      title: "Data & Visualization",
      skills: ["Matplotlib", "Seaborn", "Data Augmentation", "Image Processing"],
      color: "accent",
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Docker"],
      color: "primary",
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
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl animate-fade-in-up hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`bg-gradient-to-br from-${category.color} to-${category.color}/50 p-3 rounded-xl`}>
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 bg-background/50 border border-${category.color}/30 rounded-full text-sm font-medium hover:border-${category.color} hover:bg-${category.color}/10 transition-all hover:scale-110`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass p-8 rounded-2xl max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold mb-6 text-center">
            <span className="gradient-text">Soft Skills</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-full font-semibold hover:from-primary/30 hover:to-secondary/30 hover:scale-110 transition-all"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
