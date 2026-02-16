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

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-8">
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            {/* Animated outer ring */}
            <div className="absolute -inset-1 blur-md bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

            <div className="relative p-1 bg-white dark:bg-black rounded-full overflow-hidden">
              <Image
                width={160}
                height={160}
                className="object-cover w-32 h-32 sm:w-40 sm:h-40 rounded-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                src="https://res.cloudinary.com/dvq3pcykn/image/upload/v1758785330/IMG-20241101-WA0192_vyojiv.jpg"
                alt="Habibur Rahman"
                priority
              />
            </div>
          </motion.div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-2"
            >
              <h1 className="font-bold text-3xl sm:text-5xl tracking-tighter">
                Habibur <span className="inline-block"><RiVerifiedBadgeFill size={28} className="text-blue-500" /></span>
              </h1>
            </motion.div>

            <div className="h-8 flex items-center justify-center sm:justify-start overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roles[index]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                  className="text-blue-600 dark:text-blue-400 font-bold text-xl sm:text-2xl"
                >
                  {roles[index]}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-4 flex items-center gap-4 text-sm text-neutral-500 font-medium"
            >
              <span className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-800/50 px-3 py-1 rounded-full border border-neutral-200 dark:border-white/5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for hire
              </span>
            </motion.div>
          </div>
        </div>

        <motion.p
          className="mt-8 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light"
          variants={itemVariants}
        >
          Specializing in <span className="text-black dark:text-white font-medium">high-performance</span> web experiences with <TechButton icon={React} name={react.name} href={react.doc} /> ,{" "}
          <TechButton
            icon={TypeScript}
            name={typeScript.name}
            href={typeScript.doc}
          />{" "}
          and <TechButton icon={Nextjs} name={next.name} href={next.doc} />. Crafting code that scales and interfaces that <span className="text-blue-600 dark:text-blue-400 font-medium">captivate</span>.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8">
          <SocialIcons />
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          variants={itemVariants}
        >
          <Link href={"/resume"} className="group relative px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-semibold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/10 active:shadow-none">
            <span className="relative z-10 flex items-center gap-2">
              <Newspaper size={20} /> Resume
            </span>
          </Link>
          <Link
            href={"/contact"}
            className="group px-8 py-3 border border-neutral-200 dark:border-white/10 rounded-xl font-semibold hover:bg-neutral-50 dark:hover:bg-white/5 transition-all hover:scale-105 active:scale-95"
          >
            <span className="flex items-center gap-2">
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Get in touch
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
