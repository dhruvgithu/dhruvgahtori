import { motion } from "framer-motion";
import { BookOpen, Briefcase, Brain, Eye, Globe, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
];

const Experience = () => {
  const experiences = [
    {
      icon: Brain,
      title: "Machine Learning Model Development",
      description: "Designed and trained ML models for classification, regression, and prediction tasks using Scikit-learn, TensorFlow, and Keras.",
    },
    {
      icon: Globe,
      title: "Disease Prediction Web Application",
      description: "Built a Django-based web application that predicts multiple diseases with high accuracy and under 2-second response time.",
    },
    {
      icon: Eye,
      title: "Computer Vision Projects",
      description: "Developed real-time computer vision applications including Automatic Number Plate Recognition using OpenCV and OCR.",
    },
  ];

  return (
    <section id="experience" className="relative w-full">
      <motion.div
        className="mb-7"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Professional Summary</h2>
      </motion.div>

      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="flex h-auto w-full justify-start gap-2 overflow-x-auto rounded-none border-b border-border bg-transparent p-0 text-muted-foreground">
          <TabsTrigger value="experience" className="h-12 rounded-none border-b-2 border-transparent bg-transparent px-4 text-sm font-medium data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none">Experience</TabsTrigger>
          <TabsTrigger value="education" className="h-12 rounded-none border-b-2 border-transparent bg-transparent px-4 text-sm font-medium data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-foreground data-[state=active]:shadow-none">Education</TabsTrigger>
        </TabsList>

        <TabsContent value="experience" className="mt-6 focus-visible:ring-0">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border border-border bg-background p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Graduate Engineer Trainee (GET)</h3>
                <p className="text-sm text-muted-foreground">HCLTech</p>
              </div>
            </div>
            <div className="space-y-5 border-l-2 border-primary/20 pl-5">
              {experiences.map((exp, index) => (
                <motion.div key={exp.title} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: index * 0.08 }} className="relative">
                  <span className="absolute -left-[26px] top-1 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                  <div className="flex items-start gap-3">
                    <exp.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{exp.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </TabsContent>

        <TabsContent value="education" className="mt-6 focus-visible:ring-0">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="rounded-lg border border-border bg-background p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold leading-snug text-foreground sm:text-lg">Bachelor of Technology in Computer Science and Engineering</h3>
                <p className="mt-1 text-sm font-semibold text-primary">Graphic Era Hill University</p>
                <p className="mt-1 text-sm text-muted-foreground">September 2022 – June 2026</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Passed all semesters with full credit score, maintaining consistent academic performance throughout the program.</p>
                <div className="mt-5 rounded-md bg-muted/50 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <h4 className="text-sm font-semibold text-foreground">Core Coursework</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course) => <span key={course} className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground">{course}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Experience;
