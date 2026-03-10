import { motion } from "framer-motion";
import { BookOpen, Eye, Settings, Cloud } from "lucide-react";

const learningItems = [
  { icon: BookOpen, title: "Deep Learning", description: "Neural networks, CNNs, RNNs, and advanced architectures", gradient: "from-primary to-secondary" },
  { icon: Eye, title: "Computer Vision", description: "Image recognition, object detection, and real-time processing", gradient: "from-secondary to-neon-cyan" },
  { icon: Settings, title: "MLOps", description: "Model deployment, monitoring, and CI/CD for ML pipelines", gradient: "from-accent to-primary" },
  { icon: Cloud, title: "Cloud Deployment", description: "Deploying ML models on AWS, GCP, and Azure platforms", gradient: "from-primary via-accent to-secondary" },
];

const CurrentlyLearning = () => {
  return (
    <section id="learning" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Currently <span className="gradient-text">Learning</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {learningItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="glass-strong p-6 rounded-2xl neon-border text-center group cursor-default transition-all duration-300"
            >
              <motion.div
                className={`bg-gradient-to-br ${item.gradient} p-4 rounded-xl w-fit mx-auto mb-4`}
                whileHover={{ rotate: 15, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <h3 className="text-lg font-bold font-heading mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearning;
