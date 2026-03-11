import { motion } from "framer-motion";
import { Brain, Code, Heart, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  const interests = [
    { icon: Brain, title: "Computer Vision", description: "Exploring visual recognition and image processing", color: "primary" },
    { icon: Code, title: "Predictive Modeling", description: "Building models for forecasting and analysis", color: "secondary" },
    { icon: Heart, title: "Medical AI", description: "Developing AI systems for healthcare solutions", color: "accent" },
    { icon: Sparkles, title: "Innovation", description: "Combining creativity and technology for impact", color: "primary" },
  ];

  const borderColors: Record<string, string> = {
    primary: "hover:border-primary/50 hover:shadow-[0_0_30px_hsl(265,90%,65%/0.15)]",
    secondary: "hover:border-secondary/50 hover:shadow-[0_0_30px_hsl(200,100%,55%/0.15)]",
    accent: "hover:border-accent/50 hover:shadow-[0_0_30px_hsl(330,85%,60%/0.15)]",
  };

  return (
    <section id="about" className="py-8 relative overflow-hidden w-full">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-center max-w-6xl mx-auto">
          <motion.div
            className="glass-strong p-6 rounded-2xl neon-border"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4 font-heading gradient-text">My Journey</h3>
            <div className="space-y-3 text-muted-foreground text-sm">
              <p className="leading-relaxed">
                From <span className="text-neon-cyan font-semibold">Champawat, Uttarakhand</span>, I'm currently pursuing my B.Tech in Computer Science and Engineering at Graphic Era Hill University, Bhimtal.
              </p>
              <p className="leading-relaxed">
                As a <span className="text-secondary font-semibold">keen learner</span> exploring the fascinating world of AI and ML, I believe in using creativity and technology together to make a positive impact on society.
              </p>
              <p className="leading-relaxed">
                My passion lies in developing <span className="text-primary font-semibold">intelligent systems</span> that can solve real-world challenges and improve people's lives through innovative solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -3 }}
                className={`glass p-4 rounded-xl transition-all duration-300 cursor-default border border-transparent ${borderColors[interest.color]}`}
              >
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-2 rounded-lg w-fit mb-2">
                  <interest.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold mb-1 font-heading text-sm">{interest.title}</h4>
                <p className="text-xs text-muted-foreground">{interest.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
