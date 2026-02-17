"use client";

import Projects from "@/app/components/projects/Projects";
import Title from "@/app/components/shared/Title";
import { motion } from "framer-motion";

export default function ProjectsPage() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10 py-10"
        >
            <div className="space-y-4">
                <Title upperText="Professional" lowerText="Showcase" />
                <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                    A collection of digital ecosystems I've architected, ranging from full-stack platforms to interactive developer tools. Each project represents a unique challenge and learning experience.
                </p>
            </div>

            <Projects />
        </motion.div>
    );
}
