"use client";
import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Title from "../shared/Title";
import Image from "next/image";
import Skills from "../techStack/Skills";
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const AboutMe = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="mt-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants}>
          <Title upperText="About" lowerText="Me" />
        </motion.div>

        <div className="grid grid-cols-10 mt-8 gap-6 sm:gap-4">
          <motion.div
            className="col-span-10 sm:col-span-4 relative w-full h-80 sm:h-72"
            variants={itemVariants}
          >
            <Image
              src={"/habibur-about-me.jpeg"}
              alt="profile"
              fill
              blurDataURL="blur"
              className="object-cover bg-top rounded-md"
            />
          </motion.div>

          <motion.div
            className="col-span-10 sm:col-span-6 space-y-2"
            variants={containerVariants}
          >
            <motion.h4 variants={itemVariants} className="text-3xl font-bold">
              Habibur Rahman Zihad
            </motion.h4>

            <motion.p
              variants={itemVariants}
              className="font-medium text-text-color"
            >
              I am a MERN Stack Developer driven by the goal of building scalable, high-performance web applications that solve real-world problems. I specialize in crafting pixel-perfect, responsive UIs and robust server architectures. I&apos;m constantly learning and exploring new technologies like Next.js and DevOps to deliver top-notch full-stack solutions.
            </motion.p>

            {/* Open Modal Button */}
            <motion.button
              variants={itemVariants}
              onClick={() => setOpen(true)}
              className="text-sm font-semibold text-primary hover:underline w-fit"
            >
              How I started as a web developer →
            </motion.button>
            <motion.div variants={itemVariants}>
              <Skills />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 min-h-screen z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="w-[90%] max-w-lg rounded-xl bg-background p-6 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">
                  How I Started My Web Development Journey
                </h3>
                <button
                  onClick={() => setOpen(false)}
                  className="text-lg font-bold text-text-color hover:opacity-70"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm leading-relaxed text-text-color">
                My journey into the world of web development was fueled by a deep passion for technology and its potential to solve real-world problems. I started by mastering the fundamentals of HTML, CSS, and JavaScript, and soon found myself captivated by the power of the MERN stack. Over time, I&apos;ve honed my skills in building robust APIs, crafting intuitive user interfaces, and exploring the vast possibilities of modern web frameworks like Next.js. My mission is to continuously innovate and build applications that make a positive impact.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutMe;
