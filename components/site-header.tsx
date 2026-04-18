"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/theme-toggle";

export default function SiteHeader() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "team", "faqs", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--surface)]/95 backdrop-blur-xl border-b border-[var(--border)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5 lg:px-10">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-white font-bold">S</div>
          <div>
            <span className="text-xl font-semibold text-[var(--foreground)]">Straton Agency</span>
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">Chatting Solutions</p>
          </div>
        </div>

        <nav className="hidden items-center gap-0 md:flex bg-[var(--surface-alt)] rounded-full p-1 border border-[var(--border)]">
          {[
            { href: "/#home", label: "Home", id: "home" },
            { href: "/#about", label: "About", id: "about" },
            { href: "/#services", label: "Services", id: "services" },
            { href: "/#team", label: "Team", id: "team" },
            { href: "/#faqs", label: "FAQs", id: "faqs" },
            { href: "/#contact", label: "Contact", id: "contact" },
          ].map(({ href, label, id }) => (
            <Link
              key={id}
              href={href}
              className={`px-4 py-2 text-sm uppercase tracking-[0.24em] rounded-full transition-all ${
                activeSection === id
                  ? "bg-[var(--accent)] text-white shadow-sm"
                  : "text-[var(--foreground)] hover:text-[var(--accent)]"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="inline-flex items-center rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-soft)]"
          >
            Let's Talk
          </Link>
        </div>
      </div>
    </header>
  );
}
