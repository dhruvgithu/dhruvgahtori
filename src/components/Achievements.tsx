import { motion } from "framer-motion";
import { Trophy, Camera, Award, Rocket } from "lucide-react";

const achievements = [
  {
    icon: Rocket,
    title: "4+ AI/ML Projects Built",
    description: "Developed multiple end-to-end AI & Machine Learning projects solving real-world problems.",
    gradient: "from-primary to-secondary",
    border: "neon-border",
  },
  {
    icon: Camera,
    title: "Real-Time ANPR System",
    description: "Built a real-time Automatic Number Plate Recognition system using OpenCV and OCR technology.",
    gradient: "from-secondary to-neon-cyan",
    border: "neon-border-blue",
  },
  {
    icon: Award,
    title: "ML Certifications Completed",
    description: "Completed Machine Learning and AI certifications to strengthen theoretical and practical knowledge.",
    gradient: "from-accent to-primary",
    border: "neon-border-pink",
  },
  {
    icon: Trophy,
    title: "Disease Prediction Web App",
    description: "Created an ML-powered web application for early disease diagnosis with less than 2 second latency.",
    gradient: "from-primary via-accent to-secondary",
    border: "neon-border",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`glass-strong p-8 rounded-2xl ${item.border} transition-all duration-300 cursor-default`}
            >
              <motion.div
                className={`bg-gradient-to-br ${item.gradient} p-4 rounded-xl w-fit mb-5`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 font-heading">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
