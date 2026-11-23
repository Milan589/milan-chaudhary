// import type { Metadata } from "next";
// import PageHero from "@/components/PageHero";
// import PrintButton from "@/components/PrintButton";
// import { profile, experience, education, skills, certifications } from "@/data/profile";

// export const metadata: Metadata = { title: "CV" };

// export default function CV() {
//   return (
//     <>
//       <PageHero title="Curriculum vitae" />
//       <section className="section">
//         <div className="container narrow cv">
//           <div className="actions no-print">
//             <a className="btn btn-dark" href={profile.cvPdf} download>Download PDF</a>
//             <PrintButton />
//           </div>
//           <h2>{profile.name}</h2>
//           <p>{profile.title}, {profile.location}. {profile.email}</p>
//           <h3>Experience</h3>
//           {experience.map((j) => (
//             <p key={j.role + j.org}><strong>{j.role}</strong>, {j.org} ({j.period})</p>
//           ))}
//           <h3>Education</h3>
//           {education.map((e) => (
//             <p key={e.degree}><strong>{e.degree}</strong>, {e.school} ({e.period})</p>
//           ))}
//           <h3>Skills</h3>
//           {skills.map((g) => <p key={g.group}><strong>{g.group}:</strong> {g.items.join(", ")}</p>)}
//           <h3>Certifications</h3>
//           {certifications.map((c, i) => <p key={c.name + i}>{c.name}, {c.issuer} ({c.date})</p>)}
//         </div>
//       </section>
//     </>
//   );
// }


import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Download, ExternalLink, FileText } from "lucide-react";
import PageHero from "@/components/PageHero";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "CV" };

const btn: CSSProperties = { display: "inline-flex", alignItems: "center", gap: ".5rem" };

export default function CV() {
  return (
    <>
      <PageHero title="Curriculum vitae" intro="Preview my CV below or download a copy." />
      <section className="section">
        <div className="container">
          <div className="actions" style={{ marginTop: 0, marginBottom: "1.25rem" }}>
            <a
              className="btn btn-dark"
              style={btn}
              href={profile.cvPdf}
              download={`${profile.name}-resume.pdf`}
            >
              <Download size={18} aria-hidden="true" />
              Download PDF
            </a>
            <a
              className="btn btn-outline"
              style={btn}
              href={profile.cvPdf}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={18} aria-hidden="true" />
              Open in new tab
            </a>
          </div>

          {/* Desktop: inline preview */}
          <object
            className="cv-frame"
            data={`${profile.cvPdf}#view=FitH`}
            type="application/pdf"
            aria-label={`${profile.name} CV preview`}
          >
            <p style={{ padding: "1.5rem" }}>
              Your browser can't show the PDF here.{" "}
              <a href={profile.cvPdf} target="_blank" rel="noopener noreferrer">Open the CV</a> or use the
              Download button above.
            </p>
          </object>

          {/* Phones: browsers can't embed PDFs, so show a card instead */}
          <div className="card cv-mobile">
            <FileText size={40} strokeWidth={1.5} aria-hidden="true" />
            <h3>{profile.name} — CV</h3>
            <p>PDF previews don't work well on phones. Open the CV in your PDF viewer instead.</p>
            <a className="btn btn-dark" style={btn} href={profile.cvPdf} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={18} aria-hidden="true" />
              Open CV
            </a>
          </div>
        </div>
      </section>
    </>
  );
}