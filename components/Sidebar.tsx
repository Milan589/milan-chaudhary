
import Link from "next/link";
import {
  Building2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { profile } from "@/data/profile";

const iconProps = { size: 17, strokeWidth: 1.8, "aria-hidden": true } as const;

export default function Sidebar() {
  const initials = profile.name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);

  return (
    <aside className="sidebar" aria-label="Profile">
      <div className="side-top">
        <div className="side-banner" aria-hidden="true" />
        <Link href="/" className="avatar" aria-label={`${profile.name}, home`}>
          {profile.avatar ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={profile.avatar} alt="" />
          ) : (
            <span aria-hidden="true">{initials}</span>
          )}
        </Link>
        <p className="side-name">{profile.name}</p>
        <p className="side-title">{profile.title}</p>
      </div>

      <div className="side-body">
        <p className="side-desc">{profile.about[0]}</p>

        <ul className="side-list">
          <li>
            <span className="side-item">
              <span className="side-icon">
                <MapPin {...iconProps} />
              </span>
              {profile.location}
            </span>
          </li>
          <li>
            <span className="side-item">
              <span className="side-icon">
                <Building2 {...iconProps} />
              </span>
              {profile.company}
            </span>
          </li>
        </ul>

        <div className="side-socials">
          <a className="side-social" href={`mailto:${profile.email}`}>
            <Mail size={19} strokeWidth={1.8} aria-hidden="true" />
            Email
          </a>
          <a
            className="side-social"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={19} strokeWidth={1.8} aria-hidden="true" />
            GitHub
          </a>
          <a
            className="side-social"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={19} strokeWidth={1.8} aria-hidden="true" />
            LinkedIn
          </a>
        </div>

        <a
          className="btn btn-dark side-cv"
          href={profile.cvPdf}
          download={`${profile.name}-resume.pdf`}
        >
          <Download size={17} aria-hidden="true" />
          Download CV
        </a>
      </div>
    </aside>
  );
}