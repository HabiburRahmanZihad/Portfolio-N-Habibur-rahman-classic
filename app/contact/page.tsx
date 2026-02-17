"use client";
import { motion, Variants } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, MapPin, Github, Linkedin, User, MessageSquare, Briefcase } from "lucide-react";
import { useState } from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

type FormData = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

const Page = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState<FormData>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not configured yet.");
      console.error("Missing EmailJS environment variables");
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your message...");

    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast.success("Message sent successfully! I'll get back to you soon.", {
        id: loadingToast,
      });

      setData({
        name: "",
        subject: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Oops! Something went wrong. Please try again later.", {
        id: loadingToast,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="size-5" />,
      href: "mailto:e241024@ugrad.iiuc.ac.bd",
      label: "e241024@ugrad.iiuc.ac.bd",
    },
    {
      name: "GitHub",
      icon: <Github className="size-5" />,
      href: "https://github.com/HabiburRahmanZihad",
      label: "github.com/HabiburRahmanZihad",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="size-5" />,
      href: "https://linkedin.com/in/habiburrahmanzihad",
      label: "linkedin.com/in/habibur-rahman-zihad",
    },
    {
      name: "Location",
      icon: <MapPin className="size-5" />,
      href: "#",
      label: "Chittagong, Bangladesh",
    },
  ];

  return (
    <motion.div
      className="pb-12"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <PageHeader
        title="Contact Me"
        description="Don’t hesitate to get in touch—whether it’s a new project idea or a
          collaboration invite. I’m eager to connect and typically respond
          within a day. Let’s create something amazing together!"
      />

      <div className="grid grid-cols-1 md:grid-cols-1 gap-12 mt-8">
        {/* Contact Form Section */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 mb-2">
            <MessageSquare className="size-5 text-primary" />
            <h4 className="font-bold text-xl">Send me a message</h4>
          </div>
          <p className="text-sm text-text-color mb-8 font-medium">
            Fill out the form below and I will get back to you as soon as
            possible.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold flex items-center gap-2">
                  <User className="size-4 text-muted-foreground" /> Name *
                </label>
                <Input
                  type="text"
                  value={data.name}
                  required
                  disabled={isSubmitting}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, name: e.target.value })}
                  placeholder="Your full name"
                  id="name"
                  className="bg-muted/30 border-muted-foreground/20 focus:border-primary transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold flex items-center gap-2">
                  <Briefcase className="size-4 text-muted-foreground" /> Subject *
                </label>
                <Input
                  type="text"
                  value={data.subject}
                  required
                  disabled={isSubmitting}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, subject: e.target.value })}
                  placeholder="Inquiry, Collaboration, etc."
                  id="subject"
                  className="bg-muted/30 border-muted-foreground/20 focus:border-primary transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-semibold flex items-center gap-2">
                <Mail className="size-4 text-muted-foreground" /> Email *
              </label>
              <Input
                type="email"
                value={data.email}
                required
                disabled={isSubmitting}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setData({ ...data, email: e.target.value })}
                placeholder="Where can I reach you?"
                id="email"
                className="bg-muted/30 border-muted-foreground/20 focus:border-primary transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-semibold flex items-center gap-2">
                <MessageSquare className="size-4 text-muted-foreground" /> Message *
              </label>
              <Textarea
                value={data.message}
                required
                disabled={isSubmitting}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setData({ ...data, message: e.target.value })}
                placeholder="What's on your mind?"
                className="resize-none w-full h-32 bg-muted/30 border-muted-foreground/20 focus:border-primary transition-all duration-300"
                id="message"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center mt-6 gap-2 py-3 rounded-md transition-all duration-300 ${isSubmitting
                ? "bg-muted cursor-not-allowed opacity-70"
                : "bg-black dark:bg-white dark:text-black text-white hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                } text-sm font-bold`}
            >
              {isSubmitting ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <Send size={18} className="opacity-50" />
                  </motion.div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} /> Send message
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Social Links Section */}
        <motion.div variants={itemVariants} className="mt-4 border-t border-muted-foreground/10 pt-12">
          <h4 className="font-bold text-xl mb-6">Or find me on</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-muted-foreground/10 bg-muted/20 hover:bg-muted/40 hover:border-primary/50 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{link.name}</p>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">{link.label}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Page;
