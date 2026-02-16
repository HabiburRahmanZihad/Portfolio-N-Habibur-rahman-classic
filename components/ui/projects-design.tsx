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
      <div className="relative group/card transition-all duration-300">
        <CollapsibleTrigger
          className={cn(
            "group/experience not-prose block w-full text-left select-none relative z-10",
            "p-3 rounded-2xl border border-transparent hover:border-white/10 hover:bg-neutral-50/50 dark:hover:bg-white/[0.03] transition-all duration-500"
          )}
        >
          <div className="flex items-center gap-4">
            {/* Icon with Glow */}
            <div className="relative flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 transition-transform group-hover/experience:scale-110 duration-300 shadow-sm border border-blue-100/50 dark:border-blue-800/20">
              <ExperienceIcon className="size-5" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h4 className="text-lg font-bold tracking-tight text-foreground truncate">
                  {project.name}
                </h4>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    href={`project/${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-1 text-xs font-semibold text-neutral-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors uppercase tracking-wider"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View details
                    <GoArrowRight size={14} />
                  </Link>

                  <div className="h-3 w-[1px] bg-neutral-200 dark:bg-neutral-800" />

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        className="rounded-full p-1 text-neutral-500 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <BiWorld size={18} />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="text-xs font-bold">Live Preview</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* Meta Tags */}
              <div className="flex items-center gap-3 mt-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                <span className="px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-white/5 uppercase tracking-tight">
                  {project.projectType}
                </span>
                <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                <span>{project.teamProject ? "Team Project" : "Solo Project"}</span>
              </div>
            </div>

            {/* Expand Indicator */}
            <div className="text-neutral-400 group-hover/experience:text-blue-500 transition-colors">
              <ChevronsDownUpIcon className="size-5 hidden group-data-[state=open]/experience:block" />
              <ChevronsUpDownIcon className="size-5 block group-data-[state=open]/experience:none" />
            </div>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down pt-2">
          <div className="pl-14 pr-4 pb-4 space-y-6">
            <Prose>
              <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                <ReactMarkdown>
                  {project.description}
                </ReactMarkdown>
              </div>
            </Prose>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-3 flex items-center gap-2">
                <div className="w-1.5 h-4 bg-blue-600 dark:bg-blue-500 rounded-full" />
                Technical Stack
              </h3>
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((skill, index) => (
                  <li key={index}>
                    <Skill>{skill}</Skill>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-white/[0.02] border border-neutral-100 dark:border-white/5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-black dark:text-white mb-3">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 gap-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {feature}
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
