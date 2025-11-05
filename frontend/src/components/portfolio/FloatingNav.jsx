import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Code2, Mail } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function FloatingNav({ activeSection }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="fixed top-6 left-1/2 -translate-x-1/2 z-40"
        >
          <motion.div
            className="flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-full px-4 py-3 shadow-lg border border-slate-200/50"
            whileHover={{ scale: 1.02 }}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 rounded-full transition-colors group"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <div className="relative flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-600 group-hover:text-blue-500"} transition-colors`} />
                    <span className={`text-sm font-medium hidden md:block ${isActive ? "text-white" : "text-slate-600 group-hover:text-blue-500"} transition-colors`}>
                      {item.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}