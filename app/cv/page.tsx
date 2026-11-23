import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PrintButton from "@/components/PrintButton";
import { profile, experience, education, skills, certifications } from "@/data/profile";

export const metadata: Metadata = { title: "CV" };

export default function CV() {
  return (
    <>
      <PageHero title="Curriculum vitae" />
      <section className="section">
        <div className="container narrow cv">
          <div className="actions no-print">
            <a className="btn btn-dark" href={profile.cvPdf} download>Download PDF</a>
            <PrintButton />
          </div>
          <h2>{profile.name}</h2>
          <p>{profile.title}, {profile.location}. {profile.email}</p>
          <h3>Experience</h3>
          {experience.map((j) => (
            <p key={j.role + j.org}><strong>{j.role}</strong>, {j.org} ({j.period})</p>
          ))}
          <h3>Education</h3>
          {education.map((e) => (
            <p key={e.degree}><strong>{e.degree}</strong>, {e.school} ({e.period})</p>
          ))}
          <h3>Skills</h3>
          {skills.map((g) => <p key={g.group}><strong>{g.group}:</strong> {g.items.join(", ")}</p>)}
          <h3>Certifications</h3>
          {certifications.map((c, i) => <p key={c.name + i}>{c.name}, {c.issuer} ({c.date})</p>)}
        </div>
      </section>
    </>
  );
}
