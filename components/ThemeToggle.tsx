"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";
const KEY = "theme";

/**
 * Default is ALWAYS light. Dark only after the visitor clicks the toggle
 * (saved in localStorage). The system dark-mode setting is ignored.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  // sync with what the inline script in layout.tsx already applied
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next: Theme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem(KEY, next);
    } catch {}
  };

  const label =
    theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme ? label : "Toggle color theme"}
      title={theme ? label : undefined}
    >
      <Sun className="theme-sun" size={19} strokeWidth={1.9} aria-hidden="true" />
      <Moon className="theme-moon" size={19} strokeWidth={1.9} aria-hidden="true" />
    </button>
  );
}