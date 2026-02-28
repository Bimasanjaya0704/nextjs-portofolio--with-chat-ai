"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export const Section = ({ children, id, className = "", title, subtitle }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 md:py-32 ${className}`}
    >
      {(title || subtitle) && (
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          {title && <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h2>}
          {subtitle && <p className="text-muted-foreground text-lg max-w-2xl">{subtitle}</p>}
          <div className="h-1 w-20 bg-primary mt-6 rounded-full" />
        </div>
      )}
      {children}
    </motion.section>
  )
}
