"use client";

import { Section } from "./section";
import portfolioData from "@/data/portfolio.json";
import { ExperienceItem } from "./portfolio/experience-item";
import { Experience } from "@/types/portfolio";

export const ExperienceSection = () => {
  const experiences = portfolioData.experience as Experience[];

  return (
    <Section
      id="experience"
      title="Professional Journey"
      subtitle="My career path and the companies I've helped grow along the way."
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </Section>
  );
};
