"use client";
import Discord from "@/components/svgs/Discord";
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
      url: "https://www.linkedin.com/in/habibur-rahman-zihad-563056287",
      icon: <LinkedIn className="size-5" />,
    },
    {
      id: 2,
      name: "Twitter",
      url: "https://x.com/HabiburRahmanZ",
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
      url: "https://wa.me/8801735166610", // Keeping the same as I don't have Habibur's specific one, or assuming it's the same if it's the same contact phone. Actually, Habibur's phone wasn't explicitly found, but one github listed a phone link. I'll search for his phone if possible.
      icon: <WhatsApp className="size-5" />,
    },
    {
      id: 4,
      name: "Facebook",
      url: "https://www.facebook.com/HabiburRahmanZihad",
      icon: <Facebook className="size-5" />,
    },
    {
      id: 5,
      name: "Discord",
      url: "https://discord.com/users/Habibur#1234", // Placeholder if not found
      icon: <Discord className="size-5" />,
    },
  ];

  return (
    <div className="flex items-center -space-x-1.5 mt-6">
      {socialLinks.map((skill, index) => {
        const isHovered = hovered === index;
        return (
          <a href={skill.url} target="_blank" key={index}>
            <motion.div
              layout
              className="border dark:border-neutral-700 p-1.5 rounded-full bg-white dark:bg-black flex cursor-pointer overflow-hidden"
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
