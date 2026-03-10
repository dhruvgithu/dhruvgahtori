import { motion } from "framer-motion";
import { Briefcase, Brain, Globe, Eye } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Brain,
      title: "Machine Learning Model Development",
      description: "Designed and trained ML models for classification, regression, and prediction tasks using Scikit-learn, TensorFlow, and Keras.",
    },
    {
      icon: Globe,
      title: "Disease Prediction Web Application",
      description: "Built a Django-based web application that predicts multiple diseases with high accuracy and under 2-second response time.",
    },
    {
      icon: Eye,
      title: "Computer Vision Projects",
      description: "Developed real-time computer vision applications including Automatic Number Plate Recognition using OpenCV and OCR.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            My <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong p-8 rounded-2xl neon-border mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl">
                <Briefcase className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading">AI/ML Project Developer</h3>
                <p className="text-muted-foreground text-sm">Self Projects • Ongoing</p>
              </div>
            </div>

            <div className="space-y-6 ml-2 border-l-2 border-primary/20 pl-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary border-2 border-background" />
                  <div className="flex items-start gap-3">
                    <exp.icon className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div>
                      <h4 className="font-bold font-heading mb-1">{exp.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
