"use client";
import Link from "next/link";
import portfolioData from "@/data/portfolio.json";
import { Button } from "@/components/ui/button";
import GradientText from "@/components/GradientText";
import Social from "@/components/social";
import { motion } from "motion/react";
import {
  FiDownload,
  FiArrowRight,
  FiMessageSquare,
  FiUser,
  FiZap,
  FiCode,
} from "react-icons/fi";
import Photo from "@/components/Photo";
import TextType from "@/components/TextType";
import { ProjectCard } from "@/components/portfolio/project-card";
import ChatBox from "@/components/chat/chat-box";
import { useState } from "react";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const featuredProjects = portfolioData.projects.slice(0, 3);

  return (
    <div className="flex flex-col gap-24 px-4 md:px-8 lg:px-24 pt-20 pb-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 md:py-20"
      >
        <div className="flex mx-auto lg:justify-end order-first lg:order-last">
          <Photo />
        </div>

        <div className="flex flex-col items-start text-left gap-6">
          <div className="flex items-center mx-auto sm:mx-0 gap-2 md:gap-4">
            <h1 className="text-xl font-bold tracking-tight sm:text-4xl text-foreground">
              Hi, I&apos;m{" "}
            </h1>
            <GradientText
              colors={["#4F46E5", "#06B6D4", "#8B5CF6"]}
              animationSpeed={3}
              className="text-2xl font-bold tracking-tight sm:text-5xl text-foreground"
            >
              {portfolioData.name}
            </GradientText>
          </div>
          <div className="mx-auto md:mx-0">
            <TextType
              text={["IT System Engineer", "Software Engineer"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              className="text-lg font-bold italic text-primary"
            />
          </div>
          <p className="max-w-2xl text-center md:text-left text-sm md:text-base text-muted-foreground sm:text-lg leading-relaxed">
            {portfolioData.about}
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4">
            <Button className="h-12 px-8 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95">
              <span className="flex items-center gap-2 font-semibold">
                Download CV <FiDownload />
              </span>
            </Button>
            <Social
              containerStyles="flex gap-4"
              iconStyles="w-12 h-12 rounded-lg border border-border bg-background/50 backdrop-blur-sm
                flex justify-center items-center text-muted-foreground text-xl
                hover:text-primary hover:border-primary/50 hover:bg-primary/5
                transition-all duration-300 shadow-sm"
            />
          </div>
        </div>
      </motion.section>

      {/* About Section (Summary & Key Strengths) */}
      <section id="about" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-medium w-fit">
              <FiUser className="md:w-4 md:h-4" /> About Me
            </div>
            <h2 className="text-2xl md:text-4xl font-bold">
              Automating Industrial Systems
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              I specialize in IT systems, ensuring that elegant frontend
              experiences are backed by robust, scalable backend architectures.
              My journey is about solving complex puzzles between the factory
              floor and the browser window.
            </p>
            <Link
              href="/about"
              className="group flex border-2 border-primary/10 w-fit p-2 items-center gap-2 text-xs md:text:base text-primary font-bold transition-all"
            >
              Detailed Information
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4">
                <FiZap className="w-6 h-6 md:w-6 md:h-6" />
              </div>
              <h3 className="font-bold text-sm md:text-xl mb-2">
                Key Strengths
              </h3>
              <ul className="text-muted-foreground text-xs md:text-base space-y-2">
                <li>• React & Tailwind</li>
                <li>• C# & Python</li>
                <li>• Logistic Systems</li>
                <li>• Problem Solving</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-2xl border bg-card/50 backdrop-blur-sm"
            >
              <div className="w-8 h-8 md:w-10 md:h-10  rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
                <FiCode className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="font-bold text-sm md:text-xl mb-2">
                Current Working
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm">
                As a IT System Enginner, I am currently architecting monitoring
                systems to optimize Smart Factory operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sounding Board Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="p-8 md:p-12 rounded-[2.5rem] border bg-primary/5 border-primary/20 relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          <div className="w-16 md:w-20 h-16 md:h-20 rounded-3xl bg-primary flex items-center justify-center text-primary-foreground shadow-2xl shadow-primary/20 shrink-0">
            <FiMessageSquare className="w-10 h-10" />
          </div>
          <div className="grow">
            <h2 className="text-lg md:text-3xl font-bold mb-4">
              Sounding Board (Teman Curhat)
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl">
              Need someone to talk to? I&apos;m here to listen and chat about
              anything on your mind. Whether it&apos;s tech, life, or just
              random thoughts, let&apos;s connect with my AI persona!
            </p>
          </div>
          <Button
            onClick={() => setIsChatOpen(true)}
            className="rounded-full md:px-8 md:h-14 cursor-pointer hover:-translate-y-1.5 transition-all duration-300 text-sm md:text-lg font-bold gap-3 shadow-xl shadow-primary/20 shrink-0"
          >
            Talk to AI <FiArrowRight />
          </Button>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
              <FiZap className="w-4 h-4" /> Projects
            </div>
            <h2 className="text-2xl md:text-4xl font-bold">Selected Works</h2>
          </div>
          <Link
            href="/projects"
            className="group flex items-center text-xs md:text-base gap-2 text-muted-foreground hover:text-primary transition-colors font-semibold"
          >
            Explore All Projects
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 border-t">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new opportunities
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Let&apos;s build something{" "}
            <span className="text-primary italic">remarkable</span> together.
          </h2>
          <p className="text-sm md:text-xl text-muted-foreground">
            Whether you have a specific project in mind or just want to say hi,
            my inbox is always open.
          </p>
        </div>
      </section>
      <ChatBox
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
      />
    </div>
  );
}
