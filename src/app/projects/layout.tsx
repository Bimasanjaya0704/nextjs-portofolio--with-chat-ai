import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore a curated collection of recent work, side projects, and open-source contributions by Bima Sanjaya.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
