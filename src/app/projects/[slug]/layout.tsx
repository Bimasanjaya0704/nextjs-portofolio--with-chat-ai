import { Metadata } from "next";
import portfolioData from "@/data/portfolio.json";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `Bima Sanjaya | ${project.title}`,
      description: project.description,
      type: "article",
      images: [
        {
          url: "/photo.png",
          alt: project.title,
        },
      ],
    },
  };
}

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
