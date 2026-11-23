import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { projects } from "@/data/profile";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return { title: p?.name ?? "Project" };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <>
      <PageHero title={p.name} intro={p.summary} />
      <section className="section">
        <div className="container detail">
          <div>
            <h2>Overview</h2>
            <p>{p.overview}</p>
            <h2>Highlights</h2>
            <ul className="bullets">{p.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          </div>
          <aside className="card side">
            <dl>
              <dt>Period</dt><dd>{p.period}</dd>
              <dt>Role</dt><dd>{p.role}</dd>
              <dt>Stack</dt>
              <dd><ul className="tags">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul></dd>
            </dl>
            <div className="actions">
              {p.link && <a className="btn btn-dark" href={p.link} target="_blank" rel="noopener noreferrer">Live site</a>}
              {p.repo && <a className="btn btn-outline" href={p.repo} target="_blank" rel="noopener noreferrer">Source code</a>}
            </div>
          </aside>
        </div>
        <div className="container"><p><Link href="/projects" className="more">Back to all projects</Link></p></div>
      </section>
    </>
  );
}
