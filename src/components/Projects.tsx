import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Automatic Number Plate Recognition",
      description: "Built using Python and OpenCV for real-time vehicle detection and license plate extraction with Haar Cascade Algorithm and OCR.",
      tech: ["Python", "OpenCV", "EasyOCR", "Twilio API"],
      gradient: "from-primary to-secondary",
      borderClass: "neon-border",
    },
    {
      title: "Multiple Disease Prediction System",
      description: "Machine Learning-based web application using TensorFlow and Scikit-learn for early diagnosis of diseases with <2 sec latency.",
      tech: ["Python", "Django", "TensorFlow", "Scikit-learn"],
      gradient: "from-secondary to-neon-cyan",
      borderClass: "neon-border-blue",
    },
    {
      title: "Customer Churn Prediction System",
      description: "Developed a system to identify customers likely to stop using a service. Achieved around 85% accuracy through hyperparameter tuning.",
      tech: ["Python", "Django", "TensorFlow", "Scikit-learn"],
      gradient: "from-accent to-primary",
      borderClass: "neon-border-pink",
    },
    {
      title: "Sales Forecasting using Predictive Analytics",
      description: "Used regression models to predict future sales and improve business decision-making. Achieved around 80% prediction accuracy.",
      tech: ["Python", "Django", "Scikit-learn", "Pandas", "NumPy"],
      gradient: "from-primary via-accent to-secondary",
      borderClass: "neon-border",
    },
  ];

  return (
    <section id="projects" className="py-6 relative w-full">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto text-sm">
            Innovative AI/ML solutions solving real-world problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`glass-strong p-5 rounded-2xl ${project.borderClass} group transition-all duration-300 cursor-default`}
            >
              <div className={`h-1 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-4 group-hover:h-1.5 transition-all`} />
              <h3 className="text-lg font-bold mb-2 font-heading group-hover:gradient-text transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 bg-primary/5 border border-primary/20 rounded-full text-xs font-medium hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary rounded-full transition-all text-xs"
                onClick={() => window.open('https://github.com/dhruvgithu', '_blank')}
              >
                <Github className="w-3 h-3 mr-1.5" />
                View on GitHub
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
