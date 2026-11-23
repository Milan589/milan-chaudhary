import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { education, certifications } from "@/data/profile";

export const metadata: Metadata = { title: "Education and certifications" };

export default function Education() {
  return (
    <>
      <PageHero title="Education and certifications" intro="Academic qualifications, courses and certificates." />
      <section className="section">
        <div className="container narrow">
          <h2>Education</h2>
          <ol className="timeline">
            {education.map((e) => (
              <li key={e.degree}>
                <p className="period">{e.period}</p>
                <h3>{e.degree}</h3>
                <p className="org">{e.school}</p>
                <ul>{e.notes.map((n) => <li key={n}>{n}</li>)}</ul>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <h2>Certifications</h2>
          <div className="grid">
            {certifications.map((c, i) => (
              <div className="card" key={c.name + i}>
                <h3>{c.name}</h3>
                <p className="org">{c.issuer}</p>
                <p className="period">{c.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
