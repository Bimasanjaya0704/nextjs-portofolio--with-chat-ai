"use client";

import { Section } from "./section";
import portfolioData from "@/data/portfolio.json";
import { ProjectCard } from "./portfolio/project-card";
import { Project } from "@/types/portfolio";

export const ProjectsSection = () => {
  const projects = portfolioData.projects as Project[];

  return (
    <Section
      id="projects"
      title="Featured Projects"
      subtitle="A showcase of my recent work, side projects, and open-source contributions."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};
