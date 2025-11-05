import React from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Redux", level: 75 },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Backend",
    items: [
      { name: "Django", level: 85 },
      { name: "Python", level: 90 },
      { name: "REST APIs", level: 85 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 75 },
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 70 },
      { name: "Agile/Scrum", level: 75 },
    ],
    color: "from-purple-500 to-pink-500",
  },
];

export default function SkillsSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-lg"
            >
              <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${skillGroup.color} text-white font-semibold mb-6`}>
                {skillGroup.category}
              </div>

              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skillGroup.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: groupIndex * 0.1 + skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-slate-900 text-white rounded-2xl p-8 max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-slate-300">
              The tech world evolves rapidly, and so do I. Currently exploring Next.js, TypeScript, 
              and cloud-native architectures to stay ahead of the curve.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}