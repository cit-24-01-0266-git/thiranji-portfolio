
"use client";

import { useState } from "react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Work", href: "#work" },
  { name: "Certifications", href: "#certifications" },
  { name: "Interests", href: "#interests" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-nav backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-6 py-5"
      >
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-foreground"
          onClick={() => setIsOpen(false)}
        >
          TW<span className="text-accent">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden flex-wrap items-center gap-x-4 gap-y-2 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-secondary transition hover:text-accent"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            aria-label="Toggle dark and light mode"
            title="Toggle dark and light mode"
            onClick={() => {
              const theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
              document.documentElement.dataset.theme = theme;
              try { localStorage.setItem("portfolio-theme", theme); } catch { /* The toggle still works when storage is unavailable. */ }
            }}
            className="rounded-lg border border-line px-3 py-2 text-sm text-foreground transition hover:border-accent"
          >
            <span className="theme-light-option inline-flex items-center gap-2">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4m11.2 11.2L19 19M5 19l1.4-1.4M17.6 6.4 19 5" />
              </svg>
              <span className="hidden xl:inline">Light</span>
            </span>
            <span className="theme-dark-option items-center gap-2">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.5 14A8.5 8.5 0 0 1 10 3.5 8.5 8.5 0 1 0 20.5 14Z" />
              </svg>
              <span className="hidden xl:inline">Dark</span>
            </span>
          </button>
        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-line p-2 text-foreground lg:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="max-h-[70vh] overflow-y-auto border-t border-divider bg-surface px-6 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-secondary transition hover:bg-blue-500/10 hover:text-accent"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
