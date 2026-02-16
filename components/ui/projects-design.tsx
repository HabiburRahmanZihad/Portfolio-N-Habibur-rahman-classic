"use client";
import {
  ChevronsDownUpIcon,
  ChevronsUpDownIcon,
  CodeXmlIcon,
} from "lucide-react";
import React from "react";
import ReactMarkdown from "react-markdown";
import { GoArrowRight } from "react-icons/go";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { Project } from "@/app/components/projects/Projects";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { motion } from "framer-motion";
import { BiWorld } from "react-icons/bi";
const iconMap = {
  project: CodeXmlIcon,
} as const;

export function WorkExperience({
  className,
  experiences,
}: {
  className?: string;
  experiences: Project[];
}) {
  return (
    <div className={cn("bg-background mt-6", className)}>
      {experiences.map((project, index) => (
        <ExperienceItem key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}

export function ExperienceItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      className="space-y-4 py-4"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.2, ease: "easeOut", delay: index * 0.05 }}
    >
      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        <ExperiencePositionItem project={project} />
      </div>
    </motion.div>
  );
}

export function ExperiencePositionItem({ project }: { project: Project }) {
  const ExperienceIcon = iconMap["project"];

  return (
    <Collapsible defaultOpen={false} asChild>
      <div className="relative group/card transition-all duration-500 mb-4">
        <CollapsibleTrigger
          className={cn(
            "group/experience not-prose block w-full text-left select-none relative z-10 holo-card",
            "p-5 rounded-3xl border border-neutral-200/50 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-md hover:border-blue-500/30 dark:hover:border-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 hover:-translate-y-1"
          )}
        >
          <div className="flex items-center gap-6">
            {/* Icon with Dynamic Glow */}
            <div className="relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 text-blue-600 dark:text-blue-400 transition-all group-hover/experience:rotate-12 group-hover/experience:scale-110 duration-500 shadow-sm border border-blue-100/50 dark:border-blue-800/20">
              <ExperienceIcon className="size-7" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-xl font-black tracking-tight text-gradient-boss truncate">
                  {project.name}
                </h4>

                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href={`project/${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-1.5 text-xs font-black text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-[0.2em]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Details
                    <GoArrowRight size={14} />
                  </Link>

                  <div className="h-4 w-[1px] bg-neutral-200 dark:bg-neutral-800" />

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="rounded-full p-2 text-neutral-500 transition-all hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-110"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <BiWorld size={20} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="text-[10px] font-black uppercase tracking-widest">Live Experience</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* Meta Tags */}
              <div className="flex items-center gap-4 mt-2 text-xs font-black uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                <span className="text-blue-600 dark:text-blue-400">
                  {project.projectType}
                </span>
                <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <span>{project.teamProject ? "Collaborative" : "Individual"}</span>
              </div>
            </div>

            {/* Expand Indicator */}
            <div className="text-neutral-300 group-hover/experience:text-blue-500 transition-all duration-500 transform group-hover/experience:translate-x-1">
              <ChevronsDownUpIcon className="size-6 hidden group-data-[state=open]/experience:block animate-pulse" />
              <ChevronsUpDownIcon className="size-6 block group-data-[state=open]/experience:none" />
            </div>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-500 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down mt-2">
          <div className="pl-[88px] pr-5 pb-6 space-y-8 relative before:absolute before:left-12 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-blue-500/20 before:to-transparent">
            <Prose>
              <div className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed font-light">
                <ReactMarkdown>
                  {project.description}
                </ReactMarkdown>
              </div>
            </Prose>

            <div className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-blue-500/30" />
                Core Technologies
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {project.techStack.map((skill, index) => (
                  <li key={index}>
                    <Skill className="px-3 py-1 bg-white dark:bg-white/[0.03] border-blue-500/10 dark:border-white/5 text-blue-600 dark:text-blue-400 shadow-sm font-black text-[10px] uppercase tracking-wider">
                      {skill}
                    </Skill>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50/50 dark:bg-white/[0.01] border border-neutral-100 dark:border-white/5 space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500">
                Key Deliverables
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400 group/feature">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/40 group-hover/feature:bg-blue-500 transition-colors shrink-0 shadow-[0_0_8px_rgba(59,130,246,0)] group-hover/feature:shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
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
