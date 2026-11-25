

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Code } from "lucide-react";
import PageHero from "@/components/PageHero";
import { projects } from "@/data/profile";
import { ProjectTime } from "@/components/constant/projectTime";







export const revalidate = 86400;

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
  const time = ProjectTime(p.period);

  return (
    <>
      <PageHero title={p.name} intro={p.summary} />
      <section className="section">
        <div className="container detail">
          <div>
            <h2>Overview</h2>
            <p>{p.overview}</p>
            <h2>Highlights</h2>
            <ul className="bullets">
              {p.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>

          <aside className="card side side-sticky">
            <dl>
              <dt>Period</dt>
              <dd>
                {p.period}
                {time?.ongoing && <span className="status-pill">Ongoing</span>}
              </dd>
              {time && (
                <>
                  <dt>Duration</dt><dd>{time.duration}</dd>
                 <dt>Started</dt><dd>{time.startedAgo}</dd>
                </>
              )}
              <dt>Role</dt><dd>{p.role}</dd>
              <dt>Stack</dt>
              <dd><ul className="tags">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul></dd>
            </dl>
            <div className="actions">
              {p.link && (
                <a className="btn btn-dark" href={p.link} target="_blank" rel="noopener noreferrer">
                  Live site <ExternalLink size={16} aria-hidden="true" />
                </a>
              )}
              {p.repo && (
                <a className="btn btn-outline" href={p.repo} target="_blank" rel="noopener noreferrer">
                  Source code <Code size={16} aria-hidden="true" />
                </a>
              )}
            </div>
          </aside>
        </div>

        <div className="container">
          <p>
            <Link href="/projects" className="back-link">
              <ArrowLeft size={18} aria-hidden="true" /> Back to all projects
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}

