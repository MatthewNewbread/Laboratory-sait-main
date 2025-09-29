import { notFound } from "next/navigation";
import { projectsData } from "@/app/projects/data";

type PageProps = {
  params: { slug: string };
};

export const generateStaticParams = () =>
  projectsData.map((project) => ({ slug: project.slug }));

export const dynamicParams = false;

export default function ProjectPage({ params: { slug } }: PageProps) {
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound(); 
  }

  const { Component } = project;
  return <Component />;
}
