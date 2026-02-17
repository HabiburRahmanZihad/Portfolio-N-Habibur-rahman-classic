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

      {/* Decorative circuit animation */}
      <motion.div
        variants={itemVariants}
        className="absolute  top-81.25 right-0 opacity-40 dark:opacity-60 pointer-events-none"
      >
        <CircuitMini />
      </motion.div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-10">
          <motion.div
            variants={itemVariants}
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >

            <div className="relative p-1.5 bg-neutral-100 dark:bg-neutral-900 rounded-full overflow-hidden z-10 border-2 border-neutral-200 dark:border-neutral-800 shadow-xl">
              <Image
                width={160}
                height={160}
                className="object-cover w-32 h-32 sm:w-44 sm:h-44 rounded-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
                src="https://res.cloudinary.com/dvq3pcykn/image/upload/v1758785330/IMG-20241101-WA0192_vyojiv.jpg"
                alt="Habibur Rahman"
                priority
              />
            </div>
          </motion.div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-3"
            >
              <h1 className="font-black text-4xl sm:text-6xl tracking-tight text-neutral-900 dark:text-neutral-100">
                Habibur <span className="inline-block align-middle ml-1"><RiVerifiedBadgeFill size={32} className="text-blue-500" /></span>
              </h1>
            </motion.div>

            <div className="h-10 flex items-center justify-center sm:justify-start overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roles[index]}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                  className="text-blue-600 dark:text-blue-400 font-extrabold text-2xl sm:text-3xl tracking-tight"
                >
                  {roles[index]}
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-6 flex items-center gap-4 text-xs tracking-widest uppercase font-black text-neutral-400 dark:text-neutral-500"
            >
              <span className="flex items-center gap-2 bg-neutral-100 dark:bg-white/[0.03] px-4 py-1.5 rounded-full border border-neutral-200 dark:border-white/5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                Status: Active
              </span>
            </motion.div>
          </div>
        </div>

        <motion.p
          className="mt-10 text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light tracking-tight"
          variants={itemVariants}
        >
          Architecting <span className="text-black dark:text-white font-bold decoration-blue-500/30 decoration-4 underline-offset-4 underline">high-performance</span> digital ecosystems with <TechButton icon={React} name={react.name} href={react.doc} /> ,{" "}
          <TechButton
            icon={TypeScript}
            name={typeScript.name}
            href={typeScript.doc}
          />, <TechButton icon={Nextjs} name={next.name} href={next.doc} />, <TechButton icon={Expressjs} name={express.name} href={express.doc} /> & <TechButton icon={PostgreSQL} name={postgreSql.name} href={postgreSql.doc} />.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10">
          <SocialIcons />
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-5 sm:gap-6"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-shrink-0"
          >
            <Link
              href="https://drive.google.com/file/d/1sOZMoUF9WEzITXZadlfNlYvSajeJ7AkL/view?usp=sharing"
              target="_blank"
              className="inline-flex items-center gap-3 px-10 py-4 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 rounded-full font-black text-lg transition-all shadow-xl hover:shadow-2xl active:shadow-md"
            >
              <Newspaper size={24} className="shrink-0" />
              <span>Download CV</span>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-shrink-0"
          >
            <Link
              href={"/contact"}
              className="inline-flex items-center gap-3 px-10 py-4 border-2 border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 rounded-full font-black text-lg transition-all hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-black shadow-sm hover:shadow-lg"
            >
              <Send size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
              <span>Hire Me</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
