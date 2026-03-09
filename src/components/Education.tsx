import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-strong p-8 md:p-12 rounded-2xl neon-border-blue"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-start gap-6">
              <motion.div
                className="bg-gradient-to-br from-primary to-secondary p-4 rounded-xl glow shrink-0"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 font-heading">Bachelor of Technology in Computer Science and Engineering</h3>
                <p className="text-neon-cyan font-semibold mb-2">Graphic Era Hill University, Bhimtal</p>
                <p className="text-muted-foreground mb-6 text-sm">September 2022 – June 2026</p>

                <div className="bg-muted/20 p-6 rounded-xl border border-primary/10">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-secondary" />
                    <h4 className="font-bold text-lg font-heading">Core Coursework</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
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
                        className="px-4 py-2 bg-background/50 border border-primary/20 rounded-full text-sm font-medium hover:border-primary hover:bg-primary/10 transition-all cursor-default"
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
            className="mt-8 glass-strong p-8 rounded-2xl neon-border-pink"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div whileHover={{ rotate: 15 }} transition={{ type: "spring" }}>
                <Award className="w-6 h-6 text-accent" />
              </motion.div>
              <h3 className="text-xl font-bold font-heading">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Comprehensive Machine Learning with Python - Udemy",
                "AWS Cloud Practitioner Essentials - AWS Skill Builder",
                "End-to-End Programming with C, C++ - Udemy"
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="p-4 bg-background/30 border border-accent/20 rounded-xl hover:border-accent/50 hover:bg-accent/5 transition-all cursor-default"
                >
                  <p className="text-sm">{cert}</p>
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
