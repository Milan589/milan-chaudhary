
import type { Metadata } from "next";
import { Download, ExternalLink, FileText } from "lucide-react";
import PageHero from "@/components/PageHero";
import { profile } from "@/data/profile";

export const metadata: Metadata = { title: "CV" };

export default function CV() {
  return (
    <>
      <PageHero
        title="Curriculum vitae"
        intro="Preview my CV below or download a copy."
      />
      <section className="section">
        <div className="container">
          <div className="cv-toolbar">
            <div className="cv-file">
              <span className="cv-file-icon">
                <FileText size={20} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span className="cv-file-text">
                <strong>{profile.name} — CV</strong>
                <span>PDF document</span>
              </span>
            </div>

            <div className="cv-toolbar-actions">
              <a
                className="btn btn-dark btn-icon"
                href={profile.cvPdf}
                download={`${profile.name}-resume.pdf`}
              >
                <Download size={18} aria-hidden="true" />
                Download PDF
              </a>
              <a
                className="btn btn-outline btn-icon"
                href={profile.cvPdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} aria-hidden="true" />
                Open in new tab
              </a>
            </div>
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
              <a href={profile.cvPdf} target="_blank" rel="noopener noreferrer">
                Open the CV
              </a>{" "}
              or use the Download button above.
            </p>
          </object>

          {/* Phones: browsers can't embed PDFs, so explain and point to the buttons */}
          <div className="card cv-mobile">
            <FileText size={40} strokeWidth={1.5} aria-hidden="true" />
            <h3>PDF preview isn't available on phones</h3>
            <p>
              Use the buttons above to open the CV in your PDF viewer or save a
              copy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}