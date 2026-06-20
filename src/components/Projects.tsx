import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Automated Number Plate Recognition",
      description: "A computer vision project that detects vehicle number plates and extracts text from them in real time. It also sends automatic notifications when a registered vehicle is recognized.",
      tech: ["Python", "OpenCV", "EasyOCR", "Twilio API"],
      github: "https://github.com/dhruvgithu/ANPR",
    },
    {
      title: "Expense Tracker",
      description: "A full-stack expense management application that helps users record daily expenses, organize transactions by category, and monitor spending through an interactive dashboard.",
      tech: ["Node.js", "Express", "React", "Vite"],
      github: "https://github.com/dhruvgithu/expense-tracker",
      demo: "https://expense-tracker-sable-five-33.vercel.app",
    },
    {
      title: "Multiple Disease Prediction System",
      description: "A web application that predicts diseases using machine learning models and user health data. The system provides quick predictions through a simple and user-friendly interface.",
      tech: ["Python", "Django", "TensorFlow", "Scikit-learn"],
      github: "https://github.com/dhruvgithu/multiple-disease-prediction-system",
    },
    {
      title: "RAG-Based Document Intelligence System",
      description: "Developed a RAG-based Document Intelligence System that allows users to upload PDFs. Used FAISS and OpenAI embeddings for accurate document retrieval and optimized processing of 50+ page documents with a chunking pipeline.",
      tech: ["Python", "LangChain", "FAISS", "OpenAI API", "Streamlit"],
      github: "https://github.com/dhruvgithu/RAG-Based-Document-Intelligence-System/tree/main/ai-document-qa-rag-main/ai-document-qa-rag-main",
    },
    {
      title: "Sales Forecasting Using Predictive Analytics",
      description: "A machine learning project that predicts future sales based on historical data. It helps businesses understand trends and make better planning decisions.",
      tech: ["Python", "Django", "Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/dhruvgithu/Predictive-analytics-for-sales-forecasting-/tree/main/Predictive-Analytics-for-Sales-main",
    },
  ];

  return (
    <section id="projects" className="relative w-full">
      <div className="w-full">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className="glass-strong p-8 rounded-[20px] group transition-all duration-300 cursor-default hover:shadow-md flex flex-col h-full"
            >
              <div className="h-1 w-full bg-primary rounded-full mb-4 group-hover:h-1.5 transition-all" />
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-all">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 bg-primary/5 border border-primary/15 rounded-full text-xs font-medium hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 flex-wrap mt-auto">
                <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all text-xs">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-3 h-3 mr-1.5" />
                    GitHub
                  </a>
                </Button>
                {project.demo && (
                  <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full transition-all text-xs">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-1.5" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
