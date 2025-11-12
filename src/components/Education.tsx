import { GraduationCap, BookOpen, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass p-8 md:p-12 rounded-2xl animate-fade-in-up">
            <div className="flex items-start gap-6">
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl glow">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Technology in Computer Science and Engineering</h3>
                <p className="text-accent font-semibold mb-4">Graphic Era Hill University, Bhimtal</p>
                <p className="text-muted-foreground mb-6">September 2022 – June 2026</p>
                
                <div className="bg-muted/30 p-6 rounded-xl">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-secondary" />
                    <h4 className="font-bold text-lg">Core Coursework</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "Data Structures & Algorithms",
                      "Object-Oriented Programming",
                      "Database Management Systems",
                      "Operating Systems",
                      "Computer Networks"
                    ].map((course, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-background/50 border border-primary/30 rounded-full text-sm font-medium hover:border-primary hover:bg-primary/10 transition-all"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 glass p-8 rounded-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Comprehensive Machine Learning with Python - Udemy",
                "AWS Cloud Practitioner Essentials - AWS Skill Builder",
                "End-to-End Programming with C, C++ - Udemy"
              ].map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-background/30 border border-accent/30 rounded-lg hover:border-accent hover:bg-accent/5 transition-all"
                >
                  <p className="text-sm">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
