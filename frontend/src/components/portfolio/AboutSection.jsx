import React from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Rocket, Heart, Zap } from "lucide-react";
import { Card } from "../ui/card";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Expertise",
    description: "Proficient in React & Django, building end-to-end solutions",
  },
  {
    icon: Rocket,
    title: "Project Experience",
    description: "Developed LMS and Freelancing platforms with real-world impact",
  },
  {
    icon: Heart,
    title: "Passionate Freelancer",
    description: "Love collaborating with clients to bring their visions to life",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Quick to adapt to new technologies and frameworks",
  },
];

export default function AboutSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            I'm a 4th year Computer Science student with a passion for creating elegant solutions 
            to complex problems. My journey in web development started with curiosity and has grown 
            into a deep commitment to crafting exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-gradient-to-br from-slate-50 to-white border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">My Mission</h3>
          <p className="text-lg text-white/90 leading-relaxed">
            To bridge the gap between innovative ideas and functional reality. I believe in writing 
            clean, maintainable code that not only works but delights users. Whether it's building 
            a Learning Management System to revolutionize education or creating a freelancing platform 
            to connect talented professionals with opportunities, I pour my heart into every project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}