import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, ExternalLink } from "lucide-react";
import SocialIcons from "./SocialIcons";

const certifications = [
  {
    title: "Comprehensive Machine Learning with Python",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/UC-bff20b90-3a16-4cc0-865e-5d8e0310cf51/",
  },
  {
    title: "End-to-End Programming with C, C++",
    provider: "Udemy",
    link: "https://www.udemy.com/certificate/UC-c0049745-1f60-4e8f-8679-5ccebdd7c0e2/",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    provider: "AWS Skill Builder",
    link: "https://github.com/dhruvgithu/AWS-Cloud-Practitioner/blob/main/Dhruv%20Gahtori%20AWS%20Course%20Completion%20Certificate1.pdf",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-8 relative w-full section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          <motion.div
            className="glass-strong p-6 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start gap-4">
              <motion.div
                className="bg-primary p-3 rounded-xl shrink-0"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-1">Bachelor of Technology in Computer Science and Engineering</h3>
                <p className="text-primary font-semibold text-sm mb-1"><p className="text-primary font-semibold text-sm mb-1">Graphic Era Hill University</p></p>
                <p className="text-muted-foreground mb-3 text-xs">September 2022 – June 2026</p>

                <div className="bg-muted/50 p-4 rounded-xl border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <h4 className="font-bold text-sm">Core Coursework</h4>
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
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-background border border-border rounded-full text-xs font-medium hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
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
            className="glass-strong p-6 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-bold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-3">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, x: 3 }}
                    className="p-3 bg-background border border-border rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer h-full"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-medium text-foreground">{cert.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{cert.provider}</p>
                      </div>
                      <ExternalLink className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                    </div>
                  </motion.div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <SocialIcons />
      </div>
    </section>
  );
};

export default Education;
