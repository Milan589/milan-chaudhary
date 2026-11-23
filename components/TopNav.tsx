
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Briefcase,
  LayoutGrid,
  GraduationCap,
  Mail,
  FileText,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";

type NavLink = { label: string; href: string; icon: LucideIcon };

export type Profile = {
  name: string;
  title: string;
  photo?: string; // e.g. "/me.jpg"; falls back to initials
  description?: string;
  meta?: string[]; // e.g. ["Kathmandu, Nepal", "Open to work"]
  links?: { label: string; href: string }[]; // e.g. GitHub, LinkedIn
};

const links: NavLink[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Projects", href: "/projects", icon: LayoutGrid },
  { label: "Education", href: "/education", icon: GraduationCap },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "CV", href: "/cv", icon: FileText },
];

export default function TopNav({ profile }: { profile?: Profile }) {
  const path = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? path === "/" : path === href || path.startsWith(href + "/");

  const current = links.find((l) => isActive(l.href)) ?? links[0];
  const CurrentIcon = current.icon;

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 861px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const initials = profile?.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <nav className="topnav" aria-label="Primary">
      <div className="topnav-inner">
        {/* Mobile only: profile (replaces the hidden sidebar) or current page */}
        {profile ? (
          <Link href="/" className="topnav-brand">
            <span className="topnav-avatar" aria-hidden="true">
              {profile.photo ? <img src={profile.photo} alt="" /> : initials}
            </span>
            <span className="topnav-brand-text">
              <strong>{profile.name}</strong>
              <span>{profile.title}</span>
            </span>
          </Link>
        ) : (
          <span className="topnav-current" aria-hidden="true">
            <CurrentIcon size={18} strokeWidth={1.8} />
            {current.label}
          </span>
        )}

        <button
          type="button"
          className="topnav-toggle"
          aria-expanded={open}
          aria-controls="topnav-panel"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Dropdown on mobile, plain tab row on desktop */}
        <div id="topnav-panel" className="topnav-panel" data-open={open}>
          {profile && (
            <div className="topnav-profile">
              {profile.description && <p>{profile.description}</p>}
              {profile.meta && (
                <ul>
                  {profile.meta.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              )}
              {profile.links && (
                <div className="topnav-profile-links">
                  {profile.links.map((l) => (
                    <a key={l.href} href={l.href}>
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="topnav-links">
            {links.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
              >
                <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className="topnav-scrim"
        data-open={open}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
    </nav>
  );
}