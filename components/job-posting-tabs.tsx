"use client";

import { useState } from "react";

export interface JobPostingTab {
  id: string;
  label: string;
  headline: string;
  points: string[];
  note?: string;
}

interface JobPostingTabsProps {
  tabs: JobPostingTab[];
}

export default function JobPostingTabs({ tabs }: JobPostingTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id ?? "");
  const current = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  return (
    <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface-alt)] p-6 shadow-sm">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--muted)]">Join the team</p>
          <h3 className="mt-3 text-3xl font-semibold text-[var(--foreground)]">{current.headline}</h3>
        </div>
        <div className="flex flex-wrap gap-2 rounded-full bg-[var(--surface)] p-1 shadow-inner">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeTab === tab.id
                  ? "bg-[var(--accent)] text-white shadow-sm"
                  : "text-[var(--foreground)] hover:bg-[var(--surface)]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-5 text-[var(--muted)]">
        <div className="grid gap-4 md:grid-cols-[1fr_0.45fr]">
          <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--background)] p-5">
            <ul className="space-y-3 text-sm leading-7 text-[var(--foreground)]">
              {current.points.map((point, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          {current.note ? (
            <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5 text-sm leading-7">
              <p className="font-semibold text-[var(--foreground)]">Note</p>
              <p className="mt-3 text-[var(--muted)]">{current.note}</p>
            </div>
          ) : null}
        </div>

        <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-5 text-sm leading-7">
          <p className="font-semibold text-[var(--foreground)]">Ready to apply?</p>
          <p className="mt-2 text-[var(--muted)]">Complete the application and our team will guide you through the next steps.</p>
        </div>
      </div>
    </div>
  );
}
