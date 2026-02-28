"use client";

import { Section } from "./section";
import portfolioData from "@/data/portfolio.json";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="My background and what drives my passion for technology."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-border/50 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
          {/* Replace with actual image later */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <Image
              src="/bimas.png"
              alt="About Me"
              width={400}
              height={400}
              className="w-[500px] h-full object-cover"
            />
          </div>
          <div className="w-full h-full bg-zinc-100 dark:bg-zinc-900" />
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I&apos;m IT System Engineer with experience in Smart Factory and
            Logistics Systems, specializing in Material Control System (MCS) for
            material flow control, system monitoring, log analysis, material
            transfer tracking, and process optimization. Skilled in supporting
            Computer Integrated Manufacturing (CIM) systems, including AGV CIM,
            Conveyor CIM, and Stocker CIM, to ensure stable and efficient
            automated manufacturing operations. Strong in system analysis and
            incident handling, including root cause identification and proposing
            practical improvements to support daily operations, while
            collaborating closely with IT, automation, and operations teams.
          </p>
          <p>
            I&apos;m also have 1 year experience as a Software engineer. As a
            frontend engineer, I specialize in building responsive and
            interactive user interfaces, with hands-on experience in integrating
            with backend services through APIs using React JS and Tailwind. My
            backend experience, gained through bootcamp, internships,and my
            work. Includes developing APIs, develop robotic system, and
            implemented Object-Oriented Programming (OOP) principles using C#
            and Python. Additionally, I am skilled in version control with Git,
            which enhances my ability to collaborate and manage project versions
            effectively.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring new design
            trends, contributing to open-source, or sharing my knowledge with
            the tech community.
          </p>
        </div>
      </div>
    </Section>
  );
};
