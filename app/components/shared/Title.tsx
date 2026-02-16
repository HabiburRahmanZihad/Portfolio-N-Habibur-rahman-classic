"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface TitleProps {
  upperText: React.ReactNode;
  lowerText: React.ReactNode;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const Title: React.FC<TitleProps> = ({ upperText, lowerText }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative pl-6 border-l-4 border-blue-600 dark:border-blue-500"
    >
      <motion.p
        variants={itemVariants}
        className="text-blue-600 dark:text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-2 opacity-80"
      >
        {upperText}
      </motion.p>

      <motion.h2
        variants={itemVariants}
        className="text-4xl sm:text-5xl font-black tracking-tighter text-gradient-boss leading-none"
      >
        {lowerText}
      </motion.h2>
    </motion.div>
  );
};

export default Title;
