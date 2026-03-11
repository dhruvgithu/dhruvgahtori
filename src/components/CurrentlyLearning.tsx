import { motion } from "framer-motion";
import { BookOpen, Eye, Settings, Cloud } from "lucide-react";

const learningItems = [
  { icon: BookOpen, title: "Deep Learning", description: "Neural networks, CNNs, RNNs", gradient: "from-primary to-secondary" },
  { icon: Eye, title: "Computer Vision", description: "Image recognition, object detection", gradient: "from-secondary to-neon-cyan" },
  { icon: Settings, title: "MLOps", description: "Model deployment, CI/CD for ML", gradient: "from-accent to-primary" },
  { icon: Cloud, title: "Cloud Deployment", description: "AWS, GCP, and Azure platforms", gradient: "from-primary via-accent to-secondary" },
];

const CurrentlyLearning = () => {
  return (
    <div id="learning" className="py-4 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
            Currently <span className="gradient-text">Learning</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {learningItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="glass-strong p-4 rounded-2xl neon-border text-center group cursor-default transition-all duration-300"
            >
              <motion.div
                className={`bg-gradient-to-br ${item.gradient} p-3 rounded-xl w-fit mx-auto mb-2`}
                whileHover={{ rotate: 15, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <h3 className="text-sm font-bold font-heading mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-xs">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentlyLearning;
