import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Automatic Number Plate Recognition",
      description: "Built using Python and OpenCV for real-time vehicle detection and license plate extraction with Haar Cascade Algorithm and OCR.",
      tech: ["Python", "OpenCV", "EasyOCR", "Twilio API"],
      gradient: "from-primary to-secondary",
      
    },
    {
      title: "Multiple Disease Prediction System",
      description: "Machine Learning-based web application using TensorFlow and Scikit-learn for early diagnosis of diseases with <2 sec latency.",
      tech: ["Python", "Django", "TensorFlow", "Scikit-learn"],
      gradient: "from-secondary to-accent",
      
    },
    {
      title: "Customer Churn Prediction System",
      description: "Developed a system to identify customers likely to stop using a service. Achieved around 85% accuracy through hyperparameter tuning.",
      tech: ["Python", "Django", "TensorFlow", "Scikit-learn"],
      gradient: "from-accent to-primary",
      
    },
    {
      title: "Sales Forecasting using Predictive Analytics",
      description: "Used regression models to predict future sales and improve business decision-making. Achieved around 80% prediction accuracy.",
      tech: ["Python", "Django", "Scikit-learn", "Pandas", "NumPy"],
      gradient: "from-primary via-accent to-secondary",
      image: salesForecast,
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Innovative AI/ML solutions solving real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 w-full bg-gradient-to-r ${project.gradient} rounded-full mb-6`} />
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-background/50 border border-primary/30 rounded-full text-xs font-medium hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-foreground hover:bg-primary/10"
                  onClick={() => window.open('https://github.com/dhruvgithu', '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View on GitHub
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
