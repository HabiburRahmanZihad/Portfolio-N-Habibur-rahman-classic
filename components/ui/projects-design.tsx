"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { cn } from "@/lib/utils";
import { Project } from "@/app/components/projects/Projects";
import { motion } from "framer-motion";
import { BiWorld } from "react-icons/bi";
import { TbBrandGithub } from "react-icons/tb";

export function WorkExperience({
  className,
  experiences,
}: {
  className?: string;
  experiences: Project[];
}) {
  return (
    <div className={cn("space-y-8 mt-10", className)}>
      {experiences.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col lg:flex-row gap-8 p-6 rounded-[32px] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-500 hover:shadow-2xl"
    >
      {/* Project Image Container */}
      <div className="w-full lg:w-[45%] aspect-[16/10] relative rounded-2xl overflow-hidden border border-neutral-100 dark:border-neutral-800 shadow-sm transition-transform duration-500 group-hover:scale-[1.02]">
        <Image
          src={project.img}
          alt={project.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Details Container */}
      <div className="flex-1 space-y-5 flex flex-col justify-center">
        <div className="space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-2xl font-black tracking-tight text-neutral-900 dark:text-neutral-100">
              {project.name}
              <span className="ml-3 text-sm font-medium text-neutral-400 dark:text-neutral-500 lowercase">
                {project.status.find(s => s.name === "Duration")?.duration || ""}
              </span>
            </h3>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed line-clamp-3 font-medium">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 6).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-[10px] font-black uppercase tracking-wider rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 6 && (
            <span className="px-2 py-1 text-[10px] font-black text-neutral-400">+{project.techStack.length - 6} more</span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={project.clientLink}
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black rounded-full font-bold text-xs transition-all hover:scale-105 active:scale-95 shadow-md"
          >
            <TbBrandGithub size={16} />
            GitHub
          </a>
          <a
            href={project.liveLink}
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 rounded-full font-bold text-xs transition-all hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-black shadow-sm"
          >
            <BiWorld size={16} />
            Live Preview
          </a>
          <Link
            href={`/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-neutral-900 dark:border-neutral-100 text-neutral-900 dark:text-neutral-100 rounded-full font-bold text-xs transition-all hover:bg-neutral-900 hover:text-white dark:hover:bg-neutral-100 dark:hover:text-black shadow-sm"
          >
            Details
            <GoArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function Prose({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose prose-sm max-w-none mt-2 font-medium text-foreground dark:prose-invert",
        className
      )}
      {...props}
    />
  );
}

function Skill({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
