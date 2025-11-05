import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Code2, ExternalLink, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button.jsx";
import HeroSection from "../components/portfolio/HeroSection";
import AboutSection from "../components/portfolio/AboutSection";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import SkillsSection from "../components/portfolio/SkillsSection";
import ContactSection from "../components/portfolio/ContactSection";
import FloatingNav from "../components/portfolio/FloatingNav";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-[#FAFAF9]">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      <FloatingNav activeSection={activeSection} />

      <div className="relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">© 2025 Pushpit Raj. Built with React & Framer Motion</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="https://github.com/rajPushpit" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/pushpit-raj-19jan/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:pushpitraj19jan@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}