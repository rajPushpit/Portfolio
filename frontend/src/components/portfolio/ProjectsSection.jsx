import React from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const projects = [
  {
    title: "Learning Management System",
    description: "A comprehensive LMS platform enabling educators to create courses, manage students, and track progress. Features include video lessons, quizzes, assignments, and real-time progress tracking.",
    image: "https://res.cloudinary.com/dczbo1dk1/image/upload/v1764440582/10_zd1prc.png",
    tags: ["React", "Django", "PostgreSQL", "REST API", "WebSockets"],
    features: ["Course Management", "Video Streaming", "Progress Tracking", "Discussion Forums"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Freelancing Platform",
    description: "A full-featured marketplace connecting freelancers with clients. Includes project bidding, escrow payments, real-time messaging, and review systems to ensure quality transactions.",
    image: "https://res.cloudinary.com/dczbo1dk1/image/upload/v1764440253/pixel_mbjpqa.jpg",
    tags: ["React", "Django", "Redux", "Stripe API", "WebRTC"],
    features: ["Project Bidding", "Secure Payments", "Live Chat", "Rating System"],
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function ProjectsSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Here are some of the projects I've built that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-shadow">
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  </div>
                  
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className={`inline-block w-12 h-1 bg-gradient-to-r ${project.gradient} mb-4`} />
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Features</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 border-0`}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button variant="outline" className="border-slate-300">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}