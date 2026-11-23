import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { experience } from "@/data/profile";

export const metadata: Metadata = { title: "Experience" };

export default function Experience() {
  return (
    <>
      <PageHero title="Experience" intro="Where I have worked and what I was responsible for." />
      <section className="section">
        <div className="container narrow">
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.role + job.org}>
                <p className="period">{job.period}</p>
                <h3>{job.role}</h3>
                <p className="org">{job.org}</p>
                <ul>{job.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
