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
      className="relative pl-4 border-l-2 border-blue-600/30 dark:border-blue-500/20"
    >
      <motion.p
        variants={itemVariants}
        className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest mb-1"
      >
        {upperText}
      </motion.p>

      <motion.h2
        variants={itemVariants}
        className="text-3xl sm:text-4xl font-black tracking-tight text-black dark:text-white"
      >
        {lowerText}
      </motion.h2>
    </motion.div>
  );
};

export default Title;
