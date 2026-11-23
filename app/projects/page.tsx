import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/profile";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  return (
    <>
      <PageHero title="Projects" intro="Selected work. Open a project for the details." />
      <section className="section">
        <div className="container grid">
          {projects.map((p, i) => <ProjectCard key={p.slug} p={p} tone={i} />)}
        </div>
      </section>
    </>
  );
}
