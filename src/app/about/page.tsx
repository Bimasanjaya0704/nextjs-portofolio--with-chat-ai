"use client";
import React from "react";
import { motion } from "motion/react";
import portfolioData from "@/data/portfolio.json";
import {
  FiUser,
  FiCode,
  FiArrowLeft,
  FiBriefcase,
  FiCalendar,
  FiSettings,
} from "react-icons/fi";
import Link from "next/link";
import { cn } from "@/lib/utils";
import GradientText from "@/components/GradientText";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8 md:gap-16 px-4 md:px-8 lg:px-24 pt-16 md:pt-28 pb-20 max-w-7xl mx-auto">
      <Link
        href="/"
        className="group flex text-xs md:text-sm items-center gap-2 text-muted-foreground hover:text-primary transition-colors w-fit"
      >
        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
        Back to Home
      </Link>

      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium w-fit">
          <FiUser className="md:w-4 md:h-4" /> About Me
        </div>
        <div className="text-xl md:text-6xl font-bold tracking-tight flex justify-left items-center gap-2 md:gap-3">
          The Story Behind{" "}
          <span className="text-primary italic">
            {" "}
            <GradientText
              colors={["#4F46E5", "#06B6D4", "#8B5CF6"]}
              animationSpeed={3}
            >
              BIMSANSS.
            </GradientText>
          </span>
        </div>
        <p className="text-sm md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          I am {portfolioData.name}, a multidisciplinary engineer who thrives at
          the intersection of robust industrial systems and modern web
          technologies.
        </p>
      </motion.section>

      {/* Detailed Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 flex flex-col gap-8"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none text-sm md:text-lg text-muted-foreground leading-relaxed">
            <p className="pb-4">
              I am a dedicated <strong>IT System Engineer</strong> with a strong
              focus on <strong>Smart Factory and Logistics Systems</strong>. My
              expertise lies in <strong>Material Control Systems (MCS)</strong>,
              where I manage material flow control, system monitoring, and
              process optimization.
            </p>
            <p className="pb-4">
              In the industrial space, I specialize in supporting{" "}
              <strong>Computer Integrated Manufacturing (CIM)</strong> systems,
              including AGV, Conveyor, and Stocker CIM. I am passionate about
              ensuring stable and efficient automated manufacturing operations
              through rigorous system analysis and incident handling.
            </p>
            <p>
              Beyond industrial systems, I have{" "}
              <strong>1 year of experience as a Software Engineer</strong>. As a
              frontend specialist, I build responsive user interfaces with{" "}
              <strong>React JS and Tailwind CSS</strong>, while my backend
              experience includes developing APIs and robotic systems using{" "}
              <strong>C# and Python</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4 text-sm md:text-base">
            {/* Card 1: Fokus pada Industrial/System */}
            <div className="flex flex-col gap-4 p-6 rounded-[2rem] border bg-card/30">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-2xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <FiSettings className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-base md:text-xl font-bold">
                Industrial Reliability
              </h3>
              <p className="text-muted-foreground">
                Expertise in Logistic System, focused on high availability,
                incident handling, and deep log analysis for stable smart
                factory operations.
              </p>
            </div>

            {/* Card 2: Fokus pada Software/AI */}
            <div className="flex flex-col gap-4 p-6 rounded-[2rem] border bg-card/30">
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                <FiCode className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-base md:text-xl font-bold">Modern WEB DEV</h3>
              <p className="text-muted-foreground">
                Crafting modern, high-performance websites with React, focusing
                on clean code, sleek UI/UX, and seamless API integrations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sidebar info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="p-8 rounded-[2.5rem] border bg-primary/5 border-primary/10 flex flex-col gap-6">
            <h3 className="text-base md:text-2xl font-bold">Current Focus</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 h-auto bg-primary rounded-full shrink-0" />
                <div>
                  <h4 className="text-sm md:text-base font-bold">
                    Smart Factory
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    monitoring systems to optimize Smart Factory operations
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 h-auto bg-primary/30 rounded-full shrink-0" />
                <div>
                  <h4 className="text-sm md:text-base font-bold">
                    Performance Tuning
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Optimizing Next.js applications for core web vitals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-[2.5rem] border bg-card/50 flex flex-col gap-6">
            <h3 className="text-basemd:text-2xl font-bold">Key Strengths</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Smart Factory",
                "C#",
                "OOP",
                "CIM & MCS System",
                "Problem Solving",
                "Incident Handling",
                "Technical Reporting",
                "React/Next.js",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border bg-background/50 text-xs md:text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col gap-10 pt-16 border-t border-border/40"
      >
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest w-fit">
            <FiBriefcase className="w-3.5 h-3.5" /> Professional Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Experience
          </h2>
        </div>

        <div className="flex flex-col gap-8 relative">
          <div className="absolute left-4.75 top-4 bottom-4 w-px bg-linear-to-b from-primary/50 via-border to-transparent hidden md:block" />

          {portfolioData.experience.map((exp, idx) => {
            const isPresent = exp.duration.toLowerCase().includes("present");

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative md:pl-16 group"
              >
                <div
                  className={cn(
                    "absolute left-0 top-2 w-10 h-10 rounded-xl bg-background border items-center justify-center z-10 transition-all duration-500 hidden md:flex",
                    isPresent
                      ? "border-purple-500 scale-110 shadow-[0_0_15px_rgba(var(--primary),0.2)]"
                      : "border-border/80 group-hover:border-primary/50",
                  )}
                >
                  <FiBriefcase
                    className={cn(
                      "w-5 h-5 transition-colors duration-300",
                      isPresent
                        ? "text-purple-500 "
                        : "text-muted-foreground group-hover:text-primary",
                    )}
                  />
                  {isPresent && (
                    <span className="absolute inset-0 rounded-xl bg-primary/10 animate-ping opacity-20" />
                  )}
                </div>

                {/* Card Experience */}
                <div
                  className={cn(
                    "p-6 md:p-8 rounded-[2rem] border hover:-translate-y-2 overflow-hidden transition-all duration-500 flex flex-col gap-6 relative hover:shadow-2xl hover:z-20",
                    isPresent
                      ? "bg-purple-300/20 border-purple-500/30 shadow-lg shadow-purple-500/5 dark:bg-purple-500/5"
                      : "bg-card/30 border-border/60 hover:border-primary/20 hover:bg-card/50",
                  )}
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg md:text-xl font-bold">
                          {exp.position}
                        </h3>
                      </div>

                      <div className="flex items-center gap-1 sm:gap-3 text-sm text-muted-foreground">
                        <span className="font-semibold text-sm md:text-base text-foreground/90">
                          {exp.company}
                        </span>
                        <span className="hidden sm:inline text-muted-foreground/30">
                          •
                        </span>
                        <span className=" bg-green-600/10 px-1.5 py-1 rounded-sm font-semibold text-xs text-green-500 w-fit">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Badges Skills */}
                    <div className="flex flex-wrap gap-1.5 md:justify-end">
                      <span className="flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground">
                        <FiCalendar className="w-3.5 h-3.5" /> {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* List Deskripsi */}
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-xs md:text-sm text-muted-foreground/90 leading-relaxed"
                      >
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0 bg-primary/40" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className={cn(
                          "px-2 py-0.5 rounded-md text-xs md:text-sm font-semibold border border-border/50",
                          isPresent
                            ? "bg-purple-500/20 text-purple-500 border-purple-500/30"
                            : "bg-secondary text-secondary-foreground border-border/50",
                        )}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
}
