import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-8 relative w-full">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-display">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          <motion.div
            className="glass-strong p-6 rounded-2xl neon-border-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl glow shrink-0"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1 font-heading">Bachelor of Technology in Computer Science and Engineering</h3>
                <p className="text-neon-cyan font-semibold text-sm mb-1">Graphic Era Hill University, Bhimtal</p>
                <p className="text-muted-foreground mb-3 text-xs">September 2022 – June 2026</p>

                <div className="bg-muted/20 p-4 rounded-xl border border-primary/10">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-secondary" />
                    <h4 className="font-bold text-sm font-heading">Core Coursework</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Object-Oriented Programming",
                      "Database Management Systems",
                      "Operating Systems",
                      "Computer Networks"
                    ].map((course, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1.5 bg-background/50 border border-primary/20 rounded-full text-xs font-medium hover:border-primary hover:bg-primary/10 transition-all cursor-default"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-strong p-6 rounded-2xl neon-border-pink"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-accent" />
              <h3 className="text-lg font-bold font-heading">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                "Comprehensive Machine Learning with Python - Udemy",
                "AWS Cloud Practitioner Essentials - AWS Skill Builder",
                "End-to-End Programming with C, C++ - Udemy"
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 3 }}
                  className="p-3 bg-background/30 border border-accent/20 rounded-xl hover:border-accent/50 hover:bg-accent/5 transition-all cursor-default"
                >
                  <p className="text-xs">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
