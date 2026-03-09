import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Linkedin, Github, Phone } from "lucide-react";
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
    {
      icon: Mail,
      label: "Email",
      value: "dhruvgahtori00@gmail.com",
      link: "mailto:dhruvgahtori00@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9639412318",
      link: "tel:+919639412318",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "dhruv-gahtori",
      link: "https://linkedin.com/in/dhruv-gahtori-8b7b56285",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "dhruvgithu",
      link: "https://github.com/dhruvgithu",
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold py-6 rounded-full glow"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-background/30 rounded-xl hover:bg-background/50 transition-all hover:scale-105 hover:border-primary border border-transparent"
                  >
                    <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-lg">
                      <info.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
