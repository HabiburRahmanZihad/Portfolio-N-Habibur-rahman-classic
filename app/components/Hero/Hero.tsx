"use client";
import React from "@/components/svgs/React";
import TypeScript from "@/components/svgs/TypeScript";
import Nextjs from "@/components/svgs/Next";
import { Newspaper, Send } from "lucide-react";
import Link from "next/link";
import PostgreSQL from "@/components/svgs/PostgreSql";
import { AnimatePresence, motion, Variants } from "framer-motion";
import TechButton from "../TechButton/TechButton";
import SocialIcons from "../socialIcons/SocialIcons";
import Expressjs from "@/components/svgs/Express";
import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import CircuitMini from "../CircuitBackground/CircuitBackground";
import { useEffect, useState } from "react";

interface TechStack {
  name: string;
  doc: string;
}

const react: TechStack = {
  name: "React.js",
  doc: "https://react.dev",
};
const next: TechStack = {
  name: "Next.js",
  doc: "https://nextjs.org/docs",
};
const typeScript: TechStack = {
  name: "TypeScript",
  doc: "https://www.typescriptlang.org/docs",
};
const express: TechStack = {
  name: "Express.js",
  doc: "https://nodejs.org/en",
};
const postgreSql: TechStack = {
  name: "PostgreSql",
  doc: "https://www.postgresql.org/docs",
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};
const roles = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "Creative Coder",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden"
    >
      {/* Background blobs for depth */}
      <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-64 h-64 bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative circuit animation */}
      <motion.div
        variants={itemVariants}
        className="absolute sm:top-56 top-[325px] right-0 opacity-40 dark:opacity-60 pointer-events-none"
      >
        <CircuitMini />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 sm:gap-6">
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            {/* Animated glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

            <Image
              width={160}
              height={160}
              className="relative object-cover w-28 h-28 sm:w-32 sm:h-32 bg-secondary/50 border-2 border-white/10 rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              src="https://res.cloudinary.com/dvq3pcykn/image/upload/v1758785330/IMG-20241101-WA0192_vyojiv.jpg"
              alt="Habibur Rahman"
              priority
            />
          </motion.div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <motion.h1
                className="font-bold flex items-center gap-2 text-2xl sm:text-4xl tracking-tight"
                variants={itemVariants}
              >
                Habibur <RiVerifiedBadgeFill size={24} className="text-blue-500" />
              </motion.h1>
            </div>

            <div className="flex items-center gap-2 mt-1 sm:mt-2">
              <motion.span
                variants={itemVariants}
                className="w-8 h-[2px] bg-blue-500/50 hidden sm:block"
              />
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="text-text-color font-medium text-lg sm:text-xl"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.p
          className="mt-6 text-lg text-text-color leading-9"
          variants={itemVariants}
        >
          I specialize in building fast, modern, and scalable web applications
          using <TechButton icon={React} name={react.name} href={react.doc} /> ,{" "}
          <TechButton
            icon={TypeScript}
            name={typeScript.name}
            href={typeScript.doc}
          />{" "}
          , <TechButton icon={Nextjs} name={next.name} href={next.doc} /> ,{" "}
          <TechButton icon={Expressjs} name={express.name} href={express.doc} />{" "}
          and{" "}
          <TechButton
            icon={PostgreSQL}
            name={postgreSql.name}
            href={postgreSql.doc}
          />
          . I'm passionate about transforming ideas into high-performance web applications with clean UI/UX.
        </motion.p>

        <motion.div variants={itemVariants}>
          <SocialIcons />
        </motion.div>
        <motion.div
          className="mt-6 flex items-center  gap-2 sm:gap-6"
          variants={itemVariants}
        >
          <Link href={"/resume"} className="btn-design">
            <Newspaper />
            Resume
          </Link>
          <Link
            href={"/contact"}
            className=" px-3 sm:px-7 flex items-center gap-2 py-2 rounded-md bg-black dark:bg-white dark:text-black text-white text-sm font-medium"
          >
            <Send size={18} /> Get in touch
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
