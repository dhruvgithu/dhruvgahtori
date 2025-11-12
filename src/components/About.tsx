import { Brain, Code, Heart, Sparkles } from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: Brain,
      title: "Computer Vision",
      description: "Exploring visual recognition and image processing",
    },
    {
      icon: Code,
      title: "Predictive Modeling",
      description: "Building models for forecasting and analysis",
    },
    {
      icon: Heart,
      title: "Medical AI",
      description: "Developing AI systems for healthcare solutions",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Combining creativity and technology for impact",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="glass p-8 rounded-2xl animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                From <span className="text-accent font-semibold">Champawat, Uttarakhand</span>, I'm currently pursuing my B.Tech in Computer Science and Engineering at Graphic Era Hill University, Bhimtal.
              </p>
              <p className="leading-relaxed">
                As a <span className="text-secondary font-semibold">keen learner</span> exploring the fascinating world of AI and ML, I believe in using creativity and technology together to make a positive impact on society.
              </p>
              <p className="leading-relaxed">
                My passion lies in developing <span className="text-primary font-semibold">intelligent systems</span> that can solve real-world challenges and improve people's lives through innovative solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {interests.map((interest, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <interest.icon className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-bold mb-2">{interest.title}</h4>
                <p className="text-sm text-muted-foreground">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
