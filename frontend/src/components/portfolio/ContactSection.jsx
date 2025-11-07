import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Button } from "../ui/button.jsx";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "pushpitraj19jan@gmail.com",
    link: "mailto:pushpitraj19jan@gmail.com",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/pushpit-raj-19jan",
    link: "https://www.linkedin.com/in/pushpit-raj-19jan/",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/rajPushpit",
    link: "https://github.com/rajPushpit",
    color: "from-slate-700 to-slate-900",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    color: "from-green-500 to-emerald-500",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Simple Front-end Email Validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return toast.error("Please enter a valid email address.");
    }

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      message: formData.message,
    };

    try {
      setLoading(true);

      await emailjs.send(
        "service_5bsmzys",
        "template_mpppc4h",
        templateParams,
        "M2wcsoOayYxiQJRjO"
      );

      toast.success("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setSent(true);
      // ✅ Auto-hide success message
      setTimeout(() => setSent(false), 4000);

    } catch (error) {
      toast.error("❌ Failed to send message. Try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Update Inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Have a project in mind or want to discuss freelancing opportunities?
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* ✅ Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 border-none shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Pushpit Raj"
                    required
                    className="border-slate-200"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="pushpitraj19jan@gmail.com"
                    required
                    className="border-slate-200"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="border-slate-200 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0"
                  size="lg"
                >
                  {loading ? "Sending..." : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* ✅ Success Message */}
                {sent && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-600 text-sm mt-3"
                  >
                    ✅ Your message has been sent successfully!
                  </motion.p>
                )}

              </form>
            </Card>
          </motion.div>

          {/* ✅ Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-slate-300 mb-6">
                I'm always excited to collaborate on interesting projects.
                Whether you need a developer for your team or a freelancer for your idea — let's connect!
              </p>

              <div className="flex flex-wrap gap-3">
                <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm">
                  Open to Freelance
                </div>
                <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm">
                  Available for Hire
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    {method.link ? (
                      <a
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Card className="p-4 border-slate-200 hover:shadow-lg transition-all group cursor-pointer">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color}`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-sm text-slate-500">{method.label}</div>
                              <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                                {method.value}
                              </div>
                            </div>
                          </div>
                        </Card>
                      </a>
                    ) : (
                      <Card className="p-4 border-slate-200">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color}`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <div className="text-sm text-slate-500">{method.label}</div>
                            <div className="font-medium text-slate-900">{method.value}</div>
                          </div>
                        </div>
                      </Card>
                    )}
                  </motion.div>
                );
              })}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
