import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">

          {/* Freelance Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-white/90">Available for Freelance Work</span>
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Hi, I'm
            <span
              className="
                block 
                bg-gradient-to-r 
                from-blue-400 
                via-purple-400 
                to-pink-400 
                bg-clip-text 
                text-transparent 
                inline-block 
                [background-clip:text]
              "
            >
              Pushpit RaJ
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-4xl text-slate-300 font-light mb-4">
              Full-Stack Developer & Creative Problem Solver
            </h2>

            <p className="text-lg text-slate-400 max-w-2xl mx-auto md:mx-0">
              4th Year Computer Science Student specializing in React & Django.
              Building beautiful, scalable web applications that make a difference.
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white group"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToAbout}
              className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20"
            >
              View My Work
            </Button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/praj.jpg"
            alt="Pushpit Raj"
            className="w-64 md:w-80 lg:w-96 rounded-3xl shadow-lg shadow-purple-500/30 border border-white/10 object-cover"
          />
        </motion.div>
      </div>

      {/* Scroll Down Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 hover:text-white transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}
