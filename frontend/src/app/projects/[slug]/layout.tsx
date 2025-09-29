import { Header } from "@/app/header/Header";
import { Footer } from "@/app/footer/Footer";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/app/projects/data";

export default function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main
        role="main"
        aria-label={`Содержимое проекта ${project.title}`}
        className="min-h-[60vh] pt-[69px] bg-primary text-black"
        tabIndex={0}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
