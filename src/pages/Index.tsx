import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import GitHubStats from "@/components/GitHubStats";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingShapes from "@/components/FloatingShapes";

const SlideWrapper = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <div id={id} className="slide-section">
    {children}
  </div>
);

const Index = () => {
  return (
    <div className="snap-container relative">
      <FloatingShapes />
      <Navbar />
      <SlideWrapper id="home-slide">
        <Hero />
      </SlideWrapper>
      <SlideWrapper id="about-slide">
        <About />
      </SlideWrapper>
      <SlideWrapper id="education-slide">
        <Education />
      </SlideWrapper>
      <SlideWrapper id="techskills-slide">
        <div className="w-full">
          <TechStack />
          <Skills />
        </div>
      </SlideWrapper>
      <SlideWrapper id="projects-slide">
        <Projects />
      </SlideWrapper>
      <SlideWrapper id="experience-slide">
        <Experience />
      </SlideWrapper>
      <SlideWrapper id="achievements-slide">
        <Achievements />
      </SlideWrapper>
      <SlideWrapper id="github-slide">
        <div className="w-full">
          <GitHubStats />
          <CurrentlyLearning />
        </div>
      </SlideWrapper>
      <SlideWrapper id="contact-slide">
        <div className="w-full">
          <Contact />
          <Footer />
        </div>
      </SlideWrapper>
    </div>
  );
};

export default Index;
