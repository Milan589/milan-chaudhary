
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/profile";

type P = (typeof projects)[number];

export default function ProjectCard({ p, tone }: { p: P; tone: number }) {
  const index = String(tone + 1).padStart(2, "0");

  return (
    <article className={`card project tone-${tone % 3}`}>
      <span className="project-index" aria-hidden="true">{index}</span>
      <p className="period">{p.period}</p>
      <h3>
        <Link href={`/projects/${p.slug}`} className="project-link">{p.name}</Link>
      </h3>
      <p className="project-summary">{p.summary}</p>
      <ul className="tags">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
      <span className="project-cta" aria-hidden="true">
        View project <ArrowUpRight size={18} strokeWidth={2} />
      </span>
    </article>
  );
}