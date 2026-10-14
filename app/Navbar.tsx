
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1220]/95 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-6 py-5"
      >
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-white"
          onClick={() => setIsOpen(false)}
        >
          TW<span className="text-blue-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden flex-wrap items-center gap-x-4 gap-y-2 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-slate-300 transition hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-slate-700 p-2 text-white lg:hidden"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="max-h-[70vh] overflow-y-auto border-t border-slate-800 bg-[#101B2E] px-6 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-sm text-slate-300 transition hover:bg-blue-500/10 hover:text-blue-400"
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
