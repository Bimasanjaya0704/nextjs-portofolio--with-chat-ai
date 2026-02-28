import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about Bima Sanjaya, an IT System Engineer and Software Engineer dedicated to Smart Factory and modern web technologies.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
