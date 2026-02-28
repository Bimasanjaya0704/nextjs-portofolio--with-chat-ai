import React from "react";
import { Project } from "@/types/portfolio";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiArrowRight, FiGithub } from "react-icons/fi";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col rounded-[2rem] border bg-card/50 backdrop-blur-md text-card-foreground shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-2 overflow-hidden h-full">
      <div className="p-8 grow flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-sm md:rounded-lg bg-primary/5 px-2 md:px-3 py-1 text-xs md:font-semibold text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-base md:text-2xl font-bold group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground line-clamp-2 text-xs md:text-base leading-relaxed">
          {project.description}
        </p>
      </div>
      <div className="p-8 pt-0 mt-auto flex items-center justify-between md:gap-4">
        <Button
          variant="ghost"
          className="rounded-full text-xs md:text-sm gap-2 md:font-bold hover:text-primary hover:bg-primary/5"
          asChild
        >
          <Link
            href={`/projects/${project.slug}`}
            className="flex justify-center items-center gap-2"
          >
            View Details{" "}
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center border hover:border-primary/50 hover:text-primary transition-all"
            title="View on GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
};
