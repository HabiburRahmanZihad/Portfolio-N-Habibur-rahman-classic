"use client";
import Facebook from "@/components/svgs/Facebook";
import GitHub from "@/components/svgs/Github";
import LinkedIn from "@/components/svgs/Linkedin";
import XformerlyTwitter from "@/components/svgs/Twitter";
import WhatsApp from "@/components/svgs/WhatsApp";
import { motion } from "framer-motion";
import { useState } from "react";

const SocialIcons = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const socialLinks = [
    {
      id: 1,
      name: "LinkedIn",
      url: "https://linkedin.com/in/habiburrahmanzihad",
      icon: <LinkedIn className="size-5" />,
    },
    {
      id: 2,
      name: "Twitter",
      url: "https://x.com/xihad_xihad",
      icon: <XformerlyTwitter className="size-5 " />,
    },
    {
      id: 3,
      name: "GitHub",
      url: "https://github.com/HabiburRahmanZihad",
      icon: <GitHub className="size-5 " />,
    },
    {
      id: 6,
      name: "WhatsApp",
      url: "https://wa.me/88013294535**",
      icon: <WhatsApp className="size-5" />,
    },
    {
      id: 4,
      name: "Facebook",
      url: "https://www.facebook.com/habiburrahmanzihad.zihad",
      icon: <Facebook className="size-5" />,
    }
  ];

  return (
    <div className="flex items-center -space-x-1.5 mt-6">
      {socialLinks.map((skill, index) => {
        const isHovered = hovered === index;
        return (
          <a href={skill.url} target="_blank" key={index}>
            <motion.div
              layout
              className="border border-neutral-300 dark:border-neutral-800 p-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 flex cursor-pointer overflow-hidden shadow-sm"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              animate={{ opacity: isHovered ? 1 : 0.85 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <span className={isHovered ? "mr-2" : undefined}>
                {skill.icon}
              </span>

              <motion.span
                initial={{ opacity: 0, width: 0 }}
                className="text-sm font-medium whitespace-nowrap"
                animate={{
                  width: isHovered ? "auto" : 0,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {skill.name}
              </motion.span>
            </motion.div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
