import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github, Send } from "lucide-react";
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
    { icon: Linkedin, label: "LinkedIn", value: "dhruv-gahtori", link: "https://linkedin.com/in/dhruv-gahtori-8b7b56285" },
    { icon: Github, label: "GitHub", value: "dhruvgithu", link: "https://github.com/dhruvgithu" },
  ];

  return (
    <section id="contact" className="py-6 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-display">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <motion.div
            className="glass-strong p-5 rounded-2xl neon-border"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold mb-4 font-heading">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <Input name="from_name" type="text" placeholder="Your Name" required className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/20 rounded-xl text-sm" />
              </div>
              <div>
                <Input name="from_email" type="email" placeholder="your.email@example.com" required className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/20 rounded-xl text-sm" />
              </div>
              <div>
                <Textarea name="message" placeholder="Your message..." rows={3} required className="bg-background/50 border-primary/20 focus:border-primary focus:ring-primary/20 resize-none rounded-xl text-sm" />
              </div>
              <Button type="submit" disabled={sending} className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-primary-foreground font-semibold py-5 rounded-full glow animate-gradient-shift text-sm">
                {sending ? "Sending..." : (<><Send className="w-4 h-4 mr-2" />Send Message</>)}
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-strong p-5 rounded-2xl neon-border-blue">
              <h3 className="text-lg font-bold mb-4 font-heading">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-3 p-3 bg-background/20 rounded-xl hover:bg-primary/5 transition-all border border-transparent hover:border-primary/20"
                  >
                    <div className="bg-gradient-to-br from-primary to-secondary p-2.5 rounded-lg shrink-0">
                      <info.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{info.label}</p>
                      <p className="font-semibold text-sm">{info.value}</p>
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
