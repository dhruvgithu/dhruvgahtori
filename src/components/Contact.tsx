import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.target as HTMLFormElement;

    emailjs
      .sendForm("service_8ozfgvk", "template_zjgbdle", form, "pL6H6pHl0cJrwLVm1")
      .then(() => {
        toast.success("Thank you for your message! I'll get back to you soon.");
        form.reset();
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => setSending(false));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "dhruvgahtori00@gmail.com", link: "mailto:dhruvgahtori00@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 9639412318", link: "tel:+919639412318" },
    { icon: Linkedin, label: "LinkedIn", value: "dhruv-gahtori", link: "https://linkedin.com/in/dhruv-gahtori-8b7b56285" },
    { icon: Github, label: "GitHub", value: "dhruvgithu", link: "https://github.com/dhruvgithu" },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            className="glass-strong p-8 rounded-2xl neon-border"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-6 font-heading">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
                <Input
                  id="name"
                  name="from_name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/20 rounded-xl"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
                <Input
                  id="email"
                  name="from_email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/20 rounded-xl"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/20 resize-none rounded-xl"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-primary-foreground font-semibold py-6 rounded-full glow animate-gradient-shift"
              >
                {sending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-strong p-8 rounded-2xl neon-border-blue">
              <h3 className="text-2xl font-bold mb-6 font-heading">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-background/20 rounded-xl hover:bg-primary/5 transition-all border border-transparent hover:border-primary/20"
                  >
                    <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg shrink-0">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
