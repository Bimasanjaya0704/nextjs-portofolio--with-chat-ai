import React from "react";
import { Experience } from "@/types/portfolio";

interface ExperienceItemProps {
  experience: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
}) => {
  return (
    <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-0.5 before:bg-border last:before:h-8">
      <div className="absolute -left-1 top-2 h-2 w-2 rounded-full bg-primary" />
      <div className="flex flex-col gap-1 mb-4">
        <h3 className="text-xl font-bold">{experience.position}</h3>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-semibold text-primary">{experience.company}</p>
          <p className="text-sm text-muted-foreground">{experience.duration}</p>
        </div>
      </div>
      <ul className="list-disc space-y-2 text-muted-foreground ml-4">
        {experience.description.map((bullet, idx) => (
          <li key={idx}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};
