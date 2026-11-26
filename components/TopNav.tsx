
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
import ThemeToggle from "@/components/ThemeToggle";

type NavLink = { label: string; href: string; icon: LucideIcon };

// Kept so existing imports/usages of `Profile` don't break.
export type Profile = {
  name: string;
  title: string;
  photo?: string;
  description?: string;
  meta?: string[];
  links?: { label: string; href: string }[];
  cvPdf?: string;
};

// Home is always first, so it is always in the mobile list on every page.
const links: NavLink[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Projects", href: "/projects", icon: LayoutGrid },
  { label: "Education", href: "/education", icon: GraduationCap },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "CV", href: "/cv", icon: FileText },
];

export default function TopNav(_props: { profile?: Profile }) {
  const path = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? path === "/" : path === href || path.startsWith(href + "/");

  // close after navigating
  useEffect(() => {
    setOpen(false);
  }, [path]);

  // Escape closes the menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // close if resized to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 861px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <nav className="topnav" aria-label="Primary">
      <div className="topnav-inner">
        {/* Mobile bar, left: Home icon (always visible on every page) */}
        <Link
          href="/"
          className="topnav-home"
          aria-label="Home"
          aria-current={path === "/" ? "page" : undefined}
        >
          <Home size={21} strokeWidth={1.8} aria-hidden="true" />
        </Link>

        {/* Mobile: dropdown list (Home included) / Desktop: underline tabs */}
        <div id="topnav-links" className="topnav-links" data-open={open}>
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

        <div className="topnav-actions">
          <ThemeToggle />
          <button
            type="button"
            className="topnav-toggle"
            aria-expanded={open}
            aria-controls="topnav-links"
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