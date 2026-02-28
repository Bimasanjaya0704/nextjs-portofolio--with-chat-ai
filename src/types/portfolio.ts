export interface Project {
  slug: string;
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  type: string;
  duration: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PortfolioData {
  name: string;
  about: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
}

export interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}
