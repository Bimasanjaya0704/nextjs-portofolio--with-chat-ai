"use client";

import { Section } from "./section";
import portfolioData from "@/data/portfolio.json";
import { motion } from "motion/react";

export const SkillsSection = () => {
  const skills = portfolioData.skills;

  return (
    <Section
      id="skills"
      title="Technical Expertise"
      subtitle="The tools and technologies I use to bring ideas to life."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-2xl border bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all border-border/50"
          >
            <h3 className="text-xl font-bold mb-6 text-primary">
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-lg bg-secondary/50 text-secondary-foreground text-sm font-medium border border-border/50 hover:border-primary/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
