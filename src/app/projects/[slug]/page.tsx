"use client";
import { useParams } from "next/navigation";
import portfolioData from "@/data/portfolio.json";
import { motion } from "motion/react";
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiZap,
  FiCode,
  FiLayout,
  FiCpu,
} from "react-icons/fi";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const projectIndex = portfolioData.projects.findIndex((p) => p.slug === slug);
  const project = portfolioData.projects[projectIndex];

  const nextProject =
    portfolioData.projects[(projectIndex + 1) % portfolioData.projects.length];

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/projects">
          <Button variant="outline">Back to Projects</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12 md:gap-20 px-4 md:px-8 lg:px-24 pt-24 md:pt-32 pb-20 max-w-7xl mx-auto">
      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Link
          href="/projects"
          className="group flex text-xs md:text-sm items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
          Back to Projects
        </Link>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest w-fit">
              <FiCode className="w-3.5 h-3.5" /> Project Detail
            </div>
            <h1 className="text-3xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              {project.title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={i % 2 === 1 ? "text-primary italic" : ""}
                >
                  {word}{" "}
                </span>
              ))}
            </h1>
          </div>

          <p className="text-sm md:text-2xl text-muted-foreground leading-relaxed max-w-3xl font-medium">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-full gap-2 px-6 h-10 text-xs md:text-base hover:scale-105 transition-all duration-200 font-bold shadow-xl shadow-primary/20"
                >
                  <FiGithub className="md:w-5 md:h-5" />{" "}
                  <span>View Source</span>
                </Button>
              </Link>
            )}
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg gap-2 px-6 h-10 text-xs md:text-base hover:scale-105 transition-all duration-200 font-bold bg-background/50 backdrop-blur-sm"
                >
                  <FiExternalLink className="w-5 h-5" /> <span>Live Demo</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      </motion.section>

      {/* Info Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-2 p-8 md:p-12 rounded-[2.5rem] border bg-card/20 backdrop-blur-md flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-lg md:text-2xl font-bold flex items-center gap-2 text-foreground">
              <FiLayout className="text-primary" /> Overview
            </h2>
            <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
              {project.longDescription}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-[2.5rem] border bg-primary/5 border-primary/10 flex flex-col gap-8"
        >
          <h3 className="text-lgmd:text-xl font-bold flex items-center gap-2">
            <FiCpu className="text-primary" /> Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-xl border bg-background/50 text-xs md:font-bold uppercase tracking-tight text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-6 border-t border-primary/10 space-y-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Category
              </span>
              <span className="font-bold text-sm md:text-base">
                {project.category}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Role
              </span>
              <span className="font-bold text-sm md:text-base">
                {project.role}
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest w-fit">
            <FiZap className="w-3.5 h-3.5" /> Highlights
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            Key Features
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.strengths?.map((strength, i) => {
            const description = project.strength_descriptions?.[i] || "";
            return (
              <motion.div
                key={strength}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] border bg-card/10 backdrop-blur-sm hover:bg-card/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FiZap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {strength}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Next Project Footer */}
      <Link
        href={`/projects/${nextProject.slug}`}
        className="group mt-12 hover:-translate-y-2 transition-all duration-500"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border bg-primary text-primary-foreground flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 md:w-96 md:h-96 bg-white/10 blur-[100px] translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">
              Next Project
            </span>
            <h3 className="text-2xl md:text-5xl font-bold">
              {nextProject.title}
            </h3>
          </div>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:translate-x-4 transition-transform relative z-10">
            <FiArrowRight className="w-6 h-6 md:w-8 md:h-8 -rotate-45 group-hover:rotate-0 transition-transform" />
          </div>
        </motion.div>
      </Link>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FiArrowRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
