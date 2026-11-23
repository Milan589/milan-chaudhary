

import Link from "next/link";
import type { CSSProperties } from "react";
import { Building2, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

const topStyle: CSSProperties = { textAlign: "center" };
const avatarStyle: CSSProperties = { margin: "0 auto 1rem" };
const listStyle: CSSProperties = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  display: "grid",
  gap: "1rem",
};
const itemStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: ".9rem",
  color: "inherit",
  textDecoration: "none",
};
const cvStyle: CSSProperties = { display: "flex", alignItems: "center", justifyContent: "center", gap: ".5rem" };

const iconProps = { size: 16, "aria-hidden": true, style: { flexShrink: 0 } } as const;

export default function Sidebar() {
  const initials = profile.name.split(" ").map((p) => p[0]).join("").slice(0, 2);
  return (
    <aside className="sidebar" aria-label="Profile">
      <div className="side-top" style={topStyle}>
        <Link href="/" className="avatar" style={avatarStyle} aria-label={`${profile.name}, home`}>
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
        <ul style={listStyle}>
          <li style={itemStyle}><MapPin {...iconProps} />{profile.location}</li>
          <li style={itemStyle}><Building2 {...iconProps} />{profile.company}</li>
          <li><a style={itemStyle} href={`mailto:${profile.email}`}><Mail {...iconProps} />Email</a></li>
          <li><a style={itemStyle} href={profile.github} target="_blank" rel="noopener noreferrer"><Github {...iconProps} />GitHub</a></li>
          <li><a style={itemStyle} href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin {...iconProps} />LinkedIn</a></li>
        </ul>
        <a className="btn btn-dark side-cv" style={cvStyle} href={profile.cvPdf} download><Download {...iconProps} />Download CV</a>
      </div>
    </aside>
  );
}