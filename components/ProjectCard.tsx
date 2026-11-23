import Link from "next/link";
import { projects } from "@/data/profile";

type P = (typeof projects)[number];

export default function ProjectCard({ p, tone }: { p: P; tone: number }) {
  return (
    <article className={`card project tone-${tone % 3}`}>
      <p className="period">{p.period}</p>
      <h3><Link href={`/projects/${p.slug}`}>{p.name}</Link></h3>
      <p>{p.summary}</p>
      <ul className="tags">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
    </article>
  );
}
