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
  ChevronRight,
  Download,
  type LucideIcon,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

type NavLink = { label: string; href: string; icon: LucideIcon };

export type Profile = {
  name: string;
  title: string;
  photo?: string;
  description?: string;
  meta?: string[];
  links?: { label: string; href: string }[];
  cvPdf?: string; // optional: shows a "Download CV" button in the drawer
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

const externalProps = (href: string) =>
  /^https?:/.test(href)
    ? ({ target: "_blank", rel: "noopener noreferrer" } as const)
    : {};

export default function TopNav({ profile }: { profile?: Profile }) {
  const path = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? path === "/" : path === href || path.startsWith(href + "/");

  const current = links.find((l) => isActive(l.href)) ?? links[0];
  const CurrentIcon = current.icon;

  // close on navigation
  useEffect(() => {
    setOpen(false);
  }, [path]);

  // Escape to close + lock body scroll while open
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

  // close if resized to desktop
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

  const avatar = profile ? (
    profile.photo ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={profile.photo} alt="" />
    ) : (
      initials
    )
  ) : null;

  return (
    <nav className="topnav" aria-label="Primary">
      <div className="topnav-inner">
        {/* Mobile bar, left: brand (or current page if no profile given) */}
        {profile ? (
          <Link
            href="/"
            className="topnav-logo"
            aria-label={`${profile.name}, home`}
          >
            <span className="topnav-avatar" aria-hidden="true">
              {avatar}
            </span>
            <span className="topnav-logo-text">
              <strong>{profile.name}</strong>
              <span>{profile.title}</span>
            </span>
          </Link>
        ) : (
          <button
            type="button"
            className="topnav-current"
            aria-expanded={open}
            aria-controls="topnav-panel"
            onClick={() => setOpen((v) => !v)}
          >
            <CurrentIcon size={18} strokeWidth={1.8} aria-hidden="true" />
            {current.label}
          </button>
        )}

        {/* Drawer on mobile, segmented tab bar on desktop */}
        <div id="topnav-panel" className="topnav-panel" data-open={open}>
          <div className="drawer-head">
            {profile && (
              <Link href="/" className="drawer-brand">
                <span className="drawer-avatar" aria-hidden="true">
                  {avatar}
                </span>
                <span className="drawer-brand-text">
                  <strong>{profile.name}</strong>
                  <span>{profile.title}</span>
                </span>
              </Link>
            )}
            <button
              type="button"
              className="topnav-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {profile?.description && (
            <p className="drawer-desc">{profile.description}</p>
          )}
          {profile?.meta && profile.meta.length > 0 && (
            <ul className="drawer-meta">
              {profile.meta.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          )}

          <div className="topnav-links">
            {links.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
              >
                <span className="nav-icon">
                  <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                </span>
                {label}
                <ChevronRight
                  className="nav-chevron"
                  size={16}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>

          {(profile?.links?.length || profile?.cvPdf) && (
            <div className="drawer-foot">
              {profile?.links && profile.links.length > 0 && (
                <div className="drawer-links">
                  {profile.links.map((l) => (
                    <a key={l.href} href={l.href} {...externalProps(l.href)}>
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
              {profile?.cvPdf && (
                <a
                  className="btn btn-dark drawer-cv"
                  href={profile.cvPdf}
                  download={`${profile.name}-resume.pdf`}
                >
                  <Download size={17} aria-hidden="true" />
                  Download CV
                </a>
              )}
            </div>
          )}
        </div>

        <div className="topnav-actions">
          <ThemeToggle />
          <button
            type="button"
            className="topnav-toggle"
            aria-expanded={open}
            aria-controls="topnav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
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
