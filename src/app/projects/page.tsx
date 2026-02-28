"use client";
import portfolioData from "@/data/portfolio.json";
import { Project } from "@/types/portfolio";
import { ProjectCard } from "@/components/portfolio/project-card";
import { motion } from "motion/react";
import { FiZap, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = portfolioData.projects as Project[];

  return (
    <div className="flex flex-col gap-8 md:gap-16 px-4 md:px-8 lg:px-24 pt-16 md:pt-28 pb-20 max-w-7xl mx-auto">
      <Link
        href="/"
        className="group flex text-xs md:text-sm items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit"
      >
        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
        Back to Home
      </Link>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium w-fit">
          <FiZap className="w-3 h-3 md:w-4 md:h-4" /> Portfolio
        </div>
        <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
          Selected <span className="text-primary italic">Works</span>
        </h1>
        <p className="text-sm md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          A curated collection of my recent work, side projects, and open-source
          contributions.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
