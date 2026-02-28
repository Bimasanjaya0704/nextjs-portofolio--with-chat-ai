import { MetadataRoute } from "next";
import portfolioData from "@/data/portfolio.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bimasanjayaweb.vercel.app/";

  // Base routes
  const routes = ["", "/about", "/projects"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic project routes
  const projectRoutes = portfolioData.projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projectRoutes];
}
