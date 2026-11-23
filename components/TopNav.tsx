"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const icons: Record<string, string> = {
  Home: "M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10",
  About: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4 4-6 8-6s8 2 8 6",
  Experience: "M3 7h18v13H3zM9 7V4h6v3M3 13h18",
  Projects: "M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z",
  Education: "M2 9l10-5 10 5-10 5zM6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5",
  Contact: "M3 5h18v14H3zM3 6l9 7 9-7",
  CV: "M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7",
};

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Education", "/education"],
  ["Contact", "/contact"],
  ["CV", "/cv"],
];

export default function TopNav() {
  const path = usePathname();

  const active = (href: string) =>
    href === "/" ? path === "/" : path.startsWith(href);
  return (
    <nav className="topnav" aria-label="Primary">
      <div className="topnav-inner">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            aria-current={active(href) ? "page" : undefined}
          >
            <svg
              viewBox="0 0 24 24"
              width="17"
              height="17"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d={icons[label]} />
            </svg>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
