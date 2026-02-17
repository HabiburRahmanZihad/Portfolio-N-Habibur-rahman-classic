"use client";
import { allProjects } from "@/app/components/projects/Projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { RiArrowGoBackFill } from "react-icons/ri";
import { TbBrandGithub, TbWorld } from "react-icons/tb";
import { motion } from "framer-motion";

const Project = () => {
  const params = useParams();
  const { projectName } = params;
  const project = allProjects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === projectName
  );

  if (!project) return (
    <div className="flex flex-col items-center justify-center py-20">
      <p className="text-xl font-bold">Project not found</p>
      <Link href="/projects" className="mt-4 text-blue-500 hover:underline">Return to Projects</Link>
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12 pb-20"
    >
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <Link href={"/projects"} className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-full font-bold text-sm text-neutral-900 dark:text-neutral-100 transition-all hover:bg-neutral-200 dark:hover:bg-neutral-800 shadow-sm active:shadow-none translate-y-0 hover:-translate-y-0.5">
          <RiArrowGoBackFill size={18} />
          <span>Back to Projects</span>
        </Link>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full relative h-[300px] sm:h-[450px] border border-neutral-200 dark:border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
        <Image
          className="object-cover bg-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
          src={project.img}
          alt={project.name}
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">{project.name}</h1>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                {project.projectType}
              </span>
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                {project.teamProject ? "Group" : "Solo"}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href={project.liveLink} target="_blank" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-lg">
              <TbWorld size={24} />
            </a>
            <a href={project.clientLink} target="_blank" className="p-3 bg-neutral-900 text-white rounded-full hover:scale-110 transition-transform shadow-lg border border-white/10">
              <TbBrandGithub size={24} />
            </a>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
          <section className="space-y-4">
            <h2 className="text-xl font-black uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">About the Project</h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-light">
              {project.description}
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-xl font-black uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800/50 group/feature">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-blue-500/40 group-hover/feature:bg-blue-500 transition-colors shrink-0" />
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-8">
          <section className="p-6 rounded-3xl bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 shadow-xl space-y-6">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] opacity-60">Tech Architecture</h2>
            <div className="flex flex-wrap gap-2.5">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-xl bg-white/10 dark:bg-black/5 border border-white/10 dark:border-black/5 text-[10px] font-black uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          <section className="p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-4 shadow-sm">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">Project Info</h2>
            <div className="space-y-4">
              {project.status.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-800 pb-3 last:border-0">
                  <span className="text-sm font-medium text-neutral-500">{item.name}</span>
                  <span className="text-sm font-black text-neutral-900 dark:text-neutral-100">{item.duration}</span>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 space-y-4">
          <h3 className="text-amber-600 dark:text-amber-400 font-black uppercase tracking-widest text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Key Challenges
          </h3>
          <ul className="space-y-3">
            {project.keyChallenges.map((challenge, idx) => (
              <li key={idx} className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                {challenge}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants} className="p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 space-y-4">
          <h3 className="text-emerald-600 dark:text-emerald-400 font-black uppercase tracking-widest text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Key Learnings
          </h3>
          <ul className="space-y-3">
            {project.keyLearnings.map((learning, idx) => (
              <li key={idx} className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                {learning}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Project;
